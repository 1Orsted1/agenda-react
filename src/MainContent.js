import React from "react";
import UserData from "./UserData.js";
//import UserItem from "./components/UserItem.js";
import DetailComponent from "./components/DetailComponent.js";
import "./styles.css";

class MainContent extends React.Component {
    constructor() {
        super();
        this.state = {
            userContact: UserData,
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event) {}

    render() {
        // const UserComponent = this.state.userContact.map((item) => {
        //     return <UserItem item={item} key={item.id} />;
        // });
        const ContactName = this.state.userContact.map((item) => {
            return (
                <li key={item.id}>
                    <p
                        className="contact-name"
                        onClick={() => {
                            alert(item.name);
                        }}
                    >
                        {item.name}
                    </p>
                </li>
            );
        });

        return (
            <div className="main-container">
                <ul className="list-container">{ContactName}</ul>
                <DetailComponent />
            </div>
        );
    }
}

export default MainContent;
