import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedin, faFacebook, faGithub } from '@fortawesome/free-brands-svg-icons';

function App() {
  return (
    <div className="font-sans">
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
          <img src="/profile-pic.png" 
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
    </div>
  );
}

function SocialMediaButtons() {
  return (
    <motion.div
      className="flex justify-center mt-6" // Flex container for horizontal alignment
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, delay: 0.6 }}
    >
      {/* GitHub */}
      <a
        href="https://github.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-300 hover:text-yellow-400 transition duration-300 mx-3"
      >
        <FontAwesomeIcon icon={faGithub} size="2x" />
      </a>

      {/* LinkedIn */}
      <a
        href="https://linkedin.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-300 hover:text-yellow-400 transition duration-300 mx-3"
      >
        <FontAwesomeIcon icon={faLinkedin} size="2x" />
      </a>

      {/* Instagram */}
      <a
        href="https://instagram.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-300 hover:text-yellow-400 transition duration-300 mx-3"
      >
        <FontAwesomeIcon icon={faInstagram} size="2x" />
      </a>

      {/* Facebook */}
      <a
        href="https://facebook.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-300 hover:text-yellow-400 transition duration-300 mx-3"
      >
        <FontAwesomeIcon icon={faFacebook} size="2x" />
      </a>
    </motion.div>
  );
}

export default App;
