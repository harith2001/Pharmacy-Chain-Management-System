import React from "react";

const Home = () => {
  return <div className ="container">
<br></br>
<br></br>
<table class="table">
  <thead>
    <tr className ="table-dark">
      <th scope="col">#</th>
      <th scope="col">Medicine ID</th>
      <th scope="col">Medicine Name</th>
      <th scope="col">Number of Medicine</th>
      <th scope="col">Expire Date</th>
      <th scope="col">Purchased Date</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>mark</td>
      <td>Otto</td>
      <td>@mdo</td>
      <td>jjjjj</td>
      <td>kkkkk</td>
      <td className ="d-flex justify-content-between">
        <button className ="btn btn-primary">Update</button>
        <button className ="btn btn-danger">Detele</button>
      </td>
    </tr>
  </tbody>
</table>

  </div>;
};

export default Home;
