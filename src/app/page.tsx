import Image from 'next/image'

export default function Home() {
  return (
    <section className='w-full grid grid-cols-12 gap-4 font-space-grotesk'>
      <div className='contact_section h-screen col-span-12 justify-self-stretch px-16 py-8 grid grid-cols-12 gap-4 grid-rows-3'>
        <div className='text_content col-span-5 col-start-2 row-span-1 row-start-2 flex items-center'>
          <div>
            <p className='header_text'>
            Zmieniamy się dla Ciebie
            </p>
            <p className='subtext'>
            skontaktuj się z nami
            </p>
          </div>          
        </div>
        <div className='text_content col-span-6 col-start-8 row-span-1 row-start-2 flex items-center'>
          <div className='contact_details'>
            <p className='email'>email biuro@rpv.net.pl</p>
            <p className='phone_nr'>tel. +48 515 114 676</p>
            <a className='fb' href="">fb</a>
            <a className='google' href="https://l.facebook.com/l.php?u=https%3A%2F%2Fmaps.app.goo.gl%2FwBWLiucDQzSAyQuY9%3Fg_st%3Difm&h=AT0KwiSBWx5CVLMFfm2KWqHNKMtlbvG9SoijmG4xJf2mWiZKW5u5gH3PkL_dFokIMeuT8f8pEKGXo-EmyOEurw_qEeMZb_s9Yv1sTQEA0iEClCSzz3qyHw7fCjLnbpkUqbUEjfYss0KAmQc&s=1">google</a>
          </div>
        </div>
        <div className='img_placeholder col-end-12'>
            <svg width="620" height="320" viewBox="0 0 32 17" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.6448 0H7.56205L0 16.4H10.0827L17.6448 0Z" fill="#0053A0"/>
              <path d="M31.0044 -7.62939e-06H20.9217L13.3596 16.4H23.4424L31.0044 -7.62939e-06Z" fill="#0053A0"/>
            </svg>
          </div>
      </div>
    </section>
  )
}
