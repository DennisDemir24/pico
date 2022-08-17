import React from "react";

const Footer = () => {
  return (
    <footer className="footer footer-center p-10 bg-bgPrimary text-picoSecondary rounded">
      <div className="grid grid-flow-col gap-2">
        <span>Öppettider</span>
      </div>
      <div className="flex flex-col">
        <span>Måndag: 15:00 - 22:00</span>
        <span>Tisdag: 15:00 - 22:00</span>
        <span>Onsdag: 15:00 - 22:00</span>
        <span>Torsdag: 15:00 - 22:00</span>
        <span>Fredag: 15:00 - 01:00</span>
        <span>Lördag: 12:00 - 01:00</span>
        <span>Söndag: 12:00 - 21:00</span>
      </div>
      <div className="grid grid-flow-col gap-4">
        <a
          href="https://www.google.com/maps/dir/?api=1&destination=58.59874%2C16.15578&fbclid=IwAR24XQKvB1uLeTYhAdlsAAH-Ti9S_RvivFRo3OSy1DjF3d9W8w7ITZM4GGQ"
          className="link"
          target="_blank"
          rel="noreferrer"
        >
          Norralundsgatan 9, 602 46 Norrköping, Sweden
        </a>
      </div>
      <div>
        <div className="grid grid-flow-col gap-4">
          <a
            href="https://www.facebook.com/Piccolo-Mondo-370302859734134/"
            className="link"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current"
            >
              <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
            </svg>
          </a>
        </div>
      </div>
      <div>
        <p>Copyright © 2022 - Snowbite Solutions</p>
      </div>
    </footer>
  );
};

export default Footer;
