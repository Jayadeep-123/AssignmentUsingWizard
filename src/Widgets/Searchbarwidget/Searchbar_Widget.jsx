import React from 'react';
import styles from './SearchbarWidget.module.css'; // Import as an object

const SearchbarWidget = ({ placeholder, className, inputClassName, onIconClick }) => {
  const widgetSearchContainerClass = `${styles.widgetSearchWrapper} ${className || ''}`.trim();
  const inputClass = `${styles.widgetSearchInput} ${inputClassName || ''}`.trim();

  return (
    <div className={widgetSearchContainerClass}>
      <div className={styles.widgetSearchInnerWrapper}>
        <svg 
          className={styles.searchIcon} 
          width="15" 
          height="15" 
          viewBox="0 0 15 15" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          onClick={onIconClick} // Make the icon clickable to toggle filter
          style={{ cursor: 'pointer' }} // Add pointer cursor for better UX
        >
          <path d="M6.79167 12.4583C9.92128 12.4583 12.4583 9.92128 12.4583 6.79167C12.4583 3.66205 9.92128 1.125 6.79167 1.125C3.66205 1.125 1.125 3.66205 1.125 6.79167C1.125 9.92128 3.66205 12.4583 6.79167 12.4583Z" stroke="#0A0A0A" stroke-width="1.41667" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M13.8748 13.8751L10.829 10.8292" stroke="#0A0A0A" stroke-width="1.41667" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        <input
          type="text"
          className={inputClass}
          placeholder={placeholder}
          aria-label={placeholder}
        />
      </div>
    </div>
  );
};

export default SearchbarWidget;