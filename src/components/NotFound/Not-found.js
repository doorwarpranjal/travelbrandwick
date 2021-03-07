import React from "react";

export default function NotFound(){


    return (
      
        <section class="error-area ptb-100" style={{display:'inline'}}>
          <div class="container">
            <div class="error-content">
              <img src="assets/img/404.png" alt="image" />
              <h3>Ooops! Page Not Found</h3>
              <p>
                The page you are looking for might have been removed had its
                name changed or is temporarily unavailable.
              </p>
              <a href="index.html" class="btn-primary">
                Back to Home
              </a>
            </div>
          </div>
        </section>
    
    );
  
}

