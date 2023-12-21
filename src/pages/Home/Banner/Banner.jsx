import banner from "../../../assets/banner.png"

const Banner = () => {
  return (
    <div className="flex md:flex-row flex-col-reverse items-center md:gap-16 gap-8">
        <div className="md:w-1/4 w-full space-y-8">
            <h1 className="md:text-5xl text-3xl font-medium space-y-3 uppercase">
            <p>Task</p>
            <p>Management</p>
            </h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis asperiores laborum eos maxime necessitatibus, iste magnam ab similique voluptate beatae veritatis vitae eveniet placeat aut, nostrum suscipit ea fuga officia?vd</p>
            <button className="uppercase bg-[#00A4B7] hover:bg-[#42939c] duration-300 px-5 py-3 rounded-full text-white">Explore More</button>
        </div>

        <div className="md:w-3/4 w-full"><img className="w-full" src={banner} alt="" /></div>
    </div>
  )
}

export default Banner