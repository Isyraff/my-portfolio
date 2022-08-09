import "./intro.scss";


export default function Intro() {


  return (
    <div className='intro' id="intro">
        <div className="left">
            <div className="imgContainer">
            <img src={process.env.PUBLIC_URL + '/assets/test.png'} alt="" />
            </div>
        </div>
        <div className="right">
          <div className="wrapper">
            <h2>Hi There, I'm</h2>
            <h1>Isyraff Irfan</h1>
            <h3>
              Computer Network and Security <span>Student</span>
            </h3>
            <p>I am Computer Science student in School of Computing, UTM. I acquire a positive attitude and good at handling work management.
              Besides that, I am knowledgeable in user interface and also user experience. I am a good team player and have great problem solving skills
              that can be applied to resolve any problem that might arise as I aim for exellence. Therefore I am an excellent fit for your organisation.
            </p>
          <div className="resume">
          <a id="file" href="assets/RESUME.pdf" target="blank">
            <span type='button' className='btn btn--outline'>
              Resume
            </span>
          </a>
          </div>
          </div>
          <a id="turun" href="#portfolio">
            <img src={process.env.PUBLIC_URL + '/assets/down.png'} alt="" />
          </a>
        </div>
    </div>
  )
}
