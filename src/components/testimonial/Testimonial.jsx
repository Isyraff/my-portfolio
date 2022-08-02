import "./testimonial.scss"

export default function Testimonial() {
  const contact = {
    // email is optional - if left empty Contact section won't show up
    email: 'isyraffirfan@gmail.com',
  }  
  return (
    <div className="parent" id="testimonial">
      <div className="features">
      <h1>Skills.</h1>
      </div>
      <div className="item">
      <div className="top">
        <div className="item1">
          <img src="assets/java.png" alt="" />
          <h3>Java</h3>
        </div>
        <div className="item2">
        <img src="assets/html.png" alt="" />
          <h3>HTML</h3>
        </div>
        <div className="item3">
        <img src="assets/css.png" alt="" />
          <h3>CSS</h3>
        </div>
        <div className="item4">
        <img src="assets/js.png" alt="" />
          <h3>Javascipt</h3>
        </div>
        <div className="item5">
        <img src="assets/c++.png" alt="" />
          <h3>C++</h3>
        </div>
      </div>
      <div className="bottom">
        <div className="item6">
          <img src="assets/php.png" alt="" />
          <h3>myPHP</h3>
        </div>
        <div className="item7">
        <img src="assets/firebase.png" alt="" />
          <h3>Firebase</h3>
        </div>
        <div className="item8">
        <img src="assets/xd.png" alt="" />
          <h3>Adobe</h3>
          <h2>Xd</h2>
        </div>
        <div className="item9">
        <img src="assets/ps.png" alt="" />
          <h3>Adobe</h3>
          <h2>Photoshop</h2>
        </div>
        <div className="item10">
        <img src="assets/PR.png" alt="" />
          <h3>Adobe</h3>
          <h2>Premiere</h2>
          <h2>Pro</h2>
        </div>
      </div>
      </div>

      <section className='section contact center' >
      <h2 className="nama">Contact.</h2>
      <a href={`mailto:${contact.email}`}>
      <span type='button' className='btn btn--outline'>
          Email me
        </span>
      </a>
    </section>
      

    </div>
  )
}





