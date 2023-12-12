import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import axios from "axios";
import { useState } from "react";

 export default function  PaymentForm ()  {
    const [success, setSuccess] = useState(false)
    const stripe = useStripe()
    const elements = useElements()
    

    const handleSubmit = async (e) => {
        e.preventDefault()

        const [failed, paymentMethod] = await stripe.createPaymentMethod({
            type: "card",
            card: elements.getElement(CardElement)
        })
    
        if (!failed) {
            try {
                const { id } = paymentMethod
                const response = await axios.post("https://localhost:4000/payment", {
                    amount: 1000,
                    id
                })
                if (response.data.success) {
                    console.log("payment successful")
                    setSuccess(true)
                }
            
            } catch (failed) {
                console.log("payment failed", failed)
            }
        
        } else {
            console.log(failed.message);
        }
    }
return (
    <>
        {!success ?
            <form onSubmit={handleSubmit}>
                <fieldset className="FormGroup">
                    <div className="">

                    </div>
                </fieldset>
            </form>
        }
    </>
    
  )
}

