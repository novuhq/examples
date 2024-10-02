import {
    Body,
    Container,
    Head,
    Heading,
    Html,
    Img,
    Link,
    Section,
    Column,
    Text,
    Row,
    Button,
    render,
    Hr,
} from "@react-email/components";
import * as React from "react";

export interface AirbnbReviewEmailProps {
    validationCode?: string;
    companyLogo?: string;
    bodyText?: string;
    userName?: string
    questionOne?: string
    linkToAnswerOne?: string
    questionTwo?: string
    linkToAnswerTwo?: string
    questionThree?: string
    linkToAnswerThree?: string
    components?: any
    btnColor?: string
    textSize?: string
    headerText?: string
    headerTextSize?: string
    headerTextColour?: string
}

const baseUrl = process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : "";

export const AirbnbReviewEmail = ({
    companyLogo = ``,
    bodyText = ".",
    userName,
    questionOne = '',
    linkToAnswerOne = '',
    questionTwo = '',
    linkToAnswerTwo = '',
    questionThree = '',
    linkToAnswerThree = '',
    components,
    btnColor,
    textSize,
    headerText,
    headerTextSize,
    headerTextColour
}: AirbnbReviewEmailProps) => (
    <Html>
        <Head />
        <Body style={main}>
            <Container style={container}>
              <Section>
                  <Img
                      src="https://react-email-demo-48zvx380u-resend.vercel.app/static/airbnb-logo.png"
                      width="96"
                      height="30"
                      alt="Airbnb"
                  />
              </Section>

              <Section>
                  <Img
                      src="https://react-email-demo-48zvx380u-resend.vercel.app/static/airbnb-review-user.jpg"
                      width="96"
                      height="96"
                      alt={userName}
                      style={userImage}
                  />
              </Section>

              <Section>

                {components?.map((item: any, index: any) => {
                  return (
                      <Section key={index}>
                          {item.componentType === "heading" ? (
                              <Column>
                                  <h1 style={{ textAlign: 'center' }}>
                                      {item.componentText}
                                  </h1>
                              </Column>
                          ) : null}

                          {item.componentType === 'button' ? (
                              <Column>
                                  <Button
                                      className="bg-[#000000] rounded text-white text-[12px] font-semibold no-underline text-center px-5 py-3"
                                  >
                                      {item.componentText}
                                  </Button>
                              </Column>
                          ) : null}

                          {item.componentType === "button-link" ? (
                              <Column>
                                  <Link href={item.componentLink} className="rounded-lg bg-brand rounded text-white p-2.5">{item.componentText}</Link>
                              </Column>
                          ) : null}

                          {item.componentType === "image" ? (
                              <Column>
                                  <Img
                                      src={`https://images.spr.so/cdn-cgi/imagedelivery/j42No7y-dcokJuNgXeA0ig/dca73b36-cf39-4e28-9bc7-8a0d0cd8ac70/standalone-gradient2x_2/w=128,quality=90,fit=scale-down`}
                                      width="100"
                                      height="100"
                                      alt="first image"
                                      className="mx-auto my-20"
                                  />
                              </Column>
                          ) : null}

                          {item.componentType === "image-2" ? (
                              <Column>
                                  <Img
                                      src={`https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExZGRhamt1NjhsbGJjdm02c3FxbncxejgwdWhtaGU3cWh4cnZhOGhsZSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/Ae7SI3LoPYj8Q/giphy.webp`}
                                      alt="second image"
                                      className="mx-auto my-20"
                                  />
                              </Column>
                          ) : null}

                          {item.componentType === "image-3" ? (
                              <Column>
                                  <Img
                                      src={`https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExYzVka3F4M2ExM3F3djUzdjVjM2x5ZXdtYjJzbnR1bTJvMm02Y2lsbyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/qRCXNcgACZ3aQqG1h6/giphy.webp`}
                                      alt="third image"
                                      className="mx-auto my-20"
                                  />
                              </Column>
                          ) : null}

                          {item.componentType === "text" ? (
                              <Section>
                                  <Text className={'text-base ' + 'text-' + item.align}>
                                      {item.componentText}
                                  </Text>
                              </Section>
                          ) : null}
                          {item.componentType === "divider" ? (
                              <Section>
                                  {" "}
                                  <Hr className="border border-solid border-[#eaeaea] my-[26px] mx-0 w-full" />
                              </Section>
                          ) : null}

                      </Section>
                  );
                })}
              </Section>

              <Section style={{ paddingBottom: "20px" }}>
                  <Row>
                      <Text style={{ ...heading, fontSize: headerTextSize, color: headerTextColour }}>{headerText}</Text>
                      <Text style={review}>"{userName}, {bodyText}"</Text>
                      <Text style={paragraph}>
                          Now that the review period is over, we’ve posted {userName}
                          ’s review to your Airbnb profile.
                      </Text>
                      <Text style={{ ...paragraph, paddingBottom: "16px" }}>
                          While it’s too late to write a review of your own, you can send
                          your feedback to {userName} using your Airbnb message thread.
                      </Text>
                      {/* -------------------------------------------------------------------------------------- */}
                      <Button style={{ ...button, backgroundColor: btnColor, fontSize: textSize }} href="https://airbnb.com/">
                          Send My Feedback
                      </Button>
                  </Row>
              </Section>

              <Section>
                  <Row>
                      <Text style={{ ...paragraph, fontWeight: "700" }}>
                          Common questions
                      </Text>
                      <Text>
                          <Link href={linkToAnswerOne} style={link}>
                              {questionOne}
                          </Link>
                      </Text>
                      <Text>
                          <Link href={linkToAnswerTwo} style={link}>
                              {questionTwo}
                          </Link>
                      </Text>
                      <Text>
                          <Link href={linkToAnswerThree} style={link}>
                              {questionThree}
                          </Link>
                      </Text>
                      <Hr style={hr} />
                      <Text style={footer}>
                          Airbnb, Inc., 888 Brannan St, San Francisco, CA 94103
                      </Text>
                      <Link href="https://airbnb.com" style={reportLink}>
                          Report unsafe behavior
                      </Link>
                  </Row>
              </Section>

            </Container>
        </Body>
    </Html>
);

