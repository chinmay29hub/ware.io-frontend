// ** create-user.component.js ** //
import React, { Component } from 'react';
import axios from 'axios';
const api = process.env.REACT_APP_API_URI
export default class UpdateProduct extends Component {
    constructor(props) {
        super(props)
        this.onChangeId = this.onChangeId.bind(this)
        this.onChangeProductName = this.onChangeProductName.bind(this)
        this.onChangeSellingPrice = this.onChangeSellingPrice.bind(this)
        this.onChangeDateEntry = this.onChangeDateEntry.bind(this)
        this.onChangeDateExit = this.onChangeDateExit.bind(this)
        this.onChangeDateExpiry = this.onChangeDateExpiry.bind(this)
        this.onChangeQuantity = this.onChangeQuantity.bind(this)
        this.onChangeCostPrice = this.onChangeCostPrice.bind(this)
        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
            id : "",
            product_name : "",
            selling_price : "",
            date_of_entry : "",
            date_of_exit : "",
            date_of_expiry : "",
            quantity : "",
            cost_price : ""
        }
    }
    onChangeId (e) {
        this.setState({ id : e.target.value })
    }
    onChangeProductName(e) {
        this.setState({ product_name : e.target.value })
    }
    onChangeSellingPrice(e) {
        this.setState({ selling_price: e.target.value })
    }
    onChangeDateEntry(e) {
        this.setState({ date_of_entry: e.target.value })
    }
    onChangeDateExit(e) {
        this.setState({ date_of_exit: e.target.value })
    }
    onChangeDateExpiry(e) {
        this.setState({ date_of_expiry: e.target.value })
    }
    onChangeQuantity(e) {
        this.setState({ quantity: e.target.value })
    }
    onChangeCostPrice(e) {
        this.setState({ cost_price: e.target.value })
    }
    onSubmit(e) {
        e.preventDefault()
        const productObject = {
            id : this.state.id,
            product_name : this.state.product_name,
            selling_price : this.state.selling_price,
            date_of_entry : this.state.date_of_entry,
            date_of_exit : this.state.date_of_exit,
            date_of_expiry : this.state.date_of_expiry,
            quantity : this.state.quantity,
            cost_price : this.state.cost_price

        };
        axios.post(`${api}/update/${this.state.id}`, productObject)
            .then((res) => {
                console.log(res.data)
            }).catch((error) => {
                console.log(error)
            });
        this.setState({ product_name : "",
        selling_price : "",
        date_of_entry : "",
        date_of_exit : "",
        date_of_expiry : "",
        quantity : "",
        cost_price : "" })
    }

    render() {
        return (
            <div className="wrapper">
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Add Product ID</label>
                        <input type="text" value={this.state.id} onChange={this.onChangeId} className="form-control" />
                    </div>
                    <div className="form-group">
                        <label>Add Product Name</label>
                        <input type="text" value={this.state.product_name} onChange={this.onChangeProductName} className="form-control" />
                    </div>
                    <div className="form-group">
                        <label>Add Selling Price</label>
                        <input type="number" value={this.state.selling_price} onChange={this.onChangeSellingPrice} className="form-control" />
                    </div>
                    <div className="form-group">
                        <label>Add Date of Entry</label>
                        <input type="date" value={this.state.date_of_entry} onChange={this.onChangeDateEntry} className="form-control" />
                    </div>
                    <div className="form-group">
                        <label>Add Date Of Exit</label>
                        <input type="date" value={this.state.date_of_exit} onChange={this.onChangeDateExit} className="form-control" />
                    </div>
                    <div className="form-group">
                        <label>Add Date Of Expiry</label>
                        <input type="date" value={this.state.date_of_expiry} onChange={this.onChangeDateExpiry} className="form-control" />
                    </div>
                    <div className="form-group">
                        <label>Add Quantity</label>
                        <input type="text" value={this.state.quantity} onChange={this.onChangeQuantity} className="form-control" />
                    </div>
                    <div className="form-group">
                        <label>Add Cost Price</label>
                        <input type="text" value={this.state.cost_price} onChange={this.onChangeCostPrice} className="form-control" />
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Create Product" className="btn btn-success btn-block" />
                    </div>
                </form>
            </div>
        )
    }
}