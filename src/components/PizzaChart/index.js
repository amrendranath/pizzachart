import { Chart } from "@antv/g2";
import { useEffect, useContext } from "react";
import { StoreContext } from "../../contexts/StoreContext";

const getProductPriceRange = (price) => {
  if (price >= 0 && price <= 499) {
    return "0-499";
  } else if (price >= 500 && price <= 999) {
    return "500-999";
  } else if (price >= 1000 && price <= 1499) {
    return "1000-1499";
  } else if (price >= 1500 && price <= 2000) {
    return "1500-2000";
  }
};

const PizzaChart = () => {
  const { products, loading } = useContext(StoreContext);
  useEffect(() => {
    if (loading || !products?.length) return;
    products.forEach((product) => {
      product.type = `1`;
      product.buckets = getProductPriceRange(product.price);
    });
    const chart = new Chart({
      container: document.getElementById("pizzaChart"),
      autoFit: true,
      height: 400,
      padding: [40, 100, 80, 80],
    });
    chart.data(products);
    chart.scale("type", {
      range: [0, 1],
    });
    chart.coordinate("polar");
    chart.legend(false);
    chart.axis("buckets", {
      grid: {
        alignTick: false,
        line: {
          style: {
            lineDash: [0, 0],
          },
        },
      },
    });
    chart
      .point()
      .adjust("jitter")
      .position("buckets*type")
      .color("buckets")
      .shape("circle")
      .style({
        fillOpacity: 0.85,
      });
    chart.render();
    return () => chart.clear();
  }, [products, loading]);

  return <div id="pizzaChart"></div>;
};

export default PizzaChart;
