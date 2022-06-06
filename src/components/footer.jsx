export default function Footer() {
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