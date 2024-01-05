import React from "react";
import { Link } from "react-router-dom";

const Page404 = () => {
    return (
        <div className="page" style={{height: '100vh'}}>
            <div className="page-not-found ">
                    <div>404 | Not Found</div>
                    <div><Link to='/'>Go to home</Link></div>
            </div>
        
        </div>
    )
}

export default Page404;