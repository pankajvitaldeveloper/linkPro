import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen mt-10 bg-gray-100 flex flex-col items-center justify-center px-6">
      {/* Animated Heading */}
      <motion.h1
        className="text-5xl font-extrabold text-gray-800 mb-6 text-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Welcome to <span className="text-blue-500">LinkPro</span>
      </motion.h1>

      {/* Subheading */}
      <motion.p
        className="text-lg text-gray-600 text-center max-w-2xl mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        Your one-stop solution for managing links, exploring AI tools, and building a career in MERN stack development. Empower your journey with cutting-edge resources and tools.
      </motion.p>

      {/* Call-to-Action Buttons */}
      <div className="flex space-x-4 mb-12">
        {/* <motion.a
          href="#features"
          className="px-6 py-3 bg-blue-500 text-white rounded-lg shadow-lg hover:bg-blue-600 transition"
          whileHover={{ scale: 1.1 }}
        >
          Explore Features
        </motion.a> */}
        <motion.a
          href="/career"
          className="px-6 py-3 bg-gray-800 text-white rounded-lg shadow-lg hover:bg-gray-900 transition"
          whileHover={{ scale: 1.1 }}
        >
          Build Your Career
        </motion.a>
      </div>

      {/* Section for Features */}
      <div id="features" className="mt-5 w-full">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">
          Why Choose <span className="text-blue-500">LinkPro</span>?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <motion.div
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition"
            whileHover={{ scale: 1.05 }}
          >
            <Link to="/ui">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">UI</h3>
              <p className="text-gray-600">
                Discover modern UI components and layouts to enhance your web applications.
              </p>
            </Link>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition"
            whileHover={{ scale: 1.05 }}
          >
            <Link to="/reactui">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">React UI</h3>
              <p className="text-gray-600">
                Explore React-based UI libraries and frameworks to build dynamic interfaces.
              </p>
            </Link>
          </motion.div>

          {/* Card 3 */}
          <motion.div
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition"
            whileHover={{ scale: 1.05 }}
          >
            <Link to="/command">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Command</h3>
              <p className="text-gray-600">
                Learn essential terminal commands to boost your productivity as a developer.
              </p>
            </Link>
          </motion.div>

          {/* Card 4 */}
          <motion.div
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition"
            whileHover={{ scale: 1.05 }}
          >
            <Link to="/career">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Career</h3>
              <p className="text-gray-600">
                Access resources and guidance to build a successful career in MERN stack development.
              </p>
            </Link>
          </motion.div>

          {/* Card 5 */}
          <motion.div
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition"
            whileHover={{ scale: 1.05 }}
          >
            <Link to="/ai">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">AI</h3>
              <p className="text-gray-600">
                Leverage AI-powered tools to enhance your development workflow and productivity.
              </p>
            </Link>
          </motion.div>

          {/* Card 6 */}
          <motion.div
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition"
            whileHover={{ scale: 1.05 }}
          >
            <Link to="/extention">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Extension</h3>
              <p className="text-gray-600">
                Discover browser extensions and tools to streamline your development process.
              </p>
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Home;