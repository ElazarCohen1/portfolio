import '../css/About.css'
import SkillMenu from '../widget/skill_menu'

import profil_portrait from '../assets/profil_portrait_rond.png'


function About(){
    return (
    <>
    <div id="about_and_skills">
        <div id='card_about'>
        
            <h2 id="title_about_me">
                About Me  
            </h2>


            <div id='text_about_me'>
                <div id="image_about">
                    <img src={profil_portrait} alt='profil portrait'/>
                </div>
                <div id="text_about">
                    <p>
                        Hello, my name is Elazar Cohen. I am currently a third-year undergraduate student in Computer Science at Gustave Eiffel University. Passionate about computer science, I love learning new things, and in this field, there is always something new to discover thanks to the multitude of languages and technologies.

                        I specialize particularly in mobile application development and web development as a fullstack developer. One of my ongoing projects is a Flutter application designed to help users manage their finances and suggest healthy recipes based on their budget. Although it is still in development, this project is very important to me.

                        I enjoy all facets of computer science, whether it's front-end development, back-end development, artificial intelligence, or even the C language for system development. My preferred programming languages are C, Flutter, Java, and Python.

                        Outside of computer science, I am very interested in sports, especially basketball and tennis, and I also enjoy cooking.

                        I appreciate teamwork and collaboration on projects. I have no problem working in a team and believe that cooperation is key to achieving great results.

                    </p>
                </div>
            </div>

            
        </div>
        <div id="block_center_skill">
            <div id="block_skills">
                
                <div id="skills_title">
                    <div className="trait"></div>

                    <h3>
                        Skills
                    </h3>
                </div>
                <div id='skills'>
                    <SkillMenu />
                </div>

            </div>
        </div>
    </div>
    </>
   
    )
}

export default About;