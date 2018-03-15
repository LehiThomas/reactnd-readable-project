import Moment from "moment";

export const sortByDate = list => {
  return list.sort((a, b) => a.timestamp < b.timestamp);
};

export const sortByVotes = list => {
  return list.sort((a, b) => b.voteScore > a.voteScore);
};

export const getDate = date => {
  return Moment(date).format("MMM D, YYYY");
};
