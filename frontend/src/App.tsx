import NavBar from "Components/NavBar";
import Footer from "Components/Footer";
import DataTable from "Components/DataTable";

function App() {
  return (
    <>
      <div className="container">
        <NavBar />
        <h1 className="text-primary">Hello World</h1>
        <DataTable />

      </div>
      <Footer />
    </>
  );
}

export default App;
