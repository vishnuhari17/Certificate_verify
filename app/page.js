"use client"
import Link from 'next/link';
import React, { useState } from 'react';

const Page = () => {
    const [uniquecode, setUniqueCode] = useState("")
    return (
        <>
            <div className='bg-[#000000] h-screen w-screen flex items-center justify-cente flex-col max-w-full '>
                <div className="container bg-[#bbb6b6c9] rounded-3xl shadow-md relative w-[760px] max-w-full min-h-[480px] mt-28 overflow-y-auto">
                    <div className='form-container verify form-container flex items-center justify-center flex-col py-[40px] h-full absolute w-1/2 text-black'>
                        <form onSubmit={(e) => {
                            e.preventDefault();
                            console.log(uniquecode);
                            
                        }}>
                            <h1 className='text-2xl font-extrabold tracking-widest leading-7 my-2.5 pl-16 mx-1'>Verify Certificate</h1>
                            <span className='pl-20 m-2 font-semibold mx-4'>Please enter The code</span>
                            <input
                                className='my-6 ml-10 items-center text-center rounded-lg bg-[#e5e5e5] w-3/4 p-2'
                                type='text'
                                placeholder='Unique Code'
                                value={uniquecode}
                                onChange={(e) => setUniqueCode(e.target.value)}
                            />
                            <Link className='bg-[#000000c6] text-white p-2 px-4 m-5 rounded-md shadow-md uppercase cursor-pointer ml-32' href={`/verifyresults#${uniquecode}`}>Verify</Link>
                        </form>
                    </div>
                    <div className='toggle-panel flex items-center justify-center flex-col absolute text-center py-[40px] h-full left-1/2 rounded-l-3xl bg-[#141415e3] text-[#e5e5e5]'>
                        <h1 className='text-2xl font-bold p-5'>Hey There!</h1>
                        <p className=''>Verify the authenticity of the certificate by entering the unique code in it here.</p>
                        <Link className='bg-[#e5e5e5] text-[#000000] p-2 px-4 m-5 rounded-md shadow-md uppercase cursor-pointer font-bold' href='/search_name'>Search by Name</Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Page;
