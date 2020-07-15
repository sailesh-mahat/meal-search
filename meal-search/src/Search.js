import React, { Component } from "react";

class Search extends Component {

    state = {};
    render() {
        return (
            <div>
                <h1>Welcome to the meal search</h1>
                <input name="text" type="text" placeholder="Search" />
                <button>Search</button>
            </div>
        );
    }
}

export default Search;