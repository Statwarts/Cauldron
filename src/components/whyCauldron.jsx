import whyIcon1 from "../assets/whyIcon1.svg";
import whyIcon2 from "../assets/whyIcon2.svg";
import whyIcon3 from "../assets/whyIcon3.svg";
import React from "react";
export default function WhyCauldron() {
    const numOfLines = (text) => {
        if(text.length > 100) {
            return " max-w-[420px]";
        }
        return " max-w-[260px]";
    }
    const data = [
        {text : "Faceless videos allow for a consistent visual style and branding that isn’t reliant on the creator’s appearance, which can be more scalable in the long term."},
        {text : "Change voices and choose voices that best match their brand or the tone of the content."},
        {text : "Significantly reduce expenses related to hiring videographers and editors."},
        {text : "Customizable subtitles ensure that videos are accessible to a broader audience, including those who are deaf or hard of hearing, and can enhance viewer engagement."},

    ];
    const batchProcessingData = [
        {
            imgSrc : whyIcon1,
            text : "Streamline the video production process, and focus more on the content rather than the technical aspects of video creation."
        },
        {
            imgSrc : whyIcon2,
            text : "Producing consistent quality and style across all videos, which helps in maintaining a cohesive brand image.",
        },
        {
            imgSrc : whyIcon3,
            text : "Easily scale the production, creating more content in less time and potentially increasing their reach and engagement."
        }
    ]

    return(
        <div className="bg-[rgb(11,11,14)] text-white pl-6 pr-6" >
            <div className="m-auto max-w-[700px] text-[rgb(193,201,207)] pb-40">
                <h1 className="text-4xl font-semibold ">Reduced Production Costs</h1>
                <p className="max-w-3xl mb-20">Efficient video production with faceless content ensures cost-effectiveness and scalability, driven by a prompt.</p>
                <div className="flex justify-between flex-wrap text-[rgb(184,193,199,0.8)]">
                    {
                        data.map(({text}) => (
                        <div className={"text-pretty mb-4" + numOfLines(text)}>
                            <div className="h-28 bg-[rgb(22,24,25)] rounded-2xl mb-1"></div>
                            <p className="pl-2 ">{text}</p>
                        </div>
                        ))
                        
                    }
                    
                </div>

            </div>

            <div className="m-auto max-w-[890px] text-[rgb(193,201,207)] pb-40 pl-4 pr-4">
                <h1 className="text-4xl font-semibold ">Batch Processing</h1>
                <p className="max-w-3xl mb-20">The ability to create multiple videos in a short amount of time is particularly useful for creators who need to maintain a consistent posting schedule.</p>
                <div className="flex">
                    {batchProcessingData.map(({imgSrc, text},index) => (
                        <React.Fragment key={index}>
                        <div className="flex flex-col justify-center text-pretty items-start ">
                            <img src={imgSrc} alt="icon" className="w-[96px] m-auto mb-4" />
                            <div className="m-auto">
                            <p className="max-w-[500px] text-[14px] p-3 pl-4 text-[rgb(184,193,199,0.8)]">{text}</p>
                            </div>
                            </div>
                        {index  < batchProcessingData.length - 1 && (
                            <div className="w-1 bg-[#3A3F45] lg:h-48 md:h-32 "></div>
                        )}
                        </React.Fragment>   
                    ))}
                </div>

            </div>
        </div>
    )
}