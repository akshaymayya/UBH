import React from 'react';
import { Link } from 'react-router-dom';

function DemoInfos() {
    return (
        <div className="demo-container">
            <div className="glass-card">
                <h1 className="demo-title">Welcome to the Club.</h1>
                <p className="demo-text">
                    You've successfully secured your spot. We're crafting the future of trading, and you're now on the VIP list.
                </p>
                <p className="demo-text">
                    Keep an eye on your inbox. Things are about to get interesting.
                </p>

                <div className="demo-actions">
                    <Link to="/" className="cta-button glass-button">Back to Home</Link>
                </div>
            </div>
        </div>
    );
}

export default DemoInfos;
