import React from "react";
import styles from "./PayThanks.module.scss";

const PayThanks = () => {
  return (
    <div className={styles.content}>
      <section className={styles.section}>
        <h2>Payment Successful!</h2>
        <div className={styles.papersWrapper}>
          <h4>Thank you for paying your registration online.</h4>

          <p>
            You will receive an emailed PDF receipt from the ISFNR conference
            administration shortly. (Please check your spam folder if this does
            not arrive within five minutes.)
          </p>
        </div>
      </section>
    </div>
  );
};

export default PayThanks;
