import { motion } from "framer-motion";

export default function Notification({ isModalVisible, text, textColor }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={isModalVisible ? { opacity: 1, y: 0 } : { y: 20, opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="absolute bottom-10 flex w-full items-center justify-center text-center"
    >
      <div
        className={`w-60 rounded-2xl border-2 border-black p-2 ${textColor}`}
      >
        {text}
      </div>
    </motion.div>
  );
}
