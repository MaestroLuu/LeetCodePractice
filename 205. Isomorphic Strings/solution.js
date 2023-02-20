var isIsomorphic = function (s, t) {
  let sMap = {};
  let tMap = {};
  for (i = 0; i < s.length; i++) {
    if (!sMap[s[i]]) sMap[s[i]] = t[i];
    if (!tMap[t[i]]) tMap[t[i]] = s[i];
    // if keys don't match value, return false
    if (sMap[s[i]] !== t[i] || tMap[t[i]] !== s[i]) return false;
  }
  return true;
};