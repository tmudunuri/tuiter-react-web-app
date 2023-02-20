
const PostSummaryItem = (post) => {
  const { topic, userName, time, title, image, tweets } = post
  return (`
        <li class="list-group-item">
              <div class="row">
                <div class="col-10">
                  <div class="text-secondary">${topic}</div>
                  <div class="fw-bolder">
                    ${userName} <i class="fa-solid fa-circle-check text-white ps-2 small"></i>
                    <span class="text-secondary fw-normal"> - ${time}</span>
                  </div>
                  <div class="fw-bolder pe-2">
                    ${title}
                  </div>
                  ${tweets ? `<div class="text-secondary">${tweets} Tuits</div>` : ""}
                </div>
                <div class="col-2">
                  <img class="float-end rounded" src=${image} width="80px" />
                </div>
              </div>
        </li>
    `)
}

export default PostSummaryItem;