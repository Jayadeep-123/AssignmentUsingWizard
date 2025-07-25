import styles from './Header.module.css';
import LogoComponent from '../Logo/LogoComponent';
import HeaderProfile from '../Profile/HeaderProfile';
import SearchWidget from '../../../Widgets/SearchInput/SearchInput';

const Header = () => {
    return (
        <header className={styles.header_container}>
            <div className={styles.header_left}>
                <LogoComponent/>
                <SearchWidget/>
            </div>
            <div className={styles.header_right}>
                <HeaderProfile/>
            </div>
        </header>
    )
}

export default Header;