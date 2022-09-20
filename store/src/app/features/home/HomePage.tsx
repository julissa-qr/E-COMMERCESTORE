import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import Slider from "react-slick";

export default function HomePage() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <>
            <Slider>
                <div>
                    <img src="https://cdn.pixabay.com/photo/2016/11/22/19/08/hangers-1850082__340.jpg" alt="hero" style={{display: 'block', width: '100%', maxHeight: 500}}/>
                </div>
                <div>
                    <img src="/" alt="hero" style={{display: 'block', width: '100%', maxHeight: 500}}/>
                </div>
                <div>
                    <img src="/" alt="hero" style={{display: 'block', width: '100%', maxHeight: 500}}/>
                </div>
            </Slider>
            <Box display='flex' justifyContent='center' sx={{p: 4}} >
                <Typography variant='h1'>
                    Welcome to StoreWare
                </Typography>
            </Box>
        </>
    )
}