import s from "./HeaderItem.component.module.scss";

function HeaderItem({ item }: { item: string }) {
  return <li className={s.item}>{item}</li>;
}

export default HeaderItem;
