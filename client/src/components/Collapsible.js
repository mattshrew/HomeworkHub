import React, { useRef, useState } from "react";

import '../assets/css/style.css'
const Collapsible = (props) => {    
    const [open, setOPen] = useState(false);
    const contentRef = useRef();
    if (contentRef.current) console.log(contentRef.current.scrollHeight);
    const toggle = () => {
        setOPen(!open);
      };
      
      return (
        <div>
          <button onClick={toggle}>{props.label}</button>

          <div className="content-parent"
          ref={contentRef} style={open ? { height: contentRef.current.scrollHeight +
          "px" } : { height: "0px" }}>
          <div className="content">{props.children}</div>
        </div>
        </div>
      );
  };
export default Collapsible;