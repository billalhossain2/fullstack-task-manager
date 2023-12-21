// About.js

import React from 'react';

const About = () => {
  return (
    <div className="bg-[#00a5b715] min-h-screen p-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">About TaskR</h1>
        <p className="text-gray-700 mb-4">
          TaskFlow is your go-to solution for efficient task management. Designed with simplicity and
          collaboration in mind, we empower individuals and teams to stay organized and boost
          productivity.
        </p>
        <p className="text-gray-700 mb-4">
          Our user-friendly interface makes it easy to create, track, and complete tasks. With
          powerful features, real-time collaboration, and a seamless user experience, TaskFlow
          transforms the way you work.
        </p>
        <p className="text-gray-700 mb-4">
          Whether you're a freelancer, team lead, or project manager, TaskFlow adapts to your needs.
          Sign up today and experience the future of task management.
        </p>
        <p className="text-gray-700">
          Built with ❤️ using React and Tailwind CSS.
        </p>
      </div>
    </div>
  );
};

export default About;
