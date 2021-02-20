import React from "react";

function Header() {
    return (
        <header>
            <div className="headerC">
                <p>{"Name's contacts"}</p>
                <ul>
                    <li>
                        <button>log-out</button>
                    </li>
                    <li>
                        <button>Profile</button>
                    </li>
                </ul>
            </div>
        </header>
    );
}

export default Header;
