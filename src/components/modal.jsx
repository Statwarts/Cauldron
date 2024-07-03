import React from "react";
import { motion } from "framer-motion";

const Modal = React.forwardRef(({ isModalVisible, onClose, text }, ref) => {
  if (!isModalVisible) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <motion.div
        ref={ref}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0 }}
        transition={{ duration: 0.3 }}
        className="bg-black p-6 rounded-lg"
      >
        <h2 className="text-2xl mb-4 text-white">{text}</h2>
        <button
          onClick={onClose}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Close
        </button>
      </motion.div>
    </div>
  );
});

const MotionModal = motion(Modal);

export default MotionModal;
