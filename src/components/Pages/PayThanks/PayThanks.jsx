import React from "react";
import styles from "./PayThanks.module.scss";

const PayThanks = () => {
  return (
    <div className={styles.wrapper}>
      <h1>Payment Successful!</h1>
      <h2>Thank you for paying your registration online.</h2>
      <p>
        You will receive an emailed PDF receipt from the WCEH conference
        administration shortly. (Please check your spam folder if this does not
        arrive within five minutes.)
      </p>
    </div>
  );
};

export default PayThanks;
