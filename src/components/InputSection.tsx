import React, { useEffect, useState } from 'react';

interface Props {
	children: JSX.Element | JSX.Element[];
	className?: string;
}

export function InputSection(props: Props): JSX.Element {
	const { children, className = '' } = props;
	const [isHovered, changeIsHovered] = useState<boolean>(false);

	function handleMouseOver(event: React.MouseEvent<HTMLDivElement>) {
		changeIsHovered(true);
	}

	function handleMouseLeave(event: React.MouseEvent<HTMLDivElement>) {
		changeIsHovered(false);
	}

   useEffect(() => {
      if(isHovered){
         
      }
   }, [isHovered])

	return (
		<div
			onMouseOver={handleMouseOver}
			onMouseLeave={handleMouseLeave}
			className={`div input-section ${className} ${
				isHovered ? `input-section--hovered ${className}--hovered` : ''
			}`}
		>
			{children}
		</div>
	);
}
