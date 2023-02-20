const WhoToFollowListItem = (who) => {
    const { avatarIcon, userName, handle } = who;
    return (`
        <li class="list-group-item">
            <div class="row">
                <div class="col-2">
                    <img class="rounded-circle" src=${avatarIcon} width="40px" height="40px"/>
                </div>
                <div class="col-7">
                     <div class="fw-bolder">${userName} <i class="fa-solid fa-circle-check text-white ps-2"></i></div>
                     <div class="text-white small">@${handle}</div>
                </div>
                <div class="col-3 my-auto">
                     <button class="btn btn-primary rounded-pill float-end">Follow</button>
                </div>
            </div> 
        </li>
    `);
};

export default WhoToFollowListItem;