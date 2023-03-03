import MediaList from "./MediaList";
import React from "react";
import { Box, Center, Heading } from "@chakra-ui/react";

interface Props {
  keywords: string | null;
  videos: object[] | null;
}

const Youtube: React.FC<Props> = ({ keywords, videos }) => {
  return (
    <Box mt={20}>
      <Center>
        <Heading color="white">Youtube - Top 3 videos sorted by views</Heading>
      </Center>
      <MediaList videos={videos} />
    </Box>
  );
};

export default Youtube;
