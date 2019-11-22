import React, { Fragment } from 'react';
import BootcampPreview from '../../bootcamp/bootcamp-preview/bootcamp-preview.component';

const BootcampsOverview = ({ bootcamps, match }) => (
  <Fragment>
    {' '}
    {bootcamps.map(bootcamp => (
      <BootcampPreview bootcamp={bootcamp} match={match} />
    ))}{' '}
  </Fragment>
);

export default BootcampsOverview;
