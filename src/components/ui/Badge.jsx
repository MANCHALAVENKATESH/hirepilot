const variants = {
  success: "bg-success text-success-text",
  warning: "bg-warning text-warning-text",
  danger: "bg-danger text-danger-text",
  primary: "bg-primary-light text-primary",
  default: "bg-slate-100 text-slate-700",
};

function Badge({ children, variant = "default", className = "" }) {
  return (
    <span
      className={`inline-flex items-center rounded-full px-3 py-1 text-sm font-semibold ${variants[variant]} ${className}`}
    >
      {children}
    </span>
  );
}

export default Badge;
