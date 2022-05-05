import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginForm from '../src/page/login/LoginForm';
import RegisterForm from '../src/page/register/RegisterForm';
import UserLists from '../src/page/userDetails/UserLists';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" >
          <Route path="/" element={<RegisterForm />} />
          <Route path="login" element={<LoginForm />} />
          <Route path="user-lists" element={<UserLists />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
