import React, { useEffect, useRef, useState } from 'react';
import Chart from 'chart.js/auto';
import AdminHeader from '../Header';

const Session_completion_rate = () => {
  const [showCustomDate, setShowCustomDate] = useState(false);
  const completionRef = useRef(null);
  const trendRef = useRef(null);
  const completionChart = useRef(null);
  const trendChart = useRef(null);

  // Initialize charts and clean up
  useEffect(() => {
    // Completion Doughnut Chart
    completionChart.current?.destroy();
    completionChart.current = new Chart(completionRef.current.getContext('2d'), {
      type: 'doughnut',
      data: {
        datasets: [{
          data: [80, 20],
          backgroundColor: ['#3b82f6', '#e5e7eb'],
          borderWidth: 0
        }]
      },
      options: {
        cutout: '75%',
        plugins: {
          legend: { display: false },
          tooltip: { enabled: false }
        }
      }
    });

    // Trend Line Chart
    trendChart.current?.destroy();
    trendChart.current = new Chart(trendRef.current.getContext('2d'), {
      type: 'line',
      data: {
        labels: ['30 Apr', '16 May', '14 May', '12 May', '18 May'],
        datasets: [
          {
            label: 'Scheduled',
            data: [3, 3, 4, 3, 4],
            borderColor: '#3b82f6',
            tension: 0.4
          },
          {
            label: 'Completed',
            data: [2, 2, 2, 1, 2],
            borderColor: '#22c55e',
            tension: 0.4
          }
        ]
      },
      options: {
        responsive: true,
        plugins: { legend: { position: 'top' } },
        scales: {
          y: { beginAtZero: true, stepSize: 1 }
        }
      }
    });

    return () => {
      completionChart.current?.destroy();
      trendChart.current?.destroy();
    };
  }, []);

  const handleSelectChange = (e) => {
    setShowCustomDate(e.target.value === 'custom');
  };

  return (
    <>
      <style>{`
        .filters { display: flex; gap: 1rem; flex-wrap: wrap; }
        .filters select { padding: 0.5rem 4rem; border: 1px solid #ccc; border-radius: 6px; }
        .summary { display: flex; gap: 1rem; margin: 2rem 0; flex-wrap: wrap; }
        .card { flex: 1 1 22%; padding: 1rem; background: #f0f4f8; border-radius: 10px; display: flex; align-items: center; gap: 0.75rem; }
        .card.completed, .card.missed, .card.total { background: #f0f0f0; }
        .card-total i { color: #3b82f6; }
        .card.completed i { color: #22c55e; }
        .card.missed i { color: #ef4444; }
        .progress-chart { width: 150px; height: 150px; position: relative; }
        .progress-chart canvas { position: absolute; top: 0; left: 0; }
        .progress-chart .percent { position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); font-size: 1.5rem; font-weight: bold; }
        .progress-chart .percent_new { position: absolute; top: -20%; left: 50%; width: 200px; transform: translate(-48%, -50%); }
        .charts { margin: 3rem 0; }
        .table-container { margin-top: 3rem; }
        table { width: 100%; border-collapse: collapse; background: #fff; border-radius: 8px; overflow: hidden; }
        th, td { padding: 0.75rem 1rem; text-align: left; }
        th { background: #f3f4f6; color: #333; }
        tr:nth-child(even) { background: #f9fafb; }
        .status-icon { display: inline-block; padding: 0.25rem 0.5rem; border-radius: 6px; font-size: 0.85rem; }
        .completed-status { background: #dcfce7; color: #16a34a; }
        .missed-status { background: #fee2e2; color: #dc2626; }
      `}</style>

      <div className="container-scroller">
        <div className="container-fluid page-body-wrapper" style={{ paddingTop: '25px' }}>
          <AdminHeader/>
          <div id="content"></div>
          <div className="main-panel">
            <div className="content-wrapper">
              <div className="row" style={{ padding: '60px' }}>
                <div className="card" style={{background:'white'}}>
                  <div className="card-body">
                    <h4 className="card-title">Mentor/Mentee Management</h4>

                    <div className="filters">
                      <div>
                        <label>Date Range</label><br />
                        <select className="select-box" name="date" id="mySelect" onChange={handleSelectChange}>
                          <option>Select</option>
                          <option className="dropdown-item">Today</option>
                          <option className="dropdown-item">week</option>
                          <option className="dropdown-item">Month</option>
                          <option className="dropdown-item">Year</option>
                          <option className="dropdown-item" value="custom">Custom Date</option>
                        </select>
                      </div>
                      <div>
                        {showCustomDate && (
                          <>
                            <div className="customedate"><input type="date" className="form-control" /></div>
                            <div className="customedate"><input type="date" className="form-control" /></div>
                          </>
                        )}
                      </div>
                      <div>
                        <label>Role</label><br />
                        <select><option>Mentor</option><option>Mentee</option></select>
                      </div>
                    </div>

                    <div className="summary">
                      <div className="card total"><i>📅</i><div><h3>150</h3><p>Total Sessions</p></div></div>
                      <div className="card completed"><i>✅</i><div><h3>120</h3><p>Sessions Completed</p></div></div>
                      <div className="card missed"><i>❌</i><div><h3>30</h3><p>Sessions Missed</p></div></div>
                      <div className="progress-chart">
                        <div className="percent_new">Sessions Completion Rate</div>
                        <canvas id="completionChart" ref={completionRef} width="150" height="150"></canvas>
                        <div className="percent">80%</div>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-md-6 grid-margin stretch-card">
                        <div className="charts">
                          <h3>Trend Over Time</h3>
                          <canvas id="trendChart" ref={trendRef} height="100" style={{height:'143px',width:'380px'}}></canvas>
                        </div>
                      </div>
                      <div className="col-md-6 grid-margin stretch-card">
                        <div className="table-container">
                          <h3>Session Details</h3>
                          <table>
                            <thead>
                              <tr>
                                <th>User Name</th>
                                <th>Role</th>
                                <th>Session Date</th>
                                <th>Status</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>John Smith</td><td>Mentor</td><td>16 May 2025</td>
                                <td><span className="status-icon completed-status">Completed</span></td>
                              </tr>
                              <tr>
                                <td>Alex Johnson</td><td>Mentor</td><td>14 May 2025</td>
                                <td><span className="status-icon missed-status">Missed</span></td>
                              </tr>
                              <tr>
                                <td>Emma Brown</td><td>Mentor</td><td>12 May 2025</td>
                                <td><span className="status-icon missed-status">Missed</span></td>
                              </tr>
                              <tr>
                                <td>Michael Davis</td><td>Mentor</td><td>8 May 2025</td>
                                <td><span className="status-icon missed-status">Missed</span></td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
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

export default Session_completion_rate;
