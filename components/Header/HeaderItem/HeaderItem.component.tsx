import s from "./HeaderItem.component.module.scss";

function HeaderItem({ item }: { item: string }) {
  return <li className={s.header__navMenu__items__item}>{item}</li>;
}

export default HeaderItem;
