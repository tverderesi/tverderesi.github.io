import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

function ProjectService() {
  let project = JSON.parse(fs.readFileSync(path.join(__dirname, "..", "data", "projects.json")))[
    "projects"
  ];

  return project;
}

export { ProjectService };
