import React from 'react'
const Form=(props)=> {
    return(
    <div>
    <form onSubmit={props.getImage}>
        <input type="text" name="imageName"/>
        <button>Search</button>
    </form>
    </div>
    )
}

export default Form;