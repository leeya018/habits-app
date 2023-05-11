export default function Input({
  type = "text",
  name,
  onChange,
  value,
  disabled,
  size = "",
}) {
  return (
    <input
      className={`border-2  ${size}`}
      type={type}
      disabled={disabled}
      placeholder={name}
      name={name}
      value={value}
      onChange={onChange}
    />
  );
}
