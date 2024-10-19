import React from "react";
import Markdown from "react-markdown";
import YouTube from "react-youtube";

const opts = {
  height: "390",
  width: "640",
  playerVars: {
    // https://developers.google.com/youtube/player_parameters
    autoplay: 0,
  },
};

function ChapterContent({ chapter, content }) {
  console.log(chapter);
  return (
    <div className="p-10">
      <h2 className="font-medium text-2xl">{chapter?.name}</h2>
      <p className="text-gray-500">{chapter?.about}</p>
      <div className="flex justify-center my-6">
        <YouTube videoId={content?.videoId} opts={opts} />
      </div>
      <div>
        {content?.content?.map((item, index) => (
          <div className="p-5 bg-sky-50 mb-3 rounded-lg">
            <h2 className="font-medium text-lg">{item.title}</h2>
            {/* <p className="whitespace-pre-wrap">{item.explanation}</p> */}
            <Markdown>{item.explanation}</Markdown>
            {item.code && (
              <div className="p-4 bg-black text-white rounded-md mt-3">
                <pre>
                  <code>{item.code}</code>
                </pre>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default ChapterContent;
