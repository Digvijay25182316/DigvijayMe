"use client";
import React, { useState } from "react";

function Header() {
    return (
        <header className="fixed left-0 right-0 top-0 backdrop-blur-2xl z-[1000]">
            <div className="flex items-center py-4 justify-between px-2">
                <div className="text-xl text-gray-500 font-semibold flex items-center gap-1">
                    <Menu />
                    <p>NECTAR_DEV</p>
                </div>
                <button className=" bg-gray-700 text-yellow-400 rounded-full px-4 text-lg">Subscribe</button>
            </div>
        </header>
    );
}

export default Header;

function Menu() {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <>
            <button className="pt-1.5 pb-2 px-[7px] bg-yellow-200 rounded-full flex items-center justify-centers" onClick={() => setIsOpen(!isOpen)}>
                <i className="rounded-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" className="text-black fill-current flex flex-col items-center">
                        <rect x="9" y="9" width="6" height="0.7" rx="1" ry="1" />
                        <rect x="7" y="12.8" width="10" height="1.5" rx="1" ry="1" />
                        <rect x="9" y="18" width="6" height="0.7" rx="1" ry="1" />
                    </svg>
                </i>
            </button>
            <div className={isOpen ? "fixed top-0 bottom-0 right-0 left-0 h-screen backdrop-brightness-50 z-[2000]" : ''}>
                <div className={`fixed top-0 left-0 right-0  transition-transform duration-500 ${isOpen ? 'transform translate-y-0' : " transform -translate-y-full"}`}>
                    <div className=" h-96 bg-gray-800 rounded-b-2xl m-1">
                        <div className="h-80"></div>
                        <button className="bg-gray-700 px-4 py-1 rounded-lg" onClick={() => setIsOpen(!isOpen)}>Close</button>
                    </div>
                </div>
            </div>
        </>
    )
}