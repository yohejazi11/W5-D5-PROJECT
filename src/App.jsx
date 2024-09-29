
import './App.css'
import Header from './component/Header'
import Card from './component/Card'
import Footer from './component/Footer'
import Cardsmall from './component/Cardsmall'
import Pinksection from './component/Pinksection'
import Susponersection from './component/Susponersection'

function App() {

  return (
    <>
      <Header></Header>
      <div className='flex flex-col gap-20 w-[100%] '>
        <main className='w-[100%] flex justify-between max-md:flex-col-reverse h-[150vh] max-md:h-[130vh]'>
          <div className='w-[50%]  flex flex-col justify-between pt-[40vh] pl-[10%] gap-y-[4rem] max-md:gap-y-[2rem] max-md:w-[90%] max-md:pt-[5vh]'>
            <p className='welcome pl-[70px] text-[1rem] text-[#be7b68] gap-5 font-sans font-semibold'>WELCOME</p>
            <h1 className='text-6xl font-bold max-md:text-[28px]'>I'm Dianna Adams</h1>
            <h3 className='text-3xl font-bold max-md:text-[20px]'>Food Critic / Influencer / Blogger</h3>
            <p className='w-[80%] text-slate-500'>Massa urna magnis dignissim id euismod porttitor vitae etiam viverra nunc at adipiscing sit morbi aliquet mauris porttitor nisi, senectus pharetra, ac porttitor orci.</p>
            <button className="hover:bg-[#be7b68] hover:text-white border-[1px] border-[#be7b68] w-40 h-10 text-[#be7b68] font-sans text-xs font-bold tracking-widest	">JOIN INSIDER</button>
            <div className='flex justify-between items-end w-[100%] h-[50vh] pr-[10%] max-md:h-[20vh] max-md:w-[90%]'>
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
            <div className='absolute w-[100%] bg-[#c99484] h-[50vh] max-md:h-[60vh] max-w-md:static max-md:top-[0vh] right-0 max-md:w-[30%]  '>
              <div className='top-[50vh] absolute bg-[#cd9d8f] w-[100%] h-[50vh] max-md:h-[20vh] max-w-md:static max-md:top-[20vh] '></div>
              <div className='top-[100vh] absolute bg-[#d1a79b] w-[100%] h-[50vh] max-md:h-[20vh] max-w-md:static max-md:top-[40vh] '></div>
            </div>

            <img className='z-10 absolute top-[20%] left-[-15%] h-[75vh] max-md:h-[40vh] max-md:w-[90%] max-md:left-[5%] max-md:top-[15vh]' src='https://websitedemos.net/food-blogger-04/wp-content/uploads/sites/793/2021/03/food-blogger-hero-img.jpg'></img>
          </div>
        </main>

        <Susponersection></Susponersection>
        <div className='w-[100%] px-[10vw] max-md:px-[5vw]'>
          <div className='flex justify-between items-center align-middle max-md:flex-col max-md:mb-10 max-md:gap-y-4'>
            <h1 className='text-[3.5rem] mb-10 max-md:text-[28px] max-md:mb-0'>Latest Reviews</h1>
            <button className='hover:bg-[#be7b68] hover:text-white border-[1px] border-[#be7b68] w-40 h-11 text-[#be7b68] font-sans text-xs font-bold tracking-widest	'>VIEW ALL</button>
          </div>
          <div className='flex justify-between max-md:flex-col max-md:gap-y-8 '>
            <Cardsmall
              image="https://websitedemos.net/food-blogger-04/wp-content/uploads/sites/793/2021/03/food-blogger-latest-review-img-1.jpg"
              title="Grilled Flank Steak with Chimichurri"
              details="Potenti tincidunt arcu euismod curabitur iaculis ut aliquet facilisis pharetra, pharetra dolor scelerisque."
            ></Cardsmall>
            <Cardsmall
              image="https://websitedemos.net/food-blogger-04/wp-content/uploads/sites/793/2021/03/food-blogger-latest-review-img-2.jpg"
              title="Mushroom Penne with Walnut Pesto"
              details="Ipsum amet ultrices suscipit eget tortor, tincidunt urna, mattis aliquam duis eget luctus."
            ></Cardsmall>
            <Cardsmall
              image="https://websitedemos.net/food-blogger-04/wp-content/uploads/sites/793/2021/03/food-blogger-latest-review-img-3.jpg"
              title="Garlic Butter White Wine Shrimp Linguine"
              details="Non faucibus tincidunt commodo est arcu ipsum augue ipsum at vitae, nunc purus erat sem leo fames facilisis."
            ></Cardsmall>
          </div>
        </div>

        <div className='bg-[#f3efee] w-[100%] px-[10vw]  max-md:px-[5vw] py-[10vh] flex flex-col gap-y-10'>
          <h1 className='text-[3.5rem] text-center max-md:text-[28px] '>Best in Class Restaurant</h1>
          <p className='text-center px-[20%] text-slate-500 max-md:px-[0]'>Massa urna magnis dignissim id euismod porttitor vitae etiam viverra nunc at adipiscing sit morbi aliquet mauris porttitor nisi, senectus pharetra ac porttitor orci.</p>
          <div className='flex flex-wrap justify-between gap-y-20 max-md:flex-col max-md:gap-y-8'>
            <Card
              image="https://websitedemos.net/food-blogger-04/wp-content/uploads/sites/793/2021/03/food-blogger-best-restaurant-1.jpg"
              title="Bern's Steak House"
              details="Potenti tincidunt arcu euismod amet ac curabitur iaculis in ut aliquet."
            ></Card>
            <Card
              image="https://websitedemos.net/food-blogger-04/wp-content/uploads/sites/793/2021/03/food-blogger-best-restaurant-2.jpg"
              title="Eewak Korean Restaurant"
              details="Tristique in ornare lectus facilisis diam libero, eros sit scelerisque pulvinar dui."
            ></Card>
            <Card
              image="https://websitedemos.net/food-blogger-04/wp-content/uploads/sites/793/2021/03/food-blogger-best-restaurant-3.jpg"
              title="The Ramban Vegan House"
              details="Iaculis morbi id maecenas mi amet, mi ut dolor aenean id justo."
            ></Card>
            <Card
              image="https://websitedemos.net/food-blogger-04/wp-content/uploads/sites/793/2021/03/food-blogger-best-restaurant-4.jpg"
              title="Maniest Bake & Cake"
              details="Diam lacus nunc est commodo nunc, velit et amet eu vitae sem."
            ></Card>
            <Card
              image="https://websitedemos.net/food-blogger-04/wp-content/uploads/sites/793/2021/03/food-blogger-best-restaurant-5.jpg"
              title="Crush Los Angeles"
              details="Adipiscing eget in sit lectus sem euismod ut consequat suspendisse ut tristique."
            ></Card>
            <Card
              image="https://websitedemos.net/food-blogger-04/wp-content/uploads/sites/793/2021/03/food-blogger-best-restaurant-6.jpg"
              title="The Mike Winery"
              details="Aliquet ut vel faucibus gravida tellus non ipsum ullamcorper adipiscing felis."
            ></Card>
          </div>
        </div>
        <div className='bg-[#ffffff] flex h-[60vh] border-8 w-[calc(80vw - 16px)] mt-[10vw] mx-[10vw] max-md:flex-col max-md:h-[70vh] max-md:w-[100%] max-md:mx-[0] '>
          <div className='relative w-[40vw] max-md:w-[100%] max-md:h-[50%]'>
            <img className='absolute top-[-10%] left-[10%] max-md:left-[50%] max-md:translate-y-[-10%]	max-md:translate-x-[-50%]	max-md:w-[90%]' src='https://websitedemos.net/food-blogger-04/wp-content/uploads/sites/793/2021/03/food-blogger-subscribe-cta-img.jpg'></img>
          </div>
          <div className='flex flex-col pl-[2rem] justify-center max-md:gap-y-3 max-md:justify-evenly gap-y-8'>
            <h1 className='text-[3.5rem] font-semibold max-md:text-[28px]'>Join Mailing List</h1>
            <p className='w-[90%] text-slate-500'>Sign up and get all the latest, ad-free reviews, recipes and news sent to your inbox.</p>
            <div className='flex justify-start gap-5 max-md:flex-col'>
              <input className='border-[1px] w-[55%] py-[16px] px-[23px] max-md:w-[90%]' placeholder='Email Address' type='email'></input>
              <button className='hover:bg-[#be7b68] hover:text-white w-[25%] border-[1px] py-[15px] border-[#be7b68] text-[#be7b68]  max-md:w-[90%] font-sans text-xs font-bold tracking-widest	'>SUBSCRIBE</button>
            </div>
          </div>
        </div>

        <div className='flex flex-col w-[100%] pt-[5vw] px-[10vw] max-md:px-[5vw] max-md:items-center'>
          <h1 className='text-[3.5rem] mb-10 font-semibold max-md:text-[28px]'>Latest Videos</h1>
          <div className='flex justify-center max-md:flex-col max-md:gap-y-10'>
            <div className='flex flex-col w-[40vw] gap-y-8 max-md:w-[100%]' >
              <div>
                <img src='https://websitedemos.net/food-blogger-04/wp-content/uploads/sites/793/2021/03/food-blogger-latest-video-1.jpg'></img>

              </div>
              <h1 className='text-[2rem] font-semibold max-md:text-[20px]'>Dianna Adams visits the Sooto Restaurant | Uncovered Miami</h1>
              <p className='w-[90%] text-slate-500'>A consectetur eget ultrices nec velit purus quam dignissim purus gravida aliquam mattis ultrices eget ultricies tincidunt et erat enim vitae sollicitudin tellus placerat</p>
            </div>

            <div className='flex flex-col gap-y-10  w-[40vw] font-sans max-md:w-[100%] max-md:gap-y-2'>
              <div className='flex h-[20vh] max-md:flex-col '>
                <img className='max-md:w-[30%]' src='https://websitedemos.net/food-blogger-04/wp-content/uploads/sites/793/2021/03/food-blogger-latest-video-2.jpg'></img>
                <div className='pl-[2rem] max-md:pl-[0]'>
                  <h1 className='text-[18px] font-semibold'>Family Dinner - Latea pulvinar scelerisque diam tempus facilisi</h1>
                  <p className='text-slate-500'>Enim imperdiet fames nisl, purus et diam aliquet</p>
                </div>
              </div>

              <div className='flex h-[20vh] max-md:flex-col '>
                <img className='max-md:w-[30%]' src='https://websitedemos.net/food-blogger-04/wp-content/uploads/sites/793/2021/03/food-blogger-latest-video-3.jpg'></img>
                <div className='pl-[2rem] max-md:pl-[0]'>
                  <h1 className='text-[18px] font-semibold'>Family Dinner - Latea pulvinar scelerisque diam tempus facilisi</h1>
                  <p className='text-slate-500'>Enim imperdiet fames nisl, purus et diam aliquet</p>
                </div>
              </div>

              <div className='flex h-[20vh] max-md:flex-col'>
                <img className='max-md:w-[30%]' src='https://websitedemos.net/food-blogger-04/wp-content/uploads/sites/793/2021/03/food-blogger-latest-video-4.jpg'></img>
                <div className='pl-[2rem] max-md:pl-[0]'>
                  <h1 className='text-[18px] font-semibold'>Family Dinner - Latea pulvinar scelerisque diam tempus facilisi</h1>
                  <p className='text-slate-500'>Enim imperdiet fames nisl, purus et diam aliquet</p>
                </div>
              </div>

              <div className='flex h-[20vh] max-md:flex-col '>
                <img className='max-md:w-[30%]' src='https://websitedemos.net/food-blogger-04/wp-content/uploads/sites/793/2021/03/food-blogger-latest-video-5.jpg'></img>
                <div className='pl-[2rem] max-md:pl-[0]'>
                  <h1 className='text-[18px] font-semibold'>Family Dinner - Latea pulvinar scelerisque diam tempus facilisi</h1>
                  <p className='text-slate-500'>Enim imperdiet fames nisl, purus et diam aliquet</p>
                </div>
              </div>
              <button className='hover:bg-[#be7b68] hover:text-white w-[100%] border-[1px] py-[16px] border-[#be7b68] text-[#be7b68]  font-sans text-xs font-bold tracking-widest	'>VIEW ALL VIDEOS</button>
            </div>
          </div>
        </div>

        <Pinksection></Pinksection>
        <Footer></Footer>
      </div>
    </>
  )
}

export default App
