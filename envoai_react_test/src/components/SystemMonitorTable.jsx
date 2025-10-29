// import { useState, useEffect } from 'react'
// import '../assets/styles/components/SystemMonitorTable.css'

// function SystemMonitorTable() {
//   const [systemStats, setSystemStats] = useState({
//     ramUsed: 0,
//     ramTotal: 16,
//     cpuUsage: 0,
//     networkSpeed: 0,
//     diskUsage: 0
//   })

//   const [isMonitoring, setIsMonitoring] = useState(true)

//   useEffect(() => {
//     if (!isMonitoring) return

//     const interval = setInterval(() => {
//       setSystemStats({
//         ramUsed: (4 + Math.random() * 10).toFixed(2),
//         ramTotal: 16,
//         cpuUsage: (10 + Math.random() * 80).toFixed(1),
//         networkSpeed: (0.5 + Math.random() * 99.5).toFixed(2),
//         diskUsage: (45 + Math.random() * 40).toFixed(1)
//       })
//     }, 2000)

//     return () => clearInterval(interval)
//   }, [isMonitoring])

//   const getStatusColor = (value, thresholds) => {
//     if (value < thresholds.good) return 'status-good'
//     if (value < thresholds.warning) return 'status-warning'
//     return 'status-critical'
//   }

//   const getCpuStatus = () => {
//     const cpu = parseFloat(systemStats.cpuUsage)
//     return getStatusColor(cpu, { good: 50, warning: 75 })
//   }

//   const getRamStatus = () => {
//     const percentage = (systemStats.ramUsed / systemStats.ramTotal) * 100
//     return getStatusColor(percentage, { good: 60, warning: 80 })
//   }

//   const getDiskStatus = () => {
//     const disk = parseFloat(systemStats.diskUsage)
//     return getStatusColor(disk, { good: 60, warning: 80 })
//   }

//   const getNetworkStatus = () => {
//     const speed = parseFloat(systemStats.networkSpeed)
//     if (speed > 50) return 'status-good'
//     if (speed > 10) return 'status-warning'
//     return 'status-critical'
//   }

//   return (
//     <div className="system-monitor-container">
//       <div className="monitor-header">
//         <h3>System Resource Monitor</h3>
//         <button 
//           onClick={() => setIsMonitoring(!isMonitoring)}
//           className={isMonitoring ? 'monitoring-active' : 'monitoring-paused'}
//         >
//           {isMonitoring ? '⏸ Pause' : '▶ Resume'}
//         </button>
//       </div>
      
//       <p className="subtitle">Real-time hardware resource monitoring</p>

//       <div className="stats-grid">
//         <div className={`stat-card ${getRamStatus()}`}>
//           <div className="stat-icon">💾</div>
//           <div className="stat-details">
//             <h4>RAM Usage</h4>
//             <div className="stat-value">
//               {systemStats.ramUsed} GB / {systemStats.ramTotal} GB
//             </div>
//             <div className="stat-percentage">
//               {((systemStats.ramUsed / systemStats.ramTotal) * 100).toFixed(1)}%
//             </div>
//             <div className="progress-bar">
//               <div 
//                 className="progress-fill"
//                 style={{ width: `${(systemStats.ramUsed / systemStats.ramTotal) * 100}%` }}
//               ></div>
//             </div>
//           </div>
//         </div>

//         <div className={`stat-card ${getCpuStatus()}`}>
//           <div className="stat-icon">⚡</div>
//           <div className="stat-details">
//             <h4>CPU Usage</h4>
//             <div className="stat-value">{systemStats.cpuUsage}%</div>
//             <div className="stat-percentage">
//               {parseFloat(systemStats.cpuUsage) < 50 ? 'Normal' : 
//                parseFloat(systemStats.cpuUsage) < 75 ? 'Moderate' : 'High'}
//             </div>
//             <div className="progress-bar">
//               <div 
//                 className="progress-fill"
//                 style={{ width: `${systemStats.cpuUsage}%` }}
//               ></div>
//             </div>
//           </div>
//         </div>

//         <div className={`stat-card ${getNetworkStatus()}`}>
//           <div className="stat-icon">🌐</div>
//           <div className="stat-details">
//             <h4>Network Speed</h4>
//             <div className="stat-value">{systemStats.networkSpeed} Mbps</div>
//             <div className="stat-percentage">
//               {parseFloat(systemStats.networkSpeed) > 50 ? 'Fast' : 
//                parseFloat(systemStats.networkSpeed) > 10 ? 'Moderate' : 'Slow'}
//             </div>
//             <div className="progress-bar">
//               <div 
//                 className="progress-fill"
//                 style={{ width: `${Math.min(parseFloat(systemStats.networkSpeed), 100)}%` }}
//               ></div>
//             </div>
//           </div>
//         </div>

//         <div className={`stat-card ${getDiskStatus()}`}>
//           <div className="stat-icon">💿</div>
//           <div className="stat-details">
//             <h4>Disk Usage</h4>
//             <div className="stat-value">{systemStats.diskUsage}%</div>
//             <div className="stat-percentage">
//               {parseFloat(systemStats.diskUsage) < 60 ? 'Healthy' : 
//                parseFloat(systemStats.diskUsage) < 80 ? 'Moderate' : 'High'}
//             </div>
//             <div className="progress-bar">
//               <div 
//                 className="progress-fill"
//                 style={{ width: `${systemStats.diskUsage}%` }}
//               ></div>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="monitor-info">
//         <p>
//           <strong>Note:</strong> This is a simulated system monitor. 
//           In production, this would connect to actual system APIs or backend services.
//           {isMonitoring && ' Updates every 2 seconds.'}
//         </p>
//       </div>
//     </div>
//   )
// }

