import React from "react";
import Select from "react-select";
import { Dispatch, SetStateAction } from "react";
import makeAnimated from "react-select/animated";
function Dropdown(props: SelectProps) {
  const animatedComponents = makeAnimated();
  const options = props.categories.map((cat) => {
    return { value: cat, label: cat };
  });
  return (
    <>
      <Select
        closeMenuOnSelect={true}
        components={animatedComponents}
        defaultValue={{ value: "smartphones", label: "smartphones" }}
        options={options}
        onChange={(selectedoption: any) => {
          props.setSelectedCategory(selectedoption.label);
          props.categoryChange();
        }}
      />
    </>
  );
}

interface SelectProps {
  categories: [String];
  setSelectedCategory: Dispatch<SetStateAction<String>>;
  categoryChange: Function;
}

// interface OptionType {
//   value: String;
//   label: String;
// }
export default Dropdown;
