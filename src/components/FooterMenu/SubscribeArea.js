import React from 'react'
import styles from './SubscribeArea.module.scss'

export default function SubscribeArea() {
  return (
    <>
         <div className={styles.subscribeByEmailTwo}>
      <p
        className={styles.subscribeToStayTunedForNewProduct}
      >
        Subscribe to stay tuned for new product and latest
        updates. Let’s do it!
      </p>
      <SubscribeByEmail
        className={styles.subscribeByEmail}
      />
    </div>
    </>
  )
}

const SubscribeByEmail = () => {
    return (
      <div className={styles.subscribeByEmail}>
        <Enter />
        <Subscribe className={styles.subscribe} />
      </div>
    );
  };

  const Enter = () => {
    return (
      <div className={styles.enter}>
        <p className={styles.subscribe}>
          Enter your email address
        </p>
      </div>
    );
  };

  const Subscribe = () => {
    return (
      <div className={styles.subscribeTwo}>
        <p className={styles.subscribeButton}>Subscribe</p>
      </div>
    );
  };

