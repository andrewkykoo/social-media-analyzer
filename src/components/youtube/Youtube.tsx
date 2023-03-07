import MediaList from "./MediaList";
import React from "react";
import { Box, Center, Heading } from "@chakra-ui/react";

interface Props {
  keywords: string | null;
  videos: object[] | null;
}

const Youtube: React.FC<Props> = ({ keywords, videos }) => {
  return (
    <Box mt={1}>
      {keywords && (
        <>
          <Center>
            <Heading color="white">Top 3 Youtube contents</Heading>
          </Center>
          <MediaList videos={videos} />
        </>
      )}
    </Box>
  );
};

export default Youtube;
