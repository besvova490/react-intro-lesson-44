import React from "react";

// elements
import Button from "../../elements/Button";

// assets

import "../../assets/styles/containers/header.scss";


function Header() {

  return (
    <header className="lsn-header">
      <Button>
        Logo
      </Button>
      <div>
        <Button>1</Button>
        <Button>2</Button>
        <Button>3</Button>
        <Button>4</Button>
      </div>
    </header>
  );
}


export default Header;
