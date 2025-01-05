import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      {/* Navbar */}
      <Navbar />

      {/* Sections */}
      <section
        id="home"
        className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-100 to-blue-300 text-center"
      >
        <h1 className="text-5xl font-extrabold text-gray-800">Welcome to My Portfolio!</h1>
        <p className="text-lg mt-4 text-gray-700">Building beautiful web experiences</p>
      </section>

      <section
        id="about"
        className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-10"
      >
        <h2 className="text-4xl font-bold text-gray-800 mb-4">About Me</h2>
        <p className="text-lg text-gray-600">
          I am a passionate developer building modern applications.
        </p>
      </section>

      <section id="projects" className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-4">
  <h2 className="text-3xl font-bold mb-8">My Projects</h2>
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
    {/* Project 1 */}
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
      <img src="https://via.placeholder.com/300" alt="Project 1" className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-bold">Project 1</h3>
        <p className="text-gray-600">A brief description of your project goes here.</p>
      </div>
    </div>

    {/* Project 2 */}
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
      <img src="https://via.placeholder.com/300" alt="Project 2" className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-bold">Project 2</h3>
        <p className="text-gray-600">A brief description of your project goes here.</p>
      </div>
    </div>

    {/* Project 3 */}
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
      <img src="https://via.placeholder.com/300" alt="Project 3" className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-bold">Project 3</h3>
        <p className="text-gray-600">A brief description of your project goes here.</p>
      </div>
    </div>
  </div>
</section>


      <section
        id="contact"
        className="min-h-screen flex flex-col items-center justify-center bg-blue-100 py-20"
      >
        <h2 className="text-4xl font-bold text-gray-800 mb-4">Contact</h2>
        <p className="text-lg text-gray-600">
          Feel free to reach out via email or social media.
        </p>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
