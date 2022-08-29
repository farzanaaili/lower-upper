import React from 'react'
import {MdDarkMode} from 'react-icons/md'

export default function Navbar (props){
  console.log(props.cMode)

  return (
    <>
  <nav className={`navbar navbar-expand-lg bg-info navbar-${props.cMode} `}>
  <div className="container-fluid">
    <a className="navbar-brand" href="/">{props.title}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a style={{color:"#000"}} className="nav-link "  href="/">Home</a>
        </li>
        <li className="nav-item">
          <a style={{color:"#000"}}  className="nav-link" href="/">About</a>
        </li>
        
      </ul>
      <form className={`d-flex text-${props.cMode ==='light' ? 'dark' : 'light'}`} >

        <MdDarkMode onClick={props.toggleMode}/>
      </form>
    </div>
  </div>
</nav>
    </>
  )
}


