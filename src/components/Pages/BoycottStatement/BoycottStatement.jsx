import React from "react";
import styles from "./BoycottStatement.module.scss";

const BoycottStatement = () => {
  return (
    <div className={styles.content}>
      <section className={styles.section}>
        <h2>Academic boycott policy</h2>
        <div className={styles.papersWrapper}>
          <>
            <p>
              A boycott of Russian universities has been in place at the
              University of Iceland since the 2022 invasion of Ukraine. The host
              department has also boycotted Israeli educational institutions and
              academic staff deemed complicit in genocide, war crimes and ethnic
              cleansing in Gaza and the West Bank. We recognize that there are
              Israeli colleagues who oppose the genocide and war crimes of the
              Israeli government, and even risk their lives and limbs in
              resisting them. In an effort not to isolate them, non-complicit
              delegates can participate without affiliation to said
              institutions.
            </p>
          </>
        </div>
      </section>
    </div>
  );
};

export default BoycottStatement;
