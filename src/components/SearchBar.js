import React, {useState} from "react";

const SearchBar = ({ onFormSubmit }) => {
    const [term, setTerm] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();

        onFormSubmit(term);
    }

    return (
        <div className="search-bar ui segment">
            <form onSubmit={onSubmit} className="ui form">
                <div className="field">
                    <label>Video Search</label>
                    <input 
                        type="text" 
                        placeholder='Enter your find' 
                        value={term} 
                        onChange={(e) => setTerm(e.target.value)}
                    />
                </div>                    
            </form>                
        </div>
    )
};

//class SearchBar extends React.Component {
    //state = {term: ''};
//    render () {        
//    }
//};

export default SearchBar;