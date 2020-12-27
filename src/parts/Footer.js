import React from "react";

import Button from "elements/button";
import IconText from "parts/IconText";

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-auto" style={{ width: 350 }}>
            <IconText />
            <p className="brand-tagline">
              We kaboom your beauty wedding instanly and memorable.
            </p>
          </div>
          <div className="col-2 mr-5">
            <h6 className="mt-2">For Beginners</h6>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <Button type="link" href="/register">
                  New Account
                </Button>
              </li>
              <li className="list-group-item">
                <Button type="link" href="/properties">
                  Start Booking WO
                </Button>
              </li>
              <li className="list-group-item">
                <Button type="link" href="/use-payments">
                  Use Payments
                </Button>
              </li>
            </ul>
          </div>
          <div className="col-2 mr-5">
            <h6 className="mt-2">Explore Us</h6>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <Button type="link" href="/career">
                  Our Careers
                </Button>
              </li>
              <li className="list-group-item">
                <Button type="link" href="/privacy">
                  Privacy
                </Button>
              </li>
              <li className="list-group-item">
                <Button type="link" href="/trems">
                  Trems & Condition
                </Button>
              </li>
            </ul>
          </div>
          <div className="col-auto">
            <h6 className="mt-2">Connect Us</h6>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <Button isExternal type="link" href="mailto:cs@galihwo.id">
                  cs@galihwo.id
                </Button>
              </li>
              <li className="list-group-item">
                <Button isExternal type="link" href="tel:+62854545678">
                  0854545678
                </Button>
              </li>
              <li className="list-group-item">
                <span>GalihWO, Pilangsari, Majalengka</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="col text-center copyright">
            Copyright 2021 • All Rights reserved • Galih Wedding Organizer
          </div>
        </div>
      </div>
    </footer>
  );
}
