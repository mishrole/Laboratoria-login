'use strict';

const Header = () => {
  const header = $('<header></header>');
  const img = $('<img src="assets/img/logo.png"/>');

  header.append(img);
  return header;
}