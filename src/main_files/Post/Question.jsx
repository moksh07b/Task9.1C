
function Question({func, obj}){
    return(
        <div className="question-body">
            
            <h4>Describe your problem</h4>

            <textarea type="text" value={obj.problem} name="problem" onChange={func}/>
            
        </div>
    )
}

export default Question