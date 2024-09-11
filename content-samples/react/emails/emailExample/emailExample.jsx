import {
  Body,
  Container,
  Head,
  Html,
  Text,
  Img,
  Link,
} from "@react-email/components";
import * as React from "react";

const VisualEmailNotification = () => (
  <Html>
    <Head />
    <Body style={main}>
      <Container style={container}>
        {/* Logo at the top */}
       
        <Img
          src="https://user-images.githubusercontent.com/2233092/213641043-3bbb3f21-3c53-4e67-afe5-755aeb222159.png"
          alt="Company Logo"
          style={logoStyle}
        />
         
        
        {/* Main visual image */}
        <Img
          src="https://mlid.fr/shop/42-thickbox_default/email-creation.jpg" // Replace with your generated image
          alt="Email Notification"
          style={imageStyle}
        />
        
        {/* Minimal text */}
        <Text style={messageStyle}>You've received an important notification.</Text>
        
        {/* CTA button */}
        <Link href="https://example.com/inbox" style={buttonStyle}>
          Open Email
        </Link>
      </Container>
    </Body>
  </Html>
);

export default VisualEmailNotification;

const main = {
  
  backgroundColor: "#f0f0f0",
  fontFamily: "Arial, sans-serif",
  padding: "20px",
  textAlign: "center",
};

const container = {
  
  backgroundColor: "#ffffff",
  borderRadius: "8px",
  padding: "20px",
  maxWidth: "700px",
  height:"auto",
  margin: "0 auto",
  boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
};

const logoStyle = {
  maxWidth: "100px",
  marginBottom: "20px",
};

const imageStyle = {
  maxWidth: "200px",
  marginBottom: "20px",
  margin:"auto",
  
};

const messageStyle = {
  fontSize: "18px",
  color: "#333333",
  marginBottom: "20px",
};

const buttonStyle = {
  display: "inline-block",
  // backgroundColor: "rgb(3 58 98)",
  background: "linear-gradient(to right, rgb(0, 99, 169), rgb(3, 58, 98))",

  color: "#ffffff",
  padding: "10px 20px",
  borderRadius: "5px",
  textDecoration: "none",
  fontSize: "16px",
};

// import {
//   Body,
//   Container,
//   Head,
//   Html,
//   Text,
//   Link,
//   Heading,
//   Img,
// } from "@react-email/components";
// import * as React from "react";

// const EmailNotification = () => (
//   <Html>
//     <Head />
//     <Body style={main}>
//       <Container style={container}>
//         {/* Add the logo at the top */}
//         <Img
//           // src="https://example.com/logo.png" // Replace with the correct logo URL
//           src="https://avatars.githubusercontent.com/u/77433905?s=48&v=4"
//           alt="Company Logo"
//           style={logoStyle}
//         />

//         <Heading style={heading}>Welcome to Our Service!</Heading>

//         {/* Add the generated image */}
//         <Img
//           src="https://example.com/envelope-image.png" // Replace with the correct URL for the generated image
//           alt="Animated Envelope"
//           style={imageStyle}
//         />

//         <Text style={paragraph}>Hi there,</Text>
//         <Text style={paragraph}>
//           Thank you for signing up for our service. We are excited to have you on
//           board!
//         </Text>
//         <Text style={paragraph}>
//           To complete your registration, please click the button below:
//         </Text>
//         <Link href="https://example.com/verify" style={button}>
//           Verify Your Email
//         </Link>
//         <Text style={paragraph}>
//           If you did not sign up for this service, please ignore this email.
//         </Text>
//         <Text style={footer}>
//           Best regards,
//           <br />
//           The Team
//         </Text>
//       </Container>
//     </Body>
//   </Html>
// );

// export default EmailNotification;

// const main = {
//   backgroundColor: "#f7f7f7",
//   fontFamily: "Arial, sans-serif",
//   padding: "20px",
// };

