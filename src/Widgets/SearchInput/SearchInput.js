import styles from "../SearchInput/SearchInput.module.css";

const SearchWidget = () => {
    return (
        <div className={styles.search_wrapper}>
            <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.search_icon}>
                <path d="M15.5056 14.4612L15.5047 14.4603L11.5088 10.446C12.333 9.39036 12.8287 8.05883 12.8287 6.61858C12.8287 3.15112 10.0077 0.330078 6.54033 0.330078C3.07299 0.330078 0.251953 3.15112 0.251953 6.61846C0.251953 10.0797 3.07299 12.9007 6.54033 12.9007C7.91898 12.9007 9.18902 12.4534 10.225 11.6964L14.2397 15.7172L14.2402 15.7177C14.4073 15.8913 14.6396 15.9764 14.8757 15.9764C15.3997 15.9764 15.7507 15.5761 15.7507 15.0831C15.7507 14.8397 15.6649 14.6269 15.5056 14.4612ZM1.5283 6.61846C1.5283 3.85436 3.77611 1.60642 6.54033 1.60642C9.30443 1.60642 11.5462 3.85424 11.5462 6.61846C11.5462 9.3765 9.30443 11.6243 6.54033 11.6243C3.77611 11.6243 1.5283 9.3765 1.5283 6.61846Z" fill="#A1A5B0" stroke="#A1A5B0" stroke-width="0.125984" />
            </svg>
            <input
                type="text"
                placeholder="Ask for anything"
                className={styles.search_bar}
            />
        </div>
    );
};

export default SearchWidget;