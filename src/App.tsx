import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom';
import Transactions from './pages/Transactions/Transactions'
import Categories from "./pages/Category & Budget/Categories&Budget";
import Reports from './pages/Authentication/Reports'
import Setting from './pages/Authentication/Setting'
import MainLayout from './components/MainLayout';
import Home from './pages/Home/Home';
import Accounts from './pages/Authentication/Accounts';
import ResetPassword from './pages/Authentication/ResetPasswords';
import Register from './pages/Authentication/Registers';
export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<MainLayout />}>
            <Route index element={<Navigate to="/home" replace />} />
            <Route path="/home" element={<Home />} />
            <Route path="/transactions" element={<Transactions />} />
            <Route path="/categories" element={<Categories />} />
            <Route path="/reports" element={<Reports />} />
            <Route path="/setting" element={<Setting />} />
            <Route path="/accounts" element={<Accounts />} />
            <Route path="/register" element={<Register />} />
            <Route path="/resetpassword" element={<ResetPassword />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}