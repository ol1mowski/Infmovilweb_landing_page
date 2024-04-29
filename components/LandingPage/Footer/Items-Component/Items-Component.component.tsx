import s from "./Items-Component.component.module.scss";

type ItemsComponentProps = {
  title: string;
  items: string[];
};

function ItemsComponent({ title, items }: ItemsComponentProps) {
  return (
    <div className={s.wrapper}>
      <h4 className={s.wrapper__title}>{title}</h4>
      {items.map((item) => (
        <span key={item} className={s.wrapper__item}>
          {item}
        </span>
      ))}
    </div>
  );
}

export default ItemsComponent;
