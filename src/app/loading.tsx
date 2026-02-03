export default function Loading() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background">
      <div className="w-full max-w-3xl px-6">
        <div className="space-y-6">
          <div className="h-8 w-2/3 rounded-md bg-muted animate-pulse" />
          <div className="h-5 w-full rounded-md bg-muted animate-pulse" />
          <div className="h-5 w-11/12 rounded-md bg-muted animate-pulse" />
          <div className="h-5 w-10/12 rounded-md bg-muted animate-pulse" />
          <div className="pt-4 flex gap-3">
            <div className="h-12 w-40 rounded-md bg-muted animate-pulse" />
            <div className="h-12 w-40 rounded-md bg-muted animate-pulse" />
          </div>
        </div>
      </div>
    </div>
  );
}
