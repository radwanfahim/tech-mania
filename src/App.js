import { Routes, Route } from "react-router-dom";
import "./App.css";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Form from "./components/HireUs/Form/Form";
import HireUs from "./components/HireUs/HireUs";
import Nav from "./components/Nav/Nav";
import NotFound from "./components/NotFound/NotFound";
import CustomarReview from "./components/Review/CustomerReview/CustomerReview";
import Review from "./components/Review/Review";
import Services from "./components/Services/Services";

function App() {
  return (
    <div className="App">
      <Nav></Nav>
      <Routes>
        <Route path="/" element={<Header />}></Route>
        <Route path="nav" element={<Nav />}></Route>
        <Route path="home" element={<Header />}></Route>
        <Route path="services" element={<Services />}></Route>
        <Route path="review" element={<Review />}></Route>
        <Route path="review/customer" element={<CustomarReview />}></Route>
        <Route path="contact" element={<Contact />}></Route>
        <Route path="home/contact" element={<Contact />}></Route>
        <Route path="hire" element={<HireUs />}></Route>
        <Route path="hire/form" element={<Form />}></Route>
        <Route path="home/hire/form" element={<Form />}></Route>
        <Route path="home/hire" element={<HireUs />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
