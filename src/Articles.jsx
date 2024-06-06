const Articles = ({ items }) => {
  return (
    <ul>
      {items.map((items) => (
        <li key={items.objectID}>
          <a href={items.url}>{items.title}</a>
        </li>
      ))}
    </ul>
  );
};

export default Articles;
