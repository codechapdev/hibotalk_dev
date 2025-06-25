import React, { useEffect, useRef, useState } from 'react';
import Chart from 'chart.js/auto';
import AdminHeader from '../Header';

const Matching_Success_Rate = () => {
  const donutRef = useRef(null);
  const lineRef = useRef(null);
  const donutChart = useRef(null);
  const lineChart = useRef(null);
  const [showCustomDate, setShowCustomDate] = useState(false);

  useEffect(() => {
    if (donutChart.current) donutChart.current.destroy();
    if (lineChart.current) lineChart.current.destroy();

    Chart.register({
      id: 'centerText',
      beforeDraw(chart) {
        if (chart.config.type !== 'doughnut') return;
        const { width, height } = chart;
        const ctx = chart.ctx;
        ctx.restore();
        const fontSize = (height / 130).toFixed(2);
        ctx.font = `${fontSize}em sans-serif`;
        ctx.textBaseline = 'middle';
        ctx.fillStyle = '#111';
        const text = '81.7%';
        const textX = Math.round((width - ctx.measureText(text).width) / 2);
        const textY = height / 2;
        ctx.fillText(text, textX, textY);
        ctx.save();
      }
    });

    donutChart.current = new Chart(donutRef.current.getContext('2d'), {
      type: 'doughnut',
      data: {
        labels: ['Matched', 'Unmatched'],
        datasets: [{
          data: [245, 55],
          backgroundColor: ['#3b82f6', '#e5e7eb'],
          borderWidth: 0,
        }]
      },
      options: {
        cutout: '75%',
        plugins: {
          legend: { display: false },
        }
      }
    });

    lineChart.current = new Chart(lineRef.current.getContext('2d'), {
      type: 'line',
      data: {
        labels: ['Apr 1', 'Apr 7', 'Apr 14', 'Apr 21', 'Apr 28', 'May 1'],
        datasets: [
          {
            label: 'Mentors',
            data: [100, 110, 115, 120, 122, 123],
            borderColor: '#3b82f6',
            backgroundColor: 'transparent',
            tension: 0.3
          },
          {
            label: 'Mentees',
            data: [250, 260, 270, 285, 295, 300],
            borderColor: '#9ca3af',
            backgroundColor: 'transparent',
            tension: 0.3
          }
        ]
      },
      options: {
        responsive: true,
        plugins: {
          legend: { position: 'top' }
        },
        scales: {
          y: {
            beginAtZero: false
          }
        }
      }
    });

    return () => {
      donutChart.current?.destroy();
      lineChart.current?.destroy();
    };
  }, []);

  const handleDateChange = (e) => {
    setShowCustomDate(e.target.value === 'custom');
  };

  return (
    <>
      <style>{`
        .select-box {
          padding: 8px 12px;
          border: 1px solid #ccc;
          border-radius: 6px;
          float: right;
          margin: -50px 0px 0px 0px;
        }
        .cards {
          display: flex;
          gap: 20px;
          margin-bottom: 30px;
        }
        .card {
          flex: 1;
          border-radius: 10px;
          padding: 20px;
          text-align: center;
        }
        .card-new {
          flex: 1;
          margin-top: 30px;
          height: 170px;
          border-radius: 10px;
          padding: 8px;
          text-align: center;
          background-color: #d2d2d2 !important;
        }
        .card-icon {
          font-size: 40px;
        }
        .value {
          font-size: 26px;
          font-weight: bold;
        }
        .main {
          display: flex;
          gap: 20px;
        }
        .left, .right {
          flex: 1;
          background: #f7faff;
          padding: 20px;
          border-radius: 10px;
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
        .donut-title {
          margin-top: 15px;
          font-weight: bold;
        }
      `}</style>

      <div className="container-scroller">
        <div className="container-fluid page-body-wrapper" style={{ paddingTop: '25px' }}>
          <AdminHeader/>
          <div id="content"></div>
          <div className="main-panel">
            <div className="content-wrapper">
              <div className="row" style={{ padding: '60px' }}>
                <div className="card">
                  <div className="card-body">
                    <h4 className="card-title">Dashboard Overview</h4>

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

                    <select className="select-box" name="date" id="mySelect" onChange={handleDateChange}>
                      <option>Select</option>
                      <option className="dropdown-item">Today</option>
                      <option className="dropdown-item">week</option>
                      <option className="dropdown-item">Month</option>
                      <option className="dropdown-item">Year</option>
                      <option className="dropdown-item" value="custom">Custom Date</option>
                    </select>

                    <div className="cards">
                      <div className="card-new">
                        <div className="card-icon">👥</div>
                        <div className="value">120</div>
                        <h3>Total Mentors</h3>
                      </div>
                      <div className="card-new">
                        <div className="card-icon">🎓</div>
                        <div className="value">300</div>
                        <h3>Total Mentees</h3>
                      </div>
                      <div className="card-new">
                        <div className="card-icon">💙</div>
                        <div className="value">81.7%</div>
                        <h3>Matching Success Rate</h3>
                      </div>
                      <div className="card">
                        <canvas id="donutChart" ref={donutRef} width="100" height="100"></canvas>
                        <div className="donut-title">Matched Mentees</div>
                      </div>
                    </div>

                    <div className="main">
                      <div className="left">
                        <div className="funnel">
                          <h3>Matching Funnel</h3>
                          <div className="funnel-box">Total Mentees: <strong>300</strong></div>
                          <div className="funnel-box">Matched: <strong>245 (81.7%)</strong></div>
                          <div className="funnel-box">Ongoing Mentorships: <strong>175</strong></div>
                        </div>
                      </div>
                      <div className="right">
                        <h4>Trends Over Time</h4>
                        <canvas id="lineChart" ref={lineRef} height="200"></canvas>
                      </div>
                    </div>

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

export default Matching_Success_Rate;
