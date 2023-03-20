import Nav from "../nav";
import NavigationSidebar
    from "./navigation-sidebar";

import WhoToFollowList from "./who-to-follow-list";
import ExploreComponent from "./explore";
import { Routes, Route } from "react-router";
import HomeComponent from "./home";
import ProfileComponent from "./profile";
import EditProfile from "./profile/edit-profile";

import whoReducer
    from "./reducers/who-reducer";
import tuitsReducer from "./tuits/tuits-reducer";
import profileReducer
    from "./reducers/profile-reducer";

import { configureStore }
    from '@reduxjs/toolkit';
import { Provider } from "react-redux";
const store = configureStore(
    { reducer: { who: whoReducer, tuits: tuitsReducer, profile: profileReducer } });

function Tuiter() {
    return (
        <Provider store={store}>
            <div className="row mt-2">
                <div className="col-2 col-sm-2 col-md-2 col-lg-1 col-xl-2 col-xxl-2">
                    <NavigationSidebar active="home" />
                </div>
                <div className="col-6 col-sm-10 col-md-10 col-lg-6 col-xl-6 col-xxl-6" style={{ "position": "relative" }}>
                    <Routes>
                        <Route index element={<HomeComponent />} />
                        <Route path="home" element={<HomeComponent />} />
                        <Route path="explore" element={<ExploreComponent />} />
                        <Route path="profile" element={<ProfileComponent />} />
                        <Route path="edit-profile" element={<EditProfile />} />
                    </Routes>
                </div>
                <div className="d-none d-sm-none d-md-none d-lg-block col-lg-5 col-xl-4 col-xxl-4">
                    <WhoToFollowList />
                </div>
            </div>
        </Provider>
    )
}

export default Tuiter;