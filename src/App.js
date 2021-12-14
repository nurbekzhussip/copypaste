import { MainPage } from "./pages/main";

// 1. Import the extendTheme function
import { extendTheme, ChakraProvider } from "@chakra-ui/react";
import "./App.css";
import {Header} from "./layouts/header";
import {Routes} from "./routes";
// 2. Extend the theme to include custom colors, fonts, etc
const colors = {
  brand: {
    900: "#1a365d",
    800: "#153e75",
    700: "#2a69ac",
  },
};

const theme = extendTheme({ colors });

function App() {
  return (
    <ChakraProvider theme={theme}>
      <div className="app">
        <Routes/>
      </div>
    </ChakraProvider>
  );
}

export default App;
