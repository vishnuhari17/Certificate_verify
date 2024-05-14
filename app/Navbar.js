"use client"

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

import {
    AiOutlineHome,
    AiOutlineFundProjectionScreen,
    AiOutlineUser,
    AiOutlineDownload,
} from "react-icons/ai";

import logo from "./logo.png";

function NavBar() {
    const [expand, setExpand] = useState(false);
    const [navColour, setNavColour] = useState(false);

    useEffect(() => {
        const scrollHandler = () => {
            if (window.scrollY >= 20) {
                setNavColour(true);
            } else {
                setNavColour(false);
            }
        };

        window.addEventListener("scroll", scrollHandler);

        return () => {
            window.removeEventListener("scroll", scrollHandler);
        };
    }, []);

    const toggleExpand = () => {
        setExpand(!expand);
    };

    return (
        <div
            className={`fixed w-full z-10 top-0 left-0 ${navColour ? "bg-black shadow-md" : "bg-transparent"
                }`}
        >
            <div className="container mx-auto flex justify-between items-center p-4">
                <Link href="/">
                    <Image
                        src={logo}
                        className="relative w-auto h-16"
                        alt=""
                        priority
                    />
                    
                </Link>
                <div className="md:hidden" onClick={toggleExpand}>
                    <div className="space-y-1 cursor-pointer">
                        <span className="block w-6 h-0.5 bg-black" />
                        <span className="block w-6 h-0.5 bg-black" />
                        <span className="block w-6 h-0.5 bg-black" />
                    </div>
                </div>
                <div className={`md:flex items-center text-xl`}>
                    <ul className="flex space-x-4">
                        <li>
                            <Link href="/" onClick={() => setExpand(false)}>
                                <p className="flex items-center text-white hover:bg-white hover:text-black hover:rounded-md hover:shadow-md p-3 hover:font-medium">
                                    <AiOutlineHome className="mr-1" /> Home
                                </p>
                            </Link>
                        </li>
                        <li>
                            <Link href="/about" onClick={() => setExpand(false)}>
                                <p className="flex items-center text-white hover:bg-white hover:text-black hover:rounded-md hover:shadow-md p-3 hover:font-medium">
                                    <AiOutlineUser className="mr-1" /> About
                                </p>
                            </Link>
                        </li>
                        <li>
                            <Link href="/testcertificates" onClick={() => setExpand(false)}>
                                <p className="flex items-center text-white hover:bg-white hover:text-black hover:rounded-md hover:shadow-md p-3 hover:font-medium">
                                    <AiOutlineDownload className="mr-1" /> Test Certificates
                                </p>
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="https://github.com/vishnuhari17/Certificate_verify.git"
                                target="_blank"
                                rel="noreferrer"
                                className="flex items-center text-white"
                            ><p className="flex items-center text-white hover:bg-white hover:text-black hover:rounded-md hover:shadow-md p-3 hover:font-medium">
                                    <AiOutlineFundProjectionScreen className="mr-1" /> GitHub
                                </p></Link>

                        </li>
                    </ul>
                </div>
            </div >
        </div >
    );
}

export default NavBar;