AirbnbReviewEmail.PreviewProps = {
    validationCode: "144833",
    companyLogo: `${baseUrl}/static/plaid-logo.png`,
    bodyText: "Enter the following code to finish linking Venmo.",
};
export default AirbnbReviewEmail;

// -----------------
const main = {
    backgroundColor: "#ffffff",
    fontFamily:
        '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
    margin: "0 auto",
    padding: "20px 0 48px",
    width: "580px",
    maxWidth: "100%",
};

const userImage = {
    margin: "0 auto",
    marginBottom: "16px",
    borderRadius: "50%",
};

const heading = {
    fontSize: "32px",
    lineHeight: "1.3",
    fontWeight: "700",
    color: "#484848",
};

const paragraph = {
    fontSize: "18px",
    lineHeight: "1.4",
    color: "#484848",
};

const review = {
    ...paragraph,
    padding: "24px",
    backgroundColor: "#f2f3f3",
    borderRadius: "4px",
};

const button = {
    backgroundColor: "#ff5a5f",
    borderRadius: "3px",
    color: "#fff",
    fontSize: "18px",
    paddingTop: "19px",
    paddingBottom: "19px",
    textDecoration: "none",
    textAlign: "center" as const,
    display: "block",
    width: "100%",
};

const link = {
    ...paragraph,
    color: "#ff5a5f",
    display: "block",
};

const reportLink = {
    fontSize: "14px",
    color: "#9ca299",
    textDecoration: "underline",
};

const hr = {
    borderColor: "#cccccc",
    margin: "20px 0",
};

const footer = {
    color: "#9ca299",
    fontSize: "14px",
    marginBottom: "10px",
};


export function renderFeedbackEmail(controls: any, payload: any) {
    return render(<AirbnbReviewEmail {...controls} {...payload} />);
}