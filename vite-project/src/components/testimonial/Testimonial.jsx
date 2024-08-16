import React, { useContext } from "react";
import myContext from "../../context/data/myContext";

function Testimonial() {
  const context = useContext(myContext);
  const { mode } = context;
  return (
    <div>
      <section className="text-gray-600 body-font mb-10">
        <div className="container px-5 py-10 mx-auto">
          <h1
            className=" text-center text-3xl font-bold text-black"
            style={{ color: mode === "dark" ? "white" : "" }}
          >
            Testimonial
          </h1>
          <h2
            className=" text-center text-2xl font-semibold mb-10"
            style={{ color: mode === "dark" ? "white" : "" }}
          >
            What our <span className=" text-teal-700">customers</span> are
            saying
          </h2>
          <div className="flex flex-wrap -m-4">
            <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
              <div className="h-full text-center">
                <img
                  alt="testimonial"
                  className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                  src="https://cdn-icons-png.flaticon.com/128/2763/2763444.png"
                />
                <p
                  style={{ color: mode === "dark" ? "white" : "" }}
                  className="leading-relaxed"
                >
                  I wanted to take a moment to express my heartfelt appreciation
                  for your outstanding work. Your dedication, creativity, and
                  attention to detail have truly made a significant impact. It’s
                  clear that you bring passion and excellence to everything you
                  do, and your contributions have not gone unnoticed. Your
                  ability to tackle challenges with a positive attitude and
                  deliver exceptional results is truly inspiring. Thank you for
                  your hard work, commitment, and the positive energy you bring
                  to the team. It’s a pleasure to work with someone who
                  consistently goes above and beyond.
                </p>
                <span className="inline-block h-1 w-10 rounded bg-teal-700 mt-6 mb-4" />
                <h2
                  style={{ color: mode === "dark" ? "#ff4162" : "" }}
                  className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase"
                >
                  Customer1
                </h2>
                <p
                  style={{ color: mode === "dark" ? "white" : "" }}
                  className="text-gray-500"
                >
                  Xyz Company
                </p>
              </div>
            </div>
            <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
              <div className="h-full text-center">
                <img
                  alt="testimonial"
                  className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                  src="https://cdn-icons-png.flaticon.com/128/2763/2763444.png"
                />
                <p
                  style={{ color: mode === "dark" ? "white" : "" }}
                  className="leading-relaxed"
                >
                  I wanted to take a moment to express my heartfelt appreciation
                  for your outstanding work. Your dedication, creativity, and
                  attention to detail have truly made a significant impact. It’s
                  clear that you bring passion and excellence to everything you
                  do, and your contributions have not gone unnoticed. Your
                  ability to tackle challenges with a positive attitude and
                  deliver exceptional results is truly inspiring. Thank you for
                  your hard work, commitment, and the positive energy you bring
                  to the team. It’s a pleasure to work with someone who
                  consistently goes above and beyond.
                </p>
                <span className="inline-block h-1 w-10 rounded bg-teal-700  mt-6 mb-4" />
                <h2
                  style={{ color: mode === "dark" ? "#ff4162" : "" }}
                  className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase"
                >
                  Customer2
                </h2>
                <p
                  style={{ color: mode === "dark" ? "white" : "" }}
                  className="text-gray-500"
                >
                  Xyz Company
                </p>
              </div>
            </div>
            <div className="lg:w-1/3 lg:mb-0 p-4">
              <div className="h-full text-center">
                <img
                  alt="testimonial"
                  className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                  src="https://cdn-icons-png.flaticon.com/128/2763/2763444.png"
                />
                <p
                  style={{ color: mode === "dark" ? "white" : "" }}
                  className="leading-relaxed"
                >
                  I wanted to take a moment to express my heartfelt appreciation
                  for your outstanding work. Your dedication, creativity, and
                  attention to detail have truly made a significant impact. It’s
                  clear that you bring passion and excellence to everything you
                  do, and your contributions have not gone unnoticed. Your
                  ability to tackle challenges with a positive attitude and
                  deliver exceptional results is truly inspiring. Thank you for
                  your hard work, commitment, and the positive energy you bring
                  to the team. It’s a pleasure to work with someone who
                  consistently goes above and beyond.
                </p>
                <span className="inline-block h-1 w-10 rounded bg-teal-700  mt-6 mb-4" />
                <h2
                  style={{ color: mode === "dark" ? "#ff4162" : "" }}
                  className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase"
                >
                  Customer3
                </h2>
                <p
                  style={{ color: mode === "dark" ? "white" : "" }}
                  className="text-gray-500"
                >
                  CTO
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Testimonial;
