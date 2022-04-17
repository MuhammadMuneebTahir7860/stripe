import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import CheckoutForm from './CheckoutForm';
// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe('pk_test_51JL6XIDrfg99ugjl6dQmPBWEGFCPBtIUkV1m4RqPdORGWOXTYq1scGLRtrboyI7ehL4g0EtIvZKsvtuAdaZ4xNNL00YkvhVwWb');

export default function ElementsProvider(){
  return (
    <Elements stripe={stripePromise}>
      <CheckoutForm />
    </Elements>
  );
};