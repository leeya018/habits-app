export default function Input({
  type = "text",
  name,
  onChange,
  value,
  disabled,
}) {
  return (
    <input
      className="border-2 rounded-sm"
      type={type}
      disabled={disabled}
      placeholder={name}
      name={name}
      value={value}
      onChange={onChange}
    />
  );
}
