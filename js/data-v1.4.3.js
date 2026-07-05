export const DEFAULT_DATA = {
  version: 1.4,
  _meta: { territoryResetRevision: 1 },
  workspace: {
    name: "SixNine",
    server: "Dovux Life RP",
    color: "#e22445",
    logo: "F",
    logoImage: "",
    description: "Centro de operaciones de la organización. Coordinación territorial, logística y agenda en un solo lugar.",
    status: "Activa"
  },
  rules: {
    graffitiDurationHours: 120,
    requiredGraffitis: 3,
    requiredGraffitisUnowned: 2,
    graffitisPerTurn: 4,
    turns: ["10:00", "22:00"],
    warningHours: 24,
    dangerHours: 12
  },
  organizations: [
    {id:"sixnine",name:"SixNine",color:"#ff5d67",relation:"own"},
    {id:"66th",name:"66TH",color:"#63b7e8",relation:"neutral"},
    {id:"demons",name:"Demons",color:"#81302f",relation:"neutral"},
    {id:"heat",name:"Heat Gang",color:"#82553d",relation:"hostile"},
    {id:"ghost",name:"Ghost",color:"#1b1b1d",relation:"neutral"},
    {id:"blacklist",name:"Blacklist",color:"#e53935",relation:"neutral"},
    {id:"yakuza",name:"Young Yakuza",color:"#9178d5",relation:"hostile"},
    {id:"south",name:"South Street",color:"#e8c148",relation:"neutral"},
    {id:"bastards",name:"Bastards",color:"#72ee35",relation:"neutral"},
    {id:"none",name:"Sin definir",color:"#788296",relation:"unknown"}
  ],
  maps: [
    {id:"city",name:"Los Santos",src:"./assets/map-city-reset.png",width:992,height:838},
    {id:"north",name:"Norte / Blaine County",src:"./assets/map-north-reset.png",width:1557,height:989}
  ],
  territories: [
    {id:"davis-norte",name:"Davis Norte",mapId:"city",x:61,y:58,ownerId:"none",priority:"conquer",reputation:0,graffitis:[],notes:"Disponible tras el reinicio territorial. Se captura con 2 graffitis."},
    {id:"terminal",name:"Terminal",mapId:"city",x:83,y:97,ownerId:"none",priority:"conquer",reputation:0,graffitis:[],notes:"Disponible tras el reinicio territorial. Se captura con 2 graffitis."},
    {id:"merryweather",name:"Merryweather",mapId:"city",x:70,y:94,ownerId:"none",priority:"conquer",reputation:0,graffitis:[],notes:"Disponible tras el reinicio territorial. Se captura con 2 graffitis."},
    {id:"sandy-sur",name:"Sandy Sur",mapId:"north",x:82,y:77,ownerId:"none",priority:"conquer",reputation:0,graffitis:[],notes:"Disponible tras el reinicio territorial. Se captura con 2 graffitis."},
    {id:"forum-drive",name:"Forum Drive",mapId:"city",x:56,y:54,ownerId:"none",priority:"conquer",reputation:0,graffitis:[],notes:"Disponible tras el reinicio territorial. Se captura con 2 graffitis."},
    {id:"la-mesa-sur",name:"La Mesa Sur",mapId:"city",x:78,y:57,ownerId:"none",priority:"conquer",reputation:0,graffitis:[],notes:"Disponible tras el reinicio territorial. Se captura con 2 graffitis."},
    {id:"burrito",name:"Burrito",mapId:"city",x:89,y:57,ownerId:"none",priority:"conquer",reputation:0,graffitis:[],notes:"Disponible tras el reinicio territorial. Se captura con 2 graffitis."},
    {id:"cypress",name:"Cypress",mapId:"city",x:82,y:77,ownerId:"none",priority:"conquer",reputation:0,graffitis:[],notes:"Disponible tras el reinicio territorial. Se captura con 2 graffitis."},
    {id:"elysian",name:"Elysian",mapId:"city",x:49,y:87,ownerId:"none",priority:"conquer",reputation:0,graffitis:[],notes:"Disponible tras el reinicio territorial. Se captura con 2 graffitis."}
  ],

  criminalActs: [
    {id:"bobcat",name:"BOBCAT",category:"medium",location:"Cypress",minPeople:4,maxPeople:8,cooldownHours:12,oncePerDay:true,costDKZ:null,lastCompletedAt:null,history:[]},
    {id:"flecca-paleto",name:"FLECCA PALETO",category:"medium",location:"Paleto Bay",minPeople:4,maxPeople:8,cooldownHours:72,oncePerDay:false,costDKZ:null,lastCompletedAt:null,history:[]},
    {id:"flecca-roxwood",name:"FLECCA ROXWOOD",category:"medium",location:"Roxwood",minPeople:4,maxPeople:8,cooldownHours:12,oncePerDay:true,costDKZ:null,lastCompletedAt:null,history:[]},
    {id:"flecca-ciudad",name:"FLECCA CIUDAD",category:"medium",location:"Varios puntos de la ciudad",minPeople:4,maxPeople:8,cooldownHours:12,oncePerDay:true,costDKZ:null,lastCompletedAt:null,history:[]},
    {id:"petrolera",name:"PETROLERA",category:"large",location:"Petrolera de Roxwood",minPeople:null,maxPeople:null,cooldownHours:72,oncePerDay:false,costDKZ:null,lastCompletedAt:null,history:[]},
    {id:"banco-central",name:"BANCO CENTRAL",category:"large",location:"Vinewood",minPeople:8,maxPeople:12,cooldownHours:336,oncePerDay:false,costDKZ:null,lastCompletedAt:null,history:[]},
    {id:"joyeria",name:"JOYERÍA",category:"large",location:"Morningwood",minPeople:8,maxPeople:12,cooldownHours:336,oncePerDay:false,costDKZ:null,lastCompletedAt:null,history:[]},
    {id:"yate",name:"YATE",category:"large",location:"Playa de Del Perro",minPeople:8,maxPeople:12,cooldownHours:336,oncePerDay:false,costDKZ:null,lastCompletedAt:null,history:[]},
    {id:"casino",name:"CASINO",category:"large",location:"Mirror Park",minPeople:8,maxPeople:12,cooldownHours:336,oncePerDay:false,costDKZ:null,lastCompletedAt:null,history:[]},
    {id:"zagreb",name:"ZAGREB",category:"contract",location:"Encargo",minPeople:null,maxPeople:null,cooldownHours:1,oncePerDay:false,costDKZ:6,lastCompletedAt:null,history:[]},
    {id:"praga",name:"PRAGA",category:"contract",location:"Encargo",minPeople:null,maxPeople:null,cooldownHours:1,oncePerDay:false,costDKZ:20,lastCompletedAt:null,history:[]},
    {id:"bratislava",name:"BRATISLAVA",category:"contract",location:"Encargo",minPeople:null,maxPeople:null,cooldownHours:3,oncePerDay:false,costDKZ:40,lastCompletedAt:null,history:[]},
    {id:"sarajevo",name:"SARAJEVO",category:"contract",location:"Encargo",minPeople:null,maxPeople:null,cooldownHours:6,oncePerDay:false,costDKZ:200,lastCompletedAt:null,history:[]},
    {id:"skopie",name:"SKOPIE",category:"contract",location:"Encargo",minPeople:null,maxPeople:null,cooldownHours:6,oncePerDay:false,costDKZ:250,lastCompletedAt:null,history:[]},
    {id:"bucarest",name:"BUCAREST",category:"contract",location:"Encargo",minPeople:null,maxPeople:null,cooldownHours:8,oncePerDay:false,costDKZ:300,lastCompletedAt:null,history:[]}
  ],

  business: {
    currency: "USD",
    metaUnit: "g",
    weaponCatalog: [],
    weaponSales: [],
    metaPurchases: []
  },
  properties: [],
  events: [],
  members: [],
  activity: []
};
