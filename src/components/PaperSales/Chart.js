// import React from 'react';
// import { Chart } from 'react-charts';

//  export default function MyChart() {
//   const data = React.useMemo(
//     () => [
//         {
//             label: 'Letter',
//             data: [
//               { x: 0, y: 10 },
//               { x: 1, y: 8 },
//               { x: 2, y: 12 },
//               { x: 3, y: 10 }
//             ]
//           },
//           {
//             label: 'Legal',
//             data: [
//               { x: 0, y: 10 },
//               { x: 1, y: 6 },
//               { x: 2, y: 7 },
//               { x: 3, y: 5 }
//             ]
//           },
//           {
//             label: 'Cardstock',
//             data: [
//               { x: 0, y: 10 },
//               { x: 1, y: 10 },
//               { x: 2, y: 9 },
//               { x: 3, y: 6 }
//             ]
//           },
//           {
//             label: 'Envelopes',
//             data: [
//               { x: 0, y: 10 },
//               { x: 1, y: 4 },
//               { x: 2, y: 6 },
//               { x: 3, y: 8 }
//             ]
//           }
//     ],
//     []
//   );

//   const axes = React.useMemo(
//     () => [
//       { primary: true, type: 'ordinal', position: 'bottom' },
//       { type: 'linear', position: 'left', stacked: false }
//     ],
//     []
//   );

//   const lineChart = (
//     <div
//       style={{
//         width: '250px',
//         height: '230px'
//       }}
//     >
//       <Chart data={data} axes={axes} />
//     </div>
//   );

//   return lineChart;
// }


