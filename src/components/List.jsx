import ListItem from "./ListItem";

function List({ children, data }) {
  return (
    <div>
      <h3 className="text-white font-semibold text-lg mb-4">{children}</h3>
      <ul className="space-y-2 text-sm">
        {data.map((item, index) => (
          <ListItem item={item} key={index} />
        ))}
      </ul>
    </div>
  );
}

export default List;
