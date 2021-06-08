function App() {
  const titular =
    "El Banco de España alerta de que la abolición de la esclavitud destruyó hasta 180.000 empleos";

  const cuerpoNoticia = [
    "El Banco de España avisa de los daños colaterales» de abolir la esclavitud. En su informe publicado este martes, el organismo alerta de que, tras respetar los Derechos Humanos, hubo un menor crecimiento del empleo del colectivo con nulos salarios. Esas consecuencias negativas, añade el documento, se dieron especialmente «sobre el empleo de los colectivos que no son considerados propiamente humanos sino simplemente mano de obra gratuita",
    "El Banco de España resalta esa advertencia con datos: el número de contratos moralmente injustos en los que (aprovechando su desprotección) se sometía a un colectivo de personas presentó «una caída brusca». Así, el fin de la esclavitud y la asunción de que ningún hombre puede ser propietario de otro destruyó hasta un 11% de puestos de trabajo",
    "«Al costar dinero, estos nuevos trabajadores por cuenta ajena, hasta entonces en régimen de propiedad, dejan de ser atractivos para el mercado laboral», dice el Banco de España respecto a los esclavos liberados.",
  ];

  const categorias = [
    "Noticias de deportes",
    "Noticias de politica internacional",
    "Noticisa de economia",
  ];

  const otrasCosas = ["Gatos", "Perros", "Nutrias"];

  const isVisible = true;

  return (
    <body>
      <div className="container">
        <header className="cabecera text-white row align-items-center">
          <h1 className="col m-0">El Mundo Yesterday</h1>
          <nav className="col text-right">
            <ul className="links-navegacion list-inline m-0 d-none">
              <li className="list-inline-item">hola</li>
              <li className="list-inline-item">adiós</li>
              <li className="list-inline-item">ciao</li>
            </ul>
          </nav>
        </header>
        <div className="contenedor-principal row">
          <main className="principal col-12 col-sm-7 col-md-8 py-4">
            <h2 className="titular">{titular}</h2>
            {cuerpoNoticia.map((parte) => (
              <p>{parte}</p>
            ))}
          </main>
          <aside className="sidebar col-12 col-sm-5 col-md-4 py-4">
            <section className="listado">
              <h3>Categorías</h3>
              <ul className="list-unstyled">
                {categorias.map((noticia) => (
                  <li>{noticia}</li>
                ))}
              </ul>
            </section>
            <section className="listado">
              <h3>Otras cosas</h3>
              <ul className="list-unstyled">
                {otrasCosas.map((cosa) => (
                  <li>{cosa}</li>
                ))}
              </ul>
            </section>
          </aside>
        </div>
        <footer className="pie text-white row align-items-center">
          <p className="col text-center">
            {isVisible &&
              "Texto del footer - Ningún derecho reservado, copia lo que quieras"}
          </p>
        </footer>
      </div>
    </body>
  );
}

export default App;
