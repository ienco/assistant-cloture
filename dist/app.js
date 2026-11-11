/* Assistant de clôture – ienco expertise. Fichier généré par build.py : ne pas modifier. */
(function(){
var mount = document.getElementById("ienco-app") || document.body.appendChild(document.createElement("div"));
window.IENCO_LOGO = "data:image/png;base64,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";
mount.innerHTML = "<header class=\"topbar\">\n  <button class=\"btn ghost menu-toggle\" id=\"menuBtn\" aria-label=\"Menu\">\n    <svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><path d=\"M4 6h16M4 12h16M4 18h16\"/></svg>\n  </button>\n  <img data-logo src=\"\" alt=\"ienco\">\n  <div class=\"t\"><b>Assistant de clôture des comptes</b><span>L'autonomie du comptable à la clôture – offices notariaux</span></div>\n  <div class=\"sp\"></div>\n  <button class=\"btn primary\" id=\"pdfBtn\" title=\"Éditer la page affichée en PDF\">\n    <svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><path d=\"M6 9V3h12v6M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2\"/><path d=\"M6 14h12v7H6z\"/></svg>\n    <span class=\"lbl-long\">Imprimer en PDF</span><span class=\"lbl-short\" style=\"display:none\">PDF</span>\n  </button>\n</header>\n\n<div class=\"layout\">\n  <aside id=\"side\">\n    <div class=\"side-h\">Paramètres du dossier</div>\n    <div class=\"params\">\n      <div class=\"field\">\n        <label for=\"p-office\">Office / dossier</label>\n        <input id=\"p-office\" type=\"text\" placeholder=\"ex. SELARL Martin & Associés\">\n      </div>\n      <div class=\"field\">\n        <label for=\"p-regime\">Forme et régime fiscal</label>\n        <select id=\"p-regime\">\n          <option value=\"ei_ir\">Office individuel à l'IR</option>\n          <option value=\"ei_is\">Office individuel à l'IS</option>\n          <option value=\"soc_ir\">Société soumise à l'IR</option>\n          <option value=\"soc_is\">Société soumise à l'IS</option>\n        </select>\n      </div>\n      <div class=\"row2\" id=\"soc-fields\">\n        <div class=\"field\">\n          <label for=\"p-assoc\">Nb d'associés</label>\n          <input id=\"p-assoc\" type=\"number\" min=\"1\" step=\"1\" value=\"2\">\n        </div>\n        <div class=\"field\">\n          <label for=\"p-offices\">Nb d'offices</label>\n          <input id=\"p-offices\" type=\"number\" min=\"1\" step=\"1\" value=\"1\">\n        </div>\n      </div>\n      <div class=\"field\">\n        <label for=\"p-date\">Date de clôture</label>\n        <input id=\"p-date\" type=\"date\">\n        <div class=\"hint\" id=\"date-hint\"></div>\n      </div>\n    </div>\n\n    <div class=\"impact-box\" id=\"impact\"></div>\n    <nav id=\"nav\"></nav>\n\n    <div class=\"storage-note\" id=\"storageNote\"></div>\n    <div style=\"margin-top:10px\"><button class=\"btn ghost\" id=\"resetBtn\" style=\"font-size:12px;padding:6px 10px\">Effacer mes données</button></div>\n  </aside>\n\n  <main id=\"main\">\n    <div class=\"print-only print-head\"><img data-logo src=\"\" alt=\"ienco\"><div style=\"text-align:right;font-size:12px\"><b>Assistant de clôture des comptes</b><br><span class=\"ph-ctx\"></span></div></div>\n    <div id=\"views\"></div>\n    <div class=\"print-only print-foot\">\n      Outil d'assistance à la clôture des offices notariaux, mis gratuitement à la disposition des comptables du notariat.<br>\n      ienco expertise – 7 rue de Tahiti, 75012 Paris – s.dabbabi@ienco.fr – 07 57 81 11 09\n    </div>\n  </main>\n</div>\n\n<div id=\"pdf-stage\" aria-hidden=\"true\"></div>\n<div class=\"toast\" id=\"toast\"></div>\n<div class=\"busy\" id=\"busy\">Génération du PDF…</div>\n<div class=\"modal-bg\" id=\"fb\">\n  <div class=\"modal\">\n    <h2>Export PDF indisponible ici</h2>\n    <p>L'enregistrement de fichiers n'est pas autorisé dans cette version en ligne de l'outil. Vos saisies restent conservées sur ce navigateur.</p>\n    <div class=\"acts\"><button class=\"btn primary\" id=\"fb-close\">Fermer</button></div>\n  </div>\n</div>\n<div class=\"modal-bg\" id=\"modal\">\n  <div class=\"modal\">\n    <h2 id=\"m-title\">Effacer les données ?</h2>\n    <p id=\"m-text\">Les paramètres, la checklist et toutes les saisies enregistrées sur ce navigateur seront supprimés.</p>\n    <div class=\"acts\">\n      <button class=\"btn\" id=\"m-cancel\">Annuler</button>\n      <button class=\"btn primary\" id=\"m-ok\">Effacer</button>\n    </div>\n  </div>\n</div>\n";
})();
(function(){
"use strict";

/* =========================================================
   CONFIGURATION – cycles, tâches et onglets
   tab:true  => la tâche dispose d'un onglet de calcul
   when(ctx) => condition d'affichage (facultative)
   ========================================================= */
const CYCLES = [
  { id:"tresorerie", label:"Trésorerie", tasks:[
    { id:"rappro",   label:"Rapprochements bancaires" },
    { id:"recip181", label:"Réciprocité des comptes 181000", when:c=>c.multiOffice, condLabel:"Multi-office" },
    { id:"cdc",      label:"Produits financiers CDC du 4e trimestre à recevoir" },
    { id:"icne",     label:"Intérêts courus non échus", tab:true }
  ]},
  { id:"fournisseurs", label:"Fournisseurs & frais généraux", tasks:[
    { id:"fnp",      label:"Factures non parvenues", tab:true },
    { id:"cca",      label:"Charges constatées d'avance", tab:true },
    { id:"ab488",    label:"Annulation des comptes d'abonnement de charges (488)" }
  ]},
  { id:"immobilisations", label:"Immobilisations", tasks:[
    { id:"dotations", label:"Dotations aux amortissements" },
    { id:"vehicules", label:"Véhicules : avantages en nature, TVS, dotation excédentaire, amortissement batterie", short:"Véhicules", tab:true }
  ]},
  { id:"personnel", label:"Personnel", tasks:[
    { id:"cp",       label:"Provision pour congés payés", tab:true },
    { id:"ij",       label:"Indemnités journalières à recevoir" },
    { id:"opco",     label:"Remboursements OPCO à recevoir" },
    { id:"sal641130",label:"Réaffectation du salaire brut des notaires salariés en 641130" },
    { id:"crpcen",   label:"Contrôle de la CRPCEN", short:"Contrôle CRPCEN", tab:true }
  ]},
  { id:"impots", label:"Impôts et taxes", tasks:[
    { id:"tva",      label:"Contrôle de TVA", tab:true },
    { id:"cvae",     label:"Liquidation de la CVAE", short:"Liquidation CVAE", tab:true },
    { id:"credits",  label:"Réductions et crédits d'impôt", tab:true },
    { id:"is",       label:"Liquidation de l'IS", short:"Liquidation IS", tab:true, when:c=>c.is, condLabel:"IS uniquement" }
  ]},
  { id:"capitaux", label:"Capitaux propres", tasks:[] }
];

const REGIMES = {
  ei_ir:"Office individuel à l'IR", ei_is:"Office individuel à l'IS",
  soc_ir:"Société soumise à l'IR",  soc_is:"Société soumise à l'IS"
};

const STORE_KEY = "ienco-cloture-v1";
const KEEP_DAYS = 15;
const LOGO = window.IENCO_LOGO;
document.querySelectorAll("img[data-logo]").forEach(i=>i.src=LOGO);

/* ---------- utilitaires ---------- */
const $ = (s,r=document)=>r.querySelector(s);
const $$ = (s,r=document)=>Array.from(r.querySelectorAll(s));
const esc = s=>String(s??"").replace(/[&<>"']/g,m=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[m]));
const pad = n=>String(n).padStart(2,"0");
const iso = d=>`${d.getFullYear()}-${pad(d.getMonth()+1)}-${pad(d.getDate())}`;
const fr  = s=>{ if(!s) return "—"; const [y,m,d]=s.split("-"); return `${d}/${m}/${y}`; };

/* Date de clôture par défaut : 31/12/N-1 jusqu'au 15 janvier N inclus, puis 31/12/N */
function defaultClosing(now=new Date()){
  const y = now.getFullYear();
  const limit = new Date(y,0,15,23,59,59);
  return now <= limit ? `${y-1}-12-31` : `${y}-12-31`;
}

/* ---------- état + persistance locale ---------- */
let state = {
  params:{ office:"", regime:"ei_ir", associes:2, offices:1, date:defaultClosing(), dateAuto:true },
  checks:{}, fields:{}, mods:{}, savedAt:null
};
let storageOK = true;

function load(){
  try{
    const raw = localStorage.getItem(STORE_KEY);
    if(!raw) return;
    const s = JSON.parse(raw);
    if(s.savedAt && Date.now()-s.savedAt > KEEP_DAYS*864e5){ localStorage.removeItem(STORE_KEY); return; }
    state = { ...state, ...s, params:{...state.params, ...(s.params||{})}, mods:(s.mods||{}) };
    if(state.params.dateAuto) state.params.date = defaultClosing();
  }catch(e){ storageOK = false; }
}
let saveT;
function save(){
  clearTimeout(saveT);
  saveT = setTimeout(()=>{
    state.savedAt = Date.now();
    try{ localStorage.setItem(STORE_KEY, JSON.stringify(state)); storageOK = true; }
    catch(e){ storageOK = false; }
    renderStorageNote();
  },250);
  updateImpact();
}
function renderStorageNote(){
  const el = $("#storageNote");
  if(!storageOK){ el.innerHTML = "⚠️ La sauvegarde locale n'est pas disponible sur ce navigateur : pensez à éditer vos pages en PDF."; return; }
  if(!state.savedAt){ el.innerHTML = `Vos saisies sont conservées sur ce navigateur pendant ${KEEP_DAYS} jours après la dernière modification. Aucune donnée n'est transmise.`; return; }
  const exp = new Date(state.savedAt + KEEP_DAYS*864e5);
  el.innerHTML = `Saisies conservées sur ce navigateur jusqu'au <b>${pad(exp.getDate())}/${pad(exp.getMonth()+1)}/${exp.getFullYear()}</b> (prolongé à chaque modification). Aucune donnée n'est transmise.`;
}

/* ---------- contexte ---------- */
function ctx(){
  const p = state.params;
  const societe = p.regime.startsWith("soc");
  return {
    societe,
    is: p.regime.endsWith("_is"),
    associes: societe ? Math.max(1, +p.associes||1) : 1,
    offices:  societe ? Math.max(1, +p.offices||1) : 1,
    multiOffice: societe && (+p.offices||1) > 1
  };
}
function visibleCycles(){
  const c = ctx();
  return CYCLES.map(cy=>({...cy, tasks:cy.tasks.filter(t=>!t.when || t.when(c))}));
}
function visibleTabs(){
  return visibleCycles().flatMap(cy=>cy.tasks.filter(t=>t.tab).map(t=>({...t, cycle:cy})));
}
function ctxBand(){
  const p = state.params, c = ctx();
  let h = `<div class="ctx pdf-block">
    <div><span>Office : </span><b>${esc(p.office)||"—"}</b></div>
    <div><span>Régime : </span><b>${REGIMES[p.regime]}</b></div>`;
  if(c.societe) h += `<div><span>Associés : </span><b>${c.associes}</b></div><div><span>Offices : </span><b>${c.offices}</b></div>`;
  h += `<div><span>Clôture : </span><b>${fr(p.date)}</b></div></div>`;
  return h;
}

/* ---------- rendu navigation ---------- */
function renderNav(){
  const cur = currentRoute();
  let h = `<div class="side-h" style="margin-top:0">Navigation</div>
    <a class="nl home ${cur==="accueil"?"active":""}" href="#accueil"><span class="dot" style="border:0">
      <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg></span>Checklist de clôture</a>`;
  visibleCycles().forEach(cy=>{
    const tabs = cy.tasks.filter(t=>t.tab);
    if(!tabs.length) return;
    h += `<div class="nav-cycle"><i></i>${esc(cy.label)}</div>`;
    tabs.forEach(t=>{
      h += `<a class="nl ${cur===t.id?"active":""} ${state.checks[t.id]?"done":""}" href="#${t.id}"><span class="dot"></span>${esc(t.short||t.label)}</a>`;
    });
  });
  $("#nav").innerHTML = h;
}

/* ---------- rendu checklist (accueil) ---------- */
function viewHome(){
  const cys = visibleCycles();
  const all = cys.flatMap(c=>c.tasks);
  const done = all.filter(t=>state.checks[t.id]).length;
  const pct = all.length ? Math.round(done/all.length*100) : 0;
  let h = `<section class="view" data-view="accueil">
    <div class="eyebrow">Clôture au ${fr(state.params.date)}</div>
    <h1>Checklist de clôture</h1>
    <p class="lead">Les tâches sont classées dans l'ordre des cycles de révision. Cochez-les au fil de l'eau et accédez directement aux onglets de calcul.</p>
    ${ctxBand()}
    <div class="card pdf-block" id="home-impact"></div>
    <div class="prog pdf-block"><div class="bar"><i style="width:${pct}%"></i></div><b>${done} / ${all.length} tâches – ${pct} %</b></div>`;
  cys.forEach((cy,i)=>{
    const d = cy.tasks.filter(t=>state.checks[t.id]).length;
    h += `<div class="cyc"><div class="cyc-h pdf-block"><span class="n">${i+1}</span><h2>${esc(cy.label)}</h2><span class="c">${cy.tasks.length?`${d}/${cy.tasks.length}`:""}</span></div>`;
    if(!cy.tasks.length) h += `<div class="empty pdf-block">Aucune tâche définie pour ce cycle.</div>`;
    cy.tasks.forEach(t=>{
      const on = !!state.checks[t.id];
      h += `<div class="task pdf-block ${on?"done":""}">
        <label><input type="checkbox" data-check="${t.id}" ${on?"checked":""}>
          <span><span class="lbl">${esc(t.label)}</span>${t.condLabel?`<span class="cond">${esc(t.condLabel)}</span>`:""}</span></label>
        ${t.tab?`<a class="go no-print" href="#${t.id}">Calcul →</a>`:""}
      </div>`;
    });
    h += `</div>`;
  });
  return h + `</section>`;
}

/* ---------- rendu onglet générique ---------- */
function viewTab(t, idx, tabs){
  const prev = tabs[idx-1], next = tabs[idx+1];
  const on = !!state.checks[t.id];
  const notes = state.fields[`${t.id}.notes`] || "";
  return `<section class="view" data-view="${t.id}">
    <div class="tab-head">
      <div><div class="eyebrow">${esc(t.cycle.label)}</div><h1>${esc(t.label)}</h1></div>
      <div class="sp"></div>
      <label class="donebox no-print ${on?"on":""}"><input type="checkbox" data-check="${t.id}" ${on?"checked":""}>Tâche réalisée</label>
    </div>
    ${ctxBand()}
    ${MODULES[t.id] ? `<div class="calc-zone" data-calc="${t.id}">${MODULES[t.id].html()}</div>` : `<div class="calc-zone pdf-block" data-calc="${t.id}">
      <div class="placeholder"><b>Module de calcul à paramétrer</b>Les modalités de calcul et de présentation de cet onglet seront intégrées prochainement.</div>
    </div>`}
    <div class="card notes pdf-block" style="margin-top:16px">
      <h2>Notes de révision</h2>
      <textarea data-k="${t.id}.notes" placeholder="Commentaires, références des pièces justificatives, points en suspens…">${esc(notes)}</textarea>
    </div>
    <div class="pager no-print">
      <a class="${prev?"":"hidden"}" href="#${prev?prev.id:""}">← ${prev?esc(prev.short||prev.label):""}</a>
      <a href="#accueil">Checklist</a>
      <a class="${next?"":"hidden"}" href="#${next?next.id:""}">${next?esc(next.short||next.label):""} →</a>
    </div>
  </section>`;
}


/* =========================================================
   OUTILS DE CALCUL COMMUNS
   ========================================================= */
const num = v=>{ if(v===null||v===undefined) return null; const s=String(v).replace(/[\s  €%]/g,"").replace(",","."); if(s==="") return null; const n=Number(s); return isFinite(n)?n:null; };
const r2 = n=>Math.round((n+Number.EPSILON)*100)/100;
const NF = new Intl.NumberFormat("fr-FR",{minimumFractionDigits:2,maximumFractionDigits:2});
const eur = n=>NF.format(n||0).replace(/ /g," ")+" €";
const pD = s=>{ const [y,m,d]=s.split("-").map(Number); return Date.UTC(y,m-1,d); };
const dayDiff = (a,b)=>Math.round((pD(b)-pD(a))/864e5);
function addMonths(isoDate, n){
  const [y,m,d]=isoDate.split("-").map(Number);
  const t = new Date(Date.UTC(y, m-1+n, 1));
  const last = new Date(Date.UTC(t.getUTCFullYear(), t.getUTCMonth()+1, 0)).getUTCDate();
  t.setUTCDate(Math.min(d,last));
  return t.toISOString().slice(0,10);
}
const uid = ()=>Math.random().toString(36).slice(2,9);
function mod(id, init){ if(!state.mods[id]) state.mods[id]=init(); return state.mods[id]; }

/* Bloc écriture comptable */
function entryHTML(lines, label){
  const td = lines.reduce((s,l)=>s+(l.d||0),0), tc = lines.reduce((s,l)=>s+(l.c||0),0);
  return `<div class="card entry pdf-block">
    <div class="entry-h"><h2>Écriture à comptabiliser</h2><span class="hint">Journal des opérations diverses · ${fr(state.params.date)}</span></div>
    <table class="tbl"><thead><tr><th style="width:90px">Compte</th><th>Libellé</th><th class="r" style="width:130px">Débit</th><th class="r" style="width:130px">Crédit</th></tr></thead>
    <tbody>${lines.map(l=>`<tr><td class="mono">${l.compte}</td><td>${esc(l.lib||label)}</td><td class="r">${l.d?eur(l.d):""}</td><td class="r">${l.c?eur(l.c):""}</td></tr>`).join("")}</tbody>
    <tfoot><tr><td></td><td>Total</td><td class="r">${eur(td)}</td><td class="r">${eur(tc)}</td></tr></tfoot></table>
  </div>`;
}

/* =========================================================
   MODULE : INTÉRÊTS COURUS NON ÉCHUS
   ========================================================= */
const PERIODS = { M:{label:"Mensuelle", m:1}, T:{label:"Trimestrielle", m:3}, A:{label:"Annuelle", m:12} };
const newLoan = ()=>({ id:uid(), nom:"", per:"M", ech:"", int:"" });

function icneCalc(L){
  const close = state.params.date;
  const res = { ok:false, err:null, warn:null };
  const n = PERIODS[L.per].m;
  if(L.ech){
    if(L.ech <= close){ res.err = `La date de la première échéance doit être postérieure à la clôture (${fr(close)}).`; return res; }
    const prev = addMonths(L.ech, -n);
    if(prev > close){ res.err = `Ce n'est pas la première échéance après la clôture : l'échéance précédente (${fr(prev)}) tombe déjà après le ${fr(close)}.`; return res; }
    res.prev = prev;
    res.couru = dayDiff(prev, close);
    res.periode = dayDiff(prev, L.ech);
  }
  const it = num(L.int);
  if(L.int!=="" && (it===null || it<0)){ res.err = "Montant des intérêts invalide."; return res; }
  if(!L.ech || it===null) return res;
  res.ok = true;
  res.icne = r2(it * res.couru / res.periode);
  return res;
}

function icneLoanCard(L, i){
  const close = state.params.date;
  return `<div class="loan pdf-block" data-loan="${L.id}">
    <div class="loan-h">
      <span class="loan-n">${i+1}</span>
      <input class="loan-name" data-icne="nom" value="${esc(L.nom)}" placeholder="Emprunt n°${i+1} – banque, objet, n° de contrat">
      <button class="btn ghost no-print" data-icne-del="${L.id}" title="Supprimer cet emprunt" aria-label="Supprimer">✕</button>
    </div>
    <div class="loan-grid" style="grid-template-columns:repeat(3,1fr)">
      <div class="field"><label>Périodicité</label>
        <select data-icne="per">${Object.entries(PERIODS).map(([k,v])=>`<option value="${k}" ${L.per===k?"selected":""}>${v.label}</option>`).join("")}</select></div>
      <div class="field"><label>1<sup>re</sup> échéance après clôture</label>
        <input type="date" data-icne="ech" value="${L.ech}" min="${new Date(pD(close)+864e5).toISOString().slice(0,10)}"></div>
      <div class="field"><label>Intérêts de cette échéance</label>
        <div class="suffix"><input type="text" inputmode="decimal" data-icne="int" value="${esc(L.int)}" placeholder="0,00"><span>€</span></div></div>
    </div>
    <div class="loan-res" data-icne-res></div>
  </div>`;
}
function icneResHTML(L){
  const r = icneCalc(L);
  if(r.err) return `<div class="msg err">⚠ ${esc(r.err)}</div>`;
  let parts = [];
  if(r.prev) parts.push(`<span>Dernière échéance payée : <b>${fr(r.prev)}</b></span><span>Prorata : <b>${r.couru} j / ${r.periode} j</b></span>`);
  let h = parts.length ? `<div class="res-meta">${parts.join("")}</div>` : "";
  h += r.ok ? `<div class="res-val">ICNE <b>${eur(r.icne)}</b></div>` : `<div class="res-val muted">Complétez la date et le montant des intérêts</div>`;
  if(r.warn) h += `<div class="msg warn">${esc(r.warn)}</div>`;
  return h;
}
function icneLines(){
  const m = mod("icne", ()=>({loans:[newLoan()]}));
  const total = r2(m.loans.reduce((s,L)=>{const r=icneCalc(L); return s+(r.ok?r.icne:0);},0));
  return total>0 ? [{compte:"661100", d:total},{compte:"168800", c:total}] : [];
}
function icneSummaryHTML(){
  const m = mod("icne", ()=>({loans:[newLoan()]}));
  const rows = m.loans.map((L,i)=>({L,i,r:icneCalc(L)}));
  const total = r2(rows.reduce((s,x)=>s+(x.r.ok?x.r.icne:0),0));
  const errs = rows.filter(x=>x.r.err).length, inc = rows.filter(x=>!x.r.ok && !x.r.err).length;
  let h = `<div class="card pdf-block"><h2>Récapitulatif</h2>
    <table class="tbl"><thead><tr><th>Emprunt</th><th>Périodicité</th><th>Période courue</th><th class="r">Intérêts échéance</th><th class="r">ICNE</th></tr></thead><tbody>
    ${rows.map(({L,i,r})=>`<tr class="${r.ok?"":"dim"}"><td>${esc(L.nom)||`Emprunt n°${i+1}`}</td><td>${PERIODS[L.per].label}</td>
      <td>${r.prev?`${fr(r.prev)} → ${fr(state.params.date)}`:"—"}</td><td class="r">${num(L.int)!==null?eur(num(L.int)):"—"}</td><td class="r">${r.ok?eur(r.icne):(r.err?"erreur":"—")}</td></tr>`).join("")}
    </tbody><tfoot><tr><td colspan="4">Total des intérêts courus non échus</td><td class="r">${eur(total)}</td></tr></tfoot></table>
    ${errs||inc?`<div class="msg warn">${errs?`${errs} emprunt(s) en erreur`:""}${errs&&inc?" · ":""}${inc?`${inc} emprunt(s) incomplet(s)`:""} : non inclus dans le total.</div>`:""}
  </div>`;
  h += total>0 ? entryHTML([{compte:"661100", d:total},{compte:"168800", c:total}], `Intérêts courus non échus au ${fr(state.params.date)}`)
               : `<div class="card entry pdf-block"><h2>Écriture à comptabiliser</h2><p class="hint" style="margin:8px 0 0">L'écriture s'affichera dès qu'un emprunt sera complet.</p></div>`;
  return h;
}

const MODULES = {
  icne: {
    html(){
      const m = mod("icne", ()=>({loans:[newLoan()]}));
      return `<div class="card intro no-print"><p>Pour chaque emprunt, indiquez la périodicité, la date et le montant des intérêts de la <b>première échéance suivant la clôture</b>. Les intérêts courus sont calculés au prorata des jours écoulés entre la dernière échéance payée et la date de clôture.</p></div>
        <div id="icne-loans">${m.loans.map(icneLoanCard).join("")}</div>
        <button class="btn add no-print" data-icne-add>+ Ajouter un emprunt</button>
        <div id="icne-sum">${icneSummaryHTML()}</div>`;
    },
    after(root){ $$(".loan", root).forEach(el=>{ const L=mod("icne").loans.find(x=>x.id===el.dataset.loan); $("[data-icne-res]",el).innerHTML=icneResHTML(L); }); }
  }
};

/* =========================================================
   MODULE : FACTURES NON PARVENUES
   ========================================================= */
const TVA_OPTS = [["20","20 %"],["10","10 %"],["5.5","5,5 %"],["0","Aucune"],["multi","Multitaux"]];
const newFnp = ()=>({ id:uid(), cpt:"", lib:"", ht:"", tva:"20", tvam:"" });
/* Longueur de compte harmonisée : la plus longue saisie, 6 chiffres minimum */
function acctLen(list){ return Math.max(6, ...list.map(x=>(x||"").length)); }
const padAcct = (c,n)=>(c||"").padEnd(n,"0");
function fnpCalc(F){
  const r = { ok:false, err:null, warn:null };
  const ht = num(F.ht);
  if(F.ht!=="" && ht===null){ r.err="Montant HT invalide."; return r; }
  if(F.cpt && !/^\d{1,10}$/.test(F.cpt)){ r.err="Le compte ne doit contenir que des chiffres (10 maximum)."; return r; }
  let tva = 0;
  if(F.tva==="multi"){
    const m = num(F.tvam);
    if(F.tvam!=="" && m===null){ r.err="Montant de TVA invalide."; return r; }
    tva = m||0;
    if(F.tvam==="") r.warn="Saisissez le montant de TVA.";
  } else if(ht!==null) tva = r2(ht*Number(F.tva)/100);
  if(!F.cpt || ht===null) return r;
  if(F.cpt[0]!=="6") r.warn = "Compte hors classe 6 : vérifiez l'imputation.";
  r.ok = true; r.ht = r2(ht); r.tva = r2(tva); r.ttc = r2(ht+tva);
  return r;
}
function fnpRowHTML(F){
  return `<div class="frow pdf-block" data-fnp-row="${F.id}">
    <input class="f-cpt mono" data-fnp="cpt" value="${esc(F.cpt)}" inputmode="numeric" maxlength="10" placeholder="606100">
    <input class="f-lib" data-fnp="lib" value="${esc(F.lib)}" placeholder="Fournisseur, nature de la charge">
    <div class="suffix"><input data-fnp="ht" value="${esc(F.ht)}" inputmode="decimal" placeholder="0,00"><span>€</span></div>
    <select data-fnp="tva">${TVA_OPTS.map(([v,l])=>`<option value="${v}" ${F.tva===v?"selected":""}>${l}</option>`).join("")}</select>
    <div class="f-tva" data-fnp-tva></div>
    <div class="f-ttc r" data-fnp-ttc></div>
    <button class="btn ghost no-print" data-fnp-del="${F.id}" title="Supprimer la ligne" aria-label="Supprimer">✕</button>
    <div class="f-msg" data-fnp-msg></div>
  </div>`;
}
function fnpFillRow(el){
  const F = state.mods.fnp.lines.find(x=>x.id===el.dataset.fnpRow); const r = fnpCalc(F);
  const tv = $("[data-fnp-tva]", el);
  if(F.tva==="multi"){
    if(!$("input", tv)) tv.innerHTML = `<div class="suffix"><input data-fnp="tvam" value="${esc(F.tvam)}" inputmode="decimal" placeholder="0,00"><span>€</span></div>`;
  } else tv.innerHTML = `<span class="r">${num(F.ht)!==null && !r.err ? eur(r2(num(F.ht)*Number(F.tva)/100)) : "—"}</span>`;
  $("[data-fnp-ttc]", el).textContent = r.ok ? eur(r.ttc) : "—";
  $("[data-fnp-msg]", el).innerHTML = r.err ? `<div class="msg err">⚠ ${esc(r.err)}</div>` : (r.warn ? `<div class="msg warn">${esc(r.warn)}</div>` : "");
}
function fnpLines(){
  const m = mod("fnp", ()=>({lines:[newFnp()]}));
  const rows = m.lines.map(F=>({F,r:fnpCalc(F)})).filter(x=>x.r.ok);
  if(!rows.length) return [];
  const n = acctLen(m.lines.map(F=>F.cpt)), lbl = `FNP au ${fr(state.params.date)}`;
  const tHT = r2(rows.reduce((s,x)=>s+x.r.ht,0)), tTVA = r2(rows.reduce((s,x)=>s+x.r.tva,0)), tTTC = r2(tHT+tTVA);
  const lines = rows.map(({F,r})=>({compte:padAcct(F.cpt,n), lib:`${lbl}${F.lib?" – "+F.lib:""}`, d:r.ht}));
  if(tTVA) lines.push({compte:padAcct("445860",n), lib:`${lbl} – TVA déductible`, d:tTVA});
  lines.push({compte:padAcct("408100",n), lib:`${lbl} – Fournisseurs, factures non parvenues`, c:tTTC});
  return lines;
}
function fnpSummaryHTML(){
  const m = mod("fnp", ()=>({lines:[newFnp()]}));
  const rows = m.lines.map(F=>({F,r:fnpCalc(F)})).filter(x=>x.r.ok);
  const n = acctLen(m.lines.map(F=>F.cpt));
  const tHT = r2(rows.reduce((s,x)=>s+x.r.ht,0)), tTVA = r2(rows.reduce((s,x)=>s+x.r.tva,0)), tTTC = r2(tHT+tTVA);
  const errs = m.lines.filter(F=>fnpCalc(F).err).length, inc = m.lines.filter(F=>{const r=fnpCalc(F); return !r.ok && !r.err && (F.cpt||F.lib||F.ht);}).length;
  const lbl = `FNP au ${fr(state.params.date)}`;
  let h = `<div class="card pdf-block"><h2>Totaux</h2>
    <div class="kpis"><div><span>Total HT</span><b>${eur(tHT)}</b></div><div><span>TVA déductible</span><b>${eur(tTVA)}</b></div><div><span>Total TTC</span><b>${eur(tTTC)}</b></div></div>
    ${errs||inc?`<div class="msg warn">${errs?`${errs} ligne(s) en erreur`:""}${errs&&inc?" · ":""}${inc?`${inc} ligne(s) incomplète(s)`:""} : non incluse(s) dans l'écriture.</div>`:""}
  </div>`;
  if(!rows.length) return h + `<div class="card entry pdf-block"><h2>Écriture à comptabiliser</h2><p class="hint" style="margin:8px 0 0">L'écriture s'affichera dès qu'une ligne sera complète (compte et montant HT).</p></div>`;
  return h + entryHTML(fnpLines(), lbl);
}
MODULES.fnp = {
  html(){
    const m = mod("fnp", ()=>({lines:[newFnp()]}));
    return `<div class="card intro no-print"><p>Une ligne par facture attendue. Les numéros de compte sont harmonisés automatiquement sur la saisie la plus longue (complétés par des zéros), y compris les comptes 445860 et 408100.</p></div>
      <div class="card fnp-card">
        <div class="frow fhead"><span>Compte</span><span>Désignation</span><span class="r">Montant HT</span><span>Taux TVA</span><span class="r">TVA</span><span class="r">TTC</span><span></span></div>
        <div id="fnp-lines">${m.lines.map(fnpRowHTML).join("")}</div>
        <button class="btn add no-print" data-fnp-add style="margin:12px 0 0">+ Ajouter une ligne</button>
      </div>
      <div id="fnp-sum">${fnpSummaryHTML()}</div>`;
  },
  after(root){ $$("[data-fnp-row]", root).forEach(fnpFillRow); }
};
function fnpRefresh(el){ if(el) fnpFillRow(el); else MODULES.fnp.after(document); const s=$("#fnp-sum"); if(s) s.innerHTML=fnpSummaryHTML(); }
["input","change"].forEach(ev=>document.addEventListener(ev, e=>{
  const k = e.target.dataset && e.target.dataset.fnp; if(!k) return;
  const el = e.target.closest("[data-fnp-row]"); const F = state.mods.fnp.lines.find(x=>x.id===el.dataset.fnpRow);
  if(k==="cpt"){ const v=e.target.value.replace(/\D/g,"").slice(0,10); if(v!==e.target.value) e.target.value=v; }
  F[k] = e.target.value; save(); fnpRefresh(el);
}));
document.addEventListener("click", e=>{
  if(e.target.closest("[data-fnp-add]")){
    const m = state.mods.fnp; const last = m.lines[m.lines.length-1]; const nf = newFnp(); if(last) nf.tva = last.tva==="multi"?"20":last.tva;
    m.lines.push(nf); save();
    const box=$("#fnp-lines"); box.insertAdjacentHTML("beforeend", fnpRowHTML(nf)); fnpRefresh(box.lastElementChild); $(".f-cpt", box.lastElementChild).focus();
  }
  const del = e.target.closest("[data-fnp-del]");
  if(del){
    const m = state.mods.fnp; m.lines = m.lines.filter(x=>x.id!==del.dataset.fnpDel); if(!m.lines.length) m.lines.push(newFnp());
    save(); $("#fnp-lines").innerHTML = m.lines.map(fnpRowHTML).join(""); fnpRefresh();
  }
});


/* =========================================================
   MODULE : CHARGES CONSTATÉES D'AVANCE
   ========================================================= */
const newCca = ()=>({ id:uid(), cpt:"", lib:"", tot:"", d1:"", d2:"", libre:false, mt:"" });
function ccaCalc(C){
  const close = state.params.date, r = { ok:false, err:null, warn:null, info:null };
  if(C.cpt && !/^\d{1,10}$/.test(C.cpt)){ r.err="Le compte ne doit contenir que des chiffres (10 maximum)."; return r; }
  if(C.libre){
    const m = num(C.mt);
    if(C.mt!=="" && (m===null || m<0)){ r.err="Montant invalide."; return r; }
    if(!C.cpt || m===null) return r;
    r.cca = r2(m);
  } else {
    const t = num(C.tot);
    if(C.tot!=="" && (t===null || t<0)){ r.err="Montant de la charge invalide."; return r; }
    if(C.d1 && C.d2 && C.d2 < C.d1){ r.err="La date de fin précède la date de début."; return r; }
    if(!C.d1 || !C.d2 || t===null){ return r; }
    const days = dayDiff(C.d1, C.d2) + 1;
    let after = C.d1 > close ? days : Math.max(0, dayDiff(close, C.d2));
    r.days = days; r.after = after;
    if(after===0){ r.err=`La période se termine avant ou à la clôture (${fr(close)}) : aucune charge constatée d'avance.`; return r; }
    if(C.d1 > close) r.info = "Période entièrement postérieure à la clôture : la totalité de la charge est constatée d'avance.";
    r.cca = r2(t * after / days);
    if(!C.cpt) return r;
  }
  if(C.cpt[0]!=="6") r.warn = "Compte hors classe 6 : vérifiez l'imputation.";
  r.ok = r.cca>0;
  return r;
}
function ccaRowHTML(C){
  return `<div class="ccrow pdf-block" data-cca-row="${C.id}">
    <input class="f-cpt mono" data-cca="cpt" value="${esc(C.cpt)}" inputmode="numeric" maxlength="10" placeholder="616100">
    <input class="f-lib" data-cca="lib" value="${esc(C.lib)}" placeholder="Fournisseur, nature de la charge">
    <div class="suffix cc-mt"><input data-cca="mt" value="${esc(C.mt)}" inputmode="decimal" placeholder="0,00" ${C.libre?"":"readonly tabindex=\"-1\""}><span>€</span></div>
    <button class="btn ghost no-print" data-cca-del="${C.id}" title="Supprimer la ligne" aria-label="Supprimer">✕</button>
    <div class="cc-per">
      <div class="cc-dates" ${C.libre?'style="display:none"':""}>
        <div class="suffix"><input data-cca="tot" value="${esc(C.tot)}" inputmode="decimal" placeholder="Montant de la charge"><span>€</span></div>
        <input type="date" data-cca="d1" value="${C.d1}" title="Début de période">
        <input type="date" data-cca="d2" value="${C.d2}" title="Fin de période">
      </div>
      <label class="cc-libre"><input type="checkbox" data-cca="libre" ${C.libre?"checked":""}> Montant libre</label>
    </div>
    <div class="f-msg" data-cca-msg></div>
  </div>`;
}
function ccaFillRow(el){
  const C = state.mods.cca.lines.find(x=>x.id===el.dataset.ccaRow); const r = ccaCalc(C);
  $(".cc-dates", el).style.display = C.libre ? "none" : "";
  const mt = $('[data-cca="mt"]', el);
  if(C.libre){ mt.readOnly=false; mt.removeAttribute("tabindex"); }
  else { mt.readOnly=true; mt.tabIndex=-1; mt.value = r.cca!==undefined ? NF.format(r.cca) : ""; }
  let msg = "";
  if(r.err) msg = `<div class="msg err">⚠ ${esc(r.err)}</div>`;
  else {
    if(!C.libre && r.days) msg += `<div class="msg note">Prorata : ${r.after} j / ${r.days} j postérieurs au ${fr(state.params.date)}</div>`;
    if(r.info) msg += `<div class="msg note">${esc(r.info)}</div>`;
    if(r.warn) msg += `<div class="msg warn">${esc(r.warn)}</div>`;
  }
  $("[data-cca-msg]", el).innerHTML = msg;
}
function ccaLines(){
  const m = mod("cca", ()=>({lines:[newCca()]}));
  const rows = m.lines.map(C=>({C,r:ccaCalc(C)})).filter(x=>x.r.ok);
  if(!rows.length) return [];
  const n = acctLen(m.lines.map(C=>C.cpt)), lbl = `CCA au ${fr(state.params.date)}`;
  const tot = r2(rows.reduce((s,x)=>s+x.r.cca,0));
  return [{compte:padAcct("486000",n), lib:`${lbl} – Charges constatées d'avance`, d:tot},
          ...rows.map(({C,r})=>({compte:padAcct(C.cpt,n), lib:`${lbl}${C.lib?" – "+C.lib:""}`, c:r.cca}))];
}
function ccaSummaryHTML(){
  const m = mod("cca", ()=>({lines:[newCca()]}));
  const lines = ccaLines(), tot = lines.length ? lines[0].d : 0;
  const errs = m.lines.filter(C=>ccaCalc(C).err).length;
  const inc = m.lines.filter(C=>{const r=ccaCalc(C); return !r.ok && !r.err && (C.cpt||C.lib||C.tot||C.mt);}).length;
  let h = `<div class="card pdf-block"><h2>Total</h2>
    <div class="kpis" style="grid-template-columns:1fr"><div><span>Total des charges constatées d'avance</span><b>${eur(tot)}</b></div></div>
    ${errs||inc?`<div class="msg warn">${errs?`${errs} ligne(s) en erreur`:""}${errs&&inc?" · ":""}${inc?`${inc} ligne(s) incomplète(s)`:""} : non incluse(s) dans l'écriture.</div>`:""}
  </div>`;
  return h + (lines.length ? entryHTML(lines, `CCA au ${fr(state.params.date)}`)
    : `<div class="card entry pdf-block"><h2>Écriture à comptabiliser</h2><p class="hint" style="margin:8px 0 0">L'écriture s'affichera dès qu'une ligne sera complète.</p></div>`);
}
MODULES.cca = {
  html(){
    const m = mod("cca", ()=>({lines:[newCca()]}));
    return `<div class="card intro no-print"><p>Pour chaque charge, indiquez son montant et sa période de consommation : la part postérieure à la clôture est calculée au prorata des jours. Cochez <b>Montant libre</b> pour saisir directement la charge constatée d'avance. Pas de TVA sur les CCA.</p></div>
      <div class="card fnp-card">
        <div class="ccrow fhead"><span>Compte</span><span>Désignation</span><span class="r">CCA</span><span></span></div>
        <div id="cca-lines">${m.lines.map(ccaRowHTML).join("")}</div>
        <button class="btn add no-print" data-cca-add style="margin:12px 0 0">+ Ajouter une ligne</button>
      </div>
      <div id="cca-sum">${ccaSummaryHTML()}</div>`;
  },
  after(root){ $$("[data-cca-row]", root).forEach(ccaFillRow); },
  lines: ()=>ccaLines()
};
function ccaRefresh(el){ if(el) ccaFillRow(el); else MODULES.cca.after(document); const s=$("#cca-sum"); if(s) s.innerHTML=ccaSummaryHTML(); }
["input","change"].forEach(ev=>document.addEventListener(ev, e=>{
  const k = e.target.dataset && e.target.dataset.cca; if(!k) return;
  const el = e.target.closest("[data-cca-row]"); const C = state.mods.cca.lines.find(x=>x.id===el.dataset.ccaRow);
  if(k==="cpt"){ const v=e.target.value.replace(/\D/g,"").slice(0,10); if(v!==e.target.value) e.target.value=v; }
  if(k==="mt" && !C.libre) return;
  if(k==="libre"){ C.libre = e.target.checked; if(C.libre){ const r=ccaCalc({...C,libre:false}); C.mt = r.cca!==undefined ? String(r.cca).replace(".",",") : ""; } }
  else C[k] = e.target.value;
  save(); ccaRefresh(el);
  if(k==="libre" && C.libre) $('[data-cca="mt"]', el).focus();
}));
document.addEventListener("click", e=>{
  if(e.target.closest("[data-cca-add]")){
    const m = state.mods.cca; const nc = newCca(); m.lines.push(nc); save();
    const box=$("#cca-lines"); box.insertAdjacentHTML("beforeend", ccaRowHTML(nc)); ccaRefresh(box.lastElementChild); $(".f-cpt", box.lastElementChild).focus();
  }
  const del = e.target.closest("[data-cca-del]");
  if(del){
    const m = state.mods.cca; m.lines = m.lines.filter(x=>x.id!==del.dataset.ccaDel); if(!m.lines.length) m.lines.push(newCca());
    save(); $("#cca-lines").innerHTML = m.lines.map(ccaRowHTML).join(""); ccaRefresh();
  }
});

/* =========================================================
   IMPACT SUR LE RÉSULTAT (classes 6 et 7 : crédit − débit)
   ========================================================= */
MODULES.icne.lines = ()=>icneLines();
MODULES.fnp.lines = ()=>fnpLines();
function impactData(){
  const tabs = visibleTabs();
  const rows = tabs.filter(t=>MODULES[t.id] && MODULES[t.id].lines).map(t=>{
    const v = r2(MODULES[t.id].lines().reduce((s,l)=>/^[67]/.test(l.compte) ? s+(l.c||0)-(l.d||0) : s, 0));
    return { id:t.id, label:t.short||t.label, v };
  });
  return { rows, total: r2(rows.reduce((s,x)=>s+x.v,0)) };
}
const sgn = v=> (v>0?"+":v<0?"−":"") + eur(Math.abs(v));
function updateImpact(){
  const d = impactData(), cls = d.total>0?"pos":d.total<0?"neg":"";
  const side = $("#impact");
  if(side) side.innerHTML = `<div class="side-h" style="margin:0 0 6px">Impact sur le résultat</div><div class="imp-v ${cls}">${sgn(d.total)}</div><div class="hint">${d.rows.filter(x=>x.v).length} calcul(s) pris en compte</div>`;
  const home = $("#home-impact");
  if(home) home.innerHTML = `<div class="imp-head"><h2>Impact des écritures sur le résultat</h2><b class="imp-v ${cls}">${sgn(d.total)}</b></div>
    <table class="tbl"><tbody>${d.rows.map(x=>`<tr class="${x.v?"":"dim"}"><td><a href="#${x.id}" class="no-print-link">${esc(x.label)}</a></td><td class="r">${x.v?sgn(x.v):"—"}</td></tr>`).join("")}</tbody></table>
    <p class="hint" style="margin:8px 0 0">Comptes de charges et de produits : un débit diminue le résultat, un crédit l'augmente.</p>`;
}
/* Modules en test : actifs uniquement sur le domaine de recette webflow.io */
const BETA = ["cca"];
if(!/webflow\.io$|^localhost$|^$/.test(location.hostname)) BETA.forEach(k=>delete MODULES[k]);

function icneRefresh(loanEl){
  const m = state.mods.icne;
  if(loanEl){ const L=m.loans.find(x=>x.id===loanEl.dataset.loan); $("[data-icne-res]",loanEl).innerHTML=icneResHTML(L); }
  else MODULES.icne.after(document);
  const s=$("#icne-sum"); if(s) s.innerHTML = icneSummaryHTML();
}
document.addEventListener("input", e=>{
  const k = e.target.dataset && e.target.dataset.icne; if(!k) return;
  const el = e.target.closest(".loan"); const L = state.mods.icne.loans.find(x=>x.id===el.dataset.loan);
  L[k] = e.target.value; save(); icneRefresh(el);
});
document.addEventListener("change", e=>{
  const k = e.target.dataset && e.target.dataset.icne; if(!k) return;
  const el = e.target.closest(".loan"); const L = state.mods.icne.loans.find(x=>x.id===el.dataset.loan);
  L[k] = e.target.value; save(); icneRefresh(el);
});
document.addEventListener("click", e=>{
  if(e.target.closest("[data-icne-add]")){
    const m = state.mods.icne; m.loans.push(newLoan()); save();
    const box=$("#icne-loans"); box.insertAdjacentHTML("beforeend", icneLoanCard(m.loans[m.loans.length-1], m.loans.length-1));
    icneRefresh(box.lastElementChild); $(".loan-name", box.lastElementChild).focus();
  }
  const del = e.target.closest("[data-icne-del]");
  if(del){
    const m = state.mods.icne; m.loans = m.loans.filter(x=>x.id!==del.dataset.icneDel);
    if(!m.loans.length) m.loans.push(newLoan());
    save(); $("#icne-loans").innerHTML = m.loans.map(icneLoanCard).join(""); icneRefresh();
  }
});

/* ---------- routing ---------- */
function currentRoute(){
  const h = (location.hash||"").replace("#","");
  if(h==="accueil" || !h) return "accueil";
  return visibleTabs().some(t=>t.id===h) ? h : "accueil";
}
function renderViews(){
  const tabs = visibleTabs();
  $("#views").innerHTML = viewHome() + tabs.map((t,i)=>viewTab(t,i,tabs)).join("");
  Object.values(MODULES).forEach(M=>M.after && M.after(document));
  updateImpact();
  showRoute();
}
function showRoute(){
  const r = currentRoute();
  $$(".view").forEach(v=>v.classList.toggle("active", v.dataset.view===r));
  renderNav();
  $("#side").classList.remove("open");
  const p = state.params;
  $(".ph-ctx").textContent = `${p.office||""}${p.office?" – ":""}Clôture au ${fr(p.date)}`;
}
function render(){ renderViews(); }

/* ---------- paramètres ---------- */
function bindParams(){
  const p = state.params;
  $("#p-office").value = p.office;
  $("#p-regime").value = p.regime;
  $("#p-assoc").value = p.associes;
  $("#p-offices").value = p.offices;
  $("#p-date").value = p.date;
  syncParamUI();

  $("#p-office").addEventListener("input", e=>{ p.office = e.target.value; save(); refreshCtx(); });
  $("#p-regime").addEventListener("change", e=>{ p.regime = e.target.value; syncParamUI(); save(); render(); });
  $("#p-assoc").addEventListener("input", e=>{ p.associes = e.target.value; save(); refreshCtx(); });
  $("#p-offices").addEventListener("input", e=>{ p.offices = e.target.value; save(); render(); });
  $("#p-date").addEventListener("change", e=>{
    p.date = e.target.value || defaultClosing();
    p.dateAuto = (p.date === defaultClosing());
    syncParamUI(); save(); render();
  });
  $("#date-hint").addEventListener("click", e=>{
    if(e.target.tagName!=="A") return;
    p.date = defaultClosing(); p.dateAuto = true; $("#p-date").value = p.date;
    syncParamUI(); save(); render();
  });
}
function syncParamUI(){
  const c = ctx(), p = state.params;
  $("#soc-fields").style.display = c.societe ? "" : "none";
  $("#date-hint").innerHTML = p.dateAuto
    ? `Date par défaut de l'exercice en cours.`
    : `<span class="tag">Arrêté personnalisé</span> · <a>revenir au ${fr(defaultClosing())}</a>`;
}
function refreshCtx(){
  const html = ctxBand();
  $$("#views .ctx").forEach(el=>{ el.outerHTML = html; });
  const p = state.params;
  $(".ph-ctx").textContent = `${p.office||""}${p.office?" – ":""}Clôture au ${fr(p.date)}`;
}

/* ---------- événements globaux (checklist + champs) ---------- */
document.addEventListener("change", e=>{
  const id = e.target.dataset && e.target.dataset.check;
  if(id){
    state.checks[id] = e.target.checked; save();
    const r = currentRoute(); render();
    if(r!=="accueil") location.hash = r;
  }
});
document.addEventListener("input", e=>{
  const k = e.target.dataset && e.target.dataset.k;
  if(k){ state.fields[k] = e.target.value; save(); }
});
window.addEventListener("hashchange", ()=>{ showRoute(); window.scrollTo(0,0); });
$("#menuBtn").addEventListener("click", ()=>$("#side").classList.toggle("open"));

/* ---------- toast / modal ---------- */
let toastT;
function toast(msg, ms=3200){ const t=$("#toast"); t.textContent=msg; t.classList.add("show"); clearTimeout(toastT); toastT=setTimeout(()=>t.classList.remove("show"),ms); }
$("#resetBtn").addEventListener("click", ()=>$("#modal").classList.add("show"));
$("#m-cancel").addEventListener("click", ()=>$("#modal").classList.remove("show"));
$("#m-ok").addEventListener("click", ()=>{
  try{ localStorage.removeItem(STORE_KEY); }catch(e){}
  state = { params:{ office:"", regime:"ei_ir", associes:2, offices:1, date:defaultClosing(), dateAuto:true }, checks:{}, fields:{}, mods:{}, savedAt:null };
  $("#modal").classList.remove("show");
  bindParamsValues(); render(); renderStorageNote(); toast("Données effacées.");
});
function bindParamsValues(){
  const p = state.params;
  $("#p-office").value=p.office; $("#p-regime").value=p.regime; $("#p-assoc").value=p.associes; $("#p-offices").value=p.offices; $("#p-date").value=p.date; syncParamUI();
}

/* =========================================================
   EXPORT PDF
   ========================================================= */
const dlPromise = (window.claude && typeof window.claude.use==="function")
  ? window.claude.use("downloads").catch(()=>null) : Promise.resolve(null);

function loadScript(src){
  return new Promise((res,rej)=>{
    if($(`script[src="${src}"]`)) return res();
    const s=document.createElement("script"); s.src=src; s.onload=res; s.onerror=rej; document.head.appendChild(s);
  });
}
async function libs(){
  await loadScript("https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js");
  await loadScript("https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js");
}
function prepareStage(){
  const stage = $("#pdf-stage");
  const live = $(".view.active");
  const view = live.cloneNode(true);
  const L = $$("input,select,textarea", live), C = $$("input,select,textarea", view);
  C.forEach((el,idx)=>{
    const src = L[idx];
    let rep;
    if(el.tagName==="TEXTAREA"){ rep=document.createElement("div"); rep.className="pdf-text"; rep.textContent = src.value || "—"; }
    else if(el.tagName==="SELECT"){ rep=document.createElement("span"); rep.className="pdf-val"; rep.textContent = src.options[src.selectedIndex]?.text || ""; }
    else if(el.type==="checkbox"){ rep=document.createElement("span"); rep.textContent = src.checked ? "☑" : "☐"; rep.style.cssText="font-size:17px;line-height:1;width:18px;display:inline-block;color:#3303F1"; }
    else {
      rep=document.createElement("span"); rep.className="pdf-val "+(el.className||"");
      let v = el.type==="date" ? (src.value?fr(src.value):"") : src.value;
      if(!v && el.classList.contains("loan-name")) v = (el.placeholder||"").split(" –")[0];
      rep.textContent = v || "—";
    }
    el.replaceWith(rep);
  });
  stage.innerHTML = ""; stage.appendChild(view);
  return stage;
}
async function exportPDF(){
  $("#busy").classList.add("show");
  try{
    await libs();
    await document.fonts.ready;
    const stage = prepareStage();
    const scale = 2;
    const canvas = await html2canvas(stage, { scale, backgroundColor:"#ffffff", useCORS:true, logging:false });

    // points de coupure : bas des blocs
    const sTop = stage.getBoundingClientRect().top;
    const breaks = $$(".pdf-block", stage).map(el=>Math.round(el.getBoundingClientRect().bottom - sTop)).sort((a,b)=>a-b);
    const totalH = stage.scrollHeight;

    const { jsPDF } = window.jspdf;
    const pdf = new jsPDF({ unit:"mm", format:"a4", orientation:"portrait" });
    const PW=210, PH=297, M=12, HEAD=30, FOOT=26;
    const cw = PW - 2*M;
    const pxPerMm = stage.offsetWidth / cw;
    const pageHpx = Math.floor((PH - HEAD - FOOT) * pxPerMm);

    // découpe
    const slices = []; let y = 0;
    while(y < totalH - 2){
      let end = Math.min(y + pageHpx, totalH);
      if(end < totalH){
        const cand = breaks.filter(b=>b>y+40 && b<=end);
        if(cand.length) end = cand[cand.length-1];
      }
      slices.push([y,end]); y = end;
    }

    const p = state.params;
    const route = currentRoute();
    const tab = visibleTabs().find(t=>t.id===route);
    const pageTitle = tab ? tab.label : "Checklist de clôture";
    const now = new Date();
    const edited = `${pad(now.getDate())}/${pad(now.getMonth()+1)}/${now.getFullYear()} à ${pad(now.getHours())}h${pad(now.getMinutes())}`;
    const logoRatio = 700/300;

    // Rendu de chaque page A4 dans un canvas (en-tête + contenu + pied de page)
    const K = 7.874; // px par mm (≈ 200 dpi)
    const logoImg = await new Promise(r=>{ const im=new Image(); im.onload=()=>r(im); im.src=LOGO; });
    const pages = slices.map(([a,b],i)=>{
      const pc = document.createElement("canvas");
      pc.width = Math.round(PW*K); pc.height = Math.round(PH*K);
      const g = pc.getContext("2d");
      g.scale(K,K);
      g.fillStyle="#fff"; g.fillRect(0,0,PW,PH);
      const font=(w,pt)=>`${w} ${(pt*0.3528).toFixed(3)}px Inter, Helvetica, Arial, sans-serif`;
      // en-tête
      g.drawImage(logoImg, M, 9, 30, 30/logoRatio);
      g.textAlign="right"; g.textBaseline="alphabetic";
      g.fillStyle="#15122B"; g.font=font(700,11);
      g.fillText(pageTitle.length>70?pageTitle.slice(0,68)+"…":pageTitle, PW-M, 13);
      g.fillStyle="#6B6880"; g.font=font(400,8.5);
      g.fillText(`${p.office?p.office+"  ·  ":""}${REGIMES[p.regime]}  ·  Clôture au ${fr(p.date)}`, PW-M, 18);
      g.fillText(`Édité le ${edited}`, PW-M, 22);
      g.fillStyle="#3303F1"; g.fillRect(M, 25.2, PW-2*M, 0.6);
      // contenu
      g.drawImage(canvas, 0, a*scale, canvas.width, (b-a)*scale, M, HEAD, cw, (b-a)/pxPerMm);
      // pied de page
      const fy = PH - FOOT + 6;
      g.fillStyle="#74F5A8"; g.fillRect(M, fy, PW-2*M, 0.6);
      g.textAlign="left";
      g.fillStyle="#6B6880"; g.font=font("italic 400",8);
      g.fillText("Outil d'assistance à la clôture des offices notariaux, mis gratuitement à la disposition des comptables du notariat.", M, fy+5);
      g.fillStyle="#3303F1"; g.font=font(700,8);
      g.fillText("ienco expertise", M, fy+10);
      const w0 = g.measureText("ienco expertise").width;
      g.fillStyle="#15122B"; g.font=font(400,8);
      g.fillText("   7 rue de Tahiti, 75012 Paris  ·  s.dabbabi@ienco.fr  ·  07 57 81 11 09", M+w0, fy+10);
      g.fillStyle="#6B6880"; g.textAlign="right";
      g.fillText(`Page ${i+1} / ${slices.length}`, PW-M, fy+10);
      return pc;
    });

    pages.forEach((pc,i)=>{
      if(i) pdf.addPage();
      pdf.addImage(pc.toDataURL("image/jpeg",0.9), "JPEG", 0, 0, PW, PH);
    });

    $("#pdf-stage").innerHTML = "";
    const slug = s=>String(s||"").normalize("NFD").replace(/[̀-ͯ]/g,"").replace(/[^A-Za-z0-9]+/g,"-").replace(/^-|-$/g,"");
    const filename = `Cloture_${p.date.replace(/-/g,"")}_${slug(tab?(tab.short||tab.label):"Checklist")}${p.office?"_"+slug(p.office):""}.pdf`;
    const blob = pdf.output("blob");

    $("#busy").classList.remove("show");

    // 1) Page hébergée sur son propre site (hors cadre) : téléchargement direct
    if(window.self === window.top){ directDownload(blob, filename); return; }
    // 2) Cadre claude.ai avec la fonction d'enregistrement disponible
    const dl = await Promise.race([dlPromise, new Promise(r=>setTimeout(()=>r(null),1500))]);
    if(dl){
      try{ await dl.save({ filename, data: blob }); toast("PDF enregistré."); return; }
      catch(err){ if(err && err.code==="declined"){ toast("Enregistrement annulé."); return; } }
    }
    // 3) Enregistrement non autorisé dans cette vue
    showPdfFallback();
  }catch(err){
    console.error(err);
    $("#busy").classList.remove("show");
    toast("La génération du PDF a échoué. Rechargez la page et réessayez.", 5000);
  }
}
function directDownload(blob, filename){
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a"); a.href=url; a.download=filename; document.body.appendChild(a); a.click(); a.remove();
  setTimeout(()=>URL.revokeObjectURL(url), 60000);
  toast("PDF téléchargé.");
}
function showPdfFallback(){ $("#fb").classList.add("show"); }
$("#fb-close").addEventListener("click", ()=>$("#fb").classList.remove("show"));
$("#fb").addEventListener("click", e=>{ if(e.target.id==="fb") $("#fb").classList.remove("show"); });
$("#pdfBtn").addEventListener("click", exportPDF);

/* ---------- init ---------- */
load();
bindParams();
render();
renderStorageNote();
})();
