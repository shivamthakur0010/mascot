"use client"
import  { useState, useEffect, useRef } from 'react';
import { HiUserGroup } from "react-icons/hi2";
import { FaIndustry } from "react-icons/fa";
import { FaTruck } from "react-icons/fa";
import { SiGoogleforms } from "react-icons/si";
import CountUp from 'react-countup';

function Counter() {
  const [isVisible, setIsVisible] = useState(false);
  const counterRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.3, // Adjusts when it triggers (30% visible)
      }
    );
    
    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => {
      if (counterRef.current) {
        observer.unobserve(counterRef.current);
      }
    };
  }, []);

  return (
    <>
      <div className="container my-5 py-lg-3" ref={counterRef}>
        <div className="row">
          <div className="col-lg-3 col-md-6 mt-2 text-center">
            <div className="counter-icon">
              <HiUserGroup />
            </div>
            <h2>
              {isVisible && <CountUp delay={0.5} duration={5} end={10000} suffix="+" />}
            </h2>
            <h5>Happy Customers</h5>
          </div>
          <div className="col-lg-3 col-md-6 mt-2 text-center">
            <div className="counter-icon">
              <FaIndustry />
            </div>
            <h2>
              {isVisible && <CountUp delay={0.5} duration={5} end={25} suffix="+" />}
            </h2>
            <h5>Industries Served</h5>
          </div>
          <div className="col-lg-3 col-md-6 mt-2 text-center">
            <div className="counter-icon">
              <FaTruck />
            </div>
            <h2>
              {isVisible && <CountUp delay={0.5} duration={5} end={9000} suffix="+" />}
            </h2>
            <h5>Orders Delivered</h5>
          </div>
          <div className="col-lg-3 col-md-6 mt-2 text-center">
            <div className="counter-icon">
              <SiGoogleforms />
            </div>
            <h2>
              {isVisible && <CountUp delay={0.5} duration={5} end={15000} suffix="+" />}
            </h2>
            <h5>Orders Placed</h5>
          </div>
        </div>
      </div>
    </>
  );
}

export default Counter;
