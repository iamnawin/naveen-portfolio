import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedin, faFacebook, faGithub } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-scroll';

// Navbar Component
function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-purple-800 text-white shadow-md z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        <h1 className="text-xl font-bold">Naveen-Portfolio</h1>
        <ul className="flex space-x-6">
          <li>
            <Link
              to="home"
              smooth={true}
              duration={500}
              className="hover:text-yellow-400 transition duration-300 cursor-pointer"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="about"
              smooth={true}
              duration={500}
              className="hover:text-yellow-400 transition duration-300 cursor-pointer"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="projects"
              smooth={true}
              duration={500}
              className="hover:text-yellow-400 transition duration-300 cursor-pointer"
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              className="hover:text-yellow-400 transition duration-300 cursor-pointer"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

// Main App Component
function App() {
  return (
    <div className="font-sans">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section
        id="home"
        className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-purple-900 to-purple-700 text-white px-6"
      >
        {/* Profile Picture */}
        <motion.div
          className="relative w-48 h-48 md:w-64 md:h-64 bg-purple-600 rounded-full overflow-hidden shadow-lg"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <img
            src={`${import.meta.env.BASE_URL}profile-pic.png`}
            alt="Your profile"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Name and Bio */}
        <motion.div
          className="text-center mt-6 space-y-4"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <h1 className="text-4xl font-bold">&lt;Naveen Tatikayala /&gt;</h1>
          <p className="text-xl font-medium">Salesforce Consultant Developer</p>
        </motion.div>

        {/* Social Media Buttons */}
        <SocialMediaButtons />
      </section>

      {/* About Section */}
      <section
        id="about"
        className="min-h-screen flex flex-col items-center justify-center bg-white text-black px-6"
      >
        <h2 className="text-3xl font-bold mb-4">About Me</h2>
        <p className="text-lg">This is the About section of the portfolio.</p>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className="min-h-screen flex flex-col items-center justify-center bg-gray-200 text-black px-6"
      >
        <h2 className="text-3xl font-bold mb-4">Projects</h2>
        <p className="text-lg">This is the Projects section of the portfolio.</p>
      </section>

      {/* Contact Section with Form */}
      <section
        id="contact"
        className="min-h-screen flex flex-col items-center justify-center bg-purple-700 text-white px-6"
      >
        <h2 className="text-3xl font-bold mb-4">Contact Me</h2>
        <form className="bg-white text-black p-6 rounded-lg shadow-lg max-w-md w-full">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
              Name
            </label>
            <input
              id="name"
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              rows="4"
              placeholder="Your Message"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-purple-800 text-white px-6 py-2 rounded-md hover:bg-purple-900 transition duration-300"
          >
            Send
          </button>
        </form>
      </section>
    </div>
  );
}

// Social Media Buttons Component
function SocialMediaButtons() {
  return (
    <motion.div
      className="flex justify-center mt-6 space-x-6"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, delay: 0.6 }}
    >
      {/* GitHub */}
      <a
        href="https://github.com/iamnawin"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-300 hover:text-yellow-400 transition duration-300"
      >
        <FontAwesomeIcon icon={faGithub} size="2x" />
      </a>

      {/* LinkedIn */}
      <a
        href="https://www.linkedin.com/in/naveen-tatikayala/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-300 hover:text-yellow-400 transition duration-300"
      >
        <FontAwesomeIcon icon={faLinkedin} size="2x" />
      </a>

      {/* Instagram */}
      <a
        href="https://instagram.com/navn_t"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-300 hover:text-yellow-400 transition duration-300"
      >
        <FontAwesomeIcon icon={faInstagram} size="2x" />
      </a>

      {/* Facebook */}
      <a
        href="https://facebook.com/your-profile"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-300 hover:text-yellow-400 transition duration-300"
      >
        <FontAwesomeIcon icon={faFacebook} size="2x" />
      </a>
    </motion.div>
  );
}

export default App;
