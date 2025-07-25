import Profile from "../../../assets/Profile.png";
import styles from "../Profile/HeaderProfile.module.css";

const HeaderProfile = () => {
    return (
        <>
            <svg width="25" height="26" viewBox="0 0 25 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M15.6248 18.2083H20.8332L19.3697 16.7449C18.9728 16.348 18.7498 15.8097 18.7498 15.2484V11.9583C18.7498 9.23705 17.0107 6.92197 14.5832 6.06397V5.70833C14.5832 4.55774 13.6504 3.625 12.4998 3.625C11.3492 3.625 10.4165 4.55774 10.4165 5.70833V6.06397C7.98902 6.92197 6.24984 9.23705 6.24984 11.9583V15.2484C6.24984 15.8097 6.02687 16.348 5.62998 16.7449L4.1665 18.2083H9.37484M15.6248 18.2083V19.25C15.6248 20.9759 14.2257 22.375 12.4998 22.375C10.7739 22.375 9.37484 20.9759 9.37484 19.25V18.2083M15.6248 18.2083H9.37484"
                    stroke="#3F3F46" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <div className={styles.profile_container}>
                <figure className={styles.profile_image_wrapper}>
                    <img src={Profile} alt="User" className="profile_image"/>
                </figure>
                <div className={styles.profile_info_container}>
                    <div className={styles.profile_details}>
                        <span className={styles.profile_id}>HYD 256789</span>
                        <span className={styles.profile_role}>Cashier</span>
                    </div>
                    <div className={styles.dropdown_icon}>
                        <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5.5 7.5L10.5 12.5L15.5 7.5" stroke="#344054" strokeWidth="1.67" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </div>
                </div>
            </div>
        </>
    );
};

export default HeaderProfile;