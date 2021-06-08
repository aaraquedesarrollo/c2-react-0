const Pie = () => {
  const isVisible = true;

  return (
    <footer className="pie text-white row align-items-center">
      <p className="col text-center">
        {isVisible &&
          "Texto del footer - Ningún derecho reservado, copia lo que quieras"}
      </p>
    </footer>
  );
};

export default Pie;
