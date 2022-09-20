import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import Slider from "react-slick";

<<<<<<< HEAD
export default function HomePage(){
   return(
<div>
  {/* Created By CodingNepal - www.codingnepalweb.com */}
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  {/*----<title> Website Layout | CodingLab</title>----*/}
  <link rel="stylesheet" href="style.css" />
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css" />
  <style dangerouslySetInnerHTML={{__html: "\n       @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700&display=swap');\n*{\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  font-family: 'Poppins',sans-serif;\n}\n::selection{\n  color: #000;\n  background: #fff;\n}\n\n.img{\n  width: 100%;\n  height: 2000vh;\n  background-position: relative;\n  position: relative;\n}\n.img::before{\n\n  position: absolute;\n  height: 100%;\n  width: 100%;\n  background: #1D7FA2;\n}\n.center{\n  position: absolute;\n  top: 52%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  width: 100%;\n  padding: 0 20px;\n  text-align: center;\n}\n.center .title{\n  color: #000;\n  font-size: 55px;\n  font-weight: 600;\n}\n.center .sub_title{\n  color: #000;\n  font-size: 40px;\n  font-weight: 600;\n}\n.center .btns{\n  margin-top: 20px;\n}\n.center .btns button{\n  height: 55px;\n  width: 170px;\n  border-radius: 5px;\n  border: none;\n  margin: 0 10px;\n  border: 2px solid white;\n  font-size: 20px;\n  font-weight: 500;\n  padding: 0 10px;\n  cursor: pointer;\n  outline: none;\n  transition: all 0.3s ease;\n}\n.center .btns button:first-child{\n  color: #000;\n  background: none;\n}\n.btns button:first-child:hover{\n  background: white;\n  color: #006CFF;\n}\n.center .btns button:last-child{\n  background: white;\n  color: #FF0000;\n}\n\n   " }} />
  <div className="img" />
  <div className="center">
  <div className="title">Welcome!</div>
    <div className="title">Hexaware Online Shop</div>
    <div className="sub_title">Your succes is our focus</div>
    <div className="btns">
      <button>Login</button>
      <button>Register</button>
    </div>
  </div>
</div>
   )
=======
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
>>>>>>> 95a6c733cedb000df8e509d5f53128248aae25f1
}