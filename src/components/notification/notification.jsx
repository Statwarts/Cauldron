import { motion } from "framer-motion";

export default function Notification({ isModalVisible, text, textColor }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={isModalVisible ? { opacity: 1, y: 0 } : { y: 20, opacity: 0 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="absolute bottom-10 flex w-full items-center justify-center text-center"
    >
      <div
        className={`rounded-xl border border-[#232527] bg-[#121314b7] p-2 px-4`}
        style={{ color: textColor }}
      >
        {text}
      </div>
    </motion.div>
  );
}
