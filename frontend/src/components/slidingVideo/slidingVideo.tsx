import React, { useState } from "react";


interface VideoProps {
    src:string,
    description?:string
}


const SlidingVideo:React.FC<VideoProps> = ({
    src, description
}) => {

    const [slideComplete, setSlideComplete] = useState(false)

    return (
        <>
        </>
    )
}