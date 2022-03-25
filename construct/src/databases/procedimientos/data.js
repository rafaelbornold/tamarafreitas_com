/////////////////////////////////////
/////////////////////////////////////
/////////////////////////////////////

export const procedimientos = new Object();

procedimientos['DepilacionConHilo'] = {
  title: 'Depilación con hilo',

  subtitle: 'LOREN IPSUM',
  summary: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.',

  linkVerMas: '/procedimientos/MasterClass',
  linkComprar: 'https://api.whatsapp.com/send?phone=34662296124&text=Hola!%20Que%20tal?',
};

procedimientos['DisenoDeCejas'] = {
  title: 'Diseño de Cejas',

  subtitle: 'LOREN IPSUM',
  summary: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.',

  linkVerMas: '/procedimientos/MasterClass',
  linkComprar: 'https://api.whatsapp.com/send?phone=34662296124&text=Hola!%20Que%20tal?',
};

procedimientos['Pestanas'] = {
  title: 'Pestañas',

  subtitle: 'LOREN IPSUM',
  summary: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.',

  linkVerMas: '/procedimientos/MasterClass',
  linkComprar: 'https://api.whatsapp.com/send?phone=34662296124&text=Hola!%20Que%20tal?',
};

procedimientos['Micropigmentacion'] = {
  title: 'Micropigmentacion Y Microblading',

  subtitle: 'LOREN IPSUM',
  summary: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.',

  linkVerMas: '/procedimientos/MasterClass',
  linkComprar: 'https://api.whatsapp.com/send?phone=34662296124&text=Hola!%20Que%20tal?',
};

procedimientos['BrowLamination'] = {
  title: 'Laminado de Cejas',

  subtitle: 'LOREN IPSUM',
  summary: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.',

  linkVerMas: '/procedimientos/MasterClass',
  linkComprar: 'https://api.whatsapp.com/send?phone=34662296124&text=Hola!%20Que%20tal?',
};

/////////////////////////////////////
/////////////////////////////////////
/////////////////////////////////////

export const content = new Object();

content['Carousel'] = [
  {
    title: procedimientos['DepilacionConHilo'].title,

    textSummary: `Lorem ipsum`,
    textContent: `Excepteur sint occaecat cupidatat non proident, sunt deserunt mollit anim id.`,

    mediaType: 'link',
    background: require('../../images/pictures/procedimientos/DepilacionConHilo/new001/_MG_4835.jpg'),
    viewSrc: '/procedimientos/DepilacionConHilo',
  },

  {
    title: procedimientos['DisenoDeCejas'].title,
    textSummary: `Lorem ipsum`,
    textContent: `Excepteur sint occaecat cupidatat non proident, sunt deserunt mollit anim id.`,
    mediaType: 'link',
    background: require('../../images/pictures/procedimientos/Visagismo/new001/AntesDepois/5C36E196-B6FC-4088-BE17-28D883400DED.JPEG'),
    viewSrc: '/procedimientos/DisenoDeCejas',
  },

  {
    title: procedimientos['Pestanas'].title,
    textSummary: `Lorem ipsum`,
    textContent: `Excepteur sint occaecat cupidatat non proident, sunt deserunt mollit anim id.`,
    background: require('../../images/pictures/procedimientos/LashLifting/new001/AntesDepois/PicsArt_02-26-06.33.00.jpg'),
    mediaType: 'link',
    viewSrc: '/procedimientos/Pestanas',
  },

  {
    title: procedimientos['Micropigmentacion'].title,
    textSummary: `Lorem ipsum`,
    textContent: `Excepteur sint occaecat cupidatat non proident, sunt deserunt mollit anim id.`,
    background: require('../../images/pictures/procedimientos/MicroCejas/new001/AntesDepois/296DFE39-1982-4C42-A02C-BEE61D521674.jpeg'),
    mediaType: 'link',
    viewSrc: '/procedimientos/Micropigmentacion',
  },

  {
    title: procedimientos['BrowLamination'].title,
    textSummary: `Lorem ipsum`,
    textContent: `Excepteur sint occaecat cupidatat non proident, sunt deserunt mollit anim id.`,
    background: require('../../images/pictures/procedimientos/MicroLabios/new001/AntesDepois/PicsArt_06-25-04.47.33.jpg'),
    mediaType: 'link',
    viewSrc: '/procedimientos/BrowLamination',
  },
];
