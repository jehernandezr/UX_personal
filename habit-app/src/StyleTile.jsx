import React from 'react';
import { 
  Droplet, 
  Pill, 
  Leaf, 
  Home, 
  BookOpen, 
  Trash2, 
  Sun, 
  Mic, 
  MapPin, 
  CheckCircle2, 
  Clock, 
  Settings, 
  Plus, 
  Puzzle,
  Loader2
} from 'lucide-react';

const StyleTile = () => {
  return (
    <div className="min-h-screen bg-[#F4F3ED] text-[#1A312B] p-8 font-sans selection:bg-[#D6E2DB]">
      {/* Contenedor principal simulando el lienzo 1920x1080 */}
      <div className="max-w-[1800px] mx-auto bg-white rounded-3xl shadow-xl overflow-hidden border border-stone-200 flex flex-col">
        
        {/* Header del Style Tile */}
        <header className="bg-[#1A312B] text-white p-8 flex justify-between items-center shrink-0">
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-[#F4F3ED]">Style Tile: Habit & Alarm App</h1>
            <p className="text-[#9CB8AA] mt-2 text-sm uppercase tracking-widest">Definición Visual • Proyecto de Diseño UI</p>
          </div>
          <div className="text-right">
            <p className="text-sm font-medium text-[#9CB8AA]">Resolución Objetivo: 1920x1080px</p>
          </div>
        </header>

        {/* Grid de contenido */}
        <div className="flex-1 p-8 grid grid-cols-12 gap-8">
          
          {/* Columna Izquierda: Conceptos, Colores, Iconos */}
          <div className="col-span-12 lg:col-span-4 space-y-8">
            
            {/* Nube de Conceptos */}
            <section className="bg-stone-50 p-6 rounded-2xl border border-stone-200">
              <h2 className="text-lg font-bold mb-4 flex items-center gap-2 text-[#1A312B]">
                <span className="w-2 h-6 bg-[#507263] rounded-full"></span>
                Nube de Conceptos
              </h2>
              <div className="flex flex-wrap gap-2">
                {['Claridad', 'Calma', 'Hábito', 'Salud', 'Organización', 'Fricción Cero', 'Motivación', 'Rutina Positiva'].map(concept => (
                  <span key={concept} className="px-4 py-2 bg-white rounded-full text-sm font-medium text-[#4A5D54] shadow-sm border border-stone-200">
                    {concept}
                  </span>
                ))}
              </div>
            </section>

            {/* Paleta de Colores Simplificada */}
            <section className="bg-stone-50 p-6 rounded-2xl border border-stone-200">
              <h2 className="text-lg font-bold mb-6 flex items-center gap-2 text-[#1A312B]">
                <span className="w-2 h-6 bg-[#507263] rounded-full"></span>
                Sistema de Colores
              </h2>
              
              <div className="space-y-6">
                
                {/* Primary Scale */}
                <div>
                  <div className="flex justify-between items-end mb-2">
                    <h3 className="text-sm font-semibold text-[#1A312B]">Color Primario (Salvia)</h3>
                    <span className="text-[10px] text-[#788C83]">Marca • Botones • Acciones</span>
                  </div>
                  <div className="flex w-full h-12 rounded-xl overflow-hidden shadow-sm border border-stone-200">
                    <div className="flex-1 bg-[#D6E2DB] flex items-end justify-center pb-1"><span className="text-[9px] text-[#507263] font-bold">100</span></div>
                    <div className="flex-1 bg-[#9CB8AA] flex items-end justify-center pb-1"><span className="text-[9px] text-[#1A312B] font-bold">300</span></div>
                    <div className="flex-1 bg-[#507263] flex items-end justify-center pb-1 relative"><span className="absolute top-1 text-[9px] text-white/70 font-bold uppercase tracking-widest">Base</span><span className="text-[9px] text-white font-bold">500</span></div>
                    <div className="flex-1 bg-[#2D453A] flex items-end justify-center pb-1"><span className="text-[9px] text-white font-bold">700</span></div>
                  </div>
                  <div className="flex w-full mt-1 text-[9px] text-[#788C83] font-mono text-center">
                    <div className="flex-1">#D6E2DB</div>
                    <div className="flex-1">#9CB8AA</div>
                    <div className="flex-1 font-bold text-[#507263]">#507263</div>
                    <div className="flex-1">#2D453A</div>
                  </div>
                </div>

                {/* Secondary Scale */}
                <div>
                  <div className="flex justify-between items-end mb-2">
                    <h3 className="text-sm font-semibold text-[#1A312B]">Color Secundario (Arcilla)</h3>
                    <span className="text-[10px] text-[#788C83]">Mañana • Destacados suaves</span>
                  </div>
                  <div className="flex w-full h-12 rounded-xl overflow-hidden shadow-sm border border-stone-200">
                    <div className="flex-1 bg-[#FDF6F0] flex items-end justify-center pb-1"><span className="text-[9px] text-[#DCA47C] font-bold">100</span></div>
                    <div className="flex-1 bg-[#F2DAC8] flex items-end justify-center pb-1"><span className="text-[9px] text-[#7A4A28] font-bold">300</span></div>
                    <div className="flex-1 bg-[#DCA47C] flex items-end justify-center pb-1 relative"><span className="absolute top-1 text-[9px] text-white/80 font-bold uppercase tracking-widest">Base</span><span className="text-[9px] text-white font-bold">500</span></div>
                    <div className="flex-1 bg-[#B5774A] flex items-end justify-center pb-1"><span className="text-[9px] text-white font-bold">700</span></div>
                  </div>
                  <div className="flex w-full mt-1 text-[9px] text-[#788C83] font-mono text-center">
                    <div className="flex-1">#FDF6F0</div>
                    <div className="flex-1">#F2DAC8</div>
                    <div className="flex-1 font-bold text-[#DCA47C]">#DCA47C</div>
                    <div className="flex-1">#B5774A</div>
                  </div>
                </div>

                {/* Text & Background Scale */}
                <div>
                  <div className="flex justify-between items-end mb-2">
                    <h3 className="text-sm font-semibold text-[#1A312B]">Textos y Fondos</h3>
                    <span className="text-[10px] text-[#788C83]">Lectura • Superficies</span>
                  </div>
                  <div className="flex w-full h-12 rounded-xl overflow-hidden shadow-sm border border-stone-200">
                    <div className="flex-1 bg-[#FFFFFF] border-r border-stone-100 flex items-end justify-center pb-1 relative"><span className="absolute top-1 text-[9px] text-[#788C83] font-bold uppercase tracking-widest">Cards</span></div>
                    <div className="flex-1 bg-[#F4F3ED] flex items-end justify-center pb-1 relative"><span className="absolute top-1 text-[9px] text-[#788C83] font-bold uppercase tracking-widest">Fondo App</span></div>
                    <div className="flex-1 bg-[#E1DFD9] flex items-end justify-center pb-1 relative"><span className="absolute top-1 text-[9px] text-[#788C83] font-bold uppercase tracking-widest">Bordes</span></div>
                    <div className="flex-1 bg-[#4A5D54] flex items-end justify-center pb-1 relative"><span className="absolute top-1 text-[9px] text-white/70 font-bold uppercase tracking-widest">Subtítulo</span></div>
                    <div className="flex-1 bg-[#1A312B] flex items-end justify-center pb-1 relative"><span className="absolute top-1 text-[9px] text-[#9CB8AA] font-bold uppercase tracking-widest">Letra</span></div>
                  </div>
                  <div className="flex w-full mt-1 text-[9px] text-[#788C83] font-mono text-center">
                    <div className="flex-1">#FFFFFF</div>
                    <div className="flex-1">#F4F3ED</div>
                    <div className="flex-1">#E1DFD9</div>
                    <div className="flex-1">#4A5D54</div>
                    <div className="flex-1 font-bold text-[#1A312B]">#1A312B</div>
                  </div>
                </div>

              </div>
            </section>

            {/* Iconografía */}
            <section className="bg-stone-50 p-6 rounded-2xl border border-stone-200">
              <h2 className="text-lg font-bold mb-4 flex items-center gap-2 text-[#1A312B]">
                <span className="w-2 h-6 bg-[#507263] rounded-full"></span>
                Iconografía (Estilo de línea)
              </h2>
              <p className="text-xs text-[#788C83] mb-4">Tonos pasteles y apacibles para clasificar sin saturar la vista.</p>
              <div className="grid grid-cols-5 gap-4">
                <div className="flex flex-col items-center gap-1"><div className="p-3 bg-[#E8F0F2] text-[#6295A2] rounded-xl"><Droplet size={24} /></div><span className="text-[10px]">Agua</span></div>
                <div className="flex flex-col items-center gap-1"><div className="p-3 bg-[#FDF0F0] text-[#C87A7A] rounded-xl"><Pill size={24} /></div><span className="text-[10px]">Med</span></div>
                <div className="flex flex-col items-center gap-1"><div className="p-3 bg-[#F2F6ED] text-[#749C75] rounded-xl"><Leaf size={24} /></div><span className="text-[10px]">Plantas</span></div>
                <div className="flex flex-col items-center gap-1"><div className="p-3 bg-[#FDF6F0] text-[#DCA47C] rounded-xl"><Home size={24} /></div><span className="text-[10px]">Hogar</span></div>
                <div className="flex flex-col items-center gap-1"><div className="p-3 bg-[#F4F2F4] text-[#9B8B9B] rounded-xl"><BookOpen size={24} /></div><span className="text-[10px]">Leer</span></div>
                <div className="flex flex-col items-center gap-1"><div className="p-3 bg-[#E1DFD9] text-[#788C83] rounded-xl"><Trash2 size={24} /></div><span className="text-[10px]">Basura</span></div>
                <div className="flex flex-col items-center gap-1"><div className="p-3 bg-[#FDF9ED] text-[#E8C872] rounded-xl"><Sun size={24} /></div><span className="text-[10px]">Mañana</span></div>
                <div className="flex flex-col items-center gap-1"><div className="p-3 bg-[#D6E2DB] text-[#507263] rounded-xl"><Mic size={24} /></div><span className="text-[10px]">Voz</span></div>
                <div className="flex flex-col items-center gap-1"><div className="p-3 bg-[#FDF0F0] text-[#C87A7A] rounded-xl"><MapPin size={24} /></div><span className="text-[10px]">Ubic.</span></div>
                <div className="flex flex-col items-center gap-1"><div className="p-3 bg-[#F2F6ED] text-[#749C75] rounded-xl"><CheckCircle2 size={24} /></div><span className="text-[10px]">Hecho</span></div>
              </div>
            </section>

          </div>

          {/* Columna Central: Tipografía e Ilustraciones */}
          <div className="col-span-12 lg:col-span-4 space-y-8">
            
            {/* Jerarquía de Textos */}
            <section className="bg-stone-50 p-6 rounded-2xl border border-stone-200">
              <h2 className="text-lg font-bold mb-6 flex items-center gap-2 text-[#1A312B]">
                <span className="w-2 h-6 bg-[#507263] rounded-full"></span>
                Jerarquía de Textos (Inter / Poppins)
              </h2>
              
              <div className="space-y-6">
                <div>
                  <p className="text-xs text-[#788C83] mb-1">H1 - Título de Pantalla (32px, Bold) - <strong className="text-[#1A312B]">Color Letra Principal</strong></p>
                  <h1 className="text-3xl font-bold text-[#1A312B]">07:30 PM</h1>
                </div>
                
                <div>
                  <p className="text-xs text-[#788C83] mb-1">H2 - Títulos de Sección (24px, SemiBold)</p>
                  <h2 className="text-2xl font-semibold text-[#1A312B]">Rutina Mañana</h2>
                </div>
                
                <div>
                  <p className="text-xs text-[#788C83] mb-1">H3 - Nombres de Alarma / Tareas (18px, Medium)</p>
                  <h3 className="text-lg font-medium text-[#1A312B]">Purificar agua</h3>
                </div>
                
                <div>
                  <p className="text-xs text-[#788C83] mb-1">Body - Descripción y Detalles (14px, Regular) - <strong className="text-[#4A5D54]">Color Subtítulo</strong></p>
                  <p className="text-sm text-[#4A5D54]">L-V • Sonando hace: 00:42</p>
                </div>

                <div>
                  <p className="text-xs text-[#788C83] mb-1">Etiquetas / Tags (12px, Medium)</p>
                  <div className="flex gap-2">
                    <span className="px-2 py-1 bg-[#D6E2DB] text-[#2D453A] border border-[#9CB8AA] text-xs font-medium rounded-md">Salud</span>
                    <span className="px-2 py-1 bg-[#FDF6F0] text-[#7A4A28] border border-[#F2DAC8] text-xs font-medium rounded-md">Hogar</span>
                  </div>
                </div>
              </div>
            </section>

            {/* Estilo Visual: Vectores y Texturas */}
            <section className="bg-stone-50 p-6 rounded-2xl border border-stone-200 h-[380px]">
              <h2 className="text-lg font-bold mb-4 flex items-center gap-2 text-[#1A312B]">
                <span className="w-2 h-6 bg-[#507263] rounded-full"></span>
                Estilo Visual (Vectores & Texturas)
              </h2>
              <div className="space-y-4">
                <p className="text-sm text-[#4A5D54]"><strong>Decisión:</strong> Uso de Soft UI, bordes muy redondeados y sombras sutiles cálidas para indicar jerarquía, evitando la apariencia "clínica".</p>
                
                {/* Ejemplo visual del estilo de ilustración/vector */}
                <div className="w-full h-40 bg-gradient-to-br from-[#D6E2DB] to-white rounded-2xl border border-[#9CB8AA] flex items-center justify-center relative overflow-hidden shadow-inner">
                   {/* Elementos vectoriales abstractos */}
                   <div className="absolute -right-6 -top-6 w-24 h-24 bg-[#9CB8AA] rounded-full mix-blend-multiply filter blur-xl opacity-60"></div>
                   <div className="absolute -left-6 -bottom-6 w-24 h-24 bg-[#DCA47C] rounded-full mix-blend-multiply filter blur-xl opacity-40"></div>
                   
                   <div className="relative z-10 bg-white/90 backdrop-blur-sm p-4 rounded-xl border border-white shadow-md flex items-center gap-3">
                     <div className="w-10 h-10 bg-[#507263] rounded-full flex items-center justify-center text-white shadow-sm">
                       <Mic size={20} />
                     </div>
                     <div>
                       <div className="h-2 w-16 bg-[#E1DFD9] rounded-full mb-2"></div>
                       <div className="h-2 w-24 bg-[#F4F3ED] rounded-full"></div>
                     </div>
                   </div>
                </div>
                <p className="text-xs text-center text-[#788C83]">Concepto de "Glassmorphism" cálido y sutil.</p>
              </div>
            </section>

          </div>

          {/* Columna Derecha: Controles y Componentes */}
          <div className="col-span-12 lg:col-span-4 space-y-8">
            
            {/* Controles Principales (Estados) */}
            <section className="bg-stone-50 p-6 rounded-2xl border border-stone-200">
              <h2 className="text-lg font-bold mb-6 flex items-center gap-2 text-[#1A312B]">
                <span className="w-2 h-6 bg-[#507263] rounded-full"></span>
                Controles (3 Estados Mínimo)
              </h2>
              
              {/* Botones */}
              <div className="mb-6">
                <h3 className="text-sm font-semibold text-[#4A5D54] mb-3">Botón Primario</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-[#788C83] w-20">Default</span>
                    <button className="flex-1 bg-[#507263] text-white py-2 px-4 rounded-xl font-medium shadow-sm shadow-[#D6E2DB]">Guardar</button>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-[#788C83] w-20">Hover/Active</span>
                    <button className="flex-1 bg-[#2D453A] text-white py-2 px-4 rounded-xl font-medium shadow-inner transform scale-[0.98] transition-transform">Guardar</button>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-[#788C83] w-20">Disabled</span>
                    <button className="flex-1 bg-[#E1DFD9] text-[#788C83] py-2 px-4 rounded-xl font-medium cursor-not-allowed">Guardar</button>
                  </div>
                </div>
              </div>

              {/* Toggles */}
              <div className="mb-6 border-t border-stone-200 pt-6">
                <h3 className="text-sm font-semibold text-[#4A5D54] mb-3">Toggle Switch (3 Estados)</h3>
                <div className="flex gap-6">
                  <div className="flex flex-col items-center gap-2">
                    <span className="text-[10px] text-[#788C83] font-medium uppercase tracking-wider">Activo (ON)</span>
                    <div className="w-12 h-6 bg-[#507263] rounded-full relative shadow-inner">
                      <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full shadow-sm"></div>
                    </div>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <span className="text-[10px] text-[#507263] font-medium uppercase tracking-wider">Presionado</span>
                    <div className="w-12 h-6 bg-[#9CB8AA] rounded-full relative shadow-inner opacity-80">
                      <div className="absolute right-2 top-1 w-4 h-4 bg-white rounded-full shadow-sm scale-95"></div>
                    </div>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <span className="text-[10px] text-[#788C83] font-medium uppercase tracking-wider">Inactivo (OFF)</span>
                    <div className="w-12 h-6 bg-[#E1DFD9] rounded-full relative shadow-inner border border-stone-300">
                      <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full shadow-sm"></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Iconos Interactivos (Ej: Micrófono) */}
              <div className="mb-6 border-t border-stone-200 pt-6">
                <h3 className="text-sm font-semibold text-[#4A5D54] mb-3">Íconos de Acción (3 Estados)</h3>
                <div className="flex justify-between items-center bg-white p-4 rounded-2xl border border-stone-100 shadow-sm">
                  
                  {/* Estado: Desactivado / Reposo */}
                  <div className="flex flex-col items-center gap-2">
                    <div className="w-14 h-14 rounded-full bg-[#F4F3ED] border border-[#E1DFD9] flex items-center justify-center text-[#788C83] transition-colors">
                      <Mic size={24} />
                    </div>
                    <span className="text-xs text-[#788C83] font-medium">Reposo</span>
                  </div>

                  {/* Estado: Presionado / Transición */}
                  <div className="flex flex-col items-center gap-2">
                    <div className="w-14 h-14 rounded-full bg-[#D6E2DB] text-[#507263] border border-[#9CB8AA] flex items-center justify-center transition-colors">
                      <Mic size={24} />
                    </div>
                    <span className="text-xs text-[#507263] font-medium">Presionado</span>
                  </div>

                  {/* Estado: Activo / Confirmado */}
                  <div className="flex flex-col items-center gap-2">
                    <div className="w-14 h-14 rounded-full bg-[#507263] text-white flex items-center justify-center shadow-md shadow-[#D6E2DB] transform scale-105">
                      <Mic size={24} />
                    </div>
                    <span className="text-xs text-[#507263] font-medium">Activo</span>
                  </div>

                </div>
              </div>

              {/* Íconos de Navegación (Navbar) */}
              <div className="mb-6 border-t border-stone-200 pt-6">
                <h3 className="text-sm font-semibold text-[#4A5D54] mb-3">Navegación / Menú (3 Estados)</h3>
                <div className="flex justify-between items-center bg-white p-4 rounded-2xl border border-stone-100 shadow-sm">
                  
                  {/* Estado: Inactivo */}
                  <div className="flex flex-col items-center gap-1 text-[#788C83]">
                    <Home size={24} strokeWidth={1.5} />
                    <span className="text-[10px] font-medium">Inactivo</span>
                  </div>

                  {/* Estado: Hover / Tap */}
                  <div className="flex flex-col items-center gap-1 text-[#4A5D54] bg-[#F4F3ED] px-4 py-1 rounded-xl">
                    <Home size={24} strokeWidth={2} />
                    <span className="text-[10px] font-medium">Hover/Tap</span>
                  </div>

                  {/* Estado: Activo */}
                  <div className="flex flex-col items-center gap-1 text-[#507263] relative">
                    <Home size={24} strokeWidth={2.5} />
                    <span className="text-[10px] font-bold">Activo</span>
                    <div className="absolute -bottom-3 w-1.5 h-1.5 bg-[#507263] rounded-full"></div>
                  </div>

                </div>
              </div>

              {/* Tarjeta de Alarma */}
              <div className="border-t border-stone-200 pt-6">
                <h3 className="text-sm font-semibold text-[#4A5D54] mb-3">Tarjeta de Elemento (Alarma)</h3>
                <div className="space-y-4">
                  
                  {/* Estado Activo */}
                  <div>
                    <span className="text-xs text-[#788C83] block mb-1">Estado: Normal / Activa</span>
                    <div className="bg-white p-4 rounded-2xl border border-stone-100 shadow-sm flex justify-between items-center">
                      <div>
                        <h4 className="font-medium text-[#1A312B] flex items-center gap-2">
                          Purificar agua <Droplet size={16} className="text-[#6295A2]"/>
                        </h4>
                        <div className="flex items-center gap-2 mt-1 text-xs text-[#4A5D54]">
                          <span className="flex items-center gap-1"><Clock size={12}/> 7:30 pm</span>
                          <span>• Diario</span>
                        </div>
                      </div>
                      <div className="w-10 h-5 bg-[#507263] rounded-full relative shadow-inner">
                        <div className="absolute right-1 top-1 w-3 h-3 bg-white rounded-full shadow-sm"></div>
                      </div>
                    </div>
                  </div>

                  {/* Estado Completado/Inactivo */}
                  <div>
                    <span className="text-xs text-[#788C83] block mb-1">Estado: Inactiva / Hecho</span>
                    <div className="bg-[#F4F3ED] p-4 rounded-2xl border border-[#E1DFD9] flex justify-between items-center">
                      <div>
                        <h4 className="font-medium text-[#788C83] line-through">Sacar basura</h4>
                        <div className="flex items-center gap-2 mt-1 text-xs text-[#788C83]">
                          <span>7:00 pm</span>
                        </div>
                      </div>
                      <div className="w-10 h-5 bg-[#E1DFD9] rounded-full relative border border-stone-300">
                        <div className="absolute left-1 top-1 w-3 h-3 bg-white rounded-full"></div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>

            </section>
          </div>
        </div>
        
        {/* Footer Navbar simulado */}
        <div className="bg-white border-t border-stone-200 p-4 flex justify-around items-center shrink-0 rounded-b-3xl">
          <div className="flex flex-col items-center gap-1 text-[#507263] relative">
            <Home size={24} strokeWidth={2.5} />
            <span className="text-xs font-bold">Home</span>
            <div className="absolute -bottom-2 w-1.5 h-1.5 bg-[#507263] rounded-full"></div>
          </div>
          <div className="flex flex-col items-center gap-1 text-[#788C83] hover:text-[#4A5D54] transition-colors cursor-pointer">
            <Plus size={24} strokeWidth={1.5} />
            <span className="text-xs font-medium">Crear</span>
          </div>
          <div className="flex flex-col items-center gap-1 text-[#788C83] hover:text-[#4A5D54] transition-colors cursor-pointer">
            <Puzzle size={24} strokeWidth={1.5} />
            <span className="text-xs font-medium">Plantillas</span>
          </div>
          <div className="flex flex-col items-center gap-1 text-[#788C83] hover:text-[#4A5D54] transition-colors cursor-pointer">
            <Settings size={24} strokeWidth={1.5} />
            <span className="text-xs font-medium">Ajustes</span>
          </div>
        </div>

      </div>
    </div>
  );
};

export default StyleTile;