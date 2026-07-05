(() => {
'use strict';

/* data */
const DEFAULT_DATA = {
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


/* storage */
const KEY = 'factionos_workspace_v1';
const TERRITORY_RESET_REVISION = 1;
const clone = (v) => JSON.parse(JSON.stringify(v));

function loadData(){
  try{
    const raw = localStorage.getItem(KEY);
    if(!raw) return clone(DEFAULT_DATA);
    const parsed = JSON.parse(raw);
    const {data,changed}=mergeAndMigrate(parsed);
    if(changed) localStorage.setItem(KEY,JSON.stringify(data));
    return data;
  }catch(e){
    console.warn('No se pudieron cargar los datos', e);
    return clone(DEFAULT_DATA);
  }
}
function saveData(data){ localStorage.setItem(KEY, JSON.stringify(data)); }
function resetData(){ localStorage.removeItem(KEY); return clone(DEFAULT_DATA); }
function exportData(data){
  const blob = new Blob([JSON.stringify(data,null,2)],{type:'application/json'});
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = `FactionOS-${(data.workspace?.name||'workspace').replace(/\s+/g,'-')}.json`;
  a.click();
  URL.revokeObjectURL(a.href);
}
async function importData(file){
  const text = await file.text();
  const parsed = JSON.parse(text);
  return mergeAndMigrate(parsed).data;
}
function mergeAndMigrate(data){
  const base = clone(DEFAULT_DATA);
  const merged = {
    ...base,
    ...data,
    version:base.version,
    _meta:{...base._meta,...(data._meta||{})},
    workspace:{...base.workspace,...data.workspace},
    rules:{...base.rules,...data.rules,requiredGraffitisUnowned:Number(data.rules?.requiredGraffitisUnowned)||base.rules.requiredGraffitisUnowned},
    organizations:Array.isArray(data.organizations)?data.organizations:base.organizations,
    maps:base.maps,
    territories:Array.isArray(data.territories)?data.territories:base.territories,
    criminalActs:Array.isArray(data.criminalActs)?data.criminalActs:base.criminalActs,
    business:{
      ...base.business,
      ...(data.business||{}),
      weaponCatalog:Array.isArray(data.business?.weaponCatalog)?data.business.weaponCatalog:base.business.weaponCatalog,
      weaponSales:Array.isArray(data.business?.weaponSales)?data.business.weaponSales:base.business.weaponSales,
      metaPurchases:Array.isArray(data.business?.metaPurchases)?data.business.metaPurchases:base.business.metaPurchases
    },
    properties:Array.isArray(data.properties)?data.properties:[],
    events:Array.isArray(data.events)?data.events:[],
    members:Array.isArray(data.members)?data.members:base.members,
    activity:Array.isArray(data.activity)?data.activity:[]
  };
  let changed=false;
  const revision=Number(data._meta?.territoryResetRevision)||0;
  if(revision<TERRITORY_RESET_REVISION){
    merged.territories=merged.territories.map(t=>({
      ...t,
      ownerId:'none',
      priority:'conquer',
      reputation:0,
      graffitis:[],
      notes:'Disponible tras el reinicio territorial. Se captura con 2 graffitis.'
    }));
    merged.rules.requiredGraffitisUnowned=2;
    merged._meta.territoryResetRevision=TERRITORY_RESET_REVISION;
    changed=true;
  }
  return {data:merged,changed};
}

/* utilities */
const uid = (prefix='id') => `${prefix}-${Date.now().toString(36)}-${Math.random().toString(36).slice(2,7)}`;
const esc = (s='') => String(s).replace(/[&<>'"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[c]));
const fmtDate = (value) => new Intl.DateTimeFormat('es-AR',{dateStyle:'short',timeStyle:'short'}).format(new Date(value));
function reputationLabel(v){
  const n=Number(v)||0;
  if(n>=101) return 'Conquistado';
  if(n>=100) return 'Muy alta';
  if(n>=75) return 'Alta';
  if(n>=50) return 'Media';
  if(n>=25) return 'Baja';
  return 'Muy baja';
}
function reputationPercent(v){ return Math.max(0,Math.min(100,Number(v)||0)); }
function hoursUntil(value){ return (new Date(value).getTime()-Date.now())/36e5; }
function activeGraffitis(t){ return (t.graffitis||[]).filter(g=>new Date(g.expiresAt)>new Date()); }
function isUnownedTerritory(t){ return !t?.ownerId || t.ownerId==='none'; }
function requiredGraffitisFor(t,rules){
  const fallback=Math.max(1,Number(rules?.requiredGraffitis)||3);
  if(isUnownedTerritory(t)) return Math.max(1,Number(rules?.requiredGraffitisUnowned)||2);
  return fallback;
}
function getNextTurn(turns){
  const now=new Date();
  const choices=[];
  for(const time of turns){
    const [h,m]=time.split(':').map(Number);
    const d=new Date(now); d.setHours(h,m,0,0);
    if(d<=now) d.setDate(d.getDate()+1);
    choices.push({time,date:d});
  }
  return choices.sort((a,b)=>a.date-b.date)[0];
}
function countdownText(target){
  const ms=Math.max(0,target-Date.now());
  const h=Math.floor(ms/36e5), m=Math.floor((ms%36e5)/6e4);
  return `${h}h ${m}m restantes`;
}
function territoryState(t,rules){
  const active=activeGraffitis(t);
  const required=requiredGraffitisFor(t,rules);
  const minH=active.length?Math.min(...active.map(g=>hoursUntil(g.expiresAt))):Infinity;
  if(t.priority==='ignore') return {key:'ignored',label:'Ignorar',required};
  if(isUnownedTerritory(t)){
    if(active.length===0) return {key:'available',label:'Disponible',required};
    if(active.length<required) return {key:'progress',label:`Conquista ${active.length}/${required}`,required};
    return {key:'capturable',label:'Lista para capturar',required};
  }
  if(active.length<required) return {key:'risk',label:'En riesgo',required};
  if(minH<=rules.dangerHours) return {key:'risk',label:'Crítico',required};
  if(minH<=rules.warningHours) return {key:'warning',label:'Atención',required};
  return {key:'safe',label:'Seguro',required};
}
function recommendation(data){
  const rules=data.rules;
  const candidates=[];
  for(const t of data.territories){
    if(t.priority==='ignore') continue;
    const active=activeGraffitis(t);
    const required=requiredGraffitisFor(t,rules);
    const expiring=active.filter(g=>hoursUntil(g.expiresAt)<=rules.warningHours).length;
    const missing=Math.max(0,required-active.length);
    const unowned=isUnownedTerritory(t);
    const priorityScore=t.priority==='maintain'?100:t.priority==='conquer'?(unowned?72:45):10;
    const urgency=missing*40+expiring*28+(reputationPercent(t.reputation)/15);
    candidates.push({t,active,required,missing,expiring,score:priorityScore+urgency});
  }
  candidates.sort((a,b)=>b.score-a.score);
  const picks=[];
  for(const c of candidates){
    let need=Math.max(c.missing,c.expiring);
    if(!need && c.t.priority==='conquer' && c.active.length<c.required) need=1;
    while(need>0 && picks.length<rules.graffitisPerTurn){picks.push({territory:c.t,reason:c.missing?'Faltan graffitis':'Próximo a vencer'});need--;}
  }
  for(const c of candidates){
    if(picks.length>=rules.graffitisPerTurn) break;
    if(!picks.some(p=>p.territory.id===c.t.id)) picks.push({territory:c.t,reason:c.t.priority==='maintain'?'Refuerzo':'Avance de conquista'});
  }
  return picks.slice(0,rules.graffitisPerTurn);
}


/* application */
let data=loadData();
let currentView='dashboard';
let selectedTerritoryId=data.territories[0]?.id||null;
let selectedMapId='city';
let movingPins=false;
let mapZoom=.78;
let mapFitZoom=0;
let dragState=null;
let builderType='territories';
let builderSelectedId=null;
let criminalFilter='all';
let businessTab='overview';

const $=s=>document.querySelector(s);
const $$=s=>[...document.querySelectorAll(s)];
const views={
  dashboard:{title:'Dashboard',kicker:'Centro de operaciones'},
  operations:{title:'Operations',kicker:'Mapa táctico y territorios'},
  graffiti:{title:'Graffitis',kicker:'Vencimientos y turnos'},
  criminal:{title:'Actos delictivos',kicker:'Robos, encargos y tiempos de cooldown'},
  business:{title:'Negocios',kicker:'Venta de armas y compra de meta'},
  logistics:{title:'Logistics',kicker:'Propiedades e inventarios'},
  events:{title:'Events',kicker:'Agenda de la organización'},
  members:{title:'Members',kicker:'Integrantes y roles de la organización'},
  builder:{title:'Builder',kicker:'Configuración visual del workspace'},
  settings:{title:'Settings',kicker:'Reglas, identidad y respaldos'}
};

function init(){
  bindGlobal();
  applyBrand();
  navigate('dashboard');
  updateClock();
  setInterval(updateClock,30000);
}
function bindGlobal(){
  $$('.nav-item').forEach(b=>b.addEventListener('click',()=>navigate(b.dataset.view)));
  $('#sidebarToggle').addEventListener('click',()=>$('#sidebar').classList.toggle('collapsed'));
  $('#exportBtn').addEventListener('click',()=>exportData(data));
  $('#importInput').addEventListener('change',async e=>{
    if(!e.target.files[0])return;
    try{data=await importData(e.target.files[0]);persist('Workspace importado');applyBrand();renderCurrent();}
    catch(err){toast('El archivo no es válido');}
    e.target.value='';
  });
  $('#globalSearchBtn').addEventListener('click',openSearch);
  document.addEventListener('keydown',e=>{
    if((e.ctrlKey||e.metaKey)&&e.key.toLowerCase()==='k'){e.preventDefault();openSearch();}
    if(e.key==='Escape'){closeModal();closeSearch();}
  });
  $('#modalHost').addEventListener('click',e=>{if(e.target.id==='modalHost')closeModal();});
  $('#searchPalette').addEventListener('click',e=>{if(e.target.id==='searchPalette')closeSearch();});
  window.addEventListener('resize',()=>{if(currentView==='operations')fitMapToViewport(true)});
}
function applyBrand(){
  document.documentElement.style.setProperty('--accent','#ffffff');
  document.documentElement.style.setProperty('--accent-2','#ffffff');
  document.documentElement.style.setProperty('--workspace-color',data.workspace.color||'#7a8498');
  $('#workspaceLabel').textContent=data.workspace.name;
  $('#sidebarWorkspace').textContent=data.workspace.name;
  $('#sidebarServer').textContent=data.workspace.server;
  const brandMark=$('.brand-mark');
  if(data.workspace.logoImage){brandMark.innerHTML=`<img src="${esc(data.workspace.logoImage)}" alt="Logo">`}else{brandMark.textContent=(data.workspace.logo||data.workspace.name||'F').slice(0,1).toUpperCase()}
}
function persist(message){saveData(data);if(message)toast(message);renderCurrent();}
function navigate(view){
  currentView=view;
  $$('.view').forEach(v=>v.classList.remove('active'));
  $(`#${view}`).classList.add('active');
  $$('.nav-item').forEach(b=>b.classList.toggle('active',b.dataset.view===view));
  $('#viewTitle').textContent=views[view].title;
  $('#viewKicker').textContent=views[view].kicker;
  renderCurrent();
}
function renderCurrent(){
  ({dashboard:renderDashboard,operations:renderOperations,graffiti:renderGraffiti,criminal:renderCriminalActs,business:renderBusiness,logistics:renderLogistics,events:renderEvents,members:renderMembers,builder:renderBuilder,settings:renderSettings}[currentView])();
}
function updateClock(){
  const n=getNextTurn(data.rules.turns);
  $('#nextTurn').textContent=n.time;
  $('#turnCountdown').textContent=countdownText(n.date);
  if(currentView==='dashboard')renderDashboard();
  if(currentView==='criminal')renderCriminalActs();
}
function renderDashboard(){
  const root=$('#dashboard');
  const now=Date.now();
  const states=data.territories.map(t=>({territory:t,state:territoryState(t,data.rules)}));
  const activeGraffitiCount=data.territories.reduce((n,t)=>n+activeGraffitis(t).length,0);
  const riskTerritories=states.filter(x=>x.state.key==='risk');
  const safeTerritories=states.filter(x=>x.state.key==='safe');
  const recs=recommendation(data);
  const expiries=data.territories
    .flatMap(t=>activeGraffitis(t).map(g=>({type:'territory',territory:t,g,h:hoursUntil(g.expiresAt)})))
    .sort((a,b)=>a.h-b.h);
  const inventoryRows=data.properties.flatMap(p=>(p.categories||[]).flatMap(c=>(c.items||[]).map(i=>({property:p,category:c,item:i}))));
  const totalUnits=inventoryRows.reduce((n,x)=>n+(Number(x.item.quantity)||0),0);
  const lowStock=inventoryRows.filter(x=>(Number(x.item.quantity)||0)<=Number(x.item.minStock??3));
  const upcomingEvents=[...data.events].filter(e=>new Date(e.date).getTime()>=now).sort((a,b)=>new Date(a.date)-new Date(b.date));
  const activeMembers=(data.members||[]).filter(m=>(m.status||'active')==='active');
  const criminalStates=(data.criminalActs||[]).map(a=>criminalActState(a));
  const availableActs=criminalStates.filter(x=>x.available).length;
  const cooldownActs=criminalStates.length-availableActs;
  const business=data.business||{weaponSales:[],metaPurchases:[],weaponCatalog:[],currency:'USD',metaUnit:'g'};
  const weaponSales=business.weaponSales||[];
  const metaPurchases=business.metaPurchases||[];
  const todayKey=new Date().toDateString();
  const paidSales=weaponSales.filter(x=>x.status!=='cancelled');
  const salesToday=paidSales.filter(x=>new Date(x.date).toDateString()===todayKey);
  const revenueToday=salesToday.reduce((n,x)=>n+(Number(x.paidAmount)||0),0);
  const receivedMeta=metaPurchases.filter(x=>x.status==='received');
  const metaToday=receivedMeta.filter(x=>new Date(x.date).toDateString()===todayKey).reduce((n,x)=>n+(Number(x.grams)||0),0);
  const pendingBusiness=weaponSales.filter(x=>['pending','partial'].includes(x.status)).length+metaPurchases.filter(x=>!['received','cancelled'].includes(x.status)).length;
  const alerts=[];
  expiries.filter(x=>x.h<=24).slice(0,3).forEach(x=>alerts.push({kind:x.h<=12?'danger':'warn',icon:'◉',title:x.territory.name,text:x.h<=12?'Un graffiti vence pronto':'Vencimiento dentro de 24 horas',meta:timeHuman(x.h),target:'territory',id:x.territory.id}));
  riskTerritories.filter(x=>!alerts.some(a=>a.id===x.territory.id)).slice(0,2).forEach(x=>alerts.push({kind:'danger',icon:'◎',title:x.territory.name,text:'Territorio que requiere atención',meta:x.state.label,target:'territory',id:x.territory.id}));
  lowStock.slice(0,2).forEach(x=>alerts.push({kind:'warn',icon:'▣',title:x.item.name,text:`Stock bajo en ${x.property.name}`,meta:`${Number(x.item.quantity)||0} ${x.item.unit||'unidades'}`,target:'property',id:x.property.id}));
  upcomingEvents.slice(0,2).forEach(e=>{const h=(new Date(e.date).getTime()-now)/36e5;if(h<=48)alerts.push({kind:'info',icon:'◷',title:e.name,text:e.type||'Evento próximo',meta:timeHuman(h),target:'event',id:e.id})});
  if(pendingBusiness)alerts.push({kind:'warn',icon:'◇',title:'Negocios pendientes',text:'Hay cobros o compras sin cerrar',meta:`${pendingBusiness} operaciones`,target:'business',id:'business'});
  const visibleAlerts=alerts.slice(0,6);
  const nextEvent=upcomingEvents[0];
  root.innerHTML=`
    <div class="dashboard-hero card">
      <div class="dashboard-hero-texture"></div>
      <div class="workspace-identity">
        ${workspaceLogoHtml('workspace-logo-large')}
        <div class="workspace-copy">
          <span class="eyebrow">${esc(data.workspace.server||'Servidor sin definir')}</span>
          <h2>${esc(data.workspace.name||'Organización')}</h2>
          <p>${esc(data.workspace.description||'Agregá una descripción breve de la organización desde Ajustes.')}</p>
          <div class="workspace-chips">
            <span class="status-chip"><i></i>${esc(data.workspace.status||'Activa')}</span>
            <span>${(data.members||[]).length} integrantes</span>
            <span>${data.properties.length} propiedades</span>
          </div>
        </div>
      </div>
      <div class="hero-actions">
        <button class="btn glass" id="editWorkspaceDashboard">Editar identidad</button>
        <button class="btn primary" id="openOperationsDashboard">Abrir centro de operaciones</button>
      </div>
    </div>

    <div class="dashboard-module-grid">
      ${dashboardModuleCard('operations','◎','Operaciones',`${riskTerritories.length} requieren atención`,`${safeTerritories.length} seguros · ${activeGraffitiCount} graffitis`,riskTerritories.length?'danger':'good')}
      ${dashboardModuleCard('criminal','◆','Actos delictivos',`${availableActs} disponibles`,`${cooldownActs} en cooldown · ${criminalStates.length} registrados`,availableActs?'good':'neutral')}
      ${dashboardModuleCard('business','◇','Negocios',formatUSD(revenueToday),`${salesToday.length} ventas hoy · ${metaToday} g de meta recibida`,pendingBusiness?'warn':'good',pendingBusiness?`${pendingBusiness} pendientes`:null)}
      ${dashboardModuleCard('logistics','▣','Logística',`${data.properties.length} propiedades`,`${inventoryRows.length} objetos · ${totalUnits} unidades`,lowStock.length?'warn':'good',lowStock.length?`${lowStock.length} stock bajo`:null)}
      ${dashboardModuleCard('events','◷','Agenda',nextEvent?nextEvent.name:'Sin eventos próximos',nextEvent?fmtDate(nextEvent.date):'Creá invasiones, cortes y reuniones',nextEvent?'info':'neutral')}
      ${dashboardModuleCard('members','👥','Integrantes',`${(data.members||[]).length} registrados`,`${activeMembers.length} activos`,activeMembers.length?'good':'neutral')}
    </div>

    <div class="dashboard-main-grid">
      <section class="card section-card dashboard-attention">
        <div class="section-head">
          <div><span class="eyebrow">Prioridades</span><h2>Requiere atención</h2><p>Alertas combinadas de operaciones, logística y agenda.</p></div>
          <span class="pill ${visibleAlerts.some(a=>a.kind==='danger')?'danger':visibleAlerts.length?'warn':'good'}">${visibleAlerts.length?`${visibleAlerts.length} pendientes`:'Todo estable'}</span>
        </div>
        <div class="dashboard-alert-list">
          ${visibleAlerts.length?visibleAlerts.map(dashboardAlertHtml).join(''):'<div class="dashboard-empty-compact"><span>✓</span><div><b>No hay urgencias</b><p>El workspace no tiene alertas críticas en este momento.</p></div></div>'}
        </div>
      </section>

      <section class="card section-card dashboard-plan">
        <div class="section-head"><div><span class="eyebrow">Siguiente turno</span><h2>Plan recomendado</h2><p>Distribución sugerida de los próximos graffitis.</p></div></div>
        <div class="recommendation recommendation-dashboard">
          ${recs.length?recs.map((r,i)=>`<button class="recommendation-item dashboard-rec" data-dashboard-territory="${r.territory.id}"><span><i>${i+1}</i>${esc(r.territory.name)}</span><b>${esc(r.reason)}</b></button>`).join(''):'<div class="dashboard-empty-small">No hay territorios prioritarios configurados.</div>'}
        </div>
        <button class="btn primary full" id="registerTurnDashboard">Registrar próximo turno</button>
      </section>

      <section class="card section-card dashboard-members-card">
        <div class="section-head"><div><span class="eyebrow">Organización</span><h2>Integrantes</h2><p>Vista rápida de todos los miembros registrados.</p></div><button class="text-link" data-dashboard-view="members">Gestionar →</button></div>
        ${(data.members||[]).length?`<div class="member-strip">${data.members.map(m=>`<button class="member-mini" data-member-id="${m.id}">${memberAvatarHtml(m)}<span><b>${esc(m.name)}</b><small>${esc(m.role||'Sin rol')}</small></span><i class="member-status ${m.status==='inactive'?'inactive':''}"></i></button>`).join('')}</div>`:'<button class="dashboard-empty-action" data-dashboard-view="members"><span>＋</span><div><b>Agregar integrantes</b><p>Creá perfiles con nombre, rol y estado.</p></div></button>'}
      </section>

      <section class="card section-card dashboard-activity-card">
        <div class="section-head"><div><span class="eyebrow">Workspace</span><h2>Actividad reciente</h2><p>Últimos cambios registrados en todos los módulos.</p></div></div>
        <div class="timeline-list">
          ${data.activity.length?data.activity.slice(0,6).map(a=>`<div class="timeline-row"><span class="timeline-dot"></span><div><b>${esc(a.action)}</b><p>${esc(a.target||'FactionOS')}</p></div><time>${fmtRelative(a.date)}</time></div>`).join(''):'<div class="dashboard-empty-compact"><span>↻</span><div><b>Todavía no hay actividad</b><p>Las acciones del equipo aparecerán acá.</p></div></div>'}
        </div>
      </section>
    </div>`;

  $$('[data-dashboard-view]').forEach(el=>el.addEventListener('click',()=>navigate(el.dataset.dashboardView)));
  $$('.dashboard-module-card').forEach(el=>el.addEventListener('click',()=>navigate(el.dataset.dashboardView)));
  $$('.dashboard-rec').forEach(el=>el.addEventListener('click',()=>{selectedTerritoryId=el.dataset.dashboardTerritory;selectedMapId=getTerritory(selectedTerritoryId)?.mapId||'city';navigate('operations')}));
  $$('.dashboard-alert').forEach(el=>el.addEventListener('click',()=>openDashboardTarget(el.dataset.target,el.dataset.id)));
  $$('.member-mini').forEach(el=>el.addEventListener('click',()=>{navigate('members');setTimeout(()=>openMemberModal(el.dataset.memberId),0)}));
  $('#editWorkspaceDashboard')?.addEventListener('click',()=>navigate('settings'));
  $('#openOperationsDashboard')?.addEventListener('click',()=>navigate('operations'));
  $('#registerTurnDashboard')?.addEventListener('click',openTurnModal);
}
function workspaceLogoHtml(className=''){
  if(data.workspace.logoImage)return `<div class="workspace-logo ${className}"><img src="${esc(data.workspace.logoImage)}" alt="Logo de ${esc(data.workspace.name)}"></div>`;
  return `<div class="workspace-logo ${className}"><span>${esc((data.workspace.logo||data.workspace.name||'F').slice(0,2).toUpperCase())}</span></div>`;
}
function dashboardModuleCard(view,icon,title,value,detail,state='neutral',badge=null){
  return `<button class="card dashboard-module-card state-${state}" data-dashboard-view="${view}"><span class="module-icon">${icon}</span><div class="module-copy"><small>${title}</small><strong>${esc(value)}</strong><p>${esc(detail)}</p></div>${badge?`<span class="module-badge">${esc(badge)}</span>`:''}<span class="module-arrow">→</span></button>`;
}
function dashboardAlertHtml(a){
  return `<button class="dashboard-alert ${a.kind}" data-target="${a.target}" data-id="${a.id}"><span class="dashboard-alert-icon">${a.icon}</span><span class="dashboard-alert-copy"><b>${esc(a.title)}</b><small>${esc(a.text)}</small></span><span class="dashboard-alert-meta">${esc(a.meta)}<i>→</i></span></button>`;
}
function memberAvatarHtml(m){
  const initials=(m.name||'?').split(/\s+/).filter(Boolean).slice(0,2).map(x=>x[0]).join('').toUpperCase();
  if(m.avatar)return `<span class="member-avatar"><img src="${esc(m.avatar)}" alt="${esc(m.name)}"></span>`;
  return `<span class="member-avatar" style="--member-color:${m.color||data.workspace.color}">${esc(initials||'?')}</span>`;
}
function fmtRelative(date){
  const diff=(Date.now()-new Date(date).getTime())/1000;
  if(diff<60)return 'Ahora';
  if(diff<3600)return `Hace ${Math.floor(diff/60)} min`;
  if(diff<86400)return `Hace ${Math.floor(diff/3600)} h`;
  if(diff<604800)return `Hace ${Math.floor(diff/86400)} d`;
  return fmtDate(date);
}
function openDashboardTarget(target,id){
  if(target==='territory'){const t=getTerritory(id);if(t){selectedTerritoryId=id;selectedMapId=t.mapId;navigate('operations')}}
  if(target==='property'){navigate('logistics');setTimeout(()=>openPropertyDetail(id),0)}
  if(target==='event')navigate('events');
  if(target==='business')navigate('business');
}

function stat(label,value,small){return `<div class="card stat-card"><span class="label">${label}</span><strong>${value}</strong><small>${small}</small></div>`}
function actionRow(name,desc,meta,state){return `<div class="action-row"><span class="action-dot" style="background:var(--${state})"></span><div><strong>${esc(name)}</strong><p>${desc}</p></div><span class="meta">${meta}</span></div>`}
function timeHuman(h){if(!isFinite(h))return 'Sin vencimiento';if(h<0)return 'Vencido';if(h<1)return `${Math.max(1,Math.round(h*60))} min`;if(h<48)return `${Math.floor(h)} h`;return `${Math.floor(h/24)} d`}

function renderOperations(){
  const root=$('#operations');
  const map=data.maps.find(m=>m.id===selectedMapId)||data.maps[0];
  const territories=data.territories.filter(t=>t.mapId===selectedMapId);
  const selected=data.territories.find(t=>t.id===selectedTerritoryId&&t.mapId===selectedMapId);
  root.innerHTML=`<div class="operations-shell">
    <div class="map-card">
      <div class="map-toolbar">
        <div class="tool-group">
          ${data.maps.map(m=>`<button class="tool-btn map-tab ${m.id===selectedMapId?'active':''}" data-map="${m.id}">${esc(m.name)}</button>`).join('')}
        </div>
        <div class="tool-group">
          <button class="tool-btn" id="zoomOut">−</button><button class="tool-btn" id="zoomReset">100%</button><button class="tool-btn" id="zoomIn">+</button>
          <button class="tool-btn ${movingPins?'active':''}" id="movePins">${movingPins?'Guardar posiciones':'Mover pines'}</button>
          <button class="tool-btn primary" id="newTerritory">+ Territorio</button>
        </div>
      </div>
      <div class="map-viewport" id="mapViewport">
        <div class="map-stage ${selectedMapId==='north'?'north':''}" id="mapStage" style="width:${map.width}px;height:${map.height}px">
          <img class="map-image" src="${map.src}" width="${map.width}" height="${map.height}" style="width:${map.width}px;height:${map.height}px" alt="${esc(map.name)}" draggable="false" />
          ${territories.map(t=>territoryPin(t)).join('')}
        </div>
        <div class="map-vignette"></div>
        <div class="map-reset-banner"><b>Reinicio territorial activo</b><span>Todos los territorios están sin dueño · ${data.rules.requiredGraffitisUnowned||2} graffitis para capturar</span></div>
        <div class="map-legend">
          <h4>Prioridad</h4>
          <div class="legend-row"><span class="legend-color" style="background:#ff5d67"></span>Mantener<input type="checkbox" data-filter="maintain" checked></div>
          <div class="legend-row"><span class="legend-color" style="background:#51a8ff"></span>Conquistar<input type="checkbox" data-filter="conquer" checked></div>
          <div class="legend-row"><span class="legend-color" style="background:#6b7488"></span>Ignorar<input type="checkbox" data-filter="ignore" checked></div>
        </div>
        <div class="map-help"><span>Rueda: zoom</span><span>Mapa fijo y centrado</span><span>Clic: abrir ficha</span></div>
      </div>
    </div>
    <aside class="card detail-panel" id="territoryDetail">${selected?territoryDetail(selected):'<div class="detail-empty"><div><h3>Seleccioná un territorio</h3><p>Hacé clic en un punto del mapa para ver sus datos.</p></div></div>'}</aside>
  </div>`;
  bindOperations();
  requestAnimationFrame(()=>{
    if(!Number.isFinite(mapFitZoom)||mapFitZoom<=0) fitMapToViewport(true);
    else updateMapTransform();
  });
}
function territoryPin(t){
  const org=getOrg(t.ownerId);const state=territoryState(t,data.rules);const active=activeGraffitis(t).length;const required=requiredGraffitisFor(t,data.rules);
  const color=t.priority==='maintain'?'#ff5d67':t.priority==='conquer'?'#51a8ff':org.color;
  const badge=active>0?`<span class="pin-badge">${active}</span>`:'';
  return `<button class="territory-pin ${selectedTerritoryId===t.id?'selected':''} ${state.key==='risk'?'risk':''}" data-territory="${t.id}" style="left:${t.x}%;top:${t.y}%;--pin-color:${color}" aria-label="${esc(t.name)}"><span class="pin-core"><span class="pin-dot"></span></span>${badge}<span class="pin-chip"><b>${esc(t.name)}</b><small>${active}/${required}</small></span></button>`;
}
function territoryDetail(t){
  const org=getOrg(t.ownerId),active=activeGraffitis(t),state=territoryState(t,data.rules),required=requiredGraffitisFor(t,data.rules),unowned=isUnownedTerritory(t);
  const next=active.length?active.slice().sort((a,b)=>new Date(a.expiresAt)-new Date(b.expiresAt))[0]:null;
  const pillClass=state.key==='risk'?'danger':state.key==='warning'?'warn':['available','progress'].includes(state.key)?'info':'good';
  const ownerLine=unowned?`Estado: <b style="color:#51a8ff">Sin dueño</b> · ${required} graffitis para capturar`:`Controla: <b style="color:${org.color}">${esc(org.name)}</b> · ${priorityLabel(t.priority)}`;
  return `<span class="pill ${pillClass}">${state.label}</span>
    <h2>${esc(t.name)}</h2><div class="detail-owner">${ownerLine}</div>
    <div class="detail-block"><div class="detail-label">Reputación</div><div class="rep-row"><div class="rep-bar"><div class="rep-fill" style="width:${reputationPercent(t.reputation)}%"></div></div><b>${reputationLabel(t.reputation)}</b></div></div>
    <div class="detail-block"><div class="detail-label">Graffitis activos (${active.length}/${required})</div><div class="sprays">${Array.from({length:required},(_,i)=>sprayHtml(active[i])).join('')}${active.slice(required).map(g=>sprayHtml(g)).join('')}</div><p style="font-size:11px;color:var(--muted);margin:10px 0 0">Próximo vencimiento: ${next?fmtDate(next.expiresAt):'Sin vencimiento'}</p></div>
    <div class="detail-block"><div class="detail-label">Notas</div><p style="font-size:12px;color:#c7cfdd;line-height:1.55">${esc(t.notes||'Sin notas.')}</p></div>
    <div class="detail-block"><div class="btn-row"><button class="btn primary" id="addGraffiti">+ Agregar graffiti</button><button class="btn" id="editTerritory">Editar</button><button class="btn danger" id="clearGraffiti">Limpiar</button></div></div>
    <div class="detail-block"><div class="detail-label">Graffitis</div>${active.length?active.map(g=>`<div class="action-row" style="grid-template-columns:8px 1fr auto"><span class="action-dot" style="background:${hoursUntil(g.expiresAt)<=12?'var(--danger)':hoursUntil(g.expiresAt)<=24?'var(--warn)':'var(--good)'}"></span><div><strong>${fmtDate(g.placedAt)}</strong><p>Vence ${fmtDate(g.expiresAt)}</p></div><button class="btn small danger remove-graffiti" data-id="${g.id}">Quitar</button></div>`).join(''):'<p style="color:var(--muted);font-size:12px">No hay graffitis activos.</p>'}</div>`;
}
function sprayHtml(g){if(!g)return '<span class="spray empty"></span>';const h=hoursUntil(g.expiresAt);return `<span class="spray ${h<=12?'danger':h<=24?'warn':''}" title="Vence ${fmtDate(g.expiresAt)}"></span>`}
function bindOperations(){
  $$('.map-tab').forEach(b=>b.addEventListener('click',()=>{selectedMapId=b.dataset.map;selectedTerritoryId=data.territories.find(t=>t.mapId===selectedMapId)?.id||null;mapFitZoom=0;renderOperations();requestAnimationFrame(()=>fitMapToViewport(true))}));
  $('#zoomIn').addEventListener('click',()=>setZoom(mapZoom+.12));
  $('#zoomOut').addEventListener('click',()=>setZoom(mapZoom-.12));
  $('#zoomReset').addEventListener('click',()=>fitMapToViewport(true));
  $('#movePins').addEventListener('click',()=>{movingPins=!movingPins;toast(movingPins?'Arrastrá los pines para ubicarlos':'Posiciones guardadas');renderOperations()});
  $('#newTerritory').addEventListener('click',()=>openTerritoryModal(null,selectedMapId));
  $$('.territory-pin').forEach(pin=>{
    pin.addEventListener('click',e=>{e.stopPropagation();if(dragState)return;selectedTerritoryId=pin.dataset.territory;renderOperations()});
    if(movingPins) bindPinDrag(pin);
  });
  $$('[data-filter]').forEach(ch=>ch.addEventListener('change',()=>{
    const allowed=new Set($$('[data-filter]:checked').map(x=>x.dataset.filter));
    $$('.territory-pin').forEach(pin=>{const t=data.territories.find(x=>x.id===pin.dataset.territory);pin.classList.toggle('muted',!allowed.has(t.priority))});
  }));
  const vp=$('#mapViewport');
  vp.addEventListener('wheel',e=>{e.preventDefault();setZoom(mapZoom*(e.deltaY<0?1.1:.9))},{passive:false});
  $('#addGraffiti')?.addEventListener('click',()=>addGraffiti(selectedTerritoryId));
  $('#editTerritory')?.addEventListener('click',()=>openTerritoryModal(selectedTerritoryId));
  $('#clearGraffiti')?.addEventListener('click',()=>{const t=getTerritory(selectedTerritoryId);if(confirm('¿Eliminar todos los graffitis de este territorio?')){t.graffitis=[];logActivity('Graffitis eliminados',t.name);persist('Graffitis eliminados')}});
  $$('.remove-graffiti').forEach(b=>b.addEventListener('click',()=>{const t=getTerritory(selectedTerritoryId);t.graffitis=t.graffitis.filter(g=>g.id!==b.dataset.id);persist('Graffiti eliminado')}));
}
function bindPinDrag(pin){
  pin.addEventListener('pointerdown',e=>{e.stopPropagation();const t=getTerritory(pin.dataset.territory);dragState={type:'pin',t,pin};pin.setPointerCapture(e.pointerId)});
  pin.addEventListener('pointermove',e=>{if(dragState?.type!=='pin'||dragState.pin!==pin)return;const stage=$('#mapStage'),rect=stage.getBoundingClientRect();const x=(e.clientX-rect.left)/rect.width*100,y=(e.clientY-rect.top)/rect.height*100;dragState.t.x=Math.max(0,Math.min(100,x));dragState.t.y=Math.max(0,Math.min(100,y));pin.style.left=dragState.t.x+'%';pin.style.top=dragState.t.y+'%'});
  pin.addEventListener('pointerup',()=>{if(dragState?.type==='pin'){saveData(data);dragState=null}});
}
function fitMapToViewport(apply=true){
  const vp=$('#mapViewport'),stage=$('#mapStage');
  if(!vp||!stage)return;
  const map=data.maps.find(m=>m.id===selectedMapId)||data.maps[0];
  const padding=34;
  const availableW=Math.max(240,vp.clientWidth-padding*2);
  const availableH=Math.max(240,vp.clientHeight-padding*2);
  mapFitZoom=Math.min(1,availableW/map.width,availableH/map.height);
  if(apply)mapZoom=mapFitZoom;
  updateMapTransform();
}
function setZoom(z){
  const min=Math.max(.3,mapFitZoom*.62);
  mapZoom=Math.max(min,Math.min(2.1,z));
  updateMapTransform();
}
function updateMapTransform(){
  const stage=$('#mapStage');
  if(stage)stage.style.transform=`translate(-50%,-50%) scale(${mapZoom})`;
  const zr=$('#zoomReset');
  if(zr)zr.textContent=`${Math.round(mapZoom*100)}%`;
}

function renderGraffiti(){
  const root=$('#graffiti');
  const rows=data.territories.flatMap(t=>activeGraffitis(t).map(g=>({t,g,h:hoursUntil(g.expiresAt)}))).sort((a,b)=>a.h-b.h);
  root.innerHTML=`<div class="card table-card"><div class="section-card"><div class="section-head"><div><h2>Graffitis activos</h2><p>Todos los vencimientos en un solo lugar.</p></div><button class="btn primary" id="registerTurn">Registrar turno</button></div></div>
  ${rows.length?`<table class="data-table"><thead><tr><th>Territorio</th><th>Colocado</th><th>Vence</th><th>Tiempo restante</th><th></th></tr></thead><tbody>${rows.map(x=>`<tr><td><b>${esc(x.t.name)}</b></td><td>${fmtDate(x.g.placedAt)}</td><td>${fmtDate(x.g.expiresAt)}</td><td><span class="pill ${x.h<=12?'danger':x.h<=24?'warn':'good'}">${timeHuman(x.h)}</span></td><td><button class="btn small danger" data-remove-g="${x.g.id}" data-t="${x.t.id}">Quitar</button></td></tr>`).join('')}</tbody></table>`:'<div class="empty-state">No hay graffitis activos.</div>'}</div>`;
  $('#registerTurn').addEventListener('click',openTurnModal);
  $$('[data-remove-g]').forEach(b=>b.addEventListener('click',()=>{const t=getTerritory(b.dataset.t);t.graffitis=t.graffitis.filter(g=>g.id!==b.dataset.removeG);persist('Graffiti eliminado')}));
}
function openTurnModal(){
  const recs=recommendation(data);
  openModal('Registrar turno',`<p style="color:var(--muted);font-size:12px">Seleccioná un territorio por cada graffiti colocado. Podés registrar hasta ${data.rules.graffitisPerTurn}.</p><div class="form-grid">${Array.from({length:data.rules.graffitisPerTurn},(_,i)=>`<div class="field"><label>Graffiti ${i+1}</label><select class="turn-select"><option value="">No utilizado</option>${data.territories.filter(t=>t.priority!=='ignore').map(t=>`<option value="${t.id}" ${recs[i]?.territory.id===t.id?'selected':''}>${esc(t.name)}</option>`).join('')}</select></div>`).join('')}</div>`,()=>{
    $$('.turn-select').forEach(s=>{if(s.value)addGraffiti(s.value,false)});logActivity('Turno registrado','Operaciones');persist('Turno registrado');closeModal();
  });
}
function addGraffiti(tid,notify=true){const t=getTerritory(tid);if(!t)return;const placed=new Date();const expires=new Date(placed.getTime()+data.rules.graffitiDurationHours*36e5);t.graffitis=t.graffitis||[];t.graffitis.push({id:uid('g'),placedAt:placed.toISOString(),expiresAt:expires.toISOString()});logActivity('Graffiti agregado',t.name);saveData(data);if(notify)toast(`Graffiti agregado en ${t.name}`);renderCurrent()}


function criminalActAvailableAt(act){
  if(!act.lastCompletedAt)return null;
  const last=new Date(act.lastCompletedAt);
  const cooldownAt=new Date(last.getTime()+(Number(act.cooldownHours)||0)*36e5);
  if(!act.oncePerDay)return cooldownAt;
  const nextDay=new Date(last);
  nextDay.setHours(24,0,0,0);
  return new Date(Math.max(cooldownAt.getTime(),nextDay.getTime()));
}
function criminalActState(act){
  const availableAt=criminalActAvailableAt(act);
  const available=!availableAt||availableAt.getTime()<=Date.now();
  return {act,available,availableAt,remainingHours:availableAt?hoursUntil(availableAt):0};
}
function criminalCategoryLabel(category){return category==='medium'?'Robos medianos':category==='large'?'Robos grandes':'Encargos'}
function criminalFrequencyText(act){
  if(act.oncePerDay)return `1 vez por día · CD mínimo ${act.cooldownHours} h`;
  if(act.cooldownHours===72)return 'Cada 3 días · CD 72 h';
  if(act.cooldownHours===336)return 'Cada 14 días · CD 336 h';
  return `Cada ${act.cooldownHours} ${act.cooldownHours===1?'hora':'horas'}`;
}
function criminalPeopleText(act){
  if(act.category==='contract')return 'Sin requisito informado';
  if(act.minPeople==null&&act.maxPeople==null)return 'Sin límite de personas';
  if(act.maxPeople==null)return `Mínimo ${act.minPeople} personas`;
  return `${act.minPeople}–${act.maxPeople} personas`;
}
function renderCriminalActs(){
  const root=$('#criminal');
  const states=(data.criminalActs||[]).map(criminalActState);
  const filtered=criminalFilter==='all'?states:states.filter(x=>x.act.category===criminalFilter);
  const availableCount=states.filter(x=>x.available).length;
  const cooldownCount=states.length-availableCount;
  const doneToday=states.filter(x=>x.act.lastCompletedAt&&new Date(x.act.lastCompletedAt).toDateString()===new Date().toDateString()).length;
  const next=states.filter(x=>!x.available).sort((a,b)=>a.availableAt-b.availableAt)[0];
  root.innerHTML=`
    <div class="criminal-summary-grid">
      ${stat('Disponibles',availableCount,'Listos para realizar')}
      ${stat('En cooldown',cooldownCount,'Esperando disponibilidad')}
      ${stat('Hechos hoy',doneToday,'Registros del día')}
      ${stat('Próximo disponible',next?timeHuman(next.remainingHours):'—',next?next.act.name:'Todos disponibles')}
    </div>
    <div class="criminal-toolbar">
      <div class="tool-group">
        ${[['all','Todos'],['medium','Robos medianos'],['large','Robos grandes'],['contract','Encargos']].map(([k,n])=>`<button class="tool-btn criminal-filter ${criminalFilter===k?'active':''}" data-criminal-filter="${k}">${n}</button>`).join('')}
      </div>
      <span class="criminal-toolbar-note">Marcá un acto como hecho para iniciar automáticamente su cooldown.</span>
    </div>
    <div class="criminal-groups">
      ${['medium','large','contract'].filter(cat=>criminalFilter==='all'||criminalFilter===cat).map(cat=>{
        const rows=filtered.filter(x=>x.act.category===cat);
        return `<section class="criminal-group"><div class="section-head"><div><span class="eyebrow">${cat==='contract'?'Trabajos':'Operaciones'}</span><h2>${criminalCategoryLabel(cat)}</h2><p>${rows.length} actividades registradas.</p></div></div><div class="criminal-grid">${rows.map(criminalCardHtml).join('')}</div></section>`
      }).join('')}
    </div>`;
  $$('.criminal-filter').forEach(b=>b.addEventListener('click',()=>{criminalFilter=b.dataset.criminalFilter;renderCriminalActs()}));
  $$('.criminal-done').forEach(b=>b.addEventListener('click',()=>markCriminalActDone(b.dataset.id)));
  $$('.criminal-history').forEach(b=>b.addEventListener('click',()=>openCriminalHistory(b.dataset.id)));
  $$('.criminal-undo').forEach(b=>b.addEventListener('click',()=>undoCriminalAct(b.dataset.id)));
}
function criminalCardHtml(state){
  const a=state.act;
  const statusClass=state.available?'available':'cooldown';
  const statusText=state.available?'Disponible':`Disponible en ${timeHuman(state.remainingHours)}`;
  const historyCount=(a.history||[]).length;
  return `<article class="card criminal-card ${statusClass}">
    <div class="criminal-card-top"><span class="criminal-category">${criminalCategoryLabel(a.category)}</span><span class="pill ${state.available?'good':'warn'}">${statusText}</span></div>
    <h3>${esc(a.name)}</h3>
    <div class="criminal-info-list">
      ${a.category!=='contract'?`<div><span>Ubicación</span><b>${esc(a.location)}</b></div><div><span>Personas</span><b>${esc(criminalPeopleText(a))}</b></div>`:''}
      ${a.category==='contract'?`<div><span>Costo</span><b>${Number(a.costDKZ)||0} DKZ</b></div>`:''}
      <div><span>Frecuencia</span><b>${esc(criminalFrequencyText(a))}</b></div>
      <div><span>Último registro</span><b>${a.lastCompletedAt?fmtDate(a.lastCompletedAt):'Nunca realizado'}</b></div>
      <div><span>Próxima disponibilidad</span><b>${state.available?'Ahora':fmtDate(state.availableAt)}</b></div>
    </div>
    <div class="criminal-progress"><span style="width:${criminalProgressPercent(state)}%"></span></div>
    <div class="criminal-actions">
      <button class="btn primary criminal-done" data-id="${a.id}" ${state.available?'':'disabled'}>${state.available?'✓ Marcar como hecho':'Cooldown activo'}</button>
      <button class="btn criminal-history" data-id="${a.id}">Historial (${historyCount})</button>
      ${historyCount?`<button class="btn danger criminal-undo" data-id="${a.id}" title="Deshacer último registro">↶</button>`:''}
    </div>
  </article>`;
}
function criminalProgressPercent(state){
  if(state.available||!state.act.lastCompletedAt)return 100;
  const start=new Date(state.act.lastCompletedAt).getTime();
  const end=state.availableAt.getTime();
  const total=Math.max(1,end-start);
  const elapsed=Math.max(0,Date.now()-start);
  return Math.max(0,Math.min(100,elapsed/total*100));
}
function markCriminalActDone(id){
  const act=(data.criminalActs||[]).find(x=>x.id===id);if(!act)return;
  const state=criminalActState(act);if(!state.available)return toast('Este acto todavía está en cooldown');
  const now=new Date().toISOString();
  act.lastCompletedAt=now;
  act.history=act.history||[];
  act.history.unshift({id:uid('crime'),completedAt:now});
  logActivity('Acto delictivo realizado',act.name);
  persist(`${act.name} marcado como hecho`);
}
function undoCriminalAct(id){
  const act=(data.criminalActs||[]).find(x=>x.id===id);if(!act||!(act.history||[]).length)return;
  if(!confirm(`¿Deshacer el último registro de ${act.name}?`))return;
  act.history.shift();
  act.lastCompletedAt=act.history[0]?.completedAt||null;
  logActivity('Registro delictivo deshecho',act.name);
  persist('Último registro deshecho');
}
function openCriminalHistory(id){
  const act=(data.criminalActs||[]).find(x=>x.id===id);if(!act)return;
  const history=act.history||[];
  openModal(`Historial · ${act.name}`,history.length?`<table class="data-table"><thead><tr><th>#</th><th>Realizado</th><th>Disponible nuevamente</th></tr></thead><tbody>${history.map((h,i)=>{const temp={...act,lastCompletedAt:h.completedAt};return `<tr><td>${history.length-i}</td><td>${fmtDate(h.completedAt)}</td><td>${fmtDate(criminalActAvailableAt(temp))}</td></tr>`}).join('')}</tbody></table>`:'<div class="empty-state">Todavía no hay registros.</div>',null,{hideSave:true});
}

function ensureBusiness(){
  data.business=data.business||{};
  data.business.currency='USD';
  data.business.metaUnit='g';
  data.business.weaponCatalog=Array.isArray(data.business.weaponCatalog)?data.business.weaponCatalog:[];
  data.business.weaponSales=Array.isArray(data.business.weaponSales)?data.business.weaponSales:[];
  data.business.metaPurchases=Array.isArray(data.business.metaPurchases)?data.business.metaPurchases:[];
  return data.business;
}
function formatUSD(value){
  return new Intl.NumberFormat('en-US',{style:'currency',currency:'USD',minimumFractionDigits:0,maximumFractionDigits:2}).format(Number(value)||0);
}
function businessStatusLabel(status,type='sale'){
  const sale={pending:'Pendiente',partial:'Pago parcial',paid:'Pagada',cancelled:'Cancelada'};
  const purchase={requested:'Solicitada',pending_payment:'Pendiente de pago',paid:'Pagada',received:'Recibida',cancelled:'Cancelada'};
  return (type==='purchase'?purchase:sale)[status]||status||'Sin estado';
}
function businessStatusClass(status){
  if(['paid','received'].includes(status))return 'good';
  if(status==='cancelled')return 'danger';
  return 'warn';
}
function inventoryEntries(){
  return data.properties.flatMap(p=>(p.categories||[]).flatMap(c=>(c.items||[]).map(i=>({property:p,category:c,item:i,key:`${p.id}|${c.id}|${i.id}`}))));
}
function inventoryEntry(key){
  return inventoryEntries().find(x=>x.key===key)||null;
}
function saleInventoryKey(sale){return `${sale.propertyId||''}|${sale.categoryId||''}|${sale.itemId||''}`}
function catalogPriceFor(name){
  const row=ensureBusiness().weaponCatalog.find(x=>String(x.name).toLowerCase()===String(name).toLowerCase());
  return Number(row?.defaultPrice)||0;
}
function rollbackSaleStock(sale){
  if(!sale?.stockApplied)return;
  const entry=inventoryEntry(saleInventoryKey(sale));
  if(entry)entry.item.quantity=(Number(entry.item.quantity)||0)+(Number(sale.quantity)||0);
  sale.stockApplied=false;
}
function applySaleStock(sale){
  if(sale.status==='cancelled'){sale.stockApplied=false;return true}
  const entry=inventoryEntry(saleInventoryKey(sale));
  if(!entry)return false;
  const qty=Number(sale.quantity)||0;
  if((Number(entry.item.quantity)||0)<qty)return false;
  entry.item.quantity=(Number(entry.item.quantity)||0)-qty;
  sale.stockApplied=true;
  return true;
}
function findMetaItem(propertyId,create=false){
  const property=data.properties.find(p=>p.id===propertyId);if(!property)return null;
  for(const category of property.categories||[]){
    const item=(category.items||[]).find(i=>String(i.name).trim().toLowerCase()==='meta');
    if(item)return {property,category,item};
  }
  if(!create)return null;
  property.categories=property.categories||[];
  let category=property.categories.find(c=>/material|meta/i.test(c.name));
  if(!category){category={id:uid('cat'),name:'Materiales',items:[]};property.categories.push(category)}
  category.items=category.items||[];
  const item={id:uid('item'),name:'Meta',quantity:0,unit:'g'};
  category.items.push(item);
  return {property,category,item};
}
function rollbackMetaStock(purchase){
  if(!purchase?.stockApplied)return;
  const entry=findMetaItem(purchase.propertyId,false);
  if(entry)entry.item.quantity=Math.max(0,(Number(entry.item.quantity)||0)-(Number(purchase.grams)||0));
  purchase.stockApplied=false;
}
function applyMetaStock(purchase){
  if(purchase.status!=='received'){purchase.stockApplied=false;return true}
  const entry=findMetaItem(purchase.propertyId,true);if(!entry)return false;
  entry.item.quantity=(Number(entry.item.quantity)||0)+(Number(purchase.grams)||0);
  entry.item.unit='g';
  purchase.stockApplied=true;
  purchase.metaCategoryId=entry.category.id;
  purchase.metaItemId=entry.item.id;
  return true;
}
function businessMetrics(){
  const b=ensureBusiness();
  const validSales=b.weaponSales.filter(x=>x.status!=='cancelled');
  const revenue=validSales.reduce((n,x)=>n+(Number(x.paidAmount)||0),0);
  const receivable=validSales.reduce((n,x)=>n+Math.max(0,(Number(x.total)||0)-(Number(x.paidAmount)||0)),0);
  const received=b.metaPurchases.filter(x=>x.status==='received');
  const metaGrams=received.reduce((n,x)=>n+(Number(x.grams)||0),0);
  const spending=b.metaPurchases.filter(x=>!['requested','cancelled'].includes(x.status)).reduce((n,x)=>n+(Number(x.paidAmount)||0),0);
  const pending=b.weaponSales.filter(x=>['pending','partial'].includes(x.status)).length+b.metaPurchases.filter(x=>!['received','cancelled'].includes(x.status)).length;
  return {revenue,receivable,metaGrams,spending,pending};
}
function renderBusiness(){
  const root=$('#business');
  const b=ensureBusiness();
  const m=businessMetrics();
  root.innerHTML=`
    <div class="business-summary-grid">
      ${stat('Ingresos cobrados',formatUSD(m.revenue),'Ventas de armas')}
      ${stat('Pendiente de cobro',formatUSD(m.receivable),'Pagos pendientes o parciales')}
      ${stat('Meta recibida',`${m.metaGrams.toLocaleString('es-AR')} g`,'Stock ingresado')}
      ${stat('Gastos registrados',formatUSD(m.spending),`${m.pending} operaciones pendientes`)}
    </div>
    <div class="business-toolbar">
      <div class="tool-group">
        ${[['overview','Resumen'],['sales','Venta de armas'],['meta','Compra de meta'],['catalog','Catálogo']].map(([key,label])=>`<button class="tool-btn business-tab ${businessTab===key?'active':''}" data-business-tab="${key}">${label}</button>`).join('')}
      </div>
      <div class="tool-group">
        <button class="btn" id="newMetaPurchase">+ Compra de meta</button>
        <button class="btn primary" id="newWeaponSale">+ Venta de armas</button>
      </div>
    </div>
    <div id="businessContent">${businessContentHtml()}</div>`;
  $$('.business-tab').forEach(btn=>btn.addEventListener('click',()=>{businessTab=btn.dataset.businessTab;renderBusiness()}));
  $('#newWeaponSale')?.addEventListener('click',()=>openWeaponSaleModal());
  $('#newMetaPurchase')?.addEventListener('click',()=>openMetaPurchaseModal());
  bindBusinessContent();
}
function businessContentHtml(){
  const b=ensureBusiness();
  if(businessTab==='sales')return weaponSalesHtml(b.weaponSales);
  if(businessTab==='meta')return metaPurchasesHtml(b.metaPurchases);
  if(businessTab==='catalog')return weaponCatalogHtml(b.weaponCatalog);
  const recent=[
    ...b.weaponSales.map(x=>({type:'sale',date:x.date,row:x})),
    ...b.metaPurchases.map(x=>({type:'purchase',date:x.date,row:x}))
  ].sort((a,b)=>new Date(b.date)-new Date(a.date)).slice(0,8);
  const pendingSales=b.weaponSales.filter(x=>['pending','partial'].includes(x.status));
  const pendingMeta=b.metaPurchases.filter(x=>!['received','cancelled'].includes(x.status));
  const pendingRows=[...pendingSales.map(x=>businessPendingRow('sale',x)),...pendingMeta.map(x=>businessPendingRow('purchase',x))].join('');
  return `<div class="business-overview-grid">
    <section class="card section-card">
      <div class="section-head"><div><span class="eyebrow">Seguimiento</span><h2>Operaciones pendientes</h2><p>Cobros, compras y entregas que todavía no se cerraron.</p></div><span class="pill ${pendingSales.length+pendingMeta.length?'warn':'good'}">${pendingSales.length+pendingMeta.length} pendientes</span></div>
      <div class="business-pending-list">
        ${pendingRows||'<div class="dashboard-empty-compact"><span>✓</span><div><b>Todo al día</b><p>No hay operaciones pendientes.</p></div></div>'}
      </div>
    </section>
    <section class="card section-card">
      <div class="section-head"><div><span class="eyebrow">Actividad</span><h2>Últimos movimientos</h2><p>Ventas y compras registradas recientemente.</p></div></div>
      <div class="timeline-list">${recent.length?recent.map(businessTimelineRow).join(''):'<div class="dashboard-empty-compact"><span>↻</span><div><b>Sin movimientos</b><p>Las operaciones aparecerán acá.</p></div></div>'}</div>
    </section>
  </div>`;
}
function businessPendingRow(type,row){
  const isSale=type==='sale';
  const main=isSale?`${row.quantity} × ${row.itemName}`:`${Number(row.grams)||0} g de meta`;
  const sub=isSale?`${row.buyer||'Comprador sin definir'} · ${businessStatusLabel(row.status,'sale')}`:`${row.provider||'Proveedor sin definir'} · ${businessStatusLabel(row.status,'purchase')}`;
  return `<button class="business-pending-row" data-business-edit="${type}" data-id="${row.id}"><span>${isSale?'↗':'↘'}</span><div><b>${esc(main)}</b><small>${esc(sub)}</small></div><strong>${formatUSD(row.total)}</strong></button>`;
}
function businessTimelineRow(entry){
  const sale=entry.type==='sale';const row=entry.row;
  return `<div class="timeline-row"><span class="timeline-dot"></span><div><b>${sale?'Venta de armas':'Compra de meta'}</b><p>${sale?`${esc(row.itemName)} × ${row.quantity}`:`${Number(row.grams)||0} g · ${esc(row.provider||'Sin proveedor')}`}</p></div><time>${fmtRelative(row.date)}</time></div>`;
}
function weaponSalesHtml(rows){
  const sorted=[...rows].sort((a,b)=>new Date(b.date)-new Date(a.date));
  return `<section class="card table-card business-table-card"><div class="section-head business-table-head"><div><span class="eyebrow">Comercial</span><h2>Venta de armas</h2><p>Stock, cobros y responsables de cada operación.</p></div><button class="btn primary" id="salesAddInline">+ Nueva venta</button></div>${sorted.length?`<div class="table-scroll"><table class="data-table"><thead><tr><th>Fecha</th><th>Arma</th><th>Comprador</th><th>Origen</th><th>Total</th><th>Cobrado</th><th>Estado</th><th></th></tr></thead><tbody>${sorted.map(x=>`<tr><td>${fmtDate(x.date)}</td><td><b>${esc(x.itemName)}</b><br><small>${x.quantity} unidades</small></td><td>${esc(x.buyer||'—')}</td><td>${esc(x.propertyName||'—')}</td><td>${formatUSD(x.total)}</td><td>${formatUSD(x.paidAmount)}</td><td><span class="pill ${businessStatusClass(x.status)}">${businessStatusLabel(x.status,'sale')}</span></td><td><button class="btn small business-edit-sale" data-id="${x.id}">Editar</button></td></tr>`).join('')}</tbody></table></div>`:'<div class="empty-state"><h3>Sin ventas registradas</h3><p>Registrá la primera venta de armas para controlar stock y pagos.</p></div>'}</section>`;
}
function metaPurchasesHtml(rows){
  const sorted=[...rows].sort((a,b)=>new Date(b.date)-new Date(a.date));
  return `<section class="card table-card business-table-card"><div class="section-head business-table-head"><div><span class="eyebrow">Abastecimiento</span><h2>Compra de meta</h2><p>Compras en gramos, pagos y propiedad de destino.</p></div><button class="btn primary" id="metaAddInline">+ Nueva compra</button></div>${sorted.length?`<div class="table-scroll"><table class="data-table"><thead><tr><th>Fecha</th><th>Cantidad</th><th>Proveedor</th><th>Destino</th><th>USD/g</th><th>Total</th><th>Estado</th><th></th></tr></thead><tbody>${sorted.map(x=>`<tr><td>${fmtDate(x.date)}</td><td><b>${Number(x.grams)||0} g</b></td><td>${esc(x.provider||'—')}</td><td>${esc(x.propertyName||'—')}</td><td>${formatUSD(x.pricePerGram)}</td><td>${formatUSD(x.total)}</td><td><span class="pill ${businessStatusClass(x.status)}">${businessStatusLabel(x.status,'purchase')}</span></td><td><button class="btn small business-edit-meta" data-id="${x.id}">Editar</button></td></tr>`).join('')}</tbody></table></div>`:'<div class="empty-state"><h3>Sin compras registradas</h3><p>Registrá la primera compra de meta en gramos.</p></div>'}</section>`;
}
function weaponCatalogHtml(rows){
  return `<section class="card section-card"><div class="section-head"><div><span class="eyebrow">Precios sugeridos</span><h2>Catálogo de armas</h2><p>Estos valores se completan automáticamente al registrar una venta.</p></div><button class="btn primary" id="catalogAdd">+ Agregar arma</button></div>${rows.length?`<div class="catalog-grid">${rows.map(x=>`<button class="catalog-card" data-catalog-id="${x.id}"><span>Arma</span><b>${esc(x.name)}</b><strong>${formatUSD(x.defaultPrice)}</strong><small>Precio unitario</small></button>`).join('')}</div>`:'<div class="empty-state"><h3>Catálogo vacío</h3><p>Agregá armas y precios sugeridos. El stock real seguirá administrándose en Propiedades.</p></div>'}</section>`;
}
function bindBusinessContent(){
  $('#salesAddInline')?.addEventListener('click',()=>openWeaponSaleModal());
  $('#metaAddInline')?.addEventListener('click',()=>openMetaPurchaseModal());
  $('#catalogAdd')?.addEventListener('click',()=>openCatalogModal());
  $$('.business-edit-sale').forEach(x=>x.addEventListener('click',()=>openWeaponSaleModal(x.dataset.id)));
  $$('.business-edit-meta').forEach(x=>x.addEventListener('click',()=>openMetaPurchaseModal(x.dataset.id)));
  $$('.catalog-card').forEach(x=>x.addEventListener('click',()=>openCatalogModal(x.dataset.catalogId)));
  $$('[data-business-edit]').forEach(x=>x.addEventListener('click',()=>x.dataset.businessEdit==='sale'?openWeaponSaleModal(x.dataset.id):openMetaPurchaseModal(x.dataset.id)));
}
function localDateTimeValue(value=new Date()){
  const d=new Date(value);d.setMinutes(d.getMinutes()-d.getTimezoneOffset());return d.toISOString().slice(0,16);
}
function openWeaponSaleModal(id=null){
  const b=ensureBusiness();const existing=id?b.weaponSales.find(x=>x.id===id):null;
  const entries=inventoryEntries();
  if(!entries.length&&!existing){toast('Primero agregá armas al inventario de una propiedad');navigate('logistics');return}
  const sale=existing||{date:new Date().toISOString(),inventoryKey:entries[0]?.key||'',quantity:1,unitPrice:0,buyer:'',responsible:'',status:'pending',paidAmount:0,paymentMethod:'',notes:''};
  const currentKey=existing?saleInventoryKey(existing):sale.inventoryKey;
  openModal(existing?'Editar venta de armas':'Nueva venta de armas',`<div class="form-grid">
    <div class="field full"><label>Arma y propiedad de origen</label><select id="saleInventory">${entries.map(x=>`<option value="${x.key}" ${x.key===currentKey?'selected':''}>${esc(x.item.name)} · ${esc(x.property.name)} (${Number(x.item.quantity)||0} ${esc(x.item.unit||'u')})</option>`).join('')}</select><small class="field-hint" id="saleStockHint"></small></div>
    <div class="field"><label>Cantidad</label><input id="saleQty" type="number" min="1" step="1" value="${Number(sale.quantity)||1}"></div>
    <div class="field"><label>Precio unitario (USD)</label><input id="saleUnitPrice" type="number" min="0" step="0.01" value="${Number(sale.unitPrice)||0}"></div>
    <div class="field"><label>Total (USD)</label><input id="saleTotal" readonly value="${Number(sale.total)||0}"></div>
    <div class="field"><label>Comprador / organización</label><input id="saleBuyer" value="${esc(sale.buyer||'')}"></div>
    <div class="field"><label>Responsable</label><input id="saleResponsible" value="${esc(sale.responsible||'')}"></div>
    <div class="field"><label>Estado del pago</label><select id="saleStatus"><option value="pending" ${sale.status==='pending'?'selected':''}>Pendiente</option><option value="partial" ${sale.status==='partial'?'selected':''}>Pago parcial</option><option value="paid" ${sale.status==='paid'?'selected':''}>Pagada</option><option value="cancelled" ${sale.status==='cancelled'?'selected':''}>Cancelada</option></select></div>
    <div class="field"><label>Monto cobrado (USD)</label><input id="salePaid" type="number" min="0" step="0.01" value="${Number(sale.paidAmount)||0}"></div>
    <div class="field"><label>Método de pago</label><input id="saleMethod" value="${esc(sale.paymentMethod||'')}"></div>
    <div class="field"><label>Fecha y hora</label><input id="saleDate" type="datetime-local" value="${localDateTimeValue(sale.date)}"></div>
    <div class="field full"><label>Notas</label><textarea id="saleNotes">${esc(sale.notes||'')}</textarea></div>
  </div>${existing?'<div class="modal-danger-zone"><button class="btn danger" id="deleteSale">Eliminar venta</button></div>':''}`,()=>{
    const entry=inventoryEntry($('#saleInventory').value);if(!entry)return toast('Seleccioná un objeto válido');
    const qty=Math.max(1,Number($('#saleQty').value)||1);const unitPrice=Math.max(0,Number($('#saleUnitPrice').value)||0);const total=qty*unitPrice;const status=$('#saleStatus').value;
    const available=(Number(entry.item.quantity)||0)+(existing?.stockApplied&&saleInventoryKey(existing)===entry.key?(Number(existing.quantity)||0):0);
    if(status!=='cancelled'&&available<qty)return toast(`Stock insuficiente: hay ${available} disponibles`);
    if(existing)rollbackSaleStock(existing);
    const obj=existing||{id:uid('sale')};
    Object.assign(obj,{propertyId:entry.property.id,propertyName:entry.property.name,categoryId:entry.category.id,itemId:entry.item.id,itemName:entry.item.name,quantity:qty,unitPrice,total,buyer:$('#saleBuyer').value.trim(),responsible:$('#saleResponsible').value.trim(),status,paymentMethod:$('#saleMethod').value.trim(),date:new Date($('#saleDate').value).toISOString(),notes:$('#saleNotes').value.trim()});
    let paid=Math.max(0,Number($('#salePaid').value)||0);if(status==='paid')paid=total;if(status==='pending'||status==='cancelled')paid=0;obj.paidAmount=Math.min(total,paid);
    if(!applySaleStock(obj)){if(existing)applySaleStock(existing);return toast('No se pudo descontar el inventario')}
    if(!existing)b.weaponSales.unshift(obj);
    logActivity(existing?'Venta de armas actualizada':'Venta de armas registrada',`${obj.itemName} × ${obj.quantity}`);persist('Venta guardada');closeModal();
  });
  const refresh=()=>{const entry=inventoryEntry($('#saleInventory').value);const qty=Math.max(1,Number($('#saleQty').value)||1);let price=Number($('#saleUnitPrice').value)||0;if(!price&&entry){price=catalogPriceFor(entry.item.name);if(price)$('#saleUnitPrice').value=price}$('#saleTotal').value=(qty*price).toFixed(2);$('#saleStockHint').textContent=entry?`Stock actual: ${Number(entry.item.quantity)||0} ${entry.item.unit||'unidades'}`:''};
  $('#saleInventory').addEventListener('change',()=>{$('#saleUnitPrice').value='';refresh()});$('#saleQty').addEventListener('input',refresh);$('#saleUnitPrice').addEventListener('input',refresh);$('#saleStatus').addEventListener('change',()=>{if($('#saleStatus').value==='paid')$('#salePaid').value=$('#saleTotal').value;if(['pending','cancelled'].includes($('#saleStatus').value))$('#salePaid').value=0});refresh();
  $('#deleteSale')?.addEventListener('click',()=>{if(!confirm('¿Eliminar esta venta? El stock será restaurado.'))return;rollbackSaleStock(existing);b.weaponSales=b.weaponSales.filter(x=>x.id!==existing.id);logActivity('Venta de armas eliminada',existing.itemName);saveData(data);closeModal();renderBusiness();toast('Venta eliminada')});
}
function openMetaPurchaseModal(id=null){
  const b=ensureBusiness();const existing=id?b.metaPurchases.find(x=>x.id===id):null;
  if(!data.properties.length&&!existing){toast('Primero creá una propiedad de destino');navigate('logistics');return}
  const purchase=existing||{date:new Date().toISOString(),propertyId:data.properties[0]?.id||'',grams:0,pricePerGram:0,provider:'',responsible:'',status:'requested',paidAmount:0,paymentMethod:'',notes:''};
  openModal(existing?'Editar compra de meta':'Nueva compra de meta',`<div class="form-grid">
    <div class="field"><label>Cantidad (g)</label><input id="metaGrams" type="number" min="0" step="1" value="${Number(purchase.grams)||0}"></div>
    <div class="field"><label>Precio por gramo (USD)</label><input id="metaPrice" type="number" min="0" step="0.01" value="${Number(purchase.pricePerGram)||0}"></div>
    <div class="field"><label>Total (USD)</label><input id="metaTotal" readonly value="${Number(purchase.total)||0}"></div>
    <div class="field"><label>Proveedor</label><input id="metaProvider" value="${esc(purchase.provider||'')}"></div>
    <div class="field"><label>Propiedad de destino</label><select id="metaProperty">${data.properties.map(p=>`<option value="${p.id}" ${purchase.propertyId===p.id?'selected':''}>${esc(p.name)}</option>`).join('')}</select></div>
    <div class="field"><label>Responsable</label><input id="metaResponsible" value="${esc(purchase.responsible||'')}"></div>
    <div class="field"><label>Estado</label><select id="metaStatus"><option value="requested" ${purchase.status==='requested'?'selected':''}>Solicitada</option><option value="pending_payment" ${purchase.status==='pending_payment'?'selected':''}>Pendiente de pago</option><option value="paid" ${purchase.status==='paid'?'selected':''}>Pagada</option><option value="received" ${purchase.status==='received'?'selected':''}>Recibida</option><option value="cancelled" ${purchase.status==='cancelled'?'selected':''}>Cancelada</option></select></div>
    <div class="field"><label>Monto pagado (USD)</label><input id="metaPaid" type="number" min="0" step="0.01" value="${Number(purchase.paidAmount)||0}"></div>
    <div class="field"><label>Método de pago</label><input id="metaMethod" value="${esc(purchase.paymentMethod||'')}"></div>
    <div class="field"><label>Fecha y hora</label><input id="metaDate" type="datetime-local" value="${localDateTimeValue(purchase.date)}"></div>
    <div class="field full"><label>Notas</label><textarea id="metaNotes">${esc(purchase.notes||'')}</textarea></div>
  </div>${existing?'<div class="modal-danger-zone"><button class="btn danger" id="deleteMetaPurchase">Eliminar compra</button></div>':''}`,()=>{
    const property=data.properties.find(p=>p.id===$('#metaProperty').value);if(!property)return toast('Seleccioná una propiedad');
    if(existing)rollbackMetaStock(existing);
    const grams=Math.max(0,Number($('#metaGrams').value)||0);const pricePerGram=Math.max(0,Number($('#metaPrice').value)||0);const total=grams*pricePerGram;const status=$('#metaStatus').value;
    const obj=existing||{id:uid('meta')};
    Object.assign(obj,{grams,pricePerGram,total,provider:$('#metaProvider').value.trim(),propertyId:property.id,propertyName:property.name,responsible:$('#metaResponsible').value.trim(),status,paymentMethod:$('#metaMethod').value.trim(),date:new Date($('#metaDate').value).toISOString(),notes:$('#metaNotes').value.trim()});
    let paid=Math.max(0,Number($('#metaPaid').value)||0);if(['paid','received'].includes(status)&&!paid)paid=total;if(['requested','cancelled'].includes(status))paid=0;obj.paidAmount=Math.min(total,paid);
    if(!applyMetaStock(obj))return toast('No se pudo ingresar la meta al inventario');
    if(!existing)b.metaPurchases.unshift(obj);
    logActivity(existing?'Compra de meta actualizada':'Compra de meta registrada',`${obj.grams} g`);persist('Compra guardada');closeModal();
  });
  const refresh=()=>{$('#metaTotal').value=((Number($('#metaGrams').value)||0)*(Number($('#metaPrice').value)||0)).toFixed(2)};$('#metaGrams').addEventListener('input',refresh);$('#metaPrice').addEventListener('input',refresh);$('#metaStatus').addEventListener('change',()=>{if(['paid','received'].includes($('#metaStatus').value))$('#metaPaid').value=$('#metaTotal').value;if(['requested','cancelled'].includes($('#metaStatus').value))$('#metaPaid').value=0});refresh();
  $('#deleteMetaPurchase')?.addEventListener('click',()=>{if(!confirm('¿Eliminar esta compra? Si ya fue recibida, se descontará del inventario.'))return;rollbackMetaStock(existing);b.metaPurchases=b.metaPurchases.filter(x=>x.id!==existing.id);logActivity('Compra de meta eliminada',`${existing.grams} g`);saveData(data);closeModal();renderBusiness();toast('Compra eliminada')});
}
function openCatalogModal(id=null){
  const b=ensureBusiness();const existing=id?b.weaponCatalog.find(x=>x.id===id):null;const row=existing||{name:'',defaultPrice:0,notes:''};
  openModal(existing?'Editar arma del catálogo':'Nueva arma en catálogo',`<div class="form-grid"><div class="field"><label>Nombre del arma</label><input id="catalogName" value="${esc(row.name)}"></div><div class="field"><label>Precio unitario (USD)</label><input id="catalogPrice" type="number" min="0" step="0.01" value="${Number(row.defaultPrice)||0}"></div><div class="field full"><label>Notas</label><textarea id="catalogNotes">${esc(row.notes||'')}</textarea></div></div>${existing?'<div class="modal-danger-zone"><button class="btn danger" id="deleteCatalog">Eliminar del catálogo</button></div>':''}`,()=>{const obj=existing||{id:uid('catalog')};obj.name=$('#catalogName').value.trim()||'Arma';obj.defaultPrice=Math.max(0,Number($('#catalogPrice').value)||0);obj.notes=$('#catalogNotes').value.trim();if(!existing)b.weaponCatalog.push(obj);logActivity(existing?'Precio de arma actualizado':'Arma agregada al catálogo',obj.name);persist('Catálogo guardado');closeModal()});
  $('#deleteCatalog')?.addEventListener('click',()=>{if(!confirm('¿Eliminar esta arma del catálogo?'))return;b.weaponCatalog=b.weaponCatalog.filter(x=>x.id!==existing.id);saveData(data);closeModal();renderBusiness();toast('Arma eliminada del catálogo')});
}


function renderLogistics(){
  const root=$('#logistics');
  root.innerHTML=`<div class="section-head"><div><h2>Propiedades</h2><p>Cada propiedad tiene sus propias categorías y objetos.</p></div><button class="btn primary" id="newProperty">+ Nueva propiedad</button></div>
  ${data.properties.length?`<div class="property-grid">${data.properties.map(p=>propertyCard(p)).join('')}</div>`:'<div class="card empty-state"><h3>Sin propiedades</h3><p>Creá una casa, depósito, galpón o cualquier otro lugar desde acá.</p></div>'}`;
  $('#newProperty').addEventListener('click',()=>openPropertyModal());
  $$('.property-card').forEach(c=>c.addEventListener('click',()=>openPropertyDetail(c.dataset.id)));
}
function propertyCard(p){const items=(p.categories||[]).flatMap(c=>c.items||[]);return `<div class="card property-card" data-id="${p.id}"><div class="property-icon">${esc(p.icon||'🏠')}</div><h3>${esc(p.name)}</h3><p>${esc(p.type||'Propiedad')} · ${p.categories?.length||0} categorías</p><div class="stock-list"><div class="stock-item"><span>Objetos distintos</span><b>${items.length}</b></div><div class="stock-item"><span>Unidades totales</span><b>${items.reduce((n,i)=>n+(Number(i.quantity)||0),0)}</b></div></div></div>`}
function openPropertyModal(existing=null){
  const p=existing||{name:'',type:'Casa',icon:'🏠',notes:''};
  openModal(existing?'Editar propiedad':'Nueva propiedad',`<div class="form-grid"><div class="field"><label>Nombre</label><input id="pName" value="${esc(p.name)}"></div><div class="field"><label>Tipo</label><input id="pType" value="${esc(p.type)}"></div><div class="field"><label>Icono</label><input id="pIcon" value="${esc(p.icon)}"></div><div class="field full"><label>Notas</label><textarea id="pNotes">${esc(p.notes||'')}</textarea></div></div>`,()=>{
    const obj=existing||{id:uid('property'),categories:[]};obj.name=$('#pName').value.trim()||'Propiedad';obj.type=$('#pType').value.trim();obj.icon=$('#pIcon').value.trim()||'🏠';obj.notes=$('#pNotes').value.trim();if(!existing)data.properties.push(obj);logActivity(existing?'Propiedad editada':'Propiedad creada',obj.name);persist('Propiedad guardada');closeModal();
  });
}
function openPropertyDetail(id){
  const p=data.properties.find(x=>x.id===id);if(!p)return;
  openModal(p.name,`<div class="section-head"><div><p>${esc(p.type||'Propiedad')}</p></div><div class="btn-row"><button class="btn small" id="editP">Editar</button><button class="btn small primary" id="newCategory">+ Categoría</button></div></div><div id="categoryList">${(p.categories||[]).length?p.categories.map(c=>`<div class="card section-card" style="margin-bottom:10px"><div class="section-head"><div><h2>${esc(c.name)}</h2><p>${(c.items||[]).length} objetos</p></div><button class="btn small primary addItem" data-c="${c.id}">+ Objeto</button></div>${(c.items||[]).length?`<table class="data-table"><tbody>${c.items.map(i=>`<tr><td><b>${esc(i.name)}</b><br><small style="color:var(--muted)">${esc(i.unit||'unidades')}</small></td><td style="width:120px"><input class="itemQty" data-c="${c.id}" data-i="${i.id}" type="number" value="${Number(i.quantity)||0}" style="width:90px;background:#0c1018;color:#fff;border:1px solid var(--line);border-radius:8px;padding:7px"></td><td><button class="btn small danger removeItem" data-c="${c.id}" data-i="${i.id}">Quitar</button></td></tr>`).join('')}</tbody></table>`:'<p style="color:var(--muted);font-size:12px">Sin objetos.</p>'}</div>`).join(''):'<div class="empty-state">Todavía no hay categorías.</div>'}</div>`,null,{hideSave:true});
  $('#editP').addEventListener('click',()=>{closeModal();openPropertyModal(p)});
  $('#newCategory').addEventListener('click',()=>promptCategory(p));
  $$('.addItem').forEach(b=>b.addEventListener('click',()=>promptItem(p,b.dataset.c)));
  $$('.itemQty').forEach(i=>i.addEventListener('change',()=>{const c=p.categories.find(x=>x.id===i.dataset.c),item=c.items.find(x=>x.id===i.dataset.i);item.quantity=Math.max(0,Number(i.value)||0);saveData(data);toast('Cantidad actualizada')}));
  $$('.removeItem').forEach(b=>b.addEventListener('click',()=>{const c=p.categories.find(x=>x.id===b.dataset.c);c.items=c.items.filter(i=>i.id!==b.dataset.i);saveData(data);closeModal();openPropertyDetail(p.id)}));
}
function promptCategory(p){openModal('Nueva categoría',`<div class="field"><label>Nombre</label><input id="catName" placeholder="Armas, materiales, documentos..."></div>`,()=>{p.categories=p.categories||[];p.categories.push({id:uid('cat'),name:$('#catName').value.trim()||'Categoría',items:[]});saveData(data);closeModal();openPropertyDetail(p.id)})}
function promptItem(p,cid){openModal('Nuevo objeto',`<div class="form-grid"><div class="field"><label>Nombre</label><input id="itemName"></div><div class="field"><label>Cantidad</label><input id="itemQty" type="number" value="0"></div><div class="field"><label>Unidad</label><input id="itemUnit" value="unidades"></div></div>`,()=>{const c=p.categories.find(x=>x.id===cid);c.items.push({id:uid('item'),name:$('#itemName').value.trim()||'Objeto',quantity:Number($('#itemQty').value)||0,unit:$('#itemUnit').value.trim()||'unidades'});saveData(data);closeModal();openPropertyDetail(p.id)})}

function renderEvents(){
  const root=$('#events');const sorted=[...data.events].sort((a,b)=>new Date(a.date)-new Date(b.date));
  root.innerHTML=`<div class="section-head"><div><h2>Agenda</h2><p>Turnos, invasiones, cortes y recordatorios.</p></div><button class="btn primary" id="newEvent">+ Nuevo evento</button></div><div class="card table-card">${sorted.length?`<table class="data-table"><thead><tr><th>Evento</th><th>Fecha</th><th>Tipo</th><th>Notas</th><th></th></tr></thead><tbody>${sorted.map(e=>`<tr><td><b>${esc(e.name)}</b></td><td>${fmtDate(e.date)}</td><td><span class="pill">${esc(e.type||'Evento')}</span></td><td>${esc(e.notes||'')}</td><td><button class="btn small danger removeEvent" data-id="${e.id}">Eliminar</button></td></tr>`).join('')}</tbody></table>`:'<div class="empty-state">No hay eventos cargados.</div>'}</div>`;
  $('#newEvent').addEventListener('click',openEventModal);$$('.removeEvent').forEach(b=>b.addEventListener('click',()=>{data.events=data.events.filter(e=>e.id!==b.dataset.id);persist('Evento eliminado')}));
}
function openEventModal(){const local=new Date(Date.now()+36e5);local.setMinutes(local.getMinutes()-local.getTimezoneOffset());openModal('Nuevo evento',`<div class="form-grid"><div class="field"><label>Nombre</label><input id="eName"></div><div class="field"><label>Tipo</label><input id="eType" placeholder="Invasión, corte, reunión..."></div><div class="field"><label>Fecha y hora</label><input id="eDate" type="datetime-local" value="${local.toISOString().slice(0,16)}"></div><div class="field full"><label>Notas</label><textarea id="eNotes"></textarea></div></div>`,()=>{data.events.push({id:uid('event'),name:$('#eName').value.trim()||'Evento',type:$('#eType').value.trim()||'Evento',date:new Date($('#eDate').value).toISOString(),notes:$('#eNotes').value.trim()});logActivity('Evento creado',$('#eName').value);persist('Evento creado');closeModal()})}

function renderMembers(){
  const root=$('#members');
  const members=data.members||[];
  const active=members.filter(m=>(m.status||'active')==='active').length;
  root.innerHTML=`
    <div class="section-head">
      <div><h2>Integrantes</h2><p>Perfiles, roles y estado de los miembros del workspace.</p></div>
      <button class="btn primary" id="newMember">+ Nuevo integrante</button>
    </div>
    <div class="member-summary-grid">
      <div class="card stat-card"><span class="label">Total</span><strong>${members.length}</strong><small>Integrantes registrados</small></div>
      <div class="card stat-card"><span class="label">Activos</span><strong>${active}</strong><small>Disponibles actualmente</small></div>
      <div class="card stat-card"><span class="label">Inactivos</span><strong>${members.length-active}</strong><small>Ausentes o pausados</small></div>
    </div>
    ${members.length?`<div class="members-grid">${members.map(memberCardHtml).join('')}</div>`:'<button class="card members-empty" id="emptyNewMember"><span>👥</span><h3>Todavía no hay integrantes</h3><p>Creá el primer perfil para mostrar el equipo en el Dashboard.</p><b>+ Agregar integrante</b></button>'}`;
  $('#newMember')?.addEventListener('click',()=>openMemberModal());
  $('#emptyNewMember')?.addEventListener('click',()=>openMemberModal());
  $$('.member-card').forEach(card=>card.addEventListener('click',()=>openMemberModal(card.dataset.id)));
}
function memberCardHtml(m){
  return `<button class="card member-card" data-id="${m.id}">
    <div class="member-card-top">${memberAvatarHtml(m)}<span class="member-card-status ${m.status==='inactive'?'inactive':''}">${m.status==='inactive'?'Inactivo':'Activo'}</span></div>
    <h3>${esc(m.name)}</h3>
    <p>${esc(m.role||'Sin rol asignado')}</p>
    ${m.notes?`<small>${esc(m.notes)}</small>`:''}
    <span class="member-card-arrow">Editar →</span>
  </button>`;
}
function openMemberModal(id=null){
  const existing=id?(data.members||[]).find(m=>m.id===id):null;
  const m=existing||{name:'',role:'',status:'active',color:data.workspace.color,notes:'',avatar:''};
  openModal(existing?'Editar integrante':'Nuevo integrante',`<div class="form-grid">
    <div class="field"><label>Nombre</label><input id="mName" value="${esc(m.name)}" placeholder="Nombre del integrante"></div>
    <div class="field"><label>Rol</label><input id="mRole" value="${esc(m.role||'')}" placeholder="Líder, logística, operaciones..."></div>
    <div class="field"><label>Estado</label><select id="mStatus"><option value="active" ${m.status!=='inactive'?'selected':''}>Activo</option><option value="inactive" ${m.status==='inactive'?'selected':''}>Inactivo</option></select></div>
    <div class="field"><label>Color del perfil</label><input id="mColor" type="color" value="${m.color||data.workspace.color}"></div>
    <div class="field full"><label>URL de avatar (opcional)</label><input id="mAvatar" value="${esc(m.avatar||'')}" placeholder="https://..."></div>
    <div class="field full"><label>Notas</label><textarea id="mNotes" placeholder="Responsabilidades o información útil">${esc(m.notes||'')}</textarea></div>
  </div>${existing?'<div class="modal-danger-zone"><button class="btn danger" id="deleteMember">Eliminar integrante</button></div>':''}`,()=>{
    const obj=existing||{id:uid('member')};
    obj.name=$('#mName').value.trim()||'Integrante';
    obj.role=$('#mRole').value.trim();
    obj.status=$('#mStatus').value;
    obj.color=$('#mColor').value;
    obj.avatar=$('#mAvatar').value.trim();
    obj.notes=$('#mNotes').value.trim();
    if(!existing){data.members=data.members||[];data.members.push(obj)}
    logActivity(existing?'Integrante actualizado':'Integrante agregado',obj.name);
    persist('Integrante guardado');
    closeModal();
  });
  $('#deleteMember')?.addEventListener('click',()=>{if(!confirm('¿Eliminar este integrante?'))return;data.members=data.members.filter(x=>x.id!==existing.id);logActivity('Integrante eliminado',existing.name);saveData(data);closeModal();renderMembers();toast('Integrante eliminado')});
}

function renderBuilder(){
  const root=$('#builder');const types=[['territories','Territorios'],['organizations','Organizaciones'],['properties','Propiedades']];
  const list=builderType==='territories'?data.territories:builderType==='organizations'?data.organizations:data.properties;
  const selected=list.find(x=>x.id===builderSelectedId)||list[0];builderSelectedId=selected?.id||null;
  root.innerHTML=`<div class="builder-tabs">${types.map(([k,n])=>`<button class="tool-btn ${builderType===k?'active':''}" data-builder="${k}">${n}</button>`).join('')}</div><div class="builder-layout"><div class="card entity-list"><button class="btn primary full" id="builderNew">+ Crear</button><div style="height:8px"></div>${list.map(x=>`<div class="entity-row ${x.id===builderSelectedId?'active':''}" data-entity="${x.id}"><span class="swatch" style="background:${x.color||getOrg(x.ownerId).color||'#778'}"></span><div><strong>${esc(x.name)}</strong><small>${builderType==='territories'?priorityLabel(x.priority):builderType==='organizations'?esc(x.relation||'sin relación'):esc(x.type||'propiedad')}</small></div></div>`).join('')}</div><div class="card form-card">${selected?builderForm(selected):'<div class="empty-state">Creá el primer elemento.</div>'}</div></div>`;
  $$('[data-builder]').forEach(b=>b.addEventListener('click',()=>{builderType=b.dataset.builder;builderSelectedId=null;renderBuilder()}));
  $$('.entity-row').forEach(r=>r.addEventListener('click',()=>{builderSelectedId=r.dataset.entity;renderBuilder()}));
  $('#builderNew').addEventListener('click',()=>{if(builderType==='territories')openTerritoryModal(null,'city');else if(builderType==='organizations')openOrgModal();else openPropertyModal()});
  bindBuilderForm(selected);
}
function builderForm(x){
  if(builderType==='territories')return `<div class="section-head"><div><h2>${esc(x.name)}</h2><p>Territorio configurable.</p></div><button class="btn danger" id="builderDelete">Eliminar</button></div><div class="form-grid"><div class="field"><label>Nombre</label><input id="bName" value="${esc(x.name)}"></div><div class="field"><label>Mapa</label><select id="bMap">${data.maps.map(m=>`<option value="${m.id}" ${x.mapId===m.id?'selected':''}>${esc(m.name)}</option>`).join('')}</select></div><div class="field"><label>Controla</label><select id="bOwner">${data.organizations.map(o=>`<option value="${o.id}" ${x.ownerId===o.id?'selected':''}>${esc(o.name)}</option>`).join('')}</select></div><div class="field"><label>Prioridad</label><select id="bPriority"><option value="maintain" ${x.priority==='maintain'?'selected':''}>Mantener</option><option value="conquer" ${x.priority==='conquer'?'selected':''}>Conquistar</option><option value="ignore" ${x.priority==='ignore'?'selected':''}>Ignorar</option></select></div><div class="field"><label>Reputación</label><select id="bRep">${[[10,'Muy baja'],[25,'Baja'],[50,'Media'],[75,'Alta'],[100,'Muy alta'],[101,'Conquistado']].map(([v,n])=>`<option value="${v}" ${Number(x.reputation)===v?'selected':''}>${n}</option>`).join('')}</select></div><div class="field full"><label>Notas</label><textarea id="bNotes">${esc(x.notes||'')}</textarea></div></div><div class="btn-row" style="margin-top:14px"><button class="btn primary" id="builderSave">Guardar cambios</button><button class="btn" id="openOnMap">Abrir en mapa</button></div>`;
  if(builderType==='organizations')return `<div class="section-head"><div><h2>${esc(x.name)}</h2><p>Organización y relación.</p></div><button class="btn danger" id="builderDelete">Eliminar</button></div><div class="form-grid"><div class="field"><label>Nombre</label><input id="bName" value="${esc(x.name)}"></div><div class="field"><label>Color</label><input id="bColor" type="color" value="${x.color||'#777777'}"></div><div class="field"><label>Relación</label><select id="bRelation"><option value="own" ${x.relation==='own'?'selected':''}>Propia</option><option value="allied" ${x.relation==='allied'?'selected':''}>Aliada</option><option value="neutral" ${x.relation==='neutral'?'selected':''}>Neutral</option><option value="hostile" ${x.relation==='hostile'?'selected':''}>Hostil</option><option value="unknown" ${x.relation==='unknown'?'selected':''}>Sin definir</option></select></div></div><div class="btn-row" style="margin-top:14px"><button class="btn primary" id="builderSave">Guardar cambios</button></div>`;
  return `<div class="section-head"><div><h2>${esc(x.name)}</h2><p>${esc(x.type||'Propiedad')}</p></div><button class="btn danger" id="builderDelete">Eliminar</button></div><p style="color:var(--muted)">Las categorías y objetos se administran desde Logistics.</p><div class="btn-row"><button class="btn" id="openProperty">Abrir propiedad</button></div>`;
}
function bindBuilderForm(x){if(!x)return;$('#builderSave')?.addEventListener('click',()=>{x.name=$('#bName').value.trim()||x.name;if(builderType==='territories'){x.mapId=$('#bMap').value;x.ownerId=$('#bOwner').value;x.priority=$('#bPriority').value;x.reputation=Number($('#bRep').value);x.notes=$('#bNotes').value.trim()}else{x.color=$('#bColor').value;x.relation=$('#bRelation').value}persist('Cambios guardados')});$('#builderDelete')?.addEventListener('click',()=>{if(!confirm('¿Eliminar este elemento?'))return;if(builderType==='territories')data.territories=data.territories.filter(t=>t.id!==x.id);else if(builderType==='organizations')data.organizations=data.organizations.filter(o=>o.id!==x.id);else data.properties=data.properties.filter(p=>p.id!==x.id);builderSelectedId=null;persist('Elemento eliminado')});$('#openOnMap')?.addEventListener('click',()=>{selectedTerritoryId=x.id;selectedMapId=x.mapId;navigate('operations')});$('#openProperty')?.addEventListener('click',()=>{navigate('logistics');setTimeout(()=>openPropertyDetail(x.id),0)})}
function openTerritoryModal(id,mapId='city'){
  const existing=id?getTerritory(id):null;const t=existing||{name:'',mapId,x:50,y:50,ownerId:'none',priority:'conquer',reputation:10,notes:'',graffitis:[]};
  openModal(existing?'Editar territorio':'Nuevo territorio',`<div class="form-grid"><div class="field"><label>Nombre</label><input id="tName" value="${esc(t.name)}"></div><div class="field"><label>Mapa</label><select id="tMap">${data.maps.map(m=>`<option value="${m.id}" ${t.mapId===m.id?'selected':''}>${esc(m.name)}</option>`).join('')}</select></div><div class="field"><label>Controla</label><select id="tOwner">${data.organizations.map(o=>`<option value="${o.id}" ${t.ownerId===o.id?'selected':''}>${esc(o.name)}</option>`).join('')}</select></div><div class="field"><label>Prioridad</label><select id="tPriority"><option value="maintain" ${t.priority==='maintain'?'selected':''}>Mantener</option><option value="conquer" ${t.priority==='conquer'?'selected':''}>Conquistar</option><option value="ignore" ${t.priority==='ignore'?'selected':''}>Ignorar</option></select></div><div class="field"><label>Reputación</label><select id="tRep">${[[10,'Muy baja'],[25,'Baja'],[50,'Media'],[75,'Alta'],[100,'Muy alta'],[101,'Conquistado']].map(([v,n])=>`<option value="${v}" ${Number(t.reputation)===v?'selected':''}>${n}</option>`).join('')}</select></div><div class="field full"><label>Notas</label><textarea id="tNotes">${esc(t.notes||'')}</textarea></div></div>`,()=>{t.name=$('#tName').value.trim()||'Territorio';t.mapId=$('#tMap').value;t.ownerId=$('#tOwner').value;t.priority=$('#tPriority').value;t.reputation=Number($('#tRep').value);t.notes=$('#tNotes').value.trim();if(!existing){t.id=uid('territory');data.territories.push(t)}selectedTerritoryId=t.id;selectedMapId=t.mapId;logActivity(existing?'Territorio editado':'Territorio creado',t.name);persist('Territorio guardado');closeModal()});
}
function openOrgModal(){openModal('Nueva organización',`<div class="form-grid"><div class="field"><label>Nombre</label><input id="oName"></div><div class="field"><label>Color</label><input id="oColor" type="color" value="#7a8498"></div><div class="field"><label>Relación</label><select id="oRelation"><option value="neutral">Neutral</option><option value="hostile">Hostil</option><option value="allied">Aliada</option><option value="own">Propia</option></select></div></div>`,()=>{data.organizations.push({id:uid('org'),name:$('#oName').value.trim()||'Organización',color:$('#oColor').value,relation:$('#oRelation').value});persist('Organización creada');closeModal()})}

function renderSettings(){
  const root=$('#settings');
  root.innerHTML=`
    <div class="settings-layout">
      <div class="card form-card settings-identity-card">
        <div class="section-head"><div><span class="eyebrow">Workspace</span><h2>Identidad de la organización</h2><p>Esta información aparece en el Dashboard y en la navegación.</p></div></div>
        <div class="settings-logo-row">
          ${workspaceLogoHtml('workspace-logo-settings')}
          <div>
            <label class="btn" for="sLogoFile">Subir logo</label>
            <input id="sLogoFile" type="file" accept="image/png,image/jpeg,image/webp" hidden>
            ${data.workspace.logoImage?'<button class="btn danger" id="removeWorkspaceLogo">Quitar logo</button>':''}
            <p class="settings-help">PNG, JPG o WebP. Recomendado: imagen cuadrada.</p>
          </div>
        </div>
        <div class="form-grid">
          <div class="field"><label>Organización</label><input id="sName" value="${esc(data.workspace.name)}"></div>
          <div class="field"><label>Servidor</label><input id="sServer" value="${esc(data.workspace.server)}"></div>
          <div class="field"><label>Estado</label><input id="sStatus" value="${esc(data.workspace.status||'Activa')}" placeholder="Activa, en formación..."></div>
          <div class="field"><label>Color de la organización</label><input id="sColor" type="color" value="${data.workspace.color}"><small class="field-hint">Se usa en mapas, perfiles y datos propios. No cambia la interfaz monocromática.</small></div>
          <div class="field"><label>Inicial alternativa</label><input id="sLogo" value="${esc(data.workspace.logo||'F')}" maxlength="2"></div>
          <div class="field full"><label>Descripción breve</label><textarea id="sDescription" maxlength="220" placeholder="Breve descripción de la organización">${esc(data.workspace.description||'')}</textarea><small class="field-hint">Máximo 220 caracteres.</small></div>
        </div>
        <div class="btn-row" style="margin-top:18px"><button class="btn primary" id="saveIdentity">Guardar identidad</button><button class="btn" id="previewDashboard">Ver Dashboard</button></div>
      </div>

      <div class="card form-card">
        <div class="section-head"><div><span class="eyebrow">Servidor</span><h2>Reglas operativas</h2><p>Estas reglas alimentan los vencimientos y recomendaciones.</p></div></div>
        <div class="form-grid">
          <div class="field"><label>Duración del graffiti (horas)</label><input id="sDuration" type="number" value="${data.rules.graffitiDurationHours}"></div>
          <div class="field"><label>Graffitis para mantener</label><input id="sRequired" type="number" value="${data.rules.requiredGraffitis}"></div>
          <div class="field"><label>Graffitis para capturar territorio vacío</label><input id="sRequiredUnowned" type="number" value="${data.rules.requiredGraffitisUnowned||2}"></div>
          <div class="field"><label>Graffitis por turno</label><input id="sPerTurn" type="number" value="${data.rules.graffitisPerTurn}"></div>
          <div class="field"><label>Horarios (separados por coma)</label><input id="sTurns" value="${data.rules.turns.join(', ')}"></div>
        </div>
        <div class="btn-row" style="margin-top:18px"><button class="btn primary" id="saveRules">Guardar reglas</button></div>
      </div>

      <div class="card form-card settings-backup-card">
        <div class="section-head"><div><span class="eyebrow">Datos</span><h2>Respaldo del workspace</h2><p>Exportá todo el contenido o restablecé la configuración de demostración.</p></div></div>
        <div class="btn-row"><button class="btn" id="exportSettings">Exportar workspace</button><button class="btn danger" id="resetSettings">Restablecer demo</button></div>
      </div>
    </div>`;

  $('#saveIdentity').addEventListener('click',()=>{
    data.workspace.name=$('#sName').value.trim()||'Organización';
    data.workspace.server=$('#sServer').value.trim()||'Servidor';
    data.workspace.status=$('#sStatus').value.trim()||'Activa';
    data.workspace.color=$('#sColor').value;
    data.workspace.logo=$('#sLogo').value.trim().slice(0,2)||'F';
    data.workspace.description=$('#sDescription').value.trim().slice(0,220);
    saveData(data);applyBrand();logActivity('Identidad actualizada',data.workspace.name);toast('Identidad guardada');renderSettings();
  });
  $('#saveRules').addEventListener('click',()=>{
    data.rules.graffitiDurationHours=Math.max(1,Number($('#sDuration').value)||120);
    data.rules.requiredGraffitis=Math.max(1,Number($('#sRequired').value)||3);
    data.rules.requiredGraffitisUnowned=Math.max(1,Number($('#sRequiredUnowned').value)||2);
    data.rules.graffitisPerTurn=Math.max(1,Number($('#sPerTurn').value)||4);
    data.rules.turns=$('#sTurns').value.split(',').map(x=>x.trim()).filter(x=>/^\d{1,2}:\d{2}$/.test(x));
    if(!data.rules.turns.length)data.rules.turns=['10:00','22:00'];
    saveData(data);toast('Reglas guardadas');updateClock();renderSettings();
  });
  $('#sLogoFile').addEventListener('change',e=>{
    const file=e.target.files?.[0];if(!file)return;
    if(file.size>2.5*1024*1024){toast('El logo debe pesar menos de 2,5 MB');return}
    const reader=new FileReader();reader.onload=()=>{data.workspace.logoImage=String(reader.result||'');saveData(data);applyBrand();renderSettings();toast('Logo actualizado')};reader.readAsDataURL(file);
  });
  $('#removeWorkspaceLogo')?.addEventListener('click',()=>{data.workspace.logoImage='';saveData(data);applyBrand();renderSettings();toast('Logo eliminado')});
  $('#previewDashboard').addEventListener('click',()=>navigate('dashboard'));
  $('#exportSettings').addEventListener('click',()=>exportData(data));
  $('#resetSettings').addEventListener('click',()=>{if(confirm('Esto reemplaza los datos locales por la configuración de demostración.')){data=resetData();applyBrand();renderCurrent();toast('Workspace restablecido')}});
}


function openModal(title,body,onSave,opts={}){const host=$('#modalHost');host.classList.remove('hidden');host.innerHTML=`<div class="modal"><div class="modal-head"><h3>${esc(title)}</h3><button class="icon-btn" id="modalClose">✕</button></div><div class="modal-body">${body}</div><div class="modal-actions">${opts.hideSave?'':'<button class="btn" id="modalCancel">Cancelar</button><button class="btn primary" id="modalSave">Guardar</button>'}</div></div>`;$('#modalClose').addEventListener('click',closeModal);$('#modalCancel')?.addEventListener('click',closeModal);$('#modalSave')?.addEventListener('click',()=>onSave?.())}
function closeModal(){$('#modalHost').classList.add('hidden');$('#modalHost').innerHTML=''}
function toast(message){const el=document.createElement('div');el.className='toast';el.textContent=message;$('#toastHost').appendChild(el);setTimeout(()=>el.remove(),2600)}
function openSearch(){const palette=$('#searchPalette');palette.classList.remove('hidden');palette.innerHTML=`<div class="command-box"><input id="commandInput" placeholder="Buscar territorio, propiedad, negocio, acto delictivo, integrante, organización o evento..." autofocus><div class="command-results" id="commandResults"></div></div>`;const input=$('#commandInput');input.focus();const update=()=>{const q=input.value.toLowerCase().trim();const items=[...data.territories.map(x=>({type:'Territorio',name:x.name,action:()=>{selectedTerritoryId=x.id;selectedMapId=x.mapId;navigate('operations')}})),...data.properties.map(x=>({type:'Propiedad',name:x.name,action:()=>{navigate('logistics');setTimeout(()=>openPropertyDetail(x.id),0)}})),...data.organizations.map(x=>({type:'Organización',name:x.name,action:()=>{builderType='organizations';builderSelectedId=x.id;navigate('builder')}})),...data.events.map(x=>({type:'Evento',name:x.name,action:()=>navigate('events')})),...(data.criminalActs||[]).map(x=>({type:'Acto delictivo',name:x.name,action:()=>navigate('criminal')})),...(data.business?.weaponCatalog||[]).map(x=>({type:'Negocios · Arma',name:x.name,action:()=>{businessTab='catalog';navigate('business')}})),...(data.business?.weaponSales||[]).map(x=>({type:'Negocios · Venta',name:`${x.itemName} · ${x.buyer||'Venta'}`,action:()=>{businessTab='sales';navigate('business')}})),...(data.business?.metaPurchases||[]).map(x=>({type:'Negocios · Meta',name:`${x.grams} g · ${x.provider||'Compra'}`,action:()=>{businessTab='meta';navigate('business')}})),...data.members.map(x=>({type:'Integrante',name:x.name,action:()=>{navigate('members');setTimeout(()=>openMemberModal(x.id),0)}}))].filter(x=>!q||x.name.toLowerCase().includes(q)).slice(0,12);$('#commandResults').innerHTML=items.length?items.map((x,i)=>`<div class="command-item" data-command="${i}"><b>${esc(x.name)}</b><small>${x.type}</small></div>`).join(''):'<div class="empty-state">Sin resultados</div>';$$('[data-command]').forEach(el=>el.addEventListener('click',()=>{items[Number(el.dataset.command)].action();closeSearch()}))};input.addEventListener('input',update);update()}
function closeSearch(){$('#searchPalette').classList.add('hidden');$('#searchPalette').innerHTML=''}
function getTerritory(id){return data.territories.find(t=>t.id===id)}
function getOrg(id){return data.organizations.find(o=>o.id===id)||{name:'Sin definir',color:'#788296',relation:'unknown'}}
function priorityLabel(p){return p==='maintain'?'Mantener':p==='conquer'?'Conquistar':'Ignorar'}
function logActivity(action,target){data.activity.unshift({id:uid('activity'),action,target,date:new Date().toISOString()});data.activity=data.activity.slice(0,100)}
init();
})();
