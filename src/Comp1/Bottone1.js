import { useState } from "react"

function Bottone1(props){
    
    return(
        <button className="bottonio"  onClick={() => PicchiamentoBarbone(props.contatore + 1)}>clicca qui per picchiare un barbone</button>
    )
}

export default Bottone1
