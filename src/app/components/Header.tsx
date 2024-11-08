"use client"
import React from 'react'
import { TiThMenu } from "react-icons/ti";
import { MdCancel } from "react-icons/md";
import Link from 'next/link';
import { useState } from 'react';



const Header = () => {
const [menu, setMenu] = useState(false);
function openmenu(){
  setMenu(!menu)
}
function closeii(){
  setMenu(false)
}
  return (
    <div>
       <header>
        <div className="name"><h2>AREEBIX.INFO</h2></div>
        <nav>
            <ul>
                <Link href={"/"}><li>HOME</li></Link>
                <Link href={"/About"}><li>ABOUT</li></Link>
                <Link href={"/Education"}><li>EDUCATION</li></Link>
                <Link href={"/Projects"}><li>PROJECTS</li></Link>
            </ul>
            <div className="openicon">
            <TiThMenu onClick={openmenu} id='open'/>
        </div>
        </nav>
        <div className={`${menu?"box2":"box"}`} id="boxx">
            <div className="items inneritem"><MdCancel onClick={closeii} id='close'/></div>
            <div onClick={closeii} className="items"><Link href={"/"}>HOME</Link></div>
            <div onClick={closeii} className="items"><Link href={"/About"}>ABOUT ME</Link></div>
            <div onClick={closeii} className="items"><Link href={"/Education"}>EDUCATION</Link></div>
            <div onClick={closeii} className="items"><Link href={"/Projects"}>PROJECTS</Link></div>
        </div>
    </header>
    </div>
  )
}

export default Header
