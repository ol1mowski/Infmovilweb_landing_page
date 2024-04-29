import Image from 'next/image'
import s from './PopUp.component.module.scss';

function PopUp() {
  return (
   <section>
    <section>
      <div>
        <Image src={''} alt='' />
      </div>
    </section>
    <section>
      <h2>Are You Sure ?</h2>
      <p>Are you surecyou want to leave this admin panel</p>
    </section>
    <section>
      <button>Cancel</button>
      <button>Leave</button>
    </section>
   </section>
  )
}

export default PopUp
