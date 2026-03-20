const Loader = ({ text = "Loading..." }) => {
  return (
    <div className="flex min-h-[50vh] items-center justify-center">
      <div className="rounded-2xl bg-white px-6 py-4 text-sm font-medium text-slate-600 shadow-soft">
        {text}
      </div>
    </div>
  );
};

export default Loader;
