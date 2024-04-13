"use client"
import React from 'react'
import { useState } from 'react'

const page = () => {
    const [uniquecode, setuniquecode] = useState("")
    const [name, setname] = useState("")
    return (
        <>
            <div className=" border-4 border-solid p-9 m-9 rounded-3xl bg-black border-gray-400">
                <div className=" border-2 border-solid p-9 border-white m-9 rounded-3xl bak">
                    <form onSubmit={(e) => {
                        e.preventDefault();
                        console.log(uniquecode)
                        fetch('http://localhost:3000/verify-certificate', {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify({ unique_code: uniquecode })
                        })
                            .then(response => response.json())
                            .then(data => {
                                if (data.verified) {
                                    const certificateDetails = data.certificateDetails;
                                    alert("Certificate found!")
                                    // // Redirect to certificate-details.html page and pass certificate details as URL parameter
                                    // window.location.href = `certificate-details.html?certificate=${encodeURIComponent(JSON.stringify(certificateDetails))}`;

                                } else {
                                    alert('Certificate Not Found');
                                }
                            })
                            .catch(error => {
                                console.error('Error:', error);
                            });
                    }}>
                        <h1 className='bg-black text-white text-xl p-4 font-bold text-center m-2'>
                            Verify Certificate
                        </h1>
                        <a className='font-bold flex m-9 bg-white'>Please Enter The Code </a>
                        <input
                            type='text'
                            className='border-2 border-black focus:border-blue p-5 m-8 rounded-lg flex'
                            placeholder='Unique Code'
                            value={uniquecode}
                            onChange={(e) =>
                                setuniquecode(e.target.value)
                            }
                        />
                        <button className='bg-black text-white p-2 flex m-8 rounded-l text-2xl'>Verify</button>
                    </form>
                </div>


                <div className=" border-2 border-solid p-9 border-black m-9 rounded-3xl bak">

                    <form onSubmit={(e) => {
                        e.preventDefault();
                        console.log(name)
                        fetch('http://localhost:3000/search-by-name', {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify({ name: name })
                        })
                            .then(response => response.json())
                            .then(data => {
                                if (data.foundCertificates.length > 0) {
                                    alert('Certificates found')
                                    // // Redirect to search-results.html page and pass search results as URL parameter
                                    // window.location.href = `search-results.html?results=${encodeURIComponent(JSON.stringify(data.foundCertificates))}`;
                                } else {
                                    alert('No certificates found for the provided name');
                                }
                            })
                            .catch(error => {
                                console.error('Error:', error);
                            });
                    }}>
                        <h1 className='bg-black text-white text-9xl p-5 font-bold text-center m-5'>
                            Search By Name
                        </h1>
                        <a className='font-bold flex m-9'>Enter the name to be searched </a>
                        <input
                            type='text'
                            className='border-2 border-black focus:border-blue p-5 m-8 rounded-lg flex'
                            placeholder='Name of student'
                            value={name}
                            onChange={(e) =>
                                setname(e.target.value)
                            }
                        />
                        <button className='bg-black text-white p-2 flex m-8 rounded-l text-2xl'>Verify</button>
                    </form>
                </div>

                <div>
                    <div className='border-2 bg-black text-white left-6 '>
                        <div className='border-2'>
                            <h1>There you go!</h1>
                            <p>Enter your name to find out the certificates issued to you</p>
                            <button className='border-2 m-5 p-5'> Back to verification</button>
                        </div>
                        <div className='border-2'>
                            <h1>Hey There!</h1>
                            <p>Verify the authenticity of the certificate by entering the unique code in it here.</p>
                            <button className='border-2 m-5 p-5'>Search by Name</button>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default page