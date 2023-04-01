import React from "react";

const PostSummaryItem = (
    {
        post = {
            "topic": "Space",
            "username": "SpaceX",
            "time": "2h",
            "title": "Tesla Cybertruck lands on Mars and picks up the Curiosity rover on its 6' bed",
            "image": "tesla.png"
        }
    }
) => {
    return (
        <li className="list-group-item">
            <div className="row">
                <div className="col-10">
                    <div className="fw-bolder text-secondary">{post.topic}</div>
                    <div class="fw-bolder">
                        {post.username} <i class="fa-solid fa-circle-check text-primary ps-1 small"></i>
                        <span class="text-secondary fw-normal"> - {post.time}</span>
                    </div>
                    <div>{post.title}</div>
                    {post.tweets ?
                        <div className="text-secondary">{post.tweets} Tutis</div>
                        : ""}
                </div>
                <div className="col-2">
                    <img width={80} className="float-end rounded" src={`/images/${post.image}`} />
                </div>
            </div>
        </li>
    );
};
export default PostSummaryItem;