import React from 'react';

const About = () => {
  return (
    <div className="flex flex-col">
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h1 className="text-3xl font-bold mb-4">About Us</h1>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              At Federal Polytechnic Kabo, we promote creativity, and prepare our graduates to become skilled professionals and leaders in various fields. Join us as we continue to shape the future of technical education and empower individuals to contribute meaningfully to society and the economy.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;