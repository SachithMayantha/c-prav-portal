import React from "react";
import { useOktaAuth } from "@okta/okta-react";

const Header = () => {
  const { oktaAuth, authState } = useOktaAuth();

  const handleSignOut = async () => {
    await oktaAuth.signOut();
    // await oktaAuth.signInWithRedirect();
  };

  const getUserWelcomeText = () => {
    if (!authState?.idToken?.claims) {
      console.log("No token claims available");
      return "Welcome to C-Prav";
    }

    console.log("Token claims:", authState.idToken.claims);

    const roles = authState.idToken.claims.roles || [];
    const fullName = authState.idToken.claims.name || "";
    const firstName = fullName.split(" ")[0].toUpperCase(); // Convert first name to uppercase

    // Check if user has only "client" role and not "admin" or "staff"
    const isClientOnly =
      roles.includes("client") &&
      !roles.includes("admin") &&
      !roles.includes("staff");

    console.log("Roles:", roles);
    console.log("Full Name:", fullName);
    console.log("First Name:", firstName);
    console.log("Is Client Only:", isClientOnly);

    return isClientOnly
      ? `Welcome to C-Prav > ${firstName}`
      : "Welcome to C-Prav";
  };

  // if (authState && !authState.isAuthenticated) {
  //     return (
  //         <div>
  //             <h1>Welcome to the Home Page</h1>
  //             <button onClick={() => oktaAuth.signInWithRedirect()}>Login</button>
  //         </div>
  //     );
  // }

  return (
    <nav className="navbar default-layout-navbar col-lg-12 col-12 p-0 fixed-top d-flex flex-row">
      <div
        className="text-center navbar-brand-wrapper d-flex align-items-center justify-content-center"
        style={{ backgroundColor: "#0c0c41" }}
      >
        <a className="navbar-brand brand-logo" href="/index.html">
          <img
            src="/images/cprav_logo.webp"
            alt="logo"
            className="logo-dark"
            style={{ height: "65px", width: "80px" }}
          />
          <img
            src="/images/logo-light.svg"
            alt="logo-light"
            className="logo-light"
          />
        </a>
        <a className="navbar-brand brand-logo-mini" href="/index.html">
          <img
            src="/images/cprav_logo.webp"
            alt="logo"
            style={{ height: "65px", width: "80px" }}
          />
        </a>
        <button
          className="navbar-toggler navbar-toggler align-self-center"
          type="button"
          data-toggle="minimize"
        >
          <span className="icon-menu"></span>
        </button>
      </div>
      <div className="navbar-menu-wrapper d-flex align-items-center">
        <h5 className="mb-0 font-weight-medium d-none d-lg-flex">
          {getUserWelcomeText()}
        </h5>
        <ul className="navbar-nav navbar-nav-right">
          <form className="search-form d-none d-md-block" action="#">
            <i className="icon-magnifier"></i>
            <input
              type="search"
              className="form-control"
              placeholder="Search Here"
              title="Search here"
            />
          </form>

          <li className="nav-item dropdown">
            <a
              className="nav-link count-indicator message-dropdown"
              id="messageDropdown"
              href="#"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <i className="icon-speech"></i>
              <span className="count">7</span>
            </a>
            <div
              className="dropdown-menu dropdown-menu-right navbar-dropdown preview-list pb-0"
              aria-labelledby="messageDropdown"
            >
              <a className="dropdown-item py-3">
                <p className="mb-0 font-weight-medium float-start me-2">
                  You have 7 unread mails{" "}
                </p>
                <span className="badge badge-pill badge-primary float-end">
                  View all
                </span>
              </a>
              <div className="dropdown-divider"></div>
              <a className="dropdown-item preview-item">
                <div className="preview-thumbnail">
                  <img
                    src="/images/faces/face10.jpg"
                    alt="image"
                    className="img-sm profile-pic"
                  />
                </div>
                <div className="preview-item-content flex-grow py-2">
                  <p className="preview-subject ellipsis font-weight-medium text-dark">
                    Marian Garner{" "}
                  </p>
                  <p className="font-weight-light small-text">
                    {" "}
                    The meeting is cancelled{" "}
                  </p>
                </div>
              </a>
            </div>
          </li>

          <li className="nav-item dropdown d-none d-xl-inline-flex user-dropdown">
            <a
              className="nav-link dropdown-toggle"
              id="UserDropdown"
              href="#"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <img
                className="img-xs rounded-circle ms-2"
                src="/images/faces/face8.jpg"
                alt="Profile image"
              />
              <span className="font-weight-normal">
                {authState?.idToken?.claims?.name || "User"}
              </span>
            </a>
            <div
              className="dropdown-menu dropdown-menu-right navbar-dropdown"
              aria-labelledby="UserDropdown"
            >
              <div className="dropdown-header text-center">
                <img
                  className="img-md rounded-circle"
                  src="/images/faces/face8.jpg"
                  alt="Profile image"
                />
                <p className="mb-1 mt-3">
                  {authState?.idToken?.claims?.name || "User"}
                </p>
                <p className="font-weight-light text-muted mb-0">
                  {authState?.idToken?.claims?.email || "user@example.com"}
                </p>
              </div>
              <a className="dropdown-item">
                <i className="dropdown-item-icon icon-user text-primary"></i> My
                Profile
                <span className="badge badge-pill badge-danger">1</span>
              </a>
              <a className="dropdown-item" onClick={handleSignOut}>
                <i className="dropdown-item-icon icon-power text-primary"></i>{" "}
                Sign Out
              </a>
            </div>
          </li>
        </ul>
        <button
          className="navbar-toggler navbar-toggler-right d-lg-none align-self-center"
          type="button"
          data-toggle="offcanvas"
        >
          <span className="icon-menu"></span>
        </button>
      </div>
    </nav>
  );
};

export default Header;
