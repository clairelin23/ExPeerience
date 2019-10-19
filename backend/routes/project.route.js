const router = require('express').Router();
let Project = require('../models/project.model');

//gets a project given an id
router.route('/:id').get((req, res) => {
  Project.findById(req.params.id)
    .then(project => res.json(project))
    .catch(err => res.status(400).json('Error: ' + err));
});

//gets all projects
router.route('/').get((req, res) => {
  Project.find()
    .then(project => res.json(project))
    .catch(err => res.status(400).json('Error: ' + err));
});

//adds a project
router.route('/add').post((req, res) => {
  const name = req.body.name;
  const college = req.body.college;
  const majors = req.body.majors;
  const description = req.body.description;
  const skills = req.body.skills;
  const creator = req.body.creator;
  const peers = req.body.peers;

  const newProject = new Project({
    name,
    college,
    majors,
    description,
    skills,
    creator,
    peers
  });

  newProject.save()
    .then(newProject => res.json(newProject))
    .catch(err => res.status(400).json('Error: ' + err));
});

//updates a project given an id
router.route('/update/:id').post((req, res) => {
  Project.findById(req.params.id)
    .then(project => {
      project.name = req.body.name;
      project.college = req.body.college;
      project.majors = req.body.majors;
      project.description = req.body.description;
      project.skills = req.body.skills;
      project.creator = req.body.creator;
      project.peers = req.body.peers;

      project.save()
        .then(() => res.json('Project updated.'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

//deletes a project given an id
router.route('/:id').delete((req, res) => {
  Project.findByIdAndDelete(req.params.id)
    .then(() => res.json('Project deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;