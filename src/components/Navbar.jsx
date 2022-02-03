import styles from "./navbar.module.css";
import Logo from "../IMG/logo.png";


function Navbar() {
    return (
        <div className={styles.navbar}>
            <img className={styles.logo} src={Logo} />
            <div className={styles.nft}>Create NFT</div>
            <button className={styles.login}>Login</button>
        </div>
    )
}

export default Navbar;