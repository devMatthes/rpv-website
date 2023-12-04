import Image from 'next/image'

export default function Home() {
  return (
    <section className='w-full grid grid-cols-12 gap-4 font-space-grotesk'>
      <div className='header h-screen col-span-12 justify-self-stretch px-16 py-8 bg-cover bg-bottom'>
        <div className='header_menu grid grid-cols-12 gap-4'>
          <div className='logo col-span-10'>
            <svg width="120" height="50" viewBox="0 0 120 50" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M47.2301 17.6667L25.115 4L3 17.6667V45H25.115" stroke="#F5FAFF" stroke-width="6"/>
              <path d="M38.6404 22.9056H28.5576L20.9956 39.3056H31.0783L38.6404 22.9056Z" fill="#1B85E8"/>
              <path d="M52 22.9056H41.9172L34.3552 39.3056H44.4379L52 22.9056Z" fill="#1B85E8"/>
              <path d="M67.1719 33.9688H64.2031V42H58.7188V19.25H67.6719C70.3698 19.25 72.4792 19.849 74 21.0469C75.5208 22.2448 76.2812 23.9375 76.2812 26.125C76.2812 27.7083 75.9583 29.0208 75.3125 30.0625C74.6771 31.1042 73.6771 31.9479 72.3125 32.5938L77.0625 41.7656V42H71.1875L67.1719 33.9688ZM64.2031 29.7344H67.6719C68.7135 29.7344 69.4948 29.4635 70.0156 28.9219C70.5469 28.3698 70.8125 27.6042 70.8125 26.625C70.8125 25.6458 70.5469 24.8802 70.0156 24.3281C69.4844 23.7656 68.7031 23.4844 67.6719 23.4844H64.2031V29.7344ZM85.0781 34.2812V42H79.5938V19.25H88.6719C90.4115 19.25 91.9479 19.5729 93.2812 20.2188C94.625 20.8542 95.6615 21.7656 96.3906 22.9531C97.1302 24.1302 97.5 25.4688 97.5 26.9688C97.5 29.1875 96.7031 30.9635 95.1094 32.2969C93.526 33.6198 91.349 34.2812 88.5781 34.2812H85.0781ZM85.0781 30.0469H88.6719C89.7344 30.0469 90.5417 29.7812 91.0938 29.25C91.6562 28.7188 91.9375 27.9688 91.9375 27C91.9375 25.9375 91.651 25.0885 91.0781 24.4531C90.5052 23.8177 89.724 23.4948 88.7344 23.4844H85.0781V30.0469ZM109.266 35.8125L113.797 19.25H119.922L112.266 42H106.266L98.6719 19.25H104.75L109.266 35.8125Z" fill="#F5FAFF"/>
            </svg>
          </div>
          <div className='menu_buttons col-span-2'>
            <button className='contact_btn mx-12'>
              KONTAKT
            </button>
            <button className='faq_btn'>
              FAQ
            </button>
          </div>
        </div>
        <div className='hero_section w-full grid grid-cols-12'>
          <div className='text_content col-span-12 px-24'>
            <p className='header_text'>
              Darmowa <span className='marked_text'>Energia</span> <br/> Dla Ciebie
            </p>
            <button className='scroll_page_btn'>
              zobacz więcej
              <svg width="32" height="17" viewBox="0 0 32 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.6448 0H7.56205L0 16.4H10.0827L17.6448 0Z" fill="#1B85E8"/>
                <path d="M31.0044 -7.62939e-06H20.9217L13.3596 16.4H23.4424L31.0044 -7.62939e-06Z" fill="#1B85E8"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className='first_section h-screen col-span-12 justify-self-stretch px-16 py-8 grid grid-cols-12 gap-4 grid-rows-3'>
        <div className='text_content col-span-5 col-start-2 row-span-1 row-start-2 flex items-center'>
          <div>
            <p className='header_text'>
              Fotowoltaika
            </p>
            <p className='subtext'>
            to proces produkcji energii elektrycznej z darmowego i niewyczerpalnego źródła energii – promieniowania słonecznego
            </p>
          </div>          
        </div>
        <div className='img_content col-span-6 col-start-8 row-span-1 row-start-2 flex items-center'>
          <div className='img_placeholder bg-cover bg-center'></div>
        </div>
      </div>
      <div className='second_section h-screen col-span-12 justify-self-stretch px-16 py-8 grid grid-cols-12 gap-4 grid-rows-3'>
        <div className='text_content col-span-5 col-start-2 row-span-1 row-start-2 flex items-center'>
          <div>
            <p className='header_text'>
              Oferujemy
            </p>
            <p className='subtext'>
              pomoc w uzyskaniu finansowania <br/>
              dopelnienie wszelkich formalnosci <br/>
              dobór mocy instalacji do Twoich potrzeb <br/>
              szybki i nieinwazyjny montaż <br/>
              kompleksową obsługę Twojej instalacji
            </p>
          </div>          
        </div>
        <div className='img_content col-span-6 col-start-8 row-span-1 row-start-2 flex items-center'>
          <div className='img_placeholder bg-cover bg center'></div>
        </div>
      </div>
      <div className='third_section h-screen col-span-12 justify-self-stretch px-16 py-8 grid grid-cols-12 gap-4 grid-rows-3'>
        <div className='text_content col-span-5 col-start-2 row-span-1 row-start-2 flex items-center'>
          <div>
            <p className='header_text'>
              Zaufali nam
            </p>
            <p className='subtext'>
              badz eko <br/>
              dolacz do nas <br/>
              jeb stare baby pradem
            </p>
          </div>          
        </div>
        <div className='img_content col-span-6 col-start-8 row-span-1 row-start-2 flex items-center'>
          <div className='img_placeholder bg-cover bg-center'></div>
        </div>
      </div>
      <div className='fourth_section h-screen col-span-12 justify-self-stretch px-16 py-8 grid grid-cols-12 gap-4 grid-rows-3'>
        <div className='text_content col-span-5 col-start-2 row-span-1 row-start-2 flex items-center'>
          <div>
            <p className='header_text'>
              Zainteresowany?
            </p>
            <p className='subtext'>
            skontaktuj sie z nami w celu poznania dalszych krokow do obnizenia swoich
            rachunkow za prad
            </p>
          </div>          
        </div>
        <div className='img_content col-span-6 col-start-8 row-span-1 row-start-2 flex items-center'>
          <div className='img_placeholder bg-cover bg-center'></div>
        </div>
      </div>
      <div className='contact_section h-screen col-span-12 justify-self-stretch px-16 py-8 grid grid-cols-12 gap-4 grid-rows-3'>
        <div className='text_content col-span-5 col-start-2 row-span-1 row-start-2 flex items-center'>
          <div>
            <p className='header_text'>
            Jestesmy dla Ciebie
            </p>
            <p className='subtext'>
            skontaktuj sie z nami
            </p>
          </div>          
        </div>
        <div className='text_content col-span-6 col-start-8 row-span-1 row-start-2 flex items-center'>
          <div className='contact_details'>
            <p className='email'>email xyz@rpv.pl</p>
            <p className='phone_nr'>tel. +699 699 699</p>
            <p className='ig'>ig</p>
            <p className='fb'>fb</p>
            <p className='google'>google</p>
          </div>
        </div>
        <div className='img_placeholder col-end-12'>
            <svg width="620" height="320" viewBox="0 0 32 17" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.6448 0H7.56205L0 16.4H10.0827L17.6448 0Z" fill="#0053A0"/>
              <path d="M31.0044 -7.62939e-06H20.9217L13.3596 16.4H23.4424L31.0044 -7.62939e-06Z" fill="#0053A0"/>
            </svg>
          </div>
      </div>
      <div className='faq_section h-screen col-span-12 justify-self-stretch px-16 py-8 grid grid-cols-12 gap-4 grid-rows-3'>
        <div className='text_content col-span-6 flex items-center'>
          <div>
            <p className='header_text'>
            faq
            </p>
          </div>          
        </div>
        <div className='text_content col-span-12 col-start-3 row-span-1 row-start-2 flex items-end flex-col'>
          <div className='question'>
            <p className='email'>jak zyc panie premierze?</p>
          </div>
          <div className='answer'>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto nemo placeat beatae iste quas provident similique sint, minus corrupti eum inventore nobis consequatur exercitationem doloribus omnis consectetur excepturi voluptas earum!</p>
          </div>
          <div className='question'>
            <p className='email'>jak zyc panie premierze?</p>
          </div>
          <div className='answer'>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto nemo placeat beatae iste quas provident similique sint, minus corrupti eum inventore nobis consequatur exercitationem doloribus omnis consectetur excepturi voluptas earum!</p>
          </div>
          <div className='question'>
            <p className='email'>jak zyc panie premierze?</p>
          </div>
          <div className='answer'>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto nemo placeat beatae iste quas provident similique sint, minus corrupti eum inventore nobis consequatur exercitationem doloribus omnis consectetur excepturi voluptas earum!</p>
          </div>
        </div>
      </div>
      <div className='footer h-6 col-span-12 px-16'>
        <div className='text_content flex justify-between'>
            <svg width="120" height="50" viewBox="0 0 120 50" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M47.2301 17.6667L25.115 4L3 17.6667V45H25.115" stroke="#000" stroke-width="6"/>
              <path d="M38.6404 22.9056H28.5576L20.9956 39.3056H31.0783L38.6404 22.9056Z" fill="#1B85E8"/>
              <path d="M52 22.9056H41.9172L34.3552 39.3056H44.4379L52 22.9056Z" fill="#1B85E8"/>
              <path d="M67.1719 33.9688H64.2031V42H58.7188V19.25H67.6719C70.3698 19.25 72.4792 19.849 74 21.0469C75.5208 22.2448 76.2812 23.9375 76.2812 26.125C76.2812 27.7083 75.9583 29.0208 75.3125 30.0625C74.6771 31.1042 73.6771 31.9479 72.3125 32.5938L77.0625 41.7656V42H71.1875L67.1719 33.9688ZM64.2031 29.7344H67.6719C68.7135 29.7344 69.4948 29.4635 70.0156 28.9219C70.5469 28.3698 70.8125 27.6042 70.8125 26.625C70.8125 25.6458 70.5469 24.8802 70.0156 24.3281C69.4844 23.7656 68.7031 23.4844 67.6719 23.4844H64.2031V29.7344ZM85.0781 34.2812V42H79.5938V19.25H88.6719C90.4115 19.25 91.9479 19.5729 93.2812 20.2188C94.625 20.8542 95.6615 21.7656 96.3906 22.9531C97.1302 24.1302 97.5 25.4688 97.5 26.9688C97.5 29.1875 96.7031 30.9635 95.1094 32.2969C93.526 33.6198 91.349 34.2812 88.5781 34.2812H85.0781ZM85.0781 30.0469H88.6719C89.7344 30.0469 90.5417 29.7812 91.0938 29.25C91.6562 28.7188 91.9375 27.9688 91.9375 27C91.9375 25.9375 91.651 25.0885 91.0781 24.4531C90.5052 23.8177 89.724 23.4948 88.7344 23.4844H85.0781V30.0469ZM109.266 35.8125L113.797 19.25H119.922L112.266 42H106.266L98.6719 19.25H104.75L109.266 35.8125Z" fill="#000"/>
            </svg>
          <p>trademark RPV 2023</p>
        </div>
      </div>
    </section>
  )
}
