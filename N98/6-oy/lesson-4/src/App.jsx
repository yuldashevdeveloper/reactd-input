import React, { useState, useRef } from "react";

function OrderForm() {
  const [orders, setOrders] = useState([]);
  const [date, setDate] = useState("");
  const [orderId, setOrderId] = useState("");
  const [name, setName] = useState("");
  const priceRef = useRef();
  const quantityRef = useRef();
  const totalRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    const newOrder = {
      date,
      orderId,
      name,
      price: priceRef.current.value,
      quantity: quantityRef.current.value,
      total: totalRef.current.value,
    };

    setOrders([...orders, newOrder]);

    setDate("");
    setOrderId("");
    setName("");
    priceRef.current.value = "";
    quantityRef.current.value = "";
    totalRef.current.value = "";
  };

  return (
    <div className="container" style={{ padding: "20px", maxWidth: "1000px", margin: "0 auto" }}>
      <h2>Order Form</h2>
      <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
        <input
          type="text"
          placeholder="Date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <input
          type="text"
          placeholder="Order ID"
          value={orderId}
          onChange={(e) => setOrderId(e.target.value)}
        />
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input type="text" placeholder="Price" ref={priceRef} />
        <input type="text" placeholder="Quantity" ref={quantityRef} />
        <input type="text" placeholder="Total" ref={totalRef} />
        <button type="submit">Add Order</button>
      </form>

      <table border="1" width="100%" cellPadding="10">
        <thead>
          <tr style={{ backgroundColor: "#333", color: "white" }}>
            <th>Date</th>
            <th>Order ID</th>
            <th>Name</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order, index) => (
            <tr key={index}>
              <td>{order.date}</td>
              <td>{order.orderId}</td>
              <td>{order.name}</td>
              <td>{order.price}</td>
              <td>{order.quantity}</td>
              <td>{order.total}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default OrderForm;

