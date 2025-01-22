import {useCallback, useRef} from "react";

type UseDebounceOptions = {
    callback: (...args: any[]) => void,
    wait: number
}

export default function useDebounce(options: UseDebounceOptions) {
    const timeoutId = useRef<number | undefined>(0);

    return useCallback((...args: any[]) => {
        window.clearTimeout(timeoutId.current);

        timeoutId.current = window.setTimeout(() => {
            options.callback(...args);
        }, options.wait);
    }, []);
}