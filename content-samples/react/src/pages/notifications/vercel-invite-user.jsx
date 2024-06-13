import "../../assets/styles/vercel-invite-user.css"

export default function(){
    return(
        <>
            <div role="article" aria-roledescription="email" aria-label="" lang="en">
                <div
                className="sm-px-4"
                style={{
                    backgroundColor: "#fff",
                    fontFamily:
                    'ui-sans-serif, system-ui, -apple-system, "Segoe UI", sans-serif'
                }}
                >
                <table
                    align="center"
                    style={{ width: "50%" }}
                    cellPadding={0}
                    cellSpacing={0}
                    role="none"
                >
                    <tbody>
                    <tr>
                        <td className="sm-px-2" style={{ padding: "40px 80px" }}>
                        <table
                            style={{
                            marginTop: 12,
                            width: "100%",
                            borderRadius: 4,
                            border: "1px solid #e2e8f0"
                            }}
                            cellPadding={0}
                            cellSpacing={0}
                            role="none"
                        >
                            <tbody>
                            <tr>
                                <td
                                className="sm-px-6"
                                style={{
                                    width: "100%",
                                    borderRadius: 4,
                                    backgroundColor: "#fff",
                                    padding: 24,
                                    fontSize: 16,
                                    color: "#334155",
                                    boxShadow: "0 1px 2px 0 rgba(0, 0, 0, 0.05)"
                                }}
                                valign="middle"
                                >
                                    {/* <table style={{width:"100%",textAlign:"center"}} >
                                        <tr>
                                            <td style={{textAlign:"center"}} align="center" >
                                            
                                            </td>
                                        </tr>
                                    </table> */}
                                <div
                                    style={{
                                    marginTop: 20,
                                    width: "100%",
                                    textAlign: "center",
                                    // display:"flex",
                                    // justifyContent:"center"
                                    }}
                                >
                                    <a href="https://maizzle.com" >
                                        <img
                                            src="https://images.spr.so/cdn-cgi/imagedelivery/j42No7y-dcokJuNgXeA0ig/dca73b36-cf39-4e28-9bc7-8a0d0cd8ac70/standalone-gradient2x_2/w=128,quality=90,fit=scale-down"
                                            width={40}
                                            alt="Maizzle"
                                            style={{marginLeft:"auto",marginRight:"auto"}}
                                        />
                                    </a>
                                </div>
                                <p
                                    className="sm-leading-8"
                                    style={{
                                    margin: "40px 0 0",
                                    textAlign: "center",
                                    fontSize: 24,
                                    color: "#000"
                                    }}
                                >
                                    Join <span style={{ fontWeight: 600 }}>Enigma</span> on{" "}
                                    <span style={{ fontWeight: 600 }}>Vercel</span>
                                </p>
                                <p
                                    style={{
                                    margin: "12px 0 0",
                                    fontSize: 14,
                                    lineHeight: "24px"
                                    }}
                                >
                                    Hello alanturing.
                                </p>
                                <p
                                    style={{
                                    margin: "12px 0 0",
                                    fontSize: 14,
                                    lineHeight: "24px"
                                    }}
                                >
                                    <span style={{ fontWeight: 600 }}>Alan</span> (
                                    <a
                                    href="mailto:alan.turing@example.com"
                                    style={{ color: "#2563eb", textDecoration: "none" }}
                                    >
                                    alan.turing@example.com
                                    </a>
                                    ) has invited you to the{" "}
                                    <span style={{ fontWeight: 600 }}>Enigma</span> team on{" "}
                                    <span style={{ fontWeight: 600 }}>Vercel</span>.
                                </p>
                                    {/* <div style={{width:"100%",textAlign:"center"}} >
                                        <div
                                            style={{
                                            marginTop: 24,
                                            display: "flex",
                                            width:"100%",
                                            // justifyContent: "center",
                                            // verticalAlign:"middle",
                                            textAlign:"center",
                                            // alignItems: "center"
                                            }}
                                        > */}
                                        <table style={{marginTop: 24,}} width="100%" border="0" cellSpacing="0" cellPadding="0">
                                            <tbody>
                                                <tr>
                                                <td align="center">
                                                    <table border="0" cellSpacing="0" cellPadding="0">
                                                    <tbody>
                                                        <tr>
                                                            <td align="center">
                                                            <img
                                                                src="https://react-email-demo-48zvx380u-resend.vercel.app/static/vercel-user.png"
                                                                width={64}
                                                                style={{
                                                                    maxWidth: "100%",
                                                                    verticalAlign: "middle",
                                                                    borderRadius: 9999,
                                                                    display:"inline-flex"
                                                                }}
                                                                alt=""
                                                                />
                                                            </td>
                                                            <td align="center">
                                                            <img
                                                                src="https://react-email-demo-48zvx380u-resend.vercel.app/static/vercel-arrow.png"
                                                                width={12}
                                                                style={{
                                                                    maxWidth: "100%",
                                                                    verticalAlign: "middle",
                                                                    marginLeft: 12,
                                                                    marginRight: 12,
                                                                    height:"9px",
                                                                    marginTop:"23px",
                                                                    display:"inline-flex"
                                                                }}
                                                                alt=""
                                                                />
                                                            </td>
                                                            <td align="center">
                                                            <img
                                                            src="https://react-email-demo-48zvx380u-resend.vercel.app/static/vercel-team.png"
                                                            width={64}
                                                            style={{
                                                                maxWidth: "100%",
                                                                verticalAlign: "middle",
                                                                borderRadius: 9999,
                                                                display:"inline-flex"
                                                            }}
                                                            alt=""
                                                            />
                                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                    </table>
                                                </td>
                                                </tr>
                                            </tbody>
                                            </table>
                                        
                                            {/* <img
                                            src="https://react-email-demo-48zvx380u-resend.vercel.app/static/vercel-user.png"
                                            width={64}
                                            style={{
                                                maxWidth: "100%",
                                                verticalAlign: "middle",
                                                borderRadius: 9999,
                                                display:"inline-flex"
                                            }}
                                            alt=""
                                            />
                                            <img
                                            src="https://react-email-demo-48zvx380u-resend.vercel.app/static/vercel-arrow.png"
                                            width={12}
                                            style={{
                                                maxWidth: "100%",
                                                verticalAlign: "middle",
                                                marginLeft: 12,
                                                marginRight: 12,
                                                height:"9px",
                                                marginTop:"25px",
                                                display:"inline-flex"
                                            }}
                                            alt=""
                                            />
                                            <img
                                            src="https://react-email-demo-48zvx380u-resend.vercel.app/static/vercel-team.png"
                                            width={64}
                                            style={{
                                                maxWidth: "100%",
                                                verticalAlign: "middle",
                                                borderRadius: 9999,
                                                display:"inline-flex"
                                            }}
                                            alt=""
                                            /> */}
                                        {/* </div>
                                    </div> */}
                                <div style={{ marginTop: 20, textAlign: "center" }}>
                                    <button
                                    style={{
                                        borderRadius: 4,
                                        backgroundColor: "#000",
                                        padding: "8px 16px",
                                        fontWeight: 600,
                                        color: "#fff"
                                    }}
                                    >
                                    Join the team
                                    </button>
                                </div>
                                <p style={{ marginTop: 40, fontSize: 14, lineHeight: 4 }}>
                                    or copy and paste this URL into your browser:
                                </p>
                                <a
                                    href="https://vercel.com/teams/invite/foo"
                                    style={{
                                    fontSize: 14,
                                    lineHeight: "4px",
                                    color: "#2563eb",
                                    textDecoration: "none"
                                    }}
                                >
                                    https://vercel.com/teams/invite/foo
                                </a>
                                <div
                                    role="separator"
                                    style={{
                                    backgroundColor: "#e2e8f0",
                                    height: 1,
                                    lineHeight: 1,
                                    margin: "32px 0"
                                    }}
                                >
                                    ‍
                                </div>
                                <p
                                    style={{
                                    fontSize: 12,
                                    lineHeight: "20px",
                                    color: "#475569"
                                    }}
                                >
                                    This invitation was intended for{" "}
                                    <span style={{ fontWeight: 600 }}>alanturing</span>.
                                    This invite was sent from{" "}
                                    <span style={{ fontWeight: 600 }}>204.13.186.218</span>{" "}
                                    located in{" "}
                                    <span style={{ fontWeight: 600 }}>
                                    ão Paulo, Brazil
                                    </span>
                                    . If you were not expecting this invitation, you can
                                    ignore this email. If you are concerned about your
                                    account's safety, please reply to this email to get in
                                    touch with us.
                                </p>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                        </td>
                    </tr>
                    </tbody>
                </table>
                </div>
            </div>
        </>
    )
}