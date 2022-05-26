import React from "react";

interface BotãoProps {
  children: any;
  className?: any
  onClick?: any
}
function Botão(props: BotãoProps) {



    return (

    <div>
      <button onClick={props.onClick} className={`  text-white px-4 py-2 rounded-md ${props.className}`}>
        {props.children}
      </button>
    </div>
  );
}

export default Botão;
