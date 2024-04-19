import Image from "next/image";
import s from "./Opinions.component.module.scss";

import arrow from '@/assets/icons/arrow.png';

function Opinions() {
  return (
    <section className={s.container}>
      <section>
        <div>
          <span>opiniones</span>
        </div>
        <div>
          <h3>Nuestros clientes están satisfechos</h3>
        </div>
        <div>
          <button>
            <span>ver todas las opiniones</span> <Image src={arrow} alt="arrow-icon" />
          </button>
        </div>
        <div>
          <Image src={""} alt="star-icon" />
          <span>4.1/5</span>
        </div>
      </section>
      <section></section>
    </section>
  );
}

export default Opinions;
