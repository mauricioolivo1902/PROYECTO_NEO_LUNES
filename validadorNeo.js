// validadorNeo.js - Lógica del Proyecto NEO
const validadorNeo = {
    // Función para validar Signos Vitales (Caja Blanca y Límites)
    validarTemperatura: (temp) => {
        if (typeof temp !== 'number') return "Error de Tipo";
        
        if (temp < 35 || temp > 42) {
            return "Alerta: Fuera de rango"; // Rama de Decisión 1
        } else {
            return "Normal"; // Rama de Decisión 2
        }
    },

    // Función de Acceso (Tabla de Decisión)
    validarAcceso: (usuarioValido, tokenActivo) => {
        if (usuarioValido && tokenActivo) return "Acceso Permitido";
        if (usuarioValido && !tokenActivo) return "Solicitar Login";
        return "Acceso Denegado";
    },

    // Función de Edad (Clases de Equivalencia)
    validarEdadPaciente: (edad) => {
        if (edad >= 0 && edad <= 120) return "Edad Válida";
        return "Edad Inválida";
    }
};

module.exports = validadorNeo;