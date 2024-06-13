import React from 'react'
import { useRoutes } from "react-router-dom";
import Default from '../layouts/Default';

const IndexPage=React.lazy(()=>import("../pages/index"))
const GithubAccessTokenPage=React.lazy(()=>import("../pages/notifications/github-access-token"))
const VercelInviteUserPage=React.lazy(()=>import("../pages/notifications/vercel-invite-user"))
const YelpRecentLoginPage=React.lazy(()=>import("../pages/notifications/yelp-recent-login"))

const AppRoutes=(props)=>{
    const routes=[
        {
            path:"/",
            element:<Default  />,
            children:[
                {
                    path:"",
                    element:<GithubAccessTokenPage {...props} />
                },
                {
                    path:"notifications/github-access-token",
                    element:<GithubAccessTokenPage {...props} />
                },
                {
                    path:"notifications/vercel-invite-user",
                    element:<VercelInviteUserPage {...props} />
                },
                {
                    path:"notifications/yelp-recent-login",
                    element:<YelpRecentLoginPage {...props} />
                }
            ]
        },
        
        
        
    ]
    return useRoutes(routes);
}
export default AppRoutes;