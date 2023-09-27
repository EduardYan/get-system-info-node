/*
 * Utils functions to use.
*/


function getDataRequired(data) {
  // only data required
  const dataRequired = {
    arch: data.arch(),
    platform: data.platform(),
    type: data.type(),
    release: data.release(),
    version: data.version(),
    userInfo: data.userInfo(),
  };

  return dataRequired;
}


function showData(data) {
  // a good format
  toShow = `
  Architecture: ${data.arch}

  Platform: ${data.platform}

  Type: ${data.type}

  Release: ${data.release}

  Version: ${data.version}

  Current User: - Username: ${data.userInfo.username}
                - Home Directory: ${data.userInfo.homedir}
                - Current Shell: ${data.userInfo.shell}
  `

  console.log(toShow)
}


module.exports = {
  getDataRequired,
  showData,
}
