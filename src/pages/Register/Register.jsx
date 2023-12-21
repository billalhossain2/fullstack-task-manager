import registrationImg from "../../assets/registration.png"

const Register = () => {
  return (
    <div className="flex lg:flex-row flex-col gap-10 items-center">
      <div>
        <img className="w-full" src={registrationImg} alt="" />
      </div>

      <div className="shrink-0 w-full max-w-sm shadow-2xl">
      <form className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" placeholder="name" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo</span>
          </label>
          <input type="file" className="file-input file-input-bordered file-input-info w-full max-w-xs" />
        </div>


        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn bg-[#00A4B7] hover:bg-[#2f6e75] text-white">Login</button>
        </div>

        <div className="form-control mt-6">
          <button className="btn hover:bg-[#00A4B7] border-[1px] border-[#00A4B7] text-[#00A4B7] hover:text-white">Login with Google</button>
        </div>
      </form>
      </div>
    </div>
  )
}

export default Register