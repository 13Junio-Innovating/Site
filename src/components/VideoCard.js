import React from 'react';

const VideoCard = ({ title, url }) => {
  return (
    <div className="bg-white bg-opacity-15">
      <div className="p-4 m-27">
        <h2 className="text-xl font-bold mb-4">{title}</h2>
        <div className="aspect-w-16 aspect-h-9">
          <iframe
            className="w-full h-full"
            src={url}
            // frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title={title}
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
