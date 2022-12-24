import * as React from 'react'
import styles from './styles.module.scss'

const icons = ["home" , "about" , "work" , "contact"];


interface CardProps {
  index: number
}
interface Svg {
  children: React.ReactNode
}


export const Card = ({ index }: CardProps)  => (
  <span className={styles.card}>
    <img className={styles.card__blur} src="" alt="" />
    <img className={styles.card__img}  src={require(`../../assets/${icons[index]}.png`)} />
    <h6>{icons[index]}</h6>
  </span>
)
