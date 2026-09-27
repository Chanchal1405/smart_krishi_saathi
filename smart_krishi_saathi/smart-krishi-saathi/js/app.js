/* ================= DATA (demo/sample) ================= */
const STR = {
en:{app:"Smart Krishi Saathi",tagline:"Your farming companion",login:"Login / Register",guest:"Explore Demo",
 dashboard:"Dashboard",advisory:"Crop Advisory",doctor:"Crop Doctor",weather:"Weather",calendar:"Farm Calendar",
 market:"Market Prices",sell:"Sell Produce",processing:"Processing Planner",storage:"Storage & Transport",
 profit:"Profit Calculator",schemes:"Govt Schemes",community:"Community",expert:"Expert Help",myfarm:"My Farm",
 settings:"Settings",greeting:"Namaste",opportunity:"What can I do with my crop?",
 soil:"Soil Health",waste:"Waste Exchange",family:"Family Account",admin:"Admin",
 live:"Live",sample:"Sample",demo:"Demo",loading:"Loading…",retry:"Retry",save:"Save",cancel:"Cancel",delete:"Delete",edit:"Edit",
 email:"Email",password:"Password",createAccount:"Create Account",signIn:"Sign In",useDemoInstead:"Explore Demo Instead",
 lastUpdated:"Last updated",source:"Source",offline:"Offline",online:"Online",uncertainResult:"This result is uncertain — please confirm with an agricultural expert.",
 contactExpert:"Contact an Expert",notifPrefs:"Notification Preferences",enableBrowserPush:"Enable browser reminders",
 confirmDelete:"Are you sure you want to delete this? This cannot be undone.",searchPlaceholder:"Search..."},
hi:{app:"स्मार्ट कृषी साथी",tagline:"आपका खेती साथी",login:"लॉगिन / रजिस्टर",guest:"डेमो देखें",
 dashboard:"डैशबोर्ड",advisory:"फसल सलाह",doctor:"फसल डॉक्टर",weather:"मौसम",calendar:"खेती कैलेंडर",
 market:"बाज़ार भाव",sell:"उपज बेचें",processing:"प्रोसेसिंग योजना",storage:"भंडारण व परिवहन",
 profit:"लाभ कैलकुलेटर",schemes:"सरकारी योजनाएँ",community:"समुदाय",expert:"विशेषज्ञ सहायता",myfarm:"मेरा खेत",
 settings:"सेटिंग्स",greeting:"नमस्ते",opportunity:"मेरी फसल से क्या कर सकता हूँ?",
 soil:"मृदा स्वास्थ्य",waste:"अपशिष्ट बाज़ार",family:"पारिवारिक खाता",admin:"एडमिन",
 email:"ईमेल",password:"पासवर्ड",createAccount:"खाता बनाएँ",signIn:"साइन इन करें",useDemoInstead:"डेमो देखें",
 live:"लाइव",sample:"नमूना",demo:"डेमो",loading:"लोड हो रहा है…",retry:"पुनः प्रयास करें",save:"सहेजें",cancel:"रद्द करें",delete:"हटाएं",edit:"संपादित करें",
 lastUpdated:"अंतिम अपडेट",source:"स्रोत",offline:"ऑफ़लाइन",online:"ऑनलाइन",uncertainResult:"यह परिणाम अनिश्चित है — कृपया कृषि विशेषज्ञ से पुष्टि करें।",
 contactExpert:"विशेषज्ञ से संपर्क करें",notifPrefs:"सूचना प्राथमिकताएँ",enableBrowserPush:"ब्राउज़र रिमाइंडर चालू करें",
 confirmDelete:"क्या आप वाकई इसे हटाना चाहते हैं? यह पूर्ववत नहीं किया जा सकता।",searchPlaceholder:"खोजें..."},
mr:{app:"स्मार्ट कृषी साथी",tagline:"तुमचा शेती सोबती",login:"लॉगिन / नोंदणी",guest:"डेमो पहा",
 dashboard:"डॅशबोर्ड",advisory:"पीक सल्ला",doctor:"पीक डॉक्टर",weather:"हवामान",calendar:"शेती दिनदर्शिका",
 market:"बाजारभाव",sell:"शेतमाल विका",processing:"प्रक्रिया योजना",storage:"साठवण व वाहतूक",
 profit:"नफा कॅल्क्युलेटर",schemes:"सरकारी योजना",community:"समुदाय",expert:"तज्ञ मदत",myfarm:"माझे शेत",
 settings:"सेटिंग्ज",greeting:"नमस्कार",opportunity:"माझ्या पिकाचे काय करू?",
 soil:"माती आरोग्य",waste:"शेती कचरा बाजार",family:"कौटुंबिक खाते",admin:"अ‍ॅडमिन",
 email:"ईमेल",password:"पासवर्ड",createAccount:"खाते तयार करा",signIn:"साइन इन करा",useDemoInstead:"डेमो पहा",
 live:"लाइव्ह",sample:"नमुना",demo:"डेमो",loading:"लोड होत आहे…",retry:"पुन्हा प्रयत्न करा",save:"जतन करा",cancel:"रद्द करा",delete:"काढून टाका",edit:"संपादित करा",
 lastUpdated:"शेवटचे अद्यतन",source:"स्रोत",offline:"ऑफलाइन",online:"ऑनलाइन",uncertainResult:"हा निकाल अनिश्चित आहे — कृपया कृषी तज्ञांकडून खात्री करा.",
 contactExpert:"तज्ञांशी संपर्क साधा",notifPrefs:"सूचना प्राधान्ये",enableBrowserPush:"ब्राउझर स्मरणपत्रे सुरू करा",
 confirmDelete:"तुम्हाला खात्री आहे की हे काढून टाकायचे? हे पूर्ववत करता येणार नाही.",searchPlaceholder:"शोधा..."}};

const CROPS = [
 {id:"cotton",name:"Cotton",soil:["black","loamy"],season:["kharif"],water:"medium",duration:"160-180 days",
  precautions:"Watch for pink bollworm; avoid waterlogging.",waterReq:"500-700 mm"},
 {id:"soybean",name:"Soybean",soil:["black","loamy"],season:["kharif"],water:"medium",duration:"90-100 days",
  precautions:"Ensure good drainage; treat seeds before sowing.",waterReq:"450-600 mm"},
 {id:"wheat",name:"Wheat",soil:["loamy","clay"],season:["rabi"],water:"medium",duration:"110-130 days",
  precautions:"Timely irrigation at crown root stage is critical.",waterReq:"400-450 mm"},
 {id:"orange",name:"Orange (Nagpur Santra)",soil:["loamy","sandy"],season:["perennial"],water:"medium",duration:"Perennial, fruits in 3 yrs",
  precautions:"Susceptible to citrus canker in humid weather.",waterReq:"900-1200 mm/yr"},
 {id:"onion",name:"Onion",soil:["loamy","sandy"],season:["rabi","kharif"],water:"low",duration:"100-120 days",
  precautions:"Avoid excess nitrogen; watch for thrips.",waterReq:"350-450 mm"},
 {id:"tomato",name:"Tomato",soil:["loamy","sandy"],season:["rabi","kharif"],water:"medium",duration:"70-90 days",
  precautions:"Stake plants; monitor for early blight.",waterReq:"400-500 mm"}];

const DISEASES = {
 cotton:{name:"Bacterial Blight (demo result)",symptoms:"Angular water-soaked leaf spots turning brown.",
  causes:"Xanthomonas bacteria, spread by rain splash.",prevention:"Use resistant seed varieties, avoid overhead irrigation.",
  treatment:"Copper-based sprays as advised by local Krishi Kendra."},
 soybean:{name:"Yellow Mosaic Virus (demo result)",symptoms:"Yellow mosaic patches on leaves, stunted growth.",
  causes:"Spread by whitefly vector.",prevention:"Control whitefly, use tolerant varieties.",
  treatment:"Remove infected plants; consult agri officer for insecticide advice."},
 wheat:{name:"Leaf Rust (demo result)",symptoms:"Orange-brown pustules on leaf surface.",
  causes:"Fungal infection favoured by humid, mild weather.",prevention:"Timely sowing, resistant varieties.",
  treatment:"Fungicide spray recommended by local expert if severe."},
 orange:{name:"Citrus Canker (demo result)",symptoms:"Raised corky lesions on leaves and fruit.",
  causes:"Bacterial infection spread by wind-driven rain.",prevention:"Prune infected twigs, avoid injury to plants.",
  treatment:"Copper oxychloride spray; consult horticulture officer."},
 onion:{name:"Purple Blotch (demo result)",symptoms:"Purple-brown concentric lesions on leaves.",
  causes:"Fungal, favoured by warm humid conditions.",prevention:"Avoid dense planting, ensure drainage.",
  treatment:"Recommended fungicide from local dealer, confirm with expert."},
 tomato:{name:"Early Blight (demo result)",symptoms:"Dark concentric ring spots on older leaves.",
  causes:"Fungal, spreads in warm humid weather.",prevention:"Crop rotation, remove infected leaves.",
  treatment:"Fungicide as advised; consult expert for severe spread."}};

const MARKET = [
 {crop:"Cotton",market:"Amravati",dist:"Amravati",unit:"per quintal",price:7200,date:"2026-09-24"},
 {crop:"Cotton",market:"Yavatmal",dist:"Yavatmal",unit:"per quintal",price:6950,date:"2026-09-24"},
 {crop:"Soybean",market:"Latur",dist:"Latur",unit:"per quintal",price:4300,date:"2026-09-25"},
 {crop:"Soybean",market:"Akola",dist:"Akola",unit:"per quintal",price:4150,date:"2026-09-25"},
 {crop:"Wheat",market:"Nashik",dist:"Nashik",unit:"per quintal",price:2450,date:"2026-09-23"},
 {crop:"Onion",market:"Lasalgaon",dist:"Nashik",unit:"per quintal",price:1800,date:"2026-09-26"},
 {crop:"Onion",market:"Pune",dist:"Pune",unit:"per quintal",price:1950,date:"2026-09-26"},
 {crop:"Tomato",market:"Pune",dist:"Pune",unit:"per quintal",price:1200,date:"2026-09-26"},
 {crop:"Tomato",market:"Nagpur",dist:"Nagpur",unit:"per quintal",price:1050,date:"2026-09-26"},
 {crop:"Orange",market:"Nagpur",dist:"Nagpur",unit:"per quintal",price:3600,date:"2026-09-22"}];

