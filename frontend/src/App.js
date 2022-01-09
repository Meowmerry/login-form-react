import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginForm from '../src/page/login/LoginForm';
import RegisterForm from '../src/page/register/RegisterForm';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" >
          <Route path="/" element={<RegisterForm />} />
          <Route path="login" element={<LoginForm />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