// const container = {
//   backgroundColor: "#ffffff",
//   borderRadius: "8px",
//   padding: "20px",
//   maxWidth: "600px",
//   margin: "0 auto",
// };

// const logoStyle = {
//   maxWidth: "150px",
//   display: "block",
//   margin: "0 auto 20px",
// };

// const imageStyle = {
//   maxWidth: "100%",
//   height: "auto",
//   marginBottom: "20px",
// };

// const heading = {
//   color: "#333333",
//   fontSize: "24px",
//   fontWeight: "bold",
//   textAlign: "center",
//   marginBottom: "20px",
// };

// const paragraph = {
//   color: "#555555",
//   fontSize: "16px",
//   lineHeight: "1.5",
//   marginBottom: "20px",
// };

// const button = {
//   display: "inline-block",
//   padding: "10px 20px",
//   fontSize: "16px",
//   fontWeight: "bold",
//   color: "#ffffff",
//   backgroundColor: "#007bff",
//   textDecoration: "none",
//   borderRadius: "4px",
//   textAlign: "center",
//   margin: "20px 0",
// };

// const footer = {
//   color: "#777777",
//   fontSize: "14px",
//   textAlign: "center",
//   marginTop: "20px",
// };


// import {
//   Body,
//   Container,
//   Head,
//   Html,
//   Text,
//   Link,
//   Heading,
// } from "@react-email/components";
// import * as React from "react";

// const EmailNotification = () => (
//   <Html>
//     <Head />
//     <Body style={main}>
//       <Container style={container}>
//         <Heading style={heading}>Welcome to Our Service!</Heading>
//         <Text style={paragraph}>
//           Hi there,
//         </Text>
//         <Text style={paragraph}>
//           Thank you for signing up for our service. We are excited to have you on board!
//         </Text>
//         <Text style={paragraph}>
//           To complete your registration, please click the button below:
//         </Text>
//         <Link href="https://example.com/verify" style={button}>
//           Verify Your Email
//         </Link>
//         <Text style={paragraph}>
//           If you did not sign up for this service, please ignore this email.
//         </Text>
//         <Text style={footer}>
//           Best regards,<br />
//           The Team
//         </Text>
//       </Container>
//     </Body>
//   </Html>
// );

// export default EmailNotification;

// const main = {
//   backgroundColor: "#f7f7f7",
//   fontFamily: "Arial, sans-serif",
//   padding: "20px",
// };

// const container = {
//   backgroundColor: "#ffffff",
//   borderRadius: "8px",
//   padding: "20px",
//   maxWidth: "600px",
//   margin: "0 auto",
// };

// const heading = {
//   color: "#333333",
//   fontSize: "24px",
//   fontWeight: "bold",
//   textAlign: "center",
//   marginBottom: "20px",
// };

// const paragraph = {
//   color: "#555555",
//   fontSize: "16px",
//   lineHeight: "1.5",
//   marginBottom: "20px",
// };

// const button = {
//   display: "inline-block",
//   padding: "10px 20px",
//   fontSize: "16px",
//   fontWeight: "bold",
//   color: "#ffffff",
//   backgroundColor: "#007bff",
//   textDecoration: "none",
//   borderRadius: "4px",
//   textAlign: "center",
//   margin: "20px 0",
// };

// const footer = {
//   color: "#777777",
//   fontSize: "14px",
//   textAlign: "center",
//   marginTop: "20px",
// };

// import {
//        Body,
//        Container,
//        Head,
//       Heading,
//        Html,
//        Img,
//       Link,
//      Section,
//      Text,
//      } from "@react-email/components";
// import * as React from "react";

