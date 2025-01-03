// eslint-disable-next-line react/prop-types
export default function Checkbox({ className, text, ...rest }) {
  return (
    <label className={className} style={{ marginBottom: "10px" }}>
      <input type="checkbox" {...rest} /> <span>{text}</span>
    </label>
  );
}
