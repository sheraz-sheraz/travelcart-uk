import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Outlet } from "react-router";

function RootLayout() {
  return (
    <div className="grid grid-cols-1 grid-row-[80px_1fr_80px] min-h-svh relative isolate">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default RootLayout;
