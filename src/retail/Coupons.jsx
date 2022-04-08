import React, { Component } from 'react'
import CouponsBtnCard from './CouponsBtnCard';

export default class CouponsCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            customer : {},
            mappedCoupons: [],
            checked: [],
            maxQtyAlert: false,
            totalDiscount: 0
        }
    }

    componentDidMount = () => {
        this.manipulateState()
    }

    componentDidUpdate = () => {

    }

    componentWillUnmount = () => {

    }

    manipulateState = () =>{
        this.setState({
            customer: this.props.data,
            mappedCoupons: this.props.data.couponArray.map(this.mapCoupon)
        })
    }

    mapCoupon = (data) =>(
        <CouponsBtnCard 
        coupons={data}
        customer={this.state.customer}
        onHandlCheck={this.onHandlCheck}
        />
    )

    onHandlCheck = (id, value, check) =>{
        // if(this.state.checked.length < 3){
            if(check === true){
                let obj = {}
                obj["id"] = id 
                obj["value"]  = value
                let newChecked = [...this.state.checked, obj]
                let totalDiscount = this.state.totalDiscount + value;

                this.setState({
                    checked: newChecked,
                    totalDiscount: totalDiscount
                })
            } 
            else if (check === false){
                let checked = this.state.checked
                let deleteChecked = checked.filter(item => item.id !== id)
                let totalDiscount = this.state.totalDiscount - value;

                this.setState({
                    checked: deleteChecked,
                    totalDiscount: totalDiscount
                })
            } 
        //}
    }

    render() {
        return (
            <React.Fragment>
            <div>{this.state.mappedCoupons}</div>
            <div>Total Discount : {this.state.totalDiscount}</div>
            {this.state.checked.length > 3 ? <div><p>Warning you reached max amount of coupons</p></div> : ""}

            {this.state.totalDiscount > 20 ? <div><p>Warning you reached max % of discount</p></div> : ""}

            </React.Fragment>
        )
    }
}
