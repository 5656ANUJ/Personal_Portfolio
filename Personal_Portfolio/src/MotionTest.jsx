import { motion } from "framer-motion";

export default function MotionTest() {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-900">
      <motion.div
        className="w-20 h-20 bg-pink-500 rounded-xl"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        whileHover={{ scale: 1.2, rotate: 10 }}
      />
    </div>
  );
}
