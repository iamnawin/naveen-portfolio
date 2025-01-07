import { motion } from 'framer-motion';
import profilePic from './assets/profile-pic.png';

function App() {
  return (
    <section className="min-h-screen flex flex-col md:flex-row items-center justify-between bg-gradient-to-b from-purple-900 to-purple-800 px-10">
      {/* Left Section */}
      <div className="text-white space-y-6 text-center md:text-left">
        <motion.h1
          className="text-6xl font-extrabold"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          &lt;Your Name /&gt;
        </motion.h1>
        <motion.p
          className="text-2xl font-medium"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          Full Stack Developer
        </motion.p>
        <motion.div
          className="flex justify-center md:justify-start space-x-6"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <a href="https://github.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github text-3xl hover:text-purple-300"></i>
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin text-3xl hover:text-purple-300"></i>
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram text-3xl hover:text-purple-300"></i>
          </a>
        </motion.div>
      </div>

      {/* Right Section */}
      <motion.div
        className="relative mt-10 md:mt-0"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.8 }}
      >
        <div className="w-96 h-96 bg-purple-700 rounded-full overflow-hidden shadow-2xl">
          <img
            src={profilePic}
            alt="Your profile"
            className="w-full h-full object-cover"
          />
        </div>
      </motion.div>
    </section>
  );
}

export default App;
