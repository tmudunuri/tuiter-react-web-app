import React from "react";
import { useDispatch } from "react-redux";
import { likeTuit } from "../tuits/tuits-reducer";

const TuitStats = ({ tuit }) => {
    const dispatch = useDispatch();
    const likeTuitHandler = (id) => {
        dispatch(likeTuit(id));
    }

    return (
        <div className="row">
            <div className="col">
                <i className="fa-regular fa-comment pe-2"></i>
                <span className="text-muted">{tuit.replies}</span>
            </div>
            <div className="col">
                <i className="fa-solid fa-retweet pe-2"></i>
                <span className="text-muted">{tuit.retuits}</span>
            </div>
            <div className="col">
                {tuit.liked ? <i className="fa-solid fa-heart text-danger pe-2" onClick={() => likeTuitHandler(tuit._id)}></i>
                    : <i className="fa-regular fa-heart pe-2" onClick={() => likeTuitHandler(tuit._id)}></i>}
                <span className="text-muted">{tuit.likes}</span>
            </div>
            <div className="col">
                <i className="fa-solid fa-share-nodes"></i>
            </div>
        </div>
    )
}

export default TuitStats;