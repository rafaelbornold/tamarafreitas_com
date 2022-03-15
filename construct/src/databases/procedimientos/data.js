/////////////////////////////////////
/////////////////////////////////////
/////////////////////////////////////

export const procedimientos = new Object();

procedimientos["DepilacionConHilo"] = (

    {
        title: 'Depilación con hilo',

        subtitle: 'LOREN IPSUM',
        summary: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.',

        linkVerMas: '/procedimientos/MasterClass',
        linkComprar: 'https://api.whatsapp.com/send?phone=34662296124&text=Hola!%20Que%20tal?',

    }
    
);

procedimientos["DisenoDeCejas"] = (

  {
      title: 'Diseño de Cejas',

      subtitle: 'LOREN IPSUM',
      summary: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.',

      linkVerMas: '/procedimientos/MasterClass',
      linkComprar: 'https://api.whatsapp.com/send?phone=34662296124&text=Hola!%20Que%20tal?',

  }
  
);

procedimientos["Pestanas"] = (

  {
      title: 'Pestañas',

      subtitle: 'LOREN IPSUM',
      summary: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.',

      linkVerMas: '/procedimientos/MasterClass',
      linkComprar: 'https://api.whatsapp.com/send?phone=34662296124&text=Hola!%20Que%20tal?',

  }
  
);

procedimientos["Micropigmentacion"] = (

  {
      title: 'Micropigmentacion',

      subtitle: 'LOREN IPSUM',
      summary: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.',

      linkVerMas: '/procedimientos/MasterClass',
      linkComprar: 'https://api.whatsapp.com/send?phone=34662296124&text=Hola!%20Que%20tal?',

  }
  
);

procedimientos["Microblading"] = (

  {
      title: 'Microblading',

      subtitle: 'LOREN IPSUM',
      summary: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.',

      linkVerMas: '/procedimientos/MasterClass',
      linkComprar: 'https://api.whatsapp.com/send?phone=34662296124&text=Hola!%20Que%20tal?',

  }
  
);

/////////////////////////////////////
/////////////////////////////////////
/////////////////////////////////////



export const content = new Object();

content["Carousel"] = [
  
  {
    title: procedimientos["DepilacionConHilo"].title,

    textSummary: `Lorem ipsum`,
    textContent: `Lorem ipsum dolor sit amet`,

    mediaType: "video",
    background: require('../../images/bgpadrao.png'),
    viewSrc: require('../../videos/Tamara_videoInicial_01_original_sierra.mp4'),
  },

  {
    title: procedimientos["DisenoDeCejas"].title,
    textSummary: `Lorem ipsum`,
    textContent: `Lorem ipsum dolor sit amet`,
    mediaType: "video",
    background: require('../../images/bgpadrao.png'),
    viewSrc: require('../../videos/Tamara_videoInicial_01_original_sierra.mp4'),
  },

  {
    title: procedimientos["Pestanas"].title,
    textSummary: `Lorem ipsum`,
    textContent: `Lorem ipsum dolor sit amet`,
    background: require('../../images/bgpadrao.png'),
    mediaType: "video",
    viewSrc: require('../../videos/Tamara_videoInicial_01_original_sierra.mp4'),
  },

  {
    title: procedimientos["Micropigmentacion"].title,
    textSummary: `Lorem ipsum`,
    textContent: `Lorem ipsum dolor sit amet`,
    background: require('../../images/bgpadrao.png'),
    mediaType: "video",
    viewSrc: require('../../videos/Tamara_videoInicial_01_original_sierra.mp4'),
  },

  {
    title: procedimientos["Microblading"].title,
    textSummary: `Lorem ipsum`,
    textContent: `Lorem ipsum dolor sit amet`,
    background: require('../../images/bgpadrao.png'),
    mediaType: "video",
    viewSrc: require('../../videos/Tamara_videoInicial_01_original_sierra.mp4'),
  },

];

