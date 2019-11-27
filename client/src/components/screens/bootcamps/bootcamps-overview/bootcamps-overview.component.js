import React, { Fragment, useEffect } from 'react';
import BootcampPreview from '../../bootcamp/bootcamp-preview/bootcamp-preview.component';

const BootcampsOverview = ({ bootcamps, match }) => {
  return (
    <Fragment>
      {' '}
      {bootcamps.map(bootcamp => (
        <BootcampPreview bootcamp={bootcamp} match={match} />
      ))}{' '}
    </Fragment>
  );
};

export default BootcampsOverview;
