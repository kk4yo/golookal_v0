import React, { useState } from "react";
import LocationPermission from "./LocationPermission"; // Import your LocationPermission component

export default function ServicesNearby() {
  const [showLocationPermission, setShowLocationPermission] = useState(true);

  // Function to hide the location permission component
  const hideLocationPermission = () => {
    setShowLocationPermission(false);
  };

  return (
    <>
      {showLocationPermission && (
        <LocationPermission setState={hideLocationPermission} />
      )}

        <header>
        <div class="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
            <div class="sm:flex sm:items-center sm:justify-between">
            <div class="text-center sm:text-left">
                <h1 class="text-2xl font-bold text-gray-900 sm:text-3xl">
                Find a service nearby
                </h1>

                <p class="mt-1.5 text-sm text-gray-500">
                240 service provider found.
                </p>
            </div>
            <div class="mt-4 flex flex-col gap-4 sm:mt-0 sm:flex-row sm:items-center">
                <button
                class="block rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring"
                type="button"
                >
                Return
                </button>
            </div>
            </div>
        </div>
        </header>

        
    </>
  );
}
