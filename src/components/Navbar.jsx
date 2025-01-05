import { motion } from 'framer-motion';
import { Link } from 'react-scroll';

function Navbar() {
  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 70, damping: 10 }}
      className="fixed top-0 left-0 w-full bg-gray-800 text-white shadow-md z-50"
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-3">
        <h1 className="text-xl font-bold">Naveen&apos;s Portfolio</h1>
        <ul className="flex space-x-6">
          <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <Link
              to="home"
              smooth={true}
              duration={500}
              activeClass="text-blue-400 font-bold"
              className="hover:text-blue-400 cursor-pointer"
            >
              Home
            </Link>
          </motion.li>
          <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <Link
              to="about"
              smooth={true}
              duration={500}
              activeClass="text-blue-400 font-bold"
              className="hover:text-blue-400 cursor-pointer"
            >
              About
            </Link>
          </motion.li>
          <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <Link
              to="projects"
              smooth={true}
              duration={500}
              activeClass="text-blue-400 font-bold"
              className="hover:text-blue-400 cursor-pointer"
            >
              Projects
            </Link>
          </motion.li>
          <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              activeClass="text-blue-400 font-bold"
              className="hover:text-blue-400 cursor-pointer"
            >
              Contact
            </Link>
          </motion.li>
        </ul>
      </div>
    </motion.nav>
  );
}

export default Navbar;
