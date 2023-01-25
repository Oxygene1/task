import React, { InputHTMLAttributes } from "react";

type SearchInputProps = InputHTMLAttributes<HTMLInputElement> & {
  name: string;
};

export const SearchInput = (props: SearchInputProps) => {
  return (
    <div className="ring-green-600 bg-green-400 p-5">
      <input
        className="ring-green-400 w-[20vw] rounded-xl outline-none border-spacing-2 p-3 input input-bordered max-w-xs"
        type="text"
        {...props}
      />
    </div>
  );
};
