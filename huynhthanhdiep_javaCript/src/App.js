import './App.css';
import ContactPage from './component/page/ContactPage';
import ProductByCategoryPage from './component/page/ProductByCategoryPage';
import InfoPage from './component/page/InfoPage';
import HomePage from './component/page/HomePage';
import RegisterPage from './component/page/RegisterPage';
import ProfilePage from './component/page/ProfilePage';
import ResetPasswordPage from './component/page/ResetPasswordPage';
import ForgetPasswordPage from './component/page/ForgetPasswordPage';
import ProductPage from './component/page/ProductPage';
import ProductDetailPage from './component/page/ProductDetailPage';
import AppRoute from './route/AppRoute';
import CartPage from './component/page/CartPage';




function App() {
  return (
    // <div>
    //   <InfoPage/>
    // </div>
    

    <AppRoute/>
  );
}

export default App;