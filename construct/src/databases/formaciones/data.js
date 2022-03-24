/////////////////////////////////////
/////////////////////////////////////
/////////////////////////////////////

export const formaciones = new Object();

formaciones["IntensiveMicroblading"] = (

    {
        title: 'Intensive Microblading',

        sticker: require("../../images/stickers/formaciones/1x/Asset 3.png"),

        subtitle: 'LOREN IPSUM',
        summary: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.',

        fullDescription: 
    
        'Intensive Microblading Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.',
    
        hora      : '08:00 - 17:00',
        maestro   : "Tamara Freitas",
        ubicacion : "Valencia, España",
        plazas    : 'Consultar Disponibilidad',

        linkVerMas: '/formaciones/IntensiveMicroblading',
        linkComprar: 'https://api.whatsapp.com/send?phone=34662296124&text=Hola!%20Que%20tal?',
  
    }
    
);

formaciones["AdvancedMicroblading"] = (

    {
        title: 'Advanced Microblading',
        
        sticker: require("../../images/stickers/formaciones/1x/Asset 3.png"),

        subtitle: 'LOREN IPSUM',
        summary: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.',

        fullDescription: 
    
        'Intensive Microblading Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.',
    
        hora      : '08:00 - 17:00',
        maestro   : "Tamara Freitas",
        ubicacion : "Valencia, España",
        plazas    : 'Consultar Disponibilidad',

        linkVerMas: '/formaciones/AdvancedMicroblading',
        linkComprar: 'https://api.whatsapp.com/send?phone=34662296124&text=Hola!%20Que%20tal?',

    }
    
);

formaciones["LashLiftingPro"] = (

    {
        title: 'Lash Lifting Pro',

        sticker: require("../../images/stickers/formaciones/1x/Asset 2.png"),

        subtitle: 'LOREN IPSUM',
        summary: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.',

        fullDescription: 
    
        'Intensive Microblading Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.',
    
        hora      : '08:00 - 17:00',
        maestro   : "Tamara Freitas",
        ubicacion : "Valencia, España",
        plazas    : 'Consultar Disponibilidad',

        linkVerMas: '/formaciones/LashLiftingPro',
        linkComprar: 'https://api.whatsapp.com/send?phone=34662296124&text=Hola!%20Que%20tal?',

    }
    
);

formaciones["DuoMasterClass"] = (

    {
        title: 'Duo Master Class',

        sticker: require("../../images/stickers/formaciones/1x/Asset 5.png"),

        subtitle: 'LOREN IPSUM',
        summary: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.',

        fullDescription: 
    
        'Intensive Microblading Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.',
    
        hora      : '08:00 - 17:00',
        maestro   : "Tamara Freitas",
        ubicacion : "Valencia, España",
        plazas    : 'Consultar Disponibilidad',

        linkVerMas: '/formaciones/DuoMasterClass',
        linkComprar: 'https://api.whatsapp.com/send?phone=34662296124&text=Hola!%20Que%20tal?',

    }
    
);

formaciones["MasterClass"] = (

    {
        title: 'Master Class',

        sticker: require("../../images/stickers/formaciones/1x/Asset 1.png"),

        subtitle: 'LOREN IPSUM',
        summary: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.',

        fullDescription: 
    
        'Intensive Microblading Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.',
    
        hora      : '08:00 - 17:00',
        maestro   : "Tamara Freitas",
        ubicacion : "Valencia, España",
        plazas    : 'Consultar Disponibilidad',

        linkVerMas: '/formaciones/MasterClass',
        linkComprar: 'https://api.whatsapp.com/send?phone=34662296124&text=Hola!%20Que%20tal?',

    }
    
);

/////////////////////////////////////
/////////////////////////////////////
/////////////////////////////////////

export const content = new Object();

