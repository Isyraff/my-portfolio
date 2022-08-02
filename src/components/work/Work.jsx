import { useState } from "react";
import "./work.scss"

export default function Work() {
  const [currentSlide, setCurrentSlide]= useState(0)
  const data = [
    {
      id: "1",
      icon: "./assets/www.png",
      title: "Internship Application System",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      img: "./assets/intern.png",
    },
    {
      id: "2",
      icon: "./assets/smartphone.png",
      title: "Facilities Tracker",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      img: "./assets/Banner.png",
    },
    {
      id: "3",
      icon: "./assets/smartphone.png",
      title: "Palm Golf Resort Mobile Application",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      img: "./assets/Banner.png",
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
        <img src="assets/down.png" className="arrow left" alt="" onClick={b =>handleClick("left")}/>
        <img src="assets/down.png" className="arrow right" alt="" onClick={()=>handleClick()}/>

    </div>
  );
}
