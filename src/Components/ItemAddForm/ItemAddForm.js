import React, {Component} from 'react';
import './ItemAddForm.css'


class ItemAddForm extends Component {

    state={
        label: ''
    }

    onLabelChange = (ev)=>{

       this.setState({
           label: ev.target.value
       })
    }

    onSubmit = (ev) => {
        ev.preventDefault()
        this.props.addItem(this.state.label)
    }


    render() {

        return (
            <form className="ItemAddForm d-flex"
            onSubmit={this.onSubmit}>
                <input type='text'
                className="form-control"
                onChange={this.onLabelChange}
                placeholder='What i Need TODO'
                value={this.state.label}/>
                <button className='btn btn-outline-secondary color'>Add </button>
        </form>

        );
    }
}

export default ItemAddForm;