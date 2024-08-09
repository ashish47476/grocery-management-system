import React, { useEffect, useState } from 'react';
import CanvasJSReact from '../lib/canvasjs.react'
import { getPurchasedProductsByCustomer } from '../services/product';
import "../styles.css"

const CanvasJSChart = CanvasJSReact.CanvasJSChart;

function ChartComponent() {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await getPurchasedProductsByCustomer();
        if (response) {
          setProducts(response['data']);
        } else {
          console.log("Error while calling get /product api");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, []);

  const chartOptions = {
    theme: 'light2',
    title: {
      text: 'Sold Products',
    },
    data: [
      {
        type: 'column',
        dataPoints: products.map(product => ({
          label: product.productName,
          y: product.quantity,
        })),
      },
    ],
  };

  return (
    <>
    <div className="background-container">
      <br></br>
      <br></br>
      <br></br>
      <br></br>
    <div className='input-box-admin'>
      {products.length > 0 ? (
        <CanvasJSChart options={chartOptions} />
      ) : (
        <p>Loading chart...</p>
      )}
      </div>
    </div>
          <nav className='navbar navbar-expand-sm bg-success navbar-dark sticky-top' >
          <div>    </div>
           <div style={{ textAlign: 'center'}}>GroceryBuddy. ©2024. All Rights Reserved</div> 
  </nav>
  </>
  );
}

export default ChartComponent;