import Card from "./components/Card";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import Hero from "./components/Hero";
import Title from "./components/Title";

function App(){
  return(
    <div>
      <Hero/>
      <Gallery/>
      <Title title ={"Events"} subtitle ={"Our latest events and involvement"}/>
      <div className="flex flex-wrap justify-center mt-10 gap-4">
        <Card eventTitle={"1974 AD 30th Anniversary Promotion Rally"} eventDescription={"Here goes our event description"} eventImage={"/assets/1.jpg"}/>
        <Card eventTitle={"1974 AD 30th Anniversary Promotion Rally"} eventDescription={"Here goes our event description"} eventImage={"/assets/2.jpg"}/>
        <Card eventTitle={"1974 AD 30th Anniversary Promotion Rally"} eventDescription={"Here goes our event description"} eventImage={"/assets/11.jpg"}/>
        <Card eventTitle={"1974 AD 30th Anniversary Promotion Rally"} eventDescription={"Here goes our event description"} eventImage={"/assets/12.jpg"}/>
        
      </div>
      <Footer/>
    </div>
  );
}
export default App;