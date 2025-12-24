import React from "react";
import styles from "./Accommodation.module.scss";

import StampTransparent from "../../icons/StampTransparent";
import Logo1 from "../../icons/Logo1";

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

const Accommodation = () => {
  return (
    <div className={styles.container}>
      {/* HERO + ANCHOR NAV */}
      <div className={styles.firstSection}>
        <div className={styles.headerWrapper}>
          <h1 className={styles.header}>Accommodation ISFNR2026</h1>
        </div>

        <nav className={styles.nav}>
          <ul className={styles.navList}>
            <li className={styles.navButton}>
              <AnchorScrollButton
                targetId="accommodation-overview"
                className={styles.navLink}
              >
                <div className={styles.stamp}>
                  <StampTransparent />
                </div>
                Overview
              </AnchorScrollButton>
            </li>

            <li className={styles.navButton}>
              <AnchorScrollButton
                targetId="alternative-options"
                className={styles.navLink}
              >
                <div className={styles.stamp}>
                  <StampTransparent />
                </div>
                Alternative options
              </AnchorScrollButton>
            </li>

            <li className={styles.navButton}>
              <AnchorScrollButton
                targetId="islands-hotels"
                className={styles.navLink}
              >
                <div className={styles.stamp}>
                  <StampTransparent />
                </div>
                Islands Hotels
              </AnchorScrollButton>
            </li>

            {/* <li className={styles.navButton}>
              <AnchorScrollButton
                targetId="black-pearl"
                className={styles.navLink}
              >
                <div className={styles.stamp}>
                  <StampTransparent />
                </div>
                Black Pearl Hotel
              </AnchorScrollButton>
            </li> */}

            {/* <li className={styles.navButton}>
              <AnchorScrollButton
                targetId="hotel-101"
                className={styles.navLink}
              >
                <div className={styles.stamp}>
                  <StampTransparent />
                </div>
                101 Hotel
              </AnchorScrollButton>
            </li> */}

            {/* <li className={styles.navButton}>
              <AnchorScrollButton
                targetId="center-hotels"
                className={styles.navLink}
              >
                <div className={styles.stamp}>
                  <StampTransparent />
                </div>
                Center Hotels
              </AnchorScrollButton>
            </li> */}

            <li className={styles.navButton}>
              <AnchorScrollButton targetId="hostels" className={styles.navLink}>
                <div className={styles.stamp}>
                  <StampTransparent />
                </div>
                Hostels
              </AnchorScrollButton>
            </li>
          </ul>
        </nav>
      </div>

      {/* PAGE CONTENT */}
      <div className={styles.content}>
        {/* OVERVIEW */}
        <section id="accommodation-overview" className={styles.section}>
          <h2>Accommodation overview</h2>
          <div className={styles.papersWrapper}>
            <div className={styles.papersBlurb}>
              <p>
                Please remember that the conference does not book accommodation
                for you. However, below we list options as we receive them. We
                will be updating this list when we receive deals or discount
                codes from local hotels and hostels.
              </p>
              <p>
                As Reykjavík is a popular tourist destination, we strongly
                encourage booking your accommodation early.
              </p>
            </div>
            <div className={styles.separator} />

            <div className={styles.papersBlurb}>
              <div className={styles.queries}>
                <Logo1 />
                <p>
                  For conference-related queries, please contact{" "}
                  <a href="mailto:isfnr2026@nomadit.co.uk">
                    isfnr2026(at)nomadit.co.uk
                  </a>
                  .
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* ALTERNATIVE OPTIONS */}
        <section id="alternative-options" className={styles.section}>
          <h2>Alternative options</h2>
          <div className={styles.papersWrapper}>
            <div className={styles.papersBlurb}>
              <h3>Visit Reykjavík</h3>
              <p>
                Visit Reykjavík has a section dedicated to finding accommodation
                in the city, along with many other useful write-ups about
                neighbourhoods, attractions, and services.
              </p>

              <h3>The “Google solution”</h3>
              <p>
                Those looking for more affordable or alternative lodgings can
                use peer-reviewed travel advice or accommodation sites such as:
              </p>
              <ul>
                <li>Booking.com</li>
                <li>Tripadvisor</li>
                <li>Lonely Planet</li>
                <li>Trivago</li>
                <li>Agoda</li>
              </ul>
              <p>
                You can also simply search for phrases such as{" "}
                <em>"budget accommodation Reykjavik"</em> or{" "}
                <em>"luxury pad rent Reykjavik"</em> and see what turns up.
              </p>
            </div>
            <div className={styles.separator} />
            <div className={styles.papersBlurb}>
              {" "}
              <h3>Apartment rentals & shared options</h3>
              <p>
                If you are thinking of renting a place for the week, where you
                can do your own cooking and maybe share the costs with
                colleagues or family, consider:
              </p>
              <ul>
                <li>Airbnb</li>
                <li>Booking.com apartment listings</li>
                <li>The “Vacation rentals” section on Tripadvisor</li>
              </ul>
              <h3>Meeting locals & low-budget stays</h3>
              <p>
                For those who want to meet locals and keep costs to an absolute
                minimum, you may wish to look at couch-surfing sites or online
                groups for short-term room rentals.
              </p>
            </div>
          </div>
        </section>
        {/* ISLANDS HOTELS */}
        <section id="islands-hotels" className={styles.section}>
          <h2>Islands Hotels</h2>
          <div className={styles.papersWrapper}>
            <div className={styles.papersBlurb}>
              <p>
                There are five Islands Hotels to select from in Reykjavík city
                centre. Please check each website to find the most suitable
                option:
              </p>
              <ul>
                <li>Hotel Reykjavik Saga</li>
                <li>Hotel Reykjavik Grand</li>
                <li>Hotel Reykjavik Centrum</li>
                <li>Fosshotel Reykjavik</li>
                <li>Fosshotel Baron</li>
              </ul>
              <p>
                <strong>Hotel phone:</strong> +354 238 4216
                <br />
                <strong>Website:</strong>{" "}
                <a
                  href="https://www.islandshotel.is"
                  target="_blank"
                  rel="noreferrer"
                >
                  www.islandshotel.is
                </a>
              </p>
            </div>

            <div className={styles.separator} />
            <div className={styles.papersBlurb}>
              <h3>Rates & booking</h3>
              <ul>
                <li>
                  <strong>Nightly bed and breakfast rate:</strong> No set rates;
                  10% discount on best available rates.
                </li>
                <li>
                  <strong>How to book with discount:</strong>{" "}
                  <a
                    href="https://islandshotel-isk.direct-reservation.net/en/accommodation"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Online booking link
                  </a>
                </li>
                <li>
                  <strong>Cancellation policy (individual bookings):</strong>{" "}
                  until 2 days prior to arrival date, by 16:00 (4 pm).
                </li>
                <li>
                  <strong>Full payment terms:</strong> payment on booking.*
                </li>
                <li>
                  <strong>Promo code:</strong> <mark>HI2026</mark>
                </li>
                <li>
                  <strong>Location notes:</strong> dependent on chosen hotel.
                </li>
              </ul>
              <p>
                *In case of no-show or late cancellation the total stay will be
                charged. For group bookings and individual reservations of 5 or
                more rooms, other policies apply; please contact the hotel
                directly for further information.
              </p>
            </div>
          </div>
        </section>
        {/* BLACK PEARL */}
        {/* <section id="black-pearl" className={styles.section}>
          <h2>Black Pearl Hotel</h2>
          <div className={styles.papersWrapper}>
            <div className={styles.papersBlurb}>
              <p>
                <strong>Address:</strong> Tryggvagata 18, 101 Reykjavík, Iceland
                <br />
                <strong>Hotel phone:</strong> +354 527 9600
                <br />
                <strong>Email:</strong>{" "}
                <a href="mailto:info@blackpearlreykjavik.com">
                  info@blackpearlreykjavik.com
                </a>
              </p>

              <h3>Rates & booking</h3>
              <ul>
                <li>
                  <strong>Nightly bed and breakfast rate:</strong> No set rates;
                  15% discount on best available rates.
                </li>
                <li>
                  <strong>Cancellation policy (individual bookings):</strong>{" "}
                  free cancellation 48 hours before arrival (72 hours for deluxe
                  rooms).
                </li>
                <li>
                  <strong>Full payment terms:</strong> pay on booking.
                </li>
                <li>
                  <strong>Discount code:</strong> please use the{" "}
                  <mark>ISFNR2026</mark> promo code for conference discounts.
                </li>
                <li>
                  <strong>Location notes:</strong> central Reykjavík,
                  approximately 2.8 km from the conference venue.
                </li>
              </ul>
            </div>
          </div>
        </section> */}
        {/* 101 HOTEL */}
        {/* <section id="hotel-101" className={styles.section}>
          <h2>101 Hotel (4*)</h2>
          <div className={styles.papersWrapper}>
            <div className={styles.papersBlurb}>
              <p>
                <strong>Address:</strong> Hverfisgata 10, 101 Reykjavík, Iceland
                <br />
                <strong>Hotel phone:</strong> +354 580 0101
                <br />
                <strong>Hotel email:</strong>{" "}
                <a href="mailto:101hotel@101hotel.is">101hotel@101hotel.is</a>
                <br />
                <strong>Reservations email:</strong>{" "}
                <a href="mailto:reservation@101hotel.is">
                  reservation@101hotel.is
                </a>
              </p>

              <h3>Rates & booking</h3>
              <ul>
                <li>
                  <strong>Nightly rate:</strong> no fixed conference rates; from
                  50,000 ISK per night (room only).
                </li>
                <li>
                  <strong>Discounts:</strong> available through the Marriott
                  Bonvoy app and Booking.com (subject to availability).
                </li>
                <li>
                  <strong>Cancellation policy:</strong> see hotel website /
                  booking link for details.
                </li>
                <li>
                  <strong>Full payment terms:</strong> full payment required at
                  time of booking.
                </li>
                <li>
                  <strong>Location notes:</strong> central Reykjavík,
                  approximately 2.2 km from the conference venue.
                </li>
              </ul>
            </div>
          </div>
        </section> */}
        {/* CENTER HOTELS
        <section id="center-hotels" className={styles.section}>
          <h2>Center Hotels</h2>
          <div className={styles.papersWrapper}>
            <div className={styles.papersBlurb}>
              <p>
                There are nine Center Hotels available in Reykjavík city centre.
                Please consult the main website to find the most suitable
                option.
              </p>
              <p>
                <strong>Hotel phone:</strong> +354 238 4216
                <br />
                <strong>Booking link:</strong>{" "}
                <a
                  href="https://www.guestreservations.com/center-hotels-plaza/booking"
                  target="_blank"
                  rel="noreferrer"
                >
                  guestreservations.com/center-hotels-plaza/booking
                </a>
              </p>

              <h3>Rates & booking</h3>
              <ul>
                <li>
                  <strong>Nightly bed and breakfast rate:</strong> no set rates;
                  10% discount on best available rates.
                </li>
                <li>
                  <strong>How to book with discount:</strong> booking code to be
                  applied; valid for limited periods (a new partner form may
                  need to be completed).
                </li>
                <li>
                  <strong>Cancellation policy (individual bookings):</strong>{" "}
                  free cancellation up to 48 hours before arrival.
                </li>
                <li>
                  <strong>Full payment terms:</strong> payment on booking.
                </li>
                <li>
                  <strong>Location notes:</strong> dependent on chosen hotel
                  site.
                </li>
              </ul>
            </div>
          </div>
        </section> */}
        {/* KEX HOSTEL */}
        <section id="hostels" className={styles.section}>
          <h2>Hostels</h2>
          <div className={styles.papersWrapper}>
            <div className={styles.papersBlurb}>
              <h3>KEX Hostel</h3>
              <p>
                <strong>Address:</strong> Skúlagata 28, 101 Reykjavík, Iceland
                <br />
                <strong>Phone:</strong> +354 561 6060
                <br />
                <strong>Email:</strong>{" "}
                <a href="mailto:kexhostel@kexhostel.is">
                  kexhostel@kexhostel.is
                </a>
                <br />
                <strong>Website:</strong>{" "}
                <a
                  href="https://www.kexhostel.is"
                  target="_blank"
                  rel="noreferrer"
                >
                  https://www.kexhostel.is
                </a>
              </p>
              <p>
                KEX is a popular hostel option in Reykjavík and may be suitable
                for delegates seeking budget-friendly, sociable accommodation in
                the city centre.
              </p>
            </div>

            <div className={styles.separator} />
            <div className={styles.papersBlurb}>
              <h3>Laekur Hostel</h3>

              <p>
                <strong>Address:</strong> Laugarnesvegur 74a, Reykjavík, Capital
                Region 105, Iceland
                <br />
                <strong>Phone:</strong> +354 771 9995
                <br />
                <strong>Email:</strong>{" "}
                <a href="mailto:guest@laekur.is">guest@laekur.is</a>
                <br />
                <strong>Website:</strong>{" "}
                <a
                  href="https://www.hostelworld.com/hostels/p/282803/laekur-hostel/"
                  target="_blank"
                  rel="noreferrer"
                >
                  https://www.hostelworld.com/hostels/p/282803/laekur-hostel/
                </a>
              </p>

              <h3>Rates & booking</h3>
              <ul>
                <li>
                  <strong>Nightly bed and breakfast rate:</strong> Quotes at
                  time of booking.
                </li>
                <li>
                  <strong>How to book:</strong> Hostel email or booking site
                </li>

                <li>
                  <strong>Full payment terms:</strong> Pay on arrival
                </li>
                <li>
                  <strong>Location notes:</strong> Located 2.7km from university
                </li>
              </ul>
            </div>
          </div>

          <div className={styles.colSeparator} />

          <div className={styles.papersWrapper}>
            <div className={styles.papersBlurb}>
              <h3>Student Hostel</h3>

              <p>
                <strong>Address:</strong> Hringbraut 29, Reykjavík 101, Iceland
                <br />
                <strong>Phone:</strong> +354510 2828
                <br />
                <strong>Email:</strong>{" "}
                <a href="mailto:info@studenthostels.is">
                  info@studenthostels.is
                </a>
                <br />
                <strong>Website:</strong>{" "}
                <a
                  href="https://www.studenthostel.is/"
                  target="_blank"
                  rel="noreferrer"
                >
                  https://www.studenthostel.is/
                </a>
              </p>

              <h3>Rates & booking</h3>
              <ul>
                <li>
                  <strong>Nightly bed and breakfast rate:</strong> Quotes at
                  time of booking.
                </li>
                <li>
                  <strong>How to book:</strong> No reservation costs
                </li>

                <li>
                  <strong>Full payment terms:</strong> Pay on arrival
                </li>
                <li>
                  <strong>Location notes:</strong> Located on university campus
                </li>
              </ul>
            </div>

            <div className={styles.separator} />
            <div className={styles.papersBlurb}>
              <h3>Loft Hi –Eco Hostel</h3>

              <p>
                <strong>Address:</strong> Bankastraeti 7, Hufuoborgarsvaedi 101,
                Reykjavik
                <br />
                <strong>Phone:</strong> +354 553 8140
                <br />
                <strong>Website:</strong>{" "}
                <a
                  href="https://hostellofthieco.reykjavikihotel.com/en/"
                  target="_blank"
                  rel="noreferrer"
                >
                  https://hostellofthieco.reykjavikihotel.com/en/
                </a>
                <br />
                <br />
                <strong>
                  *Loft Hi-Eco holds SWAN, Nordic Sustainability Eco-Label
                </strong>{" "}
              </p>

              <h3>Rates & booking</h3>
              <ul>
                <li>
                  <strong>Nightly bed and breakfast rate:</strong> Quotes at
                  time of booking.
                </li>
                <li>
                  <strong>Booking:</strong> No reservation costs
                </li>

                <li>
                  <strong>Full payment terms:</strong> Pay on arrival
                </li>
                <li>
                  <strong>Location notes:</strong> Located 1.3km from university
                </li>
              </ul>
            </div>
          </div>

          <div className={styles.colSeparator} />

          <div className={styles.papersWrapper}>
            <div className={styles.papersBlurb}>
              <h3>Bus Hostel</h3>

              <p>
                <strong>Address:</strong> Skogarhlio10, 105, Reykjavik
                <br />
                <strong>Phone:</strong> +354 535 0350
                <br />
                <strong>Email:</strong>{" "}
                <a href="info@bushostelreykjavik.com">
                  info@bushostelreykjavik.com
                </a>
                <br />
                <strong>Website:</strong>{" "}
                <a
                  href="https://www.bushostelreykjavik.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  https://www.bushostelreykjavik.com/
                </a>
                <br />
              </p>

              <h3>Rates & booking</h3>
              <ul>
                <li>
                  <strong>Nightly bed and breakfast rate:</strong> Quotes at
                  time of booking.
                </li>
                <li>
                  <strong>Booking:</strong>{" "}
                  <a
                    href="https://www.bushostelreykjavik.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    https://www.bushostelreykjavik.com/
                  </a>
                </li>

                <li>
                  <strong>Full payment terms:</strong> Pay on arrival
                </li>
                <li>
                  <strong>Location notes:</strong> Located 1.5km from university
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Accommodation;
