import Image from "next/image";
import s from "./HeaderInfoBar.component.module.scss";

function HeaderInfoBar() {
  return (
    <section>
      <section>
        <div>
          <Image src={""} alt="" />
          <span>928 53 56 58</span>
        </div>
        <div>
          <Image src={""} alt="" />
          <span>928 53 56 58</span>
        </div>
      </section>
      <section>
        <div>
          <Image src={""} alt="" />
          <Image src={""} alt="" />
          <Image src={""} alt="" />
        </div>
      </section>
    </section>
  );
}

export default HeaderInfoBar;
