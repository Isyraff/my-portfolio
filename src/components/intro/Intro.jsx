import "./intro.scss";


export default function Intro() {


  return (
    <div className='intro' id="intro">
        <div className="left">
            <div className="imgContainer">
            <img src="assets/test.png" alt="" />
            </div>
        </div>
        <div className="right">
          <div className="wrapper">
            <h2>Hi There, I'm</h2>
            <h1>Isyraff Irfan</h1>
            <h3>
              Computer Network and Security <span>Student</span>
            </h3>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
              when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into 
              electronic typesetting, remaining essentially unchanged.</p>
          <div className="resume">
          <a id="file" href="assets/RESUME.pdf" target="blank">
            <span type='button' className='btn btn--outline'>
              Resume
            </span>
          </a>
          </div>
          </div>
          <a id="turun" href="#portfolio">
            <img src="assets/down.png" alt="" />
          </a>
        </div>
    </div>
  )
}
