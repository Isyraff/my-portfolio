import Hamburger from 'hamburger-react'
import "./topbar.scss";

export default function Topbar({menuOpen, setMenuOpen}) {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
            <a href="#intro" className="logo">
              My Portfolio.
            </a>
        </div>
        <div className="left">
          
        </div>
        <div className="right">
        <Hamburger label="Show menu" toggled={menuOpen} toggle={setMenuOpen}/>
               
        </div>
      </div>

    </div>
  )

}
