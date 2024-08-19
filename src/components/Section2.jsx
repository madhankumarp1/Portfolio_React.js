// import React from 'react';
import myImage from '../assets/Image (1).png'; 


function Section2() {

  let handleDownload = () => {
    const link = document.createElement('a');
    link.href = '../../public/pdf/madhan.pdf';
    link.download = 'Madhan_Kumar_Portfolio.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  const Hire_Me = () => {
    window.open('https://www.linkedin.com/in/madhan-kumar-p-6b1269276/', '_blank');
  };
    return (
      <section className="session_2">
        <div className="div_2_main_2">
          <div className="div_word">
            <div className="div_word_1">
              <h3 className='software_developer_name'>software developer</h3>
     
              <h1 className="h1_1">Hi There, I’m  
                 <span className='name_color'> Madhan Kumar</span>
              </h1>
              <br />
              <p className='user_cont'>
              Welcome to my portfolio of captivating digital experiences. <br />Explore my work and let's create something extraordinary together.
              </p>
           
            </div>
            <div className="user_btn">
              <button className="user_Hire Me" onClick={Hire_Me} >Hire Me</button>
              <button className="user_Portfolio" onClick={handleDownload}>Portfolio</button>
            </div>
          </div>
          <div className="div_image">
            <div className="div_image_1">
              <img className="my_pic" src={myImage} alt="my_pic" />
            </div>
          </div>
        </div>
      </section>
    );
  }
  
  export default Section2;
  