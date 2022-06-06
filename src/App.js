import "./App.css";
import React, { useState } from "react";
import Typewriter from "typewriter-effect";

function App() {
  return <div className='App'>
    <Header />

    <Page>

    </Page>

    <Footer />
  </div >;
}

function Header() {
  return <header>

    <h1 className="weirdText">Selamlar!
    </h1>
  </header>
}

function Page() {
  let [text, setText] = useState(`Adım Batıkan 15 yaşındayım. *Frontend Developer* olarak kendimi geliştiriyorum. Şimdilik kodladığım site daha bitmedi. Şuanki versiyonu *v0.1!* Bu nedenle takipte kal, yakında güzel şeyler olacak...`);

  function handleTypeWriter(typewriter) {
    typewriter.changeDelay(20)
      .typeString(text.split("*")
        .map((text, n) => {

          if (n % 2 == 1) return `<span class="highlight">${text}</span>`;

          return text
        }).join(" "))
      .start()
  }

  return <div id="page">
    <div id="top">
      <div id="left">
        <Typewriter
          onInit={handleTypeWriter}
        />
      </div>

      <div id="right">

        <div className="logoContainer pinnedTweet">
          <span style={{ fontSize: "2em", marginBottom: 10 }}>Sabitlenen Tweetim:</span>
          <div className="highlight" style={{ fontWeight: "bold", fontSize: "1.3em" }}>
            Linçlemek ve haklı olmak bağımsız olaylardır.
          </div>
        </div>

      </div>
    </div>

    <div id="bottom"></div>
  </div>
}

function Footer() {
  return <footer>

    <div className="logoContainer">
      <img className="github" src="/github.png" />
      <span>Github: </span>

      <a href="https://github.com/Batikan-Kutluer">Batikan-Kutluer</a>
    </div>

    <div className="logoContainer">
      <img className="twitter" src="/twitter.svg" />
      <span>Twitter:</span>

      <a href="https://twitter.com/batikan_kutluer">@batikan_kutluer</a>
    </div>

    <div className="logoContainer">
      <img className="discord" src="/discord.svg" />
      <span>Discord: </span>

      <a href="https://discord.gg">Ancap Frosty#1000</a>
    </div>

    <div className="logoContainer">
      <img className="algo" style={{ width: 70, height: 35 }} src="/ans.png" />
      <span>Algo Website: </span>

      <a href="https://batikankutluer.algo.website/">batikankutluer.algo</a>
    </div>

    <div className="logoContainer">
      <img className="mail" src="/email.png" />
      <span>E-Posta: </span>

      <a href="mailto:batikankutluermain@gmail.com">Batıkan Kutluer</a>
    </div>

  </footer >
}

export default App;
