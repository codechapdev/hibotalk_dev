import React, { useEffect, useRef, useState } from 'react';
import Chart from 'chart.js/auto';
import AdminHeader from '../Header';

const ConversionFunnel = () => {
  const chartRef = useRef(null);
  const canvasRef = useRef(null);
  const [showCustomDate, setShowCustomDate] = useState(false);

  useEffect(() => {
    const ctx = canvasRef.current.getContext('2d');

    // Destroy previous chart if exists
    if (chartRef.current) {
      chartRef.current.destroy();
    }


    chartRef.current = new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['Sep 1', 'Sep 5', 'Sep 10', 'Sep 15', 'Sep 19', 'Sep 25'],
        datasets: [
          {
            label: 'Sessions',
            data: [2000, 3000, 5500, 5000, 7500, 7000],
            borderColor: '#3b82f6',
            backgroundColor: 'rgba(59, 130, 246, 0.1)',
            fill: true,
            tension: 0.4,
            pointRadius: 4,
            pointHoverRadius: 6,
          },
        ],
      },
      options: {
        responsive: true,
        plugins: {
          legend: { display: false },
        },
        scales: {
          y: {
            beginAtZero: true,
            ticks: {
              callback: function (value) {
                return value / 1000 + 'K';
              },
            },
          },
        },
      },
    });
     return () => {
      chartRef.current?.destroy();
    };
  }, []);

  const handleSelectChange = (e) => {
    setShowCustomDate(e.target.value === 'custom');
  };

  return (
    <>
    <style>{`
        .stats {
      display: flex;
      gap: 2rem;
      flex-wrap: wrap;
    }

    .stat {
      flex: 1 1 22%;
      background: #f1f5f9;
      padding: 1rem;
      border-radius: 8px;
      text-align: center;
    }

    .stat h2 {
      margin: 0;
      font-size: 1.5rem;
      color: #1e3a8a;
    }

    .stat p {
      margin: 0.25rem 0 0;
      font-size: 0.9rem;
      color: #555;
    }

    .funnel {
      margin-top: 2rem;
      text-align: center;
    }

    .funnel h3 {
      margin-bottom: 1rem;
      font-size: 1.2rem;
      color: #333;
    }

    .funnel-box {
      background: linear-gradient(to right, #0ea5e9, #22c55e);
      color: white;
      margin: 1rem auto;
      width: 300px;
      padding: 1rem;
      border-radius: 8px;
      position: relative;
    }

    .funnel-box::after {
      content: "↓";
      position: absolute;
      bottom: -20px;
      left: 50%;
      transform: translateX(-50%);
      font-size: 1.5rem;
      color: #888;
    }

    .funnel-box:last-child::after {
      display: none;
    }

    canvas {
      margin-top: 2rem;
    }

    select {
      padding: 0.4rem 1rem;
      border-radius: 6px;
      border: 1px solid #ccc;
      float: right;
    }
    `}

    </style>
    <div className="container-scroller">
      <div className="container-fluid page-body-wrapper" style={{ paddingTop: '25px' }}>
          <AdminHeader/>
        <div id="content"></div>
        <div className="main-panel">
          <div className="content-wrapper">
            <div className="row" style={{ padding: '60px' }}>
              <div className="card">
                <div className="card-body">
                  <div className="row">
                    {showCustomDate && (
                      <>
                        <div className="col-lg-2 customedate">
                          <input type="date" className="form-control" />
                        </div>
                        <div className="col-lg-2 customedate">
                          <input type="date" className="form-control" />
                        </div>
                      </>
                    )}
                  </div>

                  <select
                    className="select-box"
                    name="date"
                    id="mySelect"
                    onChange={handleSelectChange}
                  >
                    <option>Select</option>
                    <option className="dropdown-item">Today</option>
                    <option className="dropdown-item">week</option>
                    <option className="dropdown-item">Month</option>
                    <option className="dropdown-item">Year</option>
                    <option className="dropdown-item" value="custom">Custom Date</option>
                  </select>

                  <h4 className="card-title"></h4>

                  <div className="stats">
                    <div className="stat">
                      <h2>10,000</h2>
                      <p>Registrations</p>
                    </div>
                    <div className="stat">
                      <h2>70%</h2>
                      <p>First Session Rate</p>
                    </div>
                    <div className="stat">
                      <h2>42%</h2>
                      <p>Returning Session Rate</p>
                    </div>
                    <div className="stat">
                      <h2>58%</h2>
                      <p>Drop-off Rate</p>
                    </div>
                  </div>

                  <div className="funnel">
                    <h3>Conversion Funnel</h3>
                    <div className="funnel-box">Registered Users – 10,000</div>
                    <div className="funnel-box">First Session – 7,000 (70%)</div>
                    <div className="funnel-box">Returning Session – 4,200 (60%)</div>
                  </div>

                  <canvas id="lineChart" ref={canvasRef} height="100"></canvas>
                </div>
              </div>
            </div>
          </div>

          <footer className="footer">
            <div className="d-sm-flex justify-content-center justify-content-sm-between">
              <span className="float-none float-sm-end d-block mt-1 mt-sm-0 text-center">
                Copyright © 2025. All rights reserved.
              </span>
            </div>
          </footer>
        </div>
      </div>
    </div>
    </>
  );
};

export default ConversionFunnel;