content["Carousel"] = [

    {
        title: formaciones["IntensiveMicroblading"].title,

        textSummary: `Lorem ipsum`,
        textContent: `Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.`,

        mediaType: "link",
        background: require('../../images/pictures/procedimientos/MicroCejas/new001/AntesDepois/296DFE39-1982-4C42-A02C-BEE61D521674.jpeg'),
        viewSrc: '/formaciones/IntensiveMicroblading',
  
    },
 
    {
        title: formaciones["AdvancedMicroblading"].title,

        textSummary: `Lorem ipsum`,
        textContent: `Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.`,

        mediaType: "link",
        background: require('../../images/pictures/procedimientos/MicroCejas/new001/AntesDepois/6D18F764-18ED-4E7F-B9EF-7203E7ED1D04.jpeg'),
        viewSrc: '/formaciones/AdvancedMicroblading',
  
    },
    
    {
        title: formaciones["LashLiftingPro"].title,

        textSummary: `Lorem ipsum`,
        textContent: `Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.`,

        mediaType: "link",
        background: require('../../images/pictures/procedimientos/LashLifting/new001/AntesDepois/C6B9E3CB-F4C4-4CF7-8AE0-956D645C6E68.JPEG'),
        viewSrc: '/formaciones/LashLiftingPro',
  
    },
    
    {
        title: formaciones["DuoMasterClass"].title,

        textSummary: `Lorem ipsum`,
        textContent: `Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.`,

        mediaType: "link",
        background: require('../../images/pictures/procedimientos/MicroLabios/new001/AntesDepois/PicsArt_06-25-04.42.36.jpg'),
        viewSrc: '/formaciones/DuoMasterClass',
  
    },
    
    {
        title: formaciones["MasterClass"].title,

        textSummary: `Lorem ipsum`,
        textContent: `Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.`,

        mediaType: "link",
        background: require('../../images/pictures/procedimientos/DepilacionConHilo/new001/_MG_4835.jpg'),
        viewSrc: '/formaciones/MasterClass',
  
    },
       
];

/////////////////////////////////////
/////////////////////////////////////
/////////////////////////////////////


content["FormacionModule"] = [

    {
        title: formaciones["IntensiveMicroblading"].title,
        linkVerMas: formaciones["IntensiveMicroblading"].linkVerMas,
        linkComprar: formaciones["IntensiveMicroblading"].linkComprar,

        sticker: formaciones["IntensiveMicroblading"].sticker,
        image: require("../../images/pictures/procedimientos/MicroCejas/new001/20201002_145329.jpg"),
        
        description: 

        'Dirigido a cualquier persona que quiera aprender la técnica de depilación con hilo y aplicación de Tinte y Henna. No es necesaria experiencia previa.',

        availability: 'Consultar para información de plazas',

    },

    {
        title: formaciones["AdvancedMicroblading"].title,
        linkVerMas: formaciones["AdvancedMicroblading"].linkVerMas,
        linkComprar: formaciones["AdvancedMicroblading"].linkComprar,

        sticker: formaciones["AdvancedMicroblading"].sticker,
        image: require("../../images/pictures/procedimientos/MicroCejas/new001/F58B4F2B-A66A-428C-92FC-5FB919D39911.jpeg"),
        
        description: 

        'Dirigido a cualquier persona que quiera aprender la técnica de depilación con hilo y aplicación de Tinte y Henna. No es necesaria experiencia previa.',

        availability: 'Consultar para información de plazas',
        plazas: 'Consultar Disponibilidad',

    },

    {
        title: formaciones["LashLiftingPro"].title,
        linkVerMas: formaciones["LashLiftingPro"].linkVerMas,
        linkComprar: formaciones["LashLiftingPro"].linkComprar,

        sticker: formaciones["LashLiftingPro"].sticker,
        image: require("../../images/pictures/procedimientos/LashLifting/new001/20200713_144046.jpg"),
        
        description: 
        
        'Dirigido a profesionales que quieran oferecer algo totalmente diferente y sofisticado a sus clientas. El tratamiento del lash lifting proporciona nutrición, proyección y volúmen de las pestañas. No es necesaria experiencia previa.',

        availability: 'Consultar para información de plazas',
        plazas: 'Consultar Disponibilidad',

    },

    {
        title: formaciones["DuoMasterClass"].title,
        linkVerMas: formaciones["DuoMasterClass"].linkVerMas,
        linkComprar: formaciones["DuoMasterClass"].linkComprar,

        sticker: formaciones["DuoMasterClass"].sticker,
        
        image: require("../../images/pictures/procedimientos/MicroLabios/new001/20191101_180718.jpg"),
        
        description: 
        
        'Dirigido a profesionales que quieran oferecer algo totalmente diferente y sofisticado a sus clientas. El tratamiento del lash lifting proporciona nutrición, proyección y volúmen de las pestañas. No es necesaria experiencia previa.',

        availability: 'Consultar para información de plazas',
        plazas: 'Consultar Disponibilidad',

    },

    {
        title: formaciones["MasterClass"].title,
        linkVerMas: formaciones["MasterClass"].linkVerMas,
        linkComprar: formaciones["MasterClass"].linkComprar,

        sticker: formaciones["MasterClass"].sticker,
        image: require("../../images/pictures/procedimientos/DepilacionConHilo/new001/_MG_4835.jpg"),
        
        description: 
        
        'Dirigido a profesionales que quieran oferecer algo totalmente diferente y sofisticado a sus clientas. El tratamiento del lash lifting proporciona nutrición, proyección y volúmen de las pestañas. No es necesaria experiencia previa.',

        availability: 'Consultar para información de plazas',
        plazas: 'Consultar Disponibilidad',

    },
    
];

