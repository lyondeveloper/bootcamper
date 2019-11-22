import { createSelector } from 'reselect';

const selectBootcampsState = state => state.bootcamps;

export const selectBootcamps = createSelector(
  [selectBootcampsState],
  bootcamps => bootcamps.bootcamps
);

export const selectSingleBootcamp = createSelector(
  [selectBootcampsState],
  bootcamps => bootcamps.singleBootcamp
);

export const selectLoading = createSelector(
  [selectBootcampsState],
  bootcamps => bootcamps.loading
);

export const selectIsLoaded = createSelector(
  [selectBootcampsState],
  bootcamps => !!bootcamps.bootcamps
);

export const selectIsLoadedBootcamp = createSelector(
  [selectBootcampsState],
  bootcamps => !!bootcamps.singleBootcamp
);
