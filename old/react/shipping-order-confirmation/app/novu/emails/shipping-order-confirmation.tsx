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
  Preview,
  Row,
  Section,
  Text,
  Tailwind,
  Font,
  Button,
  render
} from "@react-email/components";
import * as React from "react";

interface AmazonShippingOrderConfirmationEmailProps {
  titleText?: string;
  topText?: string;
  components?: any;
  userFirstName?: string;
  orderArrivalLocation?: string;
  orderArrivalDate?: any;
  orderTotalAmount?: BigInteger;
  orderCurrency?: string;
  packageTrackingLink?: string;
}

const baseUrl = 'https://react-email-demo-1sy86epzj-resend.vercel.app';
const amazonLogo = 'https://assets.aboutamazon.com/dims4/default/c1f10ce/2147483647/strip/true/crop/1200x800+0+0/resize/324x216!/format/webp/quality/90/?url=https%3A%2F%2Famazon-blogs-brightspot.s3.amazonaws.com%2F75%2Fab%2F53dea402445d83406077763cfde7%2Famazon-logo-1200x800.png';

export const AmazonShippingOrderConfirmationEmail = ({
  userFirstName,
  orderArrivalLocation,
  orderArrivalDate,
  orderCurrency,
  orderTotalAmount,
  packageTrackingLink,
  topText,
  components
}: AmazonShippingOrderConfirmationEmailProps) => {
  return (
    <Html>
        <Head>
          <Font
            fontFamily="Inter"
            fallbackFontFamily="Helvetica"
            webFont={{
              url: 'https://fonts.googleapis.com/css2?family=Inter&display=swap',
              format: 'woff2',
            }}
            fontWeight={400}
            fontStyle="normal"
          />
        </Head>
        <Preview>Shipping Order Confirmation</Preview>
        <Tailwind>
          <Body className="mx-auto my-auto bg-white font-sans antialiased">
            <Section style={logo} className="flex justify-center items-center">
                <Img src={amazonLogo} className="h-20"/>
            </Section>
            <Container className="mx-auto my-[4px] rounded border border-solid border-gray-200 bg-white p-8">
              <Section>
                <Row>
                  <Text className="m-0 text-xl font-semibold text-gray-900">
                    Hello {userFirstName},
                  </Text>
                  <Text className="mt-2 text-[16px] text-gray-500">
                    {topText}.
                  </Text>

                  <Hr />

                  <h4 className="m-0 text-xl font-semibold text-gray-900">
                    Shipping Confirmation
                  </h4>

                  <Text className="text-[16px] text-gray-500">
                    Your package will arrive by: <b className="text-black">{orderArrivalDate}</b>
                  </Text>
                </Row>
                <Row>
                  <Text className="mt-2 text-[16px] text-gray-500">
                    Ship to: <b className="text-black">{userFirstName}</b> <b className="text-black">{orderArrivalLocation}</b>
                  </Text>
                </Row>
                <Row>
                  <Text className="mt-2 text-[16px] text-gray-500">
                    Order #: <b className="text-black"> 112-6949858-2887402</b>
                  </Text>
                </Row>
                <Row>
                  <Button className="rounded-lg bg-yellow-400 text-black text-[14px] px-6 py-3" href={packageTrackingLink}>
                    Track package
                  </Button>
                </Row>
                <Row className="mt-4">
                  <Column align="center" colSpan={1} className="w-[33%] pr-1">
                    <Img
                      src="https://images.unsplash.com/photo-1511556820780-d912e42b4980?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      className="w-full rounded-lg object-cover"
                      height="180"
                    />
                    <Text className="m-0 mt-6 text-xl font-semibold text-gray-900">
                      Shoes
                    </Text>
                  </Column>
                  <Column align="center" colSpan={1} className="w-[33%] px-1">
                    <Img
                      src="https://images.unsplash.com/photo-1571781926291-c477ebfd024b?q=80&w=2789&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      className="w-full rounded-lg object-cover"
                      height="180"
                    />
                    <Text className="m-0 mt-6 text-xl font-semibold text-gray-900">
                      Moisturizer
                    </Text>
                  </Column>
                  <Column align="center" colSpan={1} className="w-[33%] pl-1">
                    <Img
                      src="https://images.unsplash.com/photo-1491933382434-500287f9b54b?q=80&w=2864&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      className="w-full rounded-lg object-cover"
                      height="180"
                    />
                    <Text className="m-0 mt-6 text-xl font-semibold text-gray-900">
                      Gadgets
                    </Text>
                  </Column>
                </Row>
                <Row>
                  <Hr />
                  <Text>
                    <h3>Shipment Total: {orderCurrency}{orderTotalAmount} </h3>
                  </Text>
                  <Hr />
                </Row>
              </Section>
              <Section>
                <Row>
                  <h4 className="m-0 text-xl font-semibold text-gray-900">
                    Keep Shopping for
                  </h4>
                </Row>

                {components?.map((item: any, index: any) => {
                    return (
                      <Section>
                        
                        {item.componentType === "shoes" ? (
                          <Row className="mt-4">
                            {item.componentShoeItems?.map((item: any, index: number) => 
                              (
                                <Column align="center" key={index} colSpan={1} className="w-[33%] pr-1">
                                  <Img
                                    src={item.image}
                                    className="w-full rounded-lg object-cover"
                                    height="180"
                                  />
                                  <Text className="m-0 mt-6 text-xl font-semibold text-gray-900">
                                    {item.text}
                                  </Text>
                                </Column>
                              ))}
                          </Row>
                        ) : null}

                        {item.componentType === "moisturizers" ? (
                          <Row className="mt-4">
                            <Column align="center" colSpan={1} className="w-[33%] pr-1">
                              <Img
                                src="https://images.unsplash.com/photo-1571781926291-c477ebfd024b?q=80&w=2789&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                className="w-full rounded-lg object-cover"
                                height="180"
                              />
                              <Text className="m-0 mt-6 text-xl font-semibold text-gray-900">
                                Moisturizer 1
                              </Text>
                            </Column>
                            <Column align="center" colSpan={1} className="w-[33%] px-1">
                              <Img
                                src="https://images.unsplash.com/photo-1571781926291-c477ebfd024b?q=80&w=2789&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                className="w-full rounded-lg object-cover"
                                height="180"
                              />
                              <Text className="m-0 mt-6 text-xl font-semibold text-gray-900">
                                Moisturizer 2
                              </Text>
                            </Column>
                            <Column align="center" colSpan={1} className="w-[33%] pl-1">
                              <Img
                                src="https://images.unsplash.com/photo-1571781926291-c477ebfd024b?q=80&w=2789&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                className="w-full rounded-lg object-cover"
                                height="180"
                              />
                              <Text className="m-0 mt-6 text-xl font-semibold text-gray-900">
                                Moisturizer 3
                              </Text>
                            </Column>
                          </Row>
                        ) : null}

                        {item.componentType === "gadgets" ? (
                          <Row className="mt-4">
                            <Column align="center" colSpan={1} className="w-[33%] pr-1">
                              <Img
                                src="https://images.unsplash.com/photo-1491933382434-500287f9b54b?q=80&w=2864&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                className="w-full rounded-lg object-cover"
                                height="180"
                              />
                              <Text className="m-0 mt-6 text-xl font-semibold text-gray-900">
                                Gadgets 1
                              </Text>
                            </Column>
                            <Column align="center" colSpan={1} className="w-[33%] px-1">
                              <Img
                                src="https://images.unsplash.com/photo-1491933382434-500287f9b54b?q=80&w=2864&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                className="w-full rounded-lg object-cover"
                                height="180"
                              />
                              <Text className="m-0 mt-6 text-xl font-semibold text-gray-900">
                                Gadgets 2
                              </Text>
                            </Column>
                            <Column align="center" colSpan={1} className="w-[33%] pl-1">
                              <Img
                                src="https://images.unsplash.com/photo-1491933382434-500287f9b54b?q=80&w=2864&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                className="w-full rounded-lg object-cover"
                                height="180"
                              />
                              <Text className="m-0 mt-6 text-xl font-semibold text-gray-900">
                                Gadgets 3
                              </Text>
                            </Column>
                          </Row>
                        ) : null}

                        {item.componentType === "all" ? (
                          <Row className="mt-4">
                            <Column align="center" colSpan={1} className="w-[33%] pr-1">
                              <Img
                                src="https://images.unsplash.com/photo-1511556820780-d912e42b4980?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                className="w-full rounded-lg object-cover"
                                height="180"
                              />
                              <Text className="m-0 mt-6 text-xl font-semibold text-gray-900">
                                Shoes
                              </Text>
                            </Column>
                            <Column align="center" colSpan={1} className="w-[33%] px-1">
                              <Img
                                src="https://images.unsplash.com/photo-1571781926291-c477ebfd024b?q=80&w=2789&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                className="w-full rounded-lg object-cover"
                                height="180"
                              />
                              <Text className="m-0 mt-6 text-xl font-semibold text-gray-900">
                                Moisturizer
                              </Text>
                            </Column>
                            <Column align="center" colSpan={1} className="w-[33%] pl-1">
                              <Img
                                src="https://images.unsplash.com/photo-1491933382434-500287f9b54b?q=80&w=2864&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                className="w-full rounded-lg object-cover"
                                height="180"
                              />
                              <Text className="m-0 mt-6 text-xl font-semibold text-gray-900">
                                Gadgets
                              </Text>
                            </Column>
                          </Row>
                        ) : null}
                      </Section>
                    );
                  })}
              </Section>
            </Container>
          </Body>
        </Tailwind>
      </Html>
  );
};

