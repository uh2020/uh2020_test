import * as axios from 'axios';

function sessid() {
  var sessid = document.cookie;
  var arr_sessid = sessid.split('=');
  if (arr_sessid[3] === void 0) {
    return arr_sessid[1];
  } else {
    return arr_sessid[3];
  }
}

const sessId = sessid();

let instance = axios.create({
  // withCredentials: true,
  baseURL: 'http://testsset.000webhostapp.com',
  // baseURL: 'https://white-dune-027d98003.azurestaticapps.net/',
  // baseURL: 'https://uh202020.documents.azure.com:443/',

  // headers: {
  //   'API-KEY': '32c312ed-08c9-4f97-86fe-0ce7144e486e',
  // },
});

export const isAuth = {
  checkAuth(data) {
    const proc = sessid();
    return axios
      .get(`https://white-dune-027d98003.azurestaticapps.net`)
      .then((data) => {
        console.log(data);
        return data;
      });
  },
};

export const auth = {
  sendReg(data) {
    console.log(data);
    const proc = 'reg';
    data.contry = data.contry ? data.contry : 'RU';
    data.tel = data.tel ? data.tel : '';
    data.mail = data.mail ? data.mail : '';
    data.pass = data.pass ? data.pass : '';
    data.repass = data.repass ? data.repass : '';
    return instance
      .post(
        `/ajindex.php/?sessid=${sessId}&proc=${proc}&contry=${data.contry}&tel=${data.tel}&mail=${data.mail}&pass=${data.pass}&repass=${data.repass}`
      )
      .then((data) => {
        return data;
      });
  },

  sesId(data) {
    const proc = sessid();
    return instance.post(`/ajindex.php/?sessid=${proc}`).then((data) => {
      console.log(data);
      return data;
    });
  },

  sendAuth(data) {
    const proc = 'login';
    return (
      instance
        // .post(
        //   `/ajindex.php/?proc=${proc}&sessid=${sessId}&telmail=${data.telmail}&pass=${data.pass}`
        // )
        .post(
          `/ajindex.php/?proc=${proc}&sessid=${sessId}&telmail=${data.telmail}&pass=${data.pass}`
        )
        .then((data) => {
          return data;
        })
    );
  },
  setFile(file) {
    let formData = new FormData();
    formData.append('image', file);
    console.log(formData.get('image'));
    debugger;
    console.log(formData);
    return (
      instance
        // .get(`/ajindex.php/?proc=${formData}`, {
        //   headers: {
        //     'Content-Type': 'multipart/form-data',
        //   },
        // })
        .post(`/ajindex.php/`, formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        })
        .then((data) => {
          return data;
        })
    );
  },
};
