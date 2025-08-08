import profil from '../assets/profil.jpg'

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
      </div>
    </div>
    </>
}

export default Home;