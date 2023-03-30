import React from "react";

interface CompanyInfo {
  name: string;
  address: string;
  district: string;
  city: string;
  postcode: string;
  map: string;
}

interface Props {
  company: CompanyInfo;
}

const CompanyInfoFunc = ({
  company
}: Props) => {
  const { name, address, district, city, postcode, map } = company;
  return (
    <div>
      <h2>{name}</h2>
      <p>{address}</p>
      <p>
        {district}, {city} {postcode}
      </p>
      <a href={map} target="_blank" rel="noreferrer">
        View on Google Maps
      </a>
    </div>
  );
};

export default CompanyInfoFunc;