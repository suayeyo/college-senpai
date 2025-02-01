import "@/styles/globals.css";

export const metadata = {
  title: 'Admin',
};

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="admin-layout h-screen">
      {children}
    </div>
  );
}