const nodemailer = require("nodemailer");
const prisma = require("../prisma/index");
const Mailgen = require("mailgen");

const SubscribeController = async (req, res) => {
  try {
    const { name, email } = req.body;

    if (!name || !email) {
      return res.status(400).json({ msg: "All fields are required." });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ msg: "Invalid email format." });
    }

    const existingSubscriber = await prisma.subscribers.findUnique({
      where: { email },
    });
    if (existingSubscriber) {
      return res.status(400).json({ msg: "Email is already subscribed." });
    }

    const subscriber = await prisma.subscribers.create({
      data: { name, email },
    });

    let config = {
      service: "gmail",
      auth: {
        user: process.env.NODEJS_GMAIL_APP_USER,
        pass: process.env.NODEJS_GMAIL_APP_PASSWORD,
      },
    };

    let transporter = nodemailer.createTransport(config);

    let MailGenerator = new Mailgen({
      theme: "default",
      product: {
        name: "Regaarder",
        link: "https://www.regaarder.com/",
      },
    });

    let response = {
      body: {
        name: req.body.name,
        intro: "Welcome to Regaarder! We're very excited to have you on board.",
        action: {
          instructions: "To get started with Regaarder, please click here:",
          button: {
            color: "#22BC66",
            text: "Get Started",
            link: "https://www.regaarder.com/",
          },
        },
      },
    };

    let mail = MailGenerator.generate(response);

    let message = {
      from: process.env.NODEJS_GMAIL_APP_USER,
      to: req.body.email,
      subject: "Welcome To Regaarder!",
      html: mail,
    };

    transporter.sendMail(message).then((info) => {
      return res.status(200).json({
        msg: "Subscription successful! Email sent.",
        messageId: info.messageId,
      });
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "Server error." });
  }
};

module.exports = SubscribeController;
