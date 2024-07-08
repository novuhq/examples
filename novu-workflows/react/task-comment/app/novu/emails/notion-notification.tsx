import {
  Body,
  Button,
  Column,
  Container,
  Head,
  Html,
  Img,
  Preview,
  Row,
  Section,
  Text,
  render,

} from "@react-email/components";
import * as React from "react";
import { ControlSchema, PayloadSchema } from "../workflows/";

type NotionEmailProps = ControlSchema & PayloadSchema;

export const NotionEmail = ({
  userName,
  fileName,
  userComment,
  showButton,
  buttonColor,
  commentNotice,
  updateSettingsText,
}: NotionEmailProps) => {
  return (
    <Html>
      <Section>
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width" />
        <title> </title>
        <style
          type="text/css"
          dangerouslySetInnerHTML={{
            __html:
              "\n    .notion-email,td{font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;-webkit-font-smoothing:subpixel-antialiased}.notion-email{text-align:left;line-height:1.5;max-width:600px;padding-top:32px;padding-left:64px;padding-right:64px}@media only screen and (max-device-width:480px){.notion-email{padding-top:0;padding-left:16px;padding-right:16px}}.notion-email-button-hover{transition:background 140ms ease-in}.notion-email-button-hover:hover{background:rgba(58,56,52,.08)}\n\n    #__bodyTable__ {\n      margin: 0;\n      padding: 0;\n      width: 100% !important;\n    }\n  ",
          }}
        />
        {/*[if gte mso 9]>
          <xml>
      <o:OfficeDocumentSettings>
        <o:AllowPNG/>
        <o:PixelsPerInch>96</o:PixelsPerInch>
      </o:OfficeDocumentSettings>
          </xml>
        <![endif]*/}
        <Section
          style={{
            color: "transparent",
            visibility: "hidden",
            opacity: 0,
            fontSize: 0,
            border: 0,
            maxHeight: 1,
            width: 1,
            margin: 0,
            padding: 0,
            borderWidth: "0px!important",
            display: "none!important",
            lineHeight: "0px!important",
          }}
        >
          <Img
            border={0}
            width={1}
            height={1}
            src="http://sp.mail.notion.so/q/8boqZyqPuZA6kWf4ICD6hg~~/AAQYzgA~/RgRoXj4EPVcDc3BjQgpmdQS5e2Z1ZFI8Ug9zdGVwaGVuQG5vdnUuY29YBAAAAAA~"
            alt
          />
        </Section>
        <table
          bgcolor="#FFFFFF"
          id="__bodyTable__"
          width="100%"
          style={{
            WebkitFontSmoothing: "antialiased",
            width: "100% !important",
            background: "#FFFFFF",
            WebkitTextSizeAdjust: "none",
            margin: 0,
            padding: 0,
            minWidth: "100%",
          }}
        >
          <Body>
            <tr>
              <td align="center">
                <span
                  style={{
                    display: "none !important",
                    color: "#FFFFFF",
                    margin: 0,
                    padding: 0,
                    fontSize: 1,
                    lineHeight: 1,
                  }}
                >
                  {" "}
                </span>
                <Section className="notion-email">
                  <table
                    style={{
                      paddingTop: 12,
                      paddingBottom: 0,
                      borderSpacing: 0,
                      width: "100%",
                      borderCollapse: "separate",
                    }}
                  >
                    <Body>
                      <tr>
                        <td
                          style={{
                            verticalAlign: "top",
                            width: 34,
                            minWidth: 34,
                            paddingTop: 2,
                          }}
                        >
                          <Section
                            style={{
                              borderRadius: "100%",
                              overflow: "hidden",
                              width: 28,
                              height: 28,
                              maxWidth: "100%",
                              maxHeight: "100%",
                              background: "white",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              userSelect: "none",
                              WebkitUserSelect: "none",
                              color: "rgba(55, 53, 47, 1)",
                            }}
                          >
                            <Img
                              src="https://lh3.googleusercontent.com/a/AEdFTp5OW-iWTevL6YlYHpaZ6z-D0pVXE0V_7Z9Dgp12=s100"
                              style={{
                                display: "block",
                                width: "100%",
                                height: "100%",
                                objectFit: "cover",
                              }}
                            />
                          </Section>
                        </td>
                        <td>
                          <Section style={{ fontSize: 14, lineHeight: "1.4" }}>
                            <Section>
                              <span>
                                <span>
                                  <span style={{ fontWeight: 600 }}>
                                    {userName}
                                  </span>
                                </span>{" "}
                                commented in{" "}
                                <a
                                  href="https://www.notion.so/Novu-v2-Onboarding-Workflow-b6622be2034e471cabb561d1e89fdff3?n=email_push&n=activity_comment&n=edit_page_title&pvs=0"
                                  style={{
                                    display: "inline",
                                    color: "inherit",
                                    textDecoration: "none",
                                    cursor: "pointer",
                                  }}
                                  className="notion-email-button-hover"
                                >
                                  <span
                                    style={{
                                      fontWeight: 600,
                                      padding: 1,
                                      textDecoration: "underline",
                                    }}
                                  >
                                    {fileName}
                                  </span>
                                </a>
                              </span>
                            </Section>
                            <table
                              style={{
                                fontSize: 12,
                                color: "rgba(55, 53, 47, 0.5)",
                                whiteSpace: "nowrap",
                                marginTop: 4,
                                marginBottom: 8,
                                borderSpacing: 0,
                              }}
                            >
                              <Body>
                                <tr>
                                  <td>Jun 26, 2024, 1:43 AM</td>
                                  <td>
                                    <Section>
                                      <span
                                        style={{
                                          color: "rgba(55, 53, 47, 0.5)",
                                          marginLeft: 4,
                                          marginRight: 4,
                                        }}
                                      >
                                        ·
                                      </span>
                                      <a
                                        href="https://www.notion.so/Product-Marketing-241e9d0d478d4740817f2044db675194"
                                        style={{
                                          display: "inline-block",
                                          color: "inherit",
                                          textDecoration: "none",
                                          cursor: "pointer",
                                          maxWidth: 120,
                                          verticalAlign: "top",
                                          whiteSpace: "nowrap",
                                          overflow: "hidden",
                                          textOverflow: "ellipsis",
                                        }}
                                        className="notion-email-button-hover"
                                      >
                                        Product Marketing
                                      </a>
                                    </Section>
                                  </td>
                                </tr>
                              </Body>
                            </table>
                          </Section>
                        </td>
                      </tr>
                      <tr>
                        <td />
                        <td style={{ maxWidth: 400 }}>
                          <Section>
                            <a
                              href="https://www.notion.so/Novu-v2-Onboarding-Workflow-b6622be2034e471cabb561d1e89fdff3?d=cc63705aa17d477091c77350dd9b8150&nid=83cc291606f14e28997de3b96a8ff650&n=email_push&n=activity_comment&n=comment_edit&pvs=0#33faf4f603be414ebf3dc4f994229d14"
                              style={{
                                display: "flex",
                                color: "inherit",
                                textDecoration: "none",
                                cursor: "pointer",
                                alignItems: "flex-start",
                                fontSize: 14,
                                paddingTop: 2,
                                paddingBottom: 6,
                              }}
                              className="notion-email-button-hover"
                            >
                              <Section>
                                <span
                                  style={{
                                    background: "rgba(255,203,0,.12)",
                                    borderBottom:
                                      "2px solid rgba(255,203,0,.35)",
                                    paddingBottom: 2,
                                    transition:
                                      "background 0.2s ease, border 0.2s ease",
                                  }}
                                  data-token-index={0}
                                  className="discussion-level-1 discussion-id-cc63705a-a17d-4770-91c7-7350dd9b8150 "
                                >
                                  {commentNotice}
                                </span>
                              </Section>
                            </a>
                            <a
                              href="https://www.notion.so/Novu-v2-Onboarding-Workflow-b6622be2034e471cabb561d1e89fdff3?d=cc63705aa17d477091c77350dd9b8150&nid=83cc291606f14e28997de3b96a8ff650&n=email_push&n=activity_comment&n=comment_edit&pvs=0#33faf4f603be414ebf3dc4f994229d14"
                              style={{
                                display: "block",
                                color: "inherit",
                                textDecoration: "none",
                                cursor: "pointer",
                                marginBottom: 12,
                              }}
                              className="notion-email-button-hover"
                            >
                              <Section
                                style={{ overflow: "hidden", fontSize: 14 }}
                              >
                                <Section>
                                  <Section
                                    style={{
                                      fontSize: 12,
                                      lineHeight: 1,
                                      paddingTop: 8,
                                      color: "#C4C4C4",
                                      marginBottom: 0,
                                    }}
                                  >
                                    {userName}
                                  </Section>
                                  <Section
                                    style={{ paddingTop: 4, paddingBottom: 4 }}
                                  >
                                    <span
                                      style={{
                                        whiteSpace: "pre-wrap",
                                        wordBreak: "break-word",
                                      }}
                                    >
                                      {userComment}
                                    </span>
                                  </Section>
                                </Section>
                              </Section>
                            </a>
                            <Section style={{ marginTop: 30 }}>
                              <table
                                style={{
                                  width: "100%",
                                  borderCollapse: "collapse",
                                }}
                              >
                                <Body>
                                {showButton ? (
                                  <Button>
                                    <td
                                      style={{
                                        textAlign: "center",
                                        verticalAlign: "top",
                                      }}
                                    >
                                      <a
                                        style={{
                                          backgroundColor: buttonColor,
                                          borderRadius: 4,
                                          color: "#fff",
                                          textDecoration: "none",
                                          padding: "12px 60px",
                                          textAlign: "center",
                                          border: "1px solid #308bbf",
                                          display: "inline-block",
                                          width: 280,
                                        }}
                                        href="https://www.notion.so/Novu-v2-Onboarding-Workflow-b6622be2034e471cabb561d1e89fdff3?d=cc63705aa17d477091c77350dd9b8150&nid=83cc291606f14e28997de3b96a8ff650&n=email_push&n=activity_comment&n=commented_email_go_to_page&pvs=0#33faf4f603be414ebf3dc4f994229d14"
                                      >

                                      
                                        <b className="contextual-invite-email-cta">
                                          Reply
                                        </b>
                                      </a>
                                    </td>
                                  </Button>
                                ) : null}
                                </Body>
                              </table>
                            </Section>
                            <Section
                              style={{
                                textAlign: "center",
                                verticalAlign: "top",
                                marginTop: 12,
                              }}
                            >
                              <a
                                href="https://www.notion.so/Novu-v2-Onboarding-Workflow-b6622be2034e471cabb561d1e89fdff3?openPageUpdatesTab=true&n=email_push&n=activity_comment&n=email_update_page_notif_settings&pvs=0"
                                style={{ color: "#A5A5A5" }}
                              >
                                {updateSettingsText}
                              </a>
                            </Section>
                          </Section>
                        </td>
                      </tr>
                    </Body>
                  </table>
                  <Section
                    style={{
                      fontSize: 12,
                      marginTop: 26,
                      marginBottom: 42,
                      color: "#888",
                      textAlign: "left",
                    }}
                  >
                    
                    <Section style={{ display: "flex", marginBottom: 16 }}>
                      <Img
                        height={40}
                        width={40}
                        className="notion-email-logo"
                        src="https://www.notion.so/images/logo-for-slack-integration.png"
                        style={{ display: "block", marginBottom: 8 }}
                      /> 
                      <Section style={{ paddingLeft: 16 }}>
                        <Section
                          style={{
                            fontStyle: "normal",
                            fontWeight: 590,
                            fontSize: 14,
                            letterSpacing: "-0.154px",
                            color: "black",
                          }}
                        >
                          Notion
                        </Section>
                        <Section
                          style={{
                            fontStyle: "normal",
                            fontWeight: 400,
                            fontSize: 12,
                            color: "#ACABA9",
                            paddingTop: 3,
                          }}
                        >
                          <a
                            href="https://www.notion.so/?n=email_push&n=activity_comment&n=email_footer&pvs=0"
                            style={{ color: "inherit" }}
                          >
                            Notion.so
                          </a>
                          , the connected workspace
                          <br />
                          for docs, projects, and wikis.
                        </Section>
                      </Section>
                    </Section>
                    
                    <Section>
                      <Section style={{ marginTop: 12 }}>
                        <a
                          href="https://www.notion.so/space/37c45c24f7ca4129872142892a515633?target=notifications&n=email_push&n=activity_comment&n=email_footer_adjust_settings&pvs=0"
                          style={{ color: "#C4C4C4" }}
                        >
                          Update your email settings
                        </a>
                      </Section>
                    </Section>
                  </Section>
                </Section>
              </td>
            </tr>
          </Body>
        </table>
        <Img
          border={0}
          width={1}
          height={1}
          src="http://sp.mail.notion.so/q/uBmathwfh3J7zE4HCpvlTg~~/AAQYzgA~/RgRoXj4EPlcDc3BjQgpmdQS5e2Z1ZFI8Ug9zdGVwaGVuQG5vdnUuY29YBAAAAAA~"
        />
      </Section>
    </Html>
  );
};

export default NotionEmail;

export function renderNotionEmail(
  controls: ControlSchema,
  payload: PayloadSchema
) {
  return render(<NotionEmail {...controls} {...payload} />);
}
