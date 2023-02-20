var isSubsequence = function(s, t) {
    let count = 0;
    
    for(i = 0; i < t.length; i++) {
        if(t[i] === s[count]) count++;
    }
    
    return count == s.length;
};