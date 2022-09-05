const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('usuario', {
    ID_USUARIO: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    NOMBRE: {
      type: DataTypes.STRING(60),
      allowNull: false
    },
    APELLIDO: {
      type: DataTypes.STRING(60),
      allowNull: false
    },
    CORREO: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    CONSTRASENIA: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    FECHA_NAC: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    TELEFONO: {
      type: DataTypes.CHAR(10),
      allowNull: false
    },
    SEXO: {
      type: DataTypes.ENUM('MASCULINO','FEMENINO'),
      allowNull: false
    },
    IMAGE: {
      type: DataTypes.BLOB,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'usuario',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "ID_USUARIO" },
        ]
      },
    ]
  });
};
