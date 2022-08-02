import "./menu.scss"

export default function Menu({menuOpen,setMenuOpen}) {
  return (
    <div className={"menu "+(menuOpen && "active")}>
        <ul>
            <li onClick={()=>setMenuOpen(!menuOpen)}>
                <a href="#intro">Home</a>
            </li>
            <li onClick={()=>setMenuOpen(false)}>
                <a href="#portfolio">Portfolio</a>
            </li>
            <li onClick={()=>setMenuOpen(!menuOpen)}>
                <a href="#testimonial">Skills</a>
            </li>
            <li onClick={()=>setMenuOpen(!menuOpen)}>
                <a href="#work">Past Project</a>
            </li>
            <li onClick={()=>setMenuOpen(!menuOpen)}>
                <a href="#testimonial">Contact</a>
            </li>
        </ul>
    </div>
  )
}
