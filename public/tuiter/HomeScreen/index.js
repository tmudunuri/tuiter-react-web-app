import NavigationSidebar from "../NavigationSidebar/index.js";
import PostSummaryList from "../PostSummaryList/index.js";
import PostList from "../PostList/index.js";

function homeComponent() {
    $("#wd-home").append(`
      <div class="row mt-2">
          <div class="col-2 col-sm-2 col-md-2 col-lg-1 col-xl-2 col-xxl-2">
             ${NavigationSidebar("home")}
          </div>
          <div class="col-6 col-sm-10 col-md-10 col-lg-6 col-xl-6 col-xxl-6">
             ${PostList()}
          </div>
          <div class="d-none d-sm-none d-md-none d-lg-block col-lg-5 col-xl-4 col-xxl-4">
              ${PostSummaryList()}
          </div>
      </div>
   `);
}

$(homeComponent);