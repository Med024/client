import React from "react";
import { Helmet, HelmetProvider } from 'react-helmet-async';


const MetaData = ({title}) => {
  return (
    <HelmetProvider context={HelmetProvider}>
      <Helmet>
    <title>{`${title} - EpicGear`}</title>
    </Helmet>
      </HelmetProvider>

  );
};

export default MetaData;
