var DataTypes = require("sequelize").DataTypes;
var _cita = require("./cita");
var _consultorio = require("./consultorio");
var _medico = require("./medico");
var _medico_consultorio = require("./medico_consultorio");
var _paciente = require("./paciente");
var _plan = require("./plan");
var _usuario = require("./usuario");

function initModels(sequelize) {
  var cita = _cita(sequelize, DataTypes);
  var consultorio = _consultorio(sequelize, DataTypes);
  var medico = _medico(sequelize, DataTypes);
  var medico_consultorio = _medico_consultorio(sequelize, DataTypes);
  var paciente = _paciente(sequelize, DataTypes);
  var plan = _plan(sequelize, DataTypes);
  var usuario = _usuario(sequelize, DataTypes);

  medico_consultorio.belongsTo(consultorio, { as: "ID_CONSULTORIO_consultorio", foreignKey: "ID_CONSULTORIO"});
  consultorio.hasMany(medico_consultorio, { as: "medico_consultorios", foreignKey: "ID_CONSULTORIO"});
  cita.belongsTo(medico, { as: "ID_MEDICO_medico", foreignKey: "ID_MEDICO"});
  medico.hasMany(cita, { as: "cita", foreignKey: "ID_MEDICO"});
  medico_consultorio.belongsTo(medico, { as: "ID_MEDICO_medico", foreignKey: "ID_MEDICO"});
  medico.hasMany(medico_consultorio, { as: "medico_consultorios", foreignKey: "ID_MEDICO"});
  plan.belongsTo(medico, { as: "ID_MEDICO_medico", foreignKey: "ID_MEDICO"});
  medico.hasMany(plan, { as: "plans", foreignKey: "ID_MEDICO"});
  cita.belongsTo(paciente, { as: "ID_PACIENTE_paciente", foreignKey: "ID_PACIENTE"});
  paciente.hasMany(cita, { as: "cita", foreignKey: "ID_PACIENTE"});
  medico.belongsTo(usuario, { as: "ID_USUARIO_usuario", foreignKey: "ID_USUARIO"});
  usuario.hasMany(medico, { as: "medicos", foreignKey: "ID_USUARIO"});
  paciente.belongsTo(usuario, { as: "ID_USUARIO_usuario", foreignKey: "ID_USUARIO"});
  usuario.hasMany(paciente, { as: "pacientes", foreignKey: "ID_USUARIO"});

  return {
    cita,
    consultorio,
    medico,
    medico_consultorio,
    paciente,
    plan,
    usuario,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
