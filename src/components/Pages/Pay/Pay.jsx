import React, { useEffect } from "react";
import styles from "./Pay.module.scss"; // reuse wrapper/header styles

const Pay = () => {
  useEffect(() => {
    const JS_URL =
      "https://nomadit.co.uk/sharedlib/assets/api/pay/remotePayForms.js";
    const CSS_URL =
      "https://nomadit.co.uk/sharedlib/assets/api/pay/remotePayForms.css";

    // Inject CSS once
    if (!document.querySelector(`link[href="${CSS_URL}"]`)) {
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = CSS_URL;
      document.head.appendChild(link);
    }

    const initPayForm = () => {
      // This is what `var urlProxy = '/proxy/proxy.php';` does in plain JS
      window.urlProxy = "/proxy/proxy.php";

      if (typeof window.setupPaymentFormValidation === "function") {
        window.setupPaymentFormValidation(
          "form-delegate-stripe",
          "userReference",
          "conferenceId"
        );
      }

      if (typeof window.changeFormActionIfBrowserSupportsCORS === "function") {
        window.changeFormActionIfBrowserSupportsCORS(
          "form-delegate-stripe",
          "proxyForwardToUrl"
        );
      }
    };

    // Inject JS once, then init
    let script = document.querySelector(`script[src="${JS_URL}"]`);

    if (!script) {
      script = document.createElement("script");
      script.src = JS_URL;
      script.async = true;
      script.onload = initPayForm;
      document.body.appendChild(script);
    } else {
      // If it's already there but maybe not loaded yet
      if (script.getAttribute("data-loaded") === "true") {
        initPayForm();
      } else {
        script.addEventListener("load", initPayForm, { once: true });
      }
    }

    // Mark as loaded when load fires
    if (script) {
      script.addEventListener(
        "load",
        () => {
          script?.setAttribute("data-loaded", "true");
        },
        { once: true }
      );
    }
  }, []);

  return (
    <div className={styles.wrapper}>
      <div id="react-minisite-wrapper">
        <h1 className={styles.header}>Pay</h1>

        <div className={styles.formWrapper}>
          <p style={{ marginBottom: "1.5rem" }}>
            Please use the form below to pay your conference invoice by card.
            You will need your invoice/delegate number and the amount in EUR.
          </p>

          <form
            id="form-delegate-stripe"
            className="remotePaymentForm"
            action="/proxy/proxy.php"
            method="post"
          >
            {/* if proxy used, the destination handler url */}
            <input
              type="hidden"
              name="proxyForwardToUrl"
              value="https://nomadit.co.uk/api/pay/stripeDelegatePaymentFormHandler"
            />

            {/* if proxy used, the url to redirect to on any proxy-script error */}
            <input
              type="hidden"
              name="proxyErrorRedirectUrl"
              value="https://isfnr.org/pay"
              // adjust to your real pay page URL
            />

            {/* handler redirects here on any error */}
            <input
              type="hidden"
              name="urlError"
              value="https://isfnr.org/pay"
              // adjust to your real pay page URL
            />

            <input type="hidden" name="stripeIsLive" value="1" />
            <input
              type="hidden"
              name="stripeUrlSuccess"
              value="https://isfnr.org/pay_thx"
              // success page
            />
            <input
              type="hidden"
              name="stripeUrlCancel"
              value="https://isfnr.org/pay_fail"
              // cancel/fail page
            />
            <input
              type="hidden"
              name="stripePaymentDesc"
              value="ISFNR2026 conference registration payment"
            />
            <input type="hidden" name="stripeCurrency" value="EUR" />

            {/* for payment allocation and ajax validation */}
            <input type="hidden" name="conferenceId" value="133" />

            <fieldset>
              <label>Invoice/Delegate No: </label>
              <input
                type="text"
                name="userReference"
                defaultValue=""
                required
                pattern="^ *?[Dd]{1}[0-9]{1,6} *$"
                placeholder="eg D1234"
                title="Your invoice number is a D followed by one or more digits."
              />
              <br />

              <label>Invoice Amount: € </label>
              <input
                type="text"
                name="amount"
                defaultValue=""
                required
                pattern="^ *?[0-9]{1,3}(\.[0-9]{2})? *$"
                placeholder="EUR"
                title="Enter the amount from your invoice in EUR"
              />
              <br />

              <button type="submit">Pay by card</button>

              <img
                src="https://nomadit.co.uk/images/brands/stripe/badge/SolidDark/powered_by_stripe.png"
                alt="Powered By Stripe"
                style={{ marginLeft: "1rem", verticalAlign: "middle" }}
              />
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Pay;
