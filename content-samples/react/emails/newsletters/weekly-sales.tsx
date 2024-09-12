import {
    Body,
    Container,
    Head,
    Heading,
    Html,
    Img,
    Preview,
    Section,
    Text,
    Link,
} from "@react-email/components";
import * as React from "react";

interface WeeklySalesEmailProps {
    items?: { imgSrc: string; price: string }[];
    storeLink: string;
}

export const WeeklySalesEmail = ({ items = [], storeLink }: WeeklySalesEmailProps) => (
    <Html>
        <Head />
        <Preview>Weekly Specials Just for You!</Preview>
        <Body style={main}>
            <Container style={container}>
                <Heading style={heading}>Weekly Specials Just for You!</Heading>

                <Section>
                    <div style={gridStyle}>
                        {items.slice(0, 6).map((item, index) => ( // Display exactly 6 items
                            <div key={index} style={itemContainer}>
                                <Img
                                    src={item.imgSrc}
                                    alt={`Sale item ${index + 1}`}
                                    style={imageStyle}
                                />
                                <Text style={priceStyle}>Price: ${item.price}</Text>
                            </div>
                        ))}
                    </div>
                </Section>

                <Section style={buttonContainer}>
                    <Link href={storeLink} style={storeButtonStyle}>
                        Grab These Deals Today!
                    </Link>
                    <Text style={h2}>
                        Hurry, These Deals Won't Last!
                    </Text>

                    <Text style={links}>
                        <Link style={link} href="#">Browse our full selection</Link> ・{" "}
                        <Link style={link} href="#">Need help? Contact us!</Link>
                    </Text>

                    <Text style={footer}>
                        Business Inc. ・123 Business St ・City, Country 12345
                    </Text>
                </Section>
            </Container>
        </Body>
    </Html>
);

WeeklySalesEmail.PreviewProps = {
    items: [
        { imgSrc: "https://images.pexels.com/photos/128598/pexels-photo-128598.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", price: "20.56" },
        { imgSrc: "https://images.pexels.com/photos/2363347/pexels-photo-2363347.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", price: "30.90" },
        { imgSrc: "https://images.pexels.com/photos/70746/strawberries-red-fruit-royalty-free-70746.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", price: "7.50" },
        { imgSrc: "https://images.pexels.com/photos/760281/pexels-photo-760281.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", price: "12.90" },
        { imgSrc: "https://images.pexels.com/photos/51958/oranges-fruit-vitamins-healthy-eating-51958.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", price: "10.36" },
        { imgSrc: "https://images.pexels.com/photos/693794/pexels-photo-693794.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", price: "15.20" },
    ],
    storeLink: "https://store.com",
} as WeeklySalesEmailProps;

const main = {
    backgroundColor: "#ffffff",
    fontFamily:
        '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif',
};

const container = {
    margin: "0 auto",
    padding: "20px",
    maxWidth: "600px",
};

const heading = {
    fontSize: "36px",
    lineHeight: "1.4",
    fontWeight: "700",
    color: "#ff0000",
    textAlign: "center" as const,
    marginBottom: "20px",
};

const h2 = {
    fontSize: "28px",
    lineHeight: "1.4",
    fontWeight: "700",
    color: "#ff0000",
    textAlign: "center" as const,
    marginBottom: "20px",
};

const gridStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "10px",
    justifyItems: "center" as const,
    background: "rgb(245, 244, 245)",
    borderRadius: "4px",
    marginBottom: "30px",
    padding: "40px 10px",
};

const itemContainer = {
    width: "100%",
    textAlign: "center" as const,
};

const imageStyle = {
    width: "100%",
    maxWidth: "180px",
    height: "180px",
    objectFit: "cover" as const,
    borderRadius: "5px",
};

const priceStyle = {
    marginTop: "10px",
    fontWeight: "bold",
    fontSize: "16px",
    color: "#333333",
};

const buttonContainer = {
    textAlign: "center" as const,
    marginTop: "20px",
};

const storeButtonStyle = {
    display: "inline-block",
    padding: "15px 30px",
    backgroundColor: "#ff0000",
    color: "#ffffff",
    textDecoration: "none",
    fontWeight: "bold",
    borderRadius: "5px",
    fontSize: "16px",
};

const links = {
    textAlign: "center" as const,
};

const link = {
    color: "#0366d6",
    fontSize: "12px",
    textDecoration: "underline",
};

const footer = {
    color: "#6a737d",
    fontSize: "12px",
    textAlign: "center" as const,
    marginTop: "40px",
    borderTop: "1px solid #dedede",
    paddingTop: "20px",
};

export default WeeklySalesEmail;
