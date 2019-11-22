import { isArray } from "util";

const startsWith = (a, b) => a.startsWith(b);
const checkEquals = (a, b) => {
    console.log(a,b)
    return a === b};
const checkIncludes = (a, b) => a.toLowerCase().includes(b.toLowerCase());

const checkEqualsOrIncludes = (a, b) => {
  var result;
  if (!isNaN(b)) {
    if (!isNaN(a)) {
      result = checkEquals(b, a);
    } else {
      result = a.includes(b);
    }
  } else {
    if (a.toLowerCase().includes(b.toLowerCase())) {
      result = a.toLowerCase().includes(b.toLowerCase());
    }
  }
  return result;
};

const checkForArray = (a, b) => {
  if (isArray(b)) {
      if( typeof a === "boolean" ){
          return b.includes(a)
      }
    return b.includes(a.toLowerCase());
  }
};

//checks if a is in range od b[0,1]
const checksInRange = (a, b) => {
  for (let i = b[0]; i <= b[1]; i++) {
    if (a === i) {
      return true;
    }
  }
  return false;
};

// checks if two num are from the same parity (even === even) or (odd === odd)
const checksSameParity = (a, b) => {
  return a % 2 === b % 2;
};

const itemPassesFilter = (
  item,
  filterValue,
  checkerFunction = checkForArray
) => {
  return checkerFunction(item, filterValue);
};

const doesFilterApply = (item, filters, filterRules) =>
  Object.keys(filters).every(filterKey => {
    return itemPassesFilter(
      item[filterKey],
      filters[filterKey],
      filterRules[filterKey]
    );
  });

export const filterDataWithFilters = (data, filters = {}, filterRules) => {
  return data.filter(dataObject =>
    doesFilterApply(dataObject, filters, filterRules)
  );
};

export const filteringOptions = {
  checkEquals: checkEquals,
  checkIncludes: checkIncludes,
  checkEqualsOrIncludes: checkEqualsOrIncludes,
  startsWith: startsWith,
  checkForArray: checkForArray,
  checksInRange: checksInRange,
  checksSameParity: checksSameParity
};

export const empty = oldFilters => {
  let newFilters = { ...oldFilters };
  Object.keys(newFilters).forEach(
    key =>
      (newFilters[key] == null ||
        newFilters[key] === "" ||
        (isArray(newFilters[key]) && newFilters[key].length === 0)) &&
      delete newFilters[key]
  );
  return newFilters;
};
