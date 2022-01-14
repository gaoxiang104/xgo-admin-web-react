import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function LayoutScreen() {
    let navigate = useNavigate();
    function onLogin(event, val) {
        console.log('event : ', val);
        navigate("/login")
    };
    return (
        <div>
            <h1>Layout</h1>
            <button onClick={(event) => onLogin(event, 'Some Custom Value')}>去登录页</button>
        </div>
    )
}
