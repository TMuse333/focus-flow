import Link from "next/link";
import React from "react";

interface Props  {
  h1:string,
  h2Color:string
  h2:string,
  pTag:string,
  boxData:{
    title:string,
    description:string
  }[]
}



const Herobanner:React.FC<Props> = ({
  h1,h2Color,h2,pTag,boxData
}) => {

    return (
        <section className="w-screen md:h-screen bg-black flex justify-center items-center flex-col"
        style={{
            background: "radial-gradient(circle, #00759F -15%, black 100%)"
        }}>
           <h1 className="text-sm px-4 sm:text-md mb-4 mt-8 sm:text-md md:text-lg font-semibold text-center mb-4 animate-gradient">
          {h1}
        </h1>
            <h1 className="text-4xl px-4  mb-4 mt-3
        sm:text-5xl md:text-6xl 
        font-semibold bg-gradient-to-b from-white to-gray-400 bg-clip-text text-transparent
       
          font-semibold text-center mb-4 ">{h2}
          <br/>
                <span
                className="animate-gradient">
                    {h2Color}
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

  {boxData.map((box, index) => (
    <div className="bg-[#00759F] border border-gray-200 rounded-xl w-[75vw] mx-auto py-4 mb-8 md:mr-3"
    key={index}>
    <h2 className="text-left ml-8 text-xl font-semibold bg-gradient-to-b from-gray-300 to-gray-200 bg-clip-text text-transparent ">
      {box.title}
    </h2>
    <p className="ml-8 text-left mt-4 text-gray-300">
     {box.description}
    </p>
  </div>
  ))}

</section>

        </section>
    )
}

export default Herobanner