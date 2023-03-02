import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import SearchBar from "./components/SearchBar";
import Youtube from "./components/youtube/Youtube";

function App() {
  const [keywords, setKeywords] = useState<string | null>("");
  const [videos, setVideos] = useState<object[] | null>([]);

  return (
    <ChakraProvider>
      <div>
        <h1>Social Media Analyzer</h1>
        <p>keywords: {keywords}</p>
        <SearchBar setKeywords={setKeywords} setVideos={setVideos} />
        <Youtube keywords={keywords} videos={videos} />
      </div>
    </ChakraProvider>
  );
}

export default App;
