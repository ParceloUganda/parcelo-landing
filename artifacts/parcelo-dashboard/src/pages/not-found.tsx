export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-background">
      <div className="text-center px-6">
        <span className="material-symbols-outlined text-outline-variant" style={{ fontSize: "64px" }}>
          sentiment_dissatisfied
        </span>
        <h1 className="text-[32px] leading-[1.2] font-bold text-primary mt-4 mb-2">
          404 — Page Not Found
        </h1>
        <p className="text-[16px] leading-[1.5] text-on-surface-variant">
          The page you're looking for doesn't exist.
        </p>
      </div>
    </div>
  );
}
