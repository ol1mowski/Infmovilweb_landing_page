import s from "./Items-Component.component.module.scss";

type ItemsComponentProps = {
  title: string;
  items: Array<{ name: string; link: string }>;
};

function ItemsComponent({ title, items }: ItemsComponentProps) {
  console.log(items);

  return (
    <div className={s.wrapper}>
      <h4 className={s.wrapper__title}>{title}</h4>
      {items.map((item) => (
        <a className={s.wrapper__linkItem} href={item.link}>
          <span key={item.name} className={s.wrapper__item}>
            {item.name}
          </span>
        </a>
      ))}
    </div>
  );
}

export default ItemsComponent;
