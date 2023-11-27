import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Policy from "./pages/Policy";
import PageNotFound from "./pages/PageNotFound";
import Register from "./pages/Auth/Register";
import Login from "./pages/Auth/Login";
import Dashboard from "./pages/user/Dashboard";
import PrivateRoute from "./components/Routes/Private";
import SellerRoute from "./components/Routes/SellerRoute";
import ForgotPasssword from "./pages/Auth/ForgotPassword";
import SellerDashboard from "./pages/Seller/SellerDashboard";
import CreateCategory from "./pages/Seller/CreateCategory";
import CreateProduct from "./pages/Seller/CreateProduct";
import Users from "./pages/Seller/Users";
import Orders from "./pages/user/Orders";
import Profile from "./pages/user/Profile";
import Products from "./pages/Seller/Products";
import UpdateProduct from "./pages/Seller/UpdateProduct";
import Search from "./pages/Search";
import ProductDetails from "./pages/ProductDetails";
import Categories from "./pages/Categories";
import CategoryProduct from "./pages/CategoryProduct";
import CartPage from "./pages/CartPage";
import SellerOrders from "./pages/Seller/SellerOrders";
import MyOrders from "./pages/Seller/MyOrders";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product/:slug" element={<ProductDetails />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/category/:slug" element={<CategoryProduct />} />
        <Route path="/search" element={<Search />} />
        <Route path="/dashboard" element={<PrivateRoute />}>
          <Route path="user" element={<Dashboard />} />
          <Route path="user/orders" element={<Orders />} />
          <Route path="user/profile" element={<Profile />} />
          {/* <Route path='user/create-category' element={<CreateCategory/>} />
          <Route path='user/create-product' element={<CreateProduct/>} />
          <Route path='user/product/:slug' element={<UpdateProduct/>} />
          <Route path='user/products' element={<Products/>} /> */}
        </Route>
        <Route path="/dashboard" element={<SellerRoute />}>
          <Route path="seller" element={<SellerDashboard />} />
          <Route path="seller/create-category" element={<CreateCategory />} />
          <Route path="seller/create-product" element={<CreateProduct />} />
          <Route path="seller/product/:slug" element={<UpdateProduct />} />
          <Route path="seller/products" element={<Products />} />
          <Route path="seller/users" element={<Users />} />
          <Route path="seller/orders" element={<SellerOrders />} />
          <Route path="seller/myorder" element={<MyOrders />} />
        </Route>
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPasssword />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/policy" element={<Policy />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default App;
