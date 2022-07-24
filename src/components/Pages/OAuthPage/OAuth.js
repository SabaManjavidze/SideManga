import React from 'react'
import GoogleLogin from 'react-google-login'


export default function OAuth() {

    const responseGoogle=(res)=>{
        console.log(res)
        console.log(res.profileObj)

    }

    return (
        <div>
            <GoogleLogin
            clientId="1031724342738-9gb0krgvku7sfeqi3qlbdqm99gsji33b.apps.googleusercontent.com"
            buttonText="Login With Google"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy='single_host_origin'
            />
        </div>
    )
}
