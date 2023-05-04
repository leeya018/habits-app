export default function Input({ type = "text", name, onChange, value }) {
  return (
    <input
      className="border-2 rounded-sm"
      type={type}
      placeholder={name}
      name={name}
      value={value}
      onChange={onChange}
    />
  );
}
