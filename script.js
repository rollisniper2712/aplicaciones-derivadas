// Manejo de secciones (Inicio, Áreas, Recursos, Conclusiones)
const navButtons = document.querySelectorAll(".nav-btn, .primary-btn, .secondary-btn");
const sections = document.querySelectorAll(".section");

navButtons.forEach(btn => {
    btn.addEventListener("click", () => {
        const target = btn.getAttribute("data-target");
        if (!target) return;

        sections.forEach(sec => {
            sec.classList.toggle("active", sec.id === target);
        });

        document.querySelectorAll(".nav-btn").forEach(n => {
            n.classList.toggle("active", n.getAttribute("data-target") === target);
        });

        window.scrollTo({ top: 0, behavior: "smooth" });
    });
});

// Contenido por área
const contenidoAreas = {
    economia: {
        titulo: "Economía y Finanzas",
        descripcion:
            "En economía, la derivada se utiliza para estudiar costos, ingresos y beneficios marginales. " +
            "Permite identificar niveles de producción óptimos y analizar la sensibilidad de los resultados " +
            "ante cambios en la cantidad producida.",
        ejemplos: [
            {
                titulo: "Ejemplo 1: Costo marginal",
                problema:
                    "El costo total de producir x unidades de un producto viene dado por C(x) = x² - 4x + 40 (en dólares). " +
                    "Se desea conocer el costo marginal cuando se producen 5 unidades.",
                modelo: "C(x) = x² - 4x + 40",
                derivada:
                    "C'(x) = 2x - 4. Al evaluar en x = 5: C'(5) = 2·5 - 4 = 6.",
                interpretacion:
                    "El costo marginal en x = 5 es de 6 dólares por unidad. Esto significa que producir " +
                    "una unidad adicional alrededor de ese nivel implica un costo aproximado de 6 dólares."
            },
            {
                titulo: "Ejemplo 2: Ingreso marginal",
                problema:
                    "El ingreso por la venta de x unidades está dado por R(x) = 50x - 0.5x². " +
                    "Se desea conocer el ingreso marginal cuando se venden 20 unidades.",
                modelo: "R(x) = 50x - 0.5x²",
                derivada:
                    "R'(x) = 50 - x. Al evaluar en x = 20: R'(20) = 30.",
                interpretacion:
                    "El ingreso marginal en x = 20 es de 30 unidades monetarias por unidad adicional. " +
                    "Vender una unidad más alrededor de ese punto aporta aproximadamente 30 de ingreso extra."
            }
        ]
    },
    fisica: {
        titulo: "Física",
        descripcion:
            "En física, la derivada permite relacionar posición, velocidad y aceleración. " +
            "Se usa para describir movimientos, variaciones de energía y otros fenómenos dinámicos.",
        ejemplos: [
            {
                titulo: "Ejemplo 1: Movimiento rectilíneo",
                problema:
                    "La posición de una partícula que se mueve en línea recta viene dada por s(t) = 5t² + 2t, " +
                    "donde s se mide en metros y t en segundos. Se desea conocer la velocidad en t = 3 s.",
                modelo: "s(t) = 5t² + 2t",
                derivada:
                    "La velocidad es la derivada de la posición: v(t) = s'(t) = 10t + 2. " +
                    "Al evaluar en t = 3: v(3) = 10·3 + 2 = 32 m/s.",
                interpretacion:
                    "A los 3 segundos, la partícula se mueve con una velocidad de 32 m/s en la dirección del movimiento."
            },
            {
                titulo: "Ejemplo 2: Aceleración en caída libre",
                problema:
                    "La posición de un objeto en caída libre se describe por s(t) = 20 - 4.9t², donde t está en segundos. " +
                    "Se desea determinar la aceleración.",
                modelo: "s(t) = 20 - 4.9t²",
                derivada:
                    "La velocidad es v(t) = s'(t) = -9.8t. La aceleración es la derivada de la velocidad: " +
                    "a(t) = v'(t) = -9.8.",
                interpretacion:
                    "La aceleración es constante e igual a -9.8 m/s² (hacia abajo), valor aproximado de la gravedad en la Tierra."
            }
        ]
    },
    ambiental: {
        titulo: "Ciencia Ambiental",
        descripcion:
            "La derivada se utiliza para analizar la tasa de cambio de contaminantes, el consumo de recursos " +
            "y la regeneración de ecosistemas, apoyando decisiones sobre sostenibilidad.",
        ejemplos: [
            {
                titulo: "Ejemplo 1: Contaminante en un río",
                problema:
                    "La concentración de un contaminante en un río se modela como C(t) = 20e^{-0.4t}, " +
                    "donde C se mide en mg/L y t en días. Se desea conocer la rapidez con la que disminuye la " +
                    "concentración al cabo de 2 días.",
                modelo: "C(t) = 20e^{-0.4t}",
                derivada:
                    "C'(t) = 20(-0.4)e^{-0.4t} = -8e^{-0.4t}. Evaluando en t = 2: " +
                    "C'(2) ≈ -8e^{-0.8} ≈ -3.6 mg/L por día.",
                interpretacion:
                    "A los 2 días, la concentración está disminuyendo a razón de aproximadamente 3.6 mg/L por día, " +
                    "indicando que las medidas de descontaminación están reduciendo la presencia del contaminante."
            },
            {
                titulo: "Ejemplo 2: Crecimiento de un bosque reforestado",
                problema:
                    "La superficie cubierta por árboles en un área reforestada se modela como A(t) = 2t² + 5t, " +
                    "donde A se mide en hectáreas y t en años. Se desea saber la tasa de crecimiento a los 4 años.",
                modelo: "A(t) = 2t² + 5t",
                derivada:
                    "A'(t) = 4t + 5. Evaluando en t = 4: A'(4) = 4·4 + 5 = 21 hectáreas por año.",
                interpretacion:
                    "A los 4 años, la superficie arborizada aumenta a un ritmo de 21 hectáreas por año, " +
                    "lo que permite estimar el impacto de la reforestación en el tiempo."
            }
        ]
    },
    medicina: {
        titulo: "Medicina",
        descripcion:
            "En medicina, la derivada se aplica para estudiar la concentración de fármacos en la sangre, " +
            "el crecimiento de tumores y la evolución de signos vitales.",
        ejemplos: [
            {
                titulo: "Ejemplo 1: Dosis de un medicamento en la sangre",
                problema:
                    "La concentración de un medicamento en la sangre viene dada por C(t) = 8e^{-0.3t}, " +
                    "donde C está en mg/L y t en horas. Se desea conocer la tasa de cambio de la concentración " +
                    "a las 2 horas.",
                modelo: "C(t) = 8e^{-0.3t}",
                derivada:
                    "C'(t) = 8(-0.3)e^{-0.3t} = -2.4e^{-0.3t}. Evaluando en t = 2: " +
                    "C'(2) ≈ -1.32 mg/L por hora.",
                interpretacion:
                    "A las 2 horas, la concentración está disminuyendo a una tasa aproximada de 1.32 mg/L por hora. " +
                    "Este análisis guía al médico para ajustar el intervalo entre dosis."
            },
            {
                titulo: "Ejemplo 2: Crecimiento de un tumor",
                problema:
                    "El volumen de un tumor se modela como V(t) = 0.5t² + 2t + 1, donde V se mide en cm³ y t en meses. " +
                    "Se desea conocer la tasa de crecimiento a los 3 meses.",
                modelo: "V(t) = 0.5t² + 2t + 1",
                derivada:
                    "V'(t) = t + 2. Evaluando en t = 3: V'(3) = 5 cm³/mes.",
                interpretacion:
                    "A los 3 meses, el tumor aumenta su volumen a una tasa de 5 cm³ por mes. " +
                    "Esta información apoya la decisión sobre la urgencia del tratamiento."
            }
        ]
    },
    ingenieria: {
        titulo: "Ingeniería",
        descripcion:
            "En ingeniería, la derivada se usa para analizar deformaciones, optimizar procesos productivos " +
            "y garantizar la seguridad estructural.",
        ejemplos: [
            {
                titulo: "Ejemplo 1: Esfuerzo en una viga",
                problema:
                    "La deformación de una viga se describe por y(x) = 0.02x³ - 0.3x² + 1.5x, " +
                    "donde x está en metros y y(x) en centímetros. Se desea conocer la inclinación en x = 2 m.",
                modelo: "y(x) = 0.02x³ - 0.3x² + 1.5x",
                derivada:
                    "y'(x) = 0.06x² - 0.6x + 1.5. Evaluando en x = 2: y'(2) = 0.54.",
                interpretacion:
                    "En x = 2 m la viga tiene una inclinación positiva de 0.54 (relación entre altura y longitud). " +
                    "Esto ayuda a verificar que la deformación se mantiene dentro de límites seguros."
            },
            {
                titulo: "Ejemplo 2: Optimización del costo de producción",
                problema:
                    "El costo de producir x unidades está dado por C(x) = x² - 12x + 60. Se desea encontrar el " +
                    "número de unidades que minimiza el costo.",
                modelo: "C(x) = x² - 12x + 60",
                derivada:
                    "C'(x) = 2x - 12. Para minimizar el costo se iguala a cero: 2x - 12 = 0 → x = 6.",
                interpretacion:
                    "El costo mínimo se alcanza produciendo 6 unidades. Esta información es clave para planificar " +
                    "la producción y reducir gastos."
            }
        ]
    }
};

