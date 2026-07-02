import { DEFAULT_DATA } from './data.js';
const KEY = 'factionos_workspace_v1';
const clone = (v) => JSON.parse(JSON.stringify(v));
export function loadData(){
  try{
    const raw = localStorage.getItem(KEY);
    if(!raw) return clone(DEFAULT_DATA);
    const parsed = JSON.parse(raw);
    return mergeDefaults(parsed);
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
  return mergeDefaults(parsed);
}
function mergeDefaults(data){
  const base = clone(DEFAULT_DATA);
  return {
    ...base,
    ...data,
    workspace:{...base.workspace,...data.workspace},
    rules:{...base.rules,...data.rules},
    organizations:Array.isArray(data.organizations)?data.organizations:base.organizations,
    maps:base.maps,
    territories:Array.isArray(data.territories)?data.territories:base.territories,
    properties:Array.isArray(data.properties)?data.properties:[],
    events:Array.isArray(data.events)?data.events:[],
    members:Array.isArray(data.members)?data.members:base.members,
    activity:Array.isArray(data.activity)?data.activity:[]
  };
}
