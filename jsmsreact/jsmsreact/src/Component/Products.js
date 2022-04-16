import React, { Component } from 'react';

export default class Products extends Component {
    render() {
        let { title, description, inStockQty, weight, type, purity, img } = this.props;
        return (
            <div className='my-3'>
                <div className="card" style={{ width: "16rem" }}>
                    <img objectFit='cover' style={{ resizeMode: 'contain' }} src={`data:image/jpeg;base64, ${img}`} className="card-img-top" alt="image" />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description} </p>
                        <p>Quantity in stock: {inStockQty}</p>
                        <p className="card-text">Weight: {weight} grams, Type: {type}, Purity: {purity} </p>
                        
                    </div>
                </div>
            </div>
        )
    }
}

