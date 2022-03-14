/////////////////////////////////////
/////////////////////////////////////
/////////////////////////////////////

const formaciones = new Object();

formaciones["IntensiveMicroblading"] = (

    {
        title: 'Intensive Microblading',
        linkVerMas: '/formaciones/IntensiveMicroblading',
        linkComprar: 'https://api.whatsapp.com/send?phone=34662296124&text=Hola!%20Que%20tal?',
    }
    
);

formaciones["AdvancedMicroblading"] = (

    {
        title: 'Advanced Microblading',
        linkVerMas: '/formaciones/AdvancedMicroblading',
        linkComprar: 'https://api.whatsapp.com/send?phone=34662296124&text=Hola!%20Que%20tal?',
    }
    
);

formaciones["LashLiftingPro"] = (

    {
        title: 'Lash Lifting Pro',
        linkVerMas: '/formaciones/LashLiftingPro',
        linkComprar: 'https://api.whatsapp.com/send?phone=34662296124&text=Hola!%20Que%20tal?',
    }
    
);

formaciones["DuoMasterClass"] = (

    {
        title: 'Duo Master Class',
        linkVerMas: '/formaciones/DuoMasterClass',
        linkComprar: 'https://api.whatsapp.com/send?phone=34662296124&text=Hola!%20Que%20tal?',
    }
    
);

formaciones["MasterClass"] = (

    {
        title: 'Master Class',
        linkVerMas: '/formaciones/MasterClass',
        linkComprar: 'https://api.whatsapp.com/send?phone=34662296124&text=Hola!%20Que%20tal?',
    }
    
);

/////////////////////////////////////
/////////////////////////////////////
/////////////////////////////////////

export const content = new Object();

