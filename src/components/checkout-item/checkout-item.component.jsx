import React from 'react';
import { connect } from 'react-redux';

import './checkout-item.styles.scss';

import {
	removeCartItem,
	increaseCartItemQuantity,
	decreaseCartItemQuantity,
} from '../../redux/cart/cart.actions';

const CheckoutItem = ({
	cartItem,
	removeCartItem,
	increaseCartItemQuantity,
	decreaseCartItemQuantity,
}) => {
	const { name, imageUrl, price, quantity } = cartItem;
	return (
		<div className='checkout-item'>
			<div className='image-container'>
				<img src={imageUrl} alt='item' />
			</div>
			<span className='name'>{name}</span>
			<span className='quantity'>
				<div
					className='arrow'
					onClick={() => decreaseCartItemQuantity(cartItem)}
				>
					&#10094;
				</div>
				<span className='value'>{quantity}</span>
				<div
					className='arrow'
					onClick={() => increaseCartItemQuantity(cartItem)}
				>
					&#10095;
				</div>
			</span>
			<span className='price'>{price}</span>
			<div className='remove-button' onClick={() => removeCartItem(cartItem)}>
				&#10005;
			</div>
		</div>
	);
};

const mapDispatchToProps = (dispatch) => ({
	removeCartItem: (item) => dispatch(removeCartItem(item)),
	increaseCartItemQuantity: (item) => dispatch(increaseCartItemQuantity(item)),
	decreaseCartItemQuantity: (item) => dispatch(decreaseCartItemQuantity(item)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
