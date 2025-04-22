import About from "./(components)/About";
import Contact from "./(components)/Contact";
import Header from "./(components)/Header";
import Services from "./(components)/Services";

export default function Home() {
  return (
    <div className="bg-gray-100">
      <div className="container mx-auto px-4 py-10">
        <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-xl">
          <Header></Header>
          <div className="p-6 md:p-10">
            <About></About>
            <Services></Services>
            <Contact></Contact>
          </div>
        </div>
      </div>
    </div>
  );
}
