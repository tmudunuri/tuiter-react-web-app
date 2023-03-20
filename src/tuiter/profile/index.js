import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import "./index.css"

const ProfileComponent = () => {
    const profile = useSelector(state => state.profile);;

    const dob = new Date(profile.dateOfBirth).toLocaleString('en-us', { year: "numeric", month: "long", day: "numeric" });
    const doj = new Date(profile.dateJoined).toLocaleString('en-us', { year: "numeric", month: "long" });

    return (
        <div className="bg-white rounded">
            <div className="row">
                <div className="col-1 my-auto fs-4">
                    <Link to={-1}><i className="fa-solid fa-arrow-left-long ps-3"></i></Link>
                </div>

                <div className="col-11 ps-5">
                    <h5>{profile.firstName} {profile.lastName}</h5>
                    <h6 className="text-dark">{profile.tuits} Tuits</h6>
                </div>
            </div>

            <div className="position-relative">
                <img className="w-100" src={`/images/${profile.bannerPicture}`} alt="banner_pic" />
                <div className="col-8 mb-1">
                    <img src={`/images/${profile.profilePicture}`} className="rounded-circle ms-3 wd-profile-image img-fluid bg-white" />
                </div>
                <Link
                    to="/tuiter/edit-profile"
                    className="btn btn-light rounded-pill float-end mt-2 me-2"
                >
                    Edit Profile
                </Link>
            </div>
            <br />

            <div className="mt-5 p-3">
                <h5 className="fw-bold">{profile.firstName} {profile.lastName}</h5>
                <h6 className="text-dark">{profile.handle}</h6>
                <p className="text-muted">{profile.bio}</p>

                <div className="mb-2">
                    <span className="me-4"><i className="bi bi-geo-alt me-2"></i>{profile.location}</span>
                    <span className="me-4"><i className="fa-solid fa-link"></i>
                        <span className="text-primary"> {profile.website} </span>
                    </span>
                    <span className="me-4"><i className="bi bi-balloon me-2"></i>Born {dob}</span>
                </div>
                <div className="mb-2">
                    <span><i className="bi bi-calendar3 me-2"></i>Joined {doj}</span>
                </div>

                <div>
                    <span className="me-4">{profile.followingCount} Following</span>
                    <span>{profile.followersCount} Followers</span>
                </div>
            </div>
        </div>
    )
}

export default ProfileComponent;