const PROCESSING = {
 tomato:[{prod:"Tomato Puree",ingredients:"Tomatoes, salt, citric acid",equipment:"Pulper, boiler, bottles",
   steps:"Wash, blanch, pulp, cook, bottle, sterilize.",costPerKg:14,pricePerKg:38,yieldPct:0.85},
  {prod:"Tomato Sauce",ingredients:"Tomatoes, sugar, spices, vinegar",equipment:"Cooking vessel, bottling unit",
   steps:"Cook pulp with spices, bottle, seal.",costPerKg:20,pricePerKg:55,yieldPct:0.6}],
 onion:[{prod:"Dried Onion Flakes",ingredients:"Onions, salt",equipment:"Slicer, dryer/dehydrator",
   steps:"Peel, slice, dry, pack.",costPerKg:16,pricePerKg:60,yieldPct:0.12}],
 wheat:[{prod:"Wheat Flour (Atta)",ingredients:"Wheat grain",equipment:"Flour mill (chakki)",
   steps:"Clean grain, grind, sieve, pack.",costPerKg:22,pricePerKg:32,yieldPct:0.92}],
 orange:[{prod:"Orange Squash",ingredients:"Orange juice, sugar, citric acid, preservative",equipment:"Juicer, mixing vessel, bottles",
   steps:"Extract juice, mix syrup, bottle, pasteurize.",costPerKg:25,pricePerKg:70,yieldPct:0.4}],
 cotton:[{prod:"Ginned Cotton + Cottonseed Oil",ingredients:"Raw cotton",equipment:"Ginning unit, oil expeller",
   steps:"Gin cotton, extract seed, press oil.",costPerKg:10,pricePerKg:18,yieldPct:0.35}],
 soybean:[{prod:"Soybean Oil + De-oiled Cake",ingredients:"Soybean seed",equipment:"Oil expeller",
   steps:"Clean seed, press for oil, collect cake.",costPerKg:12,pricePerKg:22,yieldPct:0.18}]};

const FACILITIES = [
 {name:"Krishna Cold Storage",type:"Cold Storage",dist:"Nashik",capacity:"500 MT",charge:"₹4/kg/month (approx)"},
 {name:"Vidarbha Warehouse Co.",type:"Warehouse",dist:"Amravati",capacity:"1000 MT",charge:"₹2.5/kg/month (approx)"},
 {name:"Shivshakti Transport",type:"Transport",dist:"Pune",capacity:"10 MT trucks",charge:"₹22/km (approx)"},
 {name:"Nagpur Agro Processing Unit",type:"Processing",dist:"Nagpur",capacity:"2 MT/day",charge:"Contact for rate"}];

const SCHEMES = [
 {name:"PM-KISAN",desc:"Income support of ₹6000/year to landholding farmer families.",
  eligibility:"Landholding farmer families as per state records.",docs:"Aadhaar, land records, bank account.",
  link:"https://pmkisan.gov.in", source:"pmkisan.gov.in (official)", lastReviewed:"2026-01-15"},
 {name:"PMFBY (Crop Insurance)",desc:"Insurance cover for crop loss due to natural calamities.",
  eligibility:"Farmers growing notified crops in notified areas.",docs:"Land records, sowing certificate, bank account.",
  link:"https://pmfby.gov.in", source:"pmfby.gov.in (official)", lastReviewed:"2026-01-15"},
 {name:"Soil Health Card Scheme",desc:"Free soil testing and nutrient recommendations.",
  eligibility:"All farmers.",docs:"Land details, Aadhaar.",link:"https://soilhealth.dac.gov.in", source:"soilhealth.dac.gov.in (official)", lastReviewed:"2026-01-15"}];
/* NOTE for maintainers: scheme eligibility rules and links change over time.
   Re-verify against the official government site above before every
   demo/deployment and update lastReviewed accordingly — do not present
   stale scheme details as current without checking. */

const KB = [ // simple keyword -> answer knowledge base (all languages folded together)
 {kw:["cotton","disease","कापूस","कपास"],a:"For cotton pest issues, check for pink bollworm and consult your local Krishi Kendra."},
 {kw:["price","भाव","दर","daam"],a:"Open the Market Prices section to see the latest sample mandi rates near you."},
 {kw:["water","पानी","पाणी","irrigation"],a:"Water needs vary by crop — check Crop Advisory for crop-specific guidance."},
 {kw:["scheme","yojana","योजना"],a:"Visit Govt Schemes to see PM-KISAN, PMFBY and Soil Health Card details."},
 {kw:["weather","मौसम","हवामान"],a:"Check the Weather tab for the sample forecast and alerts for your district."}];

const WASTE_DEMO = [
 {item:"Wheat Straw",qty:"500 kg",loc:"Nashik",price:"₹4/kg",by:"Demo: Ramesh (Wheat farmer)"},
 {item:"Cotton Stalks",qty:"1200 kg",loc:"Amravati",price:"₹2/kg",by:"Demo: Suresh (Cotton farmer)"},
 {item:"Vegetable Waste",qty:"200 kg",loc:"Pune",price:"Free / barter",by:"Demo: Anita (Tomato farmer)"}];

const ADMIN_FARMERS_DEMO = [
 {name:"Ramesh Patil",village:"Wardha",crops:"Cotton, Soybean"},
 {name:"Sunita Jadhav",village:"Nashik",crops:"Onion, Tomato"},
 {name:"Ganesh More",village:"Kolhapur",crops:"Wheat"}];

/* ================= STATE ================= */
let LANG = localStorage.ks_lang || "en";
let FARMER = JSON.parse(localStorage.ks_farmer || "null");
let currentView = "dashboard";
const T = ()=>STR[LANG];
function save(k,v){
  localStorage.setItem(k, typeof v==="string"?v:JSON.stringify(v));
  // Best-effort cloud sync (no-op in demo mode / when signed out). Never
  // blocks the UI — localStorage above already made the change visible.
  if(window.KS && !window.KS.demoMode){
    window.KS.Data.save(k, v).then(ok=>{ if(!ok && window.KSOfflineQueue) window.KSOfflineQueue.enqueue(k, v); }).catch(()=>{
      if(window.KSOfflineQueue) window.KSOfflineQueue.enqueue(k, v);
    });
  }
}
function load(k,def){try{const v=localStorage.getItem(k);return v?JSON.parse(v):def;}catch(e){return def;}}
let CALENDAR = load("ks_calendar",[]);
let LISTINGS = load("ks_listings",[]);
let PROFIT_RECORDS = load("ks_profit",[]);
let TICKETS = load("ks_tickets",[]);
let NOTIFS = load("ks_notifs",[
 {id:1,text:"Reminder: Irrigate wheat field this week (sample).",read:false},
 {id:2,text:"Heavy rain alert issued for your district (sample).",read:false},
 {id:3,text:"Your onion listing received a buyer inquiry (demo).",read:true}]);
let BOOKMARKS = load("ks_bookmarks",[]);
let SOIL_RECORDS = load("ks_soil",[]);
let WASTE_LISTINGS = load("ks_waste",[]);
let FAMILY = load("ks_family",[]);
let IS_ADMIN = load("ks_admin",false);
let isOnline = navigator.onLine;
window.addEventListener("online", ()=>{isOnline=true; render();});
window.addEventListener("offline", ()=>{isOnline=false; render();});

function toast(msg){const d=document.createElement("div");d.className="toast";d.textContent=msg;document.body.appendChild(d);
 setTimeout(()=>d.remove(),2200);}

/* ================= RENDER SHELL ================= */
function render(){
  const app = document.getElementById("app");
  if(!FARMER){ app.innerHTML = authScreen(); attachAuthEvents(); return; }
  app.innerHTML = `
  <div id="topbar">
    <div class="brand"><span class="leaf-icon">🌾</span>${T().app}</div>
    <select id="langSel">
      <option value="en" ${LANG==="en"?"selected":""}>English</option>
      <option value="hi" ${LANG==="hi"?"selected":""}>हिंदी</option>
      <option value="mr" ${LANG==="mr"?"selected":""}>मराठी</option>
    </select>
    <button class="bell" id="bellBtn">🔔${NOTIFS.some(n=>!n.read)?'<span class="dot"></span>':""}</button>
    <button id="logoutBtn">⎋</button>
  </div>
  <div id="nav"></div>
  ${isOnline?"":'<div class="wrap"><div class="card" style="border-left:5px solid var(--danger);margin-top:10px">📴 Offline — showing your saved data only. Live weather, prices and messages are unavailable until you reconnect.</div></div>'}
  <main class="wrap"><div id="view" class="view"></div></main>`;
  const navItems = [["dashboard","🏠"],["advisory","🌱"],["doctor","🩺"],["weather","⛅"],["calendar","📅"],
   ["market","💰"],["sell","🧺"],["processing","🏭"],["storage","🚚"],["profit","📊"],["soil","🧪"],["waste","♻️"],
   ["schemes","🏛️"],["expert","🧑‍🌾"],["family","👨‍👩‍👧"],["settings","⚙️"]];
  if(IS_ADMIN) navItems.push(["admin","🛡️"]);
  document.getElementById("nav").innerHTML = navItems.map(([id])=>
    `<button data-v="${id}" class="${currentView===id?"active":""}">${T()[id]}</button>`).join("");
  document.getElementById("nav").querySelectorAll("button").forEach(b=>b.onclick=()=>{currentView=b.dataset.v;render();});
  document.getElementById("langSel").onchange = e=>{LANG=e.target.value;save("ks_lang",LANG);render();};
  document.getElementById("logoutBtn").onclick = async ()=>{
    if(!confirm("Log out?")) return;
    if(window.KS && !window.KS.demoMode){ try{ await window.KS.Auth.logout(); }catch(e){} }
    FARMER=null; localStorage.removeItem("ks_farmer"); render();
  };
  document.getElementById("bellBtn").onclick = ()=>{currentView="notifs";render();};
  renderView();
}

