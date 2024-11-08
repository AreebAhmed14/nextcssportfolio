import React from 'react'
import Image from 'next/image'
const Hero = () => {
  return (
    <div>
       <div className="main">
        <div className="container">
            <div className="text">
                <h1>MUHAMMAD AREEB</h1>
                <h1>WEB DESIGNER</h1>
                <h1 className="long">GEN AI STUDENT</h1>
                <a href="mycv.pdf" target="_blank"><button>DOWNLOAD CV</button> </a>
            </div>
        </div>
        <div className="image">
            <Image src={"/static/img2.jpg"} alt='' width={500} height={500}></Image>
        </div>
    </div>
    </div>
  )
}

export default Hero
