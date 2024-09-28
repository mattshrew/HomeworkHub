import React, { useEffect, useState } from "react";

import '../assets/css/style.css' 
const Collapsible = (props) => {    
    const [open, setOPen] = useState(false);
    const toggle = () => {
        setOPen(!open);
      };
      
      return (
        <div>
          <button onClick={toggle}>{props.label}</button>
          {open && (
            <div className={open ? "content-show" : "content-parent"}>
              {props.children}
            </div>
          )}
        </div>
      );
  };
export default Collapsible;