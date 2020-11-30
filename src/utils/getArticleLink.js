const HNA_ROOT = "https://news.ycombinator.com";
export const HNA_ITEM = `${HNA_ROOT}/item?id=`;
export const HNA_USER = `${HNA_ROOT}/user?id=`;

const getArticleLink = ({ url, id }) => {
  const commentUrl = `${HNA_ITEM}${id}`;
  const link = !!url ? url : commentUrl;
  return link;
};

export default getArticleLink;
