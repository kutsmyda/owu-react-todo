import React, {Component} from 'react';
import './ItemAddForm.css'


class ItemAddForm extends Component {


    render() {
        const {addItem} = this.props
        return (
            <div className='ItemAddForm'>
                <button onClick={()=>addItem('hgf6tgh')} className='btn btn-outline-secondary'>Add Item</button>
            </div>
        );
    }
}

export default ItemAddForm;