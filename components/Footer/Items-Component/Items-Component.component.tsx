import s from "./Items-Component.component.module.scss";

type ItemsComponentProps = {
  title: string;
  items: string[];
};

function ItemsComponent({ title, items }: ItemsComponentProps) {
  return (
    <div className={s.container__itemsContainer__wrapper}>
      <h4 className={s.container__itemsContainer__wrapper__title}>{title}</h4>
      {items.map((item) => (
        <span key={item} className={s.container__itemsContainer__wrapper__item}>
          {item}
        </span>
      ))}
    </div>
  );
}

export default ItemsComponent;
