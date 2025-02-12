import { TypeAnimation } from 'react-type-animation'



const TypewriteEffect = () => {
  return (
    <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'A React Developer',
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        'A NextJS Developer',
        1000,
        // 'A Mobile Developer',
        // 1000,
        // 'A UI/UX Designer',
        // 1000
      ]}
      wrapper="span"
      speed={50}
      className="xl:text-[50px] lg:text-[40px] sm:text-[35px] text-[25px] text-white font-bold"
      repeat={Infinity}
    />
  )
}

export default TypewriteEffect