// export default SystemMonitorTable


import { useState, useEffect } from 'react'
import './SystemMonitorTable.css'

function SystemMonitorTable() {
  const [systemStats, setSystemStats] = useState({
    ramUsed: 0,
    ramTotal: 16,
    cpuUsage: 0,
    networkSpeed: 0,
    diskUsage: 0,
  })
  const [isMonitoring, setIsMonitoring] = useState(true)

  // --- Simulate real-time updates ---
  useEffect(() => {
    if (!isMonitoring) return

    const interval = setInterval(() => {
      setSystemStats({
        ramUsed: +(4 + Math.random() * 10).toFixed(2),
        ramTotal: 16,
        cpuUsage: +(10 + Math.random() * 80).toFixed(1),
        networkSpeed: +(0.5 + Math.random() * 99.5).toFixed(2),
        diskUsage: +(45 + Math.random() * 40).toFixed(1),
      })
    }, 2000)

    return () => clearInterval(interval)
  }, [isMonitoring])

  // --- Helpers ---
  const getStatusColor = (value, { good, warning }) => {
    if (value < good) return 'status-good'
    if (value < warning) return 'status-warning'
    return 'status-critical'
  }

  const statusCalculators = {
    cpu: () => getStatusColor(systemStats.cpuUsage, { good: 50, warning: 75 }),
    ram: () =>
      getStatusColor(
        (systemStats.ramUsed / systemStats.ramTotal) * 100,
        { good: 60, warning: 80 }
      ),
    disk: () => getStatusColor(systemStats.diskUsage, { good: 60, warning: 80 }),
    network: () => {
      const s = systemStats.networkSpeed
      if (s > 50) return 'status-good'
      if (s > 10) return 'status-warning'
      return 'status-critical'
    },
  }

  // --- Subcomponent for rendering each stat card ---
  const StatCard = ({ icon, title, value, unit, percentage, statusClass, level }) => (
    <div className={`stat-card ${statusClass}`}>
      <div className="stat-icon">{icon}</div>
      <div className="stat-details">
        <h4>{title}</h4>
        <div className="stat-value">
          {value} {unit && <span>{unit}</span>}
        </div>
        <div className="stat-percentage">{level}</div>
        <div className="progress-bar">
          <div className="progress-fill" style={{ width: `${percentage}%` }}></div>
        </div>
      </div>
    </div>
  )

  const ramPercentage = (systemStats.ramUsed / systemStats.ramTotal) * 100

  return (
    <div className="system-monitor-container">
      {/* --- Header --- */}
      <div className="monitor-header">
        <h3>System Resource Monitor</h3>
        <button
          onClick={() => setIsMonitoring(!isMonitoring)}
          className={isMonitoring ? 'monitoring-active' : 'monitoring-paused'}
        >
          {isMonitoring ? '⏸ Pause' : '▶ Resume'}
        </button>
      </div>

      <p className="subtitle">Real-time hardware resource monitoring</p>

      {/* --- Stats Grid --- */}
      <div className="stats-grid">
        <StatCard
          icon="💾"
          title="RAM Usage"
          value={`${systemStats.ramUsed} / ${systemStats.ramTotal} GB`}
          percentage={ramPercentage}
          statusClass={statusCalculators.ram()}
          level={
            ramPercentage < 60 ? 'Normal' : ramPercentage < 80 ? 'Moderate' : 'High'
          }
        />

        <StatCard
          icon="⚡"
          title="CPU Usage"
          value={`${systemStats.cpuUsage}%`}
          percentage={systemStats.cpuUsage}
          statusClass={statusCalculators.cpu()}
          level={
            systemStats.cpuUsage < 50
              ? 'Normal'
              : systemStats.cpuUsage < 75
              ? 'Moderate'
              : 'High'
          }
        />

        <StatCard
          icon="🌐"
          title="Network Speed"
          value={systemStats.networkSpeed}
          unit="Mbps"
          percentage={Math.min(systemStats.networkSpeed, 100)}
          statusClass={statusCalculators.network()}
          level={
            systemStats.networkSpeed > 50
              ? 'Fast'
              : systemStats.networkSpeed > 10
              ? 'Moderate'
              : 'Slow'
          }
        />

        <StatCard
          icon="💿"
          title="Disk Usage"
          value={`${systemStats.diskUsage}%`}
          percentage={systemStats.diskUsage}
          statusClass={statusCalculators.disk()}
          level={
            systemStats.diskUsage < 60
              ? 'Healthy'
              : systemStats.diskUsage < 80
              ? 'Moderate'
              : 'High'
          }
        />
      </div>

      {/* --- Info Footer --- */}
      <div className="monitor-info">
        <p>
          <strong>Note:</strong> This is a simulated system monitor. In production,
          it would connect to actual system APIs or backend services.
          {isMonitoring && ' Updates every 2 seconds.'}
        </p>
      </div>
    </div>
  )
}

export default SystemMonitorTable

