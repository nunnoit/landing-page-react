import React from "react";

export const Nav = () => {
    return(
        <>
          <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <div class="container">
              <a class="navbar-brand text-white" href="#">Start Bootsrap</a>
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse dflex justify-content-end" id="navbarNavDropdown">
                <ul class="navbar-nav">
                  <li class="nav-item">
                    <a class="nav-link text-white" aria-current="page" href="#">Home</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link text-white" href="#">About</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link text-white" href="#">Services</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link text-white" href="#">Contact</a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </>
    );
};





