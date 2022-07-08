import React from "react";
import NotificationsCard from "./NotificationsCard";

const Platforms = () => {
  return (
    <div className="w-full my-32">
      <div className="max-w-[1240px] mx-auto px-2">
        <h2 className="text-5xl font-bold text-center">All-in-one Platform</h2>
        <p className="text-2xl py-8 text-gray-500 text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
          asperiores in nesciunt quae quam numquam commodi cumque magnam maiores
          dolore.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4">
          <NotificationsCard />
          <NotificationsCard />
          <NotificationsCard />
          <NotificationsCard />
          <NotificationsCard />
          <NotificationsCard />
          <NotificationsCard />
          <NotificationsCard />
        </div>
      </div>
    </div>
  );
};

export default Platforms;
