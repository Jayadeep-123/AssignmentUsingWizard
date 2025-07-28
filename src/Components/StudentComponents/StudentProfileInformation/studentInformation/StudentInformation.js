import { useState } from "react";
import ClassSelector from "../ClassSelector/ClassSelector";
import styles from './Studentinformation.module.css';

const StudentInformation = () => {
  const [activeClass, setActiveClass] = useState("Class 8");

  return (
    <div className={`container-fluid px-0 ${styles.studentContainer}`}>
      <div className="d-flex">
        <main className="flex-grow-1">
          <section className={styles.sectionBottom}>
            <div className={styles.mainContainer}>
              <div className={styles.innerContainer}>
                {/* Header Section */}
                <div className={styles.headerSection}>
                  <div className={`d-flex justify-content-between align-items-center pt-4 ${styles.headerContainer}`}>
                    {/* Left Section */}
                    <div className="d-flex align-items-center">
                      <div className={styles.iconContainer}>
                        <svg width="22" height="21" viewBox="0 0 22 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M10.0183 5.7593H15.9086M6.09151 5.7593H7.07322M6.09151 10.6678H7.07322M6.09151 15.5764H7.07322M10.0183 10.6678H15.9086M10.0183 15.5764H15.9086M1.67383 10.6678C1.67383 6.27175 1.67383 4.07272 3.03938 2.70717C4.40494 1.34161 6.60298 1.34161 11 1.34161C15.3961 1.34161 17.5952 1.34161 18.9607 2.70717C20.3263 4.07272 20.3263 6.27077 20.3263 10.6678C20.3263 15.0639 20.3263 17.2629 18.9607 18.6285C17.5952 19.9941 15.3971 19.9941 11 19.9941C6.60396 19.9941 4.40494 19.9941 3.03938 18.6285C1.67383 17.2629 1.67383 15.0649 1.67383 10.6678Z" stroke="white" strokeWidth="1.47256" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </div>
                      <div className="ms-2">
                        <h5 className="mb-0 fw-bold">Student Information</h5>
                        <small className="text-muted" style={{ fontSize: '12px' }}>
                          Get All Student Details Regarding Fee Payment, And More...
                        </small>
                      </div>
                    </div>

                    {/* Right Section (Class Selector) */}
                    <ClassSelector activeClass={activeClass} setActiveClass={setActiveClass} />
                  </div>
                </div>

                {/* Bottom Section */}
                <div className={`bottom-main d-flex justify-content-start align-items-start ${styles.bottomMain}`}>
                  <div className="mt-2" style={{ width: '100%', overflow: 'hidden' }}>
                    {/* Add content below class selector here */}
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default StudentInformation;
