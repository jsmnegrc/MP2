import React from "react";
import { Link } from "react-router-dom";
import {Container as BootstrapContainer,Button,Row as BootstrapRow,Col as BootstrapCol,} from "react-bootstrap";

const Banner = ({
  purpose,
  title1,
  title2,
  desc1,
  desc2,
  ButtonText,
  LinkName,
  imageUrl,
}) => (
  <div className="d-flex flex-wrap justify-content-center align-items-center m-5">
    <img src={imageUrl} width={500} height={300} alt="banner" />
    <div style={{ padding: "5px" }}>
      <p className="text-muted font-weight-medium">{purpose}</p>
      <h3 className="font-weight-bold">
        {title1}
        <br />
        {title2}
      </h3>
      <p className="font-size-lg pt-3 pb-3 text-dark">
        {desc1}
        <br />
        {desc2}
      </p>
      <Button className="btn btn-primary btn-lg">
        <Link to={LinkName}>{ButtonText}</Link>
      </Button>
    </div>
  </div>
);

function Communities({ propertiesForSale }) {
  return (
    <div>
      <h1>hello naiinis na ko please gumana ka na</h1>
      <Banner
        purpose="RENT A HOME"
        title1="Rental Homes for"
        title2="Everyone"
        desc1="Explore Apartments, Villas, Homes"
        desc2="and more"
        ButtonText="Explore Renting"
        LinkName="/search?purpose=for-rent"
        imageUrl="https://bayut-production.s3.eu-central-1.amazonaws.com/image/145426814/33973352624c48628e41f2ec460faba4"
      />
      <Banner
        purpose="BUY A HOME"
        title1=" Find, Buy & Own Your"
        title2="Dream Home"
        desc1=" Explore from Apartments, land, builder floors,"
        desc2=" villas and more"
        ButtonText="Explore Buying"
        LinkName="/search?purpose=for-sale"
        imageUrl="https://bayut-production.s3.eu-central-1.amazonaws.com/image/110993385/6a070e8e1bae4f7d8c1429bc303d2008"
      />
      {/* Add the missing import for Flex */}
      {/* Import Flex from wherever you are using it */}
      <BootstrapContainer>
        <BootstrapRow>
            {propertiesForSale.map((property) => (
            <Property property={property} key={property.id} />
            ))}
        </BootstrapRow>
      </BootstrapContainer>
    </div>
  );
}

export async function getStaticProps() {
  const propertyForSale = await fetchApi(
    `${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-sale&hitsPerPage=6`
  );
  const propertyForRent = await fetchApi(
    `${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-rent&hitsPerPage=6`
  );

  return {
    props: {
      propertiesForSale: propertyForSale?.hits,
      propertiesForRent: propertyForRent?.hits,
    },
  };
}

export default Communities;