// const NovuEmail = () => (
//   <Html>
//     <Head />
//     <Body 
//     style={main}
//     >
//       <Container
//        style={container}
//       >
//         <div style={wrapper}>
//         <div style={lidBase}>
//           <div style={lidOne}></div>
//           <div style={lidTwo}></div>
//           <div style={envelope}></div>
//           <div style={letter}>
//             <p style={letterP}>Hello</p>
//           </div>
//         </div>
//         </div>
//       </Container>
//       <Text style={footer}>Securely powered by Novu.</Text>
//     </Body>
//   </Html>
// );

// export default NovuEmail;

// const main = {
//   backgroundColor: "#ffffff",
//   fontFamily: "sans-serif",
//   display: "flex",
//   justifyContent: "center",
//   alignItems: "center",
//   height: "100vh",
// };

// const container = {
//   position: "relative",
//   width: "300px",
//   height: "200px",
// };

// const wrapper = {
//   height: "200px",
//   width: "300px",
//   backgroundColor: "#3760C9",
//   position: "relative",
//   display: "flex",
//   justifyContent: "center",
//   zIndex: 0,
// };

// const lidBase = {
//   position: "absolute",
//   height: "100%",
//   width: "100%",
//   top: 0,
//   left: 0,
//   borderRight: "150px solid transparent",
//   borderBottom: "100px solid transparent",
//   borderLeft: "150px solid transparent",
//   transformOrigin: "top",
//   transition: "transform 0.25s linear",
// };

// const lidOne = {
//   ...lidBase,
//   borderTop: "100px solid #658ced",
//   transform: "rotateX(0deg)",
//   zIndex: 3,
//   transitionDelay: "0.75s",
// };

// const lidTwo = {
//   ...lidBase,
//   borderTop: "100px solid #3760C9",
//   transform: "rotateX(90deg)",
//   zIndex: 1,
//   transitionDelay: "0.5s",
// };

// const envelope = {
//   position: "absolute",
//   height: "100%",
//   width: "100%",
//   top: 0,
//   left: 0,
//   borderTop: "100px solid transparent",
//   borderRight: "150px solid #C4DFF0",
//   borderBottom: "100px solid #C4DFF0",
//   borderLeft: "150px solid #a4d4f2",
//   zIndex: 3,
// };

// const letter = {
//   position: "absolute",
//   top: 0,
//   width: "80%",
//   height: "80%",
//   backgroundColor: "white",
//   borderRadius: "15px",
//   zIndex: 2,
//   transition: "0.5s",
// };
// const letterP ={
//   textAlign: "center",
//   fontSize: "30px",
//   marginTop: "30px",
//   color:"#3B4049" ,
// }
// const footer = {
//   color: "#000",
//   fontSize: "12px",
//   fontWeight: 800,
//   letterSpacing: "0",
//   lineHeight: "23px",
//   margin: "0",
//   marginTop: "20px",
//   fontFamily: "sans-serif",
//   textAlign: "center",
//   textTransform: "uppercase",
// };

// // CSS for hover effect (you might need a workaround in React for this)
// const hoverEffect = `
//   .wrapper:hover .lid.one {
//       transform: rotateX(90deg);
//       transition-delay: 0s;
//   }

//   .wrapper:hover .lid.two {
//       transform: rotateX(180deg);
//       transition-delay: 0.25s;
//   }

//   .wrapper:hover .letter {
//     transform: translateY(-50px);
//     transition-delay: 0.5s;
//   }
// `;


