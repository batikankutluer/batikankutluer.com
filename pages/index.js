import React, { useEffect } from "react";
import { useRouter } from 'next/router'

import { Context, useContext } from "../components/context.jsx";

import Header from "../components/header";
import Page from "../components/page";
import Footer from "../components/footer";

function App() {
  let [state, setState] = useContext(Context);
  const router = useRouter();

  useEffect(() => {
    if (state.isBlogClicked) router.push("/blog")
  }, [state.isBlogClicked])

  return (
    <div className='App'>
      <Header />

      <Page pinnedTweet={state.pinnedTweet}>

      </Page>

      <Footer />
    </div>
  );
}

export default App;
