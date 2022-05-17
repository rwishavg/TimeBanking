import React from "react";

const Footer = () => {
  return (
    <div className='container-fluid'>
      <div
        className='row footer position-fixed bg-gradient-cello'
        style={{ bottom: "0", width: "100%", zIndex: "1000" }}
      >
        <h5 className='col-md-12 text-center text-greyish pt-1 small'>
          Created by{" "}
          <a
            href='https://www.linkedin.com/in/george-campa-13484053/'
            target='_blank'
            rel='noopener noreferrer'
            className="text-mariner"
          >
            Ishaque Ali
          </a>
          ,{" "}
          <a
            href='https://www.linkedin.com/in/armando-jimenez-291a4b180/'
            target='_blank'
            rel='noopener noreferrer'
            className="text-mariner"
          >
            Yuvika Mehta
          </a>
          , and{" "}
          <a
            href='https://www.linkedin.com/in/matthew-winemiller-27497b37/'
            target='_blank'
            rel='noopener noreferrer'
            className="text-mariner"
          >
            Shreya Sheoran
          </a>
        </h5>
      </div>
    </div>
  );
};

export default Footer;
