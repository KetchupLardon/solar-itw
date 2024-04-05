import { NavBar } from "@/components/NavBar";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html>
      <body>
        <NavBar />
        <main>{children}</main>
      </body>
    </html>
  );
};

export default MainLayout;
