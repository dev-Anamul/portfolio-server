const express = require('express');

const router = express.Router();
const skillsController = require('../controller/skillsController');

router.route('/').get(skillsController.getAllSkills).post(skillsController.createNewSkill);

router
    .route('/:id')
    .get(skillsController.getSingleSkill)
    .patch(skillsController.updateSkill)
    .delete(skillsController.deleteSkill);

module.exports = router;
