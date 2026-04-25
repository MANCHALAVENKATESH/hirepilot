function Topbar() {
  return (
    <div className="mb-8 flex items-start justify-between gap-6">
      <div>
        <h1 className="text-[56px] font-bold leading-none text-text">Dashboard</h1>
        <p className="mt-3 text-[22px] text-muted">
          Track hiring progress, candidate movement, and next actions.
        </p>
      </div>

      <div className="flex items-center gap-4">
        <input
          type="text"
          placeholder="Search jobs, candidates..."
          className="h-[60px] w-[340px] rounded-[18px] border border-border bg-white px-5 text-lg outline-none"
        />
        <button className="h-[60px] w-[60px] rounded-[18px] border border-border bg-white text-xl">
          ◦
        </button>
        <button className="h-[60px] rounded-[18px] bg-primary px-8 text-lg font-semibold text-white">
          Create Job
        </button>
      </div>
    </div>
  );
}

export default Topbar;

