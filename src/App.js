import "./App.css";
import "./style.css";
import Signin from "./component/Signin";
import Footer from "./component/Footer";
import Header from "./component/Header";
import Layout from "./component/Layout";
import Carousel from "./component/Carousel";
import LayoutComment from "./component/LayoutComment";
import pricingdata from "./pricingdata";
import commentdata from "./commentdata";
import CallToAction from "./component/CallToAction";
import ProductFeature from "./component/ProductFeature";
function App() {
  return (
    <div className="App">
      <Header />
      <Signin />
      <div className="text-center mt-5 mb-5">
        <h1 className="text-primary fw-bold">PRODUCT PHOTO</h1>
      </div>
      <Carousel />
      <CallToAction />
      <div className="text-center mt-5 mb-5">
        <h1 className="text-primary fw-bold">PRICING</h1>
      </div>
      <Layout data={pricingdata} />
      <ProductFeature />
      <div className="text-center mt-5 mb-5">
        <h1 className="text-primary fw-bold">WHAT THEY SAID</h1>
      </div>
      <LayoutComment data={commentdata} />

      <Footer />
    </div>
  );
}

export default App;
