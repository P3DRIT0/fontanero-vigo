import React from 'react';
import { FaPhone } from 'react-icons/fa';
import { SITE_CONFIG } from '@/config/site'
export const FloatingCallButton: React.FC = () => {
  const phoneNumber = SITE_CONFIG.contact.phone.replace(/\s/g, '')

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <a
        href={`tel:${phoneNumber}`}
        className="flex items-center justify-center w-16 h-16 bg-blue-600 rounded-full shadow-lg hover:bg-blue-700 transition-colors "
        aria-label="Llamar"
      >
        <FaPhone className="text-white text-2xl" />
      </a>
    </div>
  );
};