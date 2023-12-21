import { useContext, useState } from "react";
import registrationImg from "../../assets/registration.png";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../providers/AuthProvider";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
const Register = () => {
  const navigate = useNavigate()
  const {user, registerWithEmailPwd, updateUserProfile, logOutUser} = useContext(AuthContext);
  const [error, setError] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    imageUrl: "",
    password: "",
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const hanldeSubmit = async(e) => {
    e.preventDefault();
    setError("");
    const {name, email, password, imageUrl} = formData;

    // validate password 
    if(!(/[a-z]/).test(password)){
      return setError("Your password should contain at least one lower case letter");
    }else if(!(/[A-Z]/).test(password)){
      return setError("Your password should contain at least one upper case letter");
    }if(!(/[0-9]/).test(password)){
      return setError("Your password should contain at least one numeric digit");
    }if(!(/[*@#_]/).test(password)){
      return setError("Your password should contain at least one special character(*, @, #, _)");
    }if(password.length < 6){
      return setError("Your password should be six characters or longer");
    }else if(!name || !email || !imageUrl){
      return setError("All fields are mandatory!")
    }else{
      setError("")
    }
// Password: billHossain*76
    console.log(formData);
    try {
    const registerRes = await registerWithEmailPwd(email, password);
    const profileUpdateRes = await updateUserProfile(name, imageUrl)
    const logOutRes = await logOutUser();
    toast.success("Registration was successfull", {autoClose:2000})
    navigate("/login");
    } catch (error) {
      console.log(error)
      toast.error(error.message, {autoClose:2000})
    }
  };

  return (
    <div className="flex lg:flex-row flex-col gap-10 items-center">
      <div>
        <img className="w-full" src={registrationImg} alt="" />
      </div>

      <div className="shrink-0 w-full max-w-sm shadow-2xl">
        <form className="card-body" onSubmit={hanldeSubmit}>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              onChange={handleInputChange}
              type="text"
              name="name"
              placeholder="name"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo</span>
            </label>
            <input
              onChange={handleInputChange}
              type="text"
              name="imageUrl"
              className="file-input file-input-bordered file-input-info w-full max-w-xs"
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              onChange={handleInputChange}
              type="email"
              name="email"
              placeholder="email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              onChange={handleInputChange}
              type="password"
              name="password"
              placeholder="password"
              className="input input-bordered"
              required
            />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn bg-[#00A4B7] hover:bg-[#2f6e75] text-white">
              Login
            </button>
          </div>
        </form>
        <p className="text-red-500 px-3 text-center pb-5">
          {error}
        </p>
      </div>
    </div>
  );
};

export default Register;
