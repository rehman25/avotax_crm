// import React from "react";
// import "./assets/css/JobProgress.css";
// const JobsProgress = () => {
//   return (
//     <div className="jPMainContainer">
//       <div className="JpTop">
//         <h6>Job in Progress</h6>
//       </div>
//       <div>
//         {/* <table>
//           <thead>
//             <tr>
//               <th>Job</th>
//               <th>Date</th>
//               <th>Client</th>
//               <th>Job Status</th>
//               <th>WIP Total</th>
//               <th>View</th>
//             </tr>
//           </thead>
//           <tbody>
//             <tr>
//               <td>Data 1 Data 1Data 1Data 1Data 1Data 1Data 1Data 1</td>
//               <td>Data 2</td>
//               <td>Data 3</td>
//               <td>Data 4</td>
//               <td>Data 5</td>
//               <td>Data 6</td>
//             </tr>
//             <tr>
//               <td>Data 7</td>
//               <td>Data 8</td>
//               <td>Data 9</td>
//               <td>Data 10</td>
//               <td>Data 11</td>
//               <td>Data 12</td>
//             </tr>
//           </tbody>
//         </table> */}

//         <div class="table-container" role="table" aria-label="Destinations">
//   <div class="flex-table header" role="rowgroup">
//   <div class="flex-row first" role="columnheader">Country</div>
//   <div class="flex-row" role="columnheader">Events</div>
//   <div class="flex-row" role="columnheader">Time</div>
//   <div class="flex-row" role="columnheader">Fees</div>
// </div>
// <div class="flex-table row" role="rowgroup">
//   <div class="flex-row first" role="cell"><span class="flag-icon flag-icon-gb"></span> United Kingdom</div>
//   <div class="flex-row" role="cell">Stonehenge, Windsor and Bath with Pub Lunch </div>
//   <div class="flex-row" role="cell">19 Sep, 1p.m.</div>
//   <div class="flex-row" role="cell">US$500</div>
// </div>
// <div class="flex-table row" role="rowgroup">
//   <div class="flex-row first"  role="cell"><span class="flag-icon flag-icon-ca"></span> Canada</div>
//   <div class="flex-row" role="cell">Vancouver to Victoria and Butchart Gardens Tour </div>
//   <div class="flex-row" role="cell">23 Sep, 1:30p.m.</div>
//   <div class="flex-row" role="cell">US$387</div>
// </div>
// <div class="flex-table row" role="rowgroup">
//   <div class="flex-row rowspan first"><span class="flag-icon flag-icon-us"></span> United States</div>
//   <div class="column">
//     <div class="flex-row">
//       <div class="flex-cell" role="cell">Napa and Sonoma Wine Country Tour</div>
//       <div class="flex-cell" role="cell">5 Sep, 9p.m.</div>
//       <div class="flex-cell" role="cell">US$600</div>
//     </div>
//     <div class="flex-row" role="rowgroup">
//       <div class="flex-cell" role="cell">Day Trip to Martha's Vineyard</div>
//       <div class="flex-cell">12 Sep, 5p.m.</div>
//       <div class="flex-cell">US$600</div>
//     </div>
//     <div class="flex-row">
//       <div class="flex-cell">Grand Canyon West Rim and Hoover Dam Tour</div>
//       <div class="flex-cell">5 Sep, 2p.m.</div>
//       <div class="flex-cell">US$550</div>
//     </div>
//   </div>
// </div>
// <div class="flex-table row">
//   <div class="flex-row first" role="cell"><span class="flag-icon flag-icon-au"></span> Australia</div>
//   <div class="flex-row">Blue Mountains Tours</div>
//   <div class="flex-row">9 Sep, 2p.m.</div>
//   <div class="flex-row">US$400</div>
// </div>
// <div class="flex-table row">
//   <div class="flex-row first"><span class="flag-icon flag-icon-nz"></span> New Zealand</div>
//   <div class="flex-row">Milford Sound Coach & Cruise</div>
//   <div class="flex-row">12 Sep, 2p.m.</div>
//   <div class="flex-row">US$400</div>
// </div>
// </div>
//       </div>
//     </div>
//   );
// };

// export default JobsProgress;

import React from "react";
// import "./index.css";
import { Space, Table, Tag } from "antd";
const { Column, ColumnGroup } = Table;
const data = [
  {
    key: "1",
    firstName: "John",
    lastName: "Brown",
  },
  {
    key: "2",
    firstName: "Jim",
    lastName: "Green Green Green Green Green Green",
  },
  {
    key: "3",
    firstName: "Joe",
    lastName: "Black",
  },
];
const JobsProgress = () => (

  <Table dataSource={data}>
    <ColumnGroup>
      <Column title="First Name" dataIndex="firstName" key="firstName" />
      <Column title="Last Name" dataIndex="lastName" key="lastName" />
      <Column title="Age" dataIndex="age" key="age" />
      <Column title="Address" dataIndex="address" key="address" />
      <Column title="Address" dataIndex="address" key="address" />
      <Column title="Address" dataIndex="address" key="address" />
    </ColumnGroup>
    
    {/* <Column
      title="Tags"
      dataIndex="tags"
      key="tags"
      render={(tags) => (
        <>
          {tags.map((tag) => (
            <Tag color="blue" key={tag}>
              {tag}
            </Tag>
          ))}
        </>
      )}
    /> */}
    {/* <Column
      title="Action"
      key="action"
      render={(_, record) => (
        <Space size="middle">
          <a>Invite {record.lastName}</a>
          <a>Delete</a>
        </Space>
      )}
    /> */}
  </Table>
);
export default JobsProgress;
