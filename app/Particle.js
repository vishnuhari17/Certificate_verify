"use client"

import React, { useState, useEffect } from 'react';
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

const ParticlesComponent = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Initialize the particles engine and set a 3-second delay before setting loading to false
        initParticlesEngine(async (engine) => {
            await loadSlim(engine);
        }).then(() => {
            // Set a 3-second delay before updating the loading state
            setTimeout(() => {
                setLoading(false);
            }, 3300);
        });
    }, []);

    const particlesOptions = {
        background: {},
        fpsLimit: 120,
        interactivity: {
            events: {
                onClick: {
                    enable: true,
                    mode: "repulse",
                },
                onHover: {
                    enable: true,
                    mode: "push",
                },
            },
            modes: {
                push: {
                    distance: 200,
                    duration: 15,
                },
                grab: {
                    distance: 150,
                },
            },
        },
        particles: {
            color: {
                value: "#FFFFFF",
            },
            move: {
                direction: "none",
                enable: true,
                outModes: {
                    default: "bounce",
                },
                random: true,
                speed: 1,
                straight: false,
            },
            number: {
                density: {
                    enable: true,
                },
                value: 150,
            },
            opacity: {
                value: 1.0,
            },
            shape: {
                type: "circle",
            },
            size: {
                value: { min: 1, max: 3 },
            },
        },
        detectRetina: true,
    };

    return (
        <div>
            {loading ? (
                // Loading screen
                <div className="bg-black h-screen w-screen flex items-center justify-center flex-col max-w-full z-50 absolute">
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
                </div>
            ) : (
                // Particles component
                <Particles options={particlesOptions} />
            )}
        </div>
    );
};

export default ParticlesComponent;