function authScreen(){
  const live = window.KS && !window.KS.demoMode;
  return `<div id="authScreen"><div id="authCard" class="card">
   <h1>🌾 ${T().app}</h1><p class="muted">${T().tagline} — ${live?
     `<span class="tag">Firebase account</span>`:`<span class="tag demo">Demo Mode (no live backend)</span>`}</p>
   ${live?`<div class="row" style="margin-bottom:8px">
     <div><label>${T().email}</label><input id="f_email" type="email" placeholder="you@example.com"></div>
     <div><label>${T().password}</label><input id="f_password" type="password" placeholder="min. 6 characters"></div></div>
    <p id="authError" class="muted" style="color:var(--danger)"></p>`:""}
   <form id="authForm">
    <label>Name</label><input required id="f_name" placeholder="e.g. Ramesh Patil">
    <div class="row"><div><label>Village</label><input id="f_village" placeholder="e.g. Wardha"></div>
     <div><label>District</label><input id="f_dist" placeholder="e.g. Nashik"></div></div>
    <div class="row"><div><label>State</label><input id="f_state" value="Maharashtra"></div>
     <div><label>Preferred Language</label><select id="f_lang"><option value="en">English</option><option value="hi">हिंदी</option><option value="mr" selected>मराठी</option></select></div></div>
    <div class="row"><div><label>Farm size (acres)</label><input id="f_size" type="number" value="2.5"></div>
     <div><label>Soil type</label><select id="f_soil"><option>loamy</option><option>black</option><option>sandy</option><option>clay</option></select></div></div>
    <div class="row"><div><label>Irrigation available?</label><select id="f_irr"><option>Yes</option><option>No</option><option>Partial</option></select></div>
     <div><label>Main crops grown</label><input id="f_crops" placeholder="e.g. Cotton, Soybean"></div></div>
    <div class="row" style="margin-top:16px">
     ${live?`<button type="submit" class="btn" id="f_registerBtn">${T().createAccount}</button>
      <button type="button" id="f_loginBtn" class="btn outline">${T().signIn}</button>`:
      `<button type="submit" class="btn">${T().login}</button>`}
     <button type="button" id="guestBtn" class="btn outline">${live?T().useDemoInstead:T().guest}</button>
    </div>
   </form>
   <p class="muted" style="margin-top:14px">${live?
     "Your account and farm data are securely stored with Firebase Authentication and Cloud Firestore, tied to your account only.":
     "All data stays on this device (localStorage) in demo mode. No password/backend is used."}</p>
  </div></div>`;
}
function attachAuthEvents(){
  const live = window.KS && !window.KS.demoMode;
  const buildProfile = ()=>({name:f_name.value||"Farmer", village:f_village.value||"—", district:f_dist.value||"—",
      state:f_state.value, lang:f_lang.value, size:f_size.value, soil:f_soil.value, irrigation:f_irr.value,
      crops:f_crops.value||"—"});
  const setAuthErr = (msg)=>{ const el=document.getElementById("authError"); if(el) el.textContent=msg||""; };
  const setBusy = (btn,busy,label)=>{ if(!btn) return; btn.disabled=busy; btn.textContent = busy?T().loading:label; };

  document.getElementById("authForm").onsubmit=async e=>{
    e.preventDefault();
    if(!live){
      FARMER = buildProfile(); LANG=FARMER.lang; save("ks_lang",LANG); save("ks_farmer",FARMER); render(); return;
    }
    // Live mode: register a real Firebase account, then save the profile form as Firestore data.
    setAuthErr("");
    if(!f_email.value || !f_password.value || f_password.value.length<6){ setAuthErr("Enter a valid email and a password of at least 6 characters."); return; }
    const btn=document.getElementById("f_registerBtn"); setBusy(btn,true,T().createAccount);
    try{
      const profile = buildProfile();
      await window.KS.Auth.registerWithEmail(f_email.value.trim(), f_password.value, profile);
      FARMER = profile; LANG=FARMER.lang; save("ks_lang",LANG); save("ks_farmer",FARMER);
      toast("Account created"); render();
    }catch(err){ setAuthErr(friendlyAuthError(err)); }
    finally{ setBusy(btn,false,T().createAccount); }
  };
  const loginBtn = document.getElementById("f_loginBtn");
  if(loginBtn) loginBtn.onclick=async ()=>{
    setAuthErr("");
    if(!f_email.value || !f_password.value){ setAuthErr("Enter your email and password."); return; }
    setBusy(loginBtn,true,T().signIn);
    try{
      await window.KS.Auth.loginWithEmail(f_email.value.trim(), f_password.value);
      const profile = await window.KS.Auth.getProfile();
      if(profile){ FARMER=profile; save("ks_farmer",FARMER); }
      await hydrateAllFromCloud();
      toast("Signed in"); render();
    }catch(err){ setAuthErr(friendlyAuthError(err)); }
    finally{ setBusy(loginBtn,false,T().signIn); }
  };
  document.getElementById("guestBtn").onclick=()=>{
    FARMER={name:"Guest Farmer",village:"Shirdi",district:"Ahmednagar",state:"Maharashtra",lang:LANG,
      size:"3",soil:"loamy",irrigation:"Partial",crops:"Onion, Tomato"};
    save("ks_farmer",FARMER); render();
  };
}
/** Pulls this farmer's saved records down from Firestore into the
 * localStorage cache and refreshes in-memory state. Call after any
 * successful sign-in (login form, or a restored session via onAuthChange). */
async function hydrateAllFromCloud(){
  if(!window.KS || window.KS.demoMode) return;
  await window.KS.Data.hydrate();
  FARMER=load("ks_farmer",FARMER); CALENDAR=load("ks_calendar",CALENDAR); LISTINGS=load("ks_listings",LISTINGS);
  PROFIT_RECORDS=load("ks_profit",PROFIT_RECORDS); TICKETS=load("ks_tickets",TICKETS); NOTIFS=load("ks_notifs",NOTIFS);
  BOOKMARKS=load("ks_bookmarks",BOOKMARKS); SOIL_RECORDS=load("ks_soil",SOIL_RECORDS); WASTE_LISTINGS=load("ks_waste",WASTE_LISTINGS);
  FAMILY=load("ks_family",FAMILY);
  if(window.KSOfflineQueue) window.KSOfflineQueue.flush();
}
function friendlyAuthError(err){
  const code = err && err.code || "";
  const map = {"auth/email-already-in-use":"That email is already registered — try Sign In instead.",
   "auth/invalid-email":"Please enter a valid email address.","auth/weak-password":"Password should be at least 6 characters.",
   "auth/user-not-found":"No account found with that email.","auth/wrong-password":"Incorrect password.",
   "auth/invalid-credential":"Incorrect email or password."};
  return map[code] || (err && err.message) || "Something went wrong. Please try again.";
}

/* ================= VIEW ROUTER ================= */
function renderView(){
  const v = document.getElementById("view");
  const fns = {dashboard:viewDashboard, advisory:viewAdvisory, doctor:viewDoctor, weather:viewWeather,
   calendar:viewCalendar, market:viewMarket, sell:viewSell, processing:viewProcessing, storage:viewStorage,
   profit:viewProfit, schemes:viewSchemes, expert:viewExpert, settings:viewSettings, notifs:viewNotifs,
   opportunity:viewOpportunity, soil:viewSoil, waste:viewWaste, family:viewFamily, admin:viewAdmin};
  v.innerHTML = (fns[currentView]||viewDashboard)();
  attachViewEvents();
}

/* ---------- Dashboard ---------- */
function viewDashboard(){
  const upcoming = CALENDAR.filter(t=>!t.done).slice(0,3);
  const topPrices = MARKET.slice(0,3);
  return `
  <h2>${T().greeting}, ${FARMER.name} 👋</h2>
  <div class="grid">
   <div class="card"><h3>My Farm</h3><p class="muted">${FARMER.village}, ${FARMER.district}</p>
    <p>Size: ${FARMER.size} acres · Soil: ${FARMER.soil} · Irrigation: ${FARMER.irrigation}</p>
    <p>Crops: ${FARMER.crops}</p></div>
   <div class="card"><h3>Weather <span class="tag sample">Sample Weather – Not Live</span></h3>
    <p>${FARMER.district}: 31°C, partly cloudy. Chance of rain tomorrow.</p>
    <button class="btn small outline" data-v="weather">See forecast</button></div>
   <div class="card"><h3>Upcoming Tasks</h3>
    ${upcoming.length?upcoming.map(t=>`<div class="list-item"><span>${t.crop} — ${t.type} (${t.date})</span></div>`).join(""):
      '<p class="empty">No tasks yet. Add one in Farm Calendar.</p>'}</div>
   <div class="card"><h3>Price Highlights <span class="tag sample">DEMO DATA – Not Current Market Prices</span></h3>
    ${topPrices.map(m=>`<div class="list-item"><span>${m.crop} (${m.market})</span><b>₹${m.price}/qtl</b></div>`).join("")}</div>
   <div class="card"><h3>My Listings</h3>
    ${LISTINGS.length?`<p>${LISTINGS.length} active produce listing(s).</p>`:'<p class="empty">No listings yet.</p>'}
    <button class="btn small outline" data-v="sell">Go to Sell Produce</button></div>
   <div class="card" style="background:linear-gradient(135deg,#EFE8D6,#F6F2E7);border:2px solid var(--turmeric)">
    <h3>🌟 ${T().opportunity}</h3><p class="muted">Compare sell / process / store / group-sale in one place.</p>
    <button class="btn" data-v="opportunity">Find Opportunities</button></div>
  </div>`;
}

/* ---------- Crop Advisory ---------- */
function viewAdvisory(){
  return `<h2>${T().advisory}</h2><p class="muted">Rule-based demo engine. Not a guarantee — confirm with local experts.</p>
  <div class="card">
   <div class="row">
    <div><label>Soil type</label><select id="a_soil"><option value="loamy">Loamy</option><option value="black">Black</option><option value="sandy">Sandy</option><option value="clay">Clay</option></select></div>
    <div><label>Season</label><select id="a_season"><option value="kharif">Kharif</option><option value="rabi">Rabi</option><option value="perennial">Perennial</option></select></div>
    <div><label>Water availability</label><select id="a_water"><option value="medium">Medium</option><option value="low">Low</option><option value="high">High</option></select></div>
   </div>
   <button class="btn" id="advisoryBtn" style="margin-top:12px">Get Recommendations</button>
  </div>
  <div id="advisoryResults" class="grid" style="margin-top:16px"></div>`;
}
function runAdvisory(){
  const soil=a_soil.value, season=a_season.value;
  const matches = CROPS.filter(c=>c.soil.includes(soil) && c.season.includes(season));
  const box = document.getElementById("advisoryResults");
  if(!matches.length){box.innerHTML='<p class="empty">No close match in demo dataset — try a different soil/season combination.</p>';return;}
  box.innerHTML = matches.map(c=>`<div class="card"><h3>${c.name}</h3>
   <p class="muted">Duration: ${c.duration} · Water: ${c.waterReq}</p>
   <p>Suitable because it matches your ${soil} soil and ${season} season in this demo dataset.</p>
   <p><b>Precaution:</b> ${c.precautions}</p></div>`).join("");
}

/* ---------- Crop Doctor ---------- */
function viewDoctor(){
  const live = window.KSAiCropDoctor && window.KSAiCropDoctor.isLive();
  return `<h2>${T().doctor}</h2><p class="muted">${live?`<span class="tag">${T().live}</span> Connected to an AI diagnosis backend.`:
    `<span class="tag demo">${T().demo} result</span> No AI backend configured — results are simulated. See js/config.js.`}</p>
  <div class="card">
   <label>Select crop</label><select id="d_crop">${CROPS.map(c=>`<option value="${c.id}">${c.name}</option>`).join("")}</select>
   <label>Upload / capture leaf photo</label><input type="file" id="d_file" accept="image/*" capture="environment">
   <img id="d_preview" class="hidden" style="margin-top:10px;border-radius:10px;max-height:220px">
   <button class="btn" id="d_go" style="margin-top:12px">Diagnose (Demo)</button>
  </div>
  <div id="d_result" style="margin-top:16px"></div>`;
}

