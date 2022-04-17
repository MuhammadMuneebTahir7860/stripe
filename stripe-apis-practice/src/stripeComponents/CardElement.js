import { CardElement } from '@stripe/react-stripe-js';

export default function PaymentCard() {
    return (
        <div style={{borderRadius:20, width: 500, marginLeft: 'auto', marginRight: 'auto', marginTop: 100, padding: 50, backgroundColor: "#6772e5", }}>
            <CardElement
                options={{
                    iconStyle: "solid",
                    style: {
                        base: {
                            iconColor: "#c4f0ff",
                            color: "#fff",
                            fontWeight: 500,
                            fontFamily: "Roboto, Open Sans, Segoe UI, sans-serif",
                            fontSize: "16px",
                            fontSmoothing: "antialiased",
                            ":-webkit-autofill": {
                                color: "#fce883"
                            },
                            "::placeholder": {
                                color: "#87bbfd"
                            }
                        },
                        invalid: {
                            iconColor: "#ffc7ee",
                            color: "#ffc7ee"
                        }
                    }
                }}
            />
        </div>
    )
}
