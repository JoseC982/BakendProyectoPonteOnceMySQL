const { DataTypes } = require('sequelize');
const sequelize = require('../config/sequelize.config'); // Ajusta la ruta según tu estructura

const Report = sequelize.define('Report', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        validate: {
            notNull: { msg: "Id is required" }
        }
    },
    incidentTypeId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            notNull: { msg: "El tipo de incidente es requerido" }
        }
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notNull: { msg: "La descripción es requerida" }
        }
    },
    location: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notNull: { msg: "La ubicación es requerida" }
        }
    },
    lat: {
        type: DataTypes.FLOAT,
        allowNull: false,
        validate: {
            notNull: { msg: "La latitud es requerida" }
        }
    },
    lng: {
        type: DataTypes.FLOAT,
        allowNull: false,
        validate: {
            notNull: { msg: "La longitud es requerida" }
        }
    },
    time: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notNull: { msg: "La hora es requerida" }
        }
    },
    date: {
        type: DataTypes.DATEONLY,
        allowNull: false,
        validate: {
            notNull: { msg: "La fecha es requerida" }
        }
    },
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            notNull: { msg: "El usuario es requerido" }
        }
    },
    status: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: "nuevo",
        validate: {
            notNull: { msg: "El estado es requerido" }
        }
    }
});

module.exports = Report;