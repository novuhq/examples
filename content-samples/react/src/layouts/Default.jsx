import { Link, Outlet } from "react-router-dom";

export default function(){
    return (
        <div className="grid grid-cols-6 gap-3" >
            <div className="h-screen bg-black py-10 px-6" >
            <div className="text-white text-lg py-2" >
                <p>Notifications</p>
            </div>
            <Link to="/notifications/github-access-token" >
                <div className="text-white text-md ml-4 py-2 hover:underline" >
                    <p>Github acccess token</p>
                </div>
            </Link>
            <Link to="/notifications/vercel-invite-user" >
                <div className="text-white text-md ml-4 py-2 hover:underline" >
                    <p>Vercel invite user</p>
                </div>
            </Link>
            <Link to="/notifications/yelp-recent-login" >
                <div className="text-white text-md ml-4 py-2 hover:underline" >
                    <p>Yelp recent login</p>
                </div>
            </Link>
            </div>
            <div className="col-span-5 px-28 py-20" >
                <Outlet/>
            </div>
        </div>
    )
}