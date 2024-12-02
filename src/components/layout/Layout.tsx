interface LayoutProps {
  children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark">
      <nav className="bg-white dark:bg-secondary shadow-sm">
        {/* Navigation will be added here */}
      </nav>
      <main className="container mx-auto px-4 py-8">
        {children}
      </main>
    </div>
  );
};