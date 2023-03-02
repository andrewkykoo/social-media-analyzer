import MediaList from "../MediaList";
import React from "react";

interface Props {
  keywords: string | null;
  videos: object[] | null;
}

const Youtube: React.FC<Props> = ({ keywords, videos }) => {
  console.log("Youtube component: ", videos);
  return (
    <div>
      <h1>Youtube</h1>
      <p>{keywords}</p>
      <MediaList videos={videos} />
    </div>
  );
};

export default Youtube;
