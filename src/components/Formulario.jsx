import React,{useState} from 'react'

const Formulario = () =>{

   const [nombre, setNombre]= useState('')
   const [edad,setEdad] = useState('')

    return(
        <div className="container">
          <form className="form-group">
              <input onChange={
                  (e)=>{setNombre(e.target.value)}}

                placeholder="Ingrese su nombre"   className="form-control mb-3"  type="text"/>

              <input onChange={
                   (e)=>{setEdad(e.target.value)}}

              placeholder="Ingrese su edad" className="form-control mb-3"  type="text"/>
              <input className="btn btn-info btn-block mb-3"  type="submit"/>
          </form>
        </div>
    )
}

export default Formulario