"use client";
import Image from "next/image";
import React, { useState } from "react";
import { RiMenu5Fill } from 'react-icons/ri'
import Logoimage from "../../asset/Logodfd.svg"
import Link from "next/link";

function Header() {
    return (
        <header className="fixed left-0 right-0 top-0 backdrop-blur-2xl z-[1000] md:px-10 px-3 shadow-md">
            <div className="flex items-center py-4 justify-between px-2">
                <Image src={Logoimage} alt="logoimaeg" height={100} width={100} className="h-10 w-fit" />
                {/* <div className="text-xl text-gray-500 font-semibold flex items-center md:gap-5 gap-3">
                    {/* <Menu />
                    <p>NECTAR_DEV</p> 
                </div> */}
                <Link href={"/"}><button className=" bg-gray-700 text-yellow-400 rounded-full px-4 text-lg">All Blog Posts</button></Link>
                {/* <button className=" bg-gray-700 text-yellow-400 rounded-full px-4 text-lg">Subscribe</button> */}
            </div>
        </header>
    );
}

export default Header;

function Menu() {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <>
            <button className="p-3 text-black bg-yellow-200 rounded-full flex items-center justify-centers" onClick={() => setIsOpen(!isOpen)}>
                <RiMenu5Fill />
            </button>
            <div className={isOpen ? "fixed top-0 bottom-0 right-0 left-0 h-screen backdrop-brightness-50 z-[2000]" : ''}>
                <div className={`fixed top-0 left-0 right-0  transition-transform duration-500 ${isOpen ? 'transform translate-y-0' : " transform -translate-y-full z-[3000]"}`}>
                    <div className=" h-96 bg-gray-800 rounded-b-2xl m-1">
                        <div className="h-80 flex items-center justify-center">
                            <div className="flex flex-col items-center gap-5">
                                <p className="text-3xl">join the community</p>
                                <p className="text-md">Dont miss the daily updates</p>
                                <button className="px-4 bg-gray-700 rounded-xl text-yellow-200">Subscribe</button>
                            </div>
                        </div>
                        <button className="bg-gray-700 px-4 py-1 rounded-lg mx-5" onClick={() => setIsOpen(!isOpen)}>close</button>
                    </div>
                </div>
            </div>
        </>
    )
}