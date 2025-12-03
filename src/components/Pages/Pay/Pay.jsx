import React, { useEffect } from "react";
import styles from "./Pay.module.scss";

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

    // Define global var urlProxy exactly as in their example
    if (!("urlProxy" in window)) {
      const proxyScript = document.createElement("script");
      proxyScript.type = "text/javascript";
      proxyScript.text = "var urlProxy = '/proxy/proxy.php';";
      document.body.appendChild(proxyScript);
    }

    const initPayForm = () => {
      // avoid running twice (e.g. navigating to /pay multiple times)
      if (window.__nomadPayInitialised) return;
      window.__nomadPayInitialised = true;

      if (typeof window.setupPaymentFormValidation === "function") {
        window.setupPaymentFormValidation(
          "form-delegate-stripe-EUR",
          "userReference",
          "conferenceId"
        );
      }

      if (typeof window.changeFormActionIfBrowserSupportsCORS === "function") {
        window.changeFormActionIfBrowserSupportsCORS(
          "form-delegate-stripe-EUR",
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
      script.onload = () => {
        script.setAttribute("data-loaded", "true");
        initPayForm();
      };
      document.body.appendChild(script);
    } else {
      if (script.getAttribute("data-loaded") === "true") {
        initPayForm();
      } else {
        script.addEventListener(
          "load",
          () => {
            script.setAttribute("data-loaded", "true");
            initPayForm();
          },
          { once: true }
        );
      }
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
            id="form-delegate-stripe-EUR"
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
              value="https://isfnr.org/we-meet-across-the-world/reykjavik-iceland/pay"
            />

            {/* handler redirects here on any error */}
            <input
              type="hidden"
              name="urlError"
              value="https://isfnr.org/we-meet-across-the-world/reykjavik-iceland/pay_thx"
            />

            <input type="hidden" name="stripeIsLive" value="1" />
            <input
              type="hidden"
              name="stripeUrlSuccess"
              value="https://isfnr.org/pay_thx"
            />
            <input
              type="hidden"
              name="stripeUrlCancel"
              value="https://isfnr.org/we-meet-across-the-world/reykjavik-iceland/pay_fail"
            />
            <input
              type="hidden"
              name="stripePaymentDesc"
              value="ISFNR2026 conference registration payment"
            />
            <input type="hidden" name="stripeCurrency" value="EUR" />

            {/* for payment allocation and ajax validation */}
            <input type="hidden" name="conferenceId" value="135" />

            <fieldset>
              <label>Invoice/Delegate No: </label>
              <input
                type="text"
                name="userReference"
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
                required
                pattern="^ *?[0-9]{1,3}(\\.[0-9]{2})? *$"
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
