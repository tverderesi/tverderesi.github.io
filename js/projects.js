// import { ProjectService } from "ProjectService.js";

$.getJSON("../data/projects.json", result => {
  let projects = result["projects"];
  let i = 1;
  for (let project of projects) {
    if (project.type == "Component") {
      $("#proj-container").append(
        `<div class="row justify-content-between">
        <div class="col-7">
        <h4 class=' text-muted'>Project ${i.toLocaleString("en-US", { minimumIntegerDigits: 2 })}
        </h4>
            <h2>
            ${project.title}
            </h2>

            <p class="mt-4 text-justify">
            ${project.description}
            </p>

        </div>
        <div class='col-4 align-self-center'>
        <div class='d-flex flex-column'>
        
        <iframe class="responsive-iframe" width='100%' height='200px'
        src="./html/minified/${project.ID}.html">
        </iframe>
        <p class='text-center mt-3 fs-6'><i class="fa-solid fa-arrow-up"></i> click on me!</p>

        </div>


    </div>

    <div class="row mt-1 mb-1"> <a href="./html/full/${project.ID}.html" class="btn btn-dark
    col-2">
            See Project
        </a></div>

    <div class="mt-5"></div>`
      );
      i++;
    }
  }
});
