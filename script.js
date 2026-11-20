const menuToggle=document.getElementById("menuToggle");
const navLinks=document.getElementById("navLinks");
if(menuToggle&&navLinks){menuToggle.addEventListener("click",()=>{const open=navLinks.classList.toggle("open");menuToggle.setAttribute("aria-expanded",String(open));});navLinks.querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>{navLinks.classList.remove("open");menuToggle.setAttribute("aria-expanded","false");}));}
const revealObserver=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add("visible");revealObserver.unobserve(entry.target);}});},{threshold:.12});
document.querySelectorAll(".reveal").forEach(el=>revealObserver.observe(el));
const progress=document.getElementById("progressBar");
function updateProgress(){if(!progress)return;const max=document.documentElement.scrollHeight-window.innerHeight;progress.style.width=(max>0?(window.scrollY/max)*100:0)+"%";}
window.addEventListener("scroll",updateProgress,{passive:true});updateProgress();
const year=document.getElementById("year");if(year)year.textContent=new Date().getFullYear();
