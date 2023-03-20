import React from "react";
import { useDispatch } from "react-redux";

import TuitStats from "./tuit-stats";
import { deleteTuit } from "../tuits/tuits-reducer";

const TuitItem = ({ tuit }) => {
    const dispatch = useDispatch();
    const deleteTuitHandler = (id) => {
        dispatch(deleteTuit(id));
    }

    return (
        <li className="list-group-item">
            <div className="row">
                <div className="col-auto">
                    <img className="float-end rounded-circle" src={`/images/${tuit.image}`} width={60} alt="user_profile" />
                </div>

                <div className="col-10">
                    <i className="bi bi-x-lg float-end" onClick={() => deleteTuitHandler(tuit._id)}></i>
                    <div className="fw-bolder">
                        {tuit.userName} <i className="fa-solid fa-circle-check px-2"></i>
                        <span className="fw-normal">{tuit.handle} · {tuit.time}</span>
                    </div>

                    <div className="mb-3 pe-2">{tuit.tuit}</div>

                    <TuitStats tuit={tuit} />
                </div>

            </div>
        </li>
    )
}

export default TuitItem;