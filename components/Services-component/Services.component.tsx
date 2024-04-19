import Image from "next/image";
import s from "./Services.component.module.scss";

import arrow from '@/assets/icons/arrow.png';
import image from '@/assets/images/compouter_repair.jpeg';

function Services() {
  return (
    <section>
      <section>
        <div>
          <span>Sobre Nosotros</span>
          <h2>Nuestros servicios</h2>
        </div>
      </section>
      <section>
        <div>
          <div>
            <div>
              <Image src={image} alt="service-image" />
            </div>
            <div>
              <h3>reparación de ordenador</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
            </div>
            <div>
              <div>
                <span>leer más</span>
                <Image src={arrow} alt="arrow-icon" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}

export default Services;
