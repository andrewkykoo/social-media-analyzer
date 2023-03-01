import * as React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import SearchBar from "./components/SearchBar";

function App() {
  return (
    <ChakraProvider>
      <div>
        <h1>Social Media Analyzer</h1>
        <SearchBar />
      </div>
    </ChakraProvider>
  );
}

export default App;
