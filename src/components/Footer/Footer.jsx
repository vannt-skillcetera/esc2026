import logo from "../../assets/Logo.png";
import "./Footer.css";
    const Footer = () => {
        return (
            <div>
                <footer class="footer">
                    <div class="footer-top-border"></div>

                    <div class="container footer-content">
                        <div class="footer-left">
                            <img src={logo} alt="ESC Logo Footer" class="footer-logo"/>
                                <p>Address: FPT University</p>
                                <p>Organizer: Skillcetera</p>
                        </div>

                        <div class="footer-right">
                            <div class="footer-column">
                                <h4>About us</h4>
                                <ul>
                                    <li><a href="#">About Skillcetera</a></li>
                                    <li><a href="#">About ESC</a></li>
                                    <li><a href="#">About our partner</a></li>
                                </ul>
                            </div>
                            <div class="footer-column">
                                <h4>Follow us</h4>
                                <ul>
                                    <li><a href="#">Facebook</a></li>
                                    <li><a href="#">Tik Tok</a></li>
                                    <li><a href="#">Youtube</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div class="footer-bottom-border"></div>

                    <div class="copyright">
                        <p>@ 2026 ESC - English Speaking Competition. All right reserved.</p>
                    </div>
                </footer>
            </div>

        );
    }
    export default Footer;