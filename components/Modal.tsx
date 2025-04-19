"use client";
import { useEffect, ReactNode } from "react";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: ReactNode;
};

export default function Modal({ isOpen, onClose, title, children }: ModalProps) {
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleEsc);
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      window.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "auto";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    isOpen && <div className="fixed inset-0 bg-gray-700/90 z-50 flex justify-center items-center px-4">
      <div className="bg-white p-6 rounded-lg max-w-md w-full relative shadow-lg animate-fade-in-up">
        <button
          onClick={onClose}
          className="absolute top-2 right-3 text-gray-500 hover:text-gray-800 text-4xl"
        >
          &times;
        </button>
        {title && <h3 className="text-xl font-bold mb-4 text-blue-700">{title}</h3>}
        {children}
      </div>
    </div>
  );
}
