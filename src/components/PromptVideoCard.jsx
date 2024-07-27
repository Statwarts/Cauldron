import React from "react";

const PromptVideoCard = ({ number, prompt, src }) => {
  const youtubeEmbedUrl = src.replace("watch?v=", "embed/");

  return (
    <>
    <div className="w-[480px]">
      <p
        className="text-[#212122] hidden  font-[300]"
        style={{ whiteSpace: "normal", wordWrap: "break-word" }}
      >
        <span className="bg-[#0071E321] p-1 text-[#0071E3]">
          Prompt {number}:
        </span>{" "}
        <div className="bg-[#212122] inline">
        {prompt}
        </div>
      </p>
      <div className="aspect-w-9 aspect-h-16 min-h-[500px] py-2">
        <iframe
          width="480px"
          height="270px"
          className="rounded-2xl bg-[#212121]"
          src={youtubeEmbedUrl}
        ></iframe>
      </div>
      </div>
    </>
  );
};

export default PromptVideoCard;
