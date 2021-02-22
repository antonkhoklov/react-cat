import React from 'react';
import styles from "./ErrorMessage.module.css";

type ErrorMessage = {
  text: string
}

const ErrorMessage = (props: ErrorMessage) => {
  return (
    <div className={styles.root}>
      <p className={styles.text}>{props.text}</p>
    </div>
  )
}

export default ErrorMessage
