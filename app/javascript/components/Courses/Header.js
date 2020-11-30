import React from'react'
import './Header.css'

function Header() {
  return (
    <div>
      <div className='BlindnessSection boot-elemant-bg'>
        <div className='container position-relative text-center'>
              <h2 style={{ color: "white"}} class='f-w-15'>
                Review Open Course{" "}
              </h2>
              <p style={{ color: "white" }} class='f-w-16'>
                Adding Reviews for High Quality Computer Sceince Open Courses from Top Universities
              </p>
        </div>
        <div class='elemant-bg-overlay black'>
        </div>
      </div>
    </div>
  );
}
export default Header;
