import React,{useEffect,useState} from 'react'

const Peticiones = () => {
  //DATOS A UTILIZAR EN EL OBJETO CARDS
    const [imagenes,setImagenes] = useState([])
    const [buscador,setBuscador] = useState("")
    const base = "http://localhost:8000/"
    // const [carga,setCarga] = useState(true)
    //FUNCIONES A UTILIZAR
    const obtenerPanel = async (modulo,setState,pagina=0,buscar="",filtros=[])=>{
        // setCarga(true)
        // IDEA: Cambiar por constante de ambiente
        const url = base + modulo + "/"+pagina+"/"+((buscar!="")?buscar : "")
        const temp = await fetch(url)
        const data = await temp.json();
        setState(data)
        // setCarga(false)
    }

    const guardarNuevo = async (modulo,datos){

        const form = new FormData();
        for (var variable in object) {
            if (object.hasOwnProperty(variable)) {
                form.append(variable, object[variable]);
            }
        }
        const url = base + modulo ;
        const temp = await fetch(url, {
          "method": "POST",
          "headers": {
            "Content-Type": "multipart/form-data",
            "body": form
            }
        });
        const temp = await fetch(url)
        const data = await temp.json();

    }

    return [obtenerPanel]
}

export default Peticiones
