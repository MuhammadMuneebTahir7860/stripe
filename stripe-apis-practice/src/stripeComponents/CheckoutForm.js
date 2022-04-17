import {CardElement, useStripe, useElements} from '@stripe/react-stripe-js';
import PaymentCard from './CardElement';
import axios from 'axios';
export default function CheckoutForm (){
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    // Block native form submission.
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }

    // Get a reference to a mounted CardElement. Elements knows how
    // to find your CardElement because there can only ever be one of
    // each type of element.
    const cardElement = elements.getElement(CardElement);

    // Use your card Element with other Stripe.js APIs
    const {error, paymentMethod} = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement,
    });
    
    if (error) {
      console.log('[error]', error);
    } else {
      console.log('[PaymentMethod]', paymentMethod);
    const pay=  await axios.post("http://localhost:5000/payment", {
        amount: 1000,
        source:paymentMethod.id,
    })
      alert(pay.data.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <PaymentCard />
      <div style={{justifyContent:'center',alignItems:'center',display:'flex',marginTop:20}}>
      <button  
      style={{
        display: "block",
        border:'none',
        fontSize: 16,
        width:600,
        height: 40,
        backgroundColor: "#f6a4eb",
        boxShadow: "0 6px 9px rgba(50, 50, 93, 0.06), 0 2px 5px rgba(0, 0, 0, 0.08)",
        borderRadius: 4,
        color: "#fff",
        fontWeight: 600,
        cursor: "pointer",
        transition: "all 100ms ease-in-out",
      }}
      type="submit" disabled={!stripe}>
        Pay
      </button>
      </div>
    </form>
  );
};