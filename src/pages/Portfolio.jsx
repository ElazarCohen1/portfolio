import '../css/Portfolio.css'
import Project from '../widget/project'
import site_covoitureur from '../assets/project/covoitureur_site.jpg'
import zenlife from '../assets/project/zenLife.png'
import portfolio from '../assets/project/portfolio.png'

function Portfolio(){
    return (
        <div id="portfolio">
            <h1 id="title_portfolio">
                Portfolio
            </h1>
            <div id="projects">
                    <div id="grid_project">
                        <Project name="app flutter"
                            imageUrl= {zenlife} 
                            langages={['Flutter','Python3']} 
                            projet="Zenlife" 
                            description="
                            I’m creating a Flutter app that helps people manage their life better by showing their money,
                            expenses, and budget. It also suggests recipes based on how much money they have."/>
                        
                        <Project name="My portfolio"
                            imageUrl={portfolio}   
                            langages={['react','Css']} 
                            projet="portfolio" 
                            description="
                            this site web is made in react with css and this is my portfolio"/>

                        <Project name="covoitureur site"
                            imageUrl={site_covoitureur} 
                            langages={['html','Css','python3','flask']} 
                            projet="Site_covoitureur" 
                            description=" I have created a site web in school for entrainement at flask and backend with postgres"/>
                    </div>
            </div>
        </div>
    )
}

export default Portfolio;