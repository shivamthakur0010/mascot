import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";
import './Faq.css';
import Accordion from 'react-bootstrap/Accordion';
import { IoIosArrowDown } from "react-icons/io";

function Faq() {
  return (
    <>
      <div className="container-fluid bg-breadcrum py-auto">
        <h1 className="breadcrum text-center pt-3 display-6 lh-1 rubik">
         FAQ
        </h1>
        <div className="container">
          <p>
            <Link to="/" className="text-decoration-none text-muted">
              <FaHome />{" "}
            </Link>
            / <span className="text-muted f-14 fw-bolder">FAQ</span>{" "}
          </p>
        </div>
      </div>

      <div className="container-fluid faq-title-head rubik">
        <h1>Frequently asked questions</h1>
        <div className="faq-content-wrap">
        <p className="the-content rubik">You have a question? Based on the most frequently asked questions (FAQ) by our customers we have compiled these answers. If you don’t find the answer to your question, call us, +1 418 694 1884, or send us an email through our contact form (see “contact us” at the bottom of the page).</p>
        </div>
      </div>
      <div className="container accord-box">
      <Accordion>
      <Accordion.Item eventKey="0">
        <Accordion.Header><IoIosArrowDown />What time can we access our room ?</Accordion.Header>
        <Accordion.Body>
         Arrival time is 3:00. If you arrive earlier do not hesitate to drop off your luggage at the hotel; it will be our pleasure to keep it if you wish to begin your exploration of the city.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header><IoIosArrowDown />What time should we leave our room?</Accordion.Header>
        <Accordion.Body>
        Departure time is 11:00. If you want to stay longer in town, you can let your luggage in our storage.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header><IoIosArrowDown />What time can we access our room ?</Accordion.Header>
        <Accordion.Body>
         Arrival time is 3:00. If you arrive earlier do not hesitate to drop off your luggage at the hotel; it will be our pleasure to keep it if you wish to begin your exploration of the city.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header><IoIosArrowDown />Does the hotel have a Wi-Fi network ?</Accordion.Header>
        <Accordion.Body>
        The hotel offers free Wi-Fi in all rooms, as well as in the common areas. You willl receive the access code upon your arrival.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="4">
        <Accordion.Header><IoIosArrowDown />Is there an elevator in the hotel ?</Accordion.Header>
        <Accordion.Body>
        The hotel does not have an elevator but if you need somme assistance, we will take your luggage to your room.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="5">
        <Accordion.Header><IoIosArrowDown />Is there a workspace in the bedrooms ?</Accordion.Header>
        <Accordion.Body>
        Departure time is 11:00. If you want to stay longer in town, you can let your luggage in our storage.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="6">
        <Accordion.Header><IoIosArrowDown />Where can we park our car ?</Accordion.Header>
        <Accordion.Body>
         Arrival time is 3:00. If you arrive earlier do not hesitate to drop off your luggage at the hotel; it will be our pleasure to keep it if you wish to begin your exploration of the city.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="7">
        <Accordion.Header><IoIosArrowDown />Can we bring our pet ?</Accordion.Header>
        <Accordion.Body>
        Departure time is 11:00. If you want to stay longer in town, you can let your luggage in our storage.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
    
    </div>
      

    </>
  )
}

export default Faq