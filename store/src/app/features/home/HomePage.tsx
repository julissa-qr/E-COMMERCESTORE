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
                    <img src="https://cdn.pixabay.com/photo/2017/06/21/20/51/tshirt-2428521_960_720.jpg" alt="hero" style={{display: 'block', width: '100%', maxHeight: 500}}/>
                </div>
                <div>
                    <img src="https://cdn.pixabay.com/photo/2014/08/26/21/49/shirts-428627_960_720.jpg" alt="hero" style={{display: 'block', width: '100%', maxHeight: 500}}/>
                </div>
                <div>
                    <img src="https://cdn.pixabay.com/photo/2019/07/27/21/42/t-shirt-4367577_960_720.jpg" alt="hero" style={{display: 'block', width: '100%', maxHeight: 500}}/>
                </div>
                <div>
                    <img src="https://cdn.pixabay.com/photo/2017/07/31/11/33/people-2557483_960_720.jpg" alt="hero" style={{display: 'block', width: '100%', maxHeight: 500}}/>
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