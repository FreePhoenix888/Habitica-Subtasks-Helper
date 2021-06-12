import React, { useContext, useEffect } from 'react';
import { Span } from './Span';
import { FormDataContext } from './TaskForm';

export function TaskPreview() {
	const formData = useContext(FormDataContext);

	return (
		<div className="task-preview-container">
			<Span className="task-preview-container__span">Preview</Span>
			<div className="task-preview">
				<div className="task-preview__task-title">
					{formData?.get('task_title')}
				</div>
				<div className="task-preview__task-subtasks">
					{(() => {
						if (!formData) return undefined;
						const subtasks = formData.get('task_subtasks') as string;
						const separator = formData.get('task_separator') as string;
						const regexp = new RegExp(separator);
						return subtasks.split(regexp);
					})()}
				</div>
			</div>
		</div>
	);
}
