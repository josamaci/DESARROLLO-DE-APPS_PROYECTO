const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('plan', {
    ID_PLAN: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    ID_MEDICO: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'medico',
        key: 'ID_MEDICO'
      }
    },
    DIA: {
      type: DataTypes.ENUM('LUNES','MARTES','MIERCOLES','JUEVES','VIERNES','SABADO','DOMINGO'),
      allowNull: false
    },
    MODALIDAD: {
      type: DataTypes.ENUM('PRESENCIAL','VIRTUAL'),
      allowNull: false
    },
    DIRECCION: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    HORA_INICIO: {
      type: DataTypes.TIME,
      allowNull: false
    },
    HORA_FIN: {
      type: DataTypes.TIME,
      allowNull: false
    },
    PRECIO: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false
    },
    DESCUENTO: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'plan',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "ID_PLAN" },
        ]
      },
      {
        name: "ID_MEDICO",
        using: "BTREE",
        fields: [
          { name: "ID_MEDICO" },
        ]
      },
    ]
  });
};
