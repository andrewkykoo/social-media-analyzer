import MediaList from "./MediaList";
import React from "react";
import { Center, VStack } from "@chakra-ui/react";

interface Props {
  keywords: string | null;
  videos: object[] | null;
}

const Youtube: React.FC<Props> = ({ keywords, videos }) => {
  return (
    <Center>
      <VStack>
        <MediaList videos={videos} />
      </VStack>
    </Center>
  );
};

export default Youtube;
