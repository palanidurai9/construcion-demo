import { Phone, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export default function FloatingActionButtons() {
    return (
        <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-4">
            <motion.a
                href="https://wa.me/15551234567"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                whileHover={{ scale: 1.1 }}
                className="w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-shadow cursor-pointer"
                title="Chat on WhatsApp"
            >
                <MessageCircle className="h-7 w-7" />
            </motion.a>

            <motion.a
                href="tel:+15551234567"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.1 }}
                whileHover={{ scale: 1.1 }}
                className="w-14 h-14 bg-primary rounded-full flex items-center justify-center text-secondary shadow-lg hover:shadow-xl transition-shadow md:hidden cursor-pointer"
                title="Call Now"
            >
                <Phone className="h-6 w-6" />
            </motion.a>
        </div>
    );
}
