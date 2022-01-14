import { Button } from 'antd';
import '../../assets/styles/LoginStyle.scss'
import React from 'react'
import { useNavigate } from "react-router-dom";
export default function LoginScreen() {
    let navigate = useNavigate();
    function onLogin(event) {
        navigate('/')
    }
    return (
        <div className='body'>
            <div className='login-div'></div>
            <h1>login</h1>
            <Button type="primary" onClick={() => { onLogin() }}>登录</Button>
        </div>
    )
}
