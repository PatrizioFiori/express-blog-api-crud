const express = require("express")
const router = express.Router()
const postsController = require (`../controllers/postsControllers`)

router.get(`/`, postsController.index)

router.get(`/:id`, postsController.show)

/*
router.get(`/`, postsController.store)

router.get(`/:id`, postsController.update)

router.get(`/:id`, postsController.modify)
*/

router.get(`/:id`, postsController.destroy)

module.exports(router)

