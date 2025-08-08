import '../css/Portfolio.css'
import Project from '../widget/project'
import exemple from '../assets/exemple.png'

function Portfolio(){
    return (
        <div id="portfolio">
            <h1 id="title_portfolio">
                Portfolio
            </h1>
            <div id="projects">
                    <div id="grid_project">
                    <Project name="app flutter"
                    imageUrl= {exemple} 
                    langages={['Flutter','Python3']} 
                    projet="Zenlife" 
                    description="
                    I’m creating a Flutter app that helps people manage their life better by showing their money,
                    expenses, and budget. It also suggests recipes based on how much money they have."/>
                    
                    <Project name="This site web"
                    imageUrl={exemple}   
                    langages={['react','Css']} 
                    projet="Zenlife" 
                    description="
                    I’m creating a Flutter app that helps people manage their life better by showing their money,
                    expenses, and budget. It also suggests recipes based on how much money they have."/>

                    <Project name="covoitureur site"
                    imageUrl={exemple} 
                    langages={['html','Css','python3','flask']} 
                    projet="covoiturage" 
                    description=" I have created a site web for "
                />
                <Project name="covoitureur site"
                    imageUrl={exemple} 
                    langages={['html','Css','python3','flask']} 
                    projet="covoiturage" 
                    description=" I have created a site web for "
                />
                <Project name="covoitureur site"
                    imageUrl={exemple} 
                    langages={['html','Css','python3','flask']} 
                    projet="covoiturage" 
                    description=" I have created a site web for "
                />
            </div>
           </div>
        </div>
    )
}

export default Portfolio;