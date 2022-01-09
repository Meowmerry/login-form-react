import axios from 'axios'
const Register_path = "http://localhost:8000/register";
const Login_path = "http://localhost:8000/login";
const UserDetail_path = "http://localhost:8000/userdetails";

const ErrorMessage = () => {
    alert("Username already exists")
}
const SeccessMessage = () => {
    alert("Sucess!")
}

const ErrorLoginMessage = () => {
    alert("Username or Password incorrect!")
}
const SeccessLoingMessage = () => {
    alert("Login Sucess!")
}
const Register = (data) => {
    return new Promise((resole, reject) => {
        axios.post(Register_path, data, {
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('__sessionToken'),
                'Content-Type': 'application/json'
            }
        }).then(_response => {
            resole(_response);
        }).catch(_error => {
            reject(_error);
        });
    })

}
const Login = (data) => {
    return axios.post(Login_path, data, {
        headers: {
            'Authorization': 'Bearer ' + localStorage.getItem('__sessionToken'),
            'Content-Type': 'application/json'
        }
    })
}
export { Login, Register, UserDetail_path, ErrorMessage, SeccessMessage, ErrorLoginMessage, SeccessLoingMessage }