export function withDomain(uri) {
  return `https://myblog-strapi.herokuapp.com${uri}`;
}


// convert createdAt: "2022-01-17T06:36:03.773Z" to "17 January 2022"
export function convertDate(date) {
  const newDate = new Date(date);
  const day = newDate.getDate();
  const month = newDate.getMonth();
  const year = newDate.getFullYear();
  return `${day} ${month} ${year}`;
}