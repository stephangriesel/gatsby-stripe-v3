import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';

import Skus from '../components/Products/Products';
import CartOverview from '../components/CartOverview';

import { loadStripe } from '@stripe/stripe-js';
import { CartProvider } from 'use-shopping-cart';

const stripePromise = loadStripe(process.env.GATSBY_STRIPE_PUBLISHABLE_KEY);

// Reference: https://github.com/dayhaysoos/use-shopping-cart/tree/master/examples/gatsby

const CartExample = () => (
  <Layout>
    <SEO title="Cart Example" />
    <h1>Checkout with cart example</h1>
    <h2>
      With{' '}
      <a href="https://use-shopping-cart.netlify.app/">use-shopping-cart</a>
    </h2>
    <CartProvider // This component comes from the use-shopping-cart package
      mode="client-only" // allows client-side checkout
      stripe={stripePromise} // Our Stripe instance so we can communicate with the Stripe API
      successUrl={`${window.location.origin}/page-2/`} // the url to redirect to after a successful purchase
      cancelUrl={`${window.location.origin}/`} // the url to redirect to when they cancel a purchase
      currency="USD" // US Dollars is the type of currency we are accepting
      allowedCountries={['US', 'GB', 'CA']}
      billingAddressCollection={true} // allows the collection of the users billing address for Stripe
    >
    <CartOverview /> 
    <Skus /> 
    </CartProvider>
  </Layout>
);

export default CartExample;