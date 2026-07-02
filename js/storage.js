function defaultState(){return{version:2,currentMap:'ls',territories:[]}}
function loadState(){
  const saved=localStorage.getItem(CONFIG.storageKey); if(saved){try{return JSON.parse(saved)}catch(e){}}
  const legacy=localStorage.getItem(CONFIG.legacyKey); if(legacy){try{const old=JSON.parse(legacy); return migrateLegacy(old)}catch(e){}}
  return defaultState();
}
function migrateLegacy(old){
  return {version:2,currentMap:old.currentMap||'ls',territories:(old.territories||[]).map(t=>({
    id:t.id,map:t.map||'ls',points:t.points||[],name:t.name||'',gang:t.gang||'Neutral',priority:t.priority||'ignorar',rep:Number(t.rep||0),notes:t.notes||'',sprays:Array.from({length:Number(t.graffitis||0)},(_,i)=>({id:crypto.randomUUID?crypto.randomUUID():String(Date.now()+i),placedAt:new Date().toISOString(),by:''}))
  }))}
}
function saveState(){localStorage.setItem(CONFIG.storageKey,JSON.stringify(state));}
function exportState(){return JSON.stringify(state,null,2)}
function importState(json){const x=JSON.parse(json); if(!x.territories) throw new Error('JSON inválido'); state=x; saveState(); renderAll();}
