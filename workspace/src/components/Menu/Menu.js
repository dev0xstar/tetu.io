import styles from "./Menu.module.css";

export function Menu() {
  return (
    <div className={styles.wrapper}>
      <ul className={styles.menu}>
        <li>
          <a href="https://t.me/">Telegram</a>  
        </li>
        <li>
          <a href="https://twitter.com/tetu_io">Twitter</a>
        </li>
      </ul>
    </div>
  );
}
