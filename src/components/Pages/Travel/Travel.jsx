import React from "react";
import styles from "./Travel.module.scss";
import StampTransparent from "../../icons/StampTransparent";
import Map from "../../images/Map";
import MainCampusMap from "../../images/MainCampusMap";

const AnchorScrollButton = ({ targetId, children, className }) => {
  const handleClick = () => {
    const el = document.getElementById(targetId);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <button onClick={handleClick} className={className}>
      {children}
    </button>
  );
};

const Travel = () => {
  return (
    <div className={styles.container}>
      {/* HERO + ANCHOR NAV */}
      <div className={styles.firstSection}>
        <div className={styles.headerWrapper}>
          <h1 className={styles.header}>Travel ISFNR2026</h1>
        </div>

        <nav className={styles.nav}>
          <ul className={styles.navList}>
            <li className={styles.navButton}>
              <AnchorScrollButton
                targetId="getting-to-reykjavik"
                className={styles.navLink}
              >
                <div className={styles.stamp}>
                  <StampTransparent />
                </div>
                Getting to Reykjavík
              </AnchorScrollButton>
            </li>
            <li className={styles.navButton}>
              <AnchorScrollButton
                targetId="conference-venue"
                className={styles.navLink}
              >
                <div className={styles.stamp}>
                  <StampTransparent />
                </div>
                Conference venue
              </AnchorScrollButton>
            </li>
            <li className={styles.navButton}>
              <AnchorScrollButton
                targetId="getting-to-venue"
                className={styles.navLink}
              >
                <div className={styles.stamp}>
                  <StampTransparent />
                </div>
                Getting to the venue
              </AnchorScrollButton>
            </li>
            <li className={styles.navButton}>
              <AnchorScrollButton
                targetId="public-transport"
                className={styles.navLink}
              >
                <div className={styles.stamp}>
                  <StampTransparent />
                </div>
                Public transport
              </AnchorScrollButton>
            </li>
            <li className={styles.navButton}>
              <AnchorScrollButton
                targetId="taxis-ride-sharing"
                className={styles.navLink}
              >
                <div className={styles.stamp}>
                  <StampTransparent />
                </div>
                Taxis & ride-sharing
              </AnchorScrollButton>
            </li>
            <li className={styles.navButton}>
              <AnchorScrollButton
                targetId="local-services"
                className={styles.navLink}
              >
                <div className={styles.stamp}>
                  <StampTransparent />
                </div>
                Local services
              </AnchorScrollButton>
            </li>
            <li className={styles.navButton}>
              <AnchorScrollButton
                targetId="arrival-tips"
                className={styles.navLink}
              >
                <div className={styles.stamp}>
                  <StampTransparent />
                </div>
                Arrival tips
              </AnchorScrollButton>
            </li>
            <li className={styles.navButton}>
              <AnchorScrollButton
                targetId="accessibility-wifi"
                className={styles.navLink}
              >
                <div className={styles.stamp}>
                  <StampTransparent />
                </div>
                Accessibility & WiFi
              </AnchorScrollButton>
            </li>
            {/* <li className={styles.navButton}>
              <AnchorScrollButton
                targetId="catering-amenities"
                className={styles.navLink}
              >
                <div className={styles.stamp}>
                  <StampTransparent />
                </div>
                Catering & amenities
              </AnchorScrollButton>
            </li> */}
            <li className={styles.navButton}>
              <AnchorScrollButton
                targetId="emergency-contacts"
                className={styles.navLink}
              >
                <div className={styles.stamp}>
                  <StampTransparent />
                </div>
                Emergency contacts
              </AnchorScrollButton>
            </li>
          </ul>
        </nav>
      </div>

      {/* PAGE CONTENT */}
      <div className={styles.content}>
        {/* GETTING TO REYKJAVÍK */}
        <section id="getting-to-reykjavik" className={styles.section}>
          <h2>Getting to Reykjavík</h2>
          <div className={styles.papersWrapper}>
            <div className={styles.papersBlurb}>
              <p>
                Reykjavík is served by Keflavík International Airport (KEF),
                located approximately 45 minutes from the city centre by car or
                airport bus. Direct flights connect Keflavík with many European
                and North American cities.
              </p>
              <p>
                Airport transfer options include Flybus, Airport Direct, taxis,
                or rental cars. More information is available on the{" "}
                <a
                  href="https://www.kefairport.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  airport website.
                </a>
              </p>
            </div>
          </div>
        </section>

        {/* CONFERENCE VENUE */}
        <section id="conference-venue" className={styles.section}>
          <h2>Conference venue</h2>
          <div className={styles.papersWrapper}>
            <div className={styles.papersBlurb}>
              <p>
                The ISFNR 2026 Interim Conference will be held at the main
                campus of the University of Iceland.
              </p>
              <p>
                <strong>Address:</strong> Sæmundargata 2 102, 102 Reykjavík,
                Iceland
                <br />
                <strong>GPS coordinates:</strong> 64.140486, -21.949268
              </p>
              <p>
                The university is centrally located and within walking distance
                of downtown Reykjavík.
              </p>

              <p>
                We are using University Centre/Háskólatorg (registration,
                conference office, poster session, lunch, info points),
                Árnagarður (rooms starting with letter A), Oddi (rooms starting
                with letter O), Veröld (rooms starting with letter V), and
                Háskólabíó (Keynotes, annual meeting) buildings, indicated with
                green on the map.
              </p>
            </div>

            <div className={styles.separator} />

            <div className={styles.queries}>
              <MainCampusMap />
            </div>
          </div>
        </section>

        {/* GETTING TO THE VENUE */}
        <section id="getting-to-venue" className={styles.section}>
          <h2>Getting to the venue</h2>
          <div className={styles.papersWrapper}>
            <div className={styles.papersBlurb}>
              <h3>By bus</h3>
              <ul>
                <li>
                  From <strong>Ráðhúsið (City Hall)</strong>: take Bus 2 / 6 →
                  get off at <strong>Háskóli Íslands</strong>, depending on
                  route.
                </li>
                <li>
                  From <strong>Gamla Hringbraut</strong> (next to the BSI
                  central bus station): take Bus 1 / 3 →{" "}
                  <strong>Háskóli Íslands</strong>.
                </li>
              </ul>
            </div>

            <div className={styles.separator} />

            <div className={styles.papersBlurb}>
              <h3>Walking</h3>
              <p>
                The main campus is a 15–20 minute walk from many downtown hotels
                and guesthouses. It is also a 15–20 minute walk from the BSI bus
                station, where buses from the airport stop.
              </p>
            </div>
          </div>
          <div className={styles.colSeparator} />

          <h3>Maps</h3>
          <a
            href="https://www.google.com/maps/d/u/0/viewer?mid=1hMGhj4T-S8vRcJBhWibyP494P7a1_9s&ll=64.13725799056913%2C-21.942188200000004&z=13"
            target="_blank"
            rel="noopener noreferrer"
          >
            Map for conference related venues
          </a>
          <a
            style={{ marginTop: "10px" }}
            href="https://www.google.com/maps/d/u/0/viewer?ll=64.14053620859285%2C-21.95149816889939&z=16&mid=1XXpSlYmjbYUnbF4teYW7TFuasU7uR17L"
            target="_blank"
            rel="noopener noreferrer"
          >
            University of Iceland Campus Map
          </a>
        </section>

        {/* PUBLIC TRANSPORT */}
        <section id="public-transport" className={styles.section}>
          <h2>Public transport in Reykjavík</h2>
          <div className={styles.papersWrapperWithMap}>
            <div className={styles.papersBlurb}>
              <p>Reykjavík’s public transport is run by Strætó.</p>
              <ul>
                <li>Buses are yellow and generally punctual.</li>
                <li>Tickets can be purchased using the Klapp app.</li>
              </ul>
              <p>
                Plan your trip at{" "}
                <a
                  href="https://www.straeto.is"
                  target="_blank"
                  rel="noreferrer"
                >
                  straeto.is
                </a>
                .
              </p>
            </div>

            <div className={styles.papersBlurb}>
              <div className={styles.mapSVG}>
                <Map />
              </div>
            </div>
          </div>
        </section>

        {/* TAXIS & RIDE-SHARING */}
        <section id="taxis-ride-sharing" className={styles.section}>
          <h2>Taxis & ride-sharing</h2>
          <div className={styles.papersWrapper}>
            <div className={styles.papersBlurb}>
              <p>
                Reykjavík does not have Uber or Lyft. You can use local taxi
                services:
              </p>
              <ul>
                <li>
                  <strong>Hreyfill Bæjarleiðir</strong> – +354 588 5522 –{" "}
                  <a href="mailto:threyfill@hreyfill.is">
                    hreyfill@hreyfill.is
                  </a>
                  ,{" "}
                  <a
                    href="https://www.hreyfill.is/en/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    https://www.hreyfill.is/en/
                  </a>
                </li>
                <li>
                  <strong>BSR</strong> – +354 561 0000 –{" "}
                  <a href="mailto:info@taxireykjavik.is">
                    info@taxireykjavik.is
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* LOCAL SERVICES */}
        <section id="local-services" className={styles.section}>
          <h2>Useful local services</h2>
          <div className={styles.papersWrapper}>
            <div className={styles.papersBlurb}>
              <h3>Nearby pharmacies</h3>
              <ul>
                <li>Lyfja Hafnarstræti – Hafnarstræti 19</li>
                <li>ÍslandsApótek – Laugavegur 53b</li>
              </ul>

              <h3>Nearby ATMs</h3>
              <ul>
                <li>Arion Bank ATM – Hagatorg</li>
                <li>Landsbankinn ATM – Hagatorg</li>
              </ul>

              <h3>Tourist information centre</h3>
              <p>Laugavegur 5, 101 Reykjavík</p>
            </div>
            <div>
              {/* <h3>Nearby ATMs</h3>
              <ul>
                <li>Arion Bank ATM – Hagatorg</li>
                <li>Landsbankinn ATM – Hagatorg</li>
              </ul>

              <h3>Tourist information centre</h3>
              <p>Laugavegur 5, 101 Reykjavík</p> */}
            </div>
          </div>
        </section>

        {/* ARRIVAL TIPS */}
        <section id="arrival-tips" className={styles.section}>
          <h2>Arrival tips</h2>
          <div className={styles.papersWrapper}>
            <div className={styles.papersBlurb}>
              <p>
                We recommend heading to your accommodation first, then making
                your way to the venue during registration hours.
              </p>
              <p>
                The <strong>registration desk</strong> will be located in the
                main lobby of the conference venue. Registration desk is open
                from 11:00 to 16:00 on June 13. On other days, you can head
                downstairs to HT103, where the conference office is located.
                Volunteers will be on hand to assist with check-in and provide
                your delegate badge.
              </p>
            </div>
          </div>
        </section>

        {/* ACCESSIBILITY & WIFI */}
        <section id="accessibility-wifi" className={styles.section}>
          <h2>Accessibility & WiFi</h2>
          <div className={styles.papersWrapper}>
            <div className={styles.papersBlurb}>
              <ul>
                <li>Eduroam is available throughout the campus.</li>
                <li>
                  Guest WiFi credentials will also be available at the
                  registration desk.
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* CATERING & AMENITIES */}
        {/* <section id="catering-amenities" className={styles.section}>
          <h2>Catering & amenities</h2>
          <div className={styles.papersWrapper}>
            <div className={styles.papersBlurb}>
              <ul>
                <li>
                  Registration includes coffee/tea and lunch on all full
                  conference days.
                </li>
                <li>
                  Recommendations for local cafés, supermarkets, and restaurants
                  will be included in the delegate pack.
                </li>
              </ul>
            </div>
          </div>
        </section> */}

        {/* EMERGENCY CONTACTS */}
        <section id="emergency-contacts" className={styles.section}>
          <h2>Emergency contacts</h2>
          <div className={styles.papersWrapper}>
            <div className={styles.papersBlurb}>
              <ul>
                <li>
                  <strong>Emergency services (police, ambulance, fire):</strong>{" "}
                  Dial 112
                </li>

                <li>
                  <strong>Conference email:</strong>{" "}
                  <a href="mailto:isfnr2026@nomadit.co.uk">
                    isfnr2026@nomadit.co.uk
                  </a>
                </li>
                <li>
                  <strong>Local taxi:</strong> +354 588 5522
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Travel;
