import React from "react";

type Props = {
   className?: string;
   direction: string;
}

export function Arrow(props: Props){
   const {className='', direction} = props
   return (
      <div className={`arrow ${className} arrow--${direction}`}></div>
   )
}