import { Box, Heading, Wrap, WrapItem } from "@chakra-ui/react";
import Media from "./Media";

interface Props {
  videos: object[] | null;
}

const coolVideo = {};
const MediaList: React.FC<Props> = ({ videos }) => {
  return (
    <Box borderWidth="1px">
      <Heading>Youtube</Heading>
      <Wrap>
        {/* {videos &&
        videos.map((video: object, index: number) => (
          <Media key={index} video={video} />
        ))} */}
        <WrapItem>
          <Media video={coolVideo} />
        </WrapItem>
        <WrapItem>
          <Media video={coolVideo} />
        </WrapItem>
        <WrapItem>
          <Media video={coolVideo} />
        </WrapItem>
      </Wrap>
    </Box>
  );
};

export default MediaList;
