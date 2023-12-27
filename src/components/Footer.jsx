import React from "react";

const currentYear = new Date().getFullYear();

function Footer() {
    return (
      <div>
        <footer>
          <p>Copyright ⓒ{currentYear}</p>
        </footer>
      </div>
    );
}

export default Footer;