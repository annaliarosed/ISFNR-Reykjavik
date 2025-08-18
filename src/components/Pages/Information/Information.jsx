import React from "react";
import styles from "./Information.module.scss";

const sections = [
  { id: "overview", title: "Overview" },
  { id: "questions", title: "Key Questions" },
  { id: "archives", title: "Narrative & Archives" },
  { id: "methods", title: "Narrative & Nature" },
];

const Information = () => {
  return (
    <div className={styles.informationContainer}>
      <nav className={styles.nav}>
        <ul>
          {sections.map(({ id, title }) => (
            <li key={id}>
              <a href={`#${id}`}>{title}</a>
            </li>
          ))}
        </ul>
      </nav>

      <section id="overview" className={styles.section}>
        <h2>Overview</h2>
        <p>
          The ISFNR 2026 conference explores the theme{" "}
          <strong>“nature(s) in narrative”</strong>. Participants are invited to
          examine how stories reflect, shape, and challenge our understandings
          of the natural world and its entanglements.
        </p>
      </section>

      <section id="questions" className={styles.section}>
        <h2>Key Questions</h2>
        <ul>
          <li>How do ideas of nature inform identity, heritage, and belief?</li>
          <li>
            What is considered “natural” in different storytelling traditions?
          </li>
          <li>
            How do stories shape or disrupt boundaries between humans and
            non-humans?
          </li>
          <li>
            How do climate change, technology, and misinformation challenge
            narrative forms?
          </li>
        </ul>
      </section>

      <section id="archives" className={styles.section}>
        <h2>Narrative & Archives</h2>
        <p>
          Archives, both institutional and informal, shape the way narratives
          are collected, preserved, and interpreted. What “natures” of narrative
          do archival practices reveal or obscure?
        </p>
      </section>

      <section id="methods" className={styles.section}>
        <h2>Narrative & Nature</h2>
        <p>
          The conference encourages reflection on how the natural world
          influences narrative methods and modes: from embodied storytelling to
          digital folklore, from enchantment to ecological grief.
        </p>
      </section>
    </div>
  );
};

export default Information;
