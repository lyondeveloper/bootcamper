import { createSelector } from "reselect";

const appState = state => state.app;

export const selectSpinnerActivated = createSelector(
  [appState],
  app => app.spinnerActivated
);
