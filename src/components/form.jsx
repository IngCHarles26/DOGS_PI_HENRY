function Form(props) {
  return ( 
    <div>
      <h1>Crea tu Propio Amigo</h1>
      <input type="text" placeholder="Nombre"/>
      <input type="text" placeholder="Altura (min - max)"/>
      <input type="text" placeholder="Peso (min - max)"/>
      <input type="text" placeholder="Años de vida (min - max)"/>
      <input type="text" placeholder="Años de vida"/>
      <input type="search" placeholder="Temperamentos" />
      <ul>
        <li>Amargado</li>
        <li>Jugueton</li>
        <li>Leal</li>
      </ul>
    </div>
  );
}

export default Form;