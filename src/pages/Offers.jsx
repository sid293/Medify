import './offers.modules.css';
import { Box } from '@mui/material'
import Offer1 from './../assets/Offer1.png'
import Offer2 from './../assets/Offer2.png'
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from 'pure-react-carousel';
import { Grid } from '@mui/material'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';


import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
// import { Pagination, Navigation, Scrollbar, A11y } from 'swiper'

export default function Offers(){


    return(<div className="wrapper">
        <Box sx={{height:"43%"}}></Box>
        <Box 
            sx={{width:"100%", overflow:'hidden', height:"200px"}}
        >
            <Swiper
                className="swiper-test"
                style={{height:"200px"}}
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={50}
                slidesPerView={3}
                // onSlideChange={() => console.log('slide change')}
                // onSwiper={(swiper) => console.log(swiper)}
                // navigation
                pagination={{
                    el:".my-custom-pagination-div",
                    clickable: true,
                    renderBullet: (index, className) => {
                        // console.log("render bullet workign");
                        return '<span class="' + className + '">' +""+ '</span>';
                    },
                }}
            >
                <SwiperSlide>
                    <img src={Offer1} alt="offer1" style={{width:"90%"}} />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={Offer2} alt="offer2" style={{width:"90%"}}/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={Offer1} alt="offer1" style={{width:"90%"}}/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={Offer2} alt="offer2" style={{width:"90%"}}/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={Offer1} alt="offer1" style={{width:"90%"}}/>
                </SwiperSlide>
            </Swiper>

        </Box>
            <Box className="my-custom-pagination-div" sx={{height:"40px", width:"100%"}}>
            </Box>
        {/* <div className="my-custom-pagination-div" style={{height:"50px",width:"100%"}}></div> */}
    </div>)
}