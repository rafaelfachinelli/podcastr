import styles from "./styles.module.scss";

import { useTheme } from "../../contexts/ThemeContext";

export default function ThemeSwitch() {
  const { toggleTheme } = useTheme();

  return (
    <div className={styles.themeSwitchContainer}>
      <input type="checkbox" id="switch" onClick={toggleTheme} />
      <label htmlFor="switch">Toggle</label>
    </div>
  );
}
