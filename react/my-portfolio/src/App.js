import React,{useEffect} from 'react'
import Images from './Images/index'
import GitHub from './MyComponent/GitHub'
import './App.css';

function App() {

 useEffect(()=>{
  window.addEventListener('click', () => {
    document.body.classList.remove('nav-open')
  })
 },[])

  const handleClick = () => {
    window.addEventListener('click', () => {
      document.body.classList.toggle('nav-open')
    })
  }
  const handleCloseClick = () => {
    window.addEventListener('click', () => {
      document.body.classList.remove('nav-open')
    })
  }
  return (
    <>
      <header>
        <div class="logo">
          <img src={Images.icon} alt="" />
        </div>
        <button onClick={handleClick} class="nav-toggle" aria-label="toggle navigation">
          <span class="hamburger"></span>
        </button>
        <div class="overlay"></div>
        <div class="container">
          <nav class="nav">
            <ul class="nav__list">
              <li class="nav__item"><a onClick={handleCloseClick} href="#home" class="nav__link">Home</a></li>
              <li class="nav__item"><a onClick={handleCloseClick} href="#Services" class="nav__link">Activity</a></li>
              <li class="nav__item"><a onClick={handleCloseClick} href="#About" class="nav__link">About</a></li>
              <li class="nav__item"><a onClick={handleCloseClick} href="#Work" class="nav__link">Projects</a></li>
              <li class="nav__item"><a onClick={handleCloseClick} href="#github" class="nav__link">Github</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <section class="intro" id="Home">
        <h1 class="section__title section__title-intro">
          Hi, I am <strong>Raghvendra singh sengar</strong>
        </h1>
        <p class="section__subtitle section__subtitle-intro">Student of B.Tech(ECE) and Frontend-Dev</p>
        <img class="intro__img" src={Images.intro} alt="rv picture" />
      </section>
      <div className="welcome">WELCOME</div>
      <section class="about-me" id="About">
        <h2 class="section__title section__title-about">About Me</h2>
        <p class="section__subtitle section__subtitle-about">Learner</p>

        <div class="about-me__body">
          <p>I live in delhi.I am a tech enthusiast and competitive coder pursuing Electronic and Communication at NSUT, Delhi.</p>
          <p>Technology Excites me and I am always in aew of the change it drives in the world. Certain Skills that I have include Data Structure and Algorithm (JAVA),
            FrontEnd Development(HTML5, CSS3, JAVASCRIPT, REACT-JS). And what I might lack in skills I make up for with my determination to learn.
            <br />
            I am intern at FirstAIL as web developer and Campus Ambassordor.I am open for work ,check out some of my work, and feel free to shoot mw an email if you'd like to work together. Thank You.
          </p>

        </div>

        <img class="about-me__img" src={Images.who} alt="rv 2 picture" />
      </section>


      <section class="my-services" id="Services">
        <h2 class="section__title section__title-services">Activity</h2>
        <div class="services">

          <div class="service">
            <h3>Ds & Algo(JAVA)</h3>
            <p>For the competitive coding I usually prefer to go with java.</p>
          </div>

          <div class="service">
            <h3>Front end dev</h3>
            <p>For Development I know about HTML5, CSS3, JavaScript, React-Js. And by the way this site also uses all four concepts.</p>
          </div>
          <div class="service">
            <h3>Others</h3>
            <p><ul style={{ listStyleType: "none" }}><li>Campus Ambassordor</li><li>NEO 3.0 AIR-130</li><li>Health conscious</li><li>Member of IOSD</li></ul></p>
          </div>
        </div>

        <a href="#Work" class="btn">Projects</a>
      </section>

      <section class="my-git" id="github">
        <div class="gits">
          <GitHub />
        </div>
      </section>

      <section class="my-work" id="Work">
        <h2 class="section__title section__title--work">Projects</h2>
        <p class="section__subtitle section__subtitle--work">Ralated to web development</p>

        <div class="portfolio">
          <a href="https://github.com/Raghvendrasingh-Rv/Netflix-clone" class="porfolio__item">
            <img src={Images.netflix} class="portfolio__img" alt="a" />
          </a>

          <a href="https://github.com/Raghvendrasingh-Rv/FirstAIL-ExamWebsiteProject" class="porfolio__item">
            <img src={Images.firstail} class="portfolio__img" alt="c" />
          </a>

          <a href="https://github.com/Raghvendrasingh-Rv/Budget-app" class="porfolio__item">
            <img src={Images.budget} class="portfolio__img" alt="c" />
          </a>

          <a href="#" class="porfolio__item">
            <img src={Images.covid} class="portfolio__img" alt="c" />
          </a>

        </div>
        <p style={{ fontSize: "7px" }}>*Click on the images to get the info about respective project.</p>
      </section>

      <footer class="footer">
        <a href="rv.singh.5330@gmail.com" class="footer__link">rv.singh.5330@gmail.com</a>
        <a href="rv.singh.5330@gmail.com" class="footer__link"><br />+91-9329080176</a>
        <ul class="social-list">
          <li class="social-list__item"><a class="social-list__link" href="https://www.linkedin.com/in/raghvendra-singh-sengar-rv-06b92a144" ><i class="fab fa-2x fa-linkedin-in"></i></a></li>
          <li class="social-list__item"><a class="social-list__link" href="https://twitter.com" ><i class="fab fa-2x fa-twitter"></i></a></li>
          <li class="social-list__item"><a class="social-list__link" href="https://github.com/Raghvendrasingh-Rv" ><i class="fab fa-2x fa-github"></i></a></li>
          <li class="social-list__item"><a class="social-list__link" href="https://instagram.com" ><i class="fab fa-2x fa-instagram"></i></a></li>
        </ul>
      </footer>
    </>
  );
}

export default App;

