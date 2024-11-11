const SingleTZBox = ({ id, zoneName, zoneTime, handleDeleteTZ }) => {
  return (
    <div className="single-timezone">
      <span onClick={() => handleDeleteTZ(id)}>X</span>
      <h3 className="single-clock">{zoneName}</h3>
      <div>{zoneTime}</div>
    </div>
  );
};

export default SingleTZBox;
