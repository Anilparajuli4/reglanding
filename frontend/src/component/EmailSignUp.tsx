import  React, { useState } from 'react';

const EmailSignup = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e:React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    // Here you would typically handle the form submission
    console.log('Email submitted:', email);
    // Reset the form
    setEmail('');
  };

  return (
    <div className="bg-[#C84BF4] text-white p-12 flex flex-col items-center mt-24">
      <h1 className="md:text-4xl text-lg font-bold mb-4">Get latest updates</h1>
      <p className="text-center mb-6 max-w-5xl md:text-[16px] text-[8px]">
        Stay in the Loop on Regaarder's Latest Innovations.<br/> Sign up to receive notifications on the beta release, crowdfunding, and launch day rewards. Don't miss out on special launch offers and updates!
      </p>
      <form onSubmit={handleSubmit} className="w-full max-w-md mt-5">
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full md:p-3 p-2 mb-4 rounded text-black"
          required
        />
        <button
          type="submit"
          className="w-full bg-white text-black md:p-3 p-2 text-[12px] md:text-[16px] rounded font-bold hover:bg-gray-100 transition-colors"
        >
          Subscribe
        </button>
      </form>
      <p className="mt-4 text-[6px] md:text-sm">
        We'll never share your details with third parties.
      </p>
      <p className="text-[6px] md:text-sm">
        View our Privacy Policy for more info.
      </p>
    </div>
  );
};

export default EmailSignup;