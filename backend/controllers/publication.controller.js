const db = require("../models");
const Publication = db.Publication;
const Pet = db.Pet;
const User = db.User;

exports.createPublication = async (req, res)=>{
  try {
    //TODO: Manejar la insercion en las otras tablas 
    const newPublication = await Publication.create(req.body);
    res.status(200).send(newPublication);
  } catch (error) {
    res.status(500).send("Error creating publication");
  }
}

exports.findPublicationsByUserId = async (req, res)=>{
  try {
    const publications = await Publication.findAll({where:{userId:req.params.userId}});
    res.status(200).send(publications);
  } catch (error) {
    res.status(500).send("Error finding publications")
  }
} 

exports.findPublicationsByPetId = async (req, res)=>{
  try {
    const publications = await Publication.findAll({ where:{userId:req.params.IdPet}});
    res.status(200).send(publications);
  } catch (error) {
    res.status(500).send("Error finding publications")
  }
}

exports.findPublicationById =  async (req, res) =>{
  try {
    const publication = await Publication.findOne({where:{idPublication: req.params.publicationId}});
    res.status(200).send(publication);
  } catch (error) {
    res.status(500).send("Error finding publication")
  }
}

exports.findAll = async (req, res) => {
  try {
    const publications = await Publication.findAll({include:[Pet, User]});
    res.status(200).send(publications);
  } catch (error) {
    console.log(error);
    res.status(500).send("Error in getting data");
  }
};


exports.updatePublication = async (req,res) =>{
  try {
    const updatedPublication = await Publication.update( {descripcion: req.body.Descripcion, ultimoLugarVista: req.body.Descripcion},{
      where: {
        idPublication : req.body.idPublication
      }
    });

    res.status(200).send(updatedPublication);
  } catch (error) {
    res.status(500).send("Error Updating Values")
  }
}


exports.updatePublicationState = async (req,res) =>{
  try {
    
    const updatedPublication = await Publication.update({Estado : 0},{
      where: {
        idPublication : req.body.idPublication
      }
    });
    res.status(200).send(updatedPublication);
  } catch (error) {
    res.status(500).send("Error Updating State Publication")
  }
}

exports.deletePublication = async  (req,res) =>{
  try {
    await Publication.destroy({
      where:{
        idPublication: req.body.idPublication
      }
    });
  } catch (error) {
    res.status(500).send("Error deleting Publication")
  }
}