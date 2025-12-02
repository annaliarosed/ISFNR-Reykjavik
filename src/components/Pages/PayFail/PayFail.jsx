import React from "react";
import styles from "./PayFail.module.scss";

const PayFail = () => {
  return (
    <div className={styles.wrapper}>
      <h1>Payment Failed</h1>
      <h2>Your attempt to pay your registration online did not succeed.</h2>
      <p>
        If you wish to try again, return to the emailed invoice and click on the
        payment link. <br /> <br /> If you prefer not to, or cannot, make your
        payment through Stripe, then return to your invoice and click on the
        link, to see information on alternative means of payment.
        <br /> <br /> Thanks for taking the time to settle your invoice today.
      </p>
    </div>
  );
};

export default PayFail;
