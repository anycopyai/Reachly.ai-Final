"use client";
import React from "react";
import { Controller, Control, RegisterOptions } from "react-hook-form";
import Select from "react-select";
import { Label } from "./lebel";
import classNames from "classnames";

// interface SelectInputProps {
//   control: Control;
//   name: string;
//   options: { label: string, value: string }[];
//   rules?: RegisterOptions;
//   defaultValue?: any;
//   isMulti?: boolean;
//   label: string;
//   errorText?: string;
//   isMandatory?: boolean;
//   controlClassName?: string;
// }

const SelectInput = ({
  control,
  name,
  options,
  rules,
  defaultValue,
  isMulti = false,
  label,
  errorText,
  isMandatory = false,
  controlClassName,
}) => {
  return (
    <Controller
      control={control ? control : undefined}
      name={name ?? "kjf"}
      rules={rules}
      defaultValue={defaultValue}
      render={({ field: { onChange, value, onBlur } }) => (
        <div className=" w-full">
          <Label label={label ?? ""}>
            {isMandatory && <small className="text-danger">*</small>}
          </Label>
          <Select
            onChange={(option) =>
              onChange(isMulti ? option?.map((o) => o.value) : option?.value)
            }
            options={options}
            isMulti={isMulti}
            value={
              isMulti
                ? options.filter((option) => value?.includes(option.value))
                : options.find((option) => option?.value === value)
            }
            onBlur={onBlur}
            // styling

            classNames={{
              control: (state) =>
                classNames(
                  " !border-[#D9D9D9]",
                  "hover:focus-within:!border-transparent focus-within:!border-[#2B3E9B] focus-within:text-[#151F4E] outline-none ",
                  "text-sm font-semibold !rounded-[2px] border-[1px] p-[3px]  ",
                  controlClassName
                ),
              indicatorSeparator: () => "hidden",
              indicatorsContainer: () => "cursor-pointer",
              menu: () => "!bg-[#F3F4F9]",
              singleValue: () => "!text-[currentColor]",
              option: (state) => {
                return classNames(
                  "!text-[#151F4E] hover:!bg-[#2B3E9B] hover:!text-white !bg-transparent"
                );
              },
            }}
          />
          {/* {errorText && <ErrorMessage errorText={errorText} />} */}
        </div>
      )}
    />
  );
};

export default SelectInput;
