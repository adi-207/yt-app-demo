import React, { useState } from 'react'

const SearchBar = (props) => {
    
    const [term, setTerm] = useState('')

    const onFormSubmit = (event) => {
        event.preventDefault()
        
        props.onSubmit(term)
    }
 
    
        return (
            <div className="ui segment" >
                <form onSubmit={ (e) => onFormSubmit(e)} className="ui form">
                    <div className="field">
                        <label>Search Video here!</label>
                        <input type="text" value={term} onChange={ (e) => setTerm(e.target.value )}/>
                    </div>
                </form>
            </div>
        )
    
}

export default SearchBar