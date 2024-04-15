
import Home from './Home';
import "./assets/fonts/icomoon/style.css";
import "./assets/css/bootstrap.min.css"
import "./assets/css/jquery.fancybox.min.css";
import "./assets/css/bootstrap-datepicker.css";
import "./assets/fonts/flaticon/font/flaticon.css";
import "./assets/css/aos.css"; 
import "bootstrap/dist/css/bootstrap.min.css";
function ITemp1({ contentData, images }) {
  return (
    <>
     <Home contentData={contentData} images={images} />
    </>
  );
}

export default ITemp1;