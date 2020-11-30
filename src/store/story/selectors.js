import { createSelector } from "reselect";

const storyIdSelector = (state) => state.story.storyIds;
const storiesSelector = (state) => state.story.stories;

export const hasMoreStoriesSelector = createSelector(
  storyIdSelector,
  storiesSelector,
  (storyIds, stories) => storyIds.length > stories.length
);
