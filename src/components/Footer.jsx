import Logo from "../IMG/logo.png";
import styles from "./footer.module.css";
import Twitter from "../IMG/twitter.png";
import Instagram from "../IMG/instagram (1).png";
import Facebook from "../IMG/facebook.png";



function Footer() {
    return (
        <div className={styles.footer}>
            <div className={styles.content}>
                <div className={styles.div}>
                    <img className={styles.logo} src={Logo} alt="logo" />
                    <div className={styles.contact}>Tel: 044-44444444</div>
                    <div className={styles.contact}>Mail: metacoins.info.in</div>
                </div>
                <div className={styles.div}> 
                    <ul>
                        <li className={styles.item}>Home</li>
                        <li className={styles.item}>Services</li>
                        <li className={styles.item}>About Us</li>
                        <li className={styles.item}>Partners</li>
                    </ul>
                </div>
                <div className={styles.div}>
                    <ul>
                        <li className={styles.item}>Roadmap</li>
                        <li className={styles.item}>News</li>
                        <li className={styles.item}>Team</li>
                    </ul>
                </div>
                <div className={styles.div}>
                    <ul>
                        <li className={styles.item}>FAQ's</li>
                        <li className={styles.item}>Terms and Condition</li>
                        <li className={styles.item}>Privacy Policy</li>
                        <li className={styles.item}>Disclaimers</li>
                    </ul>
                </div>
                <div >
                    <div className={styles.head}>Get in Touch</div>
                    <div className={styles.contact}>hello@metacoins.sg</div>
                    <div className={styles.icons}>
                        <img src={Instagram} alt="instagram" />
                        <img src={Facebook} alt="facebook" />
                        <img src={Twitter} alt="twitter" />
                    </div>
                </div>
            </div>
            <div className={styles.copy}>Copyright 2021. Metacoins All rights reserved. </div>
        </div>
    )
}

export default Footer;

