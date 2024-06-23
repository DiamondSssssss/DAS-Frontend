import React, { useState } from "react";
import "../ManagerLayout/ManagePricingTimeline.css";

const ManageOrderTimelines = () => {
  const [services] = useState([
    {
      id: 1,
      type: "Diamond Assessment",
      price: "$100",
      timeline: "3 days",
      details:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquam tincidunt justo ut imperdiet.",
    },
    {
      id: 2,
      type: "Gemstone Assessment",
      price: "$80",
      timeline: "2 days",
      details:
        "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
    },
    {
      id: 3,
      type: "Jewelry Assessment",
      price: "$120",
      timeline: "4 days",
      details:
        "Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.",
    },
  ]);

  const viewDetails = (id) => {
    const service = services.find((service) => service.id === id);
    if (service) {
      alert(`Details for ${service.type}: ${service.details}`);
    }
  };

  return (
    <div className="container">
      <h2 className="title">Manage Assessment Services</h2>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Service Type</th>
            <th>Price</th>
            <th>Timeline</th>
            <th>Details</th>
          </tr>
        </thead>
        <tbody>
          {services.map((service) => (
            <tr key={service.id}>
              <td className="id">{service.id}</td>
              <td className="type">{service.type}</td>
              <td className="price">{service.price}</td>
              <td className="timeline">{service.timeline}</td>
              <td className="details">
                <button
                  className="details-button"
                  onClick={() => viewDetails(service.id)}
                >
                  View Details
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageOrderTimelines;
