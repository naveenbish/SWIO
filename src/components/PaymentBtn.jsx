import { useNavigate } from "react-router-dom";

const PaymentBtn=()=>{
    const navigator = useNavigate();
    
    async function fun() {
       console.log("fun");
        const loadScript=(source)=>{
            return new Promise(rsolve =>{
              const script=document.createElement("script");
              script.src=source;
              script.onload=()=>rsolve(true)
              script.onerror=()=>rsolve(false)
              document.body.appendChild(script)
            })
        }
          const response=await loadScript("https://checkout.razorpay.com/v1/checkout.js")
          if(!response){
            console.log("rezore pay faild to load")
          }
          const optiones={
            key:"rzp_test_e684qjpT2GcMb6",
            amount: 1 * 100,
            currency: "INR",
            name: "booking",
            email: "a@gmail.com",
            descrption: "Thank you booking!!!!!!!!!!!!!!!!!!!!",
            handler:()=>{
                navigator("/success")
            },
            prefill:{
                name: "pavan kumar",
                email: "siriyalapavankumar@gmail.com"
            }
          }
          const paymentObject=new window.Razorpay(optiones);
        paymentObject.open();
        
        }
    return(
        <div>
            <button onClick={()=> fun()}>Buy Directly</button>
        </div>
    )
}
export default PaymentBtn;