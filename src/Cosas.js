const Cosas = () => {
  const otrasCosas = ["Gatos", "Perros", "Nutrias"];

  return (
    <section className="listado">
      <h3>Otras cosas</h3>
      <ul className="list-unstyled">
        {otrasCosas.map((cosa, indice) => (
          <li key={indice}>{cosa}</li>
        ))}
      </ul>
    </section>
  );
};

export default Cosas;
