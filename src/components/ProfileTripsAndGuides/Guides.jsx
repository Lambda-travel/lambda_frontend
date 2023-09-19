
const Guides = () => {
  return (
    <div className="container-start-planning-trip">
      <p className="text-trip-plans-profile">
        {`You haven't written any guide yet.`}
      </p>
      <button
        className="customButton disabled"
        disabled
      >
        Create a Guide
      </button>
    </div>
  );
};

export default Guides;
