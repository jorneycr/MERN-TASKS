import React, { useState } from "react";

const NuevoProyecto = () => {

    //state para Proyecto
    const [proyecto, guardarProyecto] = useState({
        nombre: ''
    });

    //extrar nombre de proyecto
    const { nombre } = proyecto;

    const onChangeProyecto = e => {
        guardarProyecto({
            ...proyecto,
            [e.target.name]: e.target.value
        })
    }

    //cuando el usuario envia un proyecto
    const onSubmitProyecto = e =>{
        e.preventDefault();

        //validar el proyecto

        //agregar al state

        //reiniciar el form
    }

    return (
        <>
            <button type="button" className="btn btn-block btn-primario">
                Nuevo Proyecto
            </button>
            <form className="formulario-nuevo-proyecto">
                <input
                    type="text"
                    className="input-text"
                    placeholder="Nombre Proyecto"
                    name="nombre"
                    value={nombre}
                    onChange={onChangeProyecto}
                />

                <input
                    type="submit"
                    className="btn btn-primario btn-block"
                    value="Agregar Proyecto"
                    onSubmit={onSubmitProyecto}
                />
            </form>
        </>
    );
};

export default NuevoProyecto;
