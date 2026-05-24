interface ErrorStateProps {
  message: string
}

export function ErrorState({ message }: ErrorStateProps) {
  return (
    <main className="grid min-h-screen place-content-center gap-3 bg-[radial-gradient(circle_at_10%_0%,hsl(var(--primary)_/_0.16),transparent_30%),radial-gradient(circle_at_92%_8%,hsl(var(--accent)_/_0.2),transparent_24%),hsl(var(--background))] p-8 text-center text-[hsl(var(--foreground))]">
      <h1 className="m-0 text-[34px] leading-[1.05]">SALMON Explorer</h1>
      <p className="m-0 text-[hsl(var(--muted-foreground))]">{message}</p>
      <p className="m-0 text-[hsl(var(--muted-foreground))]">
        Run <code className="font-mono text-[13px] text-[hsl(var(--foreground))]">pnpm graph</code> from the
        repository root.
      </p>
    </main>
  )
}
