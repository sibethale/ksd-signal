/* One-shot refactor: make narrative bindings reassignable + inject the POV switch.
   Idempotent-ish: bails if already applied. */
import { readFileSync, writeFileSync } from 'node:fs';

const file = new URL('../index.html', import.meta.url);
let h = readFileSync(file, 'utf8');

if (h.includes('function applyPerspective')) { console.log('Already applied — no changes.'); process.exit(0); }

// Leading `const` declarations to convert to `let` (chained siblings follow automatically).
const constKeys = [
  'FORECAST','TIER_INFO','HORROR_MSGS','CHAPTERS','SPEAKERS','GARY_EVENTS',
  'DL_OPEN','DL_EAT_MET','DL_EAT_NONE','DL_MOVE_MET','DL_MIND_HIGH','DL_CARE_MET','DL_AUDIT_FAIL','DL_CLOSE',
  'M_MEAL_FIRST','M_MEAL_BIG','M_MEAL_SNACK','M_MEAL_OVER','M_MOVE_LIGHT','M_MOVE_GOOD','M_MOVE_HEAVY','M_MOVE_GOAL',
  'M_MIND_ANXIETY','M_MIND_DARK','M_MIND_MID','M_MIND_BRIGHT','M_CARE_FULL','M_CARE_HALF',
  'S_NERVES','S_OVER','S_UNDER','S_BURN','S_FALSE',
  'ACH','STORY_BIBLE','SPARKY_LINES','KATIE_DIRECTIVES','ROOK_UNOBSERVED','ROOK_SUSPICIOUS',
  'GARY_BOASTS','GARY_HONEST','CREW','LOG_COPY','BOOT_LINES'
];
for (const k of constKeys) {
  const re = new RegExp('\\nconst ' + k + '(\\s*=)');
  if (!re.test(h)) { console.error('WARN: const not found for ' + k); }
  h = h.replace(re, '\nlet ' + k + '$1');
}

// All keys overridable at runtime (includes chained siblings that have no leading const).
const assignKeys = constKeys.concat([
  'DL_EAT_OVER','DL_EAT_UNDER','DL_MOVE_NONE','DL_MIND_MID','DL_MIND_LOW','DL_MIND_NONE'
]);
const assigns = assignKeys.map(k => "  if(R." + k + "!==undefined) " + k + "=R." + k + ";").join('\n');

const block =
`let LBL={companionName:'SPARKY',forecastNote:"Sparky is waiting for today's exercise forecast. It books your ration limit. Tap to file.",forecastAsk:'SPARKY: "How much exercise will be done today, Koko?" — this books your ration limit. In between two? The station always books the lower ration.',psychToast:'🧠 Psych eval transmitted. Sparky approves.',strainTitle:"Strain — Sparky's worry ledger (14 cycles)"};
function setPov(v){ localStorage.setItem('ksd_pov', v); location.reload(); }
function applyPerspective(pov){
  window.__POV=pov;
  if(pov!=='rook' || !window.ROOK_LORE) return;
  const R=window.ROOK_LORE;
  if(R.LBL) LBL=Object.assign({},LBL,R.LBL);
${assigns}
  try{ var cn=document.getElementById('companion-name'); if(cn) cn.textContent=LBL.companionName; }catch(e){}
  try{ var fa=document.getElementById('forecast-ask'); if(fa) fa.textContent=LBL.forecastAsk; }catch(e){}
}
applyPerspective(localStorage.getItem('ksd_pov')||'koko');
`;

// Insert the block right before the boot-tail config assignments.
const anchor = "document.getElementById('cfg-kcal').value=meta.cfg.kcal;";
if (!h.includes(anchor)) { console.error('FATAL: boot anchor not found'); process.exit(1); }
h = h.replace(anchor, block + '\n' + anchor);

// Load the Rook lore pack before the main inline script runs.
h = h.replace('<script>', '<script src="rook.lore.js"></script>\n<script>');

writeFileSync(file, h, 'utf8');
console.log('POV refactor applied: ' + constKeys.length + ' bindings, ' + assignKeys.length + ' overridable.');
