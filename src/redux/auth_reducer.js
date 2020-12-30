import { auth } from '../api/api';

const SET_REGDATA = 'AUTH/SET_REGDATA';
const SET_REG_ERROR = 'AUTH/SET_REG_ERROR';
const SET_REG_DONE = 'AUTH/SET_REG_DONE';
const SET_AUTHDATA = 'AUTH/SET_AUTHDATA';

let initialState = {
  reg: {},
  regDone: 1,
  error: '',
  auth: {},
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    // case SET_EXAMPLE: {
    //   return { ...state, example: action.example}
    //   // return { ...state, example: [...state.example, action.example]}
    // }

    case SET_REG_ERROR: {
      return { ...state, error: action.error };
    }
    case SET_REG_DONE: {
      return { ...state, regDone: action.regDone };
    }
    case SET_REGDATA: {
      return { ...state, reg: action.reg };
    }
    case SET_AUTHDATA: {
      return { ...state, auth: action.auth };
    }
    default:
      return state;
  }
};
export const setRegError = (error) => {
  debugger;
  return {
    type: SET_REG_ERROR,
    error,
  };
};
export const setRegDone = (regDone) => {
  return {
    type: SET_REG_DONE,
    regDone,
  };
};
export const setFile = (file) => async (dispath) => {
  let response = await auth.setFile(file);
  console.log(response);
};
export const setRegData = (data) => async (dispath) => {
  let response = await auth.sendReg(data);
  console.log(response.data);
  if (response.data.regSuccess) {
    dispath(setRegDone(response.data.regSuccess));
    const dataAuth = {
      telmail: data.tel ? data.tel : data.mail,
      pass: data.pass,
    };
    dispath(setAuthData(dataAuth));
  } else {
    dispath(setRegError(response.data.errorMessage));
  }

  console.log(response);
};
export const setAuthData = (data) => async (dispath) => {
  let response = await auth.sendAuth(data);
  var a = eval('({obj:[' + response.data + ']})');
  console.log(a);
  dispath(setRegDone(a.obj[0].authOk));
  // const parce = {
  //   authOk: 1,
  //   nik: 'RU111608587989',
  //   sessid: 'fuomt8j38g8jtmdncjo5polohg',
  //   test: 'ok',
  // };
  console.log('res', response);
  // console.log('resJs', jsonResponse);
};

export default authReducer;
