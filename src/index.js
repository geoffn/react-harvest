import React from 'react';
import ReactDOM from 'react-dom';
import HarvestEventList from './Events/HarvestEventList'
import Layout from './pg/Layout'
import './css/bulma.min.css';
import App from './App'

// class HarvestEventScreen extends React.Component {
//     render() {
//         return (
//             <div className="game">
//                 <div className="game-board">
//                     <HarvestEventList />
//                 </div>
//                 <div className="game-info">
//                     <div>{/* status */}</div>
//                     <ol>{/* TODO */}</ol>
//                 </div>
//             </div>
//         );
//     }
// }
// //==================================
// //Add event/ edit event / volunteer event

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);
