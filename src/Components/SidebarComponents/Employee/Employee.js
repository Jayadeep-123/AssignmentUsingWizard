import styles from './Employee.module.css';

const Employee = () => {
    return (

        <div className={styles.employee}>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.0003 8.14743C11.4322 8.14743 12.5929 6.98669 12.5929 5.55484C12.5929 4.12299 11.4322 2.96225 10.0003 2.96225C8.56846 2.96225 7.40771 4.12299 7.40771 5.55484C7.40771 6.98669 8.56846 8.14743 10.0003 8.14743Z" stroke="#595E6C" stroke-width="1.07143" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M15.8337 15.9245C15.8337 12.7029 13.2219 10.0912 10.0003 10.0912C6.77871 10.0912 4.16699 12.7029 4.16699 15.9245" stroke="#595E6C" stroke-width="1.07143" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M10.0004 15.9245L11.2967 14.3041L10.0004 10.0912L8.7041 14.3041L10.0004 15.9245Z" stroke="#595E6C" stroke-width="1.07143" stroke-linecap="round" stroke-linejoin="round" />
            </svg>



            <p>Employee</p>
        </div>

    );
}
export default Employee;