import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    const total = cart.reduce((total, course) => total + course.price, 0);
    const totalAmount = Number(total.toFixed(2));
    const tax = Number((total / 10).toFixed(2));
    const totalCost = (totalAmount + tax).toFixed(2);

    return (
        <div>
            <div className=" text-left">
                <h3 className="text-primary">Total Enrolled:{cart.length}</h3>
                <p className="text-info">Courses Price:${totalAmount}</p>
                <p className="text-dark">Tax:${tax}</p>
                <p className="text-danger"><b>Total Cost(include tax) :${totalCost}</b></p>
            </div>
        </div>
    );
};

export default Cart;