import Image from "next/image"

import css from "../styles/Footer.module.css"

export default function Footer() {
    return <footer>

        <div className="logoContainer">
            <Image
                className={css.github}
                width={25}
                height={25}
                alt="Github"
                src="/github.png" />
            <span>Github: </span>

            <a href="https://github.com/Batikan-Kutluer">Batikan-Kutluer</a>
        </div>

        <div className="logoContainer">
            <Image
                className={css.twitter}
                width={25}
                height={25}
                alt="Twitter"
                src="/twitter.svg" />
            <span>Twitter:</span>

            <a href="https://twitter.com/batikan_kutluer">@batikan_kutluer</a>
        </div>

        <div className="logoContainer">
            <Image
                className={css.discord}
                width={25}
                height={25}
                alt="Discord"
                src="/discord.svg" />
            <span>Discord: </span>

            <a href="https://discord.gg">Ancap Frosty#1000</a>
        </div>

        <div className="logoContainer">
            <Image
                className={css.algo}
                width={70}
                height={35}
                alt="Algo Name Services"
                src="/ans.png" />
            <span>Algo Website: </span>

            <a href="https://batikankutluer.algo.website/">batikankutluer.algo</a>
        </div>

        <div className="logoContainer">
            <Image
                className={css.mail}
                width={25}
                height={25}
                alt="Email"
                src="/email.png" />
            <span>E-Posta: </span>

            <a href="mailto:batikankutluer@proton.me">Batıkan Kutluer</a>
        </div>

    </footer >
}