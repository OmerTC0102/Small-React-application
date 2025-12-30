function Card({ children }) {
  const cardStyle = {
    border: "1px solid #ccc",
    padding: "10px",
    margin: "10px 0",
    borderRadius: "4px",
  };

  return <div style={cardStyle}>{children}</div>;
}

export default Card;
