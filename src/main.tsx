import React from "react";
import App from "./App.tsx";
import ReactDOM from "react-dom/client";

import { ApolloProvider } from "@apollo/client";
import { apClient } from "./lib/apollo-client.config.ts";
import { PokemonsContextProvider } from "./provider/pokemons-context-provider.tsx";

import "./styles/global.scss";
import "rc-slider/assets/index.css";
import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ApolloProvider client={apClient}>
      <PokemonsContextProvider>
        <App />
      </PokemonsContextProvider>
    </ApolloProvider>
  </React.StrictMode>
);
