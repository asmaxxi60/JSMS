import React, { Component, useState } from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Products from './Products'
import { useEffect } from 'react';

export default class ProductDashboard extends Component {
    productList = [
        {
            "pid": 1,
            "pname": "Necklace",
            "description": "A necklace is an article of jewellery that is worn around the neck",
            "qty": 1,
            "weight": 28.0,
            "color": "Gold",
            "purity": 22.0,
            "image": null,
            "catid": 1
        },
    ]
    constructor() {
        super();
        this.state = {
            product: [],
            loading: false
        }
    }

    componentDidMount = () => {
        fetch("http://localhost:8080/allproduct").then(respp => respp.json()).then(data => this.setState({ product: data }));
    }

    render() {
        return (
            <div className='conatiner my-3'>
                <h2 className=''>Top product <Link className="btn btn-dark mx-5" to="/addProductForm">+Add Product</Link></h2>
                <div className='row'>
                    {this.state.product.map((e) => {
                        return <div className='col-md-4' key={e.pid} >
                            <Products title={e.pname.slice(0, 20)} description={e.description.slice(0, 50)} inStockQty={e.qty} weight={e.weight} type={e.color} purity={e.purity} img={e.image} />
                        </div>
                    })}
                </div>
            </div>
        )
    }
}
