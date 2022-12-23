import * as React from 'react'

import { Card } from './NavbarComponents/Card'
import { Dock } from './NavbarComponents/Dock'
import { DockCard } from './NavbarComponents/DockCard'
import { DockDivider } from './NavbarComponents/DockDivider'

import styles from './styles.module.scss'

const GRADIENTS = [
  'https://products.ls.graphics/mesh-gradients/images/03.-Snowy-Mint_1-p-130x130q80.jpeg',
  'https://products.ls.graphics/mesh-gradients/images/04.-Hopbush_1-p-130x130q80.jpeg',
  'https://products.ls.graphics/mesh-gradients/images/06.-Wisteria-p-130x130q80.jpeg',
  'https://products.ls.graphics/mesh-gradients/images/09.-Light-Sky-Blue-p-130x130q80.jpeg',
  'https://products.ls.graphics/mesh-gradients/images/12.-Tumbleweed-p-130x130q80.jpeg',
  'https://products.ls.graphics/mesh-gradients/images/15.-Perfume_1-p-130x130q80.jpeg',
  null,
  'https://products.ls.graphics/mesh-gradients/images/36.-Pale-Chestnut-p-130x130q80.jpeg',
]
const pages = [
  "Home" , "About" , "Work" , "Contact Us"
];

const icons = ["home" , "about" , "work" , "contact"]

export default function App(props) {
  return (
    <div className={styles.body}>
      <Dock>
        {pages.map((src, index) => (
            <DockCard key={src}>
              <Card src={icons[index]} />
            </DockCard>
          )
        )}
      </Dock>
    </div>
  )
}

