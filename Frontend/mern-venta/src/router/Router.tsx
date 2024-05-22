import { BrowserRouter,Routes,Route } from "react-router-dom";
import AdminLayaut from "../layaut/AdminLayaut";
import UserList from "../component/users/userList";
import UserEdit from "../component/users/userEdit";
import UserCreate from "../component/users/user-Create";
import ProductHome from "../component/products/poductohome";
import RoleCreate from "../component/roles/Role";


export default function RouterApp() {
  return (
    <BrowserRouter>
        <Routes>
            <Route element={<AdminLayaut/>} >
            <Route path="/" element={<UserList/>} index />
            <Route path="/create" element={<UserCreate/>} />
            <Route path="/edit/:id" element={<UserEdit/>} />
            <Route path="/products" element={<ProductHome/>} />
            <Route path="/roles/create" element={<RoleCreate />} /> 


            </Route>
        </Routes>
    </BrowserRouter>
  );
}