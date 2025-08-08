import React, { useState } from 'react';
import Skill from '../widget/skill.jsx'
import python_logo from '../assets/langage/python.png'
import java_logo from '../assets/langage/java.png'
import php_logo from '../assets/langage/php.png'
import html_logo from '../assets/langage/html.png'
import css_logo from '../assets/langage/css.png'
import flutter_logo from '../assets/langage/flutter.png'
import react_logo from'../assets/langage/react.png' 
import git_logo from '../assets/langage/git.png'
import github_logo from '../assets/langage/github.png'
import vscode_logo from '../assets/langage/vscode.png'




const SkillsMenu = () => {
  const skillsProg = [
    { name: 'Python', imageUrl: python_logo},
    { name: 'Java', imageUrl:  java_logo},
    { name: 'PHP', imageUrl:  php_logo},
  ];

  const skillsWeb = [
    { name: 'HTML', imageUrl:  html_logo},
    { name: 'CSS', imageUrl:  css_logo},
    { name: 'Flutter', imageUrl: flutter_logo },
    { name: 'React', imageUrl: react_logo},
  ];

  const skillsUtils = [
    { name: 'Git', imageUrl:  git_logo},
    { name: 'Github', imageUrl:  github_logo},
    { name: 'VsCode', imageUrl: vscode_logo},
  ];

  const [selectedSet, setSelectedSet] = useState('set1');

  const showSkills = (set) => {
    setSelectedSet(set);
  };

  return (
    <div>
      <div className="menu">
        <div className="menu-item" onClick={() => showSkills('set1')}>Programmation</div>
        <div className="menu-item" onClick={() => showSkills('set2')}>Web</div>
        <div className="menu-item" onClick={() => showSkills('set3')}>Outils</div>
      </div>
      <div id="skills-container" className="skills-container">
        {selectedSet === 'set1' && skillsProg.map((skill, index) => (
          <div key={index} className="skill" >
            <Skill name={skill.name} imageUrl={skill.imageUrl} />
          </div>
        ))}
        {selectedSet === 'set2' && skillsWeb.map((skill, index) => (
          <div key={index} className="skill">
            <Skill name={skill.name} imageUrl={skill.imageUrl} />
          </div>
        ))}
        {selectedSet === 'set3' && skillsUtils.map((skill, index) => (
          <div key={index} className="skill">
            <Skill name={skill.name} imageUrl={skill.imageUrl} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsMenu;
