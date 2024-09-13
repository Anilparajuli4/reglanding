import React from "react";

function Review() {
  const testimonials = [
    {
      name: "Alex R",
      role: "Video Creator",
      imageUrl: "https://plus.unsplash.com/premium_photo-1689551670902-19b441a6afde?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fHww", // Placeholder image
      feedback: "I'm eager to see how Regaarder’s AI-powered Smart Editor will transform my workflow. If it lives up to the promise, it could be a game-changer for content creators!",
    },
    {
      name: "Jamie L",
      role: "Viewer",
      imageUrl: "https://plus.unsplash.com/premium_photo-1688891564708-9b2247085923?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fHww", // Placeholder image
      feedback: "The concept of AI-curated content on Regaarder sounds amazing. I’m excited to experience a viewing experience that’s truly personalized and aligned with my preferences.",
    },
    {
      name: "Maria S",
      role: "Emerging Creator",
      imageUrl: "https://plus.unsplash.com/premium_photo-1669879825881-6d4e4bde67d5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fHww", // Placeholder image
      feedback: "As an emerging creator, the potential for direct sponsorship opportunities with Regaarder is incredibly exciting. It could be a pivotal moment for channels like mine.",
    },
  ];

  return (
    <div className="bg-white py-12 px-4 sm:px-6 lg:px-8 mt-24">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-center text-3xl font-extrabold text-gray-900">
          Hear from Our Excited Beta Applicants
        </h2>
        <p className="mt-4 text-center text-lg text-gray-600">
          With lots of unique blocks, you can easily build a page without coding. Build your next landing page.
        </p>

        <div className="mt-10 grid gap-8 lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="p-6 bg-gray-50 shadow-lg rounded-lg">
              <div className="flex items-center space-x-4">
                <img
                  className="w-12 h-12 rounded-full"
                  src={testimonial.imageUrl}
                  alt={testimonial.name}
                />
                <div>
                  <p className="text-xl font-bold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
              <p className="mt-4 text-gray-700 text-lg">{testimonial.feedback}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Review;