import Image from "next/image";
import s from "./Opinios-Card.component.module.scss";

import quotes from "@/assets/icons/quotes.png";

function OpiniosCard() {
  return (
    <section>
      <div>
        <div>
          <div>
            <Image width={30} height={30} src={quotes} alt="quotes-icon" />
          </div>
        </div>
        <p>
          Had a problem with my laptop's charger. Was diagnosed in 3 minutes.
          Solution done. Problem solved.
        </p>
        <div>
          <span>Vadim Danilevichius</span>
        </div>
      </div>
      <div>
        <span>opinión de google mapas</span>
      </div>
    </section>
  );
}

export default OpiniosCard;
