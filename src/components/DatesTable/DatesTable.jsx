import React from "react";
import styles from "./DatesTable.module.scss";

const DatesTable = () => {
  return (
    <section className={styles.importantDates}>
      <h2>Important Dates</h2>

      <div className={styles.table}>
        <div className={styles.rowHeader}>
          <div>Event</div>
          <div>Dates</div>
        </div>
        {/* <div className={cn(styles.row, styles.strikeout)}>
          <div>Call for Panels</div>
          <div>10 May – 25 June 2025</div>
        </div> */}
        <div className={styles.row}>
          <div>Registration (Early Bird)</div>
          <div> 12 December 2025 - 30 March 2026</div>
        </div>
        <div className={styles.row}>
          <div>Conference</div>
          <div>13 – 16 June 2026</div>
        </div>
      </div>
    </section>
  );
};

export default DatesTable;
