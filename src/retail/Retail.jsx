import React, { Component } from 'react'
import * as apiRetailServices from "../services/apiRetailServices.js"


export default class Retail extends Component {
    state = {
        couponsRes: [],
        assignedRes: [],
        customerRes: [],
    }

    componentDidMount = () => {
        this.getCoupons()
        this.getAssigned()
        this.getCustomers()
    }

    componentDidUpdate = () => {

    }

    componentWillUnmount = () => {

    }

    getCoupons = () =>{
        apiRetailServices
            .getAllAssignedCoupons()
            .then(this.onGetCouponsSuccess)
            .catch(this.onGetError)
    }

    onGetCouponsSuccess = (res) =>{
        this.setState({
            couponsRes: res
        })
    }

    getAssigned = () =>{
        apiRetailServices
            .getAllAssignedCoupons()
            .then(this.onGetAssignedSuccess)
            .catch(this.onGetError)
    }

    onGetAssignedSuccess = (res) =>{
        this.setState({
            assignedRes: res
        })
    }

    getCustomers = () =>{
        apiRetailServices
            .getAllCustomers()
            .then(this.onGetCustomerSuccess)
            .catch(this.onGetError)
    }

    onGetCustomerSuccess = (res) =>{
        this.setState({
            customerRes: res
        })
    }

    onGetError = (res) =>{
        console.log(res, "ERROR")
    }

    render() {
        return (
            <React.Fragment>
                <h4>Retail</h4>
            </React.Fragment>
        )
    }
}
