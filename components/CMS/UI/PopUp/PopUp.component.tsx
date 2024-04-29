import Image from 'next/image'
import s from './PopUp.component.module.scss';

import close from '@/assets/icons/close_icon.png';

function PopUp() {
  return (
   <section className={s.container}>
    <section className={s.container__close}>
      <div className={s.container__close__wrapper}>
        <Image width={20} height={20} src={close} alt='close-icon' />
      </div>
    </section>
    <section className={s.container__content}>
      <h2 className={s.container__content__title}>Are You Sure ?</h2>
      <p className={s.container__content__description}>Are you sure you want to leave this admin panel</p>
    </section>
    <section className={s.container__buttons}>
      <button className={s.container__buttons__btn_cancel}>Cancel</button>
      <button className={s.container__buttons__btn_close}>Leave</button>
    </section>
   </section>
  )
}

export default PopUp
