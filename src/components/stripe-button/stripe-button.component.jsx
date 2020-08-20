import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

import './stripe-button.styles.scss';

const StripeCheckoutButton = ({ price }) => {
	const priceForStripe = price * 100;
	const publishableKey =
		'pk_test_51HI4JOGO1kDa66ZuXsiNKwQgrnZEwGkXZ3cotj2JzfLw57ugmM73m48xyUAXYvU7Brgrw1JjrD1SqX5jnKZT2lvq00okkAcwlG';

	const onToken = (token) => {
		console.log(token);
		alert('Payment Successful');
	};

	return (
		<StripeCheckout
			label='Pay Now'
			name='CRWN Clothing Ltd.'
			billingAddress
			shippingAddress
			image='https://sendeyo.com/up/d/f3eb2117da'
			description={`Your total is  $${price}`}
			amount={priceForStripe}
			panelLabel='Pay Now'
			token={onToken}
			stripeKey={publishableKey}
		/>
	);
};

export default StripeCheckoutButton;
