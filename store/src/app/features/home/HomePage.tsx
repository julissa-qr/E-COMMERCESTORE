import { Typography } from "@mui/material";

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
}