import { useEffect } from 'react';

function useClickOutside(componentRef, callback, excludeComponentRef) {

    // fail early if any of the required params is missing
    if (!componentRef) {
        throw new Error('A target component ref has to be provided.');
    }
  
    if (!callback) {
        throw new Error('A callback has to be provided.');
    }

    useEffect(() => {
        const listener = (event) => {
            if(
                componentRef.current && 
                (componentRef.current.contains(event.target) ||
                (excludeComponentRef && excludeComponentRef.current && excludeComponentRef.current.contains(event.target)))
            ) {
                return;
            }

            if(typeof callback === 'function') {
                callback();
            }
        };

        window.addEventListener('click', listener);

        return () => {
            window.removeEventListener('click', listener);
        };
    }, [componentRef, callback, excludeComponentRef]);
}

export default useClickOutside;
