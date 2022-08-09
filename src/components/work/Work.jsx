import { useState } from "react";
import "./work.scss"



export default function Work() {
  const [currentSlide, setCurrentSlide]= useState(0)
  const data = [
    {
      id: "1",
      icon: process.env.PUBLIC_URL + '/assets/www.png',
      title: "Internship Application System",
      desc: "Website for universities student to apply internship and get approval from lecturers. Uses HTML and CSS with MySQL",
      img: process.env.PUBLIC_URL + '/assets/intern.png',      
    },
    {
      id: "2",
      icon: process.env.PUBLIC_URL + '/assets/smartphone.png',
      title: "Facilities Tracker",
      desc: "Navigation mobile app to navigate facilities such as mosque and hotel. Uses Android Studio and Firebase",
      img: process.env.PUBLIC_URL + '/assets/Banner.png',
    },
    {
      id: "3",
      icon: process.env.PUBLIC_URL + '/assets/smartphone.png',
      title: "Palm Golf Resort Mobile Application",
      desc: "Reservation and performance tracker mobile app for Palm Golf Resort Golfers. Uses VS Code and Firebase",
      img: process.env.PUBLIC_URL + '/assets/palmgolf.png',
    },
  ];

  const handleClick = (way)=>{
    way === "left" ? setCurrentSlide(currentSlide > 0 ? currentSlide-1 : 2) :
    setCurrentSlide(currentSlide<data.length - 1 ? currentSlide+1 : 0);
  };
  return ( 
  <div className='work' id="work">
     <h1>Projects.</h1>
     <div className="slider" style={{transform: `translateX(-${currentSlide *100}vw)`}}>

          {data.map((d)=>(
          <div className="container">
          <div className="item">
              <div className="left">
                <div className="leftcontainer">
                    <div className="imgContainer">
                      <img src={d.icon} alt="" />
                    </div>
                    <h2>{d.title}</h2>
                    <p>
                      {d.desc}
                    </p>
                    <span>Projects</span>
                </div>
              </div>
              <div className="right">
                <img src={d.img}alt="" />
              </div>
          </div>
        </div>
        ))}
     </div>
        <img src={process.env.PUBLIC_URL + '/assets/down.png'} className= "arrow left"alt="" onClick={b =>handleClick("left")}/>
        <img src={process.env.PUBLIC_URL + '/assets/down.png'} className="arrow right" alt="" onClick={()=>handleClick()}/>

    </div>
  );
}
