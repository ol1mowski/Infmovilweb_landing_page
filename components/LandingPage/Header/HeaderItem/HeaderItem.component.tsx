import s from "./HeaderItem.component.module.scss";

function HeaderItem({ item }: { item: { name: string, link: string } }) {
  
  const { name, link } = item;

  return <a href={link}><li className={s.item}>{name}</li></a>;
}

export default HeaderItem;
