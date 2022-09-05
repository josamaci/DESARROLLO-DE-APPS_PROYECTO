const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('medico_consultorio', {
    ID_M_C: {
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
    ID_CONSULTORIO: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'consultorio',
        key: 'ID_CONSULTORIO'
      }
    }
  }, {
    sequelize,
    tableName: 'medico_consultorio',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "ID_M_C" },
        ]
      },
      {
        name: "ID_MEDICO",
        using: "BTREE",
        fields: [
          { name: "ID_MEDICO" },
        ]
      },
      {
        name: "ID_CONSULTORIO",
        using: "BTREE",
        fields: [
          { name: "ID_CONSULTORIO" },
        ]
      },
    ]
  });
};
