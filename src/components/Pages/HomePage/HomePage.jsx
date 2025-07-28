import React from "react";

import styles from "./HomePage.module.scss";
import NarwhalGroup from "../../NarwhalGroup";
import cn from "classnames";
import { images } from "../../../imageAssets";
import FmdBadOutlinedIcon from "@mui/icons-material/FmdBadOutlined";
import DatesTable from "../../DatesTable/DatesTable";

const HomePage = () => {
  return (
    <div className={styles.wrapper}>
      <div className={cn(styles.section, styles.firstSectionWrapper)}>
        <div className={styles.firstSection}>
          <div className={styles.text}>
            <h1 className={styles.header}>Nature(s) in Narrative</h1>
            <p className={styles.text}>
              {`The ISFNR Interim conference in 2026 will be held in Reykjavík Iceland, June 13th to 16th.

        The conference will take place at the main campus of the University of Iceland, a walking distance from the vibrant city centre of Reykjavík. With nearly 24 hours of daylight,and plenty of geothermal pools to soak in, it’s the perfect place to recharge on all levels.

        The conference is hosted by the department of Folkloristics at the University of Iceland, the Icelandic Association of Ethnology and Folklore and The Árni Magnússon Institute for Icelandic Studies.

        This will be a hybrid event, so delegates will be able to participate either virtually or in person.

        We look forward to seeing you in Reykjavík!`}
            </p>

            <div>
              <DatesTable />
            </div>
          </div>

          <div>
            <div className={styles.narwhal}>
              <NarwhalGroup />
            </div>
          </div>
        </div>
      </div>

      {/* <div className={cn(styles.section, styles.secondSection)}>
        <h2>Conference Theme</h2>
        <p className={styles.text}>
          The conference engages broadly with the theme of nature(s) in
          narrative. We ask how narrative is entangled with nature in its
          various forms, situated in the micro and macro, the rural and urban,
          ranging from essentialist notions of the natural, the supernatural to
          non-binary assemblages of nature-culture. Subjects for discussion
          might include the following:
        </p>

        <ul className={styles.list}>
          <li>
            How do notions of nature relate to narrations of identity, heritage,
            the national and personal, the physical and the spiritual?
          </li>
          <li>
            What comprehensions of “the natural” can be gleaned from
            storytelling, in its various cultural and social contexts, and in
            folk narrative research itself?
          </li>
          <li>
            How has our narrative vocabulary and academic terminology borrowed
            from and conversed with the discourses of nature?
          </li>
          <li>Does folk narrative entail a commons of sorts?</li>
          <li>
            How do environment and disparate nature-cultural assemblages shape
            narrative, characters, flow, style and storytelling events?
          </li>
          <li>
            How are human and non-human entanglements expressed, sensed,
            performed and reimagined in storytelling events?
          </li>
          <li>
            How do narrators delineate “selves” from “the other” in the living
            world; the natural from the “unnatural” or supernatural; the mundane
            from the enchanted?
          </li>
          <li>
            How are our conceptions of nature shaped and challenged by unusual
            “natural events” and climate crises, or urbanisation, technology,
            information disorder (fake news) and artificial intelligence?
          </li>
          <li>
            What are the “natures” of archives and how are they shaped by
            narratives?
          </li>
          <li>
            Do natures in narrative reveal aspects of the “natures” of
            narrative, its forms, functions and practice?
          </li>
        </ul>
      </div> */}
      {/* <div id="rules" className={cn(styles.section, styles.thirdSection)}>
        <h2>Rules for proposing a panel</h2>
        <div className={styles.thirdSectionContent}>
          <div className={styles.rulesWrapper}>
            <ol className={styles.list}>
              <li>{`Proposals must consist of:
· a panel title
· names and email addresses of the (two) panel convenors
· a short abstract of less than 300 characters
· long abstract of less than 250 words`}</li>
              <li>
                All panels should have (at least) two convenors. We strongly
                encourage that convenors be from at least two different
                institutions and/or countries so as to fulfil the ISFNR’s goal
                of international exchange.
              </li>
              <li>
                At least one convenor of a proposed panel is obliged to be a
                member (or apply shortly after proposing the panel) of ISFNR for
                2026. Paper-givers and other delegates are not obliged to become
                members of ISFNR, however all are encouraged to support the
                Society in this way. There will be a financial incentive to do
                so, in that members will be a eligible for a lower registration
                fee.
              </li>
              <li>
                ISFNR committees are encouraged to propose committee-related
                panels.
              </li>
              <li>
                The interim conference will be hybrid, with panels taking place
                in Reykjavík and online in Zoom. Please ensure at least one
                convenor will be able to attend in person.
              </li>
              <li>
                While adherence to the conference theme is not the main criteria
                for panel selection, ISFNR encourages conveners (those
                proposing/organising a panel) to make an effort to address the
                questions and ideas outlined in the theme description.
              </li>
            </ol>
            <div className={styles.deadlineText}>
              <p>
                The deadline for panel proposals has been extended to 25 June
              </p>
            </div>

            <div className={styles.proposePanelLink}>
              <a
                href="https://nomadit.co.uk/conference/isfnr2026/panel-form"
                target="_blank"
                rel="noreferrer"
              >
                Propose a Panel here
              </a>
            </div>
          </div>

          <div
            style={{
              backgroundImage: `url(${images.streetPhoto})`,
            }}
            className={styles.img}
          />
        </div>
      </div> */}
    </div>
  );
};

export default HomePage;