content["FormacionModule"] = [

    {
        title: formaciones["IntensiveMicroblading"].title,
        linkVerMas: formaciones["IntensiveMicroblading"].linkVerMas,
        linkComprar: formaciones["IntensiveMicroblading"].linkComprar,

        sticker: require("../../images/stickers/formaciones/1x/Asset 3.png"),
        image: require("../../images/pictures/procedimientos/MicroCejas/new001/20201002_145329.jpg"),
        
        description: 

        'Dirigido a cualquier persona que quiera aprender la técnica de depilación con hilo y aplicación de Tinte y Henna. No es necesaria experiencia previa.',

        availability: 'Consultar para información de plazas',

    },

    {
        title: formaciones["AdvancedMicroblading"].title,
        linkVerMas: formaciones["AdvancedMicroblading"].linkVerMas,
        linkComprar: formaciones["AdvancedMicroblading"].linkComprar,

        sticker: require("../../images/stickers/formaciones/1x/Asset 5.png"),
        image: require("../../images/pictures/procedimientos/MicroLabios/new001/20191101_180718.jpg"),
        
        description: 

        'Dirigido a cualquier persona que quiera aprender la técnica de depilación con hilo y aplicación de Tinte y Henna. No es necesaria experiencia previa.',

        availability: 'Consultar para información de plazas',
    },

    {
        title: formaciones["LashLiftingPro"].title,
        linkVerMas: formaciones["LashLiftingPro"].linkVerMas,
        linkComprar: formaciones["LashLiftingPro"].linkComprar,

        sticker: require("../../images/stickers/formaciones/1x/Asset 2.png"),
        image: require("../../images/pictures/procedimientos/LashLifting/new001/20190909_153023.jpg"),
        
        description: 
        
        'Dirigido a profesionales que quieran oferecer algo totalmente diferente y sofisticado a sus clientas. El tratamiento del lash lifting proporciona nutrición, proyección y volúmen de las pestañas. No es necesaria experiencia previa.',

        availability: 'Consultar para información de plazas',
    },

    {
        title: formaciones["DuoMasterClass"].title,
        linkVerMas: formaciones["DuoMasterClass"].linkVerMas,
        linkComprar: formaciones["DuoMasterClass"].linkComprar,

        sticker: require("../../images/stickers/formaciones/1x/Asset 2.png"),
        image: require("../../images/pictures/procedimientos/LashLifting/new001/20190909_153023.jpg"),
        
        description: 
        
        'Dirigido a profesionales que quieran oferecer algo totalmente diferente y sofisticado a sus clientas. El tratamiento del lash lifting proporciona nutrición, proyección y volúmen de las pestañas. No es necesaria experiencia previa.',

        availability: 'Consultar para información de plazas',
    },

    {
        title: formaciones["MasterClass"].title,
        linkVerMas: formaciones["MasterClass"].linkVerMas,
        linkComprar: formaciones["MasterClass"].linkComprar,

        sticker: require("../../images/stickers/formaciones/1x/Asset 2.png"),
        image: require("../../images/pictures/procedimientos/LashLifting/new001/20190909_153023.jpg"),
        
        description: 
        
        'Dirigido a profesionales que quieran oferecer algo totalmente diferente y sofisticado a sus clientas. El tratamiento del lash lifting proporciona nutrición, proyección y volúmen de las pestañas. No es necesaria experiencia previa.',

        availability: 'Consultar para información de plazas',
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
            {fecha: new Date(2022, 2, 7)},
            {fecha: new Date(2022, 2, 8)},
            {fecha: new Date(2022, 2, 9)},
            {fecha: new Date(2022, 2,10)},
            {fecha: new Date(2022, 2,11)},
        ],
        
        hora      : '08:00 - 17:00',
        maestro   : "Tamara Freitas",
        ubicacion : "Valencia, España",
    },

    { // ITEM
        curso     : formaciones["LashLiftingPro"].title,
        linkVerMas : formaciones["LashLiftingPro"].linkVerMas,
        
        fechas: [
            {fecha: new Date(2022, 2,14)},
            {fecha: new Date(2022, 2,15)},
            {fecha: new Date(2022, 2,16)},
            {fecha: new Date(2022, 2,17)},
            {fecha: new Date(2022, 2,18)},
        ],
        
        hora      : '08:00 - 17:00',
        maestro   : "Tamara Freitas",
        ubicacion : "Valencia, España",
    },

    { // ITEM
        curso     : formaciones["AdvancedMicroblading"].title,
        linkVerMas : formaciones["AdvancedMicroblading"].linkVerMas,
        
        fechas: [
            {fecha: new Date(2022, 2,21)},
            {fecha: new Date(2022, 2,22)},
            {fecha: new Date(2022, 2,23)},
        ],
        
        hora      : '08:00 - 17:00',
        maestro   : "Tamara Freitas",
        ubicacion : "Valencia, España",
    },

    { // ITEM
        curso     : formaciones["IntensiveMicroblading"].title,
        linkVerMas : formaciones["IntensiveMicroblading"].linkVerMas,
        
        fechas: [
            {fecha: new Date(2022, 3, 7)},
            {fecha: new Date(2022, 3, 8)},
            {fecha: new Date(2022, 3, 9)},
            {fecha: new Date(2022, 3,10)},
            {fecha: new Date(2022, 3,11)},
        ],
        
        hora      : '08:00 - 17:00',
        maestro   : "Tamara Freitas",
        ubicacion : "Valencia, España",
    },

    { // ITEM 
        curso     : formaciones["DuoMasterClass"].title,
        linkVerMas : formaciones["DuoMasterClass"].linkVerMas,
        
        fechas: [
            {fecha: new Date(2022, 3,14)},
            {fecha: new Date(2022, 3,15)},
            {fecha: new Date(2022, 3,16)},
            {fecha: new Date(2022, 3,17)},
        ],
        
        hora      : '08:00 - 17:00',
        maestro   : "Tamara Freitas",
        ubicacion : "Valencia, España",
    },

    { // ITEM
        curso     : formaciones["MasterClass"].title,
        linkVerMas : formaciones["MasterClass"].linkVerMas,
        
        fechas: [
            {fecha: new Date(2022, 3,21)},
        ],
        
        hora      : '08:00 - 17:00',
        maestro   : "Tamara Freitas",
        ubicacion : "Valencia, España",
    },
        
];

/////////////////////////////////////
/////////////////////////////////////
/////////////////////////////////////
