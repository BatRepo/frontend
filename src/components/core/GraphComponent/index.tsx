import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

interface IGraph {
  data: any;
}


const GraphComponent: React.FC<IGraph> = ({ data }) => {
  const chartRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (chartRef.current) {
      const ctx = chartRef.current.getContext('2d');

      new Chart(ctx, {
        type: 'bar',
        data: data,
        options: {
          responsive: true,
          scales: {
            y: {
              type: 'linear', // Usar a escala "linear"
              beginAtZero: true
            }
          }
        }
      });
    }
  }, [data]);

  return <canvas ref={chartRef}></canvas>;
};

export default GraphComponent;