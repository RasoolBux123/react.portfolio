
import aboutImg from "../assets/about.jpg";
import { ABOUT_TEXT } from "../constants";
import {delay, motion } from "framer-motion";
     
const About =() => {
  return (
    <div className="border-b  border-neutral-900 pb-4">
        <h1 className="my-20 text-center text-4xl">About <span className="text-neutral-500">
            
          Me  </span> </h1>
          <div className="flex flex-wrap"> 
            <div className="w-full lg:w-1/2 lg:p-8">
             <div className=" flex  justify-center  ">
              <img src="" alt="about" className="rounded-2xl"  />

                <div className="w-full lg:w-1/2"> 
                <div className="flex justify-center lg:justify-start">

                    <motion.p  initial ={{x: -100, opacity:0}}
               animate={{x: 0, opacity: 1}}
               transition  ={{duration: 0.5, delay: 0.5}} className="my-2 max-w-xl py-6 font-light tracking-tighter">{ABOUT_TEXT}</motion.p>
                </div>

                </div>
             </div>
            </div>
          </div>
    </div>
  )
}

export default About
