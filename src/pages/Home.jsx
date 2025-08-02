import { motion } from 'framer-motion';


function Home() {
  return (
    <motion.section
      className="text-center mt-10"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
    <main className="flex flex-col items-center justify-center h-[80vh] text-center px-4">
      <h2 className="text-4xl font-bold text-slate-800 mb-4">Welcome to my portfolio!</h2>
      <p className="text-gray-600 text-lg max-w-xl">
        Aquí verás mis proyectos y más detalles sobre mí. ¡Gracias por visitar!
      </p>
      <div className="shadow-cute">🌸</div>
    </main>
    </motion.section>
  );
}
export default Home;