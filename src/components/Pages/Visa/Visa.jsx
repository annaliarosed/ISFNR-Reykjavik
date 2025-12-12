import React from "react";
import styles from "./Visa.module.scss";

const Visa = () => {
  return (
    <div className={styles.content}>
      <section className={styles.section}>
        <h2>Visa Information for ISFNR 2026</h2>
        <div className={styles.papersWrapper}>
          <>
            <h3>Who Needs a Visa to Enter Iceland?</h3>
            <p>
              {" "}
              Iceland is a Schengen Area country. If you are a citizen or
              resident of a Schengen member state, you do not need a visa to
              travel to Iceland.
            </p>
            <p>
              In addition, citizens of many non-Schengen countries (e.g. USA,
              UK, Canada, Australia, Japan, South Korea, Brazil, etc.) can also
              enter visa-free for short stays (up to 90 days in any 180-day
              period).
            </p>
            <p>
              To check whether your nationality requires a visa, consult the
              official Icelandic Directorate of Immigration:{" "}
              <a
                target="_blank"
                rel="noreferrer"
                href="https://island.is/en/do-you-need-a-visa"
              >
                Who needs a visa?
              </a>
            </p>

            <p>
              If you are applying for a visa and need a reference letter from
              the conference, fill out this form:{" "}
            </p>
            <div
              style={{
                display: "flex",
              }}
            >
              <a
                target="_blank"
                rel="noreferrer"
                href="https://nomadit.co.uk/account/forms/conferenceVisaRequest/isfnr2026"
                className={styles.visaFormButton}
              >
                Visa reference letter form
              </a>
            </div>
          </>

          <div className={styles.separator} />

          <>
            <h3>Which Visa to Apply For</h3>
            <p>
              If you do require a visa, you should apply for a Short-Stay C Visa
              under the purpose "Participation in Cultural/Sports/Scientific
              Events."
            </p>
            <p>
              This allows you to attend the conference and stay in the Schengen
              Area for up to 90 days.
            </p>
          </>

          <div className={styles.separator} />

          <>
            <h3>Application Process</h3>
            <p>
              Start your application as soon as possible, as visa processing
              times may vary.
            </p>
            <div>
              <p>Steps to apply:</p>
              <ol>
                <li>Fill in the visa application form.</li>
                <li>Collect required documents (see below).</li>
                <li>
                  Book an appointment at your nearest Icelandic embassy,
                  consulate, or VFS centre.
                </li>
                <li>Attend your appointment with all documents.</li>
                <li>Wait for processing (usually 15 working days)</li>
              </ol>
            </div>
          </>

          <div className={styles.separator} />

          <>
            <h3>Required Documents</h3>
            <p>
              The following documents are generally required to be submitted in
              support of a visa application.
            </p>
            <p>
              Please note that these are only the basic requirements. On the
              website of the applicable embassy/consulate, you will find the
              complete list of requirements and the application procedure.
            </p>
            <ul className={styles.docList}>
              <li>
                <p>
                  Applicant's <b>passport photo</b> (35 x 45 mm).
                </p>
              </li>
              <li>
                <h4>Passport / Travel document</h4>
                <div>
                  <ul>
                    <li>Must not be more than ten years old.</li>
                    <li>
                      Must be valid at least three months beyond the planned
                      stay.
                    </li>
                    <li>Must have at least two blank pages</li>
                  </ul>
                </div>
              </li>

              <li>
                <p
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "4px",
                  }}
                >
                  Documents confirming <h4>financial means</h4>.
                </p>
              </li>
              <li>
                <p>
                  <h4>Documentation</h4> allowing for the assessment of the
                  applicant’s intention to leave the territory of the member
                  states.
                </p>
              </li>

              <li>
                <p>
                  <h4>Travel medical insurance</h4> with a minimum coverage of
                  EUR 30.000. Applicants shall, in principle, take out insurance
                  in their country of residence. Where this is not possible,
                  they shall seek to obtain insurance in any other country. The
                  insurance shall be valid throughout the Schengen area and
                  cover the entire period of the applicant’s intended stay or
                  transit.
                </p>
              </li>

              <li>
                <div>
                  <h4>Documents confirming the purpose of travel:</h4>
                </div>
                <ul>
                  <li>
                    For tourists, hotel booking and tour booking, as applicable.
                  </li>
                  <li>
                    If the intention is to attend a meeting or seminar,
                    confirmation/invitation from the applicable conference
                    organizer/institution.
                  </li>
                </ul>
              </li>
            </ul>

            <p>
              When lodging an application, the applicant shall allow the
              collection of his fingerprints and pay the visa fee.
            </p>
          </>

          <div className={styles.separator} />

          <>
            <h3>Where to Apply</h3>
            <p>
              Visa applications must be submitted at the{" "}
              <b>
                Icelandic embassy or consulate responsible for your country of
                residence
              </b>
              , or at a <b>VFS Global centre</b> processing Iceland visas.
            </p>

            <p>
              Find your local embassy or visa centre here:
              <a
                style={{
                  marginLeft: "4px",
                }}
                target="_blank"
                rel="noreferrer"
                href="https://island.is/en/get-a-visa/where-to-apply"
              >
                https://island.is/en/get-a-visa/where-to-apply
              </a>
            </p>
          </>

          <div className={styles.separator} />

          <>
            <h3>Processing Time</h3>
            <p>
              Standard processing is up to <b>15 working days</b>. In some cases
              it may take longer, so early application is recommended.
            </p>
          </>
        </div>
      </section>
    </div>
  );
};

export default Visa;
