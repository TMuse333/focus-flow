import React from 'react'


interface PriceBoxesProps {
  boxes:{
    src:string,
    alt:string,
    price:string,
    
  }[]
}

interface PriceBoxProps {
    src:string,
    alt:string,
    price:string,

}

const PriceBoxElement:React.FC<PriceBoxProps> = (
    {src,alt,price}
) => {
    return (
        <div className='
        w-[30vw] max-w-[400px] '>
            <img src={src}
            alt={alt} className='w-[80%]
            mx-auto object-contain rounded-xl
            mt-4 mb-3 max-w-[200px]
            '
            />
            <p className='text-center
            mb-4'>
                Amount taken:&nbsp;{price}</p>
        </div>
    )
}

  



const PriceBoxes:React.FC<PriceBoxesProps>
= ({boxes}) => {

    return (
        <section className='grid grid-cols-3 max-w-[1200px]
        mx-auto
        '>
            {boxes.map((box, index)=> (
        
                <PriceBoxElement
              key={index}
                {...box}
                />
            
            ))}
        </section>
    )
}

export default PriceBoxes