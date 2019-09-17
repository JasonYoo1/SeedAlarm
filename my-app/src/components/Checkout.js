import React, { useState, useRef, useEffect, Component } from 'react';import ReactDOM from "react-dom";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";
import { toast } from "react-toastify";
import { PayPalButton } from "react-paypal-button-v2";
import "react-toastify/dist/ReactToastify.css";

import {
    Form,
    FormInput,
    FormTextarea,
    FormGroup,
    Col,
    Card,
    CardHeader,
    CardBody,
    Container,
    Button,
    Row
  } from "shards-react";

// toast.configure();

// function CheckOut() {
//   const [product] = React.useState({
//     name: "PLANS",
//     price: 14.99,
//     description: "something"
//   });

//   async function handleToken(token, addresses) {
//     const response = await axios.post(
//       "https://ry7v05l6on.sse.codesandbox.io/checkout",
//       { token, product }
//     );
//     const { status } = response.data;
//     console.log("Response:", response.data);
//     if (status === "success") {
//       toast("Success! Check email for details", { type: "success" });
//     } else {
//       toast("Something went wrong", { type: "error" });
//     }
//   }

//   return (
//     <div className="container">
//       <div className="product">       
//        <Row>
//        <Container style={{ maxWidth: "250px" }}  className="card-container">
//       <Card className="card">
//         <CardHeader className="card-header">PLAN 1</CardHeader>
//         <CardBody className="card-body">
//          <p>
//          30 Days<br></br>
//          2¢ per MIN<br></br>
//          2¢ per SMS<br></br>
//          2¢ per MB
//          </p>
//         </CardBody>
//       </Card>
//       </Container>
//       <Container style={{ maxWidth: "250px" }}  className="card-container">
//       <Card className="card">
//         <CardHeader className="card-header">PLAN 2</CardHeader>
//         <CardBody className="card-body">
//          <p>
//          30 Days<br></br>
//          2¢ per MIN<br></br>
//          2¢ per SMS<br></br>
//          2¢ per MB
//          </p>
//         </CardBody>
//       </Card>
//       </Container>
//       <Container style={{ maxWidth: "250px" }}  className="card-container">
//       <Card className="card">
//         <CardHeader className="card-header">PLAN 3</CardHeader>
//         <CardBody className="card-body">
//          <p>
//          30 Days<br></br>
//          2¢ per MIN<br></br>
//          2¢ per SMS<br></br>
//          2¢ per MB
//          </p>
//         </CardBody>
//       </Card>
//       </Container>
//         </Row>

      
//       </div>
//       <br></br>
//       <StripeCheckout
//         stripeKey="pk_test_4TbuO6qAW2XPuce1Q6ywrGP200NrDZ2233"
//         token={handleToken}
//         amount={product.price * 100}
//         name="Speed Talk Payment"
//         billingAddress
//         shippingAddress
//       />
//     </div>
    
//   );
// }

// export default CheckOut


// function CheckOut() {
//   const [paidFor, setPaidFor] = useState(false);
//   const [loaded, setLoaded] = useState(false);

//   let paypalRef = useRef();

//   const product = {
//     price: 14.99,
//     description: 'Phone Plan',
//   }

//   useEffect(()=>{
//     const script = document.createElement('script');
//     script.src = 'https://www.paypal.com/sdk/js?client-id=AV8lajyotjfPgoPbS0z6Gk7LsmGjSR9FAReOM4r7_yvQLdTlDoxxEfyLbbjVgIfMDFNF05LbJmXtMw2Z'
//     script.addEventListener('load', () => setLoaded(true));
    
//     if(loaded){
//       setTimeout(()=>{
//         window.paypal
//         .Buttons({
//           createOrder: (data, actions) =>{
//             return actions.order.create({
//               purchase_units:[
//                 {
//                   description: product.description,
//                   amount: {
//                     currency_code:'USD',
//                     value: product.price
//                   }
//                 }
//               ]
//             });
//           },
//           onApprove: async (data,actions)=>{
//             const order = await actions.order.capture();
            
//             setPaidFor(true);

//             console.log(order)
//           }
//         })
//       })
//     }
//   })

//   return (
//     <div className ='CheckOut'>
//       {paidFor ? (
//         <div>
//         <h1>Congrats, Please check your email!</h1>
//         </div>
//       ):(
//         <div>
//           <h1>{product.description} for ${product.price}</h1>
//           <div ref={v=>(paypalRef = v)}>

//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default CheckOut;


function CheckOut (){

    return (
      <PayPalButton
        amount="0.01"
        onSuccess={(details, data) => {
          alert("Transaction completed by " + details.payer.name.given_name);
 
          // OPTIONAL: Call your server to save the transaction
          return fetch("/paypal-transaction-complete", {
            method: "post",
            body: JSON.stringify({
              orderID: data.orderID
            })
          });
        }}
      />
    );
  }

  export default CheckOut