const axios = require('axios');
const authentication = require('../utils/authentication');

const projUrlgetAlocated = `${global.URL_PROJECT}/alocated/`;
const projUrlgetProject = `${global.URL_PROJECT}/project/`;
const projUrlputAlocated = `${global.URL_PROJECT}/alocated/status`;
const subjectUrl = `${global.URL_PROJECT}/subject`;
const projUrlputProposal = `${global.URL_PROJECT}/proposal/`;
const projUrlputProposalStatus = `${global.URL_PROJECT}/alocate/`;
const projUrlgetMyProposals = `${global.URL_PROJECT}/userProposals/`;

module.exports = {
  getAlocated: (subjectId) => new Promise((resolve, reject) => {
    axios.get(projUrlgetAlocated + subjectId).then((response) => {
      resolve(response);
    }).catch((error) => {
      reject(error);
    });
  }),
  getMyProposals: async (req) => {
    const userId = authentication.getUserId(req.headers.auth);
    return axios.get(projUrlgetMyProposals + userId, { params: req.query });
  },
  getProject: (projectId) => new Promise((resolve, reject) => {
    axios.get(projUrlgetProject + projectId).then((response) => {
      resolve(response);
    }).catch((error) => {
      reject(error);
    });
  }),
  putAlocated: (body) => new Promise((resolve, reject) => {
    axios.put(projUrlputAlocated, body).then((response) => {
      resolve(response);
    }).catch((error) => {
      reject(error);
    });
  }),
  getSubjects: () => new Promise((resolve, reject) => {
    axios.get(subjectUrl).then((response) => {
      resolve(response);
    }).catch((error) => {
      reject(error);
    });
  }),
  putProposal: (projectId, body) => new Promise((resolve, reject) => {
    axios.put(projUrlputProposal + projectId, body).then((response) => {
      resolve(response);
    }).catch((error) => {
      reject(error);
    });
  }),
  putProposalStatus: (projectId, body) => new Promise((resolve, reject) => {
    axios.put(`${projUrlputProposalStatus + projectId}/status`, body).then((response) => {
      resolve(response);
    }).catch((err) => {
      reject(err);
    });
  }),
  addProject: (req) => {
    const projectUrl = `${global.URL_PROJECT}/project`;
    const reqBody = req.body;
    return new Promise((resolve, reject) => {
      reqBody.userid = authentication.getUserId(req.headers.auth);
      axios.post(projectUrl, reqBody).then((response) => {
        resolve(response);
      }).catch((error) => {
        reject(error);
      });
    });
  },
  getKeywords: () => {
    const projectUrl = `${global.URL_PROJECT}/palavra-chave`;
    return new Promise((resolve, reject) => {
      axios.get(projectUrl).then((response) => {
        resolve(response);
      }).catch((error) => {
        reject(error);
      });
    });
  },
  addFile: (req) => {
    const projectUrl = `${global.URL_PROJECT}/upload`;
    const reqBody = req.body;
    return new Promise((resolve, reject) => {
      axios.post(projectUrl, reqBody).then((response) => {
        resolve(response);
      }).catch((error) => {
        reject(error);
      });
    });
  },
  deleteProject: (projectIdParam) => {
    const projectUrl = `${global.URL_PROJECT}/project/`;
    return new Promise((resolve, reject) => {
      axios.delete(projectUrl + projectIdParam).then((response) => {
        resolve(response.data);
      }).catch((error) => {
        reject(error);
      });
    });
  },
  initial: () => new Promise((resolve, reject) => {
    axios.get(`${global.URL_PROJECT}`).then((response) => {
      resolve(response);
    }).catch((error) => {
      reject(error);
    });
  }),
  getAvailableKeywordsToSubject: () => new Promise((resolve, reject) => {
    const projectUrl = `${global.URL_PROJECT}/subject/keywords`;
    axios.get(projectUrl).then((response) => {
      resolve(response);
    }).catch((error) => {
      reject(error);
    });
  }),
  getSubareas: () => new Promise((resolve, reject) => {
    const projectUrl = `${global.URL_PROJECT}/subareas`;
    axios.get(projectUrl).then((response) => {
      resolve(response);
    }).catch((error) => {
      reject(error);
    });
  }),
  addSubject: (data) => {
    const projectUrl = `${global.URL_PROJECT}/subject`;
    const reqBody = data;
    return new Promise((resolve, reject) => {
      axios.post(projectUrl, reqBody).then((response) => {
        resolve(response);
      }).catch((error) => {
        reject(error);
      });
    });
  },
  deleteSubject: (subjectId) => {
    return new Promise((resolve, reject) => {
      axios.delete(`${global.URL_PROJECT}/subject/${subjectId}`).then((response) => {
        resolve(response.data);
      }).catch((error) => {
        reject(error);
      });
    });
  },
};
