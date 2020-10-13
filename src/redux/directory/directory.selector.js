import { createSelector } from "reselect";

const directorySelector = (state) => state.directory;

export const selectSectionsDirectory = createSelector(
  [directorySelector],
  (directory) => directory.sections
);
