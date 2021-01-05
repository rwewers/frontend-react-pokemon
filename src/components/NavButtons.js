import React from 'react';
import './NavButtons.css';


export const NavButtons = ({ previousUrl, nextUrl, setUrl }) => {
    return (

        <div className="buttons">
            <button type="button"   disabled={!previousUrl} onClick={() => setUrl(previousUrl)}>
                <span>
                    Vorige
                </span>
            </button>
            <button type="button" disabled={!nextUrl} onClick={() => setUrl(nextUrl)}>
                <span>Volgende</span>
            </button>
        </div>
    )
}