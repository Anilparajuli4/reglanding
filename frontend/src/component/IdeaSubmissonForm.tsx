import React from 'react';
// import { CloudUpload } from 'lucide-react';

const IdeaSubmissionForm = () => {
  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <div className="flex justify-end space-x-2 mb-6">
        <button className="px-4 py-2 bg-purple-500 text-white rounded-full text-sm font-semibold">Contest</button>
        <button className="px-4 py-2 text-purple-500 rounded-full text-sm font-semibold">Learn More</button>
      </div>
      
      <h1 className="text-3xl font-bold text-center mb-2">Suggest Us New Ideas and Earn</h1>
      <h2 className="text-3xl font-bold text-center text-purple-500 mb-4">Up to $5000!</h2>
      <p className="text-center text-gray-600 mb-8">Your Ideas, Our Platform – Get Rewarded for Innovating!</p>
      
      <textarea 
        className="w-full p-3 border border-gray-300 rounded-lg mb-4" 
        rows={4}
        placeholder="Enter your idea here....."
      ></textarea>
      
      <div className="border-2 border-dashed border-purple-300 rounded-lg p-8 mb-4 text-center">
        {/* <CloudUpload className="mx-auto text-purple-500 mb-2" size={32} /> */}
        <p className="text-purple-500">Drag your file(s) or <span className="underline">browse</span></p>
      </div>
      
      <div className="flex mb-4">
        <input 
          type="text" 
          className="flex-grow p-2 border border-gray-300 rounded-l-lg" 
          placeholder="Add file URL"
        />
        <button className="px-4 py-2 bg-white border border-gray-300 rounded-r-lg">Upload</button>
      </div>
      
      <button className="w-full py-3 bg-purple-500 text-white rounded-lg font-semibold">
        Submit Now & Win Big
      </button>
    </div>
  );
};

export default IdeaSubmissionForm;