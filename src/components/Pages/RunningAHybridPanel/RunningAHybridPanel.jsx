import React from "react";
import styles from "./RunningAHybridPanel.module.scss";
import StampTransparent from "../../icons/StampTransparent";

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

const RunningAHybridPanel = () => {
  return (
    <div className={styles.container}>
      <div className={styles.firstSection}>
        <div className={styles.headerWrapper}>
          <h1 className={styles.header}>Running a Hybrid Panel</h1>
        </div>

        <p className={styles.intro}>
          This page helps you prepare for the hybrid conference by explaining
          what is expected of you and the platform, volunteers, admin support
          and colleagues. You may have attendees and presenters face-to-face
          (f2f) in the room and remotely online in Zoom.
        </p>

        <nav className={styles.nav}>
          <ul className={styles.navList}>
            {[
              { id: "room-setup", label: "Room setup" },
              {
                id: "how-to-chair",
                label: "How to chair/convene your hybrid panel?",
              },
              { id: "how-to-take-questions", label: "How to take questions?" },
              { id: "plan-panel-time", label: "Plan your panel time" },
              { id: "remote-presentations", label: "Remote presentations" },
              { id: "volunteers", label: "Volunteers and their contribution" },
              { id: "recording-policy", label: "Recording policy" },
              {
                id: "access-online-sessions",
                label: "How to access online sessions?",
              },
            ].map(({ id, label }) => (
              <li key={id} className={styles.navButton}>
                <AnchorScrollButton targetId={id} className={styles.navLink}>
                  <div className={styles.stamp}>
                    <StampTransparent />
                  </div>
                  {label}
                </AnchorScrollButton>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className={styles.content}>
        {/* 1. Room setup */}
        <section id="room-setup" className={styles.section}>
          <h2>Room setup</h2>
          <div className={styles.sectionBody}>
            <p>
              Each room has a computer with camera and microphone, connected to
              a projector and speakers.
            </p>
            <p>
              In larger rooms there may be additional microphones (lapel or
              ceiling). Computer on the desk will be used by presenters and
              convenors.{" "}
              <strong>
                Notice! do not attempt to connect your own computer as then the
                setup with cameras and microphones is not working.
              </strong>{" "}
              You can transfer all the presentations to the set up presentation
              computer using a USB stick.
            </p>
            <p>
              The volunteer in the room will start the proper Zoom session on
              the computer, setting it to Gallery view so that in-person
              delegates in the room can see online delegates on the screen. All
              in-person presenters using a PowerPoint, etc. should share screen
              within Zoom so online delegates can see; similarly online
              delegates will present sharing screen.
            </p>
            <p>
              Convenors should use the room's computer to monitor the chat
              (between/after presenters) for questions from online delegates.
              Alternatively convenors could bring a laptop/tablet/phone from
              which to monitor the remote participant questions, but any
              additional devices in the room connected to the Zoom, MUST have
              their sound muted/off throughout, and their microphones muted,
              most of the time.
            </p>
          </div>
        </section>

        {/* 2. How to chair */}
        <section id="how-to-chair" className={styles.section}>
          <h2>How to chair/convene your hybrid panel?</h2>
          <div className={styles.sectionBody}>
            <p>As a chair/convenor, you should:</p>
            <ul className={styles.list}>
              <li>
                Enter the room and Zoom <strong>at least 20 minutes</strong>{" "}
                before the session starts, meet the volunteer. If you are using
                your own device to monitor online chat/questions, then join and
                become co-host of the Zoom session, keeping sound muted and mic
                muted as well.
              </li>
              <li>
                Check all speakers are present, correct AV equipment is
                available and the microphone is working. In most rooms the mic
                is built into the camera. Larger rooms may have a lapel mic
                available. Inform your room/panel's conference volunteer if
                there are any issues.
              </li>
              <li>
                If you are an online convenor use this time to liaise with your
                f2f stand-in/chair, so that you can both perform your roles.
              </li>
              <li>
                Decide how questions will be taken (both f2f and online – where
                you might prefer text chat to raised hands, or vice versa).
              </li>
              <li>
                Stick to the running order printed on the sheet on the door of
                your panel room. If there are good reasons to amend the order,
                please update the sheet and inform online participants.
              </li>
              <li>
                Plan panel/speaker time and how time-keeping reminders will be
                given to presenters (f2f and online).
              </li>
              <li>
                Encourage f2f people to sit towards the front of the room, so
                that everyone can see/hear – all the more important in hybrid
                context, where spoken f2f questions will need to come to the
                front and use the lapel mic.
              </li>
              <li>
                Open the session with a few introductory remarks, remembering to
                address both f2f and remote participants.{" "}
                <strong classname="strong">
                  Do not treat remote participants as second class citizens.
                </strong>{" "}
                Greet everyone, introduce yourselves and any other significant
                actors in the panel (discussants, volunteer etc).
              </li>
              <li>
                Remind everyone that the panel is taking place both in the room
                and in Zoom, and remind the audience that the panel will be
                recorded, ensuring they consent to this, or are given the choice
                to step out. The conference volunteer will take care of the
                recording.
              </li>
              <li>
                Introduce the panel topic (if necessary); introduce/invite
                people to present.
              </li>
              <li>
                Keep time and alert presenters to running out of time. See
                advice below.
              </li>
              <li>
                Address questions in the audience, both f2f and in Zoom (whether
                by chat or raised hand) and do your best to give both domains
                equivalence – do not forget the online participants!
              </li>
              <li>
                Prompt discussion:
                <ul className={styles.subList}>
                  <li>
                    Try to ensure the widest participation is achieved. Avoid
                    using names of people you know during questions/discussion
                    time – those whose names you do not know may feel
                    marginalised.
                  </li>
                  <li>
                    If a question and answer become a dialogue that excludes the
                    rest of the panel and make it impossible to ask
                    other/further questions, please interrupt and suggest
                    colleagues continue that particular line of discussion
                    later.
                  </li>
                </ul>
              </li>
              <li>
                Thank the speaker(s) and try to close the panel with a
                conclusion that references all the papers and their contribution
                to the panel's theme.
              </li>
              <li>End the Zoom session or ask the volunteer to do so.</li>
              <li>
                When the session ends, the panel must leave the room during the
                break even if the discussion is flowing. You should very clearly
                end the discussion and request that you all continue outside, in
                a more informal setting, over refreshments.
              </li>
            </ul>
            <p>
              We recommend having at least two convenors: one to focus on the
              in-person part of the session, the other to focus on the online
              part of the session, both supported by the panel volunteer.
            </p>
          </div>
        </section>

        {/* 3. How to take questions */}
        <section id="how-to-take-questions" className={styles.section}>
          <h2>How to take questions?</h2>
          <div className={styles.sectionBody}>
            <h3>Online</h3>
            <p>
              Agree with your volunteer and co-convenors how you'll take online
              questions – there being two options:
            </p>
            <ul className={styles.list}>
              <li>Writing questions into Zoom chat.</li>
              <li>
                Using the 'raise hand' function in Zoom (people raise their
                hands and pose their question orally).
              </li>
            </ul>
            <p>
              Once decided on which option is to be used, communicate this to
              the whole room. If you go for the 'raise hand' option, it's a good
              idea to have in place an alternative for people unable to present
              questions live (writing in chat for example) and decide who will
              be reading these questions out.{" "}
              <strong>
                Convenors should monitor the Zoom chat on the room's computer,
                or if they prefer, on their own device (with sound off)
              </strong>
              .
            </p>

            <div className={styles.separator} />

            <h3>F2F questions</h3>
            <p>
              For the online audience to hear questions from f2f participants,
              they need to be spoken into the room's mic. Decide which option
              you prefer:
            </p>
            <ul className={styles.list}>
              <li>
                Preferable: instruct the questioner to come to the front, stand
                where the speaker is, face the camera to ask their question.
                They can thus be seen and heard by f2f and online delegates
                alike.
              </li>
              <li>
                If such mobility is difficult, and there's a ceiling or lapel
                mic, this could be taken to the delegate asking the question,
                albeit remote participants will not see the questioner.
              </li>
              <li>
                Ask the current speaker to repeat the question for the online
                audience before answering.
              </li>
            </ul>
            <p>
              This choice will be dictated by the type of equipment available
              (camera mic or ceiling/lapel mic) and the level of recording
              consent you have from the audience.
            </p>
            <p>
              We will have tech support people running through the rooms before
              the session starts, so if you are at the panel 20 min earlier the
              tech person can help you to set everything up and make sure that
              you are using correct setting and microphone. We also monitor the
              conference from online and if it seems that there are tech issues
              a tech support person will be sent to assist.{" "}
              <strong>You are not left alone with the tech issues!</strong>
            </p>
            <strong>
              We recommend online questions be submitted in written format, and
              f2f questions are spoken from the front.
            </strong>
          </div>
        </section>

        {/* 4. Plan your panel time */}
        <section id="plan-panel-time" className={styles.section}>
          <h2>Plan your panel time</h2>
          <div className={styles.sectionBody}>
            <p>
              You will need to keep a strict eye on the time. Calculate the X
              minutes each speaker has based on the number of speakers in each
              session of the panel. Warn the speaker when they have 5 minutes
              remaining and when 1 minute is left; if they have not finished
              after X minutes, kindly but firmly bring them to a stop.
            </p>
            <p>
              We will provide red, yellow and green signal cards to each panel
              room that can be used to indicate how much time is still left.
            </p>
            <p>
              Make your wishes clear at the start of the session to both f2f and
              online participants, agreeing on both X minutes per speaker and
              how people will be reminded of how much time they have left.
            </p>
            <ul className={styles.list}>
              <li>
                For those online, you can open your microphone to give oral
                reminders or use reactions in Zoom menu, or simply write minutes
                into chat. Remind authors to keep their eye on whichever channel
                gets chosen for this.
              </li>
              <li>
                For f2f presenters, you might use paper/cards or oral
                instruction.
              </li>
            </ul>
          </div>
        </section>

        {/* 5. Remote presentations */}
        <section id="remote-presentations" className={styles.section}>
          <h2>Remote presentations</h2>
          <div className={styles.sectionBody}>
            <p>
              We recommend asking any colleagues presenting remotely to
              pre-record their presentation and send to you in advance, as
              connections can be unpredictable or consistently too poor to
              deliver a clear, audible presentation; or issues can arise on the
              day which can delay the panel.
            </p>
            <p>
              Authors can still present live, but they should try to check their
              connection speed before the conference and decide whether
              live/recorded is best based on this information.
            </p>
            <p>
              We'd also recommend ordering remotely presented papers after the
              f2f presentations, wherever possible, as experience suggests this
              makes for a smoother panel.
            </p>
          </div>
        </section>

        {/* 6. Volunteers */}
        <section id="volunteers" className={styles.section}>
          <h2>Volunteers and their contribution</h2>
          <div className={styles.sectionBody}>
            <p>
              The volunteer will start the Zoom session for the online
              participants and make chairs (if online) co-hosts, so that they
              have similar functionality as the volunteer. While
              chairs/convenors moderate presentations, the volunteer will try to
              solve technical issues – responding to any questions to do with
              screen sharing, cameras, mics etc.
            </p>
            <p>
              Sometimes they may consult the chair/convenor on what advice to
              give: for example, if a speaker is on a very poor connection, it
              may be a good idea for them to send their presentation file via
              the Zoom chat and have someone else share screen while they give
              oral directions.
            </p>
            <p>
              If you are confident in Zoom, please take such tasks (sharing
              screen, spotlighting etc) on yourself and leave the volunteer to
              other tech support (ensuring mics stay muted, responding to cries
              of help in chat, etc.)
            </p>
            <p>
              If anything happens that the volunteer does not know how to solve,
              they will call in a NomadIT tech support person who will assist.
            </p>
            <p>
              Volunteers are enthusiastic locals and students who have
              contributed their time in order to attend this major academic
              gathering. Please keep in mind that volunteers can not take over
              panel convenor responsibilities nor are they responsible for the
              failures in conference organisation – if you do wish to criticise
              or give constructive feedback on the conference, please do so at
              the conference office to the organisers or contact the NomadIT
              office.
            </p>
          </div>
        </section>

        {/* 7. Recording policy */}
        <section id="recording-policy" className={styles.section}>
          <h2>Recording policy</h2>
          <div className={styles.sectionBody}>
            <p>
              The conference aims to make panel recordings available to
              delegates to view at a time that suits them, giving better access
              for remote participants and those who missed particular panels for
              various reasons. If your panel does not wish to be recorded at
              all, you can ask the volunteer to NOT begin recording at the
              beginning of the session. Alternatively you can ask the conference
              administrators to delete the recording later. Presenters can also
              ask for the recording to be paused while they are presenting.
              (Please remind the volunteer to restart the paused recording for
              the next presenter!)
            </p>
            <p>
              Recordings will appear embedded on the panel page a couple of
              hours after the session ends, visible only to delegates. A couple
              of months after the conference, we may contact you to enquire
              whether the recording is to be deleted, retained for delegates, or
              made more widely available.
            </p>
          </div>
        </section>

        {/* 8. How to access online sessions */}
        <section id="access-online-sessions" className={styles.section}>
          <h2>How to access online sessions?</h2>
          <div className={styles.sectionBody}>
            <p>All Zoom links will be posted to the conference programme.</p>
            <p>
              Colleagues wishing to join the panel session remotely should
              navigate to the panel header/page on the online timetable and
              click on the 'Enter session' button. They need to be paid-up
              delegates for the conference and logged in to see this button.
              Visitors will not see the Enter button if not logged in or for
              example the payment has not arrived to the conference bank
              account. If a delegate has paid but cannot access the online link
              when logged in, please get in touch with the conference organisers
              at{" "}
              <a href="mailto:isfnr2026@nomadit.co.uk">
                isfnr2026(at)nomadit.co.uk
              </a>
              .
            </p>
            <p>
              Each session of a multi-session panel will have its own Zoom
              meeting with its own link (leading to separate recordings for each
              session) which will become active behind the 'Enter Nth session'
              button on the panel page, 15 minutes or so before each session. If
              colleagues are struggling to reach the correct Zoom they should be
              sure to refresh the panel page (15 minutes before the session
              start) and check the correct session is referred to before
              clicking the 'Enter Nth session' button.
            </p>
            <p>
              <strong>
                {" "}
                Make sure you are clear about the time zone (all times are given
                in GMT/UTC Reykjavík time)
              </strong>{" "}
              – use the{" "}
              <a
                href="https://dateful.com/time-zone-converter"
                target="_blank"
                rel="noopener noreferrer"
              >
                timezone converter
              </a>{" "}
              to avoid any confusion.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default RunningAHybridPanel;
