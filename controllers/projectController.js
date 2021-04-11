//Import the dependencies
import Project from "../models/gantt.model.project";

//Link
export default function getProjects(req, res) {
  Project.find({ userId: req.user._id }, task => res.json(task));
}

export const postProj = (req, res, next) => {
  // console.log(req);
  const name = req.body.name;
  const startDate = req.body.startDate;
  const logo = req.body.logo;
  const projectManager = req.body.projectManager;
  const description = req.body.description;
  const project = new Project({
    name: name,
    startDate: startDate,
    // time: time,
    logo: logo,
    projectManager: projectManager,
    description: description
  });
  project.save().then(result => {
    console.log("Created a project");
  });
};
