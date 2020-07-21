import React from 'react';
import ReactDOM from 'react-dom';
import HarvestEventList from './Events/HarvestEventList'

import './css/bulma.min.css';

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

    <HarvestEventList />,
    //<Map />,
    document.getElementById('root')
);