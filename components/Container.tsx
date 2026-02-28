export default function Container({ children }: { children: React.ReactNode }) {
    return <div className="mx-auto max-w-3xl px-6 w-full">{children}</div>;
  }
  <footer className="mt-24 border-t border-white/10 pt-6 text-sm text-gray-500">
  © {new Date().getFullYear()} ThaiBao. Built with NextJS.
</footer>