import { Box, Wrap, WrapItem } from "@chakra-ui/react";
import Media from "./Media";

interface Props {
  videos: object[] | null;
}

const MediaList: React.FC<Props> = ({ videos }) => {
  return (
    <Box mt={5}>
      <Wrap justify="center" spacing="30px">
        {videos &&
          videos.map((video, index: number) => (
            <WrapItem key={index}>
              <Media video={video} />
            </WrapItem>
          ))}
      </Wrap>
    </Box>
  );
};

export default MediaList;
