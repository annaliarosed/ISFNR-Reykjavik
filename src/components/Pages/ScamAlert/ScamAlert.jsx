import React from "react";
import styles from "./ScamAlert.module.scss";
import CampaignIcon from "@mui/icons-material/Campaign";

const ScamAlert = () => {
  return (
    <div className={styles.content}>
      <section className={styles.section}>
        <h2
          style={{
            display: "flex",
            alignItems: "center",
            gap: "4px",
          }}
        >
          <CampaignIcon fontSize="large" />
          Phishing scam alert
        </h2>
        <div className={styles.papersWrapper}>
          <>
            <p>
              There are phishing emails circulating this year pretending to be a
              conference accommodation booking service. This is a widespread
              problem, impacting a number of conferences over the past years.
            </p>
            <p>
              We do <strong>NOT</strong> book accommodation for conference
              delegates, so please delete these emails on receipt and do not,
              under any circumstances, share your card details.
            </p>
            <p>
              The scammers appear to be using several email addresses such as
              booking(at)gtravelexpert.com, sometimes hidden behind a
              conference-related name.
            </p>
            <p>
              All genuine conference communication will originate from
              isfnr2026(at)nomadit.co.uk address.
            </p>
            <p>
              NB! This is not a data breach - the phishers appear to be picking
              off the names of accepted authors on the conference website and
              then finding email addresses on institutional websites.
            </p>
          </>
        </div>
      </section>
    </div>
  );
};

export default ScamAlert;
