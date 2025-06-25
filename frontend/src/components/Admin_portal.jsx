import React, { useEffect,useRef } from 'react';
import AdminHeader from '../pages/Header';
import { Chart } from 'chart.js/auto';

const AdminPortal = () => {

  const performanceLineRef = useRef(null);
  const performanceLineNewRef = useRef(null);
  const marketingOverviewRef = useRef(null);
  const marketingOverviewNewRef = useRef(null);

  useEffect(() => {
    const destroyIfExists = (ref) => {
      if (ref.current && ref.current.chartInstance) {
        ref.current.chartInstance.destroy();
      }
    };

    // Helper for gradients
    const createGradient = (ctx, stops) => {
      const gradient = ctx.createLinearGradient(0, 0, 0, 100);
      stops.forEach(stop => gradient.addColorStop(...stop));
      return gradient;
    };

    const configLineChart = (canvasRef, labels, datasets) => {
      const ctx = canvasRef.current.getContext('2d');
      const chartInstance = new Chart(ctx, {
        type: 'line',
        data: {
          labels,
          datasets
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          elements: { line: { tension: 0.4 } },
          plugins: { legend: { display: false } },
          scales: {
            x: {
              grid: { display: false },
              ticks: { color: '#6B778C', font: { size: 10 } }
            },
            y: {
              grid: { color: '#F0F0F0' },
              ticks: { color: '#6B778C', font: { size: 10 } }
            }
          }
        }
      });
      canvasRef.current.chartInstance = chartInstance;
    };

    const configBarChart = (canvasRef, labels, datasets) => {
      const ctx = canvasRef.current.getContext('2d');
      const chartInstance = new Chart(ctx, {
        type: 'bar',
        data: {
          labels,
          datasets
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: { legend: { display: false } },
          scales: {
            x: {
              grid: { display: false },
              ticks: { color: '#6B778C', font: { size: 10 } },
              stacked: true
            },
            y: {
              grid: { color: '#F0F0F0' },
              ticks: { color: '#6B778C', font: { size: 10 } }
            }
          }
        }
      });
      canvasRef.current.chartInstance = chartInstance;
    };

    // Create Line Chart (performanceLine)
    destroyIfExists(performanceLineRef);
    configLineChart(performanceLineRef,
      ["SUN","sun","MON","mon","TUE","tue","WED","wed","THU","thu","FRI","fri","SAT"],
      [
        {
          label: 'This week',
          data: [50, 110, 60, 290, 200, 115, 130, 170, 90, 210, 240, 280, 200],
          backgroundColor: createGradient(performanceLineRef.current.getContext('2d'), [
            [0, 'rgba(26, 115, 232, 0.18)'], [1, 'rgba(26, 115, 232, 0.02)']
          ]),
          borderColor: '#1F3BB3',
          borderWidth: 1.5,
          fill: true,
          pointRadius: 4,
          pointBackgroundColor: '#1F3BB3',
          pointBorderColor: '#fff'
        },
        {
          label: 'Last week',
          data: [30, 150, 190, 250, 120, 150, 130, 20, 30, 15, 40, 95, 180],
          backgroundColor: createGradient(performanceLineRef.current.getContext('2d'), [
            [0, 'rgba(0, 208, 255, 0.19)'], [1, 'rgba(0, 208, 255, 0.03)']
          ]),
          borderColor: '#52CDFF',
          borderWidth: 1.5,
          fill: true,
          pointRadius: 0,
          pointBackgroundColor: '#52CDFF',
          pointBorderColor: '#fff'
        }
      ]
    );

    // Create Line Chart (performanceLinenew)
    destroyIfExists(performanceLineNewRef);
    configLineChart(performanceLineNewRef,
      ["SUN","sun","MON","mon","TUE","tue","WED","wed","THU","thu","FRI","fri","SAT"],
      [
        {
          label: 'This week',
          data: [50, 110, 60, 290, 200, 115, 130, 170, 90, 210, 240, 280, 200],
          backgroundColor: createGradient(performanceLineNewRef.current.getContext('2d'), [
            [0, 'rgba(26, 115, 232, 0.18)'], [1, 'rgba(26, 115, 232, 0.02)']
          ]),
          borderColor: '#1F3BB3',
          borderWidth: 1.5,
          fill: true
        },
        {
          label: 'Last week',
          data: [30, 150, 190, 250, 120, 150, 130, 20, 30, 15, 40, 95, 180],
          backgroundColor: createGradient(performanceLineNewRef.current.getContext('2d'), [
            [0, 'rgba(0, 208, 255, 0.19)'], [1, 'rgba(0, 208, 255, 0.03)']
          ]),
          borderColor: '#52CDFF',
          borderWidth: 1.5,
          fill: true
        }
      ]
    );

    // Create Bar Chart (marketingOverview)
    destroyIfExists(marketingOverviewRef);
    configBarChart(marketingOverviewRef,
      ["JAN","FEB","MAR","APR","MAY","JUN","JUL","AUG","SEP","OCT","NOV","DEC"],
      [
        {
          label: 'Last week',
          data: [110, 220, 200, 190, 220, 110, 210, 110, 205, 202, 201, 150],
          backgroundColor: '#52CDFF'
        },
        {
          label: 'This week',
          data: [215, 290, 210, 250, 290, 230, 290, 210, 280, 220, 190, 300],
          backgroundColor: '#1F3BB3'
        }
      ]
    );

    // Create Bar Chart (marketingOverviewnew)
    destroyIfExists(marketingOverviewNewRef);
    configBarChart(marketingOverviewNewRef,
      ["Paris","Marseille","Toulouse","Lyon","Nice","Nantes","Strasbourg","Montpellier","Bordeaux","Toulon","Dijon","Grenoble"],
      [
        {
          label: 'Last week',
          data: [110, 220, 200, 190, 220, 110, 210, 110, 205, 202, 201, 150],
          backgroundColor: '#52CDFF'
        },
        {
          label: 'This week',
          data: [215, 290, 210, 250, 290, 230, 290, 210, 280, 220, 190, 300],
          backgroundColor: '#1F3BB3'
        }
      ]
    );
  }, []);

  


  return (
     <>
      
    <div className="container-scroller">
      {/* Reusable Header & Sidebar */}
      <AdminHeader showGreeting={true} />

      {/* Dashboard Main Content */}
      <div className="main-panel">
        <div className="content-wrapper" style={{ padding: '1.5rem 2.187rem 1.5rem 5.5rem' }}>
          <div className="row">
            <div className="col-sm-12">
              <div className="home-tab">
                <div className="tab-content tab-content-basic " style={{margin:'-550px -220px 0 325px '}}>
                  <div className="tab-pane fade show active" id="overview" role="tabpanel" aria-labelledby="overview">
                    <div className="row">
                      {/* Total Customers */}
                      <div className="col-lg-4 d-flex flex-column">
                        <div className="row flex-grow">
                          <div className="col-md-6 col-lg-12 grid-margin stretch-card">
                            <div className="card bg-primary card-rounded">
                              <div className="card-body pb-0">
                                <h4 className="card-title card-title-dash text-white mb-4">Total Customers</h4>
                                <div className="row">
                                  <div className="col-sm-12">
                                    <h2 className="text-info">3527</h2>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Total Mentor */}
                      <div className="col-lg-4 d-flex flex-column">
                        <div className="row flex-grow">
                          <div className="col-md-6 col-lg-12 grid-margin stretch-card">
                            <div className="card bg-primary card-rounded">
                              <div className="card-body pb-0">
                                <h4 className="card-title card-title-dash text-white mb-4">Total Mentor</h4>
                                <div className="row">
                                  <div className="col-sm-12">
                                    <h2 className="text-info">267</h2>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Total Mentees */}
                      <div className="col-lg-4 d-flex flex-column">
                        <div className="row flex-grow">
                          <div className="col-md-6 col-lg-12 grid-margin stretch-card">
                            <div className="card bg-primary card-rounded">
                              <div className="card-body pb-0">
                                <h4 className="card-title card-title-dash text-white mb-4">Total Mentees</h4>
                                <div className="row">
                                  <div className="col-sm-12">
                                    <h2 className="text-info">1299</h2>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Total iOS Customer */}
                      <div className="col-lg-4 d-flex flex-column">
                        <div className="row flex-grow">
                          <div className="col-md-6 col-lg-12 grid-margin stretch-card">
                            <div className="card bg-primary card-rounded">
                              <div className="card-body pb-0">
                                <h4 className="card-title card-title-dash text-white mb-4">Total Ios Customer</h4>
                                <div className="row">
                                  <div className="col-sm-12">
                                    <h2 className="text-info">357</h2>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Total Android Customer */}
                      <div className="col-lg-4 d-flex flex-column">
                        <div className="row flex-grow">
                          <div className="col-md-6 col-lg-12 grid-margin stretch-card">
                            <div className="card bg-primary card-rounded">
                              <div className="card-body pb-0">
                                <h4 className="card-title card-title-dash text-white mb-4">Total Android Customer</h4>
                                <div className="row">
                                  <div className="col-sm-12">
                                    <h2 className="text-info">892</h2>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-lg-6 d-flex flex-column">
                        <div className="row flex-grow">
                          <div className="col-12 col-lg-4 col-lg-12 grid-margin stretch-card">
                            <div className="card card-rounded">
                              <div className="card-body">
                                <div className="d-sm-flex justify-content-between align-items-start">
                                  <div>
                                    <h4 className="card-title card-title-dash">Total Mentor</h4>
                                  </div>
                                  <div id="performanceLine-legend"></div>
                                </div>
                                <div className="chartjs-wrapper mt-4">
                                  <canvas id="performanceLine" ref={performanceLineRef}></canvas>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="col-lg-6 d-flex flex-column">
                        <div className="row flex-grow">
                          <div className="col-12 col-lg-4 col-lg-12 grid-margin stretch-card">
                            <div className="card card-rounded">
                              <div className="card-body">
                                <div className="d-sm-flex justify-content-between align-items-start">
                                  <div>
                                    <h4 className="card-title card-title-dash">Total Mentees</h4>
                                  </div>
                                  <div id="performanceLinenew-legend"></div>
                                </div>
                                <div className="chartjs-wrapper mt-4">
                                  <canvas id="performanceLinenew" ref={performanceLineNewRef} width=""></canvas>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-lg-6 d-flex flex-column">
                        <div className="row flex-grow">
                          <div className="col-12 grid-margin stretch-card">
                            <div className="card card-rounded">
                              <div className="card-body">
                                <div className="d-sm-flex justify-content-between align-items-start">
                                  <div>
                                    <h4 className="card-title card-title-dash">Total Bookings</h4>
                                  </div>
                                </div>
                                <div className="d-sm-flex align-items-center mt-1 justify-content-between">
                                  <div className="d-sm-flex align-items-center mt-4 justify-content-between">
                                    <h2 className="me-2 fw-bold">36,2531</h2>
                                  </div>
                                  <div className="me-3">
                                    <div id="marketingOverview-legend"></div>
                                  </div>
                                </div>
                                <div className="chartjs-bar-wrapper mt-3">
                                  <canvas id="marketingOverview" ref={marketingOverviewRef}></canvas>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="col-lg-6 d-flex flex-column">
                        <div className="row flex-grow">
                          <div className="col-12 grid-margin stretch-card">
                            <div className="card card-rounded">
                              <div className="card-body">
                                <div className="d-sm-flex justify-content-between align-items-start">
                                  <div>
                                    <h4 className="card-title card-title-dash">Location Wise User</h4>
                                  </div>
                                </div>
                                <div className="d-sm-flex align-items-center mt-1 justify-content-between">
                                  <div className="d-sm-flex align-items-center mt-4 justify-content-between">
                                    <h2 className="me-2 fw-bold">8754</h2>
                                  </div>
                                  <div className="me-3">
                                    <div id="marketingOverviewnew-legend"></div>
                                  </div>
                                </div>
                                <div className="chartjs-bar-wrapper mt-3">
                                  <canvas id="marketingOverviewnew" ref={marketingOverviewNewRef}></canvas>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
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
    </>
  );
};

export default AdminPortal;
