import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';
import Time from './componentes/Time';

function App() {
  return (
    <div className="App">
      <Banner />
      <Formulario />

      <Time nome="Programação" />
      <Time nome="Frontend" />
      <Time nome="Data Science" />
    </div>
  );
}

export default App;
