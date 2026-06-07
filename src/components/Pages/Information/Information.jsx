import React from "react";
import styles from "./Information.module.scss";
import StampTransparent from "../../icons/StampTransparent";
import cn from "classnames";
import Logo1 from "../../icons/Logo1";
import ProgrammeNavigationImage from "../../icons/ProgrammeNavigationImage";
import PanelRecordingsImage from "../../icons/PanelRecordingsImage";

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
                Online Attendance
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
            {/* <li className={styles.navButton}>
              <AnchorScrollButton
                targetId="marking-up"
                className={styles.navLink}
              >
                <div className={styles.stamp}>
                  <StampTransparent />
                </div>
                Marking up papers
              </AnchorScrollButton>
            </li> */}
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

        <section id="hybrid" className={cn(styles.section)}>
          <h2 style={{ marginBottom: "24px" }}>
            Online attendance information
          </h2>
          <div className={styles.papersWrapper}>
            <div className={styles.papersBlurb}>
              <div className={styles.infoSection}>
                <h3>Entering/Navigating the Conference</h3>
                <p>
                  To access the conference remotely head to the ISFNR2026
                  programme and ensure you are logged in. Only logged-in,
                  paid-up delegates will be able to see the 'Enter Virtual Room'
                  buttons on the panel pages. You can find the links both in the
                  timetable, and from searching, or scrolling through the entire
                  list of panels.
                </p>
                <div className={styles.svgWrapper}>
                  <ProgrammeNavigationImage />
                </div>

                <p>
                  For example, to find Panel P10 click the search button
                  (magnifying glass) on the timetable toolbar, and type in P10.
                  You can then click on the panel name to expand to read
                  abstracts.
                </p>
                <p>
                  Use the participants tab to see a list of all delegates, which
                  you can search (or filter by role); mouseover a name to see a
                  pop-up showing name, institution, and links to the
                  panels/papers they are involved in. (Through Logged In, Manage
                  Account you can add a portrait/avatar and a short biography,
                  too.)
                </p>
                <p>The search button searches the full programme.</p>
                <p>
                  When logged in you can 'star' (favourite) panels you wish to
                  attend, so you can easily find them on the day by clicking on
                  the &#9733; icon in the programme view. (If you star a paper,
                  a hollow star will be added to its panel.)
                </p>
              </div>

              <div className={styles.infoSection}>
                <h3>Accessing the Zooms</h3>
                <p>
                  The hybrid conference takes place in Reykjavík, Iceland and on
                  Zoom, so chairs/convenors should be chairing their sessions
                  both in the face-to-face (f2f) room and in Zoom.
                </p>
                <p>
                  We will <strong>NOT</strong> be sending out any Zoom links, as
                  all sessions will be accessed via the website. Logged-in,
                  paid-up delegates can see 'Enter virtual room' buttons in the
                  panel explorer, specifically in the header of the panel page.
                  Click that button to enter the zoom for that panel.
                </p>
                <p>Make sure you are clear about the timezone.</p>
                <p>
                  <strong>N.B.</strong> If you are running Ad-block or other
                  privacy software and cannot see the blue buttons once logged
                  in, disable those extensions for the nomadit.co.uk domain.
                </p>
              </div>

              <div className={styles.infoSection}>
                <p className={styles.subHeader}>
                  Some tips when entering a zoom session:
                </p>
                <ol>
                  <li>
                    Remember to keep yourself muted if/when you are not
                    presenting, to avoid any feedback.
                  </li>
                  <li>
                    When presenting, try to use headphones or a good microphone.
                  </li>
                  <li>
                    You can choose whether or not to have your camera on; bear
                    in mind that the convenor will spotlight you when presenting
                    your paper.
                  </li>
                  <li>
                    For technical support, you can reach out to the volunteer in
                    the Zoom chat.
                  </li>
                </ol>
              </div>
            </div>

            <div className={styles.separator} />

            <div className={styles.papersBlurb}>
              <div className={styles.infoSection}>
                <h3>How to ask questions online</h3>
                <p>
                  Convenors will communicate at the start of the session how
                  they'd like to take questions from online participants. This
                  can happen in two main ways:
                </p>
                <ol>
                  <li>Writing questions into Zoom chat</li>
                  <li>
                    Using the 'raise hand' function in Zoom (when invited, you
                    then ask your question orally)
                  </li>
                </ol>
              </div>
              <div className={styles.infoSection}>
                <h3>Remote presentations</h3>
                <p>
                  If you worry about your Internet connection, we recommend to
                  pre-record your presentation and send to convenors in advance
                  (or to the conference email), as:
                </p>
                <ol>
                  <li>
                    Connections can be unpredictable or consistently too poor to
                    deliver a clear, audible presentation.
                  </li>
                  <li>
                    Issues can arise on the day which can delay the panel.
                  </li>
                </ol>
                <p>
                  Authors can still present live, but they should try to check
                  their connection speed before the conference and decide
                  whether live/recorded is best based on this information.
                </p>
              </div>

              <div className={styles.infoSection}>
                <h3>Viewing Panel Recordings</h3>
                <p>
                  Recordings of all the panels will appear embedded on the panel
                  page a couple of hours after the session ends, visible only to
                  delegates. Find the video beneath the panel's (paper)
                  abstracts. Click to expand and watch. The videos will remain
                  in place for at least two weeks.
                </p>
                <div className={styles.svgWrapper}>
                  <PanelRecordingsImage />
                </div>
              </div>

              <div className={styles.infoSection}>
                <h3>Recording panels</h3>
                <p>
                  If your panel does not wish to be recorded at all, you can ask
                  the volunteer to NOT begin recording at the beginning of the
                  session.
                </p>
                <p>
                  Alternatively you can ask the conference administrators to
                  delete the recording later. Presenters can also ask for the
                  recording to be paused while they are presenting.
                </p>
                <p>
                  (Please remind the volunteer to restart the paused recording
                  for the next presenter!)
                </p>
              </div>

              <div className={styles.infoSection}>
                <h3>Certificates of Attendance</h3>
                <p>
                  After the conference is over we will confirm with panel
                  convenors as to the attendance status of online participants
                  and about two weeks later, you can download your certificate.
                  Once logged in, go to Conferences in the drop-down and the
                  ISFNR2026 Conference to find the link to your Certificate.
                </p>
                <p>
                  If you have any questions, please get in contact:{" "}
                  <a href="mailto:isfnr2026@nomadit.co.uk">
                    isfnr2026(at)nomadit.co.uk
                  </a>
                </p>
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
                  distribution by "dragging and dropping" papers in the desired
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

              {/* <div className={styles.infoSection}>
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
              </div> */}
            </div>

            <div className={styles.separator} />

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "30px",
              }}
            >
              {/* <div className={styles.infoSection}>
                <h3>Number of sessions</h3>
                <p>
                  The maximum number of sessions will be decided when the call
                  for papers ends.
                </p>
              </div> */}

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
                  after the call for papers deadline (17 October 2025), but
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
                <p>Each panel lasts 105 minutes.</p>
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

        {/* <section id="marking-up" className={cn(styles.section)}>
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
                  reference, under "Edit".
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
                  Please mark up all proposals by 17 October, do not leave any
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
                  Please try to meet the requested deadline (17/10/2025), as
                  this affects all the proposers and all the panels - we will
                  not be able to start the transfer process, before all papers
                  have been marked up
                </p>
              </div>
            </div>
          </div>
        </section> */}
      </div>
    </div>
  );
};

export default Information;
