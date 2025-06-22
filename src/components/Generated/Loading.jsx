import { useState } from "react";

const Loading = () => {
    const [hover, setHover] = useState(false);
    const [tooLate, setTooLate] = useState(false);

    // const timer = setTimeout(() => {
    //     setTooLate(true);
    //     // setHover(false);
    // }, 15000); //15 sec


    return (
        <div
            className="rounded-xl overflow-hidden cursor-pointer"
            onMouseOver={() => {
                setHover(true);
            }}
            onMouseLeave={() => {
                setHover(false);
            }}
        >
            <div className=" h-full w-full">
                <div className="absolute top-2 left-2 bottom-2 right-2 p-1 animate-pulse rounded-xl overflow-hidden">
                    <span className="absolute inset-0 flex items-center justify-center transition-all duration-300">
                        <svg
                            width="200"
                            height="200"
                            viewBox="0 0 200 200"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <defs>
                                <radialGradient
                                    id="aiPulse"
                                    cx="50%"
                                    cy="50%"
                                    r="50%"
                                >
                                    <stop
                                        offset="0%"
                                        stopColor="#8884FF"
                                        stopOpacity="0.6"
                                    />
                                    <stop
                                        offset="100%"
                                        stopColor="#8884FF"
                                        stopOpacity="0"
                                    />
                                </radialGradient>
                            </defs>
                            <circle
                                cx="100"
                                cy="100"
                                r="60"
                                fill="url(#aiPulse)"
                            >
                                <animate
                                    attributeName="r"
                                    values="60;80;60"
                                    dur="2s"
                                    repeatCount="indefinite"
                                />
                                <animate
                                    attributeName="opacity"
                                    values="1;0.3;1"
                                    dur="2s"
                                    repeatCount="indefinite"
                                />
                            </circle>
                            <circle cx="100" cy="100" r="20" fill="#8884FF" />
                        </svg>
                    </span>

                    {hover && (
                        <p className="text-xl absolute inset-0 z-50 flex items-center justify-center text-white rounded-xl bg-indigo-500/10 text-center transition-all duration-300">
                            Serving you the best AI experience!
                        </p>
                    )}
                    {tooLate && !hover && (
                        <p className="text-xl absolute inset-0 z-50 flex items-center justify-center text-white rounded-xl text-center transition-all duration-300">
                            It's taking a bit longer than expected, please be
                            patient!
                        </p>
                    )}
                    <div className="flex items-center justify-center h-full w-full py-6">
                        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-500"></div>
                        <p className="text-xl text-gray-700 mt-4"></p>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Loading;
