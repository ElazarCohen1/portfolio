import github from '../assets/langage/github.png'

function Project(props){
    return (
        <div id="block_in_project">
            <img id='image_presentation' src={props.imageUrl} alt= {props.name} />
            <p id='project_name'> {props.name}</p>
            <p id="project_description"> {props.description}</p>
            <p id="project_langage"> {props.langages.join(', ')}</p>
            <a href={`https://github.com/Elazarcohen1/${props.projet}`} target="_blank" rel="noopener noreferrer">
                <img id='github_logo' src={github} alt="GitHub" width={50} />
            </a>
        </div>
    )

}

export default Project;