const FAQS = () => {
  return (
    <div className="bg-[#00a5b715] min-h-screen p-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Frequently Asked Questions</h1>

        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-4">1. What is TaskR?</h2>
          <p className="text-gray-700">
            TaskR is a powerful task management solution designed to help individuals and teams
            stay organized and boost productivity.
          </p>
        </div>

        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-4">2. How do I sign up?</h2>
          <p className="text-gray-700">
            Signing up is easy! Click on the "Sign Up" button on the homepage and follow the
            instructions to create your TaskR account.
          </p>
        </div>

        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-4">3. Is TaskR free to use?</h2>
          <p className="text-gray-700">
            Yes, TaskR offers a free plan with essential features. For advanced capabilities,
            check out our premium plans.
          </p>
        </div>

        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-4">4. Can I collaborate with a team?</h2>
          <p className="text-gray-700">
            Absolutely! TaskR supports real-time collaboration, allowing you to work seamlessly
            with your team members.
          </p>
        </div>

        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-4">5. How secure is TaskR?</h2>
          <p className="text-gray-700">
            Your data is our priority. TaskR employs robust security measures to ensure the
            confidentiality and integrity of your information.
          </p>
        </div>

        <p className="text-gray-700">
          If you have more questions or need assistance, feel free to contact our support team at{' '}
          <span className="text-gray-900">billal.webdev@gmail.com</span>.
        </p>
      </div>
    </div>
  );
};

export default FAQS;
