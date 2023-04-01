import React from "react";
import { useDispatch } from "react-redux";
import { updateTuitThunk } from "../../services/tuits-thunks"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRetweet, faHeart, faUpload, faThumbsDown, faShare, faShareNodes } from '@fortawesome/free-solid-svg-icons'

const TuitStats = (
    {
        tuit
    }) => {
    const dispatch = useDispatch();
    return (
        <div className="row">

            <div className="col-2"><a className="text-muted" style={{ "textDecoration": "none" }} href="#"><i className="bi bi-chat"></i> <span>{tuit.replies}</span></a></div>
            <div className="col-2"><a className="text-muted" style={{ "textDecoration": "none" }} href="#"><FontAwesomeIcon icon={faRetweet} /> <span>{tuit.retuits}</span></a></div>
            {!tuit.liked && <div className="col-2"><a className="text-muted" style={{ "textDecoration": "none" }} href="#">
                <FontAwesomeIcon onClick={() => dispatch(updateTuitThunk({ ...tuit, likes: tuit.likes + 1, liked: true }))} icon={faHeart} />
                <span>{parseInt(tuit.likes)}</span></a></div>}
            {tuit.liked && <div className="col-2"><a className="text-muted" style={{ "textDecoration": "none" }} href="#">
                <FontAwesomeIcon onClick={() => dispatch(updateTuitThunk({ ...tuit, likes: tuit.likes - 1, liked: false }))} style={{ "color": "red" }} icon={faHeart} />
                <span>{parseInt(tuit.likes)}</span></a></div>}
            {!tuit.disliked && <div className="col-2"><a className="text-muted" style={{ "textDecoration": "none" }} href="#">
                <FontAwesomeIcon onClick={() => dispatch(updateTuitThunk({ ...tuit, dislikes: tuit.dislikes + 1, disliked: true }))} icon={faThumbsDown} />
                <span>{isNaN(parseInt(tuit.dislikes)) ? 0 : parseInt(tuit.dislikes)}</span></a></div>}
            {tuit.disliked && <div className="col-2"><a className="text-muted" style={{ "textDecoration": "none" }} href="#">
                <FontAwesomeIcon onClick={() => dispatch(updateTuitThunk({ ...tuit, dislikes: tuit.dislikes - 1, disliked: false }))} style={{ "color": "red" }} icon={faThumbsDown} />
                <span>{isNaN(parseInt(tuit.dislikes)) ? 0 : parseInt(tuit.dislikes)}</span></a></div>}
            <div className="col-2"><a className="text-muted" style={{ "textDecoration": "none" }} href="#"><FontAwesomeIcon icon={faShareNodes} /> <span></span></a></div>

        </div>
    );
}

export default TuitStats;