
import './SearchPanel.css'
import React, {Component} from 'react';

class SearchPanel extends Component {
    state= {
        term: ''
    }

    onSearchChange = (ev) =>{
        const term = ev.target.value;
        this.setState({term})
        this.props.onSearchChange(term)
    }


    render() {
        return (
            <input
                type='text'
                className='form-control search-input'
                placeholder='Searching'
            value={this.state.term}
            onChange={this.onSearchChange}/>

        );
    }
}

export default SearchPanel;
