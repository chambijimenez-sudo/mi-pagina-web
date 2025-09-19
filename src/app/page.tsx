"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Phone, Mail, MapPin, ChevronLeft, ChevronRight, Facebook, Instagram } from "lucide-react"
import Image from 'next/image'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-gray-800 text-white py-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              {/* Logo - Ajustado para ocupar todo el alto del encabezado */}
              <div className="flex-shrink-0 flex items-center justify-center h-16">
                <Image
                  src="/logo.png"
                  alt="Logo Estudio de Proyecto y Construcción"
                  width={96}
                  height={96}
                  className="object-contain"
                />
              </div>
              <div>
                <h1 className="text-lg font-bold">Estudio de Proyecto y Construcción</h1>
                <p className="text-sm text-gray-300">Construimos juntos, organizamos espacios</p>
              </div>
            </div>
            <nav className="hidden md:flex space-x-6">
              <a href="#home" className="hover:text-orange-400">
                Home
              </a>
              <a href="#about" className="hover:text-orange-400">
                Metodología
              </a>
              <a href="#services" className="hover:text-orange-400">
                Servicios
              </a>
              <a href="#gallery" className="hover:text-orange-400">
                Galería
              </a>
              <a href="#contact" className="hover:text-orange-400">
                Contacto
              </a>
            </nav>
            <div className="flex flex-col items-end space-y-4">
              <div className="flex items-center space-x-3">
                <a href="https://www.facebook.com/profile.php?id=100068164068501&locale=es_LA" target="_blank" rel="noopener noreferrer">
                  <Facebook className="w-4 h-4 hover:text-blue-400 cursor-pointer" />
                </a>
                <a href="https://www.instagram.com/cjoe.store/" target="_blank" rel="noopener noreferrer">
                  <Instagram className="w-4 h-4 hover:text-pink-400 cursor-pointer" />
                </a>
                <a href="https://www.tiktok.com/@cjoe.store" target="_blank" rel="noopener noreferrer">
                  <svg className="w-4 h-4 hover:text-green-400 cursor-pointer" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative">
        <div className="grid md:grid-cols-2 min-h-[500px]">
          {/* Left side - Image */}
          <div className="relative bg-gray-100">
            <Image
              src="/person-working-on-laptop-with-construction-plans-a.jpg"
              alt="Persona trabajando en laptop con planos de construcción"
              width={800}
              height={500}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right side - Content */}
          <div className="bg-gray-700 text-white p-8 flex flex-col justify-center">
            <h2 className="text-3xl font-bold mb-6 text-balance">¿Querés construir pero no sabés por dónde empezar?</h2>

            <div className="space-y-4 mb-8">
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                <p className="text-sm">
                  <strong>Asesoría inicial gratuita</strong> - Definí el camino correcto desde el primer día
                </p>
              </div>

              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                <p className="text-sm">
                  <strong>Proyecto de obra</strong> - Documentación técnica clara y precisa (plantas, cortes,
                  axonométrica)
                </p>
              </div>

              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                <p className="text-sm">
                  <strong>Dirección técnica de obra</strong> - Cumplí con normativas y evitá multas
                </p>
              </div>

              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                <p className="text-sm">
                  <strong>Gestión estratégica</strong> - Optimizá tiempos y recursos
                </p>
              </div>

              <div className="flex items-start space-x-3">
                <span className="text-orange-400 font-bold mt-1">⚠️</span>
                <p className="text-sm">
                  <strong>El 92% de las obras con supervisión profesional evitan reprocesos costosos</strong>
                </p>
              </div>
            </div>

            <Button className="bg-orange-300 hover:bg-orange-400 text-gray-800 px-8 py-3 w-fit font-semibold">
              Acepto propuesta
            </Button>
          </div>
        </div>
      </section>

      {/* Work Method Section */}
      <section id="about" className="py-16">
        <div className="grid md:grid-cols-2 min-h-[400px]">
          {/* Left side - Content */}
          <div className="bg-orange-300 text-gray-800 p-8 flex flex-col justify-center">
            <h3 className="text-2xl font-bold mb-6">Metodología</h3>

            <div className="space-y-6 text-sm">
              <div>
                <p className="font-semibold mb-4">🔧 Paso a paso del servicio profesional</p>
              </div>

              <div>
                <p className="font-semibold mb-2">📞 1. Contacto inicial sin compromiso</p>
                <div className="space-y-1 ml-4">
                  <p>• Diagnóstico rápido de necesidades</p>
                  <p>• Modalidad: virtual o presencial</p>
                </div>
              </div>

              <div>
                <p className="font-semibold mb-2">🏡 2. Visita técnica (opcional)</p>
                <div className="space-y-1 ml-4">
                  <p>• Checklist de requisitos municipales</p>
                  <p>• Identificación de riesgos tempranos</p>
                  <p>• Te marcamos los pasos a seguir claramente</p>
                </div>
              </div>

              <div>
                <p className="font-semibold mb-2">📑 3. Propuesta clara y personalizada</p>
                <div className="space-y-1 ml-4">
                  <p>• Honorarios transparentes</p>
                  <p>• Cronograma con hitos clave</p>
                  <p>• Plan de acción detallado</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Image */}
          <div className="relative bg-gray-100">
            <Image
              src="/coffee-cup-glasses-and-notebook-on-desk-workspace.jpg"
              alt="Taza de café, anteojos y cuaderno en escritorio de trabajo"
              width={800}
              height={500}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-block bg-orange-300 px-8 py-4 rounded-lg mb-4">
              <h3 className="text-4xl font-bold text-black">Nuestros servicios</h3>
            </div>

            {/* Bloque principal con fondo oscuro y texto blanco */}
            <div className="bg-gray-700 p-6 rounded-lg max-w-4xl mx-auto border-b-4 border-orange-500">
              <div className="flex items-center justify-center space-x-2 mb-4">
                <span className="text-gray-700">🏗️</span>
                <h4 className="text-xl font-semibold text-white">
                  Servicio Integral de Proyecto de Obras: Desde el Diseño Inicial hasta la Ejecución Controlada
                </h4>
              </div>
              <p className="text-gray-300 italic text-center">
                &quot;Metodología profesional en 4 etapas clave (01 al 04) para garantizar resultados precisos, eficientes y sin sobresaltos&quot;
              </p>
              <p className="text-xl font-semibold text-white mt-4">
                Proyectista
              </p>
            </div>
          </div>

          {/* Process Flow Diagram */}
          <div className="flex justify-center mb-16">
            <div className="relative">
              <Image
                src="/construction-project-workflow-diagram-with-icons-a.jpg"
                alt="Diagrama de flujo del proceso de construcción"
                width={1200}
                height={600}
                className="w-full max-w-4xl"
              />
            </div>
          </div>

          {/* Service Cards */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Card 1 */}
            <Card className="bg-gray-700 text-white">
              <CardContent className="p-6">
                <Image
                  src="/servicio-01.jpg"
                  alt="Imagen del servicio - Inicio del Proyecto"
                  width={800}
                  height={400}
                  className="w-full h-60 object-contain rounded-lg mb-6"
                />
                <div className="flex items-start space-x-2 mb-2">
                  <span className="text-orange-400 text-xl">📝</span>
                  <h5 className="font-bold text-base">01 - Inicio del Proyecto: Los Cimientos del Éxito</h5>
                </div>
                <p className="text-xs mb-3">Esta etapa define el rumbo de toda tu obra.</p>

                <div className="space-y-1 text-xs">
                  <div className="flex items-start space-x-2">
                    <span className="text-yellow-400">⚠️</span>
                    <p>Costos imprevistos</p>
                  </div>
                  <div className="flex items-start space-x-2">
                    <span className="text-red-400">⏳</span>
                    <p>Retrasos acumulativos.</p>
                  </div>
                  <div className="flex items-start space-x-2">
                    <span className="text-red-400">🔀</span>
                    <p>Cambios disruptivos</p>
                  </div>

                  <p className="text-green-400 font-semibold mt-3">Nuestro enfoque profesional:</p>
                  <div className="space-y-1">
                    <p>✅ Definición clara de alcances</p>
                    <p>✅ Estudio de viabilidad inicial.</p>
                    <p>✅ Planificación estratégica básica.</p>

                    <p>💡 El 60% de los problemas en obra surgen por una mala etapa inicial</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Card 2 */}
            <Card className="bg-orange-300 text-gray-800">
              <CardContent className="p-6">
                <Image
                  src="/servicio-02.png"
                  alt="Imagen del servicio - Diseño Esquemático"
                  width={800}
                  height={400}
                  className="w-full h-60 object-contain rounded-lg mb-6"
                />
                <div className="flex items-start space-x-2 mb-2">
                  <span className="text-gray-800 text-xl">📐</span>
                  <h5 className="font-bold text-base">02- Diseño Esquemático: La Base de tu Éxito</h5>
                </div>
                <p className="text-xs mb-3">
                  📅Definimos los elementos en la planta arquitectónica para proyectar mejor. Define esquemas, evita
                  reprocesos y maximiza resultados.💰
                </p>

                <div className="space-y-1 text-xs">
                  <p>🎯 Nuestra metodología:</p>
                  <p>✅Entrega práctica y real</p>
                  <p>✅ Análisis de factibilidad de las necesidades</p>
                  <p>✅ Comunicación clara y constante</p>
                  <p>⚡ Transformamos ideas en resultados tangibles</p>
                </div>
              </CardContent>
            </Card>

            {/* Card 3 */}
            <Card className="bg-orange-300 text-gray-800">
              <CardContent className="p-6">
                <Image
                  src="/servicio-03.png"
                  alt="Imagen del servicio - Desarrollo de Anteproyecto"
                  width={800}
                  height={400}
                  className="w-full h-60 object-contain rounded-lg mb-6"
                />
                <div className="flex items-start space-x-2 mb-2">
                  <span className="text-gray-800 text-xl">📋</span>
                  <h5 className="font-bold text-base">
                    03 - Desarrollo de Anteproyecto: La Base Sólida de tu Proyecto
                  </h5>
                </div>
                <p className="text-xs mb-3">
                  Convertimos tu idea en un plan detallado con documentos técnicos ejecutables.
                </p>

                <div className="space-y-1 text-xs">
                  <p>📐 Plantas y vistas (plantas, alzados y cortes especial)</p>
                  <p>📊 Cómputos métricos (1.00)</p>
                  <p>📈 Análisis técnico para optimización volumétrica</p>
                  <p>📋 Documentación técnica básica para fundamentar para validar el plan base</p>
                  <p>📝 Planificar etapas de crecimiento</p>
                </div>
                <div className="flex items-start space-x-2 mb-2">
                  <span className="text-gray-800 text-xl"></span>
                  <h5 className="font-bold text-base">
                  </h5>
                </div>
                <p className="text-xs mb-3">
                  ⚙️ Sin renders ni planos ejecutivos - Solo lo necesario para comenzar con seguridad.
                </p>
                <p className="text-xs mb-3">
                  <p>📌 ¿Por qué es crucial esta etapa? </p>
                  <p>Te permite tomar decisiones informadas antes de invertir en proyectos ejecutivos.</p>
                </p>
              </CardContent>
            </Card>

            {/* Card 4 */}
            <Card className="bg-gray-700 text-white">
              <CardContent className="p-6">
                <Image
                  src="/servicio-04.png"
                  alt="Imagen del servicio - Desarrollo del Proyecto"
                  width={800}
                  height={400}
                  className="w-full h-60 object-contain rounded-lg mb-6"
                />
                <div className="flex items-start space-x-2 mb-2">
                  <span className="text-orange-400 text-xl">🏗️</span>
                  <h5 className="font-bold text-base">04-Desarrollo del Proyecto: Donde la Magia Ocurre</h5>
                </div>
                <p className="text-xs mb-3">
                  Aquí es donde tu sueño se proyecta en cada detalle y pequeño, cada obra debe ser única.
                </p>

                <div className="space-y-1 text-xs">
                  <p>🔧 Nuestro enfoque:</p>
                  <p>✅ Adaptabilidad a las necesidades específicas</p>
                  <p>✅ Soluciones prácticas para desafíos reales</p>
                  <p>✅ Seguimiento constante y comunicación clara</p>
                </div>
                <div className="flex items-start space-x-2 mb-2">
                  <span className="text-gray-800 text-xl"></span>
                  <h5 className="font-bold text-base">
                  </h5>
                </div>
                <p className="text-xs mb-3">
                  ⚡ Transformamos planos en resultados tangibles.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Technical Direction Section */}
      <section className="py-16 bg-orange-300">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <span className="text-2xl">⚡</span>
            <h3 className="text-2xl font-bold text-gray-800">Dirección Técnica de Obra Certificada</h3>
          </div>
          <p className="text-center text-gray-700 italic mb-2">
            &quot;Supervisión profesional para garantizar que tu obra se ejecute fielmente al proyecto aprobado&quot;
          </p>
          <p className="text-center font-semibold text-gray-800 mb-8">Director de obra</p>

          <div className="max-w-6xl mx-auto bg-white rounded-lg p-8 shadow-lg">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h4 className="text-xl font-bold text-gray-800 mb-6">Servicios de Dirección Técnica:</h4>
                <div className="space-y-3 text-sm text-gray-700">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <p>Supervisión permanente de avance de obra</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <p>Control de calidad de materiales y procesos constructivos</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <p>Certificación de avance para liberación de pagos</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <p>Resolución de problemas técnicos durante la construcción</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <p>Documentación fotográfica del progreso</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <p>Informes técnicos semanales</p>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-orange-50 rounded-lg">
                  <p className="text-sm text-orange-800 font-semibold">
                    ⚡ Con dirección técnica profesional reduces hasta un 35% los riesgos de sobrecostos y retrasos
                  </p>
                </div>
              </div>

              <div>
                <Image
                  src="/construction-site-supervision-and-quality-control-.jpg"
                  alt="Supervisión profesional de obra"
                  width={800}
                  height={500}
                  className="w-full rounded-lg shadow-md"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Management Section */}
      <section className="py-16 bg-gray-700">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <span className="text-2xl">🎯</span>
            <h3 className="text-2xl font-bold text-white">Gestión Estratégica de Obra: Optimización Total</h3>
          </div>
          <p className="text-center text-gray-300 italic mb-2">
            &quot;Coordinación integral de recursos, tiempos y procesos para maximizar la eficiencia de tu proyecto&quot;
          </p>
          <p className="text-center font-semibold text-white mb-8">Gestión profesional de obra</p>

          <div className="max-w-6xl mx-auto bg-white rounded-lg p-8 shadow-lg">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h4 className="text-xl font-bold text-gray-800 mb-6">Servicios de Gestión Estratégica:</h4>
                <div className="space-y-3 text-sm text-gray-700">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <p>Planificación y coordinación de recursos humanos y materiales</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <p>Optimización de cronogramas y control de tiempos</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <p>Gestión de proveedores y control de calidad de insumos</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <p>Control presupuestario y análisis de costos</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <p>Coordinación entre diferentes especialidades y oficios</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <p>Reportes ejecutivos de avance y performance</p>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-gray-500 rounded-lg">
                  <p className="text-sm text-white font-semibold">
                    🎯 La gestión estratégica optimiza hasta un 40% los tiempos de ejecución y garantiza resultados
                  </p>
                </div>
              </div>

              <div>
                <Image
                  src="/construction-project- gestion.jpg"
                  alt="Gestión estratégica de obra"
                  width={800}
                  height={500}
                  className="w-full rounded-lg shadow-md"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          {/* Título de la galería con nuevo estilo */}
          <div className="text-center mb-12">
            <div className="bg-gray-800 p-6 rounded-lg max-w-4xl mx-auto border-b-4 border-orange-500">
              <h3 className="text-xl font-bold text-white">Galería de Proyectos</h3>
              <p className="text-gray-300 italic mt-2">Algunos de nuestros trabajos realizados</p>
            </div>
          </div>

          {/* Botones de navegación - CORREGIDOS */}
          <button
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white shadow-lg rounded-full p-3 transition-all duration-200"
            onClick={() => {
              const gallery = document.querySelector(".gallery-scroll");
              if (gallery) {
                gallery.scrollLeft -= 320;
              }
            }}
          >
            <ChevronLeft className="w-6 h-6 text-gray-700" />
          </button>

          <button
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white shadow-lg rounded-full p-3 transition-all duration-200"
            onClick={() => {
              const gallery = document.querySelector(".gallery-scroll");
              if (gallery) {
                gallery.scrollLeft += 320;
              }
            }}
          >
            <ChevronRight className="w-6 h-6 text-gray-700" />
          </button>

          {/* Contenedor de la galería */}
          <div
            className="gallery-scroll flex overflow-x-auto scrollbar-hide gap-4 pb-4 px-12"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
              scrollBehavior: "smooth"
            }}
          >
            <div className="flex-shrink-0 w-80 h-60 bg-gray-200 rounded-lg overflow-hidden">
              <Image
                src="/modern-house-construction-project.jpg"
                alt="Proyecto de construcción de casa moderna"
                width={400}
                height={300}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="flex-shrink-0 w-80 h-60 bg-gray-200 rounded-lg overflow-hidden">
              <Image
                src="/apartment-construction.png"
                alt="Construcción de edificio de apartamentos"
                width={400}
                height={300}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="flex-shrink-0 w-80 h-60 bg-gray-200 rounded-lg overflow-hidden">
              <Image
                src="/office-renovation.png"
                alt="Renovación de edificio de oficinas"
                width={400}
                height={300}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="flex-shrink-0 w-80 h-60 bg-gray-200 rounded-lg overflow-hidden">
              <Image
                src="/residential-house-extension.jpg"
                alt="Extensión de casa residencial"
                width={400}
                height={300}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="flex-shrink-0 w-80 h-60 bg-gray-200 rounded-lg overflow-hidden">
              <Image
                src="/commercial-building-construction.png"
                alt="Construcción de edificio comercial"
                width={400}
                height={300}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="flex-shrink-0 w-80 h-60 bg-gray-200 rounded-lg overflow-hidden">
              <Image
                src="/interior-renovation-project.jpg"
                alt="Proyecto de renovación interior"
                width={400}
                height={300}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="flex-shrink-0 w-80 h-60 bg-gray-200 rounded-lg overflow-hidden">
              <Image
                src="/architectural-design-blueprints.jpg"
                alt="Planos de diseño arquitectónico"
                width={400}
                height={300}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="flex-shrink-0 w-80 h-60 bg-gray-200 rounded-lg overflow-hidden">
              <Image
                src="/construction-site-supervision.jpg"
                alt="Supervisión de obra en construcción"
                width={400}
                height={300}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>

          <div className="text-center mt-4">
            <p className="text-sm text-gray-500">← Usa las flechas o desliza para ver más proyectos →</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-orange-300">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-gray-800 mb-4">Déjanos tu consulta</h3>
              <p className="text-gray-700 text-lg">
                Estamos aquí para ayudarte a hacer realidad tu proyecto de construcción
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div className="bg-white rounded-lg p-8 shadow-lg">
                <h4 className="text-xl font-bold mb-6 text-gray-800">Envíanos un mensaje</h4>
