import "../../assets/styles/yelp-recent-login.css"

export default function(){
    return (
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
                    <td
                    className="sm-px-2"
                    style={{ paddingLeft: 24, paddingRight: 24 }}
                    >
                    <div className="sm-my-8" style={{ marginTop: 32 }}>
                        <a href="https://maizzle.com">
                        <img
                            src="https://images.spr.so/cdn-cgi/imagedelivery/j42No7y-dcokJuNgXeA0ig/dca73b36-cf39-4e28-9bc7-8a0d0cd8ac70/standalone-gradient2x_2/w=128,quality=90,fit=scale-down"
                            alt="Maizzle"
                            style={{ width:"48px", verticalAlign: "middle" }}
                        />
                        </a>
                    </div>
                    <table
                        style={{
                        marginTop: 24,
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
                            style={{
                                width: "100%",
                                borderRadius: 4,
                                backgroundColor: "#fff",
                                fontSize: 16,
                                color: "#334155",
                                boxShadow: "0 1px 2px 0 rgba(0, 0, 0, 0.05)"
                            }}
                            >
                            <img
                                src="https://react-email-demo-48zvx380u-resend.vercel.app/static/yelp-header.png"
                                style={{
                                maxWidth: "100%",
                                verticalAlign: "middle",
                                width: "100%"
                                }}
                                alt=""
                            />
                            <table
                                style={{ width: "100%", padding: "24px" }}
                                cellPadding={0}
                                cellSpacing={0}
                                role="none"
                            >
                                <tbody>
                                <tr>
                                    <td style={{padding:"20px"}} >
                                    <p
                                        style={{
                                        textAlign: "center",
                                        fontSize: 36,
                                        fontWeight: 600
                                        }}
                                    >
                                        Hi Alan,
                                    </p>
                                    <p
                                        style={{
                                        textAlign: "center",
                                        fontSize: 30,
                                        fontWeight: 500,
                                        marginTop:5
                                        }}
                                    >
                                        We noticed a recent login to your Yelp account.
                                    </p>
                                    <p style={{lineHeight:2}} >
                                        <span style={{ fontWeight: 600 }}>Time:</span>{" "}
                                        September 7, 2022 at 10:58 AM
                                    </p>
                                    <p style={{lineHeight:2}}>
                                        <span style={{ fontWeight: 600 }}>Device:</span>{" "}
                                        Chrome on Mac OS X
                                    </p>
                                    <p style={{lineHeight:2}}>
                                        <span style={{ fontWeight: 600 }}>
                                        Location:
                                        </span>{" "}
                                        Upland, California, United States
                                    </p>
                                    <p
                                        style={{
                                        fontSize: 12,
                                        lineHeight: 4,
                                        color: "#94a3b8"
                                        }}
                                    >
                                        *Approximate geographic location based on IP
                                        address:47.149.53.167
                                    </p>
                                    <p style={{
                                        
                                        lineHeight: 2
                                        }}>
                                        If this was you, there's nothing else you need
                                        to do.
                                    </p>
                                    <p style={{
                                        
                                        lineHeight:2
                                        }}>
                                        If this wasn't you or if you have additional
                                        questions, please see our support page.
                                    </p>
                                    <div
                                        style={{ width: "100%", textAlign: "center", }}
                                    >
                                        <button
                                        style={{
                                            borderRadius: 4,
                                            borderStyle: "none",
                                            backgroundColor: "#dc2626",
                                            padding: "12px 28px",
                                            fontSize: 18,
                                            fontWeight: 600,
                                            color: "#fff",
                                            marginTop:10
                                        }}
                                        >
                                        Learn more
                                        </button>
                                    </div>
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                    </td>
                </tr>
                <tr>
                    <td
                    style={{
                        padding: "48px 24px",
                        textAlign: "center",
                        fontSize: 12,
                        color: "#475569"
                    }}
                    >
                    <img
                        src="https://react-email-demo-48zvx380u-resend.vercel.app/static/yelp-footer.png"
                        style={{
                        maxWidth: "100%",
                        verticalAlign: "middle",
                        width: "100%"
                        }}
                        alt=""
                    />
                    <p style={{ marginTop: 16, color: "#475569" }}>
                        © 2022 | Yelp Inc., 350 Mission Street, San Francisco, CA 94105,
                        U.S.A. | www.yelp.com
                    </p>
                    </td>
                </tr>
                </tbody>
            </table>
            </div>
        </div>
    )
}