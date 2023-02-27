import Nav from "../nav";
import NavigationSidebar
    from "./navigation-sidebar";
// import WhoToFollowListItem from "./who-to-follow-list/who-to-follow-list-item";
import WhoToFollowList from "./who-to-follow-list";
// import PostSummaryItem from "./post-summary-list/post-summary-item";
// import PostSummaryList from "./post-summary-list";
import ExploreComponent from "./explore";
import { Routes, Route } from "react-router";
import HomeComponent from "./home";

function Tuiter() {
    return (
        <div className="row mt-2">
            <div className="col-2 col-sm-2 col-md-2 col-lg-1 col-xl-2 col-xxl-2">
                <NavigationSidebar active="home" />
            </div>
            <div className="col-6 col-sm-10 col-md-10 col-lg-6 col-xl-6 col-xxl-6" style={{ "position": "relative" }}>
                <Routes>
                    <Route path="home" element={<HomeComponent />} />
                    <Route path="explore" element={<ExploreComponent />} />
                </Routes>
            </div>
            <div className="d-none d-sm-none d-md-none d-lg-block col-lg-5 col-xl-4 col-xxl-4">
                <WhoToFollowList />
            </div>
        </div>
    )
}

export default Tuiter;