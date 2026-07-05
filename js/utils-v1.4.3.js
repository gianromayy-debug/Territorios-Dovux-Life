export const uid = (prefix='id') => `${prefix}-${Date.now().toString(36)}-${Math.random().toString(36).slice(2,7)}`;
export const esc = (s='') => String(s).replace(/[&<>'"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[c]));
export const fmtDate = (value) => new Intl.DateTimeFormat('es-AR',{dateStyle:'short',timeStyle:'short'}).format(new Date(value));
export function reputationLabel(v){
  const n=Number(v)||0;
  if(n>=101) return 'Conquistado';
  if(n>=100) return 'Muy alta';
  if(n>=75) return 'Alta';
  if(n>=50) return 'Media';
  if(n>=25) return 'Baja';
  return 'Muy baja';
}
export function reputationPercent(v){ return Math.max(0,Math.min(100,Number(v)||0)); }
export function hoursUntil(value){ return (new Date(value).getTime()-Date.now())/36e5; }
export function activeGraffitis(t){ return (t.graffitis||[]).filter(g=>new Date(g.expiresAt)>new Date()); }
export function isUnownedTerritory(t){ return !t?.ownerId || t.ownerId==='none'; }
export function requiredGraffitisFor(t,rules){
  const fallback=Math.max(1,Number(rules?.requiredGraffitis)||3);
  if(isUnownedTerritory(t)) return Math.max(1,Number(rules?.requiredGraffitisUnowned)||2);
  return fallback;
}
export function getNextTurn(turns){
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
export function countdownText(target){
  const ms=Math.max(0,target-Date.now());
  const h=Math.floor(ms/36e5), m=Math.floor((ms%36e5)/6e4);
  return `${h}h ${m}m restantes`;
}
export function territoryState(t,rules){
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
export function recommendation(data){
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
