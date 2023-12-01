import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import "./index.css";
import App from "./App";
import ContextProviders from "./context/ContextProviders";
import reportWebVitals from "./reportWebVitals";
import { ChakraProvider } from "@chakra-ui/react";

const queryCLient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
      <ChakraProvider>
      <BrowserRouter>
        <QueryClientProvider client={queryCLient}>
          <ContextProviders>
            <App />
          </ContextProviders>
        </QueryClientProvider>
      </BrowserRouter>
      </ChakraProvider>
  </React.StrictMode>
);

reportWebVitals();