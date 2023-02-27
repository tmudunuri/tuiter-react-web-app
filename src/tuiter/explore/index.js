import React from "react";
import PostSummaryList from "../post-summary-list";
import "./index.css";

const ExploreComponent = () => {
    return (
        <>
            <div className="row mt-2">
                <div class="col-10">
                    <div class="position-relative">
                        <input placeholder="Search Tuiter"
                            className="form-control rounded-pill ps-5" />
                        <span class="position-absolute wd-search-icon"><i class="fa-solid fa-magnifying-glass"></i></span>
                    </div>
                </div>
                <div class="col-1 m-auto">
                    <a href="#"><i class="fa-solid fa-cog fa-2x pt-1"></i></a>
                </div>
            </div>
            <ul className="nav nav-pills my-2">
                <li className="nav-item">
                    <a className="nav-link active">For You</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link">Trending</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link">News</a>
                </li>
            </ul>
            <div className="position-relative mb-2">
                <img src="/images/starship.png" className="w-100" />
                <h1 className="text-white position-absolute bottom-0">
                    SpaceX Starship</h1>
            </div>
            <PostSummaryList />
        </>
    );
};
export default ExploreComponent;