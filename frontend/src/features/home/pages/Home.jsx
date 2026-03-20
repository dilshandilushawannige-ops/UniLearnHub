const features = [
  {
    title: "Resources",
    description: "Browse lecture materials, revision notes, and curated subject references."
  },
  {
    title: "Requests",
    description: "Request missing lectures or notes and track responses from your peers."
  },
  {
    title: "Live Classes",
    description: "Join ongoing study sessions and connect with classmates in real time."
  },
  {
    title: "Study Plans",
    description: "Create and manage semester-focused study plans with clear milestones."
  }
];

const Home = () => {
  return (
    <section className="page-shell space-y-10">
      <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-soft sm:p-10">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Welcome to UniLearnHub</h1>
        <p className="mt-4 max-w-3xl text-base text-slate-600 sm:text-lg">
          Access learning resources, request missing lectures, join live classes, and create study plans in one place.
        </p>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        {features.map((feature) => (
          <article
            key={feature.title}
            className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-soft"
          >
            <h2 className="text-lg font-semibold text-slate-900">{feature.title}</h2>
            <p className="mt-2 text-sm text-slate-600">{feature.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Home;
