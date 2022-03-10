import React from 'react';
import Products from './components/Products';
import Categories from './components/Categories';

function App() {
  return (
    <table className ="table">
          <tbody>
          <a>showing cars in the database</a>
            <tr>
            <td><Categories/></td>
            <td><Products/></td>
            </tr>
          </tbody>
        </table>
  );
}

export default App;
