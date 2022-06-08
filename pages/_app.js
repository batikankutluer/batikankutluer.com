import { ContextProvider } from "../components/context";
import "../styles/globals.css";
import "../styles/general.css";

function MyApp({ Component, pageProps }) {

  return <ContextProvider>
    <Component {...pageProps} />
  </ContextProvider>;
}

export default MyApp;
