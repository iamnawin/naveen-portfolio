import { motion } from 'framer-motion';
import { Link } from 'react-scroll';

function Navbar() {
  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 70, damping: 10 }}
      className="fixed top-0 left-0 w-full bg-black text-green-400 shadow-lg z-50"
      style={{
        borderBottom: '3px solid #39ff14',
        fontFamily: '"Press Start 2P", sans-serif',
      }}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-3">
        <h1
          className="text-xl font-bold"
          style={{
            color: '#39ff14',
            textShadow: '3px 3px #ff6ec7',
          }}
        >
          Naveen&apos;s Portfolio
        </h1>
        <ul className="flex space-x-6">
          <motion.li whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
            <Link
              to="home"
              smooth={true}
              duration={500}
              activeClass="text-pink-400 font-bold"
              className="cursor-pointer hover:text-blue-400"
              style={{ color: '#00ffff', textShadow: '1px 1px #ff6ec7' }}
            >
              Home
            </Link>
          </motion.li>
          <motion.li whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
            <Link
              to="about"
              smooth={true}
              duration={500}
              activeClass="text-pink-400 font-bold"
              className="cursor-pointer hover:text-blue-400"
              style={{ color: '#00ffff', textShadow: '1px 1px #ff6ec7' }}
            >
              About
            </Link>
          </motion.li>
          <motion.li whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
            <Link
              to="projects"
              smooth={true}
              duration={500}
              activeClass="text-pink-400 font-bold"
              className="cursor-pointer hover:text-blue-400"
              style={{ color: '#00ffff', textShadow: '1px 1px #ff6ec7' }}
            >
              Projects
            </Link>
          </motion.li>
          <motion.li whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              activeClass="text-pink-400 font-bold"
              className="cursor-pointer hover:text-blue-400"
              style={{ color: '#00ffff', textShadow: '1px 1px #ff6ec7' }}
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
