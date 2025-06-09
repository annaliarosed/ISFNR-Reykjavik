import React from "react";
import styles from "./DatesTable.module.scss";
import FmdBadOutlinedIcon from "@mui/icons-material/FmdBadOutlined";

const DatesTable = () => {
  return (
    <div>
      <section className={styles.importantDates}>
        <p className={styles.note}>
          <FmdBadOutlinedIcon
            sx={{
              color: "#f8f8f8",
            }}
            fontSize="small"
          />
          The deadline for panel proposals is June 20
        </p>
        <h2>Important Dates</h2>

        <table className={styles.datesTable}>
          <thead>
            <tr>
              <th>Event</th>
              <th>Dates</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Call for Panels</td>
              <td>10 May – 20 June 2025</td>
            </tr>
            <tr>
              <td>Call for Papers & Posters</td>
              <td>15 Aug – 01 Oct 2025</td>
            </tr>
            <tr>
              <td>Conference</td>
              <td>13 – 16 June 2026</td>
            </tr>
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default DatesTable;
