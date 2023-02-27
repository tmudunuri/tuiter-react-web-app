import React from "react";

import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const NavigationSidebar = () => {
    const { pathname } = useLocation();
    const paths = pathname.split("/");
    const active = paths[2];

    return (
        <>
            <div className="list-group">
                <a href="#/" className="list-group-item">
                    <i className="fab fa-twitter"></i>
                </a>
                <Link to="/tuiter/home" className={`list-group-item ${active === 'home' ? 'active' : ''}`}>
                    <i className="fa-solid fa-house-chimney pe-2"></i>
                    <span className="d-none d-xl-inline">Home</span>
                </Link>
                <Link to="/tuiter/explore" className={`list-group-item ${active === 'explore' ? 'active' : ''}`}>
                    <i className="fa-solid fa-hashtag pe-2"></i>
                    <span className="d-none d-xl-inline">Explore</span>
                </Link>
                <a href="#/" className={`list-group-item ${active === 'notifications' ? 'active' : ''}`}>
                    <i className="fa-solid fa-bell pe-2"></i>
                    <span className="d-none d-xl-inline">Notifications</span>
                </a>
                <a href="#/" className={`list-group-item ${active === 'messages' ? 'active' : ''}`}>
                    <i className="fa-solid fa-envelope pe-2"></i>
                    <span className="d-none d-xl-inline">Messages</span>
                </a>
                <a href="#/" className={`list-group-item ${active === 'bookmarks' ? 'active' : ''}`}>
                    <i className="fa-solid fa-bookmark pe-2"></i>
                    <span className="d-none d-xl-inline">Bookmarks</span>
                </a>
                <a href="#/" className={`list-group-item ${active === 'lists' ? 'active' : ''}`}>
                    <i className="fa-solid fa-list pe-2"></i>
                    <span className="d-none d-xl-inline">Lists</span>
                </a>
                <a href="#/" className={`list-group-item ${active === 'profile' ? 'active' : ''}`}>
                    <i className="fa-solid fa-user pe-2"></i>
                    <span className="d-none d-xl-inline">Profile</span>
                </a>
                <a href="#/" className={`list-group-item ${active === 'more' ? 'active' : ''}`}>
                    <i className="fa-solid fa-circle pe-2"></i>
                    <span className="d-none d-xl-inline">More</span>
                </a>
                <Link to="/" className={`list-group-item ${active === 'labs' ? 'active' : ''}`}>
                    <i className="fa-solid fa-flask pe-2"></i>
                    <span className="d-none d-xl-inline">Labs</span>
                </Link>
            </div>
            <button className="btn btn-primary w-100 mt-2 rounded-pill">Tuit</button>
        </>
    );
}

export default NavigationSidebar;