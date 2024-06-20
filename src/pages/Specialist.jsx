
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
// import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Box } from "@mui/material"
import { Typography } from "@mui/material"
import icon1 from './../assets/specialist/four.png'
import icon2 from './../assets/specialist/three.png'
import icon3 from './../assets/specialist/two.png'
import icon4 from './../assets/specialist/one.png'
import icon5 from './../assets/specialist/asian.png'

// names - Dr. Ankur Sharma-Medicine-icon3, Dr. Heena Sachdeva-Orthopadics-icon2, Dr. Ahmad Stevens-Neurologist-icon4, Dr. Ahmad Khan-Neurologist-icon5, Dr. Lesley Hull-Medicine-icon1

export default function Specialist(){
    const doctors = [
        {name:"Dr. Lesley Hull", specialist:"Medicine", image:icon1},
        {name:"Dr. Heena Sachdeva", specialist:"Orthopadics", image:icon2},
        {name:"Dr. Ahmad Stevens", specialist:"Neurologist", image:icon3},
        {name:"Dr. Ahmad Khan", specialist:"Neurologist", image:icon4},
        {name:"Dr. Ankur Sharma", specialist:"Medicine", image:icon5}
    ]
    return(<Box sx={{height:"100vh"}}>
        <Typography
            fontFamily="Poppins"
            fontSize="48px"
            fontWeight="600"
        >
            Out Medical Specialist
        </Typography>
        <Box>
            <Swiper
                className="swiper-test"
                style={{height:"70vh"}}
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={0}
                slidesPerView={4}
                centeredSlides={true}
                loop={true}
                autoplay={{delay:1500, disableOnInteraction:false}}
                pagination={{
                    el:".my-custom-pagination-div",
                    clickable: true,
                    renderBullet: (index, className) => {
                        console.log("render bullet workign");
                        return '<span class="' + className + '">' +""+ '</span>';
                    }, }}
            >
                {doctors.map((doctor, index)=>(
                    <SwiperSlide key={index}>
                        <Box>
                            <img src={doctor.image} alt={doctor.name} style={{width:"90%"}} />
                        </Box>
                        <Box>
                            <Typography 
                                fontWeight={400}
                                fontSize="24px"
                                fontFamily="Poppins"
                            >
                            {doctor.name} 
                            </Typography>
                            <Typography
                                    fontWeight={500}
                                    fontSize="17px"
                                    fontFamily="Poppins"
                                    color={"rgba(42, 167, 255, 1)"}
                            >{doctor.specialist}</Typography>
                        </Box>
                    </SwiperSlide>
                ))}
                {doctors.map((doctor, index)=>(
                    <SwiperSlide key={index}>
                        <Box>
                            <img src={doctor.image} alt={doctor.name} style={{width:"90%"}} />
                        </Box>
                        <Box>
                            <Typography 
                                fontWeight={400}
                                fontSize="24px"
                                fontFamily="Poppins"
                            >
                            {doctor.name} 
                            </Typography>
                            <Typography
                                    fontWeight={500}
                                    fontSize="17px"
                                    fontFamily="Poppins"
                                    color={"rgba(42, 167, 255, 1)"}
                            >{doctor.specialist}</Typography>
                        </Box>
                    </SwiperSlide>
                ))}
            </Swiper>
        </Box>
            <div className="my-custom-pagination-div" style={{height:"50px",width:"100%"}} ></div>
    </Box>)
}
