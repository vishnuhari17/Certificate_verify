"use client"
import React, { useState, useEffect } from 'react';

const Page = () => {
    const [uniqueCode, setUniqueCode] = useState("");
    const [certificateData, setCertificateData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Extract the unique code from the URL hash part
        const hashPart = window.location.hash;
        const code = hashPart.substring(1);
        setUniqueCode(code);

        // Fetch the certificate details using the unique code
        const fetchCertificate = async () => {
            try {
                const response = await fetch('https://certificate-verification-server-sage.vercel.app/verify-certificate', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ unique_code: code })
                });
                const data = await response.json();

                if (response.ok) {
                    // Set certificate data if response is successful
                    setCertificateData(data.certificateDetails);
                } else {
                    // Handle non-successful response
                    setError('Certificate not found');
                }
            } catch (err) {
                console.error('Error:', err);
                setError('An error occurred while fetching the certificate details.');
            } finally {
                setLoading(false);
            }
        };

        // Trigger the fetch function
        fetchCertificate();
    }, [uniqueCode]);

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
                        <path d="M9 17C9.85038 16.3697 10.8846 16 12 16C13.1154 16 14.1496 16.3697 15 17" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round" />
                        <ellipse cx="15" cy="10.5" rx="1" ry="1.5" fill="#1C274C" />
                        <ellipse cx="9" cy="10.5" rx="1" ry="1.5" fill="#1C274C" />
                        <path d="M22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C21.5093 4.43821 21.8356 5.80655 21.9449 8" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round" />
                    </svg>
                </div>
                <p className='p-20 font-mono w-7/12 items-center text-center'>
                    {error}
                </p>
            </div>

        );
    }

    if (certificateData) {
        // Displaying the certificate data
        return (
            <>
                <div className='bg-[#000000] h-screen w-screen flex items-center justify-center flex-col max-w-full'>
                    <div className="container bg-[#24242480] rounded-3xl shadow-md relative w-[760px] max-w-full min-h-[480px] mt-20 overflow-y-auto">
                        <h1 className='text-3xl font-extrabold items-center text-center p-7 text-white tracking-widest'>Certificate Details</h1>
                        <div className='mx-14 space-y-12 font-mono rounded-3xl shadow-md bg-[#00000093] p-7 mb-10'>
                            <p><strong className='text-xl tracking-wider'>Name:</strong> {certificateData.name}</p>
                            <p><strong className='text-xl tracking-wider'>Event:</strong> {certificateData.event}</p>
                            <p><strong className='text-xl tracking-wider'>Organization:</strong> {certificateData.organization}</p>
                            <p><strong className='text-xl tracking-wider'>Unique Code:</strong> {certificateData.unique_code}</p>
                            <p><strong className='text-xl tracking-wider'>Points:</strong> {certificateData.points}</p>
                            {/* Add more certificate details rendering here if needed */}
                        </div>
                    </div>
                </div>
            </>
        );
    }

    // Default case if no data is found
    return (

        <div className='bg-black h-screen w-screen flex items-center justify-center flex-col max-w-full'>
            <h1 className='text-2xl font-extrabold tracking-wider p-20 w-7/12 items-center text-center'>Verify Certificate Details</h1>
            <div className='bg-black justify-center items-center flex'>
            <svg width="200px" height="200px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9 17C9.85038 16.3697 10.8846 16 12 16C13.1154 16 14.1496 16.3697 15 17" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round" />
                        <ellipse cx="15" cy="10.5" rx="1" ry="1.5" fill="#1C274C" />
                        <ellipse cx="9" cy="10.5" rx="1" ry="1.5" fill="#1C274C" />
                        <path d="M22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C21.5093 4.43821 21.8356 5.80655 21.9449 8" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round" />
                    </svg>
            </div>
            <p className='p-20 font-mono w-7/12 items-center text-center'>
                Details Not found
            </p>
        </div>

    );
};

export default Page;
