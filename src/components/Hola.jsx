import React, {Fragment} from 'react'

function Hola(){
    let saludo = "Hola mundo"
    return(
   <Fragment>
      <h2>Primer componente,  {saludo}</h2>
   </Fragment>
    );
}

export default Hola