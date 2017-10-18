import React from "react";

class NavItems extends React.Component {

    render() {
        return (
            <a href={this.props.links.href}>
                <div className="nav-buttons full">{this.props.links.title}</div>
            </a>
        )
    }
}

export default NavItems;
