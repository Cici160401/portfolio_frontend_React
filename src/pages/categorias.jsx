import { motion } from 'framer-motion';

export default function Categories() {
  return (
    <motion.section
      className="text-center mt-10"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
    <div className="text-center">
      <h2 className="text-3xl font-bold text-primary mb-4">Las categorías</h2>
      <p className="text-gray-700">Las categorías que manejo 🎨</p>      
    </div>
    <div className="shadow-cute">🌸</div>
    </motion.section>
  );
}