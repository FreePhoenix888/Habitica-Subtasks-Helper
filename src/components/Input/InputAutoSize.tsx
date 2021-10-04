import React, {
    ComponentProps,
    FormEvent,
    forwardRef,
    useCallback,
    useEffect,
    useImperativeHandle,
    useRef,
} from "react";
import {Input} from './Input'

type IProps = ComponentProps<typeof Input>;

export const InputAutoSize = forwardRef<HTMLInputElement, IProps>(({
                                                                       onInput: onInputProp,
                                                                       classNameModifiers,
                                                                       ...rest
                                                                   }: IProps, forwardedRef) => {
    const ref = useRef<HTMLInputElement>();
    const setSize = useCallback(() => {
        if (!ref.current) return;
        const input = ref.current;
        const {value} = input;
        let {length} = value;
        if (!length) length = input.placeholder.length;
        input.size = length;
    }, [ref])

    useEffect(() => {
        setSize();
    }, [setSize])

    useImperativeHandle<HTMLInputElement, HTMLInputElement>(forwardedRef, () => ref.current)

    const onInput = useCallback((event: FormEvent<HTMLInputElement>) => {
        // Default behavior
        setSize();
        // Custom behavior
        if (onInputProp) {
            onInputProp(event);
        }
    }, [onInputProp, setSize])

    return <Input classNameModifiers={{'auto-size': true, ...classNameModifiers}} ref={ref}
                  onInput={onInput} {...rest} />
})

InputAutoSize.displayName = "HabiticaSubtasksHelperInputAutoSize"
