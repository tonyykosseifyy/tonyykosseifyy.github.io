import * as React from 'react'
import { Card } from './NavbarComponents/Card'
import { Dock } from './NavbarComponents/Dock'
import { DockCard } from './NavbarComponents/DockCard'
import styles from './styles.module.scss'
import "./Navbar.css";
const pages = ["Home" , "About" , "Work" , "Contact Us"];


export default function Nav({ handleButtonClick ,indexSelected}) {
  return (
    <div>
      <Dock className="navbar">
        {pages.map((src, index) => (
            <DockCard key={src} index={index} indexSelected={indexSelected} handleButtonClick={() => handleButtonClick(index)}>
              <Card index={index} />
            </DockCard>
          )
        )}
      </Dock>
    </div>
  )
}

