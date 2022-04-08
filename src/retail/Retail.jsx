import React, { Component } from 'react'
import * as apiRetailServices from "../services/apiRetailServices.js"
import CustomerCard from './CustomerCard.jsx'


export default class Retail extends Component {
    state = {
        couponsRes: [],
        assignedRes: [],
        customerRes: [],
        calculation: null,
        backEndAllData: []
    }

    componentDidMount = () => {
        this.getCoupons()
        this.getAssigned()
        this.getCustomers()
        this.backEndApiCall()
    }

    componentDidUpdate = () => {
        if (this.state.couponsRes.length > 0 && this.state.assignedRes.length > 0 && this.state.customerRes.length > 0 && this.state.calculation === null) {
            this.calculationCoupons()
        }
    }

    componentWillUnmount = () => {

    }

    backEndApiCall = () =>{
        apiRetailServices
            .getAllDataOneCall()
            .then(this.onGetAllDataSuccess)
            .catch(this.onGetError)
    }

    onGetAllDataSuccess = (res) =>{
        this.setState({
            backEndAllData: res
        })
    }

    getCoupons = () => {
        apiRetailServices
            .getAllCoupons()
            .then(this.onGetCouponsSuccess)
            .catch(this.onGetError)
    }

    onGetCouponsSuccess = (res) => {
        this.setState({
            couponsRes: res
        })
    }

    getAssigned = () => {
        apiRetailServices
            .getAllAssignedCoupons()
            .then(this.onGetAssignedSuccess)
            .catch(this.onGetError)
    }

    onGetAssignedSuccess = (res) => {
        this.setState({
            assignedRes: res
        })
    }

    getCustomers = () => {
        apiRetailServices
            .getAllCustomers()
            .then(this.onGetCustomerSuccess)
            .catch(this.onGetError)
    }

    onGetCustomerSuccess = (res) => {
        this.setState({
            customerRes: res,
            // mappedCutomers: res.map(this.mapCustomer)
        })
    }

    onGetError = (res) => {
        console.log(res, "ERROR")
    }

    calculationCoupons = () => {
        let couponList = this.state.couponsRes
        let assignedList = this.state.assignedRes
        let customerList = this.state.customerRes
        console.log(couponList,assignedList,customerList, "3 seperate http request with 3 list array responses")
        let customerArray = []
        for(let h = 0 ; h < customerList.length; h++){
            let obj = {}
            obj.customer = customerList[h]
            let couponArray = []
            for(let i=0; i < assignedList.length; i++){
                if(assignedList[i].customer_id === customerList[h].id){
                    let findCoupon = couponList.find((item) => item.id === assignedList[i].coupon_id)
                    couponArray.push(findCoupon)
                }
            }
            obj.couponArray = couponArray
            customerArray.push(obj)
        }
        this.setState({
            calculation: true,
            nestedResult: customerArray,
            mappedCutomers: customerArray.map(this.mapCustomer)
        })
    }

    mapCustomer = (data) => (
        <CustomerCard
            customer={data}
            key={data.id}
            couponList={this.state.couponsRes}
            assignedList={this.state.assignedRes}
        />
    )


    render() {
        return (
            <React.Fragment>
                <h4>Retail</h4>
                <div className='row'>
                    {this.state.mappedCutomers}
                </div>
            </React.Fragment>
        )
    }
}
