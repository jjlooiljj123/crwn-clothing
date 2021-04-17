import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51Ih9btCPdEYMzami4Ft7oGQJCO28YCRsugRIcPAmv8A5aNKUqsrUCDIh39mSlxYccJ1ko8NOFUd9bcYz4p8BdhVc00wj6HIGIU";

  const onToken = (token) => {
    console.log(token);
    alert("Payment Siccessful");
  };

  return (
    <StripeCheckout
      currency="MYR"
      bitcoin
      label="Pay Now"
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is RM${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
