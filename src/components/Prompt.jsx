import React, { useRef } from "react";

export default function Prompt() {
    const scrollContainer = useRef(null);

    const handleMouseEnter = () => {
        scrollContainer.current.classList.add('paused');
    };

    const handleMouseLeave = () => {
        scrollContainer.current.classList.remove('paused');
    };

    return (
        <div className="wrapper flex flex-col px-4">
            <div className="flex flex-col">
                <p className="py-2 text-white">
                    The Cauldron can produce a variety of content, from short clips to extended videos, all while upholding exceptional visual quality and adhering to user prompts.
                </p>
                <p className="py-2 text-white">Explore a selection of our latest collections.</p>
                <div className="h-0.5 bg-[#3A3F45]"></div>
            </div>

            <div className="w-full overflow-hidden py-2">
                <div
                    className="flex animate-scroll whitespace-nowrap items-center justify-center"
                    ref={scrollContainer}
                >
                    <div
                        className="inline-block w-full sm:w-3/4 xl:w-1/2 2xl:w-1/2 px-3 py-2"
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                    >
                        <p className="text-white" style={{ whiteSpace: 'normal', wordWrap: 'break-word' }}>
                            Prompt 1: The ability to create multiple videos in a short amount of time is particularly useful for creators who need to maintain a consistent posting schedule.
                        </p>
                        <div className="aspect-w-9 aspect-h-16 min-h-[500px] bg-white">
                            <iframe
                                width="100%"
                                height="100%"
                                src="https://www.youtube.com/embed/PD6Ayhv-jqU"
                                title="Attack on Titan's MOST Shocking Moments: Betrayal, Darkness & Twists! #anime #aot #shocks #shorts"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                referrerPolicy="strict-origin-when-cross-origin"
                                allowFullScreen
                            ></iframe>
                        </div>
                    </div>
                    <div
                        className="inline-block w-full sm:w-3/4 xl:w-1/2 2xl:w-1/2 px-3 py-2"
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                    >
                        <p className="text-white" style={{ whiteSpace: 'normal', wordWrap: 'break-word' }}>
                            Prompt 2: The ability to create multiple videos in a short amount of time is particularly useful for creators who need to maintain a consistent posting schedule.
                        </p>
                        <div className="aspect-w-9 aspect-h-16 min-h-[500px]">
                            <iframe
                                width="100%"
                                height="100%"
                                src="https://www.youtube.com/embed/R88PLJ1ikfM"
                                title="Is Saitama a Prisoner of Power? | One-Punch Man Quote #fullfilment #hero #power #strength"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                referrerPolicy="strict-origin-when-cross-origin"
                                allowFullScreen
                            ></iframe>
                        </div>
                    </div>
                    <div
                        className="inline-block w-full sm:w-3/4 xl:w-1/2 2xl:w-1/2 px-3 py-2"
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                    >
                        <p className="text-white" style={{ whiteSpace: 'normal', wordWrap: 'break-word' }}>
                            Prompt 3: The ability to create multiple videos in a short amount of time is particularly useful for creators who need to maintain a consistent posting schedule.
                        </p>
                        <div className="aspect-w-9 aspect-h-16 min-h-[500px]">
                            <iframe
                                width="100%"
                                height="100%"
                                src="https://www.youtube.com/embed/ZxhzXUz7gF8"
                                title="Ash's Crazy | #redditstories #askreddit #reddit #question #pokemon"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                referrerPolicy="strict-origin-when-cross-origin"
                                allowFullScreen
                            ></iframe>
                        </div>
                    </div>
                    <div
                        className="inline-block w-full sm:w-3/4 xl:w-1/2 2xl:w-1/2 px-3 py-2"
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                    >
                        <p className="text-white" style={{ whiteSpace: 'normal', wordWrap: 'break-word' }}>
                            Prompt 4: The ability to create multiple videos in a short amount of time is particularly useful for creators who need to maintain a consistent posting schedule.
                        </p>
                        <div className="aspect-w-9 aspect-h-16 min-h-[500px]">
                            <iframe
                                width="100%"
                                height="100%"
                                src="https://www.youtube.com/embed/ZxhzXUz7gF8"
                                title="Ash's Crazy | #redditstories #askreddit #reddit #question #pokemon"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                referrerPolicy="strict-origin-when-cross-origin"
                                allowFullScreen
                            ></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
