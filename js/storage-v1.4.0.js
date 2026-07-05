import { DEFAULT_DATA } from './data-v1.4.0.js?v=1.4.0';
const KEY = 'factionos_workspace_v1';
const TERRITORY_RESET_REVISION = 1;
const clone = (v) => JSON.parse(JSON.stringify(v));

export function loadData(){
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
export function saveData(data){ localStorage.setItem(KEY, JSON.stringify(data)); }
export function resetData(){ localStorage.removeItem(KEY); return clone(DEFAULT_DATA); }
export function exportData(data){
  const blob = new Blob([JSON.stringify(data,null,2)],{type:'application/json'});
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = `FactionOS-${(data.workspace?.name||'workspace').replace(/\s+/g,'-')}.json`;
  a.click();
  URL.revokeObjectURL(a.href);
}
export async function importData(file){
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
