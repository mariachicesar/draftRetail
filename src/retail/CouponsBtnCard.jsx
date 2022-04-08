import React from 'react'


const CouponsBtnCard = (props) => {

    const onHandlCheck = (e) =>{
        props.onHandlCheck(parseInt(e.target.value), parseInt(e.target.name), e.target.checked)
    }

    return (
        <React.Fragment>
            <div className="form-check">
                <input
                    className="form-check-input"
                    type="checkbox"
                    defaultValue=""
                    name={props.coupons.unitPrice}
                    value={props.coupons.id}
                    onClick={onHandlCheck}
                />
                <label className="form-check-label" htmlFor="flexCheckDefault">
                    {props.coupons.description}
                </label>
            </div>

        </React.Fragment>
    )
}

export default CouponsBtnCard;