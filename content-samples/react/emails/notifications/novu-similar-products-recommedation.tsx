import React from 'react';
import {
  Body, 
  Container, 
  Column, 
  Head, 
  Heading, 
  Hr,
  Html, 
  Img, 
  Link,
  Row, 
  Section, 
  Text, 
  Preview,
  Tailwind 
} from "@react-email/components";



interface NovuAddToCartAlertProps {
  username: string;
  productName: string;
  logoImg: string;
  linkToUnsubscribe: string;
  productList: Array<{name: string; description: string; image: string}>
}			

export const NovuAddToCartAlert = ({
  username,
  productName,
  logoImg,
  linkToUnsubscribe,
  productList,
}: NovuAddToCartAlertProps) => {
  
  return(
    <Html>
      <Head />
      <Preview>Check out these amazing products we've picked just for you!</Preview>

      <Tailwind>
        <Body style={main}>
          <Container style={container}>
            <Section style={iconContainer}>
              <Img
                src={logoImg}
                width="80"
                height="74"
                alt="Novu Logo"
                style={centerImage}
              />
            </Section>
            <Heading style={h1}>
              Hello {username}, check out these amazing products!
            </Heading>
            <Text style={subheading}>
              We've hand-picked some items we think you'll love:
            </Text>

            <Section style={productTable}>
              <Row style={productRow}>
                {productList.slice(0, 2).map((product, index) => (
                  <Column key={index} style={productColumn}>
                    <Img src={product.image} alt={product.name} style={imageStyle} />
                    <Text style={productNameStyle}>{product.name}</Text>
                    <Text style={productDescriptionStyle}>{product.description}</Text>
                  </Column>
                ))}
              </Row>
              <Row style={productRow}>
                {productList.slice(2, 4).map((product, index) => (
                  <Column key={index} style={productColumn}>
                    <Img src={product.image} alt={product.name} style={imageStyle} />
                    <Text style={productNameStyle}>{product.name}</Text>
                    <Text style={productDescriptionStyle}>{product.description}</Text>
                  </Column>
                ))}
              </Row>
            </Section>

            <Text style={text}>
              Love what you see? <br/>Discover more products tailored just for you!
              <br/> Need assistance? We're just a click away and ready to help with any questions.	 
            </Text>

            <Text style={footer}>
              Best regards,<br/> Support Team
            </Text>

            <Hr style={hr} />
				
            <Section style={footerSection}>
              <Img
                src={logoImg}
                width="42"
                height="42"
                alt={username}
                style={footerLogoStyle}
              />
              <Text style={footer}>
                <br/>{productName}
              </Text>
            </Section>

            <Text style={footer}>
              If you don't want to receive these alerts in the future,{' '}
              <Link href={linkToUnsubscribe} style={link}>click here</Link>
              {' '}to change your notification settings.
            </Text>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

const main = {
  backgroundColor: "#f8c8dc",
  fontFamily: 'Arial, sans-serif',
};

const container = {
  margin: "0 auto",
  padding: "20px 0 48px",
  width: "580px",
};

const iconContainer = {
  marginTop: "32px"
};

const h1 = {
  color: "#ff69b4",
  fontSize: "24px",
  fontWeight: "bold",
  margin: "30px 0",
  padding: "0",
};

const subheading = {
  color: "#c71585",
  fontSize: "18px",
  lineHeight: "26px",
  margin: "0 0 20px",
};
const productTable = {
    tableLayout: 'fixed'

}
const productRow = {
  display: 'grid',
  justifyContent: 'center',
  alignItems: 'flex-start',
  margin: '0 0 20px',
  width: '100%',
  gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1fr)'
};

const productColumn = {
  width: '50%',
  padding: '0 10px',
  boxSizing: 'content-box' as const,
  overflow: 'hidden',
  textOverflow: 'ellipsis'
};

const imageStyle = {
  display: 'block',
  marginLeft: 'auto',
  marginRight: 'auto',
  width: "182px",
  height: "235px",
  objectFit: "cover" as const,
  borderRadius: "2px",
  border: "4px solid #ff69b4",
};

const productNameStyle = {
  color: "#ff69b4",
  fontSize: "16px",
  fontWeight: "bold",
  margin: "10px 0 8px",
};

const productDescriptionStyle = {
  color: "#c71585",
  fontSize: "14px",
  lineHeight: "20px",
  margin: "0",
  textAlign: "center" as const,
};

const text = {
  color: '#c71585',
  fontSize: '16px',
  lineHeight: '24px',
  margin: '24px 0',
};

const footer = {
  color: '#c71585',
  fontSize: '14px',
  lineHeight: '24px',
};

const hr = {
  borderColor: '#e5e7eb',
  margin: '20px 0',
};

const link = {
  color: '#3b82f6',
  textDecoration: 'none',
};

const footerSection = {
  display: 'flex',
  flexDirection: 'column' as const,
  alignItems: 'center',
  gap: '10px',
};

const footerLogoStyle = {
  display: 'block',
  margin: '0 auto',
};

const centerImage = {
  display: 'block',
  margin: '0 auto',
};

NovuAddToCartAlert.PreviewProps = {
  username: "Noa",
  productName: "",
  productLink: "",
  logoImg: `https://images.spr.so/cdn-cgi/imagedelivery/j42No7y-dcokJuNgXeA0ig/dca73b36-cf39-4e28-9bc7-8a0d0cd8ac70/standalone-gradient2x_2/w=128,quality=90,fit=scale-down`,
  linkToUnsubscribe: "https://google.com",
  productImage: "",
  productList: [
    { name: "Classic White Sneakers", description: "Timeless style for everyday wear just trying to add words for you ", image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80" },
    { name: "Leather Messenger Bag", description: "Perfect for work or casual outings", image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80" },
    { name: "Stainless Steel Watch", description: "Elegant timepiece for any", image: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80" },
    { name: "Polarized Sunglasses", description: "Protect your eyes in style", image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80" },
  ]
} as NovuAddToCartAlertProps;

export default NovuAddToCartAlert;