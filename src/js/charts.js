// =============================================================================
// Dashio - Chart.js Integration
// =============================================================================

import Chart from 'chart.js/auto'

// Get CSS variable value
function getCssVar(name) {
  return getComputedStyle(document.documentElement).getPropertyValue(name).trim()
}

// Get current primary color (respects color switcher)
function getPrimaryColor() {
  return getCssVar('--bs-primary') || '#4f46e5'
}

// Chart color palette
function getChartColors() {
  return {
    primary: getPrimaryColor(),
    success: getCssVar('--bs-success') || '#10b981',
    info: getCssVar('--bs-info') || '#0ea5e9',
    warning: getCssVar('--bs-warning') || '#f59e0b',
    danger: getCssVar('--bs-danger') || '#ef4444',
    secondary: getCssVar('--bs-secondary') || '#64748b'
  }
}

// Common chart options for dark/light mode compatibility
function getCommonOptions() {
  const isDark = document.documentElement.getAttribute('data-bs-theme') === 'dark'
  const textColor = isDark ? '#94a3b8' : '#64748b'
  const gridColor = isDark ? 'rgba(148, 163, 184, 0.1)' : 'rgba(100, 116, 139, 0.1)'

  return {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        labels: {
          color: textColor,
          usePointStyle: true,
          padding: 20
        }
      }
    },
    scales: {
      x: {
        ticks: { color: textColor },
        grid: { color: gridColor }
      },
      y: {
        ticks: { color: textColor },
        grid: { color: gridColor }
      }
    }
  }
}

