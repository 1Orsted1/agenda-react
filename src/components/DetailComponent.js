import React from "react";

function DetailComponent(props) {
    return (
        <div className="detail-container">
            <div className="userData">
                <p className="UDN">nombre + apellido</p>
                <p className="UDP">Telefono</p>
                <p className="UDE">Algo de informacion extra</p>
            </div>
            <div className="btn-cont">
                <button className="btnAdd">+</button>
                <button className="btnEdit">Edit</button>
            </div>
        </div>
    );
}

export default DetailComponent;
