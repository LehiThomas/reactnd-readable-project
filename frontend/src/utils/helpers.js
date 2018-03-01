export const sortByDate = list => {
  return list.sort((a, b) => a.timestamp < b.timestamp);
};

export const sortByVotes = list => {
  return list.sort((a, b) => b.voteScore > a.voteScore);
};
