import { PokemonWebView } from "./PokemonWebView";
import { useMediaQuery } from "./hooks/use-media-query";
import { PokemonMobileView } from "./layout/mobile/view/PokemonMobileView";

function App() {
  const isMediaScreen = useMediaQuery("(max-width: 992px)");

  return <>{isMediaScreen ? <PokemonMobileView /> : <PokemonWebView />}</>;
}

export default App;
