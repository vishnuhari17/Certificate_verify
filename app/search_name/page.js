"use client"
import Link from 'next/link';

import React, { useState } from 'react';

const Page = () => {
    const [name, setName] = useState("");
    return (
        <>
            <div className='bg-[#000000] h-screen w-screen flex items-center justify-cente flex-col max-w-full'>
                <div className="container bg-[#ffffff9f] rounded-3xl shadow-md relative w-[760px] max-w-full min-h-[480px] mt-28 overflow-y-auto">
                    <div className='form-container verify form-container flex items-center justify-center flex-col py-[40px] h-full absolute left-1/2 text-[#14213d]'>
                        <form onSubmit={(e) => {
                            e.preventDefault();
                        }}>
                            <h1 className='text-2xl font-extrabold tracking-wider leading-7 my-2.5 pl-20 mb-10'>Search by Name</h1>
                            <span className='pl-16 m-2 font-semibold'>Enter the name to be searched</span>
                            <input
                                className='my-6 ml-16 items-center text-center px-3 rounded-lg py-1 bg-[#e5e5e5]'
                                type='text'
                                placeholder='Name'
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                            <Link className='bg-[#000000c6] text-white p-2 px-4 m-5 rounded-md shadow-md uppercase cursor-pointer ml-32' href={`/viewbyname#${name}`}>Search</Link>
                        </form>
                    </div>
                    <div className='toggle-panel flex items-center justify-center flex-col absolute text-center py-[40px] h-full right-1/2 rounded-r-3xl bg-[#141415e3] text-[#e5e5e5]'>
                        <h1 className='text-2xl font-bold p-5'>Amigo!</h1>
                        <p className=''>See the list of certificates issued to a student by searching by their name</p>
                        <Link className='bg-[#e5e5e5] text-[#000000] p-2 px-4 m-5 rounded-md shadow-md uppercase cursor-pointer font-bold' href='/'>Verify Certificate</Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Page;