/* ---------- Weather ---------- */
const WEATHER_DISTRICTS = ["Nashik","Amravati","Pune","Nagpur","Yavatmal","Latur","Akola","Kolhapur","Wardha","Ahmednagar"];
function viewWeather(){
  const live = window.KSWeather && window.KSWeather.isLive();
  return `<h2>${T().weather}</h2>
  <p class="muted">${live?`<span class="tag">${T().live}</span> Connected to a live weather API.`:
    `<span class="tag sample">Sample Weather – Not Live</span> No weather API key configured — showing clearly-labelled sample data. See js/config.js.`}</p>
  <div class="card"><label>District</label><select id="w_loc">${WEATHER_DISTRICTS.map(d=>`<option ${d===(FARMER.district)?"selected":""}>${d}</option>`).join("")}</select></div>
  <div id="weatherBox" style="margin-top:14px"><p class="muted">${T().loading}</p></div>`;
}
async function loadWeather(){
  const box = document.getElementById("weatherBox");
  const district = document.getElementById("w_loc").value;
  box.innerHTML = `<p class="muted">${T().loading}</p>`;
  let data;
  try{
    if(!isOnline){
      const cached=load("ks_weather_cache_"+district,null);
      if(cached) data=cached;
      else throw new Error("No saved weather for this district.");
    }else{
      data = await window.KSWeather.getForecast(district);
      if(data) save("ks_weather_cache_"+district,data);
    }
  }catch(e){
    const cached=load("ks_weather_cache_"+district,null);
    if(cached) data=cached;
    else { box.innerHTML = `<div class="card" style="border-left:5px solid var(--danger)"><p>Could not load weather. <button class="btn small outline" id="w_retry">${T().retry}</button></p></div>`;
      const r=document.getElementById("w_retry"); if(r) r.onclick=loadWeather; return; }
  }
  const badge = data.source==="live" ? `<span class="tag">${T().live}${data.provider?" · "+data.provider:""}</span>` : `<span class="tag sample">${T().sample}</span>`;
  box.innerHTML = `
   <div class="card">${badge} <span class="muted">${T().lastUpdated}: ${new Date(data.updatedAt).toLocaleString()}</span>
    <p style="margin-top:8px">🌡️ ${data.current.temp}°C · ${data.current.condition} · 💧 ${data.current.humidity}% humidity</p></div>
   <div class="grid" style="margin-top:14px">
    ${data.days.map(d=>`<div class="card"><h3>${d.label}</h3><p>🌡️ ${d.temp}°C</p><p>🌧️ Rain chance: ${d.rainChancePct}%</p></div>`).join("")}
   </div>
   ${data.alerts.length?data.alerts.map(a=>`<div class="card" style="margin-top:14px;border-left:5px solid var(--danger)">
     <h3>⚠️ ${a.level==="danger"?"Extreme Weather Alert":"Weather Alert"}</h3><p>${a.text}</p></div>`).join(""):
    '<div class="card" style="margin-top:14px"><p class="muted">No active alerts for this forecast.</p></div>'}
   <div class="card" style="margin-top:14px"><h3>General crop precautions</h3>
    <p class="muted">${data.days.some(d=>d.rainChancePct>=60)?"Heavy rain risk in the forecast — avoid spraying pesticide/fungicide right before rain, and ensure field drainage channels are clear.":
      data.current.temp>=38?"High temperatures — irrigate during early morning or evening, and watch young/transplanted crops for heat stress.":
      "No major weather risk flagged in this forecast — continue routine crop care."}</p></div>`;
}

/* ---------- Calendar ---------- */
function viewCalendar(){
  return `<h2>${T().calendar}</h2>
  <div class="card"><div class="row">
    <div><label>Crop</label><input id="c_crop" placeholder="e.g. Cotton"></div>
    <div><label>Task</label><select id="c_type"><option>Sowing</option><option>Irrigation</option><option>Fertilizer</option><option>Spraying</option><option>Harvesting</option></select></div>
    <div><label>Date</label><input id="c_date" type="date"></div></div>
   <button class="btn" id="c_add" style="margin-top:10px">Add Task</button></div>
  <div class="grid" style="margin-top:16px">
   <div class="card"><h3>Upcoming</h3><div id="c_upcoming"></div></div>
   <div class="card"><h3>Completed</h3><div id="c_done"></div></div>
  </div>`;
}
function renderCalendarLists(){
  const up=CALENDAR.filter(t=>!t.done), done=CALENDAR.filter(t=>t.done);
  document.getElementById("c_upcoming").innerHTML = up.length?up.map(t=>`<div class="list-item">
    <span>${t.crop} — ${t.type} (${t.date})</span>
    <span><button class="btn small" data-done="${t.id}">✓ Done</button></span></div>`).join(""):'<p class="empty">No upcoming tasks.</p>';
  document.getElementById("c_done").innerHTML = done.length?done.map(t=>`<div class="list-item"><span>${t.crop} — ${t.type} (${t.date})</span><span class="pill done">Done</span></div>`).join(""):'<p class="empty">Nothing completed yet.</p>';
  document.querySelectorAll("[data-done]").forEach(b=>b.onclick=()=>{
    CALENDAR.find(t=>t.id==b.dataset.done).done=true; save("ks_calendar",CALENDAR); renderCalendarLists();
    NOTIFS.unshift({id:Date.now(),text:"Task marked complete: "+b.closest(".list-item").textContent,read:false}); save("ks_notifs",NOTIFS);
  });
}

/* ---------- Market ---------- */
let MARKET_LIVE = null; // cache of last fetched {source, updatedAt, rows, provider, error}
function viewMarket(){
  return `<h2>${T().market}</h2><div id="m_status" class="muted">${T().loading}</div>
  <div class="card" style="margin-top:8px"><div class="row">
   <div><label>Search crop</label><select id="m_crop"><option value="">All</option>${[...new Set(MARKET.map(m=>m.crop))].map(c=>`<option>${c}</option>`).join("")}</select></div>
   <div><label>Search mandi/market</label><input id="m_search" placeholder="e.g. Nashik"></div>
   <div style="align-self:end"><button class="btn small outline" id="m_refresh">${T().retry}</button></div>
  </div></div>
  <div class="card" style="margin-top:12px;overflow-x:auto"><table id="m_table"></table></div>`;
}
async function loadMarket(){
  document.getElementById("m_status").textContent = T().loading;
  const crop=document.getElementById("m_crop").value;
  const cacheKey="ks_market_cache_"+(crop||"all");
  try{
    if(!isOnline){
      MARKET_LIVE=load(cacheKey,null);
      if(!MARKET_LIVE) throw new Error("No saved market data.");
    }else{
      MARKET_LIVE = await window.KSMarket.getPrices({ crop });
      if(MARKET_LIVE) save(cacheKey,MARKET_LIVE);
    }
    renderMarketTable();
  }catch(e){
    MARKET_LIVE=load(cacheKey,null);
    if(MARKET_LIVE) renderMarketTable();
    else document.getElementById("m_status").innerHTML=`<span class="tag demo">Offline</span> No saved market data on this device yet.`;
  }
}
function renderMarketTable(){
  if(!MARKET_LIVE){ return; }
  const data = MARKET_LIVE;
  const badge = data.source==="live" ? `<span class="tag">${T().live}${data.provider?" · "+data.provider:""}</span>` : `<span class="tag sample">DEMO DATA – Not Current Market Prices</span> Connect a verified price API in js/config.js for live rates.`;
  document.getElementById("m_status").innerHTML = `${badge} <span class="muted">${T().lastUpdated}: ${new Date(data.updatedAt).toLocaleString()}</span>`;
  const cropFilter = document.getElementById("m_crop").value;
  const searchFilter = (document.getElementById("m_search").value||"").toLowerCase();
  const rows = data.rows.filter(m=>(!cropFilter||m.crop===cropFilter) && (!searchFilter||m.market.toLowerCase().includes(searchFilter)||m.dist.toLowerCase().includes(searchFilter)));
  const max = Math.max(...rows.map(r=>r.modal||r.min||0),1);
  document.getElementById("m_table").innerHTML = rows.length? `<tr><th>Crop</th><th>Market</th><th>Min</th><th>Max</th><th>Modal (₹/qtl)</th><th>Compare</th><th>Date</th></tr>` +
   rows.map(r=>`<tr><td>${r.crop}</td><td>${r.market}, ${r.dist}</td><td>₹${r.min ?? "—"}</td><td>₹${r.max ?? "—"}</td><td>₹${r.modal ?? "—"}</td>
    <td style="min-width:100px"><div class="bar"><i style="width:${((r.modal||r.min||0)/max*100).toFixed(0)}%"></i></div></td><td>${r.date}</td></tr>`).join("")
   : `<tr><td class="empty">No matching prices. ${data.error?("Note: "+data.error):""}</td></tr>`;
}

/* ---------- Sell Produce ---------- */
function viewSell(){
  return `<h2>${T().sell}</h2>
  <div class="card"><h3>New Listing</h3>
   <div class="row">
    <div><label>Crop</label><input id="s_crop" placeholder="e.g. Tomato"></div>
    <div><label>Quantity (kg)</label><input id="s_qty" type="number"></div>
    <div><label>Quality</label><select id="s_quality"><option>Grade A</option><option>Grade B</option><option>Mixed</option></select></div>
   </div>
   <div class="row">
    <div><label>Expected price (₹/qtl)</label><input id="s_price" type="number"></div>
    <div><label>Harvest date</label><input id="s_hdate" type="date"></div>
    <div><label><input type="checkbox" id="s_group" style="width:auto;display:inline"> Join group selling</label></div>
   </div>
   <button class="btn" id="s_add" style="margin-top:10px">Create Listing</button></div>
  <div class="grid" style="margin-top:16px">
   <div class="card"><h3>My Listings</h3><div id="s_mine"></div></div>
   <div class="card"><h3>Buyer Directory <span class="tag demo">Demo</span></h3>
    <div class="list-item"><span>Sahyadri Agro Traders (Nashik) — buys onion, tomato</span><button class="btn small outline" data-buyer="Sahyadri Agro Traders">Inquire</button></div>
    <div class="list-item"><span>Vidarbha FarmFresh (Amravati) — buys cotton, soybean</span><button class="btn small outline" data-buyer="Vidarbha FarmFresh">Inquire</button></div>
   </div>
  </div>`;
}
function renderMyListings(){
  document.getElementById("s_mine").innerHTML = LISTINGS.length?LISTINGS.map(l=>`<div class="list-item">
   <span>${l.crop} · ${l.qty}kg · ₹${l.price}/qtl ${l.group?'· <span class="tag">Group</span>':""}</span>
   <span class="pill open">Active</span></div>`).join(""):'<p class="empty">No listings yet.</p>';
}

