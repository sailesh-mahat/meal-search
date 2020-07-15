import React, { Component } from "react";
import './Search.css';

class Search extends Component {

    state = {
        searchValue: '',
    };
    render() {
        return (
            <div>
                <h1>Welcome to the meal search</h1>
                <input name="text" 
                type="text" 
                placeholder="Search" 
                onChange={event=> this.handleOnChange(event)}
                value={this.state.searchValue}
                />
                <button>Search</button>
            </div>
        );
    }
}

export default Search;