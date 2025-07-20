const User = require("../models/users.models");

// Crear un usuario
module.exports.createUser = async (req, res) => {
    const { nombre, email, pass, role, estado, fechaNacimiento, bio, username } = req.body;

    // Validar datos incompletos (bio puede ser opcional)
    if (!nombre || !email || !pass || !role || !estado || !fechaNacimiento || !username) {
        return res.status(400).json({ error: "Datos incompletos" });
    }

    try {
        // Verificar si el correo ya existe
        const existingUser = await User.findOne({ where: { email } });
        if (existingUser) {
            return res.status(400).json({ error: "Correo ya registrado" });
        }

        // Crear usuario
        const newUser = await User.create({
            nombre,
            email,
            pass,
            role,
            estado,
            fechaNacimiento,
            bio,
            username
        });

        res.status(201).json({
            id: newUser.id.toString(),
            nombre: newUser.nombre,
            email: newUser.email,
            pass: newUser.pass,
            role: newUser.role,
            estado: newUser.estado,
            fechaNacimiento: newUser.fechaNacimiento ? newUser.fechaNacimiento.toISOString().split('T')[0] : "",
            bio: newUser.bio,
            username: newUser.username
        });
    } catch (err) {
        res.status(400).json({ error: "Error al crear usuario" });
    }
};

// Obtener todos los usuarios
module.exports.getAllUsers = async (_, res) => {
    try {
        const users = await User.findAll();
        res.status(200).json(users);
    } catch (err) {
        res.status(500).json({ error: "Error interno del servidor" });
    }
};