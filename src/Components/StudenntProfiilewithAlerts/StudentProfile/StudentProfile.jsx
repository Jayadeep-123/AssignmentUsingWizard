import React, { useState } from 'react';
import SearchBarWidget from '../../../Widgets/Searchbarwidget/Searchbar_Widget';
import styles from './StudentProfile.module.css';
import Alerts from '../Alerts/Alerts';
import FilterWidget from '../../../Widgets/FilterWidget/FilterWidget';
import backgroundImage from '../../../assets/background.png';
import RecentStudentList from '../../RecentSearches/RecentSearch'

const StudentProfile = () => {
  const [showFilter, setShowFilter] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const backgroundUrl = `url(${backgroundImage})`;

  // Handler to toggle filter visibility
  const handleToggleFilter = () => {
    setShowFilter(!showFilter);
  };

  // Handler for search button click
  const handleSearchClick = () => {
    setShowResults(true);
    setShowFilter(false); // Optionally close the filter dropdown after search
  };

  return (
    <>
      <div className={styles.profileSectionMainContainer} style={{ '--background-url': backgroundUrl }}>
        <header className={styles.profileSectionHeader}>
          <h1 className={styles.profileSectionTitle}>Student Profile</h1>
          <p className={styles.profileSectionDescription}>
            Access and manage comprehensive student details seamlessly. View personalized profiles tailored to your campus.
          </p>
        </header>
        <div className={styles.profileSectionSearchArea}>
          <SearchBarWidget
            placeholder="Search for student profile"
            className={styles.profileSectionSearchBar}
            inputClassName={styles.profileSectionSearchInput}
            onIconClick={handleToggleFilter} // Pass handler to toggle on icon click
          />
          {showFilter && <FilterWidget className={styles.filterDropdown} onSearch={handleSearchClick} />}
        </div>
      </div>

      {!showResults && (
        <div>
          <Alerts />
        </div>
      )}

      {showResults && <RecentStudentList />}
    </>
  );
};

export default StudentProfile;