/* ---------- Processing Planner ---------- */
function viewProcessing(){
  const cropsWithProc = Object.keys(PROCESSING);
  return `<h2>${T().processing}</h2><p class="muted">Sample cost/profit assumptions — edit and recalculate. Not a profitability guarantee.</p>
  <div class="card"><div class="row">
   <div><label>Crop</label><select id="p_crop">${cropsWithProc.map(c=>`<option value="${c}">${CROPS.find(x=>x.id===c).name}</option>`).join("")}</select></div>
   <div><label>Available quantity (kg)</label><input id="p_qty" type="number" value="100"></div>
  </div><button class="btn" id="p_go" style="margin-top:10px">Show Options</button></div>
  <div id="p_results" class="grid" style="margin-top:16px"></div>`;
}
function renderProcessing(){
  const crop=p_crop.value, qty=parseFloat(p_qty.value)||0;
  const opts = PROCESSING[crop]||[];
  document.getElementById("p_results").innerHTML = opts.map((o,i)=>{
    const outputKg = (qty*o.yieldPct).toFixed(1);
    const cost = (qty*o.costPerKg).toFixed(0);
    const revenue = (outputKg*o.pricePerKg).toFixed(0);
    const profit = (revenue-cost).toFixed(0);
    return `<div class="card"><h3>${o.prod}</h3>
     <p class="muted">Ingredients: ${o.ingredients}</p><p class="muted">Equipment: ${o.equipment}</p>
     <p>${o.steps}</p>
     <div class="row"><div><label>Cost/kg input (₹)</label><input class="p_cost" data-i="${i}" type="number" value="${o.costPerKg}"></div>
      <div><label>Sell price/kg output (₹)</label><input class="p_price" data-i="${i}" type="number" value="${o.pricePerKg}"></div></div>
     <p style="margin-top:8px"><b>Est. output:</b> ${outputKg} kg &nbsp; <b>Cost:</b> ₹${cost} &nbsp; <b>Revenue:</b> ₹${revenue}</p>
     <p><b>Est. profit: <span style="color:${profit>=0?'var(--leaf-dark)':'var(--danger)'}">₹${profit}</span></b> <span class="tag sample">Sample assumption</span></p>
    </div>`;
  }).join("");
  document.querySelectorAll(".p_cost,.p_price").forEach(inp=>inp.onchange=e=>{
    const i=e.target.dataset.i; opts[i][e.target.classList.contains("p_cost")?"costPerKg":"pricePerKg"]=parseFloat(e.target.value)||0;
    renderProcessing();
  });
}

/* ---------- Storage & Transport ---------- */
function viewStorage(){
  return `<h2>${T().storage}</h2><p class="muted"><span class="tag demo">Demo directory</span> Verify local details before use.</p>
  <div class="card"><label>Filter by type</label><select id="st_type"><option value="">All</option>
   <option>Cold Storage</option><option>Warehouse</option><option>Transport</option><option>Processing</option></select></div>
  <div id="st_list" class="grid" style="margin-top:14px"></div>`;
}
function renderStorage(){
  const f = st_type.value;
  const rows = FACILITIES.filter(x=>!f||x.type===f);
  document.getElementById("st_list").innerHTML = rows.map(x=>`<div class="card"><h3>${x.name}</h3>
   <p class="muted">${x.type} · ${x.dist} district</p><p>Capacity: ${x.capacity}</p><p>Rate: ${x.charge}</p></div>`).join("");
}

/* ---------- Profit Calculator ---------- */
function viewProfit(){
  return `<h2>${T().profit}</h2>
  <div class="card"><div class="row">
   <div><label>Crop</label><input id="pr_crop" placeholder="e.g. Cotton"></div>
   <div><label>Farm size (acres)</label><input id="pr_size" type="number" value="1"></div>
   <div><label>Expected yield (kg)</label><input id="pr_yield" type="number" value="800"></div>
  </div>
  <div class="row">
   <div><label>Seed cost (₹)</label><input id="pr_seed" type="number" value="2000"></div>
   <div><label>Fertilizer (₹)</label><input id="pr_fert" type="number" value="3500"></div>
   <div><label>Labour (₹)</label><input id="pr_labour" type="number" value="5000"></div>
  </div>
  <div class="row">
   <div><label>Irrigation (₹)</label><input id="pr_irr" type="number" value="1500"></div>
   <div><label>Pesticides (₹)</label><input id="pr_pest" type="number" value="1800"></div>
   <div><label>Harvest+Packaging+Transport (₹)</label><input id="pr_other" type="number" value="2200"></div>
  </div>
  <div class="row"><div><label>Expected selling price (₹/kg)</label><input id="pr_price" type="number" value="70"></div></div>
  <button class="btn" id="pr_calc" style="margin-top:10px">Calculate</button>
  <button class="btn outline" id="pr_save" style="margin-top:10px">Save Record</button>
  </div>
  <div id="pr_out" class="card" style="margin-top:14px"></div>
  <div class="card" style="margin-top:14px"><h3>Saved Seasons</h3><div id="pr_saved"></div></div>`;
}
function calcProfit(){
  const cost = ["pr_seed","pr_fert","pr_labour","pr_irr","pr_pest","pr_other"].reduce((s,id)=>s+(parseFloat(document.getElementById(id).value)||0),0);
  const yieldKg = parseFloat(pr_yield.value)||0, price = parseFloat(pr_price.value)||0;
  const revenue = yieldKg*price, profit = revenue-cost, perUnit = yieldKg?(cost/yieldKg).toFixed(2):0;
  document.getElementById("pr_out").innerHTML = `<p><b>Total cost:</b> ₹${cost.toFixed(0)}</p>
   <p><b>Expected revenue:</b> ₹${revenue.toFixed(0)}</p>
   <p><b>Profit/Loss:</b> <span style="color:${profit>=0?'var(--leaf-dark)':'var(--danger)'}">₹${profit.toFixed(0)}</span></p>
   <p><b>Cost per kg:</b> ₹${perUnit}</p>`;
  return {crop:pr_crop.value||"Crop", cost, revenue, profit, perUnit};
}
function renderSavedProfit(){
  document.getElementById("pr_saved").innerHTML = PROFIT_RECORDS.length?PROFIT_RECORDS.map(r=>
   `<div class="list-item"><span>${r.crop} — Profit ₹${r.profit.toFixed(0)}</span><span class="muted">${r.date}</span></div>`).join(""):
   '<p class="empty">No saved seasons yet.</p>';
}

/* ---------- Schemes ---------- */
function viewSchemes(){
  const all = allSchemes();
  return `<h2>${T().schemes}</h2><p class="muted">Sample directory — verify eligibility and application links against the official site before applying.</p>
  <div class="grid">${all.map((s,i)=>`<div class="card"><h3>${s.name}</h3><p>${s.desc}</p>
   <p class="muted"><b>Eligibility:</b> ${s.eligibility}</p><p class="muted"><b>Documents:</b> ${s.docs}</p>
   ${s.lastReviewed?`<p class="muted"><b>Last reviewed:</b> ${s.lastReviewed}</p>`:""}
   <a href="${s.link}" target="_blank" rel="noopener">Official site ↗</a><br>
   <button class="btn small outline" data-bm="${i}" style="margin-top:8px">${BOOKMARKS.includes(i)?"★ Bookmarked":"☆ Bookmark"}</button></div>`).join("")}</div>`;
}

/* ---------- Expert Help ---------- */
function viewExpert(){
  return `<h2>${T().expert}</h2>
  <div class="card"><h3>Submit a question</h3>
   <label>Category</label><select id="e_cat"><option>Pest/Disease</option><option>Soil</option><option>Market</option><option>Scheme</option><option>Other</option></select>
   <label>Describe your issue</label><textarea id="e_desc" rows="3" placeholder="Describe your problem..."></textarea>
   <button class="btn" id="e_add" style="margin-top:10px">Submit (Demo)</button></div>
  <div class="card" style="margin-top:14px"><h3>My Tickets</h3><div id="e_list"></div></div>`;
}
function renderTickets(){
  document.getElementById("e_list").innerHTML = TICKETS.length?TICKETS.map(t=>`<div class="list-item">
   <span>#${t.id} · ${t.cat} — ${t.desc.slice(0,40)}</span><span class="pill open">Open (Demo)</span></div>`).join(""):'<p class="empty">No tickets yet.</p>';
}

/* ---------- Notifications ---------- */
function viewNotifs(){
  const prefs = window.KSNotify ? window.KSNotify.getPrefs() : {};
  const permState = ("Notification" in window) ? Notification.permission : "unsupported";
  return `<h2>Notifications</h2>
  <div class="card"><h3>${T().notifPrefs}</h3>
   <label><input type="checkbox" id="np_cal" ${prefs.calendarReminders?"checked":""} style="width:auto;display:inline"> Farm calendar task reminders</label><br>
   <label><input type="checkbox" id="np_buy" ${prefs.buyerInquiries?"checked":""} style="width:auto;display:inline"> Buyer inquiries</label><br>
   <label><input type="checkbox" id="np_wx" ${prefs.weatherAlerts?"checked":""} style="width:auto;display:inline"> Weather alerts</label><br>
   <label><input type="checkbox" id="np_exp" ${prefs.expertReplies?"checked":""} style="width:auto;display:inline"> Expert responses</label><br>
   <label><input type="checkbox" id="np_push" ${prefs.browserPush?"checked":""} style="width:auto;display:inline"> ${T().enableBrowserPush}
    ${permState==="unsupported"?'<span class="tag">Not supported in this browser</span>':permState==="denied"?'<span class="tag demo">Blocked in browser settings</span>':""}</label>
   <p class="muted" style="margin-top:8px">These are <b>in-app</b> and <b>locally scheduled</b> reminders only, unless a real push/SMS/email provider is configured (see js/config.js) — no message is ever shown as "sent" unless a provider actually confirmed delivery.</p>
  </div>
  <div class="card" style="margin-top:14px">${NOTIFS.map(n=>`<div class="list-item">
   <span>${n.text} ${n.tier?`<span class="tag ${n.tier==='in-app'?'sample':''}">${n.tier}</span>`:""}</span>
   <span class="pill ${n.read?'done':'unread'}" data-mark="${n.id}">${n.read?"Read":"Mark read"}</span></div>`).join("")||'<p class="empty">No notifications yet.</p>'}</div>`;
}
function wireNotifPrefs(){
  const boxes = {np_cal:"calendarReminders",np_buy:"buyerInquiries",np_wx:"weatherAlerts",np_exp:"expertReplies"};
  Object.keys(boxes).forEach(id=>{
    const el=document.getElementById(id); if(!el) return;
    el.onchange=()=>{ const p=window.KSNotify.getPrefs(); p[boxes[id]]=el.checked; window.KSNotify.savePrefs(p); toast("Preference saved"); };
  });
  const push=document.getElementById("np_push");
  if(push) push.onchange=async ()=>{
    if(push.checked){
      const perm = await window.KSNotify.requestBrowserPermission();
      if(perm!=="granted"){ toast("Browser notification permission not granted."); push.checked=false; return; }
    }
    const p=window.KSNotify.getPrefs(); p.browserPush=push.checked; window.KSNotify.savePrefs(p);
    toast(push.checked?"Browser reminders enabled":"Browser reminders disabled");
  };
}

