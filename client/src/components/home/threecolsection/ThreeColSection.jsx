"use client"
import { FaLuggageCart } from "react-icons/fa";
import { TbTruckDelivery } from "react-icons/tb";

function ThreeColSection() {
  return (
    <>
      <div className="container my-3">
        <hr className="custom-hr" />
        <div className="row">
          <div className="col-lg-4 col-md-4 px-3 text-center">
            <div className="counter-icon">
              <FaLuggageCart />
            </div>
            <h5 className="fw-bold">BULK ORDER</h5>
            <p className="text-muted">Get a good discount on bulk orders.</p>
          </div>

          <div className="col-lg-4 col-md-4 px-3 text-center">
            <div className="counter-icon">
              <TbTruckDelivery />
            </div>
            <h5 className="fw-bold">PAN INDIA DELIVERY</h5>
            <p className="text-muted">
              Get your uniform delivered at your doorstep.
            </p>
          </div>

          <div className="col-lg-4 col-md-4 px-3 text-center">
            <div className="counter-icon">
              <FaLuggageCart />
            </div>
            <h5 className="fw-bold">7 DAYS EXCHANGE*</h5>
            <p className="text-muted">Simply exchange it within 7 days.</p>
          </div>
        </div>
        <hr className="custom-hr" />

        <h3 className="text-center rubik mt-3">
          We Create Amazing Workwear Uniform And We Love What We Do!
        </h3>
        <p className="text-muted f-14 px-0 px-md-3 px-lg-5">
          Uniform Bucket brings the latest international trends to the market in
          the form of easy, comfortable, and goodlooking uniforms from our
          online store. The Uniform Bucket collections are conceived with the
          idea of dressing employees as the actual brand ambassadors of the
          company mind-set, taking into account that pricing is not an obstacle
          when choosing uniforms.
        </p>
        <hr className="mt-4" />
        <div className="container py-3">
          <div className="row justify-content-between">
            <div className="col-lg-4  mt-3 px-5">
              <h3 className="three-col-heading text-center">Unique Design</h3>
              <p className="text-muted f-14  text-center">
                Our online uniform store collection hopes to unite every
                Employee with the perfect piece of clothing that they feel and
                look great in.
              </p>
            </div>

            <div className="col-lg-4  mt-3 px-5">
              <h3 className="three-col-heading text-center">Assured Quality</h3>
              <p className="text-muted f-14  text-center">
              We are top online uniform store / uniform manufacturer, provide high quality products all time. Every Garment goes through several Quality Checks before final Dispatch.
              </p>
            </div>
            
            <div className="col-lg-4  mt-3 px-5">
              <h3 className="three-col-heading text-center">Standard Sizes</h3>
              <p className="text-muted f-14  text-center">
              We follow sizes based on International standards so thatyou can easily collect accurate sizes from your Pan India employees, and it sure fits all.
              </p>
            </div>
            <div className="col-lg-4  mt-3 px-5">
              <h3 className="three-col-heading text-center">Finest Raw Material</h3>
              <p className="text-muted f-14  text-center">
              We have been sourcing the finest raw materials from around the World, and innovating to develop luxury and good looking Uniform that are entirely unique. We don't use any fabrics that we haven't tested ourself.
              </p>
            </div>
            <div className="col-lg-4  mt-3 px-5">
              <h3 className="three-col-heading text-center">Wide Dispatch</h3>
              <p className="text-muted f-14  text-center">
              Fastest Uniform Supplier for you on your behalf, we will dispatch the uniforms to your Pan-India offices, Zonal, Regional, and Area-Wise, so that you can focus on more important aspects of your business.
              </p>
            </div>
            <div className="col-lg-4  mt-3 px-5">
              <h3 className="three-col-heading text-center">After Sales Support</h3>
              <p className="text-muted f-14  text-center">
              We offer a broad range of after-sales support, which ensures top-quality standards, fast problem resolution, and the ability to establish a high brand image.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ThreeColSection;
