function Article({func, obj}){
    return(
        <div className="article-body-post">
            <div className="article-abstract">
                <h4>Abstract</h4>
                <textarea type="text" name="abstract" value={obj.abstract} placeholder="Enter a 1-paragraph absract" onChange={func} />
            </div>
            <div className="article-text">
                <h4>Article Text</h4>
                <textarea name="article_text" type="text" value={obj.article_text} placeholder="Enter a 1-paragraph abstract" onChange={func}/>

            </div>
        </div>
    )
}


export default Article