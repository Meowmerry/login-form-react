
import { useEffect, useState } from "react";
import { Login, ErrorLoginMessage, SeccessLoingMessage } from '../../service'

function LoginForm() {
    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const loginUser = async (e) => {
        e.preventDefault();
        if (username === '' || password === '') {
            alert('Please fill in all fields')
        } else {
            try {
                const res = await Login({
                    username, password
                });
                SeccessLoingMessage(res.data.msg)
            } catch (err) {
                ErrorLoginMessage(err)
            }
        }
    }
    useEffect(() => {
        console.log(username, password)
    }, [username, password])
    return (
        <div className='h-screen flex bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'>
            <div className='w-full max-w-md m-auto bg-white rounded-lg border border-primaryBorder shadow-default py-10 px-16'>
                <h1 className='text-2xl font-medium text-primary mt-4 mb-12 text-center'>
                    Sign in to your account 🔐
                </h1>
                <form onSubmit={loginUser}>
                    <div>

                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                                Username
                            </label>
                            <input
                                value={username}
                                onChange={(e) => setUserName(e.target.value)}
                                className="shadow appearance-none border rounded 
                                w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username" />
                        </div>
                    </div>
                    <div>
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                            Password
                        </label>
                        <input
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************" />
                        <p className="text-red-500 text-xs italic">Please choose a password.</p>
                    </div>
                    <div className="md:flex md:items-center">
                        <div className="md:w-2/3">
                            <button className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="submit">
                                Sign Up
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default LoginForm;
