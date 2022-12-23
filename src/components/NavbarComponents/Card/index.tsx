import * as React from 'react'

import styles from './styles.module.scss'

interface CardProps {
  src: string
}

export const Card = ({ src }: CardProps) => (
  <span className={styles.card}>
    <img className={styles.card__blur} src={`./assets/${src}.png`} alt="" />
    <img className={styles.card__img} src={`./src/assets/${src}.png`} alt="" />
    <h6>{src}</h6>
  </span>
)
