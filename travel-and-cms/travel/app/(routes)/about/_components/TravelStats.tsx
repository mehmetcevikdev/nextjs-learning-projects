"use client";
import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const TravelStats = () => {
  const stats = [
    { label: "Visited Countries", end: 50, suffix: "+" },
    { label: "Happy Clients", end: 1200, suffix: "+" },
    { label: "Complated Tours", end: 300, suffix: "+" },
  ];
  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0.2,
    triggerOnce: false,
  });

  return (
    <div className="bg-blue-50 py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl lg:text-5xl font-bold text-blue-600 mb-8">
          Why Choose Us?
        </h2>
        <p className="text-gray-600 max-w-3xl mx-auto mb-12">
          Join thousands of travelers around the world and make your journey
          unforgettable with Trendy Travel. Explore unique destonations with us!
        </p>

        <div ref={ref} className="grid grid-cols-1 sm:grid-cols-3 gap-8 px-6">
          {stats.map((stat, index) => (
            <div
              className="bg-white shadow-lg rounded-lg p-8 flex flex-col items-center"
              key={index}
            >
              <h3 className="text-4xl lg:text-6xl font-bold text-orange-500">
                {inView ? <CountUp end={stat.end} suffix={stat.suffix} /> : "0"}
              </h3>
              <p className="text-gray-600 text-lg mt-4">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TravelStats;
