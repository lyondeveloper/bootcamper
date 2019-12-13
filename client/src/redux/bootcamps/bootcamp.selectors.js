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

// Filter bootcamp selectors

// Add Bootcamp Selectors
export const selectAddBootcamp = createSelector(
  [selectBootcampsState],
  bootcamps => bootcamps.addBootcamp
);

export const selectAddBootcampValidationRules = createSelector(
  [selectAddBootcamp],
  addBootcamp => addBootcamp.validationRules
);

export const selectAddBootcampFormPayload = createSelector(
  [selectAddBootcamp],
  addBootcamp => addBootcamp.formPayload
);

export const selectAddBootcampCurrentStep = createSelector(
  [selectAddBootcamp],
  addBootcamp => addBootcamp.currentStep
);
