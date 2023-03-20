import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { editProfile } from "../reducers/profile-reducer";

const EditProfile = () => {
    const profile = useSelector(state => state.profile);
    const dispatch = useDispatch();

    const [name, setName] = useState(`${profile.firstName} ${profile.lastName}`);
    const [bio, setBio] = useState(profile.bio);
    const [location, setLocation] = useState(profile.location);
    const [website, setWebsite] = useState(profile.website);
    const [dob, setDOB] = useState(profile.dateOfBirth);

    const saveProfileHandler = () => {
        const names = name.split(" ");
        const newProfile = {
            ...profile,
            firstName: names[0],
            lastName: names[1],
            bio: bio,
            location: location,
            website: website,
            dateOfBirth: dob,
        }
        dispatch(editProfile(newProfile))
    }

    return (
        <div className="bg-white rounded mb-3">
            <div className="row py-3">
                <Link to="/tuiter/profile" className="col-1 fs-5 text-dark">
                    <i className="fa-solid fa-x ps-3"></i>
                </Link>

                <div className="col-11 ps-5">
                    <h5 className="d-inline">Edit Profile</h5>
                    <Link
                        to="/tuiter/profile"
                        className="btn btn-primary float-end rounded-pill me-2"
                        onClick={saveProfileHandler}
                    >
                        Save
                    </Link>
                </div>
            </div>

            <div className="position-relative">
                <img className="w-100" src={`/images/${profile.bannerPicture}`} alt="banner_pic" />
                <div className="col-8 mb-1">
                    <img src={`/images/${profile.profilePicture}`} className="rounded-circle ms-3 wd-profile-image img-fluid bg-white" />
                </div>
            </div>
            <br />

            <div className="mt-5 px-3">
                <div className="form-floating">
                    <input type="text" className="form-control" id="name" value={name} onChange={(e) => setName(e.target.value)} />
                    <label htmlFor="name">Name</label>
                </div>
            </div>

            <div className="mt-4 px-3">
                <div className="form-floating">
                    <textarea type="text" className="w-100 form-control" id="bio" value={bio} onChange={(e) => setBio(e.target.value)} />
                    <label htmlFor="bio">Bio</label>
                </div>
            </div>

            <div className="mt-4 px-3">
                <div className="form-floating">
                    <input type="text" className="w-100 form-control" id="location" value={location} onChange={(e) => setLocation(e.target.value)} />
                    <label htmlFor="location">Location</label>
                </div>
            </div>

            <div className="mt-4 px-3">
                <div className="form-floating">
                    <input type="url" className="w-100 form-control" id="website" value={website} onChange={(e) => setWebsite(e.target.value)} />
                    <label htmlFor="website">Website</label>
                </div>
            </div>

            <div className="mt-4 px-3 pb-3">
                <div className="form-floating">
                    <input type="date" className="w-100 form-control" id="dob" value={dob} onChange={(e) => setDOB(e.target.value)} />
                    <label htmlFor="dob">Birth Date</label>
                </div>
            </div>

        </div>
    )
}

export default EditProfile;