const Seachbox = () => {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    console.log(evt.target.elements.query.value);
    evt.target.reset();
  };
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="query" />
      <button type="submit">Search</button>
    </form>
  );
};

export default Seachbox;
