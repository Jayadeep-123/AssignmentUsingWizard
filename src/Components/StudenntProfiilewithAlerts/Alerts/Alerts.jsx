import React from 'react';
import styles from './Alerts.module.css';
import AlertsCard from './AlertsCard';
import AlertsData from './AlertsData';

const Alerts = () => {
  return (
    <div className={styles.alertsSectionMainContainer}>
      <div className={styles.alertsSectionHeader}>
        <h2 className={styles.alertsSectionTitle}>Alerts</h2>
        <div className={styles.alertsSectionFilter}>
          <div className={styles.alertsSectionFilterText}>Last 7 days</div>
          <div className={styles.alertsSectionFilterIcon}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M8 10.5L12 14.5L16 10.5" stroke="#6E7C87" />
            </svg>
          </div>
        </div>
      </div>

      <div className={styles.alertsSectionCardsContainer}>
        {AlertsData.map(({ id, title, description }) => (
          <AlertsCard key={id} title={title} description={description} />
        ))}
      </div>
    </div>
  );
};

export default Alerts;
