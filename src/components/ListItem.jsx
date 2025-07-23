function ListItem({ item }) {
  return (
    <li className="flex items-center gap-2">
      <img
        src="/assets/images/icons/icon-arrow-right-small.png"
        alt="icon arrow"
        className="w-[4px] h-[6px]"
      />
      <span className="text-footer font-montserrat">{item}</span>
    </li>
  );
}

export default ListItem;
