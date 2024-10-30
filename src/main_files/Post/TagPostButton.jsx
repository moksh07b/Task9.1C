function TagPostButton({func, obj}){
    return(
        <div>
            <div className="tag">
                <h4>Tags</h4>
                <input type="text" name="tags" value={obj.tags} onChange={func} placeholder="Please add up to 3 tags to describe what your question is about e.g., Java" />
            </div>
            <div className="post-button">
                <button type="submit">Post</button>
            </div>
        </div>
    )
}

export default TagPostButton