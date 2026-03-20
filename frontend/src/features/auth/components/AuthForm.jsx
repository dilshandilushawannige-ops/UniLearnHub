const AuthForm = ({
  title,
  subtitle,
  fields,
  values,
  onChange,
  onSubmit,
  submitText,
  loading,
  error,
  footer
}) => {
  return (
    <div className="mx-auto w-full max-w-lg rounded-3xl border border-slate-200 bg-white p-6 shadow-soft sm:p-8">
      <h1 className="text-2xl font-bold text-slate-900">{title}</h1>
      <p className="mt-2 text-sm text-slate-600">{subtitle}</p>

      {error ? (
        <div className="mt-4 rounded-xl border border-rose-200 bg-rose-50 px-3 py-2 text-sm text-rose-700">
          {error}
        </div>
      ) : null}

      <form className="mt-6 space-y-4" onSubmit={onSubmit}>
        {fields.map((field) => (
          <div key={field.name}>
            <label htmlFor={field.name} className="mb-1 block text-sm font-medium text-slate-700">
              {field.label}
            </label>
            <input
              id={field.name}
              name={field.name}
              type={field.type || "text"}
              min={field.min}
              max={field.max}
              value={values[field.name]}
              onChange={onChange}
              placeholder={field.placeholder}
              className="w-full rounded-xl border border-slate-300 px-3 py-2.5 text-sm outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-100"
              required={field.required !== false}
            />
          </div>
        ))}

        <button
          type="submit"
          disabled={loading}
          className="w-full rounded-xl bg-brand-500 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-brand-600 disabled:cursor-not-allowed disabled:opacity-70"
        >
          {loading ? "Please wait..." : submitText}
        </button>
      </form>

      {footer ? <div className="mt-4 text-sm text-slate-600">{footer}</div> : null}
    </div>
  );
};

export default AuthForm;
