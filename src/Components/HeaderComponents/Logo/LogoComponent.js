import Logo from '../../../assets/Logo.png';
import styles from "../Logo/LogoComponent.module.css";
const LogoComponent = () => {
    return (
            <div className={styles.header_logo}>
                <img src={Logo} alt="Sri Chaitanya Logo"></img>
            </div>
    )
}

export default LogoComponent;