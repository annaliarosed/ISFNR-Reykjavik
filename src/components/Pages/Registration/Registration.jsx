import React from "react";
import styles from "./Registration.module.scss"; // copy of your old styles, plus .feeTable at bottom
import StampTransparent from "../../icons/StampTransparent";
import cn from "classnames";
import Logo1 from "../../icons/Logo1";

const AnchorScrollButton = ({ targetId, children, className }) => {
  const handleClick = () => {
    const el = document.getElementById(targetId);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <button type="button" onClick={handleClick} className={className}>
      {children}
    </button>
  );
};

const FeeTable = ({ rows }) => (
  <div className={styles.paperProposalFees}>
    <table className={styles.feeTable}>
      <thead>
        <tr>
          <th>Registration category</th>
          <th>Fee (€)</th>
        </tr>
      </thead>
      <tbody>
        {rows.map(({ label, fee }) => (
          <tr key={label}>
            <td>{label}</td>
            <td>{fee}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

const Registration = () => {
  const f2fRows = [
    { label: "Non-members High", fee: 400 },
    { label: "Non-members Medium", fee: 360 },
    { label: "Non-members Low", fee: 330 },
    { label: "Members High", fee: 370 },
    { label: "Members Medium", fee: 330 },
    { label: "Members Low", fee: 300 },
  ];

  const onlineRows = [
    { label: "Non-members High", fee: 270 },
    { label: "Non-members Medium", fee: 245 },
    { label: "Non-members Low", fee: 200 },
    { label: "Members High", fee: 230 },
    { label: "Members Medium", fee: 200 },
    { label: "Members Low", fee: 180 },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.firstSection}>
        <div className={styles.headerWrapper}>
          <h1 className={styles.header}>ISFNR 2026 Registration</h1>
        </div>

        <nav className={styles.nav}>
          <ul className={styles.navList}>
            <li className={styles.navButton}>
              <AnchorScrollButton
                targetId="overview"
                className={styles.navLink}
              >
                <div className={styles.stamp}>
                  <StampTransparent />
                </div>
                Overview & How to Register
              </AnchorScrollButton>
            </li>
            <li className={styles.navButton}>
              <AnchorScrollButton targetId="fees" className={styles.navLink}>
                <div className={styles.stamp}>
                  <StampTransparent />
                </div>
                Congress Fees
              </AnchorScrollButton>
            </li>
            <li className={styles.navButton}>
              <AnchorScrollButton targetId="f2f" className={styles.navLink}>
                <div className={styles.stamp}>
                  <StampTransparent />
                </div>
                Face-to-Face Fees
              </AnchorScrollButton>
            </li>
            <li className={styles.navButton}>
              <AnchorScrollButton targetId="online" className={styles.navLink}>
                <div className={styles.stamp}>
                  <StampTransparent />
                </div>
                Online Fees
              </AnchorScrollButton>
            </li>
            <li className={styles.navButton}>
              <AnchorScrollButton
                targetId="cancellation"
                className={styles.navLink}
              >
                <div className={styles.stamp}>
                  <StampTransparent />
                </div>
                Cancelling & Refunds
              </AnchorScrollButton>
            </li>
            <li className={styles.navButton}>
              <AnchorScrollButton targetId="contact" className={styles.navLink}>
                <div className={styles.stamp}>
                  <StampTransparent />
                </div>
                Contact
              </AnchorScrollButton>
            </li>
          </ul>
        </nav>
      </div>

      <div className={styles.content}>
        <section id="overview" className={styles.section}>
          <h2>Overview & How to Register</h2>
          <div className={styles.papersWrapper}>
            <div className={styles.papersBlurb}>
              <p>
                All participants — including panel convenors, paper authors,
                chairs, discussants, organisers, keynote and plenary speakers,
                guests, volunteers, committee members, and attendees without
                specific roles — must register in advance of the event.
              </p>
              <p>
                If you are a co-author of a paper but not attending ISFNR2026,
                please inform the organisers by email:{" "}
                <a href="mailto:isfnr2026@nomadit.co.uk">
                  isfnr2026(at)nomadit.co.uk
                </a>
              </p>
            </div>

            <div className={styles.separator} />

            <div className={styles.papersBlurb}>
              <p>
                Registration is handled via an online form and does not require
                immediate payment. Once you register, you will receive an
                invoice by email, which can be paid by card or bank transfer.
                Invoices should be settled within 15 days.
              </p>
            </div>
          </div>
        </section>

        <section id="fees" className={styles.section}>
          <h2>Conference Fees</h2>
          <div className={styles.papersWrapper}>
            <div className={styles.papersBlurb}>
              <p>
                The ISFNR2026 Interim Conference will be a{" "}
                <strong>hybrid event</strong>, with the option to attend in
                person or participate online. All panels and plenaries will be
                accessible to both types of delegates, unless a specific format
                (e.g. a walking tour) prevents remote participation.
              </p>
              <p>
                <strong>
                  At least one convenor of accepted panels must be a member of
                  ISFNR for 2026.
                </strong>{" "}
                While other participants are not required to join the Society,
                membership is encouraged — and non-members will pay a higher
                registration fee.
              </p>
            </div>
            <div className={styles.separator} />
            <div className={styles.papersBlurb}>
              <p>
                We will not be requesting documents to verify that delegates
                choose the correct option according to their income. This system
                operates on trust. We hope that everybody assesses their
                institutional funding/income appropriately.
              </p>

              <p>
                Below are <strong>preliminary registration fees </strong>(final
                costs are being calculated). These may be reduced by the time
                registration opens, but they will not increase. Registration
                fees include social events, lunches, and coffee breaks.
              </p>

              <div className={styles.papersBlurb}>
                <p>
                  After the Early Bird registration is over, registration
                  continues with standard prices. Standard prices will be
                  confirmed by the end of Early Bird; expect an increase of
                  about €50. Early Bird ends on <strong>March 30, 2026</strong>.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="f2f" className={styles.section}>
          <h2>Face-to-Face Fees (Early Bird)</h2>
          <div className={styles.papersWrapper}>
            <div className={styles.papersBlurb}>
              <p>Early Bird registration: December 10, 2025 – March 30, 2026</p>
              <p>
                Face-to-Face Attendance (entire conference) - This fee includes
                access to all academic sessions and events, the opening
                reception, lunches, and coffee breaks.
              </p>
            </div>
            <div className={styles.separator} />
            <div className={styles.papersBlurb}>
              <FeeTable
                title="Face-to-Face Attendance — Early Bird"
                rows={f2fRows}
              />
            </div>
          </div>
        </section>

        <section id="online" className={styles.section}>
          <h2>Online Fees (Early Bird)</h2>
          <div className={styles.papersWrapper}>
            <div className={styles.papersBlurb}>
              <p>Early Bird registration: December 10, 2025 – March 30, 2026</p>
              <p>
                Online Attendance (entire conference) - This fee includes access
                to all academic sessions and events
              </p>
            </div>
            <div className={styles.separator} />
            <div className={styles.papersBlurb}>
              <FeeTable
                title="Online Attendance — Early Bird"
                rows={onlineRows}
              />
            </div>
          </div>
        </section>

        <section id="cancellation" className={styles.section}>
          <h2>Cancelling Your Registration</h2>
          <div className={styles.papersWrapper}>
            <div className={styles.papersBlurb}>
              <p>
                Cancellations made before <strong>April 27, 2026</strong> will
                be refunded, minus a €70 administrative fee. After that point,
                refunds will only be issued at the discretion of the organisers
                and may not cover the full amount. This also applies to changes
                from in-person to online attendance.
              </p>
            </div>

            <div className={cn(styles.papersBlurb, styles.queries)}>
              <Logo1 />
            </div>
          </div>
        </section>

        <section id="contact" className={styles.section}>
          <h2>Contact</h2>
          <div className={styles.papersWrapper}>
            <div className={styles.papersBlurb}>
              <p>
                If you experience issues or dissatisfaction with your
                registration, please contact us at{" "}
                <a href="mailto:isfnr2026@nomadit.co.uk">
                  isfnr2026(at)nomadit.co.uk
                </a>
                .
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Registration;
