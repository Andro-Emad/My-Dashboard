'use client'
import { useState } from 'react'
import "../../app/framework.css";
import './Style.NavBar.css'
import 'remixicon/fonts/remixicon.css'

export default function page() {
  const [darckMode, setDarckMode] = useState(true)
  const [icon, setIcon] = useState('ri-moon-line ')
  const darck = () => {
    if (darckMode == true) {
      //     document.body.classList.add('darck')
      //     document.getElementById('head').classList.add('darckMode')
      //     document.getElementById('sidebar').classList.add('darckMode')
      setDarckMode(false)
      setIcon('ri-sun-line ')
    } else {
      // document.body.classList.remove('darck')
      setDarckMode(true)
      setIcon('ri-moon-line')
    }
  }
  return (

    <div class="head bg-white p-15 between-flex" id='head'>
      <div class="search p-relative">
        <i class="ri-search-line"></i>
        <input class="p-10" type="search" placeholder="Type A Keyword" />
      </div>
      <div class="icons d-flex align-center gap-10">
        <div class=" p-relative" onClick={darck}>
          <i className={icon}></i>
        </div>
        <span class="notification p-relative">
          <i class="ri-notification-3-line"></i>
        </span>
        <img decoding="async" src="avatar.png" alt="avatar" />
      </div>
    </div>
  )
}
