import footerImg from "./img/logo-footer.svg"

function Footer() {
    return (
        <div className="footer">
            <img src={footerImg} alt="foot logo"/>
            <p>© 2020 Kasa. All rights reserved</p>
        </div>
    )
}

export default Footer;