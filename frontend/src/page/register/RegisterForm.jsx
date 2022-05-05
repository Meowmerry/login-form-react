import { useState } from "react";
import { Register, ErrorMessage, SeccessMessage } from '../../service'
function RegisterForm() {
    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');

    const registerUser = async (e) => {
        e.preventDefault();
        if (username === '' || password === '') {
            alert('Please fill in all fields')
        } else {
            try {
                const res = await Register({
                    username, password
                });
                SeccessMessage(res.data.msg)
            } catch (err) {
                ErrorMessage(err)
            }
        }
    }

    return (
        <>
            <div className='h-screen flex bg-gradient-to-r from-indigo-500'>
                <div className='w-full max-w-md m-auto bg-white rounded-lg border border-primaryBorder shadow-default py-10 px-16'>
                    <h1 className='text-2xl font-medium text-primary mt-4 mb-12 text-center'>
                        Register an account
                    </h1>
                    <form onSubmit={registerUser}>
                        <div>
                            <label htmlFor='username'>UserName</label>
                            <input
                                value={username}
                                onChange={(e) => setUserName(e.target.value)}
                                type='text'
                                className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
                                id='username'
                                placeholder='Your Username'
                            />
                        </div>
                        <div>
                            <label htmlFor='password'>Password</label>
                            <input
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                type='password'
                                className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
                                id='password'
                                placeholder='Your Password'
                            />
                        </div>
                        <div className="md:flex md:items-center">
                            <div className="md:w-1/3"></div>
                            <div className="md:w-2/3">
                                <button className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="submit">
                                    Sign Up
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div></>
    );
}

export default RegisterForm;
