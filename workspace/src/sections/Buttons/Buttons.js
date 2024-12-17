import styles from "./Buttons.module.css";

export function Buttons() {
  return (
    <div className={styles.wrapper}>
      <div className="container">
        <div className={styles.controls}>
          <a href="https://app.uniswap.org/#/swap?inputCurrency=eth&outputCurrency=0x00000000000000000000000000000000000000" className={styles.control}>
            Buy Tetu
          </a>
          <a href="https://app-tetu-io.vercel.app/" className={styles.control}>
            Enter App
          </a>
        </div>
      </div>
    </div>
  );
}
