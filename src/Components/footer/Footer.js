import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <>
      <footer id="foooter">
        <div>
          <div class="d-none d-lg-flex  ms-5 p-4 p-lg-0">
            <a class="btn btn-light btn-xxl-square rounded-circle ms-3"
              href="https://www.facebook.com" id="circle-btn">Instagram

              <small class="fab fa-facebook-f text-primary" id="insideCircle-btn"></small>
            </a>
            <a class="btn btn-light btn-xxl-square rounded-circle ms-3"
              href="https://www.instagram.com" id="circle-btn">
              Facebook
              <small class="fab fa-instagram text-primary" id="insideCircle-btn"></small>
            </a>
          </div>
        </div>
        <div style={{ textAlign: 'left'}} class="me-5">
          <br></br><br></br>
          <br></br>
          Rawwan Yaghmour App &copy; 2024
          <br></br>
          <br></br>
          <br></br>
        </div>

      </footer>

    </>
  )
}

export default Footer