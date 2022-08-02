import "./portfolio.scss"
import React from "react";


export default function Porfolio() {
  return (
    <div className='portfolio' id="portfolio">

      <div className="item">
      <div className="left">
        <h1>Education</h1>
        <div className="wrapper"> 
        <ul>
            <h2>August 2020 - August 2021</h2>
            <li className="a">SMK TUANKU MUNAWIR</li>
            <li className="b">Achieved 4A+ 2A 1A- 2B+</li>
          </ul>
          <ul>
            <h2>July 2018 - April 2019</h2>
            <li className="a">Foundation in Engineering, UiTM Dengkil</li>
            <li className="b">Achieved CGPA 3.44</li>
          </ul>
          <ul>
            <h2>September 2019 - Current</h2>
            <li className="a">Bachelor of Computer Science 
                              (Computer Network and Security),</li>
            <li className="a">University Teknologi Malaysia</li>
            <li className="b">Current CGPA 3.76</li>
          </ul>
        </div>
      </div>

      <div className="right">
        <h1 className="w">Work Experience</h1>
        <div className="wrapper">
          <ul>
            <h2>August 2020 - August 2021</h2>
            <li className="a">Technical Assistant</li>
            <li className="b">Work as part timer to handle sales and prepares 
                graphical material for promotional purposes</li>
          </ul>
          <ul>
            <h2>September 2020 - August 2021</h2>
            <li className="a">Graphic Designer, Boss Gold Esport</li>
            <li className="b">Work as part timer to prepares graphical material 
                to promote team branding
            </li>
          </ul>
        </div>
        <div className="act">
        <h1>Extra Curricular activities</h1>
        <ul>
            <h2>September 2020 - Novermber 2020</h2>
            <li className="a">Editor Unit, 63rd UTM Convocation Ceremony</li>
            <li className="b">Work as an editor that responsible for graduates convocation pictures</li>
          </ul>
          <ul>
            <h2>May 2021 - May 2021</h2>
            <li className="a">Head of Multimedia Unit, Cultural Festival 2021</li>
            <li className="b">Responsibled for leading multimedia unit in providing graphical material
                for promotional purposes and advertisement
            </li>
          </ul>
          <ul>
            <h2>October 2021 - December 2021</h2>
            <li className="a">Head of Editor Unit, 64th UTM Convocation Ceremony</li>
            <li className="b">Given the responsibility to lead editing unit in terms of using Photoshop 
                for graduate's pictures
            </li>
          </ul>
          <ul>
            <h2>October 2020 - September 2021</h2>
            <li className="a">Head of Multimedia Unit, Kelab Fotokreatif (KFK)</li>
            <li className="b">Responsibled for leading multimedia unit in providing graphical content to
                promote club's event on social media
            </li>
          </ul>
        </div>
      </div>
      </div>
      
  
    </div>
  )
}
