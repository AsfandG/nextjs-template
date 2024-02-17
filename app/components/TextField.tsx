import React, { InputHTMLAttributes, forwardRef } from "react";
import ErrorText from "./ErrorText";

type Props = Omit<InputHTMLAttributes<HTMLInputElement>, "className"> & {
  label: string;
  error?: string;
};

const TextField = forwardRef<HTMLInputElement, Props>(
  ({ label, error, ...inputParams }, ref) => {
    return (
      <>
        <label htmlFor="name">{label}</label>
        <input ref={ref} {...inputParams} />
        <ErrorText>{error}</ErrorText>
      </>
    );
  }
);

export default TextField;
