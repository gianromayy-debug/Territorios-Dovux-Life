function now(){return new Date()}
function sprayExpires(s){return new Date(new Date(s.placedAt).getTime()+CONFIG.sprayDurationMs)}
function activeSprays(t){const n=now(); return (t.sprays||[]).filter(s=>sprayExpires(s)>n)}
function cleanExpired(){state.territories.forEach(t=>t.sprays=activeSprays(t));}
function timeLeft(ms){if(ms<=0)return'vencido'; const h=Math.floor(ms/36e5), d=Math.floor(h/24), r=h%24; return d?`${d}d ${r}h`:`${h}h`}
function nextTurn(){const d=now(); const candidates=[]; for(let add=0;add<3;add++){CONFIG.turnHours.forEach(h=>{const c=new Date(d); c.setDate(c.getDate()+add); c.setHours(h,0,0,0); if(c>d)candidates.push(c);});} return candidates.sort((a,b)=>a-b)[0];}
function addSprayTo(t){t.sprays=t.sprays||[]; if(t.sprays.length>=3 && !confirm('Ya tiene 3 graffitis registrados. ¿Agregar igual?')) return; t.sprays.push({id:crypto.randomUUID?crypto.randomUUID():String(Date.now()),placedAt:new Date().toISOString(),by:''}); saveState(); renderAll(); selectTerritory(t.id);}
function clearTerritorySprays(t){t.sprays=[]; saveState(); renderAll(); selectTerritory(t.id);}
function sprayStatus(s){const left=sprayExpires(s)-now(); if(left<CONFIG.criticalMs)return'warn'; return'active';}
