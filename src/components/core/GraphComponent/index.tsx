import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import { IDataGraphic } from 'utils/interfaces/dataGraphic';

interface IGraph {
  data: IDataGraphic;
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
          },
          plugins: {
            title: {
              display: true,
              text: data.title,
              color: 'black',
              font: {
                size: 16
              }
            },
          }
        }
      });
    }
  }, [data]);

  return <canvas ref={chartRef}></canvas>;
};

export default GraphComponent;