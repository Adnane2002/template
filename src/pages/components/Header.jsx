import Link from 'next/link'
import React from 'react'
import logo from '../../../public/Images/logo.png'
import Image from 'next/image'
import { AiFillPlayCircle } from "react-icons/ai";

function Header() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary mb-5">
  <div className="container">
    <Image src={logo} width={141} height={46}/>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse d-flex justify-content-around px-2" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link" aria-current="page" href="#">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" href="#">Solutions</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" href="#">Pages</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" href="#">Elements</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" href="#">Blog</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" href="#">Contact</Link>
        </li>
      </ul>
    </div>
  </div>
  <div>
    <button className='btn btn-primary '><AiFillPlayCircle/>Watch the demo</button>
  </div>
</nav>
    </div>
  )
}

export default Header
