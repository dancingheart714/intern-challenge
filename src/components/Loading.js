import Loader from "react-loader-spinner";
import React from 'react';
import '../assets/css/Loading.css';

export default function Loading() {
    return (
        <div className="loading">
            <Loader
            type="Puff"
            color="#9ef01a"
            height={50}
            width={50}
            timeout={2000} //2 secs
        />
        </div>
        
    )
}
