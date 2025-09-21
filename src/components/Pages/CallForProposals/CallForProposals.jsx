import React from "react";
import styles from "./CallForProposals.module.scss";
import StampTransparent from "../../icons/StampTransparent";
import { Link } from "react-router-dom";
import { InfoOutline } from "@mui/icons-material";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";

const AnchorScrollButton = ({ targetId, children, className }) => {
  const handleClick = () => {
    const el = document.getElementById(targetId);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <button onClick={handleClick} className={className}>
      {children}
    </button>
  );
};

const CallForProposals = () => {
  return (
    <div className={styles.container}>
      <div className={styles.firstSection}>
        <div className={styles.headerWrapper}>
          <h1 className={styles.header}>
            ISFNR 2026 Call for Papers and Posters
          </h1>
        </div>

        <nav className={styles.nav}>
          <ul className={styles.navList}>
            <li className={styles.navButton}>
              <AnchorScrollButton targetId="papers" className={styles.navLink}>
                <div className={styles.stamp}>
                  <StampTransparent />
                </div>
                Proposing a paper
              </AnchorScrollButton>
            </li>
            <li className={styles.navButton}>
              <AnchorScrollButton targetId="posters" className={styles.navLink}>
                <div className={styles.stamp}>
                  <StampTransparent />
                </div>
                Proposing a poster
              </AnchorScrollButton>
            </li>
            <li className={styles.navButton}>
              <AnchorScrollButton
                targetId="strategy"
                className={styles.navLink}
              >
                <div className={styles.stamp}>
                  <StampTransparent />
                </div>
                Possible strategic advice
              </AnchorScrollButton>
            </li>
            <li className={styles.navButton}>
              <AnchorScrollButton
                targetId="transfer"
                className={styles.navLink}
              >
                <div className={styles.stamp}>
                  <StampTransparent />
                </div>
                Transfer Process
              </AnchorScrollButton>
            </li>
            <li className={styles.navButton}>
              <AnchorScrollButton targetId="info" className={styles.navLink}>
                <div className={styles.stamp}>
                  <StampTransparent />
                </div>
                Editing & Communication
              </AnchorScrollButton>
            </li>
          </ul>
        </nav>
      </div>

      <div className={styles.content}>
        <section id="papers" className={styles.section}>
          <h2>Proposing a paper</h2>
          <div className={styles.papersWrapper}>
            <div className={styles.papersBlurb}>
              <p>
                <div className={styles.programmeCallOut}>
                  <InfoOutline
                    fontSize="small"
                    style={{
                      marginTop: "2px",
                    }}
                  />
                  <p>
                    All proposals must be made via the online form on the{" "}
                    <Link reloadDocument to="/programme">
                      Programme tab
                    </Link>
                    , not by email. There is a 'Propose paper' button in the
                    title section of each open panel.
                  </p>
                </div>{" "}
                Navigate to the panel you are interested in and click on the
                'Propose' button to propose directly to that panel. There is
                also the possibility to submit a paper into the Sui
                Generis/Individual Papers section (if you do not find a suitable
                panel from the accepted panels list), from which thematic panels
                will be formed.
              </p>

              <p>
                On submission of the proposal, the authors will receive an
                automated email confirming receipt. If you do not receive this
                email, please first check your account via the "Log in" link in
                the toolbar above, to see if your proposal is there, under the
                conferences tab. If it is, it simply means your confirmation
                email got spammed/lost; if it is not, you will need to
                re-submit, as for some reason the process was not completed.
                Co-authors cannot be added/removed nor can papers be withdrawn
                by the proposers themselves; for that, please email{" "}
                <a href="mailto:isfnr2026@nomadit.co.uk">
                  isfnr2026(at)nomadit.co.uk
                </a>
              </p>

              <p>
                Proposals will be marked as pending until the end of the Call
                for Papers (1 October 2025). Convenors will then be asked to
                make their decisions over the papers proposed to their panel by
                15 October 2025 and to communicate those to the proposers,
                marking them up within the login environment.
              </p>
            </div>

            <div className={styles.separator} />

            <div className={styles.paperProposalLeftSection}>
              <div className={styles.paperProposalRules}>
                <p className={styles.rulesHeader}>Proposals must consist of:</p>
                <ul className={styles.paperProposalList}>
                  <li>
                    <div className={styles.stamp}>
                      <StampTransparent />
                    </div>{" "}
                    <p>a paper title </p>
                  </li>
                  <li>
                    <div className={styles.stamp}>
                      <StampTransparent />
                    </div>{" "}
                    <p>names and email addresses of any authors/co-authors</p>
                  </li>
                  <li>
                    <div className={styles.stamp}>
                      <StampTransparent />
                    </div>{" "}
                    <p>
                      a short abstract of fewer than 300{" "}
                      <span style={{ textDecoration: "underline" }}>
                        characters
                      </span>
                    </p>
                  </li>
                  <li>
                    <div className={styles.stamp}>
                      <StampTransparent />
                    </div>{" "}
                    <p>
                      long abstract of fewer than 250{" "}
                      <span style={{ textDecoration: "underline" }}>words</span>
                    </p>
                  </li>
                </ul>
              </div>

              <div className={styles.paperProposalRules}>
                <p
                  className={styles.rulesHeader}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  To propose a paper visit the{"  "}
                  <Link
                    reloadDocument
                    to="/programme"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      marginLeft: "2px",
                      color: "var(--inky-blue)",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    programme page
                    <OpenInNewIcon
                      style={{
                        marginLeft: "4px",
                      }}
                      fontSize="small"
                    />
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="posters" className={styles.section}>
          <h2>Proposing a poster</h2>
          <div className={styles.papersWrapper}>
            <div className={styles.papersBlurb}>
              <p>
                Poster sessions offer an opportunity for those who do not wish
                to present orally, or whose work is not yet at the paper
                presentation stage. Posters should engage clearly with the
                conference theme. Sessions will run throughout the Conference,
                with dedicated slots when poster presenters will be available at
                their respective display to answer questions/discuss their topic
                with colleagues. All posters must also be uploaded on the site
                (not necessarily at proposal stage, but before the conference)
                and there will also be an online session provided for poster
                presentations by colleagues attending virtually.
              </p>
            </div>

            <div className={styles.separator} />

            <div className={styles.paperProposalRules}>
              <p className={styles.rulesHeader}>Posters must consist of:</p>
              <ul className={styles.paperProposalList}>
                <li>
                  <div className={styles.stamp}>
                    <StampTransparent />
                  </div>{" "}
                  <p>a poster title </p>
                </li>
                <li>
                  <div className={styles.stamp}>
                    <StampTransparent />
                  </div>{" "}
                  <p>names and email addresses of any authors/co-authors</p>
                </li>
                <li>
                  <div className={styles.stamp}>
                    <StampTransparent />
                  </div>{" "}
                  <p>
                    long abstract of fewer than 250{" "}
                    <span style={{ textDecoration: "underline" }}>words</span>
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section id="strategy" className={styles.section}>
          <h2>Possible strategic advice</h2>
          <div className={styles.papersWrapper}>
            <div className={styles.papersBlurb}>
              <p>
                Alongside the 'Propose paper' button for each panel there is a
                statement as to how many papers have been proposed to that panel
                to-date. If you are proposing within the last days of the call,
                you might factor these statements into your consideration of
                where best to target your paper. If weighing up between two
                panels where one is heavily oversubscribed, you may have a
                higher chance of acceptance within the panel with fewer
                proposals. Obviously that's not guaranteed, but it's worth
                considering these strategies.
              </p>
            </div>

            <div className={styles.separator} />

            <div className={styles.papersBlurb}>
              <p>
                Good proposals not accepted in their original destination may be
                entered into a transfer process (see below) which affords a
                second attempt to accommodate your paper.
              </p>
            </div>
          </div>
        </section>

        <section id="transfer" className={styles.section}>
          <h2>Transfer Process</h2>
          <div className={styles.papersWrapper}>
            <div className={styles.papersBlurb}>
              <p>
                Papers which are neither accepted nor rejected, but marked for
                'transfer', will be given the opportunity to be rehoused into
                other panels. These papers marked for “transfer”, will be
                reviewed by the Committee to consider adding them to the Sui
                Generis list of papers.
              </p>
              <p>
                If the proposal is accepted by the Committee, we will inform the
                authors of the session in which their paper will participate. We
                aim to resolve all transfers by (1 month after paper proposals
                are reviewed)
              </p>
            </div>

            <div className={styles.separator} />

            <div className={styles.papersBlurb}>
              <p>
                Marking a paper for transfer should not be used to evade
                rejecting papers that do not meet academic criteria. We can
                accommodate a transfer process for papers which are deemed
                exceptional, but do not fit the panel to which they were
                proposed. Convenors of the panel can mark these papers for
                transfer.
              </p>
            </div>
          </div>
        </section>

        {/* <section id="format" className={styles.section}>
          <h2>Conference Format</h2>
          <p>The conference will run over four full days, each featuring...</p>
        </section> */}

        <section id="info" className={styles.section}>
          <h2
            style={{
              marginBottom: "24px",
            }}
          >
            Editing & Communication
          </h2>
          <div className={styles.papersWrapper}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "8px",
              }}
            >
              <div className={styles.infoSection}>
                <h3>Editing your paper</h3>
                <p>
                  Paper authors can use the login link in the toolbar above to
                  edit their proposals.
                </p>
              </div>

              <div className={styles.infoSection}>
                <h3>Pre-circulation of papers</h3>
                <p>
                  ISFNR has no rule about this, but many convenors are keen to
                  pre-circulate completed papers. To facilitate this and save on
                  email traffic, if requested by convenors, authors can upload
                  PDFs of their papers within the online system, which will then
                  show as downloadable files beneath the abstract on the public
                  panel page on the site. Initially these are configured to be
                  visible only to the panelists - but can be configured to be
                  visible to other delegate or the public, if desired.
                </p>
              </div>
            </div>

            <div className={styles.separator} />

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "8px",
              }}
            >
              <div className={styles.infoSection}>
                <h3>Communication between authors/convenors</h3>
                <p>
                  Convenor/author email addresses are not shown on the panel
                  pages for privacy/anti-spam reasons. However there is an
                  in-built secure email messaging system. If you cannot work
                  that, please email{" "}
                  <a href="mailto:isfnr2026@nomadit.co.uk">
                    isfnr2026(at)nomadit.co.uk
                  </a>{" "}
                  to obtain relevant email addresses.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default CallForProposals;
