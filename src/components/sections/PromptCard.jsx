import React from "react";

const PromptCard = ({ number, prompt, src }) => {
  const youtubeEmbedUrl = src.replace("watch?v=", "embed/");

  return (
    <>
      <div className="flex w-[270px] flex-col items-start justify-start">
        <p
          className="h-[150px] font-[300] text-[#e3e7eab3]"
          style={{ whiteSpace: "normal", wordWrap: "break-word" }}
        >
          <span className="bg-[#0071e310] p-1 text-[#0071E3]">
            Prompt {number}:
          </span>{" "}
          {prompt}
        </p>
        <div className="aspect-w-9 aspect-h-16 min-h-[500px] py-2">
          <iframe
            width="269px"
            height="480px"
            className="rounded-2xl"
            src={youtubeEmbedUrl}
            //   title="Is Saitama a Prisoner of Power? | One-Punch Man Quote #fullfilment #hero #power #strength"
            //   allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            //   referrerPolicy="strict-origin-when-cross-origin"
            //   allowFullScreen
            // dont show title
          ></iframe>
        </div>
      </div>
    </>
  );
};

export default PromptCard;
