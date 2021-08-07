import React from 'react';
import './banner.css';
import './responsive.css';
import Product from './Product';

const Banner = () =>{
    return(
        <>
        <div className='banner'>
            <img src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"  alt="banner" className='banner_image' />

            <div className='home_row'>
            <Product id='1' 
            title='The Lean Startup: How Constant Innovation Creates Radically Successful Business Paperback' 
            image="https://m.media-amazon.com/images/I/514lNN6EfuL.__AC_SY200_.jpg" 
            price={11.96} />
            
            <Product id='2' 
            title='The Lean Startup: How Constant Innovation Creates Radically Successful Business Paperback' 
            image="https://m.media-amazon.com/images/I/41LwPLEfBfL.__AC_SY200_.jpg" 
            price={100} />
            </div>

            <div className='home_row'>
            <Product id='3' 
            title='The Lean Startup: How Constant Innovation Creates Radically Successful Business Paperback' 
            image="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Events/Zeitgeist/NewTemplate/Monsoon/CC-Card-PC-1x._SY304_CB665728191_.jpg" 
            price={125} />

            <Product id='4' 
            title='The Lean Startup: How Constant Innovation Creates Radically Successful Business Paperback' 
            image="https://m.media-amazon.com/images/I/31+rLk3CZ7S.__AC_SY200_.jpg" 
            price={50} />

            <Product id='5' 
            title='The Lean Startup: How Constant Innovation Creates Radically Successful Business Paperback' 
            image="https://m.media-amazon.com/images/I/419tN9HGNDL._AC_SY200_.jpg" 
            price={10} />
            </div>

            <div className='home_row' >
            <Product id='6' 
            title='The Lean Startup: How Constant Innovation Creates Radically Successful Business Paperback' 
            image="https://m.media-amazon.com/images/I/61wFnp19zzL._AC_UL480_FMwebp_QL65_.jpg" 
            price={225} />
            </div>


            <div className='home_row'>
            <Product id='7' 
            title='The Lean Startup: How Constant Innovation Creates Radically Successful Business Paperback' 
            image="https://m.media-amazon.com/images/I/91NIAQQwIOL._AC_UL480_FMwebp_QL65_.jpg" 
            price={260} />

            <Product id='8' 
            title='The Lean Startup: How Constant Innovation Creates Radically Successful Business Paperback' 
            image="https://m.media-amazon.com/images/I/51PAjY776nL._AC_UL480_FMwebp_QL65_.jpg" 
            price={300} />

            <Product id='9' 
            title='The Lean Startup: How Constant Innovation Creates Radically Successful Business Paperback' 
            image="https://m.media-amazon.com/images/I/81Orcobn6AL._AC_UL480_FMwebp_QL65_.jpg" 
            price={250} />
            </div>

            <div className='home_row'>
            <Product id='10' 
            title='The Lean Startup: How Constant Innovation Creates Radically Successful Business Paperback' 
            image="https://m.media-amazon.com/images/I/51nhXk8wX2L._AC_SY200_.jpg" 
            price={330} />

            <Product id='11' 
            title='The Lean Startup: How Constant Innovation Creates Radically Successful Business Paperback' 
            image="https://m.media-amazon.com/images/I/51KehMTom0L._AC_SY200_.jpg" 
            price={120} />

            <Product id='12' 
            title='The Lean Startup: How Constant Innovation Creates Radically Successful Business Paperback' 
            image="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Sports/PC_QC_DB_L._SY116_CB406090888_.jpg" 
            price={600} />
            </div>

            <div className='home_row'>
            <Product id='13' 
            title='The Lean Startup: How Constant Innovation Creates Radically Successful Business Paperback' 
            image="https://m.media-amazon.com/images/I/818rStLigiS._AC_UL480_FMwebp_QL65_.jpg" 
            price={300} />

            <Product id='14' 
            title='The Lean Startup: How Constant Innovation Creates Radically Successful Business Paperback' 
            image="https://m.media-amazon.com/images/I/51w7bn+zn6L._AC_UL480_FMwebp_QL65_.jpg" 
            price={100} />

            <Product id='15' 
            title='The Lean Startup: How Constant Innovation Creates Radically Successful Business Paperback' 
            image="https://m.media-amazon.com/images/I/81vkbbWWwxS._AC_UL480_FMwebp_QL65_.jpg" 
            price={150} />
            </div>

            <div className='home_row'>
            <Product id='16' 
            title='The Lean Startup: How Constant Innovation Creates Radically Successful Business Paperback' 
            image="https://m.media-amazon.com/images/I/51PKIDxXHjL._AC_UL480_FMwebp_QL65_.jpg" 
            price={125} />

            <Product id='17' 
            title='The Lean Startup: How Constant Innovation Creates Radically Successful Business Paperback' 
            image="https://m.media-amazon.com/images/I/81MCGX3ewQL._AC_UL480_FMwebp_QL65_.jpg" 
            price={200} />

            <Product id='18' 
            title='The Lean Startup: How Constant Innovation Creates Radically Successful Business Paperback' 
            image="https://m.media-amazon.com/images/I/51BKqwKidvL._AC_UL480_FMwebp_QL65_.jpg" 
            price={150} />
            </div>

            <div className='home_row'>
            <Product id='19' 
            title='The Lean Startup: How Constant Innovation Creates Radically Successful Business Paperback' 
            image="https://m.media-amazon.com/images/I/61LuTKQUDwL._AC_UY327_FMwebp_QL65_.jpg" 
            price={1200} />

            <Product id='20' 
            title='The Lean Startup: How Constant Innovation Creates Radically Successful Business Paperback' 
            image="https://m.media-amazon.com/images/I/61stQYWQO4L._AC_UY327_FMwebp_QL65_.jpg" 
            price={1000} />

            <Product id='21' 
            title='The Lean Startup: How Constant Innovation Creates Radically Successful Business Paperback' 
            image="https://m.media-amazon.com/images/I/61ihz46SLOL._AC_UY327_FMwebp_QL65_.jpg" 
            price={300} />
            </div>

            <div className='home_row'>
            <Product id='22' 
            title='The Lean Startup: How Constant Innovation Creates Radically Successful Business Paperback' 
            image="https://m.media-amazon.com/images/I/41bfYmgS8nL.__AC_SY200_.jpg" 
            price={6000} />

            <Product id='23' 
            title='The Lean Startup: How Constant Innovation Creates Radically Successful Business Paperback' 
            image="https://m.media-amazon.com/images/I/41f8eOJLsPL.__AC_SY200_.jpg" 
            price={5055} />

            <Product id='24' 
            title='The Lean Startup: How Constant Innovation Creates Radically Successful Business Paperback' 
            image="https://m.media-amazon.com/images/I/41znff7SgPL.__AC_SY200_.jpg" 
            price={5000} />
            </div>

            <div className='home_row' >
            <Product id='25' 
            title='The Lean Startup: How Constant Innovation Creates Radically Successful Business Paperback' 
            image="https://m.media-amazon.com/images/S/gladiator-image-upload-prod/c/A21TJRUUN4KGV/2050e33bcd94867a9c605ad701ae9d87._CR0,0,1200,628_AC_SX507_QL70_.jpg" 
            price={600} />
            </div>






        

        </div>
        </>
    );

}
export default Banner;
