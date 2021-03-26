function GetSearchUrl(searchTerms) {
  const collection = 'postcards';
  const sortBy = 'no_sort';
  const maxRecs = '';
  const start = 0;
  const format = 'json';
  const searchField = 'CISOSEARCHALL';
  searchTerms = searchTerms.replace(' ', '+');
  const searchMode = 'all';
  searchOperator = 'and';
  let searchString = `${searchField}^${searchTerms}^${searchMode}^${searchOperator}`;
  queryUrl =
    'https://cdm17240.contentdm.oclc.org/digital/bl/dmwebservices/index.php?q=dmQuery/' +
    collection +
    '/' +
    searchString +
    '/' +
    sortBy +
    '/' +
    maxRecs +
    '/' +
    start +
    '/1/0/0/0/0/0/' +
    format;
  return queryUrl;
}
