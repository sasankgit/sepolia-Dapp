export default function Status({ status }) {
  if (!status) return null;

  return (
    <p className="text-sm mt-4 break-all text-center">
      {status}
    </p>
  );
}
