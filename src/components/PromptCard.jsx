import React from "react";

const PromptCard = ({ number, prompt, src }) => {
  const youtubeEmbedUrl = src.replace("watch?v=", "embed/");

  return (
    <>
      <p
        className="text-white"
        style={{ whiteSpace: "normal", wordWrap: "break-word" }}
      >
        <span className="bg-[#0071E321] p-1 text-[#0071E3]">
          Prompt {number}:
        </span>{" "}
        {prompt}
      </p>
      <div className="aspect-w-9 aspect-h-16 min-h-[500px]">
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
    </>
  );
};

export default PromptCard;
