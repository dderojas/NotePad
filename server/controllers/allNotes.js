var models = require('../../database/index.js');

module.exports = {
  getAllNotes: () => {
    var notes = {};
    return models.important.findAll()
    .then((impNotes) => {
      models.normal.findAll()
      .then((normNotes) => {
        notes.norm = normNotes.map((value) => {
          return value.dataValues.message;
        });
        notes.imp = impNotes.map((value) => {
          return value.dataValues.message;
        });
        console.log(notes,'IN CONTROLLER');
        return notes;
      });
    })
    .catch((error) => {
      console.log(error,'no important notes');
    });
  }
}

// array index, dataValues, message