export default AmazonShippingOrderConfirmationEmail;

const main = {
  fontFamily: "Ember,Helvetica,Arial,sans-seri",
  backgroundColor: "#ffffff",
};

const container = {
  borderTop: "4px solid #FF9900",
  margin: "0 auto",
  padding: "20px",
  width: "640px",
};

const title = {
  color: "#232f3e",
  fontSize: "36px",
  lineHeight: "38px",
  fontWeight: "400",
  margin: "20px 0",
};

const ratingContent = {
  paddingLeft: "30px",
};

const rating = {
  display: "inline-block",
};

const previewPurchase = {
  background: "#008296",
  color: "#ffffff",
  padding: "8px 0",
};

const previewPurchaseLink = {
  color: "#ffffff",
  textDecoration: "underline",
  cursor: "pointer",
};

const socialMedia = {
  display: "inline-block",
  marginLeft: "10px",
};

const communityLink = {
  color: "#666666",
  textDecoration: "underline",
  cursor: "pointer",
};

const clickHereLink = {
  color: "#999999",
  textDecoration: "underline",
  cursor: "pointer",
};

const urlLink = {
  color: "#1155cc",
  textDecoration: "underline",
  cursor: "pointer",
};

const footerText = {
  fontSize: "10px",
  color: "#666666",
  margin: "8px 0",
};

const logo = {
 
};


export function renderShippingOrderEmail(inputs: any, payload: any) {
  return render(<AmazonShippingOrderConfirmationEmail {...inputs} {...payload} />);
}