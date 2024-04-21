'use client';

import React, { useState, useEffect } from 'react';

const Page = () => {
    const [name, setName] = useState("");
    const [certificates, setCertificates] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [totalPoints, setTotalPoints] = useState(0);

    useEffect(() => {
        const hashPart = window.location.hash;
        const decodedName = decodeURIComponent(hashPart.substring(1));
        setName(decodedName);
        console.log(decodedName);

        // Fetch certificate details using the name
        const fetchCertificates = async () => {
            try {
                const response = await fetch('https://certificate-verification-server-sage.vercel.app/search-by-name', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ name }) // Send the name as the request body
                });

                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }

                const data = await response.json();

                // Set fetched certificates
                setCertificates(data.foundCertificates);
            } catch (err) {
                console.error('Error:', err);
                setError('An error occurred while fetching certificate data.');
            } finally {
                setLoading(false);
            }
        };

        // Trigger the fetch function
        fetchCertificates();
    }, [name]);

    // Calculate total points when certificates change
    useEffect(() => {
        if (certificates.length > 0) {
            const total = certificates.reduce((sum, certificate) => sum + parseInt(certificate.points), 0);
            setTotalPoints(total);
        }
    }, [certificates]);

    // Rendering based on the state
    if (loading) {
        // Display preloader while loading
        return (
            <div className='bg-black justify-center h-screen w-screen flex items-center justify-cente flex-col max-w-full'>
                <svg width="80" height="80" viewBox="0 0 57 57" xmlns="http://www.w3.org/2000/svg" stroke="#d38bfc">
                    <g fill="none" fillRule="evenodd">
                        <g transform="translate(1 1)" strokeWidth="2">
                            <circle cx="5" cy="50" r="5">
                                <animate attributeName="cy"
                                    begin="0s" dur="2.2s"
                                    values="50;5;50;50"
                                    calcMode="linear"
                                    repeatCount="indefinite" />
                                <animate attributeName="cx"
                                    begin="0s" dur="2.2s"
                                    values="5;27;49;5"
                                    calcMode="linear"
                                    repeatCount="indefinite" />
                            </circle>
                            <circle cx="27" cy="5" r="5">
                                <animate attributeName="cy"
                                    begin="0s" dur="2.2s"
                                    from="5" to="5"
                                    values="5;50;50;5"
                                    calcMode="linear"
                                    repeatCount="indefinite" />
                                <animate attributeName="cx"
                                    begin="0s" dur="2.2s"
                                    from="27" to="27"
                                    values="27;49;5;27"
                                    calcMode="linear"
                                    repeatCount="indefinite" />
                            </circle>
                            <circle cx="49" cy="50" r="5">
                                <animate attributeName="cy"
                                    begin="0s" dur="2.2s"
                                    values="50;50;5;50"
                                    calcMode="linear"
                                    repeatCount="indefinite" />
                                <animate attributeName="cx"
                                    from="49" to="49"
                                    begin="0s" dur="2.2s"
                                    values="49;5;27;49"
                                    calcMode="linear"
                                    repeatCount="indefinite" />
                            </circle>
                        </g>
                    </g>
                </svg>
                <p className='p-20 font-mono w-7/12 items-center text-center'>Searching about your requested details in our Secured Database</p>
            </div>
        );
    }

    if (error) {
        return (

            <div className='bg-black h-screen w-screen flex items-center justify-center flex-col max-w-full'>
                <h1 className='text-2xl font-extrabold tracking-wider p-20 w-7/12 items-center text-center'>Verify Certificate</h1>
                <div className='bg-black justify-center items-center flex'>
                    <svg width="200px" height="200px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9 17C9.85038 16.3697 10.8846 16 12 16C13.1154 16 14.1496 16.3697 15 17" stroke="#1C274C" strokeWidth="1.5" strokeLinecap="round" />
                        <ellipse cx="15" cy="10.5" rx="1" ry="1.5" fill="#1C274C" />
                        <ellipse cx="9" cy="10.5" rx="1" ry="1.5" fill="#1C274C" />
                        <path d="M22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C21.5093 4.43821 21.8356 5.80655 21.9449 8" stroke="#1C274C" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                </div>
                <p className='p-20 font-mono w-7/12 items-center text-center'>
                    {error}
                </p>
            </div>

        );
    }

    // Render certificates if there are any
    if (certificates.length > 0) {
        return (
            <>
                <div className='bg-[#000000] h-screen w-screen flex flex-col max-w-full'>
                <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="container rounded-3xl shadow-md relative w-[760px]  max-w-full p-5 m-auto h-fit bg-[#3f3e3e28] flex flex-col justify-center mt-20">
                        <h1 className='text-3xl font-extrabold tracking-wider items-center text-center p-5 text-white'>Details Of Issued Certificates</h1>
                        <div className='text-2xl font-mono px-5 bg-[#000000ad] rounded-3xl w-fit mx-5 py-1 shadow-3xl font-bold mb-4'>Participant Name: {certificates[0].name}</div>
                        <div className='mx-14 space-y-4 font-mono rounded-3xl shadow-md bg-[#00000093] mt-1 flex-auto'>
                            {/* Render each certificate */}
                            {certificates.map((certificate, index) => (
                                <div key={index} className='rounded-3xl shadow-md bg-[#00000093] p-3 hover:bg-[#464444a1] m-3'>
                                    <p>Event: {certificate.event}</p>
                                    <p>Organization: {certificate.organization}</p>
                                    <p>Unique Code: {certificate.unique_code}</p>
                                    <p>Points: {certificate.points}</p>
                                </div>
                            ))}

                        </div>
                        {/* Display total points */}
                        <p className='m-2 font-semibold text-center text-black bg-[#ccc6c69c] rounded-lg shadow-lg hover:bg-[#ffffffa6] p-3 mt-5 mx-28'>
                            Total Points: {totalPoints}
                        </p>
                    </div>
                    </div>
                </div>
            </>
        );
    }

    // Default case if no data is found
    return (

        <div className='bg-black h-screen w-screen flex items-center justify-center flex-col max-w-full'>
            <h1 className='text-2xl font-extrabold tracking-wider p-20 w-7/12 items-center text-center'>View Certificate's By Name</h1>
            <div className='bg-black justify-center items-center flex'>
                <svg width="200px" height="200px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 17C9.85038 16.3697 10.8846 16 12 16C13.1154 16 14.1496 16.3697 15 17" stroke="#1C274C" strokeWidth="1.5" strokeLinecap="round" />
                    <ellipse cx="15" cy="10.5" rx="1" ry="1.5" fill="#1C274C" />
                    <ellipse cx="9" cy="10.5" rx="1" ry="1.5" fill="#1C274C" />
                    <path d="M22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C21.5093 4.43821 21.8356 5.80655 21.9449 8" stroke="#1C274C" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
            </div>
            <p className='p-20 font-mono w-7/12 items-center text-center'>
                Certificate's Not found
            </p>
        </div>

    );
};

export default Page;
