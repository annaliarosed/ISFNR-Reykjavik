import React from "react";

import styles from "./HomePage.module.scss";
import NarwhalGroup from "../../NarwhalGroup";
import cn from "classnames";
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
              {/* <LogoLeftAligned /> */}
              {/* <Logo1 /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
