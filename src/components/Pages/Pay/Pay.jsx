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
        <h1 className={styles.header}>
          ISFNR2026 conference payment information
        </h1>
        <div className={styles.section}>
          <h2>Payment of conference fees in EUROS ONLY</h2>
          <p>
            Do not continue with this page, unless you have been sent an
            invoice.
          </p>
          <p>To pay with Stripe does not require creating an account.</p>
        </div>

        <div className={styles.formWrapper}>
          <h2>By credit card</h2>
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
                pattern="^ *[0-9]{1,6}([.,][0-9]{1,2})? *$"
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

        <div className={styles.section}>
          <h2>By direct transfer</h2>

          <p>
            We would prefer that you paid by card, however if you need to, you
            can make a payment by bank transfer using the following details:
          </p>

          <ul>
            <li>Account name: NomadIT Events Ltd</li>
            <li>
              Bank name and address: MetroBank, One Southampton Row, London,
              WC1B 5HA, UK
            </li>
            <li>Account Noº: 44989859</li>
            <li>Sort code: 230580</li>
            <li>IBAN: GB45MYMB23058044989859</li>
            <li>BIC: MYMBGB2L</li>
            <li>Currency: euros</li>
            <li>Company Registered in UK, Number: 10457675.</li>
            <li>Registered for VAT in UK, No: 253 9749 64.</li>
            <li>
              NomadIT Registered Office: 8 Victoria Ave, Manchester, M19 2PB,
              UK.
            </li>
          </ul>

          <p>
            If you are able to give a reference, please give your
            invoice/delegate number. If you account name is different than the
            name we hold for you, please email{" "}
            <a href="mailto:isfnr2026@nomadit.co.uk">
              isfnr2026(at)nomadit.co.uk
            </a>
            , with subject "ISFNR2026 conference payment by bank transfer" so as
            to help identify your payment. In all cases, where possible please
            email a scan/digital capture of the transfer, to help us identify
            the payment.
          </p>

          <p>
            This is NOT a free service - please ensure that your bank charges
            your account and does not reduce the amount we receive.
          </p>
        </div>

        <div className={styles.section}>
          <h2>Refund policy</h2>

          <p>
            If you cancel your registration by notifying us by email more than
            six weeks in advance we will be able to refund your registration
            fee, minus €70 to cover our administrative and finance costs.
            Cancellations made after April 27, 2026 will not be eligible for
            such a refund, due to the costs already incurred. Refunds at that
            point will be discretionary. If you are unhappy with the
            'product/service' you have paid for, please email
            <a href="mailto:isfnr2026@nomadit.co.uk">
              isfnr2026(at)nomadit.co.uk
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Pay;
