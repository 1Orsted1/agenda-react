import React from "react";
import "../styles.css";
//needs to add a litle detail
function UserItem(props) {
    return (
        <li className="contact-container">
            <p>{props.item.name}</p>
            <p>{props.item.lastName}</p>
            <p>{props.item.phone}</p>
            <button>Edit</button>
            <button>Delete</button>
        </li>
    );
}

export default UserItem;
