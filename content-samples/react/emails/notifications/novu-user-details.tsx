import {
  Body,
  Button,
  Container,
  Column,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Row,
  Section,
  Text,
  Tailwind,
} from "@react-email/components";
import * as React from "react";

interface NovuUserDetailsProps {
  username?: string;
  novuLogo?: string;
  userImage?: string;
  userFullName?: string;
  userEmail?: string;
  userPhone?: string;
  userProfilLink?: string;
}

const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "";

export const NovuUserDetails = ({
  username,
  novuLogo,
  userImage,
  userFullName,
  userEmail,
  userPhone,
  userProfilLink,
}: NovuUserDetailsProps) => (
    <Html>
      <Head />
      <Tailwind>
        <Body className="bg-white my-auto mx-auto font-sans px-2">
          <Container className="border border-solid border-[#eaeaea] rounded my-[40px] mx-auto p-[20px] max-w-[465px]">
            <Section className="mt-[32px]">
              <Img
                src={`https://images.spr.so/cdn-cgi/imagedelivery/j42No7y-dcokJuNgXeA0ig/dca73b36-cf39-4e28-9bc7-8a0d0cd8ac70/standalone-gradient2x_2/w=128,quality=90,fit=scale-down`}
                width="40"
                height="37"
                alt="Novu"
                className="my-0 mx-auto"
              />
            </Section>
            <Heading className="text-black text-[24px] font-normal text-center p-0 my-[30px] mx-0">
              Hi <strong>@{username}</strong>!
            </Heading>
            <Section className="margin: '0 auto'">
              <Text className="text-black text-[24px] font-normal text-center p-0 my-[20px] mx-0">
                Here are the details you registered under:
              </Text>
              <Img
                src={userImage}
                width="100"
                height="100"
                style={{
                  ...Img,
                  margin: "0 auto",
                  marginBottom: "16px",
                  borderRadius: "50%",
                  maxWidth: "100%",
                }}
              />
              <Text className="text-[#FF6363] text-bold text-[24px] font-normal text-center p-0 my-[20px] mx-0">
                {userFullName}
              </Text>
              <Section>
              <Row>
                <Column>
                  <Img
                    className="rounded-full"
                    src={novuLogo}
                    width="30"
                    height="30"
                  />
                </Column>
                <Column>
                  <Text  className="text-[18px]"> {userEmail}</Text>
                </Column>
              </Row>
              <Row>
                <Column>
                <Img
                    className="rounded-full"
                    src={novuLogo}
                    width="30"
                    height="30"
                  />
                </Column>
                <Column>
                  <Text className="text-[18px]">  {userPhone}</Text>
                </Column>
              </Row>
            </Section>
            </Section>
            <Section className="text-center mt-[32px] mb-[32px]">
              <Button
                className="bg-[#FF6363] rounded text-white text-[12px] font-semibold no-underline text-center px-5 py-3"
                href={userProfilLink}
              >
                Fill in more details
              </Button>
            </Section>
            <Hr className="border border-solid border-[#eaeaea] my-[26px] mx-0 w-full" />
            <Section style={{ padding: "45px 0 0 0" }}>
              <Img
                style={{ maxWidth: "100%" }}
                width={620}
                src={`https://react-email-demo-48zvx380u-resend.vercel.app/static/yelp-footer.png`}
              />
            </Section>
  
            <Text
              style={{
                textAlign: "center",
                fontSize: 12,
                color: "rgb(0,0,0, 0.7)",
              }}
            >
              © 2024 | Donated by Sara Vagshal | https://novu.co/
            </Text>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );

NovuUserDetails.PreviewProps = {
  username: "sara-username",
  novuLogo: `https://react-email-demo-48zvx380u-resend.vercel.app/static/vercel-team.png`,
  userImage: `https://react-email-demo-48zvx380u-resend.vercel.app/static/vercel-team.png`,
  userFullName: "Sara Vagshal",
  userEmail: "name.family@example.com",
  userPhone: "+972-123456789",
  userProfilLink: "https://novu.co/"
} as NovuUserDetailsProps;

export default NovuUserDetails;


