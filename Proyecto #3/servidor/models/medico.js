const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('medico', {
    ID_MEDICO: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    ID_USUARIO: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'usuario',
        key: 'ID_USUARIO'
      }
    },
    CEDULA: {
      type: DataTypes.CHAR(10),
      allowNull: false
    },
    ESTADO_CIVIL: {
      type: DataTypes.ENUM('SOLTERO','CASADO','VIUDO','UNIÓN LIBRE'),
      allowNull: false
    },
    CODIGO_MEDICO: {
      type: DataTypes.CHAR(16),
      allowNull: false
    },
    FECHA_REG_MED: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    ESPECIALIDAD: {
      type: DataTypes.STRING(30),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'medico',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "ID_MEDICO" },
        ]
      },
      {
        name: "ID_USUARIO",
        using: "BTREE",
        fields: [
          { name: "ID_USUARIO" },
        ]
      },
    ]
  });
};
