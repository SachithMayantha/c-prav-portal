import React, { Component } from "react";

export class Profile extends Component {

    render() {
        return (
            <div>
                <li className="nav-item nav-profile">
                        <a href="/nav-link" className="nav-link">
                            <div className="profile-image">
                                <img className="img-xs rounded-circle" src="/images/faces/face8.jpg" alt="profile image" />
                                <div className="dot-indicator bg-success"></div>
                            </div>
                            <div className="text-wrapper">
                                <p className="profile-name">Henry Klein</p>
                                <p className="designation">Administrator</p>
                            </div>
                            <div className="icon-container">
                                <i className="icon-bubbles"></i>
                                <div className="dot-indicator bg-danger"></div>
                            </div>
                        </a>
                    </li>
            </div>
        )
    }
}

export default Profile;