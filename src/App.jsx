import Card from "./components/Card";
import Gallery from "./components/Gallery";
import Hero from "./components/Hero";
import Title from "./components/Title";

function App(){
  return(
    <div>
      <Hero/>
      <Gallery title ={"Gallery"} subtitle ={"Our latest pictures"}/>
      <Title title ={"Events"} subtitle ={"Our latest events and involvement"}/>
      <div className="flex flex-wrap justify-center mt-10 gap-4">
        <Card/>
        <Card/>
        <Card/>
        <Card/>
      </div>
      
    </div>
  );
}
export default App;