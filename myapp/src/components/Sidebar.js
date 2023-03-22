import { useSelector } from "react-redux";
import store from "../utils/store";

const SideBar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  if (!isMenuOpen) return null;
  return (
    <div className="p-5 shadow-lg w-48">
      <h1>SideBar</h1>
      <ul>
        <li>home</li>
        <li>home</li>
        <li>home</li>
        <li>home</li>
        <li>home</li>
      </ul>
      <ul>
        <li>home</li>
        <li>home</li>
        <li>home</li>
        <li>home</li>
        <li>home</li>
      </ul>
    </div>
  );
};
export default SideBar;
