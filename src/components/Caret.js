import { motion } from 'framer-motion';

const Caret = () => {
  return (
    <motion.div
      aria-hidden={false}
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      exit={{ opacity: 1 }}
      transition={{ repeat: Infinity, duration: 0.8, ease: 'easeInOut' }}
      className={`inline-block bg-yellow-500 w-0.5 h-7 `}
    />
  );
};

export default Caret;
