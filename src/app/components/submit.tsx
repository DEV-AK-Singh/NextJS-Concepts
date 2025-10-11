"use client";

import React from "react";
import { useFormStatus } from "react-dom";

export default function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded-2xl disabled:opacity-50"
    >
      {pending ? "Submitting..." : "Submit"}
    </button>
  );
}