// Initialize all charts on the page
export function initCharts() {
  const colors = getChartColors()
  const options = getCommonOptions()

  // Line Chart
  const lineCtx = document.getElementById('lineChart')
  if (lineCtx) {
    lineCtx.innerHTML = ''
    const canvas = document.createElement('canvas')
    lineCtx.appendChild(canvas)

    new Chart(canvas, {
      type: 'line',
      data: {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        datasets: [{
          label: 'Revenue',
          data: [12000, 19000, 15000, 25000, 22000, 30000, 28000],
          borderColor: colors.primary,
          backgroundColor: colors.primary + '20',
          tension: 0.4,
          fill: true
        }, {
          label: 'Orders',
          data: [8000, 12000, 10000, 18000, 15000, 22000, 20000],
          borderColor: colors.success,
          backgroundColor: 'transparent',
          tension: 0.4
        }]
      },
      options: {
        ...options,
        plugins: {
          ...options.plugins,
          legend: {
            ...options.plugins.legend,
            position: 'top'
          }
        }
      }
    })
  }

  // Bar Chart
  const barCtx = document.getElementById('barChart')
  if (barCtx) {
    barCtx.innerHTML = ''
    const canvas = document.createElement('canvas')
    barCtx.appendChild(canvas)

    new Chart(canvas, {
      type: 'bar',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [{
          label: 'Sales',
          data: [65, 59, 80, 81, 56, 72],
          backgroundColor: colors.primary,
          borderRadius: 4
        }, {
          label: 'Expenses',
          data: [28, 48, 40, 39, 36, 45],
          backgroundColor: colors.secondary,
          borderRadius: 4
        }]
      },
      options
    })
  }

  // Doughnut Chart
  const doughnutCtx = document.getElementById('doughnutChart')
  if (doughnutCtx) {
    doughnutCtx.innerHTML = ''
    const canvas = document.createElement('canvas')
    doughnutCtx.appendChild(canvas)

    new Chart(canvas, {
      type: 'doughnut',
      data: {
        labels: ['Desktop', 'Mobile', 'Tablet'],
        datasets: [{
          data: [55, 35, 10],
          backgroundColor: [colors.primary, colors.success, colors.warning],
          borderWidth: 0
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        cutout: '70%',
        plugins: {
          legend: {
            display: false
          }
        }
      }
    })
  }

  // Pie Chart
  const pieCtx = document.getElementById('pieChart')
  if (pieCtx) {
    pieCtx.innerHTML = ''
    const canvas = document.createElement('canvas')
    pieCtx.appendChild(canvas)

    new Chart(canvas, {
      type: 'pie',
      data: {
        labels: ['Sales', 'Marketing', 'Support'],
        datasets: [{
          data: [45, 30, 25],
          backgroundColor: [colors.primary, colors.info, colors.danger],
          borderWidth: 0
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: false
          }
        }
      }
    })
  }

  // Polar Area Chart
  const polarCtx = document.getElementById('polarChart')
  if (polarCtx) {
    polarCtx.innerHTML = ''
    const canvas = document.createElement('canvas')
    polarCtx.appendChild(canvas)

    new Chart(canvas, {
      type: 'polarArea',
      data: {
        labels: ['Q1', 'Q2', 'Q3', 'Q4'],
        datasets: [{
          data: [11, 16, 7, 14],
          backgroundColor: [
            colors.primary + '80',
            colors.success + '80',
            colors.warning + '80',
            colors.info + '80'
          ],
          borderWidth: 0
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: false
          }
        },
        scales: {
          r: {
            ticks: {
              display: false
            },
            grid: {
              color: getCommonOptions().scales.x.grid.color
            }
          }
        }
      }
    })
  }

  // Area Chart (Full Width)
  const areaCtx = document.getElementById('areaChart')
  if (areaCtx) {
    areaCtx.innerHTML = ''
    const canvas = document.createElement('canvas')
    areaCtx.appendChild(canvas)

    new Chart(canvas, {
      type: 'line',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [{
          label: 'Revenue',
          data: [30000, 35000, 32000, 40000, 45000, 42000, 50000, 55000, 52000, 60000, 65000, 70000],
          borderColor: colors.primary,
          backgroundColor: colors.primary + '20',
          tension: 0.4,
          fill: true
        }, {
          label: 'Profit',
          data: [15000, 18000, 16000, 22000, 25000, 23000, 28000, 32000, 30000, 35000, 38000, 42000],
          borderColor: colors.success,
          backgroundColor: colors.success + '20',
          tension: 0.4,
          fill: true
        }]
      },
      options: {
        ...options,
        plugins: {
          ...options.plugins,
          legend: {
            ...options.plugins.legend,
            position: 'top'
          }
        }
      }
    })
  }

  // Dashboard Revenue Chart (on main dashboard)
  const dashboardChartCtx = document.getElementById('dashboardChart')
  if (dashboardChartCtx) {
    dashboardChartCtx.innerHTML = ''
    const canvas = document.createElement('canvas')
    dashboardChartCtx.appendChild(canvas)

    new Chart(canvas, {
      type: 'line',
      data: {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        datasets: [{
          label: 'Revenue',
          data: [12000, 19000, 15000, 25000, 22000, 30000, 28000],
          borderColor: colors.primary,
          backgroundColor: colors.primary + '20',
          tension: 0.4,
          fill: true
        }]
      },
      options: {
        ...options,
        plugins: {
          legend: {
            display: false
          }
        }
      }
    })
  }

  // Traffic Sources Chart (dashboard doughnut)
  const trafficChartCtx = document.getElementById('trafficChart')
  if (trafficChartCtx) {
    trafficChartCtx.innerHTML = ''
    const canvas = document.createElement('canvas')
    trafficChartCtx.appendChild(canvas)

    new Chart(canvas, {
      type: 'doughnut',
      data: {
        labels: ['Direct', 'Organic', 'Referral', 'Social'],
        datasets: [{
          data: [42, 28, 18, 12],
          backgroundColor: [colors.primary, colors.success, colors.warning, colors.info],
          borderWidth: 0
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        cutout: '75%',
        plugins: {
          legend: {
            display: false
          }
        }
      }
    })
  }
}

// Re-initialize charts when theme changes (to update colors)
export function setupChartThemeObserver() {
  const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      if (mutation.attributeName === 'data-bs-theme') {
        // Small delay to let CSS variables update
        setTimeout(initCharts, 50)
      }
    })
  })

  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ['data-bs-theme']
  })
}

// Export for use
export default { initCharts, setupChartThemeObserver }
