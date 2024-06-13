import "../../assets/styles/github-access-token.css"
export default function(props){
    return (
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
                    <td className="sm-px-2" style={{ paddingLeft: 100, paddingRight: 100 }}>
                        <div className="sm-my-8" style={{ marginTop: 32 }}>
                        <a href="https://maizzle.com">
                            <img
                            src="https://images.spr.so/cdn-cgi/imagedelivery/j42No7y-dcokJuNgXeA0ig/dca73b36-cf39-4e28-9bc7-8a0d0cd8ac70/standalone-gradient2x_2/w=128,quality=90,fit=scale-down"
                            width={32}
                            alt="Maizzle"
                            style={{ maxWidth: "100%", verticalAlign: "middle" }}
                            />
                        </a>
                        <p style={{ margin: "12px 0 24px", fontSize: 24, color: "#000" }}>
                            <span style={{ fontWeight: 600 }}>@</span>
                            <span style={{ fontWeight: 600 }}>alanturing</span> a personal
                            access was created on your account.
                        </p>
                        </div>
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
                            >
                                <p
                                className="sm-leading-8"
                                style={{ margin: 0, fontSize: 14, color: "#000" }}
                                >
                                Hey, <span style={{ fontWeight: 600 }}>alanturing!</span>
                                </p>
                                <p
                                style={{
                                    margin: "12px 0 0",
                                    fontSize: 14,
                                    lineHeight: "24px"
                                }}
                                >
                                A fine-grained personal access token (resend) was recently
                                added to your account.
                                </p>
                                <div style={{ width: "100%", textAlign: "center" }}>
                                <button
                                    style={{
                                    marginTop: 16,
                                    borderRadius: 8,
                                    borderStyle: "none",
                                    backgroundColor: "#16a34a",
                                    padding: "16px 24px",
                                    color: "#fff"
                                    }}
                                >
                                    View your token
                                </button>
                                </div>
                            </td>
                            </tr>
                        </tbody>
                        </table>
                    </td>
                    </tr>
                    <tr>
                    <td
                        style={{
                        paddingLeft: 100,
                        paddingRight: 100,
                        textAlign: "center",
                        fontSize: 12,
                        color: "#475569"
                        }}
                    >
                        <div
                        style={{
                            marginTop: 24,
                            // display: "flex",
                        }}
                        >
                        <a href="#" style={{ fontSize: 12, color: "#2563eb" }}>
                            Your security audit log
                        </a>
                        <span>・</span>
                        <a href="#" style={{ fontSize: 12, color: "#2563eb" }}>
                            Contact support
                        </a>
                        </div>
                        <p
                        style={{
                            marginTop: 48,
                            textAlign: "center",
                            fontSize: 12,
                            color: "#64748b"
                        }}
                        >
                        GitHub, Inc. ・88 Colin P Kelly Jr Street ・San Francisco, CA
                        94107
                        </p>
                    </td>
                    </tr>
                </tbody>
                </table>
            </div>
            </div>

        </>
        
    )
}