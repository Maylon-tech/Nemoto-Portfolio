import { CheckIcon } from "@heroicons/react/16/solid"


const AboutMe = () => {
  return (
    <div className="mt-[-3rem] bg-black pb-[3rem]]">
      <div className="w-[80%] pt-5rem sm:pt-[7rem] md:pt-[10rem] mx-auto grid items-center grid-cols-1 lg:grid-cols-2 gap-[2rem]">
        <div>
            <p className="heading__mini">About Me</p>
            <h1 className="heading__primary">
              Professional 
              <span className="text-yellow-400"> Websites</span> for your business
            </h1>
            <p className="text-[15px] mt-[1.3rem] text-white opacity-75">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam vitae ducimus voluptatibus deleniti, architecto minima quod asperiores earum maxime nostrum voluptate. Dolorem impedit voluptatum quibusdam maiores adipisci atque quaerat.
            </p>

            
        </div>

        <div className="lg:ml-auto w-[500px] h-[200px]">

            <div className="mt-[2rem] space-y-3">
              <div className="flex items-center space-x-4">
                <CheckIcon className="w-[2rem] h-[2rem] text-yellow-400" />
                <p className="text-[18px] text-white">Frontend Development</p>
              </div>
              <div className="flex items-center space-x-4">
                <CheckIcon className="w-[2rem] h-[2rem] text-yellow-400" />
                <p className="text-[18px] text-white">Backend Development</p>
              </div>
              {/* <div className="flex items-center space-x-4">
                <CheckIcon className="w-[2rem] h-[2rem] text-yellow-400" />
                <p className="text-[18px] text-white">Mobile Development</p>
              </div> */}
              <div className="flex items-center space-x-4">
                <CheckIcon className="w-[2rem] h-[2rem] text-yellow-400" />
                <p className="text-[18px] text-white">MERN Development</p>
              </div>
            </div>
          {/* <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-[2rem]">
            <div className="p-6 text-center bg-yellow-500">
              <p className="text-[50px] text-black font-bold">2</p>
              <p className="text-[20px] text-black font-600">
                Year Experience
              </p>
            </div>
            <div className="p-6 text-center bg-yellow-500">
              <p className="text-[50px] text-black font-bold">120+</p>
              <p className="text-[20px] text-black font-600">
                Happy Client
              </p>
            </div>
            <div className="p-6 text-center bg-yellow-500">
              <p className="text-[50px] text-black font-bold">160+</p>
              <p className="text-[20px] text-black font-600">
                Projects Done
              </p>
            </div>
            <div className="p-6 text-center bg-yellow-500">
              <p className="text-[50px] text-black font-bold">3+</p>
              <p className="text-[20px] text-black font-600">
                Award Win
              </p>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  )
}

export default AboutMe
