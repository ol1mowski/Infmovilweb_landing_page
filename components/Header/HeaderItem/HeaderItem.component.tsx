import ScrollLink from "@/components/Utils/ScrollLink/ScrollLink.component";
import s from "./HeaderItem.component.module.scss";

function HeaderItem({ item }: { item: { name: string; link: string } }) {
  const { name, link } = item;

  return (
    <>
      {name === "Contacto" ? (
        <a target="_blank" href={link}>
          <li className={s.item}>{name}</li>
        </a>
      ) : (
        <ScrollLink link={link}>
          <li className={s.item}>{name}</li>
        </ScrollLink>
      )}
    </>
  );
}

export default HeaderItem;
