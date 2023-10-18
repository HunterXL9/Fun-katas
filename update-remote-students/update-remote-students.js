// Please do not change the name of this function
function updateRemoteStudents (str) {
    let result = [];
    for (let i = 0; i < str.length; i++) {
      
      if (!str[i].hasOwnProperty('location')) {
        result.push({ ...str[i], location: 'remote' });
      } else {
        result.push(str[i]);
      }
    }
    return result;
  }
  

module.exports = updateRemoteStudents;
