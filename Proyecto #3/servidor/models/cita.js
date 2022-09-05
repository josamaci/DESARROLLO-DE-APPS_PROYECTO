const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cita', {
    ID_CITA: {
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
    ID_PACIENTE: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'paciente',
        key: 'ID_PACIENTE'
      }
    },
    MODALIDAD: {
      type: DataTypes.ENUM('PRESENCIAL','VIRTUAL'),
      allowNull: false
    },
    DIRECCION: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    FECHA: {
      type: DataTypes.DATEONLY,
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
    ESTADO: {
      type: DataTypes.ENUM('DISPONIBLE','DESHABILITADA','PENDIENTE','PLANIFICADA','CANCELADA','INICIADA','FINALIZADA'),
      allowNull: false
    },
    PRECIO: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false
    },
    DESCUENTO: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    PAGO_REGISTRADO: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'cita',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "ID_CITA" },
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
        name: "ID_PACIENTE",
        using: "BTREE",
        fields: [
          { name: "ID_PACIENTE" },
        ]
      },
    ]
  });
};
