import React, { Component } from 'react';
import axios from 'axios';
const api = process.env.REACT_APP_API_URI
export default class DeleteProduct extends Component {
    state = {
        id: ''
      }
    
      handleChange = event => {
        this.setState({ id: event.target.value });
      }
    
      handleSubmit = event => {
        event.preventDefault();
    
        axios.delete(`${api}${this.state.id}`)
          .then(res => {
            console.log(res);
            console.log(res.data);
          })
      }
    render() {
        
        return (
            <div className="wrapper">
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label>Enter Product ID</label>
                        <input type="text" name='id' className="form-control" onChange={this.handleChange} />
                    </div>
                    <br></br>
                    <div className="form-group">
                        <input type="submit" value="Delete Product" className="btn btn-success btn-block" />
                    </div>
                </form>
            </div>
        )
    }
}