import React from "react";

const Header = () => {
    return (
        <div>
            <header className="navbar navbar-dark sticky-top bg-light flex-md-nowrap p-2 shadow">
                <a
                    className="navbar-brand col-md-3 col-lg-2 me-0 px-3 text-black"
                    href="/">
                    Bnw
                </a>
                <button
                    className="navbar-toggler position-absolute d-md-none collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#sidebarMenu"
                    aria-controls="sidebarMenu"
                    aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="navbar-nav">
                    <div className="nav-item text-nowrap">
                        <a className="px-3 text-white btn btn-success" href="/">
                            Sign out
                        </a>
                    </div>
                </div>
            </header>
        </div>
    );
};

export default Header;
