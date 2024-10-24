// pages/index.js
// pages/index.js
export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="text-center p-6 max-w-md bg-white rounded-lg shadow-lg">
        {/* Imagen */}
        <img
          src="\logo-uai.jpg"  
          className="w-full h-auto rounded-t-lg mb-4"
        />
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          ¡Bienvenido a la Landing Page de la actividad 5!
        </h1>
        <p className="text-gray-600 mb-6">
          Esta pagina fue creada utilizando Tailwind
        </p>
        <button
          className="transition ease-in-out delay-150 bg-blue-600 text-white rounded-lg hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 px-6 py-3"
        >
          Mira como cambio de color
        </button>
      </div>
    </div>
  );
}
