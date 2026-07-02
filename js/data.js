export const DEFAULT_DATA = {
  version: 1,
  workspace: {
    name: "SixNine",
    server: "Dovux Life RP",
    color: "#e22445",
    logo: "F"
  },
  rules: {
    graffitiDurationHours: 120,
    requiredGraffitis: 3,
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
    {id:"city",name:"Los Santos",src:"./assets/map-city.png",width:1123,height:1002},
    {id:"north",name:"Norte / Blaine County",src:"./assets/map-north.png",width:926,height:985}
  ],
  territories: [
    {id:"davis-norte",name:"Davis Norte",mapId:"city",x:61,y:58,ownerId:"sixnine",priority:"maintain",reputation:101,graffitis:[],notes:"Territorio conquistado. Prioridad máxima de mantenimiento."},
    {id:"terminal",name:"Terminal",mapId:"city",x:83,y:97,ownerId:"sixnine",priority:"maintain",reputation:101,graffitis:[],notes:"Territorio conquistado."},
    {id:"merryweather",name:"Merryweather",mapId:"city",x:70,y:94,ownerId:"sixnine",priority:"maintain",reputation:101,graffitis:[],notes:"Territorio conquistado."},
    {id:"sandy-sur",name:"Sandy Sur",mapId:"north",x:82,y:77,ownerId:"sixnine",priority:"maintain",reputation:101,graffitis:[],notes:"Territorio conquistado del norte."},
    {id:"forum-drive",name:"Forum Drive",mapId:"city",x:56,y:54,ownerId:"none",priority:"conquer",reputation:50,graffitis:[],notes:"Objetivo de conquista."},
    {id:"la-mesa-sur",name:"La Mesa Sur",mapId:"city",x:78,y:57,ownerId:"none",priority:"conquer",reputation:25,graffitis:[],notes:"Objetivo de conquista."},
    {id:"burrito",name:"Burrito",mapId:"city",x:89,y:57,ownerId:"none",priority:"conquer",reputation:10,graffitis:[],notes:"Objetivo de conquista."},
    {id:"cypress",name:"Cypress",mapId:"city",x:82,y:77,ownerId:"none",priority:"conquer",reputation:25,graffitis:[],notes:"Objetivo de conquista."},
    {id:"elysian",name:"Elysian",mapId:"city",x:49,y:87,ownerId:"none",priority:"conquer",reputation:25,graffitis:[],notes:"Objetivo de conquista."}
  ],
  properties: [],
  events: [],
  activity: []
};
