import NavBar from "Components/NavBar";
import Footer from "Components/Footer";
import DataTable from "Components/DataTable";
import BarChart from "Components/BarChart";
import DonutChart from "Components/DonutChart";

function App() {
  return (
    <>
      <div className="container">
        <NavBar />
        <h1 className="text-primary">Sales Dashboard</h1>

        <div className="row px-3">
          <div className="col-sm-6">
            <h5 className="text-center text-secondary"> Taxas de sucesso (%)</h5>
            <BarChart />
          </div>

          <div className="col-sm-6">
            <h5 className="text-center text-secondary"> Todas as vendas</h5>
            <DonutChart />
          </div>
        </div>
        <div className="py-3">
          <h2 className="text-primary">Todas vendas</h2>
        </div>
        <DataTable />

      </div>
      <Footer />
    </>
  );
}

export default App;
