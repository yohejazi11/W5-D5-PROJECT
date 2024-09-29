import Header from './Header.jsx'
import Pinksection from './Pinksection.jsx'
import Footer from './Footer.jsx'
import List from './List.jsx'

function Contact() {
  return (
    <div>
      <Header></Header>
      <div className=' w-[100%] h-[220vh] flex flex-col'>
        {/* first section */}
        <div className='flex h-[120vh] justify-between'>

          <div className='h-[120vh] w-[50%] flex flex-col justify-end pt-[0.5rem] items-center gap-y-[2rem]'>
            <h1 className='text-6xl font-bold  max-md:text-[28px]'>Contact</h1>
            <p className='w-[80%] text-slate-500  text-[18px]'>Massa urna magnis dignissim id euismod porttitor vitae etiam viverra at adipiscing sit morbi aliquet mauris porttitor nisi, senectus pharetra, ac porttitor orci.</p>

            <List
              icon1=""
              title1="Address"
              info1="1234 N Spring St, Los Angeles, CA 90012, United States."
              icon2=""
              title2="Phone"
              info2="+01 - 123 456 7890"
              icon3=""
              title3="Email"
              info3="mail@example.com"
              >

              </List>
            <div className='flex justify-between items-end w-[60%] h-[20vh] pr-[10%] max-md:h-[20vh] max-md:w-[90%]'>
              <div className='flex flex-col justify-center items-start gap-[0.75rem] w-[2vw] '>
                <img className='w-8' src='src/assets/icons/youtubep.png'></img>
                <h1 className='font-bold text-[2rem]'>1.2M+</h1>
                <p className='font-sans font-bold text-slate-500 tracking-wider text-sm'>SUBSCRIBERS</p>
              </div>
              <div className='flex flex-col justify-center items-start gap-[0.75rem] w-[2vw]'>
                <img src='src/assets/icons/instagramp.png'></img>
                <h1 className='font-bold text-[2rem]'>1.8M+</h1>
                <p className='font-sans font-bold text-slate-500 tracking-wider text-sm'>FOLLOWERS</p>
              </div>
              <div className='flex flex-col justify-center items-start gap-[0.75rem] w-[2vw]'>
                <img className='w-[100%]' src='src/assets/icons/rss-feed.png'></img>
                <h1 className='font-bold text-[2rem]'>800K+</h1>
                <p className='font-sans font-bold text-slate-500 tracking-wider text-sm'>READERS</p>
              </div>
            </div>
          </div>
          <div className='relative w-[40%] max-md:w-[100%]  '>
            <div className='absolute w-[100%] bg-[#c99484] h-[40vh] max-md:h-[60vh] max-w-md:static max-md:top-[0vh] right-0 max-md:w-[30%]  '>
              <div className='top-[40vh] absolute bg-[#cd9d8f] w-[100%] h-[40vh] max-md:h-[20vh] max-w-md:static max-md:top-[20vh] '></div>
              <div className='top-[80vh] absolute bg-[#d1a79b] w-[100%] h-[40vh] max-md:h-[20vh] max-w-md:static max-md:top-[40vh] '></div>
            </div>

            <div className='flex flex-col gap-y-[3rem] bg-white border-[10px] border-slate-200 p-[1rem] w-[30vw] z-10 absolute top-[20%] left-[-15%] h-[85vh] max-md:h-[40vh] max-md:w-[90%] max-md:left-[5%] max-md:top-[15vh]' >
              <h1 className='font-bold text-[2rem]'>Let's Talk</h1>
              <div className='flex'>
              <input className='border-[2px] h-[45px]' placeholder='first name'></input>
              <input className='border-[2px] h-[45px]' placeholder='last name'></input>
              </div>
              <input className='border-[2px] h-[45px]' placeholder='email'></input>
              <input className='border-[2px] h-[45px]' placeholder='Subject *'></input>
              <textarea  className='border-[2px] h-[45px]'>

              </textarea>
              <button className="hover:bg-[#be7b68] hover:text-white border-[1px] border-[#be7b68] w-40 h-10 text-[#be7b68] font-sans text-xs font-bold tracking-widest	">Send Message</button>

            </div>
          </div>

        </div>
        {/* end first section */}


        {/* second section */}
        <div className='flex  justify-between'>
          <div className='relative w-[55%] max-md:w-[100%]  '>
            <img className='w-[80%] z-10 absolute top-[0%] right-[0%] h-[75vh] max-md:h-[40vh] max-md:w-[90%] max-md:left-[5%] max-md:top-[15vh]' src='https://websitedemos.net/food-blogger-04/wp-content/uploads/sites/793/2021/03/food-blogger-hero-img.jpg'></img>
          </div>

          <div className='w-[45%] flex flex-col justify-center items-start h-[90vh] px-[2rem]'>
          <p className='w-[80%] text-black  text-[2rem]'>
          Sem nibh tristique ut laoreet amet tortor eu urna, ante urna aliquam tellus suscipit turpis turpis volutpat sed malesuada cras amet, donec eget molestie ipsum semper nunc aenean sagittis consequat.</p>
          <img src='https://websitedemos.net/food-blogger-04/wp-content/uploads/sites/793/2021/03/signature.png'></img>
          <p>Dianna Adams</p>
          </div>
        </div>
        {/*end second section */}

      </div>

      <Pinksection></Pinksection>
      <Footer></Footer>
    </div>
  )
}

export default Contact