/* ---------- Opportunity Finder ---------- */
function viewOpportunity(){
  return `<h2>🌟 ${T().opportunity}</h2><p class="muted">Combines market, processing and storage assumptions. All figures are sample estimates.</p>
  <div class="card"><div class="row">
   <div><label>Crop</label><select id="o_crop">${Object.keys(PROCESSING).map(c=>`<option value="${c}">${CROPS.find(x=>x.id===c).name}</option>`).join("")}</select></div>
   <div><label>Quantity (kg)</label><input id="o_qty" type="number" value="200"></div>
   <div><label>Future price assumption (₹/qtl, +/- vs today)</label><input id="o_future" type="number" value="0"></div>
  </div><button class="btn" id="o_go" style="margin-top:10px">Compare Options</button></div>
  <div id="o_out" style="margin-top:16px"></div>`;
}
function runOpportunity(){
  const cropId=o_crop.value, cropName=CROPS.find(x=>x.id===cropId).name, qty=parseFloat(o_qty.value)||0;
  const futureAdj = parseFloat(o_future.value)||0;
  const marketRow = MARKET.find(m=>m.crop.toLowerCase()===cropName.toLowerCase().split(" ")[0]) || {price:2000};
  const sellNow = (qty/100)*marketRow.price;
  const storageCost = qty*0.5; const transportCost = qty*0.3;
  const sellLater = (qty/100)*(marketRow.price+futureAdj) - storageCost - transportCost;
  const proc = PROCESSING[cropId][0];
  const outputKg = qty*proc.yieldPct, processRevenue = outputKg*proc.pricePerKg - qty*proc.costPerKg;
  const groupBonus = sellNow*1.08; // sample 8% better price via group bargaining
  const rows = [
   {label:"Sell Fresh Now", val:sellNow, note:"Uses today's sample mandi price."},
   {label:"Store & Sell Later", val:sellLater, note:"Assumes your future price guess minus storage/transport (uncertain)."},
   {label:"Process into "+proc.prod, val:processRevenue, note:"Sample processing cost/price assumptions."},
   {label:"Group Sale", val:groupBonus, note:"Sample 8% better price via combined bargaining power."}];
  document.getElementById("o_out").innerHTML = `<div class="card" style="overflow-x:auto"><table><tr><th>Option</th><th>Est. Net Return (₹)</th><th>Notes</th><th></th></tr>
   ${rows.map(r=>`<tr><td>${r.label}</td><td>₹${r.val.toFixed(0)}</td><td class="muted">${r.note}</td>
    <td><button class="btn small outline" data-save="${r.label}">Save as task</button></td></tr>`).join("")}</table></div>
   <p class="muted" style="margin-top:8px">⚠ Future prices are user assumptions, not forecasts. Use with caution.</p>`;
}

/* ================= EVENT WIRING ================= */
function attachViewEvents(){
  document.querySelectorAll("[data-v]").forEach(b=>{ if(!b.onclick) b.onclick=()=>{currentView=b.dataset.v;render();}; });
  if(currentView==="advisory") document.getElementById("advisoryBtn").onclick=runAdvisory;
  if(currentView==="doctor"){
    let selectedFile=null;
    d_file.onchange=()=>{
      const f=d_file.files[0]; if(!f)return;
      try{ window.KSAiCropDoctor.validateFile(f); }catch(err){ toast(err.message); d_file.value=""; return; }
      selectedFile=f;
      const r=new FileReader();
      r.onload=e=>{d_preview.src=e.target.result;d_preview.classList.remove("hidden");}; r.readAsDataURL(f);
    };
    d_go.onclick=async ()=>{
      if(!selectedFile){ toast("Please choose or capture a leaf photo first."); return; }
      d_go.disabled=true; const origLabel=d_go.textContent; d_go.textContent=T().loading;
      d_result.innerHTML = `<p class="muted">${T().loading}</p>`;
      try{
        const res = await window.KSAiCropDoctor.diagnose(d_crop.value, selectedFile, DISEASES);
        const badge = res.simulated ? `<span class="tag demo">${T().demo} — simulated, not a real AI diagnosis</span>` : `<span class="tag">${T().live} AI result</span>`;
        d_result.innerHTML = `<div class="card"><h3>${res.disease} ${badge}</h3>
         ${typeof res.confidencePct==="number"?`<p class="muted">Model confidence: ${res.confidencePct}%</p>`:""}
         ${res.uncertain?`<p style="color:var(--danger)"><b>⚠ ${T().uncertainResult}</b></p>`:""}
         <p><b>Symptoms:</b> ${res.symptoms}</p><p><b>Possible cause:</b> ${res.causes}</p>
         <p><b>Prevention:</b> ${res.prevention}</p><p><b>Treatment:</b> ${res.treatment}</p>
         <button class="btn outline" id="d_contactExpert" style="margin-top:8px">${T().contactExpert}</button>
         <p class="muted" style="margin-top:8px">⚠ ${res.simulated?"This is a simulated demo result, not a real AI diagnosis.":"AI diagnoses can be wrong."} For uncertain or serious cases, consult a local agricultural expert.</p></div>`;
        const ce=document.getElementById("d_contactExpert");
        if(ce) ce.onclick=()=>{ currentView="expert"; render(); };
      }catch(err){
        d_result.innerHTML = `<div class="card" style="border-left:5px solid var(--danger)"><p>${err.message}</p></div>`;
      }finally{ d_go.disabled=false; d_go.textContent=origLabel; }
    };
  }
  if(currentView==="weather"){ loadWeather(); w_loc.onchange=loadWeather; }
  if(currentView==="calendar"){ renderCalendarLists();
    c_add.onclick=()=>{ if(!c_crop.value||!c_date.value){toast("Enter crop and date");return;}
      CALENDAR.push({id:Date.now(),crop:c_crop.value,type:c_type.value,date:c_date.value,done:false});
      save("ks_calendar",CALENDAR);
      const prefs = window.KSNotify?window.KSNotify.getPrefs():{};
      if(prefs.calendarReminders){
        const text = `Reminder: ${c_type.value} for ${c_crop.value} on ${c_date.value}`;
        if(window.KSNotify) window.KSNotify.addInApp(NOTIFS, text);
        if(window.KSNotify) window.KSNotify.scheduleLocalReminder(text, new Date(c_date.value).getTime());
        save("ks_notifs",NOTIFS);
      }
      c_crop.value="";c_date.value=""; renderCalendarLists(); toast("Task added"); };
  }
  if(currentView==="market"){ loadMarket(); m_crop.onchange=loadMarket; m_search.oninput=renderMarketTable; m_refresh.onclick=loadMarket; }
  if(currentView==="sell"){ renderMyListings();
    s_add.onclick=()=>{ if(!s_crop.value||!s_qty.value){toast("Enter crop and quantity");return;}
     LISTINGS.push({crop:s_crop.value,qty:s_qty.value,quality:s_quality.value,price:s_price.value||0,
      hdate:s_hdate.value,group:s_group.checked}); save("ks_listings",LISTINGS);
     s_crop.value="";s_qty.value="";s_price.value=""; renderMyListings(); toast("Listing created (demo)"); };
    document.querySelectorAll("[data-buyer]").forEach(b=>b.onclick=()=>toast("Inquiry sent to "+b.dataset.buyer+" (demo, no real message sent)"));
  }
  if(currentView==="processing"){ renderProcessing(); p_go.onchange=renderProcessing; p_go.onclick=renderProcessing; p_crop.onchange=renderProcessing; p_qty.onchange=renderProcessing; }
  if(currentView==="storage"){ renderStorage(); st_type.onchange=renderStorage; }
  if(currentView==="profit"){ renderSavedProfit();
    pr_calc.onclick=calcProfit;
    pr_save.onclick=()=>{ const r=calcProfit(); r.date=new Date().toLocaleDateString();
      PROFIT_RECORDS.push(r); save("ks_profit",PROFIT_RECORDS); renderSavedProfit(); toast("Season saved"); };
  }
  if(currentView==="schemes"){ document.querySelectorAll("[data-bm]").forEach(b=>b.onclick=()=>{
     const i=parseInt(b.dataset.bm); const idx=BOOKMARKS.indexOf(i);
     if(idx>-1)BOOKMARKS.splice(idx,1); else BOOKMARKS.push(i); save("ks_bookmarks",BOOKMARKS); renderView(); }); }
  if(currentView==="expert"){ renderTickets();
    e_add.onclick=()=>{ if(!e_desc.value){toast("Describe your issue");return;}
     TICKETS.push({id:1000+TICKETS.length+1,cat:e_cat.value,desc:e_desc.value}); save("ks_tickets",TICKETS);
     e_desc.value=""; renderTickets(); toast("Ticket submitted (demo)"); };
  }
  if(currentView==="notifs"){ wireNotifPrefs(); document.querySelectorAll("[data-mark]").forEach(el=>el.onclick=()=>{
     const n=NOTIFS.find(x=>x.id==el.dataset.mark); n.read=true; save("ks_notifs",NOTIFS); renderView(); }); }
  if(currentView==="opportunity"){ o_go.onclick=runOpportunity;
    document.addEventListener("click", function handler(e){
      if(e.target.dataset && e.target.dataset.save){
        CALENDAR.push({id:Date.now(),crop:o_crop.value,type:"Follow-up: "+e.target.dataset.save,date:new Date().toISOString().slice(0,10),done:false});
        save("ks_calendar",CALENDAR); toast("Saved as a task in Farm Calendar");
      }
    }, {once:false});
  }
  if(currentView==="soil"){ renderSoilHistory();
    so_add.onclick=async ()=>{ if(!so_date.value){toast("Pick a date");return;}
     const rec = {date:so_date.value,ph:parseFloat(so_ph.value)||0,n:parseFloat(so_n.value)||0,
      p:parseFloat(so_p.value)||0,k:parseFloat(so_k.value)||0, reportUrl:null};
     const file = so_file.files && so_file.files[0];
     if(file && window.KS && !window.KS.demoMode && /^image\//.test(file.type)){
       so_add.disabled=true; const orig=so_add.textContent; so_add.textContent=T().loading;
       try{ rec.reportUrl = await window.KS.Storage.uploadFile("soil-reports", file); }
       catch(e){ toast("Could not upload report photo: "+e.message+" (record saved without it)"); }
       finally{ so_add.disabled=false; so_add.textContent=orig; }
     } else if(file && (!window.KS || window.KS.demoMode)){
       toast("Report photo not uploaded — Firebase Storage isn't configured (demo mode). Record saved without the file.");
     }
     SOIL_RECORDS.push(rec); save("ks_soil",SOIL_RECORDS);
     so_file.value="";
     renderSoilHistory(); toast("Soil record saved"); };
  }
  if(currentView==="waste"){ renderWaste();
    wa_add.onclick=()=>{ if(!wa_item.value||!wa_qty.value){toast("Enter item and quantity");return;}
     WASTE_LISTINGS.push({item:wa_item.value,qty:wa_qty.value,price:wa_price.value||"Contact for price"});
     save("ks_waste",WASTE_LISTINGS); wa_item.value="";wa_qty.value="";wa_price.value=""; renderWaste(); toast("Listing added"); };
  }
  if(currentView==="admin"){ wireAdminExtra(); }
  if(currentView==="family"){ renderFamily();
    fa_add.onclick=()=>{ if(!fa_name.value){toast("Enter a name");return;}
     FAMILY.push({name:fa_name.value,role:fa_role.value}); save("ks_family",FAMILY);
     fa_name.value=""; renderFamily(); toast("Helper added (demo)"); };
  }
}

