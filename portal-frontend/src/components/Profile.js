import React, { Component } from "react";
import { useOktaAuth } from '@okta/okta-react';

const Profile = () => {

    const { oktaAuth, authState } = useOktaAuth();

    return (
        <div style={{ paddingTop: "10px", }}>
            <li className="nav-item nav-profile">
                <a href="/nav-link" className="nav-link">
                    <div className="profile-image">
                        <img className="img-xs rounded-circle" src="/images/faces/face8.jpg" alt="profile image" />
                        <div className="dot-indicator bg-success"></div>
                    </div>
                    <div className="text-wrapper">
                        <p className="profile-name">{authState?.idToken?.claims?.name || "User"}</p>
                        <p className="designation">{authState?.idToken?.claims?.roles[1].toUpperCase() || "User"}</p>
                    </div>
                    {/* <div className="icon-container">
                                <i className="icon-bubbles"></i>
                                <div className="dot-indicator bg-danger"></div>
                            </div> */}
                </a>
            </li>
        </div>
    )
}

export default Profile;