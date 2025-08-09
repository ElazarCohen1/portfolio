import profil from '../../logo_elazar.png'

import '../css/Home.css'

function Home(){
    return <>
    <div className="home">
        <div id="profil">
          <img src={profil} alt="profil"  />
        </div>

        <div className='my_portfolio'>
          <h1 className='title_text'>
            my portfolio
          </h1>
          <a href="CV_Elazar_cohen.pdf" download>
            <button>download my resume</button>
          </a>
        </div>
    </div>
    </>
}

export default Home;