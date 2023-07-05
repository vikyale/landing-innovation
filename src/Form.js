
import logo from './static/logo_labentana.png';
import './App.css';
import './styles.css'; // Import the styles.css file

function Form() {
  return (

    <div className="bg-gray-100">
    <header className="bg-white py-8">
      <div className="container mx-auto flex items-center justify-between px-4">
        <img src="./static/logo_labentana.png" alt="Logo" className="w-12" />
        <nav className="text-gray-600">
          <a href="#" className="mr-4">Inicio</a>
          <a href="#" className="mr-4">Sobre Nosotros</a>
          <a href="#">Contáctanos</a>
        </nav>
      </div>
    </header>

    <main className="bg-gray-200 py-16">
      <div className="container mx-auto flex flex-col items-center justify-center px-4">
        <h1 className="text-4xl font-bold text-center mb-8">Hackaton Labentana 2023</h1>
        <p className="text-gray-700 text-lg text-center">¡Donde la creatividad y la innovación se juntan!</p>
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-3 mt-8 rounded">Quiero participar!</button>
      </div>
    </main>

    <footer className="bg-gray-800 py-4 text-white text-sm">
      <div className="container mx-auto flex items-center justify-between px-4">
        <p>&copy; 2023 Labentana Todos los derechos reservados.</p>
        <div>
          <a href="#" className="mr-4">Privacy Policy</a>
          <a href="#">Terms of Service</a>
        </div>
      </div>
    </footer>
  </div>
  );
}

export default Form;
