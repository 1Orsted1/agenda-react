import React from "react";

function DetailComponent(props) {
    return (
        <div className="detail-container">
            <div className="userData">
                <p className="UDN">nombre + apellido</p>
                <p className="UDP">Telefono</p>
                <p className="UDE">Algo de informcaion extra</p>
            </div>
            <div className="btn-cont">
                <button>+</button>
                <button className="ButtonEdit">Edit / Ok</button>
            </div>
        </div>
    );
}

export default DetailComponent;
