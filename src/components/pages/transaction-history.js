import React from 'react';


const data = [
  { invoice: 'INV-01-09072010', status: 'Completed', credit: '1200', amount: '$240' },
  { invoice: 'INV-01-09072010', status: 'Completed', credit: '2400', amount: '$240' },
  { invoice: 'INV-01-09072010', status: 'Completed', credit: '120', amount: '$240' },
  { invoice: 'INV-01-09072010', status: 'Completed', credit: '4000', amount: '$500' },
  { invoice: 'INV-01-09072010', status: 'Completed', credit: '350', amount: '$240' },
  { invoice: 'INV-01-09072010', status: 'Completed', credit: '600', amount: '$240' },
];

function TransactionHistory() {
  const h1Style = {
    position: 'relative',
    top: '40px',
    left: '70px',
    width: '400px',
    height: '47px',
    textAlign: 'left',
    font: 'normal normal 600 33px/32px Poppins',
    letterSpacing: '0px',
    color: '#151515',
    opacity: '1',
  };

  const listContainerStyle = {
    position: 'absolute',
    width: 'calc(100% - auto)', 
    height: 'calc(60vh - auto)',
    top: '160px',
    left: '100px',
    // width: '80vw',
    // height: '50vh',
    background: '#FFFFFF',
    border: '1px solid #EAEAEA',
    borderRadius: '8px',
    opacity: '1',
    padding: '20px',
    boxSizing: 'border-box',
  };

  const tableStyle = {
    width: '100%',
    borderCollapse: 'collapse',
  };

  const headerStyle = {
    borderBottom: '2px solid #ccc',
    padding: '10px',
    textAlign: 'left',
    fontWeight: 'bold',
  };

  const cellStyle = {
    padding: '10px',
    borderBottom: '1px solid #ddd',
  };

  return (
    <div>
      <h1 style={h1Style}>Credits Purchase History</h1>
      <div style={listContainerStyle}>
        <table style={tableStyle}>
          <thead>
            <tr>
              <th style={headerStyle}></th>
              <th style={headerStyle}>Invoice</th>
              <th style={headerStyle}>Status</th>
              <th style={headerStyle}>Credit</th>
              <th style={headerStyle}>Amount</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index}>
                <td style={cellStyle}>
                  <input type="checkbox" />
                </td>
                <td style={cellStyle}>{item.invoice}</td>
                <td style={cellStyle}>{item.status}</td>
                <td style={cellStyle}>{item.credit}</td>
                <td style={cellStyle}>{item.amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default TransactionHistory;
