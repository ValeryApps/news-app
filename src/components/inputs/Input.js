import { useField } from "formik";

export const Input = ({ isLabel = true, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      <input
        name={field.name}
        type={field.type}
        {...field}
        {...props}
        className={`w-full py-2 px-8 border-2 rounded-md  bg-slate-100 focus:bg-white ${
          meta.touched && meta.error
            ? "border-red-600"
            : "border-slate-100 outline-emerald-300"
        }`}
      />
      {meta.touched && meta.error && isLabel && (
        <div className="text-red-600">{meta.error}</div>
      )}
    </>
  );
};

export const Select = ({ ...props }) => {
  const [field, meta] = useField(props);
  return (
    <select
      name={field.name}
      value={field.value}
      onChange={(e, data) => field.onChange(data.value)}
      {...field}
      {...props}
      className={`w-full py-2  px-10 border-2 rounded-md  bg-slate-100 focus:bg-white ${
        meta.touched && meta.error
          ? "border-red-600"
          : "border-slate-300  outline-1 outline-emerald-300"
      }`}
    >
      {props.children}
    </select>
  );
};
