import { useField } from "formik";

export const AuthInput = ({ ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div>
      <input
        name={field.name}
        type={field.type}
        {...field}
        {...props}
        className={`w-full py-2 px-8 border-2 rounded-ms  bg-slate-100 focus:bg-white ${
          meta.touched && meta.error
            ? "border-red-600"
            : "border-slate-100 outline-emerald-300"
        }`}
      />
      {meta.touched && meta.error && (
        <div className="text-red-600">{meta.error}</div>
      )}
    </div>
  );
};
