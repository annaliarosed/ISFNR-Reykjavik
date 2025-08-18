import React from "react";
import cn from "classnames";
import styles from "./Theme.module.scss";
import { images } from "../../../imageAssets";

const Theme = () => {
  return (
    <div className={cn(styles.section, styles.secondSection)}>
      <div className={styles.content}>
        <h2 className={styles.header}>Theme: Nature(s) in Narrative</h2>
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
      </div>

      <div className={styles.imgWrapper}>
        <div
          style={{
            backgroundImage: `url(${images.streetPhoto})`,
          }}
          className={styles.img}
        />
      </div>
    </div>
  );
};

export default Theme;