/* ---------- Soil Health ---------- */
function viewSoil(){
  return `<h2>${T().soil}</h2><p class="muted">General educational guidance only — not a lab diagnosis.</p>
  <div class="card"><h3>Add Test Result</h3>
   <div class="row"><div><label>Date</label><input id="so_date" type="date"></div>
    <div><label>pH</label><input id="so_ph" type="number" step="0.1" placeholder="e.g. 6.8"></div></div>
   <div class="row"><div><label>Nitrogen (N, kg/ha)</label><input id="so_n" type="number"></div>
    <div><label>Phosphorus (P, kg/ha)</label><input id="so_p" type="number"></div>
    <div><label>Potassium (K, kg/ha)</label><input id="so_k" type="number"></div></div>
   <label>Upload soil report (optional)</label><input id="so_file" type="file" accept="image/*,.pdf">
   <button class="btn" id="so_add" style="margin-top:10px">Save Record</button></div>
  <div class="card" style="margin-top:14px"><h3>History</h3><div id="so_hist"></div></div>`;
}
function soilNote(v,lo,hi,label){ return v<lo?`${label} looks low — consider organic matter or a targeted amendment, and confirm with an agronomist.`:
  v>hi?`${label} looks high — avoid over-application and get expert advice.`:`${label} is in a general normal range.`; }
function renderSoilHistory(){
  document.getElementById("so_hist").innerHTML = SOIL_RECORDS.length?SOIL_RECORDS.slice().reverse().map(r=>
   `<div class="card" style="margin-bottom:8px"><b>${r.date}</b> — pH ${r.ph}, N ${r.n}, P ${r.p}, K ${r.k}
    <p class="muted">${soilNote(r.ph,6,7.5,"pH")} ${soilNote(r.n,50,150,"Nitrogen")}</p>
    ${r.reportUrl?`<a href="${r.reportUrl}" target="_blank" rel="noopener">📄 View uploaded report</a>`:""}</div>`).join(""):
   '<p class="empty">No soil records yet.</p>';
}

/* ---------- Crop Waste Exchange ---------- */
function viewWaste(){
  return `<h2>${T().waste}</h2><p class="muted"><span class="tag demo">Demo marketplace</span> for residues and by-products.</p>
  <div class="card"><h3>List your residue</h3>
   <div class="row"><div><label>Item</label><input id="wa_item" placeholder="e.g. Rice husk"></div>
    <div><label>Quantity</label><input id="wa_qty" placeholder="e.g. 300 kg"></div>
    <div><label>Expected price</label><input id="wa_price" placeholder="e.g. ₹3/kg or Free"></div></div>
   <button class="btn" id="wa_add" style="margin-top:10px">Add Listing</button></div>
  <div class="grid" style="margin-top:14px" id="wa_list"></div>`;
}
function renderWaste(){
  const mine = WASTE_LISTINGS.map(w=>({item:w.item,qty:w.qty,loc:FARMER.village,price:w.price,by:"Your listing"}));
  const all = [...mine, ...WASTE_DEMO];
  document.getElementById("wa_list").innerHTML = all.map(w=>`<div class="card"><h3>${w.item}</h3>
   <p>${w.qty} · ${w.price}</p><p class="muted">${w.loc} — ${w.by}</p>
   <button class="btn small outline" data-wbuy="${w.item}">Inquire</button></div>`).join("");
  document.querySelectorAll("[data-wbuy]").forEach(b=>b.onclick=()=>toast("Inquiry sent for "+b.dataset.wbuy+" (demo)"));
}

/* ---------- Family & Shared Account ---------- */
function viewFamily(){
  return `<h2>${T().family}</h2><p class="muted">Helpers can be given limited, role-based access (demo only — no real login is created).</p>
  <div class="card"><h3>Add Family Helper</h3>
   <div class="row"><div><label>Name</label><input id="fa_name" placeholder="e.g. Sita Patil"></div>
    <div><label>Role</label><select id="fa_role"><option>View only (tasks & prices)</option><option>Can add calendar tasks</option><option>Can manage listings</option></select></div></div>
   <button class="btn" id="fa_add" style="margin-top:10px">Add Helper</button></div>
  <div class="card" style="margin-top:14px"><h3>Shared Access</h3><div id="fa_list"></div>
   <p class="muted" style="margin-top:8px">Helpers never see your login details or full account settings in this design.</p></div>`;
}
function renderFamily(){
  document.getElementById("fa_list").innerHTML = FAMILY.length?FAMILY.map((f,i)=>
   `<div class="list-item"><span>${f.name} — ${f.role}</span><button class="btn small danger" data-frm="${i}">Remove</button></div>`).join(""):
   '<p class="empty">No helpers added yet.</p>';
  document.querySelectorAll("[data-frm]").forEach(b=>b.onclick=()=>{ FAMILY.splice(b.dataset.frm,1); save("ks_family",FAMILY); renderFamily(); });
}

/* ---------- Admin Dashboard ---------- */
let ADMIN_SCHEMES_EXTRA = load("ks_admin_schemes_extra",[]); // admin-added schemes overlay, persisted like everything else
function allSchemes(){ return [...SCHEMES, ...ADMIN_SCHEMES_EXTRA]; }
function viewAdmin(){
  const live = window.KS && !window.KS.demoMode;
  const secBadge = live
    ? `<span class="tag">Real access control</span> Enforced server-side by Firestore Security Rules (see firestore.rules) — a farmer account cannot open this data even by guessing the URL.`
    : `<span class="tag demo">Demo</span> This toggle only hides/shows the nav item in this browser — it is <b>not real security</b>. See ADMIN_SETUP.md for how production admin access works.`;
  return `<h2>🛡️ Admin Dashboard</h2>
  <p class="muted">${secBadge}</p>
  <div class="grid">
   <div class="card"><h3>${ADMIN_FARMERS_DEMO.length}</h3><p class="muted">Registered farmers (sample)</p></div>
   <div class="card"><h3>${LISTINGS.length}</h3><p class="muted">Active produce listings (this device)</p></div>
   <div class="card"><h3>${TICKETS.length}</h3><p class="muted">Support tickets (this device)</p></div>
   <div class="card"><h3>${allSchemes().length}</h3><p class="muted">Schemes published</p></div>
  </div>

  <div class="card" style="margin-top:14px;overflow-x:auto"><h3>Farmers <span class="tag demo">Sample directory</span></h3>
   <p class="muted">A full live roster requires querying the Firestore <code>farmers</code> collection with an admin-only Cloud Function (not fetched in-browser to avoid ever exposing one farmer's data to another).</p>
   <input id="ad_farmerSearch" placeholder="${T().searchPlaceholder}" style="max-width:280px">
   <table style="margin-top:8px"><tr><th>Name</th><th>Village</th><th>Crops</th></tr>
   <tbody id="ad_farmerRows">${ADMIN_FARMERS_DEMO.map(f=>`<tr><td>${f.name}</td><td>${f.village}</td><td>${f.crops}</td></tr>`).join("")}</tbody></table></div>

  <div class="card" style="margin-top:14px;overflow-x:auto"><h3>Support Tickets</h3>
   <input id="ad_ticketSearch" placeholder="${T().searchPlaceholder}" style="max-width:280px">
   <div id="ad_tickets" style="margin-top:8px"></div></div>

  <div class="card" style="margin-top:14px;overflow-x:auto"><h3>Produce Listings</h3><div id="ad_listings"></div></div>

  <div class="card" style="margin-top:14px"><h3>Government Schemes</h3>
   <div class="row"><div><label>Name</label><input id="ad_sch_name"></div><div><label>Official link</label><input id="ad_sch_link" placeholder="https://..."></div></div>
   <label>Description</label><textarea id="ad_sch_desc" rows="2"></textarea>
   <div class="row"><div><label>Eligibility</label><input id="ad_sch_elig"></div><div><label>Documents</label><input id="ad_sch_docs"></div></div>
   <button class="btn" id="ad_sch_add" style="margin-top:8px">Add Scheme</button>
   <div id="ad_schemes" style="margin-top:10px"></div></div>`;
}
function renderAdminTickets(){
  const q=(document.getElementById("ad_ticketSearch")?.value||"").toLowerCase();
  const rows = TICKETS.filter(t=>!q||t.cat.toLowerCase().includes(q)||t.desc.toLowerCase().includes(q));
  document.getElementById("ad_tickets").innerHTML = rows.length? rows.map(t=>`<div class="list-item">
    <span>#${t.id} · ${t.cat} — ${t.desc}</span>
    <span><button class="btn small danger" data-admin-del-ticket="${t.id}">${T().delete}</button></span></div>`).join(""):
   '<p class="empty">No tickets.</p>';
  document.querySelectorAll("[data-admin-del-ticket]").forEach(b=>b.onclick=()=>{
    if(!confirm(T().confirmDelete))return;
    TICKETS = TICKETS.filter(t=>t.id!=b.dataset.adminDelTicket); save("ks_tickets",TICKETS); renderAdminTickets(); toast("Ticket deleted");
  });
}
function renderAdminListings(){
  document.getElementById("ad_listings").innerHTML = LISTINGS.length? LISTINGS.map((l,i)=>`<div class="list-item">
    <span>${l.crop} · ${l.qty}kg · ₹${l.price}/qtl ${l.group?'· <span class="tag">Group</span>':""}</span>
    <span><button class="btn small danger" data-admin-del-listing="${i}">${T().delete}</button></span></div>`).join(""):
   '<p class="empty">No listings.</p>';
  document.querySelectorAll("[data-admin-del-listing]").forEach(b=>b.onclick=()=>{
    if(!confirm(T().confirmDelete))return;
    LISTINGS.splice(parseInt(b.dataset.adminDelListing),1); save("ks_listings",LISTINGS); renderAdminListings(); toast("Listing deleted");
  });
}
function renderAdminSchemes(){
  document.getElementById("ad_schemes").innerHTML = allSchemes().map((s,i)=>{
    const isExtra = i>=SCHEMES.length;
    return `<div class="list-item"><span><b>${s.name}</b> — ${s.desc}</span>
     ${isExtra?`<span><button class="btn small danger" data-admin-del-scheme="${i-SCHEMES.length}">${T().delete}</button></span>`:'<span class="tag">Built-in</span>'}</div>`;
  }).join("");
  document.querySelectorAll("[data-admin-del-scheme]").forEach(b=>b.onclick=()=>{
    if(!confirm(T().confirmDelete))return;
    ADMIN_SCHEMES_EXTRA.splice(parseInt(b.dataset.adminDelScheme),1); save("ks_admin_schemes_extra",ADMIN_SCHEMES_EXTRA); renderAdminSchemes(); toast("Scheme removed");
  });
}
function wireAdminExtra(){
  renderAdminTickets(); renderAdminListings(); renderAdminSchemes();
  const ts=document.getElementById("ad_ticketSearch"); if(ts) ts.oninput=renderAdminTickets;
  const fs=document.getElementById("ad_farmerSearch"); if(fs) fs.oninput=()=>{
    const q=fs.value.toLowerCase();
    document.getElementById("ad_farmerRows").innerHTML = ADMIN_FARMERS_DEMO.filter(f=>f.name.toLowerCase().includes(q)||f.village.toLowerCase().includes(q))
      .map(f=>`<tr><td>${f.name}</td><td>${f.village}</td><td>${f.crops}</td></tr>`).join("");
  };
  const add=document.getElementById("ad_sch_add"); if(add) add.onclick=()=>{
    if(!ad_sch_name.value||!ad_sch_desc.value){toast("Enter at least a name and description");return;}
    ADMIN_SCHEMES_EXTRA.push({name:ad_sch_name.value,desc:ad_sch_desc.value,eligibility:ad_sch_elig.value||"—",docs:ad_sch_docs.value||"—",link:ad_sch_link.value||"#",
      lastReviewed:new Date().toISOString().slice(0,10)});
    save("ks_admin_schemes_extra",ADMIN_SCHEMES_EXTRA);
    ad_sch_name.value="";ad_sch_desc.value="";ad_sch_elig.value="";ad_sch_docs.value="";ad_sch_link.value="";
    renderAdminSchemes(); toast("Scheme added");
  };
}

