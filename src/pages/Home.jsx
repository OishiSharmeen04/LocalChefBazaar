import { motion } from "framer-motion";

const Home = () => {
  return (
    <div className="p-6">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center"
      >
        <h1 className="text-4xl font-bold mb-4">
          Fresh Home Cooked Meals
        </h1>
        <p>Order from local chefs near you</p>
      </motion.div>
    </div>
  );
};

export default Home;
