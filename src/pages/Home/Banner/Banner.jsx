import { Link } from "react-router-dom";
import banner from "../../../assets/banner.png";

const Banner = () => {
  return (
    <div className="flex md:flex-row flex-col-reverse items-center md:gap-16 gap-8">
      <div className="md:w-1/4 w-full space-y-8">
        <h1 className="md:text-5xl text-3xl font-medium space-y-3 uppercase">
          <p>Task</p>
          <p>Management</p>
        </h1>
        <p>
          "Welcome to TaskR: Your Ultimate Task Management Solution!
          Streamline your workflow, boost productivity, and stay organized
          effortlessly. Experience seamless task tracking to elevate your
          productivity"
        </p>
        <div>
        <Link to="/login">
        <button className="uppercase bg-[#00A4B7] hover:bg-[#42939c] duration-300 px-5 py-3 rounded-full text-white">
          Explore More
        </button>
        </Link>
        </div>
      </div>

      <div className="md:w-3/4 w-full">
        <img className="w-full" src={banner} alt="" />
      </div>
    </div>
  );
};

export default Banner;
