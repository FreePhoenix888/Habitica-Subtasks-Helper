import React, { createRef, useContext, useEffect, useRef } from 'react';
import { Span } from './Span';
import '../styles/components/submitResult.scss';

interface Props {
	submitResult: number;
}
export function SubmitResult(props: Props): JSX.Element {
	const { submitResult } = props;

	const submitResultRef = createRef<HTMLDivElement>();

	const firstUseEffect = useRef<boolean>(true);

	useEffect(() => {
		if (firstUseEffect.current) {
			firstUseEffect.current = false;
		} else {
			console.log('UseEffect');
			submitResultRef.current.style.opacity = '1';
			setTimeout(() => {
				submitResultRef.current.style.opacity = '0';
			}, 3000);
		}
	}, [submitResult]);
	return (
		<div
			ref={submitResultRef}
			className={`submit-result ${
				submitResult === 0 ? 'submit-result--success' : 'submit-result--fail'
			}`}
		>
			<Span>{submitResult === 0 ? 'Success' : 'Fail'}</Span>
		</div>
	);
}