/////////////////////////////////////
/////////////////////////////////////
/////////////////////////////////////

content["ProximosCursos"] = [

    { // ITEM
        curso     : formaciones["IntensiveMicroblading"].title,
        linkVerMas : formaciones["IntensiveMicroblading"].linkVerMas,
        
        fechas: [
            {fecha: new Date("2022/02/07")},
            {fecha: new Date("2022/02/08")},
            {fecha: new Date("2022/02/09")},
            {fecha: new Date("2022/02/10")},
            {fecha: new Date("2022/02/11")},
        ],
        
        hora      : formaciones["IntensiveMicroblading"].hora,
        maestro   : formaciones["IntensiveMicroblading"].maestro,
        ubicacion : formaciones["IntensiveMicroblading"].ubicacion,
    },

    { // ITEM
        curso     : formaciones["LashLiftingPro"].title,
        linkVerMas : formaciones["LashLiftingPro"].linkVerMas,
        
        fechas: [
            {fecha: new Date("2022/02/14")},
            {fecha: new Date("2022/02/15")},
            {fecha: new Date("2022/02/16")},
            {fecha: new Date("2022/02/17")},
            {fecha: new Date("2022/02/18")},
        ],
        
        hora      : formaciones["LashLiftingPro"].hora,
        maestro   : formaciones["LashLiftingPro"].maestro,
        ubicacion : formaciones["LashLiftingPro"].ubicacion,
    },

    { // ITEM
        curso     : formaciones["AdvancedMicroblading"].title,
        linkVerMas : formaciones["AdvancedMicroblading"].linkVerMas,
        
        fechas: [
            {fecha: new Date("2022/02/21")},
            {fecha: new Date("2022/02/22")},
            {fecha: new Date("2022/02/23")},
        ],
        
        hora      : formaciones["AdvancedMicroblading"].hora,
        maestro   : formaciones["AdvancedMicroblading"].maestro,
        ubicacion : formaciones["AdvancedMicroblading"].ubicacion,
    },

    { // ITEM
        curso     : formaciones["IntensiveMicroblading"].title,
        linkVerMas : formaciones["IntensiveMicroblading"].linkVerMas,
        
        fechas: [
            {fecha: new Date("2022/03/07")},
            {fecha: new Date("2022/03/08")},
            {fecha: new Date("2022/03/09")},
            {fecha: new Date("2022/03/10")},
            {fecha: new Date("2022/03/11")},
        ],
        
        hora      : formaciones["IntensiveMicroblading"].hora,
        maestro   : formaciones["IntensiveMicroblading"].maestro,
        ubicacion : formaciones["IntensiveMicroblading"].ubicacion,
    },

    { // ITEM 
        curso     : formaciones["DuoMasterClass"].title,
        linkVerMas : formaciones["DuoMasterClass"].linkVerMas,
        
        fechas: [
            {fecha: new Date("2022/03/14")},
            {fecha: new Date("2022/03/15")},
            {fecha: new Date("2022/03/16")},
            {fecha: new Date("2022/03/17")},
        ],
        
        hora      : formaciones["DuoMasterClass"].hora,
        maestro   : formaciones["DuoMasterClass"].maestro,
        ubicacion : formaciones["DuoMasterClass"].ubicacion,
    },

    { // ITEM
        curso     : formaciones["MasterClass"].title,
        linkVerMas : formaciones["MasterClass"].linkVerMas,
        
        fechas: [
            {fecha: new Date("2022/03/21")},
        ],
        
        hora      : formaciones["MasterClass"].hora,
        maestro   : formaciones["MasterClass"].maestro,
        ubicacion : formaciones["MasterClass"].ubicacion,
    },
        
];

/////////////////////////////////////
/////////////////////////////////////
/////////////////////////////////////
