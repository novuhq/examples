import { Link } from "react-router-dom";

export default function(){
    return (
        <div className="w-full flex items-center py-10">
        <div className="w-1/3 flex items-center justify-around mr-auto ml-auto" >
            <Link to="/notifications/github-access-token" >
                <div className="rounded bg-green-500 text-white text-center px-4 py-4" >
                    Github access token
                </div>
            </Link>
            <Link to="/notifications/vercel-invite-user" >
                <div className="rounded bg-green-500 text-white text-center px-4 py-4" >
                Vercel invite User
                </div>
            </Link>
            <Link to="/notifications/yelp-recent-login" >
                <div className="rounded bg-green-500 text-white text-center px-4 py-4" >
                Yelp recent login
                </div>
            </Link>
        </div> 
        </div>
    )
}