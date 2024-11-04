import Link from "next/link";
import React, {useRef} from "react";
import {useInView} from 'framer-motion'
import { useComponentTimeTracker } from "@/lib/componentTracker";

interface Props {
  setTotalPageTime?:React.Dispatch<React.SetStateAction<{name:string,
    time:number}[]>>
}

const Herobanner:React.FC<Props> = ({
  setTotalPageTime
}) => {

  const ref = useRef(null)



const inView = useInView(ref,{
  once:false
})
const {totalTimeInView} = useComponentTimeTracker({inView,id:'restaurant-herobanner',
setTotalPageTime:setTotalPageTime,
pageTracker:false})



    return (
        <section
        ref={ref}
         className="w-screen md:h-screen bg-black flex justify-center items-center flex-col"
        style={{
            background: "radial-gradient(circle, #001F3F 40%, black 100%)"
        }}>
            <h1 className="text-4xl px-4  mb-4 mt-3
        sm:text-5xl md:text-6xl 
        font-semibold bg-gradient-to-b from-white to-gray-400 bg-clip-text text-transparent
       
          font-semibold text-center mb-4 ">Revolutionize Your
          <br/>
                <span
                className="animate-gradient">
                    Restaurant Experience
                </span>
            </h1>
            <p className="text-white w-[80%] mx-auto ">Transform your restaurant with powerful tools to simplify orders, increase sales, and grow your business faster than ever.</p>
            <section className=" mt-4 flex justify-center items-center">
                <Link
                href='lets-work'>

  
            <button className="bg-[#002D5F] text-white rounded-2xl
                p-4 mr-4 hover:bg-[#003d7a]">
    Get yours now
</button>
</Link>
<Link
href='https://focusflowrestaurant.vercel.app'>


<button className="bg-[#f0f4f8] text-[#002D5F] rounded-2xl
                p-3 ml-4 border border-[#002D5F] hover:bg-[#e5f1fb]">
    Make a demo order
</button>
</Link>

            </section>
            <section className="flex flex-col md:flex-row md:w-[90%] mx-auto mt-12 md:justify-evenly">
  <div className="bg-[#003d7a] rounded-xl w-[75vw] mx-auto py-4 mb-8 md:mr-3">
  <h2 className="text-left ml-8 text-xl font-semibold bg-gradient-to-b from-gray-300 to-gray-200 bg-clip-text text-transparent ">
  Fast and Easy Setup
</h2>
<p className="ml-8 text-left mt-4 text-gray-300">
  Get your restaurant online with minimal effort. Our platform is designed for quick setup, so you can start accepting orders in no time.
</p>

  </div>
  <div className="bg-[#003d7a] rounded-xl w-[75vw] mx-auto py-4 mb-8 md:mr-3">
    <h2 className="text-left ml-8 text-xl font-semibold bg-gradient-to-b from-gray-300 to-gray-200 bg-clip-text text-transparent ">
      Boost Orders
    </h2>
    <p className="ml-8 text-left mt-4 text-gray-300">
      Increase your order volume with an intuitive system that makes it easier for customers to order online.
    </p>
  </div>
  <div className="bg-[#003d7a] rounded-xl w-[75vw] mx-auto py-4 mb-8">
    <h2 className="text-left ml-8 text-xl font-semibold bg-gradient-to-b from-gray-300 to-gray-200 bg-clip-text text-transparent ">
      Higher Earnings
    </h2>
    <p className="ml-8 text-left mt-4 text-gray-300">
      Keep more of your revenue by cutting down on third-party platform fees, so you save on every order.
    </p>
  </div>
</section>

        </section>
    )
}

export default Herobanner