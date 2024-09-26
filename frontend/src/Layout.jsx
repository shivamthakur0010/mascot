import Bottom from "./utils/bottom/Bootom";
import Footer from "./utils/footer/Footer";
import Header from "./utils/header/Header";
import { Outlet} from 'react-router-dom';

function Layout() {
  
  return (
    <>
      <Header/>
      <Outlet />
      <Bottom/>
      <Footer/>
    </>
  );
}

export default Layout;