/* ---------- Settings ---------- */
function viewSettings(){
  return `<h2>${T().settings}</h2>
  <div class="card"><h3>Profile</h3>
   <label>Name</label><input id="st_name" value="${FARMER.name}">
   <label>Village</label><input id="st_village" value="${FARMER.village}">
   <label>District</label><input id="st_district" value="${FARMER.district}">
   <label>Farm size (acres)</label><input id="st_size" value="${FARMER.size}">
   <button class="btn" id="st_save" style="margin-top:10px">Save Profile</button></div>
  <div class="card" style="margin-top:14px"><h3>Language</h3>
   <select id="st_lang"><option value="en" ${LANG==="en"?"selected":""}>English</option>
    <option value="hi" ${LANG==="hi"?"selected":""}>हिंदी</option><option value="mr" ${LANG==="mr"?"selected":""}>मराठी</option></select></div>
  <div class="card" style="margin-top:14px"><h3>Admin Access ${window.KS&&!window.KS.demoMode?'':'<span class="tag demo">Demo</span>'}</h3>
   <p class="muted">${window.KS&&!window.KS.demoMode?
     "Showing/hiding this tab is just a local convenience — real access is enforced by Firestore Security Rules based on your account's role field. See ADMIN_SETUP.md.":
     (IS_ADMIN?"Admin mode is on — an Admin tab appears in navigation.":"Turning this on only reveals a demo admin tab in this browser; it is not real authentication.")}</p>
   <button class="btn ${IS_ADMIN?'outline':''}" id="st_admin">${IS_ADMIN?"Turn Off Admin Mode":"Turn On Admin Mode"}</button></div>
  <div class="card" style="margin-top:14px"><h3>Offline Krishi Mode</h3>
   <p class="muted">Your profile, calendar, listings, soil records and notifications are already saved on this device, so they stay viewable without internet. Weather, market prices, and messages always need a connection to be current — offline you'll only see your last saved data.</p>
   <p>Status: <b>${isOnline?"Online":"Offline"}</b></p></div>
  <div class="card" style="margin-top:14px"><h3>Demo Data</h3>
   <p class="muted">Clear all locally saved demo data (calendar, listings, tickets, etc).</p>
   <button class="btn danger" id="st_reset">Reset Demo Data</button></div>`;
}
document.addEventListener("change", e=>{
  if(e.target.id==="st_lang"){LANG=e.target.value; save("ks_lang",LANG); render();}
});
function wireSettingsExtra(){
  const btn=document.getElementById("st_save");
  if(btn) btn.onclick=()=>{ FARMER.name=st_name.value; FARMER.village=st_village.value; FARMER.district=st_district.value;
   FARMER.size=st_size.value; save("ks_farmer",FARMER); toast("Profile updated"); render(); };
  const rst=document.getElementById("st_reset");
  if(rst) rst.onclick=()=>{ if(confirm("Reset all demo data?")){
   ["ks_calendar","ks_listings","ks_profit","ks_tickets","ks_notifs","ks_bookmarks","ks_soil","ks_waste","ks_family"].forEach(k=>localStorage.removeItem(k));
   CALENDAR=[];LISTINGS=[];PROFIT_RECORDS=[];TICKETS=[];NOTIFS=[];BOOKMARKS=[];SOIL_RECORDS=[];WASTE_LISTINGS=[];FAMILY=[]; toast("Demo data cleared"); render(); } };
  const adm=document.getElementById("st_admin");
  if(adm) adm.onclick=()=>{ IS_ADMIN=!IS_ADMIN; save("ks_admin",IS_ADMIN); toast(IS_ADMIN?"Admin mode on":"Admin mode off"); render(); };
}
const _origAttach = attachViewEvents;
attachViewEvents = function(){ _origAttach(); if(currentView==="settings") wireSettingsExtra(); };

/* ================= VOICE ASSISTANT ================= */
let recognizing=false, recognizer=null;
function findAnswer(q){
  q=q.toLowerCase();
  const hit = KB.find(k=>k.kw.some(w=>q.includes(w.toLowerCase())));
  return hit?hit.a:"I don't have a demo answer for that yet — try asking about price, water, weather, or schemes.";
}
/** Real-LLM-ready: if js/config.js -> assistantLLM.endpoint is set, this
 * calls YOUR OWN backend/serverless function (which holds any provider
 * secret key). Otherwise falls back to the existing offline keyword
 * knowledge base, and is always labelled as such in the chat log. */
async function getAssistantAnswer(q){
  const cfg = (window.KS_CONFIG && window.KS_CONFIG.assistantLLM) || {};
  if(window.KS_isConfigured(cfg.endpoint)){
    try{
      const res = await fetch(cfg.endpoint, { method:"POST", headers:{"Content-Type":"application/json"},
        body: JSON.stringify({ question:q, lang:LANG, farmer:{district:FARMER.district, crops:FARMER.crops} }) });
      if(!res.ok) throw new Error("Assistant service error: "+res.status);
      const json = await res.json();
      return { text: json.answer || "No answer returned.", live:true };
    }catch(e){
      console.warn("Live assistant failed, falling back to offline knowledge base:", e);
      return { text: findAnswer(q), live:false, fellBack:true };
    }
  }
  return { text: findAnswer(q), live:false };
}
function openVoicePanel(){
  const panel=document.getElementById("voicePanel"); panel.classList.remove("hidden");
  const live = window.KS_isConfigured(((window.KS_CONFIG||{}).assistantLLM||{}).endpoint);
  panel.innerHTML = `<div class="section-title"><h3 style="margin:0">Ask Krishi Saathi</h3><button class="btn small outline" id="vp_close">✕</button></div>
   <div id="chatLog"></div>
   <div class="row"><input id="vp_input" placeholder="Type your question..."><button class="btn small" id="vp_send">Send</button></div>
   <button class="btn small outline" id="vp_mic" style="margin-top:8px">🎙️ Speak</button>
   <p class="muted" style="margin-top:6px">${live?"Connected to a live assistant backend.":"Demo knowledge base only (no AI backend configured)."} Speech recognition needs browser support & mic permission.</p>`;
  document.getElementById("vp_close").onclick=()=>panel.classList.add("hidden");
  document.getElementById("vp_send").onclick=sendVoiceMsg;
  document.getElementById("vp_input").onkeydown=e=>{if(e.key==="Enter")sendVoiceMsg();};
  document.getElementById("vp_mic").onclick=startListening;
}
async function sendVoiceMsg(){
  const inp=document.getElementById("vp_input"); const text=inp.value.trim(); if(!text)return;
  addChat("user",text); inp.value="";
  const thinkingEl = addChat("bot", T().loading);
  const ans = await getAssistantAnswer(text);
  thinkingEl.textContent = ans.text + (ans.live?"":" (demo knowledge base — not a live AI answer; for uncertain cases, consult a local expert)");
  document.getElementById("chatLog").scrollTop = 999999;
  speak(ans.text);
}
function addChat(who,text){
  const log=document.getElementById("chatLog"); const d=document.createElement("div");
  d.className="msg "+who; d.textContent=text; log.appendChild(d); log.scrollTop=log.scrollHeight;
  return d;
}
function speak(text){
  if("speechSynthesis" in window){ const u=new SpeechSynthesisUtterance(text); window.speechSynthesis.speak(u); }
}
function startListening(){
  const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
  if(!SR){ toast("Speech recognition not supported in this browser. Please type instead."); return; }
  recognizer = new SR(); recognizer.lang = LANG==="hi"?"hi-IN":LANG==="mr"?"mr-IN":"en-IN";
  recognizer.onresult = e=>{ const t=e.results[0][0].transcript; document.getElementById("vp_input").value=t; sendVoiceMsg(); };
  recognizer.onerror = ()=>toast("Mic error or permission denied.");
  recognizer.start();
}
document.getElementById("voiceFab").onclick=()=>{
  const panel=document.getElementById("voicePanel");
  if(panel.classList.contains("hidden")){ openVoicePanel(); } else { panel.classList.add("hidden"); }
};

/* ================= BOOT ================= */
// Wait for Firebase auth state (instant no-op in demo mode) before first
// render, so a returning signed-in farmer doesn't flash the login screen.
(async function boot(){
  try{
    if(window.KS){
      await window.KS.init();
      // Handles a persisted session restored on page load, AND any later
      // sign-in/sign-out events (e.g. session expiring in another tab).
      window.KS.Auth.onAuthChange(async (user)=>{
        if(user){ await hydrateAllFromCloud(); render(); }
        else if(FARMER){ FARMER=null; render(); } // session ended elsewhere
      });
      // The auth listener above may not fire for the very first (already
      // logged-in) state before this line runs, so hydrate once more here
      // if a user is already present right after init().
      if(window.KS.currentUser) await hydrateAllFromCloud();
    }
  }catch(e){ console.warn("Firebase init issue, continuing in local mode:", e); }
  render();
})();