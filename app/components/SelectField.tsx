"use client";
import React from "react";
import {
  FieldValues,
  UseControllerProps,
  useController,
} from "react-hook-form";
import Select from "react-select";
import "./SelectFields.css";

const SelectField = <T extends FieldValues>(
  props: UseControllerProps<T> & {
    options: { value: string; label: string }[];
    instanceId?: string;
    placeholder?: string;
  }
) => {
  const { options, instanceId, placeholder, ...controllerprops } = props;
  const {
    field: { onChange },
  } = useController(controllerprops);
  return (
    <Select
      onChange={(newValue) => onChange(newValue?.value)}
      options={options}
      instanceId={instanceId}
      placeholder={placeholder}
    />
  );
};

export default SelectField;
