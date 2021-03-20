//Import the dependencies
import Project from "../models/gantt.model.project";

//Link
export default function getProjects(req, res) {
  Project.find({ userId: req.user._id }, task => res.json(task));
}
