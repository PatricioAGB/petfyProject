const express = require("express");
const router = express.Router();
const publication = require("../controllers/publication.controller");
const auth = require("../middleware/auth");
// retorna todos los usuarios

router.get("/",  publication.findAll);
router.get("/:publicationId", auth, publication.findPublicationById);
router.get("/:petId", auth, publication.findPublicationsByPetId);
router.get("/:userId", auth, publication.findPublicationsByUserId);
router.patch("/state",auth, publication.updatePublicationState);
router.post("/", auth, publication.createPublication);
router.put("/", auth, publication.updatePublication);


module.exports = router;
