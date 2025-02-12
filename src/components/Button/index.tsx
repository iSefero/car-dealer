import { ButtonHTMLAttributes } from "react";

export default function Button(props: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      {...props}
      className={`text-center h-fit hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-50 py-2 px-4 rounded bg-blue-500 text-white w-fit ${props.className}`}
    >
      {props.children}
    </button>
  );
}
