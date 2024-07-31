import React from "react";
import { IoMdWarning } from "react-icons/io";

interface FormErrorProps {
  message: string;
}

export default function FormError({ message }: FormErrorProps) {
  return (
    message && (
      <div className="w-full rounded-md flex py-2 items-center justify-center gap-2 text-red-500 border border-red-500">
        <IoMdWarning /> {message}
      </div>
    )
  );
}
