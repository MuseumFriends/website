import React from "react";
import PageHeading from "../components/PageHeading";

export default () => {
  const rates = [{
    name: 'Individual',
    rate: '10.00'
  }, {
    name: 'Youth',
    rate: '8.00'
  }, {
    name: 'Family',
    rate: '15.00'
  }, {
    name: 'Corporate',
    rate: '18.00'
  }]

  return (
    <section class="page">
      <PageHeading name="Join Us" />
      <h2>Become a Friend for...</h2>
      <ul>
        <li>Free admission to the Windsor and Royal Borough Museum.</li>
        <li>Regular talks on subjects of local interest.</li>
        <li>Visits to sites of historic interest and other museums.</li>
        <li>Social events.</li>
        <li>The ability to get involved with the museum behind the scenes.</li>
      </ul>
      <h2>Annual Subscription Rates</h2>
      <ul>
        {
          rates.map(r => (
            <li key={'rate-' + r.name}>
              {r.name} – <strong>£{r.rate}</strong>
            </li>
          ))
        }
      </ul>
    </section>
  )
}