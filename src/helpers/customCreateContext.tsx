import React, { createContext , useContext} from 'react';

export function customCreateContext<ContextType>() {
	const context = createContext<ContextType | undefined>(undefined);
	function useCtx() {
		const ctx = useContext(context);
		if (!ctx) throw new Error('useCtx must be inside a Provider with a value');
		return ctx;
	}
	return [useCtx, context.Provider] as const;
}
