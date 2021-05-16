import format from "date-fns/format";
import enUS from "date-fns/locale/en-US";
import ThemeSwitch from "../ThemeSwitch";

import styles from "./styles.module.scss";

export function Header() {
  const currentDate = format(new Date(), "EEEEEE, d MMMM", {
    locale: enUS
  });

  return (
    <header className={styles.headerContainer}>
      <div className={styles.logo}>
        <img src="/logo.svg" alt="Podcastr" />
        <p>The best to you hear, always.</p>
      </div>

      <ThemeSwitch />

      <span>{currentDate}</span>
    </header>
  );
}
