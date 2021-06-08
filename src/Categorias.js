const Categorias = () => {
  const categorias = [
    "Noticias de deportes",
    "Noticias de politica internacional",
    "Noticisa de economia",
  ];

  return (
    <section className="listado">
      <h3>Categorías</h3>
      <ul className="list-unstyled">
        {categorias.map((noticia, indice) => (
          <li key={indice}>{noticia}</li>
        ))}
      </ul>
    </section>
  );
};

export default Categorias;
