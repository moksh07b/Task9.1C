import { useState } from "react"


export function Question({data, onDelete}){

    const [isExpanded, setIsExpanded] = useState(false);

    const truncatedProb = data.problem.length > 150 ? data.problem.substring(0,150) + "..." : data.problem

    return(
        <div className="QuestionData">
            <h3>Title : {data.title}</h3>
            {data.imageURL && (
                <img src={data.imageURL} alt="Related" />
            )}
            <p>
            {isExpanded ? data.problem : truncatedProb}
            {data.problem.length > 150 && (
                <button className="readMore" onClick={() => setIsExpanded(!isExpanded)}>
            {isExpanded ? "Read Less" : "Read More"}
          </button>
        )}

        <button onClick={onDelete}> Delete</button>
            </p>
        <div className="Tags">
        <h5>Tags : {data.tags}</h5>
        <h5>{data.uploadDate}</h5>
        </div>
        </div>
    )
}