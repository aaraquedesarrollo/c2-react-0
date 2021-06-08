import Categorias from "./Categorias";
import Cosas from "./Cosas";

const Sidebar = () => {
  return (
    <aside className="sidebar col-12 col-sm-5 col-md-4 py-4">
      <Categorias></Categorias>
      <Cosas></Cosas>
    </aside>
  );
};

export default Sidebar;
