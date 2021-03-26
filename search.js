const baseUrl =
  'https://cdm17240.contentdm.oclc.org/digital/bl/dmwebservices/index.php?q=';
const format = 'json';
const collection = 'postcards';

function GetSearchUrl(searchTerms) {
  const sortBy = 'no_sort';
  const maxRecs = '';
  const start = 0;

  const searchField = 'CISOSEARCHALL';
  searchTerms = searchTerms.replace(' ', '+');
  const searchMode = 'all';
  searchOperator = 'and';
  let searchString = `${searchField}^${searchTerms}^${searchMode}^${searchOperator}`;
  queryUrl =
    baseUrl +
    'dmQuery/' +
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

function getItemMetadataUrl(pointer) {
  getMetadataUrl =
    baseUrl + 'dmGetItemInfo/' + collection + '/' + pointer + '/' + format;
  return getMetadataUrl;
}

function getItemUrl(find) {
  return baseUrl + 'dmGetItemUrl/' + collection + '/' + find + '/' + format;
}
