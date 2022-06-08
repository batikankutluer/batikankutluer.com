import React from "react";
import Head from 'next/head'

import { Context, useContext } from "../components/context.jsx";

import Blog from "../components/blog";

import Header from "../components/header";
import Page from "../components/page";
import Footer from "../components/footer";

function App() {
  let [state, setState] = useContext(Context);

  return (

    <div>

      {/* Head */}

      <Head>
        <title>Batıkan Kutluer</title>

        <meta charset="utf-8" />
        <meta name="description" content="Kendi websitem." />
        <meta name="author" content="Batıkan Kutluer" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="theme-color" content="#000000" />
      </Head>

      {/* App */}

      <div className='App'>
        <Header />

        <Page pinnedTweet={state.pinnedTweet}>
          {!state.isBlogClicked || <Blog />}
        </Page>

        <Footer />
      </div>
    </div>
  );
}

export default App;
