export type InputValueType = undefined | string | number;

interface InputProps {
  value: InputValueType;
  onChange: (value: InputValueType) => void;
}

export const InputDateModule = ({ value, onChange }: InputProps) => {
  return (
    <div>
      <input
        type="date"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
};
