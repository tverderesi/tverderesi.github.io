import { ProjectService } from "./scripts/projects.js";
import express from "express";
import path from "path";
import fs from "fs";
const app = express();
const PORT = process.env.PORT || 3000;
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.listen(PORT, () => {
  console.log(`Server started at http://localhost:${PORT}`);
});

const dirs = GetDirList("views");
SetPublic("/");
SetPublic(dirs);

app.set("view engine", "ejs");
app.set("views", "./views");

const title = "Thomas B. Verderesi";

app.get("/", (req, res) => {
  res.render("index", { title: title });
});

app.get("/projects/", (req, res) => {
  let projects = ProjectService();
  res.render("projects/index", {
    title: title,
    projects: projects,
  });
});

app.get("/projects/:project", (req, res) => {
  let projectID = req.params.project;
  app.use(`/projects/${projectID}`, express.static(path.join(__dirname, "public", "projects")));
  res.render(`projects/${projectID}`);
});

function GetDirList(dirname) {
  return fs
    .readdirSync(path.join(__dirname, dirname), { withFileTypes: true })
    .filter(dir => dir.isDirectory())
    .map(dir => dir.name);
}

function GetFileList(dirname) {
  return fs
    .readdirSync(path.join(__dirname, dirname), { withFileTypes: true })
    .filter(dir => dir != dir.isDirectory() && dir != "index.ejs")
    .map(dir => dir.name.replace(".ejs", ""));
}

function SetPublic(dirlist) {
  if (typeof dirlist === "string") {
    app.use(dirlist, express.static(path.join(__dirname, "public")));
  } else {
    dirlist.forEach(ent => {
      app.use(`/${ent}`, express.static(path.join(__dirname, "public")));
    });
  }
}
