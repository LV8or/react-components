import React, { useState, useRef } from 'react';
import useClickOutside from './../hooks/useClickOutside';

export default function UseOutsideClickPage() {

    const [isOpen, setIsOpen] = useState(false);
    const componentRef = useRef(null);
    const excludeRef = useRef(null);

    useClickOutside(componentRef, () => setIsOpen(false), excludeRef);

    return (
        <div className="app-cont">
            <div className="container">
                
                <header>
                    <h1>Use Outside Click</h1>
                </header>

                <button className="react-btn" ref={excludeRef} onClick={() => setIsOpen(true)}>
                    Open Text
                </button>

                {isOpen && (
                    <div ref={componentRef} className="co-text">
                        Text
                    </div>
                )}

            </div>
        </div>
    );
};