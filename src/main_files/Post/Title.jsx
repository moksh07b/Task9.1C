
function Title({placeholder_msg, func, obj, func2}){
    return(
        <div className="Title-input">

            <h3>What do you want to ask or share</h3>

            <div className="title_input_field">

                <h4>Title</h4>
                <input type="text" name="title" value={obj.title} onChange={func} placeholder={placeholder_msg} required></input>
            </div>
            <div className="input_file_post">
                <h4>Add an Image : </h4>
                <input type="file" name="img" onChange={(e)=>{
                    func2(e.target.files[0]);
                }} />
                </div>

        </div>
    )
}


export default Title