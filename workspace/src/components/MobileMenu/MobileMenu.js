import { Button } from "@components";
import { Logo } from "@components";
import styles from "./MobileMenu.module.css";
import React from 'react';

export const MobileMenu = React.forwardRef((props, ref) => {
  return (
    <div className={styles.wrapper} id="test1" ref={ref}>

      <div className={styles.logo}>
        <Logo />
      </div>

      <ul className={styles.menu}>
        <li>
          <a href="https://t.me/">Telegram</a>
        </li>
        <li>
          <a href="https://twitter.com/">Twitter</a>
        </li>
      </ul>

      <div>
        <div className={styles.controls}>
          <a href="https://app.uniswap.org/#/swap?inputCurrency=eth&outputCurrency=0x00000000000000000000000000000000000000" className={styles.control}>
            Buy Tetu
          </a>
          <a href="https://app.tetu.io/" className={styles.control}>
            Enter App
          </a>
        </div>
      </div>
    </div>
  );
})
