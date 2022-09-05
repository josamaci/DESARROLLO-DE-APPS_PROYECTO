const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('consultorio', {
    ID_CONSULTORIO: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    ESPECIALIDAD: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    NOMBRE: {
      type: DataTypes.STRING(60),
      allowNull: false
    },
    CORREO: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    TELEFONO: {
      type: DataTypes.CHAR(10),
      allowNull: false
    },
    RUC: {
      type: DataTypes.CHAR(13),
      allowNull: false
    },
    DIRECCION: {
      type: DataTypes.STRING(50),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'consultorio',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "ID_CONSULTORIO" },
        ]
      },
    ]
  });
};
