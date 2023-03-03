import { ChakraProvider, Box, Center, Heading } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import SearchBar from "./components/SearchBar";
import Youtube from "./components/youtube/Youtube";
import Footer from "./components/Footer";

function App() {
  const [keywords, setKeywords] = useState<string | null>("");
  const [videos, setVideos] = useState<object[] | null>([]);

  return (
    <ChakraProvider>
      <Box bg="gray.800" h="calc(100vh)" overflow="scroll">
        <Center>
          <Box mt={10}>
            <Heading size="3xl" color="white">
              Social Media Analyzer
            </Heading>
            <SearchBar setKeywords={setKeywords} setVideos={setVideos} />
            {/* Add ChatGPT */}
          </Box>
        </Center>
        <Box p={10}>
          <Youtube keywords={keywords} videos={videos} />
        </Box>
        <Footer />
      </Box>
    </ChakraProvider>
  );
}

export default App;
