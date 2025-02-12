import { SelectProps } from "./types";

export default function Select({
  onChange,
  value,
  options,
  placeholder,
  label,
  required,
  isDisabled,
  optionsIsLoading,
}: SelectProps) {
  return (
    <div className="flex flex-col gap-1">
      <div className="flex space-x-1">
        {label && <p>{label}</p>}
        {required && <span className="text-red-500">*</span>}
      </div>
      <select
        disabled={isDisabled || optionsIsLoading || !options?.length}
        className="w-full p-2 rounded border-2 disabled:opacity-50 disabled:cursor-not-allowed"
        onChange={(e) => onChange(Number(e.target.value))}
        value={value ?? ""}
      >
        <option value="">
          {optionsIsLoading ? "Data loading..." : placeholder || "Select"}
        </option>
        {options?.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}
