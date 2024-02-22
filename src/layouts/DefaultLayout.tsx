import { Outlet } from "react-router-dom";
import Header from "../components/header";

const DefaultLayout = () => {
  return (
    <div
      className="max-w-[74rem] h-[80vh] - 10rem  bg-[#202024] p-[2.5rem] rounded-lg flex flex-col"
      style={{ margin: "4rem auto" }}
    >
      <Header />
      <Outlet />
    </div>
  );
};

export default DefaultLayout;