<form
  action="https://formspree.io/f/xeolykeg"
  method="POST"
  className="space-y-4"
>
  <div>
    <label className="block text-sm font-medium text-gray-700 mb-2">Nombre completo *</label>
    <input
      name="nombre"
      type="text"
      placeholder="Tu nombre completo"
      required
      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 bg-white text-gray-900 placeholder:text-gray-400"
    />
  </div>
  <div>
    <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
    <input
      name="email"
      type="email"
      placeholder="tu@email.com"
      required
      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 bg-white text-gray-900 placeholder:text-gray-400"
    />
  </div>
  <div>
    <label className="block text-sm font-medium text-gray-700 mb-2">Teléfono</label>
    <input
      name="telefono"
      type="tel"
      placeholder="+54 9 11 1234-5678"
      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 bg-white text-gray-900 placeholder:text-gray-400"
    />
  </div>
  <div>
    <label className="block text-sm font-medium text-gray-700 mb-2">Tipo de proyecto</label>
    <select
      name="tipo_proyecto"
      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 bg-white text-gray-900"
    >
      <option value="">Selecciona una opción</option>
      <option value="casa">Casa nueva</option>
      <option value="ampliacion">Ampliación</option>
      <option value="renovacion">Renovación</option>
      <option value="comercial">Proyecto comercial</option>
      <option value="otro">Otro</option>
    </select>
  </div>
  <div>
    <label className="block text-sm font-medium text-gray-700 mb-2">Mensaje *</label>
    <textarea
      name="mensaje"
      rows={4}
      placeholder="Cuéntanos sobre tu proyecto..."
      required
      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 bg-white text-gray-900 placeholder:text-gray-400 resize-none"
    ></textarea>
  </div>
  <Button
    type="submit"
    className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 text-lg font-semibold"
  >
    Enviar consulta
  </Button>
