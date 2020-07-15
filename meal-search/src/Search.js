import React, { Component } from "react";
import './Search.css';

class Search extends Component {

    state = {
        searchValue: '',
    };

    handleOnChange = event => {
        this.setState({ searchValue: event.target.value });
    }

    handleSearch = () => {
        this.makeApiCall(this.state.searchValue);
    }

    makeApiCall = searchInput => {
        var searchUrl = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchInput}`;
        fetch(searchUrl)
        .then(response => {
            return response.json();
        })
        .then(jsonData => {
            console.log(jsonData.meals);
        });
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
                <button onClick={this.handleSearch}>Search</button>
            </div>
        );
    }
}

export default Search;