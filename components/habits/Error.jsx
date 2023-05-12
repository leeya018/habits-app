export default function Error({ children }) {
  return (
    <div className="bg-yellow-400 text-red-600 font-bold text-center">
      {children}
    </div>
  );
}