// Render del panel de área
const areaBtns = document.querySelectorAll(".area-btn");
const panel = document.getElementById("area-detalle");
const contenido = document.getElementById("area-contenido");
const cerrarArea = document.getElementById("cerrar-area");

areaBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        const areaKey = btn.getAttribute("data-area");
        const data = contenidoAreas[areaKey];
        if (!data) return;

        contenido.innerHTML = `
            <div class="area-header">
                <h3>${data.titulo}</h3>
                <p>${data.descripcion}</p>
            </div>
            <div class="ejemplos-grid">
                ${data.ejemplos.map(ej => `
                    <article class="ejemplo-card">
                        <h4>${ej.titulo}</h4>
                        <p><span class="etiqueta">Descripción del problema</span><br>${ej.problema}</p>
                        <p><span class="etiqueta">Modelo matemático</span><br>${ej.modelo}</p>
                        <p><span class="etiqueta">Uso de la derivada</span><br>${ej.derivada}</p>
                        <p><span class="etiqueta">Interpretación del resultado</span><br>${ej.interpretacion}</p>
                    </article>
                `).join("")}
            </div>
        `;

        panel.classList.remove("hidden");
        panel.scrollIntoView({ behavior: "smooth", block: "start" });
    });
});

cerrarArea.addEventListener("click", () => {
    panel.classList.add("hidden");
});