// import {
//     Body,
//     Container,
//     Head,
//     Heading,
//     Html,
//     Img,
//     Link,
//     Section,
//     Text,
//   } from "@react-email/components";
// import * as React from "react";
// interface NovuEmailProps {
//     validationCode?: string;
//   }
// export const NovuEmail = ({
//     validationCode,
//   }: NovuEmailProps) => (
//     <Html>
//       <Head />
//       <Body style={main}>
//         <Container style={container}>
//           <Img
//             src={`https://images.spr.so/cdn-cgi/imagedelivery/j42No7y-dcokJuNgXeA0ig/dca73b36-cf39-4e28-9bc7-8a0d0cd8ac70/standalone-gradient2x_2/w=128,quality=90,fit=scale-down`}
//             width="212"
//             height="88"
//             alt="novu"
//             style={logo}
//           />
//           <Text style={tertiary}>Verify Your Identity              shuli</Text>
//           <Heading style={secondary}>
//             Enter the following code to finish linking Venmo.      shuli
//           </Heading>
//           <Section style={codeContainer}>
//             <Text style={code}>{validationCode}</Text>
//           </Section>
//           <Text style={paragraph}>Not expecting this email?             shuli</Text>
//           <Text style={paragraph}>
//             Contact{" "}
//             <Link href="mailto:login@novu.com" style={link}>
//               login@novu.com
//             </Link>{" "}
//             if you did not request this code.
//           </Text>
//         </Container>
//         <Text style={footer}>Securely powered by Novu.</Text>
//       </Body>
//     </Html>
//   );
  
//   NovuEmail.PreviewProps = {
//     validationCode: "144833",
//   } as NovuEmailProps;
  
//   export default NovuEmail;
  
//   const main = {
//     backgroundColor: "#ffffff",
//     fontFamily: "HelveticaNeue,Helvetica,Arial,sans-serif",
//   };
  
//   const container = {
//     backgroundColor: "#ffffff",
//     border: "1px solid #eee",
//     borderRadius: "5px",
//     boxShadow: "0 5px 10px rgba(20,50,70,.2)",
//     marginTop: "20px",
//     maxWidth: "360px",
//     margin: "0 auto",
//     padding: "68px 0 130px",
//   };
  
//   const logo = {
//     margin: "0 auto",
//   };
  
//   const tertiary = {
//     color: "#0a85ea",
//     fontSize: "11px",
//     fontWeight: 700,
//     fontFamily: "HelveticaNeue,Helvetica,Arial,sans-serif",
//     height: "16px",
//     letterSpacing: "0",
//     lineHeight: "16px",
//     margin: "16px 8px 8px 8px",
//     textTransform: "uppercase" as const,
//     textAlign: "center" as const,
//   };
  
//   const secondary = {
//     color: "#000",
//     display: "inline-block",
//     fontFamily: "HelveticaNeue-Medium,Helvetica,Arial,sans-serif",
//     fontSize: "20px",
//     fontWeight: 500,
//     lineHeight: "24px",
//     marginBottom: "0",
//     marginTop: "0",
//     textAlign: "center" as const,
//   };
  
//   const codeContainer = {
//     background: "rgba(0,0,0,.05)",
//     borderRadius: "4px",
//     margin: "16px auto 14px",
//     verticalAlign: "middle",
//     width: "280px",
//   };
  
//   const code = {
//     color: "#000",
//     display: "inline-block",
//     fontFamily: "HelveticaNeue-Bold",
//     fontSize: "32px",
//     fontWeight: 700,
//     letterSpacing: "6px",
//     lineHeight: "40px",
//     paddingBottom: "8px",
//     paddingTop: "8px",
//     margin: "0 auto",
//     width: "100%",
//     textAlign: "center" as const,
//   };
  
//   const paragraph = {
//     color: "#444",
//     fontSize: "15px",
//     fontFamily: "HelveticaNeue,Helvetica,Arial,sans-serif",
//     letterSpacing: "0",
//     lineHeight: "23px",
//     padding: "0 40px",
//     margin: "0",
//     textAlign: "center" as const,
//   };
  
//   const link = {
//     color: "#444",
//     textDecoration: "underline",
//   };
  
//   const footer = {
//     color: "#000",
//     fontSize: "12px",
//     fontWeight: 800,
//     letterSpacing: "0",
//     lineHeight: "23px",
//     margin: "0",
//     marginTop: "20px",
//     fontFamily: "HelveticaNeue,Helvetica,Arial,sans-serif",
//     textAlign: "center" as const,
//     textTransform: "uppercase" as const,
//   };
  