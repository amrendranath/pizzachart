import { Grid, Paper } from "@mui/material";
import ProductsTable from "./components/ProductsTable";
import PizzaChart from "./components/PizzaChart";

function App() {
  return (
    <Grid sx={{ maxHeight: "100vh", overflow: "hidden" }} container spacing={2}>
      <Grid item md={4} sm={12} sx={{ overflowY: "auto" }}>
        <Paper>
          <PizzaChart />
        </Paper>
      </Grid>
      <Grid item md={8} sm={12}>
        <Paper>
          <ProductsTable />
        </Paper>
      </Grid>
    </Grid>
  );
}

export default App;
