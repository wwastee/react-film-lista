import Titolo1 from "./Comp1/Titolo1";
import Immagine1 from "./Comp1/Immagine1";
import Descrizione1 from "./Comp1/Descrizione1";
import Bottone1 from "./Comp1/Bottone1";
import { useState } from "react";

function Film1() {
  
    const [contatore, PicchiamentoBarbone] = useState(0);
    function giannino(){
        PicchiamentoBarbone(contatore+1)
    }


  
  return (
    <div className="cards">
      <Titolo1></Titolo1>
      <Immagine1></Immagine1>
      <Descrizione1></Descrizione1>
      <Bottone1 {giannino}></Bottone1>
      {/*<button onClick={() => PicchiamentoBarbone(contatore + 1)}></button>*/}
      <p> you clicked {contatore} volte</p>
    </div>
  );
}

export default Film1;
