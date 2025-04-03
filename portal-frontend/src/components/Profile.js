import React from "react";
import { useOktaAuth } from '@okta/okta-react';
import { jwtDecode } from "jwt-decode";

const Profile = () => {
  const { authState } = useOktaAuth();

  if (!authState?.isAuthenticated) return null;

  const decoded = jwtDecode(authState.idToken.idToken);

  const name = authState.idToken.claims?.name || "User";
  const roles = decoded.roles || [];

  const displayRole = roles.length > 0
    ? roles[1].charAt(0).toUpperCase() + roles[1].slice(1)
    : "User";

  return (
    <div style={{ paddingTop: "10px" }}>
      <li className="nav-item nav-profile">
        <a href="#" className="nav-link">
          <div className="profile-image">
            <img
              className="img-xs rounded-circle"
              src="/images/faces/face8.jpg"
              alt="profile"
            />
            <div className="dot-indicator bg-success"></div>
          </div>
          <div className="text-wrapper">
            <p className="profile-name">{name}</p>
            <p className="designation">{displayRole}</p>
          </div>
        </a>
      </li>
    </div>
  );
};

export default Profile;