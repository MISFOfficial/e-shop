"use client";
import { motion } from "framer-motion";

const RootLoading = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center ">
            {/* Animated Spinner */}
            <motion.div
                className="w-16 h-16 border-4 border-yellow-400 border-t-transparent rounded-full"
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
            />

            {/* Text */}
            <motion.p
                className="mt-6 text-white text-lg font-semibold tracking-wide"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ repeat: Infinity, duration: 1.5, repeatType: "reverse" }}
            >
                Loading, please wait...
            </motion.p>
        </div>
    );
};

export default RootLoading;