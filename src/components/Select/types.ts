import { Option } from "@/models/types";

export type SelectProps = {
  onChange: (value: number) => void;
  label?: string;
  value?: number | null;
  options?: Array<Option>;
  placeholder?: string;
  required?: boolean;
  optionsIsLoading?: boolean;
  isDisabled?: boolean;
};
