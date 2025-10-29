// import { useState, useEffect } from 'react'
// import '../assets/styles/components/DataEntryTable.css'

// function DataEntryTable() {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     department: '',
//     phone: ''
//   })
  
//   const [entries, setEntries] = useState([])
  
//     useEffect(() => {
//     if (entries.length > 0) {
//       localStorage.setItem('userEntries', JSON.stringify(entries))
//     }
//   }, [entries])

//   useEffect(() => {
//     const savedData = localStorage.getItem('userEntries')
//     if (savedData) {
//       try {
//         setEntries(JSON.parse(savedData))
//       } catch (error) {
//         console.error('Error loading data:', error)
//       }
//     }
//   }, [])



//   const handleInputChange = (e) => {
//     const { name, value } = e.target
//     setFormData(prev => ({
//       ...prev,
//       [name]: value
//     }))
//   }

//   const handleSubmit = (e) => {
//     e.preventDefault()
    
//     if (!formData.name || !formData.email || !formData.department || !formData.phone) {
//       alert('Please fill in all fields')
//       return
//     }

//     const newEntry = {
//       ...formData,
//       id: Date.now(),
//       timestamp: new Date().toLocaleString()
//     }

//     setEntries(prev => [...prev, newEntry])
    
//     setFormData({
//       name: '',
//       email: '',
//       department: '',
//       phone: ''
//     })
//   }

//   const handleDelete = (id) => {
//     setEntries(prev => {
//       const updated = prev.filter(entry => entry.id !== id)
//       localStorage.setItem('userEntries', JSON.stringify(updated))
//       return updated
//     })
//   }

//   const handleClearAll = () => {
//     if (window.confirm('Are you sure you want to clear all entries?')) {
//       setEntries([])
//       localStorage.removeItem('userEntries')
//     }
//   }

//   return (
//     <div className="data-entry-container">
//       <h3>User Data Entry Form</h3>
//       <p className="subtitle">Enter 4 parameters and save to local database</p>
      
//       <form onSubmit={handleSubmit} className="entry-form">
//         <div className="form-group">
//           <label htmlFor="name">Name:</label>
//           <input
//             type="text"
//             id="name"
//             name="name"
//             value={formData.name}
//             onChange={handleInputChange}
//             placeholder="Enter name"
//           />
//         </div>

//         <div className="form-group">
//           <label htmlFor="email">Email:</label>
//           <input
//             type="email"
//             id="email"
//             name="email"
//             value={formData.email}
//             onChange={handleInputChange}
//             placeholder="Enter email"
//           />
//         </div>

//         <div className="form-group">
//           <label htmlFor="department">Department:</label>
//           <input
//             type="text"
//             id="department"
//             name="department"
//             value={formData.department}
//             onChange={handleInputChange}
//             placeholder="Enter department"
//           />
//         </div>

//         <div className="form-group">
//           <label htmlFor="phone">Phone:</label>
//           <input
//             type="tel"
//             id="phone"
//             name="phone"
//             value={formData.phone}
//             onChange={handleInputChange}
//             placeholder="Enter phone"
//           />
//         </div>

//         <button type="submit">Add Entry</button>
//       </form>

//       <div className="entries-section">
//         <div className="entries-header">
//           <h4>Saved Entries ({entries.length})</h4>
//           {entries.length > 0 && (
//             <button onClick={handleClearAll} className="clear-btn">
//               Clear All
//             </button>
//           )}
//         </div>

//         {entries.length === 0 ? (
//           <p className="no-entries">No entries yet. Add some data above.</p>
//         ) : (
//           <table className="entries-table">
//             <thead>
//               <tr>
//                 <th>Name</th>
//                 <th>Email</th>
//                 <th>Department</th>
//                 <th>Phone</th>
//                 <th>Added</th>
//                 <th>Action</th>
//               </tr>
//             </thead>
//             <tbody>
//               {entries.map(entry => (
//                 <tr key={entry.id}>
//                   <td>{entry.name}</td>
//                   <td>{entry.email}</td>
//                   <td>{entry.department}</td>
//                   <td>{entry.phone}</td>
//                   <td>{entry.timestamp}</td>
//                   <td>
//                     <button 
//                       onClick={() => handleDelete(entry.id)}
//                       className="delete-btn"
//                     >
//                       Delete
//                     </button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         )}
//       </div>
//     </div>
//   )
// }

// export default DataEntryTable





import { useState, useEffect } from 'react'
import './DataEntryTable.css'

function DataEntryTable() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    department: '',
    phone: '',
  })

  const [entries, setEntries] = useState([])

  // Load saved entries from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem('userEntries')
    if (saved) {
      try {
        setEntries(JSON.parse(saved))
      } catch (err) {
        console.error('Error parsing localStorage data:', err)
      }
    }
  }, [])

  // Save entries to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('userEntries', JSON.stringify(entries))
  }, [entries])

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const isEmpty = Object.values(formData).some((v) => !v.trim())
    if (isEmpty) {
      alert('Please fill in all fields.')
      return
    }

    const newEntry = {
      ...formData,
      id: crypto.randomUUID(), // unique id
      timestamp: new Date().toLocaleString(),
    }

    setEntries((prev) => [...prev, newEntry])
    setFormData({ name: '', email: '', department: '', phone: '' })
  }

  const handleDelete = (id) => {
    setEntries((prev) => prev.filter((e) => e.id !== id))
  }

  const handleClearAll = () => {
    if (confirm('Are you sure you want to clear all entries?')) {
      setEntries([])
      localStorage.removeItem('userEntries')
    }
  }

  return (
    <div className="data-entry-container">
      <h3>User Data Entry Form</h3>
      <p className="subtitle">Enter 4 parameters and save to local database</p>

      {/* --- FORM --- */}
      <form onSubmit={handleSubmit} className="entry-form">
        {['name', 'email', 'department', 'phone'].map((field) => (
          <div className="form-group" key={field}>
            <label htmlFor={field}>
              {field.charAt(0).toUpperCase() + field.slice(1)}:
            </label>
            <input
              type={
                field === 'email'
                  ? 'email'
                  : field === 'phone'
                  ? 'tel'
                  : 'text'
              }
              id={field}
              name={field}
              value={formData[field]}
              onChange={handleChange}
              placeholder={`Enter ${field}`}
            />
          </div>
        ))}
        <button type="submit">Add Entry</button>
      </form>

      {/* --- TABLE --- */}
      <div className="entries-section">
        <div className="entries-header">
          <h4>Saved Entries ({entries.length})</h4>
          {entries.length > 0 && (
            <button onClick={handleClearAll} className="clear-btn">
              Clear All
            </button>
          )}
        </div>

        {entries.length === 0 ? (
          <p className="no-entries">No entries yet. Add some data above.</p>
        ) : (
          <table className="entries-table">
            <thead>
              <tr>
                {['Name', 'Email', 'Department', 'Phone', 'Added', 'Action'].map(
                  (header) => (
                    <th key={header}>{header}</th>
                  )
                )}
              </tr>
            </thead>
            <tbody>
              {entries.map((entry) => (
                <tr key={entry.id}>
                  <td>{entry.name}</td>
                  <td>{entry.email}</td>
                  <td>{entry.department}</td>
                  <td>{entry.phone}</td>
                  <td>{entry.timestamp}</td>
                  <td>
                    <button
                      onClick={() => handleDelete(entry.id)}
                      className="delete-btn"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  )
}

export default DataEntryTable
