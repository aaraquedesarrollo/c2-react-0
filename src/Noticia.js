const Noticia = () => {
  const titular =
    "El Banco de España alerta de que la abolición de la esclavitud destruyó hasta 180.000 empleos";

  const cuerpoNoticia = [
    "El Banco de España avisa de los daños colaterales» de abolir la esclavitud. En su informe publicado este martes, el organismo alerta de que, tras respetar los Derechos Humanos, hubo un menor crecimiento del empleo del colectivo con nulos salarios. Esas consecuencias negativas, añade el documento, se dieron especialmente «sobre el empleo de los colectivos que no son considerados propiamente humanos sino simplemente mano de obra gratuita",
    "El Banco de España resalta esa advertencia con datos: el número de contratos moralmente injustos en los que (aprovechando su desprotección) se sometía a un colectivo de personas presentó «una caída brusca». Así, el fin de la esclavitud y la asunción de que ningún hombre puede ser propietario de otro destruyó hasta un 11% de puestos de trabajo",
    "«Al costar dinero, estos nuevos trabajadores por cuenta ajena, hasta entonces en régimen de propiedad, dejan de ser atractivos para el mercado laboral», dice el Banco de España respecto a los esclavos liberados.",
  ];

  return (
    <>
      <h2 className="titular">{titular}</h2>
      {cuerpoNoticia.map((parte, indice) => (
        <p key={indice}>{parte}</p>
      ))}
    </>
  );
};

export default Noticia;
