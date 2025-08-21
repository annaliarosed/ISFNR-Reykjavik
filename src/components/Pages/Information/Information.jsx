import React from "react";
import styles from "./Information.module.scss";
import StampTransparent from "../../icons/StampTransparent";
import BlueStampTransparent from "../../icons/BlueStampTransparent";
import cn from "classnames";
import Logo1 from "../../icons/Logo1";
import AnnouncementOutlinedIcon from "@mui/icons-material/AnnouncementOutlined";

//images
// import panelsLogIn from "../../../images/panelsLogIn.png";
// import virtualRoomImage from "../../../images/virtualRoomImage.png";
// import proposeDemo from "../../../images/proposeDemo.png";
// import managePanelDemo from "../../../images/managePanelDemo.png";
// import panelInfoDemo from "../../../images/panelInfoDemo.png";
// import paperStatusDemo from "../../../images/paperStatusDemo.png";
// import ButtonsDemo from "../../../images/ButtonsDemo.png";

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

const Information = () => {
  return (
    <div className={styles.container}>
      <div className={styles.firstSection}>
        <div className={styles.headerWrapper}>
          <h1 className={styles.header}>Useful Information ISFNR2026</h1>
        </div>

        <nav className={styles.nav}>
          <ul className={styles.navList}>
            <li className={styles.navButton}>
              <AnchorScrollButton
                targetId="useful-information"
                className={styles.navLink}
              >
                <div className={styles.stamp}>
                  <StampTransparent />
                </div>
                Useful Information
              </AnchorScrollButton>
            </li>
            <li className={styles.navButton}>
              <AnchorScrollButton targetId="hybrid" className={styles.navLink}>
                <div className={styles.stamp}>
                  <StampTransparent />
                </div>
                Hybrid
              </AnchorScrollButton>
            </li>
            <li className={styles.navButton}>
              <AnchorScrollButton
                targetId="convenors"
                className={styles.navLink}
              >
                <div className={styles.stamp}>
                  <StampTransparent />
                </div>
                Convenors
              </AnchorScrollButton>
            </li>
            <li className={styles.navButton}>
              <AnchorScrollButton targetId="authors" className={styles.navLink}>
                <div className={styles.stamp}>
                  <StampTransparent />
                </div>
                Authors
              </AnchorScrollButton>
            </li>
            <li className={styles.navButton}>
              <AnchorScrollButton
                targetId="marking-up"
                className={styles.navLink}
              >
                <div className={styles.stamp}>
                  <StampTransparent />
                </div>
                Marking up papers
              </AnchorScrollButton>
            </li>
          </ul>
        </nav>
      </div>

      <div className={styles.content}>
        <section id="useful-information" className={styles.section}>
          <h2>Useful Information</h2>
          <div className={styles.papersWrapper}>
            <div className={styles.papersBlurb}>
              <p>
                Hybrid: all panels and keynotes will be available to both
                face-to-face delegates and those online in Zoom, whether that be
                listening or presenting. The programme will run over four days.
                Each day of the Conference will include a keynote/plenary event
                and a series of parallel panel sessions that discuss selected
                themes.
              </p>
            </div>

            <div className={styles.separator} />

            <div className={cn(styles.papersBlurb, styles.queries)}>
              <Logo1 />

              <p>
                For any queries, please contact{" "}
                <a href="mailto:isfnr2026@nomadit.co.uk">
                  isfnr2026(at)nomadit.co.uk
                </a>
              </p>
            </div>
          </div>
        </section>

        <section id="hybrid" className={cn(styles.section, styles.col)}>
          <h2>hybrid online information</h2>
          <div className={cn(styles.papersWrapper, styles.col)}>
            <div className={cn(styles.papersBlurb, styles.image)}>
              <span>
                <p className={styles.subHeader}>How to find zoom links:</p>
                <p>
                  All registered delegates will gain access to the conference
                  via the congress programme. Both those registered as
                  participating face-to-face and online. These links will only
                  be visible during the conference
                </p>
                <p>
                  In order to access the Zooms and subsequent recordings you
                  need to be registered and logged in.
                </p>
                <p>
                  Once logged in the message and log in button in the programme
                  disappear and the website is showing that you are now 'logged
                  in'.
                </p>
              </span>

              <div className={styles.imgWrapper}>
                <div
                  className={styles.img}
                  style={{
                    backgroundImage: `url(${"https://isfnr.org/wp-content/uploads/2025/08/panelsLogIn.png"})`,
                  }}
                />
              </div>
            </div>

            <div className={styles.colSeparator} />
            <div className={cn(styles.papersBlurb, styles.image)}>
              <span>
                <p className={styles.subHeader}>
                  {" "}
                  Only logged in and paid up delegates will see the Zoom access
                  buttons in the programme.
                </p>
                <p>
                  Buttons for online access (titled: "Enter Virtual Room")
                  appear in the panel header above the abstracts.
                </p>
                <p>The same buttons will appear on plenaries, keynotes, etc.</p>
                <p>
                  Make sure you have the latest version of the Zoom app
                  installed on your computer and your camera and microphone
                  working. You will need to have a Zoom account (albeit this can
                  be a free account, not a professional one).
                </p>
                <p>
                  Online contributors must ensure that they have a strong enough
                  connection to present online. If this is not the case, it is
                  possible for contributors to send a recording to their
                  convenors; this can also be done as “in case” the internet
                  connection has problems on the day, or any other tech issues
                  they may be having from home. The congress admins on{" "}
                  <a href="mailto:isfnr2026@nomadit.co.uk">
                    isfnr2026(at)nomadit.co.uk
                  </a>{" "}
                  can also help organise a transfer.
                </p>
              </span>
              <div className={styles.imgWrapper}>
                <div
                  className={styles.img}
                  style={{
                    backgroundImage: `url(${"https://isfnr.org/wp-content/uploads/2025/08/virtualRoomImage.png"})`,
                  }}
                />
              </div>
            </div>
          </div>
        </section>

        <section id="convenors" className={cn(styles.section)}>
          <h2
            style={{
              marginBottom: "24px",
            }}
          >
            Information for Convenors
          </h2>
          <div className={styles.papersWrapper}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "30px",
              }}
            >
              <div className={styles.infoSection}>
                <h3>Convenor responsibilities</h3>
                <p>
                  It is the convenors' responsibility to ensure that all session
                  participants are well briefed and that panels meet ISFNR2026
                  requirements. To that end, convenors should not only
                  communicate their decisions about proposals to their session,
                  but also later in the process email the participants to:
                  inform them of the speaking order (this will also be displayed
                  on the website panel page), inform them as to how much time
                  they have been allocated, remind them to register to attend
                  the conference (the registration status of participants can be
                  seen in the login environment), inform them of any late
                  changes or additional chairs/discussants, and any other
                  information related to the session. If participants withdraw,
                  convenors should mark these withdrawals in the login
                  environment.
                  <a
                    href="https://cloud.nomadit.co.uk/index.php/s/mn98bpSfaDkScBy?dir=/&editing=false&openfile=true"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    For some guidance on the day of the panel, we have put
                    together a short checklist to help.
                  </a>
                </p>
              </div>

              <div className={styles.infoSection}>
                <h3>Distribution of papers over sessions</h3>
                <p>
                  No panel session should include more than four/five papers,
                  but can include fewer - this is a convenor decision. For
                  example, a panel with eight accepted can be split over two
                  sessions as 4+4, 6+2 or 2+6, etc. Convenors can indicate the
                  distribution by “dragging and dropping” papers in the desired
                  order,{" "}
                  <a
                    href="https://nomadit.co.uk/account/contact/manageConferences/isfnr2026"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    in the system.
                  </a>
                </p>
              </div>

              <div className={styles.infoSection}>
                <h3>How to mark your papers</h3>
                <p>
                  Please scroll down to the
                  <AnchorScrollButton
                    targetId="marking-up"
                    className={styles.scrollToLink}
                  >
                    Marking up papers
                  </AnchorScrollButton>
                  section for detailed guidelines.
                </p>
              </div>
            </div>

            <div className={styles.separator} />

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "30px",
              }}
            >
              <div className={styles.infoSection}>
                <h3>Number of sessions</h3>
                <p>
                  The maximum number of sessions will be decided when the call
                  for papers ends.
                </p>
              </div>

              <div className={styles.infoSection}>
                <h3>Adding co-convenors, chairs and discussants</h3>
                <p>
                  If you did not specify colleagues when proposing the panel,
                  you can add them through the system. You can do this by
                  clicking on the green ‘+ add convenor/chair/discussant’ button
                  at the bottom of each list of participants. Type their name,
                  institution and email into the boxes that appear, then click
                  the green ‘save’ on the right hand side, or the bottom of the
                  page, to confirm and save any changes/additions. Participants
                  will appear as ‘proposed’ and not be visible on the public
                  programme until they create an account and accept their role
                  via the email sent to them.
                </p>
                <div className={styles.imgWrapper}>
                  <div
                    className={styles.img}
                    style={{
                      backgroundImage: `url(${"https://isfnr.org/wp-content/uploads/2025/08/proposeDemo.png"})`,
                    }}
                  />
                </div>

                <p>
                  If you have difficulties with this, please email the
                  conference administrators with the name, institution and email
                  address of participants as well at the role you wish to add
                  them to,{" "}
                  <a href="mailto:isfnr2026@nomadit.co.uk">
                    isfnr2026(at)nomadit.co.uk
                  </a>{" "}
                  and we will send them a request to add their details to your
                  content.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="authors" className={cn(styles.section)}>
          <h2
            style={{
              marginBottom: "24px",
            }}
          >
            Information for Authors
          </h2>
          <div className={styles.papersWrapper}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "30px",
              }}
            >
              <div className={styles.infoSection}>
                <h3>Logging in to look up the fate of your paper</h3>
                <p>
                  We have asked convenors to email authors about their decisions
                  after the call for papers deadline (15 October 2025), but
                  sometimes emails fail, so you can check your paper acceptance
                  status by logging into the system from the conference website
                  (see the Log in link in the right corner of the conference
                  banner). Once logged in, click on the Logged in drop-down
                  menu, select Conferences, select the conference from the drop
                  down menu called ‘current’, and find the conference paper to
                  check its status. If it says ‘pending’, the decision is yet to
                  be made. Accepted/rejected speak for themselves and you can
                  read more below as to what ‘transfer’ means.
                </p>

                <p>
                  Authors can use this same Log in space to edit their proposals
                  as well as their personal details (add new institution,
                  correct a spelling etc.).
                </p>
              </div>

              <div className={styles.infoSection}>
                <h3>Editing your paper</h3>
                <p>
                  Paper authors can use the login link in the toolbar described
                  above to edit their proposals. Click the edit icon to the left
                  of the paper title to open the editing page. Make your changes
                  on the editing page and click "save" at the bottom of the page
                  to save these changes. Please do not edit your abstract
                  without consulting your convenors after the final decisions on
                  panel acceptance are made
                </p>
              </div>

              <div className={styles.infoSection}>
                <h3>Pre-circulation of papers</h3>
                <p>
                  ISFNR has no rule about this, but many convenors are keen to
                  pre-circulate completed papers. To facilitate this and save on
                  email traffic, if requested by convenors, authors can upload
                  PDFs of their papers within editing page mentioned above,
                  which will then show as downloadable files beneath the
                  abstract to participants in the panel.
                </p>
              </div>

              <div className={styles.infoSection}>
                <h3>Timing of presentations</h3>
                <p>
                  This will be finalized after the end of the call for papers.
                </p>
              </div>
            </div>

            <div className={styles.separator} />

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "30px",
              }}
            >
              <div className={styles.infoSection}>
                <h3>Communication between authors/convenors</h3>
                <p>
                  Convenor/author email addresses are not shown on the panel
                  pages for privacy/anti-spam reasons. However there is an
                  in-built secure email messaging system which has been updated
                  to give more reliable delivery. If you cannot work that,
                  please email{" "}
                  <a href="mailto:isfnr2026@nomadit.co.uk">
                    isfnr2026(at)nomadit.co.uk
                  </a>{" "}
                  to obtain relevant email addresses.
                </p>
              </div>
              <div className={styles.infoSection}>
                <h3>Adding co-authors</h3>
                <p>
                  If you did not specify colleagues when proposing the
                  paper/contribution, you can add them through the system. You
                  can do this by clicking on the green ‘+ add author’ button at
                  the bottom of the authors section. Type their name,
                  institution and email into the boxes that appear, then click
                  the green ‘save’ on the right hand side, or the bottom of the
                  page, to confirm and save any changes/additions.
                </p>
                <p>
                  Participants will appear as ‘proposed’ and not be visible on
                  the public programme until they create an account and accept
                  their role via the email sent to them.
                </p>

                <div className={styles.imgWrapper}>
                  <div
                    className={styles.img}
                    style={{
                      backgroundImage: `url(${"https://isfnr.org/wp-content/uploads/2025/08/proposeDemo.png"})`,
                    }}
                  />
                </div>

                <p>
                  If you have difficulties with this, please{" "}
                  <a href="mailto:isfnr2026@nomadit.co.uk">
                    email the conference administrators
                  </a>{" "}
                  with the name, institution and email address of participants
                  as well at the role you wish to add them to, and we will email
                  them a request to add their details to your content.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* MARKING UP YOUR PAPERS SECTION */}

        <section id="marking-up" className={cn(styles.section)}>
          <h2
            style={{
              marginBottom: "24px",
            }}
          >
            Marking up your papers
          </h2>
          <div className={styles.papersWrapper}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "30px",
              }}
            >
              <div className={styles.infoSection}>
                <p>
                  You can view and mark up individual paper proposals by going
                  to the{" "}
                  <a
                    href="https://nomadit.co.uk/account/contact/manageConferences/isfnr2026"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    conference management page
                  </a>{" "}
                  and clicking the pencil icon on the left of the panel
                  reference, under “Edit”.
                </p>

                <div className={styles.imgWrapper}>
                  <div
                    className={styles.img}
                    style={{
                      backgroundImage: `url(${"https://isfnr.org/wp-content/uploads/2025/08/managePanelDemo.png"})`,
                    }}
                  />
                </div>

                <span
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "4px",
                  }}
                >
                  <AnnouncementOutlinedIcon
                    fontSize="small"
                    sx={{
                      marginTop: "4px",
                    }}
                  />
                  <p>
                    N.B. the papers listed on this Manage Conferences page under
                    the list of panels are your (co)authored papers, not the
                    panel’s proposed papers.
                  </p>
                </span>
                <p>
                  To read all proposals received easily, on the Panel Edit page,
                  click the 'Download Paper Review Sheet' button at the top of
                  the page, to download a PDF of all the proposals.
                </p>

                <div className={styles.imgWrapper}>
                  <div
                    className={styles.img}
                    style={{
                      backgroundImage: `url(${"https://isfnr.org/wp-content/uploads/2025/08/panelInfoDemo.png"})`,
                    }}
                  />
                </div>

                <p>
                  The call for papers was open, so you may have received
                  proposals from people you do not know: please treat all
                  proposals as equally as you can, and do not only accept the
                  proposals you have solicited directly.
                </p>
              </div>

              <div className={styles.infoSection}>
                <h3>Timing of presentations</h3>
                <p>
                  This will be finalized after the end of the call for papers.
                </p>
              </div>

              <div className={styles.infoSection}>
                <p>
                  At the bottom of the page you will see five coloured boxes
                  with options for the papers:
                </p>

                <div className={styles.imgWrapper}>
                  <div
                    className={styles.img}
                    style={{
                      backgroundImage: `url(${"https://isfnr.org/wp-content/uploads/2025/08/paperStatusDemo.png"})`,
                    }}
                  />
                </div>
                <p>
                  All the papers will start in the grey 'Pending Papers' box.
                  You can drag and drop papers to the different boxes depending
                  on your decision, then click on 'Save' to finalise the
                  decision. You can also click on 'Reset/Refresh' if you want to
                  start over. Please drag the papers into the order in which you
                  initially wish them to be presented
                </p>
              </div>
            </div>

            <div className={styles.separator} />

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "30px",
              }}
            >
              <div className={styles.infoSection}>
                <h3>Status types for papers</h3>
                <p>
                  <span
                    style={{
                      fontWeight: "700",
                      color: "var(--inky-blue)",
                    }}
                  >
                    Accepted and Rejected:
                  </span>{" "}
                  are self-explanatory, to indicate if you wish to simply accept
                  or reject a paper.
                </p>

                <p>
                  <span
                    style={{
                      fontWeight: "700",
                      color: "var(--inky-blue)",
                    }}
                  >
                    Withdrawn:
                  </span>{" "}
                  is for when authors inform you or us that they are no longer
                  able to proceed with that proposal or attend the conference.
                  They do not always email us with this news so if you receive
                  such information later in the process, please remember to move
                  their papers to ‘Withdrawn’ and let us know by email <Email />
                  .
                </p>

                <p>
                  <span
                    style={{
                      fontWeight: "700",
                      color: "var(--inky-blue)",
                    }}
                  >
                    Transfer:
                  </span>{" "}
                  is for exceptional papers you would like to accept but don't
                  have space for, or don't wish to accept perhaps because they
                  aren't on your theme, but feel should be included somewhere in
                  the conference. Accepted transfer papers will be organised
                  into thematic panels.
                </p>
              </div>
              <div className={cn(styles.infoSection, styles.wide)}>
                <p>
                  Please mark up all proposals by 15 October, do not leave any
                  as 'pending'. After moving all papers, click on the 'Save'
                  button beneath the list. All accepted papers will immediately
                  show on your public panel page on the conference website,
                  beneath the panel abstract.
                </p>
              </div>

              <div className={styles.infoSection}>
                <span
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "4px",
                  }}
                >
                  <AnnouncementOutlinedIcon
                    fontSize="small"
                    sx={{
                      fill: "var(--inky-blue)",
                    }}
                  />

                  <h3>Emailing authors - VERY IMPORTANT!</h3>
                </span>
                <p>
                  When you mark up a paper, the decision will show in the
                  author's account. However the system does not send an email to
                  the author alerting them of the status change, so please do
                  your colleagues the courtesy of sending them an email
                  informing them of your decision.
                </p>
                <p>
                  To make this easier, once you’ve implemented all your
                  decisions, click the ‘Send an email’ button at the top of the
                  panel edit page and choose which subset(s) of authors you wish
                  to write to, and which method you wish to use to generate an
                  email.
                </p>

                <div className={styles.imgWrapper}>
                  <div
                    className={styles.buttonsImg}
                    style={{
                      backgroundImage: `url(${"https://isfnr.org/wp-content/uploads/2025/08/ButtonsDemo.png"})`,
                    }}
                  />
                </div>
              </div>

              <div className={styles.infoSection}>
                <h3>Editing</h3>
                <p>
                  You can edit a paper proposal by clicking on the pencil icon
                  below the paper title.
                </p>
              </div>

              <div className={styles.infoSection}>
                <h3>Final words</h3>
                <p>
                  Please try to meet the requested deadline (15/10/2025), as
                  this affects all the proposers and all the panels - we will
                  not be able to start the transfer process, before all papers
                  have been marked up
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Information;

const Email = () => {
  return (
    <a href="mailto:isfnr2026@nomadit.co.uk">isfnr2026(at)nomadit.co.uk</a>
  );
};
