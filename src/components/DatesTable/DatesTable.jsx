import React from "react";
import styles from "./DatesTable.module.scss";
import FmdBadOutlinedIcon from "@mui/icons-material/FmdBadOutlined";

const DatesTable = () => {
  return (
    <section className={styles.importantDates}>
      <p className={styles.note}>
        <FmdBadOutlinedIcon sx={{ color: "#f8f8f8" }} fontSize="small" />
        The deadline for panel proposals is June 20
      </p>
      <h2>Important Dates</h2>

      <div className={styles.table}>
        <div className={styles.rowHeader}>
          <div>Event</div>
          <div>Dates</div>
        </div>
        <div className={styles.row}>
          <div>Call for Panels</div>
          <div>10 May – 20 June 2025</div>
        </div>
        <div className={styles.row}>
          <div>Call for Papers & Posters</div>
          <div>15 Aug – 01 Oct 2025</div>
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
