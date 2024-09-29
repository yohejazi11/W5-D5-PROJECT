import Header from './Header.jsx'
import Susponersection from './Susponersection.jsx'
import Pinksection from './Pinksection.jsx'
import Footer from './Footer.jsx'
import List from './List.jsx'

function About() {
  return (
    <div>
      <Header></Header>
      <div className=' w-[100%] h-[220vh] flex flex-col'>
        {/* first section */}
        <div className='flex h-[120vh] justify-between'>

          <div className='h-[120vh] w-[50%] flex flex-col justify-end pt-[0.5rem] items-center gap-y-[1.75rem]'>
            <h1 className='text-6xl font-bold  max-md:text-[28px]'>About Me</h1>
            <p className='w-[80%] text-slate-500  text-[18px]'>Diam urna ornare leo facilisis suspendisse eu rutrum id augue cursus tincidunt nisl eget ornare pharetra ac pharetra, pulvinar ipsum sed amet diam morbi amet cursus blandit augue feugiat arcu aliquet egestas id diam rhoncus, mollis arcu pharetra quis duis morbi a nunc diam mauris ut tortor.</p>

              <List
              icon1=""
              title1="Food Critic"
              info1="Diam nulla blandit urna tristique sit etiam amet adipiscing."
              icon2=""
              title2="Influencer"
              info2="Et volutpat lacinia enim, purus et rhoncus nibh egestas habitant elit."
              icon3=""
              title3="Blogger"
              info3="Venenatis egestas lectus interdum enim orci intege."
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
          <div className='h-[120vh] w-[45%]'>
            <img className='w-[100%] h-[100%]' src='https://websitedemos.net/food-blogger-04/wp-content/uploads/sites/793/2021/03/food-blogger-about-header-img.jpg'></img>
          </div>

        </div>
        {/* end first section */}


        {/* second section */}
        <div className='flex  justify-between'>


          <div className='relative w-[55%] max-md:w-[100%]  '>
            <div className='absolute w-[100%] bg-[#c99484] h-[90vh] max-md:h-[60vh] max-w-md:static max-md:top-[120vh] left-0 max-md:w-[30%]  '>
              <div className='top-[30vh] absolute bg-[#cd9d8f] w-[100%] h-[30vh] max-md:h-[20vh] max-w-md:static max-md:top-[140vh] '></div>
              <div className='top-[60vh] absolute bg-[#d1a79b] w-[100%] h-[30vh] max-md:h-[20vh] max-w-md:static max-md:top-[160vh] '></div>
            </div>

            <img className='w-[80%] z-10 absolute top-[0%] right-[0%] h-[75vh] max-md:h-[40vh] max-md:w-[90%] max-md:left-[5%] max-md:top-[15vh]' src='https://websitedemos.net/food-blogger-04/wp-content/uploads/sites/793/2021/03/food-blogger-hero-img.jpg'></img>
          </div>

          <div className='w-[45%] flex justify-center items-center h-[90vh]'>
          <p className='w-[80%] text-black  text-[2rem]'>
          Sem nibh tristique ut laoreet amet tortor eu urna, ante urna aliquam tellus suscipit turpis turpis volutpat sed malesuada cras amet, donec eget molestie ipsum semper nunc aenean sagittis consequat.</p>
          <img src='https://websitedemos.net/food-blogger-04/wp-content/uploads/sites/793/2021/03/signature.png'></img>
          <p>Dianna Adams</p>
          </div>
        </div>
        {/*end second section */}

      </div>

      <Susponersection></Susponersection>
      <Pinksection></Pinksection>
      <Footer></Footer>
    </div>
  )
}

export default About
