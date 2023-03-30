import React from 'react';

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

class CompanyInfoClass extends React.Component<Props> {
  render() {
    const { name, address, district, city, postcode, map } = this.props.company;
    return (
      <div>
        <h2>{name}</h2>
        <p>{address}</p>
        <p>{district}, {city} {postcode}</p>
        <a href={map}>View on map</a>
      </div>
    );
  }
}

export default CompanyInfoClass;