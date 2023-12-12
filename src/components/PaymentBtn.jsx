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
            key:"ScCWY3yjIf9O8qdljfazfmEk",
            amount: 1 * 100,
            currency: "INR",
            name: "booking",
            email: "a@gmail.com",
            descrption: "Thank you booking!!!!!!!!!!!!!!!!!!!!",
            handler:()=>{
                navigator("/success")
            },
            prefill:{
                name: "pasha",
                email: "a@gmail.com"
            }
          }
          const paymentObject=new window.Razorpay(optiones);
        paymentObject.open();
        
        }
    return(
        <div>
            <button onClick={()=> fun}>clk</button>
        </div>
    )
}
export default PaymentBtn;