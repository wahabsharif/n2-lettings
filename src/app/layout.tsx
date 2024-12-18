import ReduxProvider from "@/redux/ReduxProvider";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ReduxProvider>
      <html lang="en">{children}</html>
    </ReduxProvider>
  );
}
