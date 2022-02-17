const {ROUTE_NAME} = require("../utils/constants")
const Player = require(`../models/${ROUTE_NAME}.model`);
const handlerError = (res) => (err) => {
  res.status(400);
  res.json({ message: `Something went wrong with${ROUTE_NAME}` , data: err });
};
const create = (req, res) => {
  Player.create(req.body)
    .then((newPlayer) => res.json({ player : newPlayer }))
    .catch(handlerError(res));
};
const findAll = (req, res) => {
  Player.find()
    .then((ListOfPlayers) => res.json({ player : ListOfPlayers }))
    .catch(handlerError(res));
};
const findOne = (req, res) => {
  const { id } = req.params;
  Player.findById(id)
    .then((onePlayer) => res.json({ player : onePlayer }))
    .catch(handlerError(res));
};
const deleteOne = (req, res) => {
  const { id } = req.params;
  Player.findByIdAndDelete(id)
      .then(deleteConfirmation => res.json(deleteConfirmation))
      .catch(handlerError(res))
}
//es necessary change depending on model
const update = (req, res) => {
  const { id } = req.params;
  const { title} = req.body;
  Player.findOneAndUpdate({_id:id}, { title }, { new: true })
    .then((onePlayer) => res.json({ player : onePlayer }))
    .catch(handlerError(res));
};

module.exports = {
  create,
  findAll,
  findOne,
  update,
  deleteOne,
};
