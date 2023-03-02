import Media from "./Media";

interface Props {
  videos: object[] | null;
}

const coolVideo = {};
const MediaList: React.FC<Props> = ({ videos }) => {
  return (
    <div>
      <h1>MediaList</h1>
      {/* {videos &&
        videos.map((video: object, index: number) => (
          <Media key={index} video={video} />
        ))} */}
      <Media video={coolVideo} />
    </div>
  );
};

export default MediaList;
