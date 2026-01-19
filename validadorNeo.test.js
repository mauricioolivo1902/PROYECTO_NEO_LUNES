// validadorNeo.test.js - Suite de Pruebas Técnicas
const validador = require('./validadorNeo');

describe('PRUEBAS DE VALIDACIÓN - PROYECTO NEO', () => {

    // 1. TÉCNICA: CAJA BLANCA (Cobertura de Decisión)
    test('Caja Blanca: Debería cubrir la rama de Alerta y la rama Normal', () => {
        expect(validador.validarTemperatura(37)).toBe("Normal"); // Rama 1
        expect(validador.validarTemperatura(43)).toBe("Alerta: Fuera de rango"); // Rama 2
    });

    // 2. TÉCNICA: CLASES DE EQUIVALENCIA
    test('Clases de Equivalencia: Validar rangos de edad', () => {
        expect(validador.validarEdadPaciente(25)).toBe("Edad Válida");    // Clase Válida
        expect(validador.validarEdadPaciente(-5)).toBe("Edad Inválida");  // Clase Inválida < 0
        expect(validador.validarEdadPaciente(150)).toBe("Edad Inválida"); // Clase Inválida > 120
    });

    // 3. TÉCNICA: VALORES LÍMITE
    test('Valores Límite: Fronteras de temperatura (35°C)', () => {
        expect(validador.validarTemperatura(34.9)).toBe("Alerta: Fuera de rango"); // Límite inferior externo
        expect(validador.validarTemperatura(35)).toBe("Normal");                 // Límite inferior interno
        expect(validador.validarTemperatura(42)).toBe("Normal");                 // Límite superior interno
    });

    // 4. TÉCNICA: TABLA DE DECISIÓN
    test('Tabla de Decisión: Combinaciones de seguridad', () => {
        expect(validador.validarAcceso(true, true)).toBe("Acceso Permitido");   // Regla 1
        expect(validador.validarAcceso(true, false)).toBe("Solicitar Login");   // Regla 2
        expect(validador.validarAcceso(false, true)).toBe("Acceso Denegado");   // Regla 3
    });

});