import type { UseFormRegisterReturn } from "react-hook-form";
import "./custom-input.css";

interface Props {
  type: string;
  label: string;
  placeholder?: string;
  refHtml: string;
  register?: UseFormRegisterReturn<string>;
}


const CustomInput = ({ label, refHtml, type, placeholder, register }: Props) => {


  return (
    <div className="custom-input">
      <label htmlFor={refHtml}>{label}</label>
      <input type={type} placeholder={placeholder} id={refHtml} {...register} />
    </div>
  )
}

export default CustomInput;