</form>
              </div>

              {/* Contact Info */}
              <div className="text-gray-800">
                <h4 className="text-xl font-bold mb-6">Información de contacto</h4>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <Phone className="w-6 h-6 text-gray-800 mt-1" />
                    <div>
                      <h5 className="font-semibold mb-1">Teléfono</h5>
                      <p className="text-gray-700">+54 9 11 3317-8886</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <Mail className="w-6 h-6 text-gray-800 mt-1" />
                    <div>
                      <h5 className="font-semibold mb-1">Email</h5>
                      <p className="text-gray-700">info@cjoe.com.ar</p>
                      <p className="text-gray-700">tecnica@cjoe.com.ar</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <MapPin className="w-6 h-6 text-gray-800 mt-1" />
                    <div>
                      <h5 className="font-semibold mb-1">Dirección</h5>
                      <p className="text-gray-700">Gregorio de Laferrere</p>
                      <p className="text-gray-700">La Matanza</p>
                      <p className="text-gray-700">Argentina</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <span className="text-2xl mt-1">🕒</span>
                    <div>
                      <h5 className="font-semibold mb-1">Horarios de atención</h5>
                      <p className="text-gray-700">Lunes a Viernes: 9:00 - 18:00</p>
                      <p className="text-gray-700">Sábados: 9:00 - 13:00</p>
                      <p className="text-gray-700">Domingos: Cerrado</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 p-6 bg-white/20 rounded-lg">
                  <h5 className="font-semibold mb-3">¿Por qué elegirnos?</h5>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li>✅ Más de 10 años de experiencia</li>
                    <li>✅ Proyectos certificados y supervisados</li>
                    <li>✅ Asesoría gratuita inicial</li>
                    <li>✅ Cumplimiento de plazos garantizado</li>
                    <li>✅ Presupuestos transparentes</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-4 mb-4">
              <div className="flex-shrink-0 flex items-center justify-center h-16">
                <Image
                  src="/logo.png"
                  alt="Logo Estudio de Proyecto y Construcción"
                  width={96}
                  height={96}
                  className="object-contain"
                />
              </div>
              <div>
                <h1 className="text-lg font-bold">Estudio de Proyecto y Construcción</h1>
                <p className="text-sm text-gray-300">Construimos juntos, organizamos espacios</p>
              </div>
            </div>

            <div className="flex items-center justify-center space-x-6 mb-4">
              <a href="https://www.facebook.com/profile.php?id=100068164068501&locale=es_LA" className="flex items-center space-x-2 hover:text-blue-400 transition-colors">
                <Facebook className="w-5 h-5" />
                <span className="text-sm">Facebook</span>
              </a>
              <a href="https://www.instagram.com/cjoe.store/" className="flex items-center space-x-2 hover:text-pink-400 transition-colors">
                <Instagram className="w-5 h-5" />
                <span className="text-sm">Instagram</span>
              </a>
              <a href="https://www.tiktok.com/@cjoe.store" className="flex items-center space-x-2 hover:text-white transition-colors">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
                </svg>
                <span className="text-sm">TikTok</span>
              </a>
            </div>
            <p className="text-gray-400 text-sm">
              © 2024 Estudio de Proyecto y Construcción. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </footer>

      {/* WhatsApp Floating Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <a
          href="https://wa.me/5491133178886"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
        >
          <svg className="w-10 h-10 text-white" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
          </svg>
        </a>
      </div>
    </div>
  )
}