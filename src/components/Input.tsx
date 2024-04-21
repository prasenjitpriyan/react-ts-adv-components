import { forwardRef, type ComponentPropsWithoutRef } from "react";

type InputProps = {
  label: string;
  id: string;
} & ComponentPropsWithoutRef<"input">;

const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
  { label, id, ...props },
  ref
) {
  return (
    <p className="flex flex-col">
      <label htmlFor={id} className="text-gray-600 text-sm ">
        {label}
      </label>
      <input
        id={id}
        {...props}
        ref={ref}
        name={id}
        className="placeholder-blue-100 text-sm border-2 focus:border-[#3F9AED] outline-none px-4 py-1.5 rounded-md bg-white"
      />
    </p>
  );
});

export default Input;
