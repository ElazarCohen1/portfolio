
function Skill(props){
    return (
        <div id="sk">
            <img src={props.imageUrl} alt={props.name} /> 
            <p>{props.name}</p>
        </div>            
    )
}

export default Skill;