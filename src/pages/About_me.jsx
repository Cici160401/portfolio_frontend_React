import { motion } from 'framer-motion';


function About_me() {
  return (
    <motion.section
      className="text-center mt-10"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
    <div className="text-center mt-20">
      <h1 className="text-3xl font-bold">Sobre mí</h1>
      <p className="mt-4">Soy desarrolladora apasionada por React y FastAPI 🚀</p>
    </div>
    </motion.section>
  );
}
export default About_me;