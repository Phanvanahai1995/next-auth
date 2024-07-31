import React from "react";
import { IoMdDoneAll } from "react-icons/io";

interface FormSuccessProps {
  message: string;
}

export default function FormSuccess({ message }: FormSuccessProps) {
  return (
    message && (
      <div className="w-full rounded-md flex py-2 items-center justify-center gap-2 text-green-500 border border-green-500">
        <IoMdDoneAll /> {message}
      </div>
    )
  );
}
