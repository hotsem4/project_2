import path from 'path';

export const mainPage = (req, res) => {
  // if localstorage에 id가 존재한다면 바로 home page로 넘어가는 기능을 구현해야한다.
  res.render('login');
};

export const getHome = (req, res) => {
  res.render('home');
};

export const getCal = (req, res) => {
  res.render('cal');
};

export const getTetris = (req, res) => {
  res.render('tetris');
};

export const getMachine = (req, res) => {
  res.render('machine');
};

export const getMap = (req, res) => {
  res.render('map');
};

export const getRegister = (req, res) => {
  res.render('register');
};
