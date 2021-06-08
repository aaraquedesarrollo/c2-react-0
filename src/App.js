import Cabecera from "./Cabecera";
import Noticia from "./Noticia";
import Sidebar from "./Sidebar";
import Pie from "./Pie";

function App() {
  return (
    <>
      <div className="container">
        <Cabecera></Cabecera>
        <div className="contenedor-principal row">
          <main className="principal col-12 col-sm-7 col-md-8 py-4">
            <Noticia></Noticia>
          </main>
          <Sidebar></Sidebar>
        </div>
        <Pie></Pie>
      </div>
    </>
  );
}

export default App;
