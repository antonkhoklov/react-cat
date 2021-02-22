import React from 'react';
import styles from './FactCard.module.css';

type FactCardProps = {
  image: any,
  text: string
}

const FactCard = (props: FactCardProps) => {
  return (
    <div className={styles.img_container}>
      <p className={styles.text}>{props.text}</p>
      <img className={styles.img} src={props.image}/>
    </div>
  )
}

export default FactCard
