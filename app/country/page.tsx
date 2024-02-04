import Image from "next/image";
import React from "react";

async function getCountryData() {
  try {
    const response = await fetch("http://13.40.105.69:4003/api/v1/country");
    if (!response.ok) {
      const res = await response.json();
      throw new Error(res);
    }
    return response.json();
  } catch (error) {
    throw error;
  }
}

const CountryPage = async () => {
  const data = await getCountryData();
  //   console.log("country >>>", data);
  return (
    <div>
      <Image
        src={data.data[0]?.flag}
        alt="country-flag"
        width={500}
        height={300}
      />
    </div>
  );
};

export default CountryPage;
