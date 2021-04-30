import styles from "./styles.module.scss";

export default function ThemeSwitch() {
  return (
    <div className={styles.themeSwitchContainer}>
      <input type="checkbox" id="switch" />
      <label htmlFor="switch">Toggle</label>
    </div>
  );
}
