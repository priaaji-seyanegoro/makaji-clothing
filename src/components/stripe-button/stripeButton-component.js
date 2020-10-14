import React from 'react';
import StripeCheckout from 'react-stripe-checkout';


const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51Hc4z7CrI1kjgza2k30bVujSKThZKILf6JAj9HDtii68jyJB53Dtt7GNoZZHegJpts6Wf8Z4JmDzJCtls9zgJloP00du4J5snf';
    const onToken = token => {
        console.log(token);
        alert('Payment Succesful!');
    };
    return(
        <StripeCheckout
            label='Pay Now'
            name='MKJ Clothing Ltd.'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        /> 
    )
}

export default StripeCheckoutButton