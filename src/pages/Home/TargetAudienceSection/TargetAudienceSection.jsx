const TargetAudienceSection = () => {
  return (
    <section className="bg-[#00a5b715] py-16 md:px-5 px-3 mt-32">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">Who Can Benefit?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Developer Card */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Developers</h3>
            <p className="text-gray-600">
              Streamline your project management, organize tasks, and collaborate with your team effortlessly.
            </p>
          </div>

          {/* Corporate Professional Card */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Corporate Professionals</h3>
            <p className="text-gray-600">
              Enhance productivity, manage projects efficiently, and keep your team aligned towards common goals.
            </p>
          </div>

          {/* Banker Card */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Bankers</h3>
            <p className="text-gray-600">
              Stay organized, meet deadlines, and coordinate tasks seamlessly in the fast-paced banking environment.
            </p>
          </div>

          {/* Add more cards for different target audiences as needed */}

        </div>
      </div>
    </section>
  );
};

export default TargetAudienceSection;
