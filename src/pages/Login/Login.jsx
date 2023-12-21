import loginImg from "../../assets/login.png"
import { useContext, useState } from "react"
import { AuthContext } from "../../providers/AuthProvider"
import { toast } from "react-toastify"
import { useNavigate } from "react-router-dom"
const Login = () => {
  const navigate = useNavigate();
  const {user, loginWithGoogle, signInWithEmailPwd} = useContext(AuthContext)
  const [formData, setFormData] = useState({email:'', password:''});
  const hanldeInputChange = (e)=>{
    setFormData({...formData, [e.target.name]:e.target.value})
  }

  const handleSubmit = async(e)=>{
    e.preventDefault();
    console.log(formData)
    const {email, password} = formData;

    //Validate empty fields
    if(!email || !password){
      toast.warn("All fields are mandatory!")
      return;
    }

    try {
      const res = await signInWithEmailPwd(email, password)
      toast.success("Login success!", {autoClose:2000})
      navigate("/")
    } catch (error) {
      toast.error(error.message, {autoClose:2000})
    }
  }

  // Social Login 
  const hanldeLoginWithGoogle = async()=>{
    const res = await loginWithGoogle()
    toast.success("Successfully logged in", {autoClose:2000})
  }

  return (
    <div className="flex lg:flex-row flex-col gap-10 items-center">
      <div>
        <img className="w-full" src={loginImg} alt="" />
      </div>

      <div className="shrink-0 w-full max-w-sm shadow-2xl">
      <form className="card-body" onSubmit={handleSubmit}>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input onChange={hanldeInputChange} type="email" name="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input onChange={hanldeInputChange} type="password" name="password" placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn bg-[#00A4B7] hover:bg-[#2f6e75] text-white">Login</button>
        </div>
      </form>
       {/* Social Login System  */}
       <div className="form-control mb-5 max-w-[300px] mx-auto">
          <button onClick={hanldeLoginWithGoogle} className="btn hover:bg-[#00A4B7] border-[1px] border-[#00A4B7] text-[#00A4B7] hover:text-white">Login with Google</button>
      </div>
      </div>
    </div>
  )
}

export default Login