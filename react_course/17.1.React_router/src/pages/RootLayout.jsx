import MainNavigation from "../components/MainNavigation";
import { Outlet } from "react-router-dom";

export default function RoolLayout() {
  return (
    <>
      <MainNavigation />
      <main>
        <Outlet />
      </main>
    </>
  );
}
