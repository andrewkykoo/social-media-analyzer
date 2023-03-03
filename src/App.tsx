import { ChakraProvider, Box, Center, Heading, VStack } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import SearchBar from "./components/SearchBar";
import Youtube from "./components/youtube/Youtube";
import Instagram from "./components/instagram/Instagram";

function App() {
  const [keywords, setKeywords] = useState<string | null>("");
  const [videos, setVideos] = useState<object[] | null>([]);

  return (
    <ChakraProvider>
      <Box m={10} minW="320px" maxW="2560px">
        <Center>
          <VStack>
            <Heading size="3xl">Social Media Analyzer</Heading>
            <SearchBar setKeywords={setKeywords} setVideos={setVideos} />
          </VStack>
        </Center>

        <Youtube keywords={keywords} videos={videos} />
        <Youtube keywords={keywords} videos={videos} />
      </Box>

      {/* Add ChatGPT */}
    </ChakraProvider>
  );
}

export default App;
