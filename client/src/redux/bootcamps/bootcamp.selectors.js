import { createSelector } from 'reselect';

const selectBootcampsState = state => state.bootcamps;

export const selectBootcamps = createSelector(
  [selectBootcampsState],
  bootcamps => bootcamps.bootcamps
);

export const selectLoading = createSelector(
  [selectBootcampsState],
  bootcamps => bootcamps.loading
);

export const selectIsLoaded = createSelector(
  [selectBootcampsState],
  bootcamps => !!bootcamps.bootcamps
);
