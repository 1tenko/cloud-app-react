import React from "react";
import { CheckIcon } from "@heroicons/react/outline";

const NotificationsCard = () => {
  return (
    <div className="flex">
      <div>
        <CheckIcon className="w-7 mr-4 text-green-600" />
      </div>

      <div className="">
        <h3 className="font-bold text-lg">Notifications</h3>
        <p className="text-lg pt-2 pb-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
          error necessitatibus impedit laborum quidem laboriosam.
        </p>
      </div>
    </div>
  );
};

export default NotificationsCard;
