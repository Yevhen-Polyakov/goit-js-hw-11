import{a as P,S,i as c}from"./assets/vendor-B5nsgUv9.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const q="54664427-262e44dbf661b4ce462360251",x="https://pixabay.com/api/";async function f(s){return(await P(x,{params:{key:q,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0,page:1,per_page:15}})).data}const m=document.querySelector(".gallery"),p=document.querySelector(".loader"),g=document.querySelector(".load-more"),$=new S(".gallery-link",{captions:!0,captionDelay:250});function h(s){const r=s.map(({webformatURL:o,largeImageURL:n,tags:e,likes:t,views:i,comments:w,downloads:b})=>`<li class="item-gallery">
                <a class="gallery-link" href="${n}">
                    <img src="${o}" alt="${e}">
                </a>
                <div class="info">
                    <div class="wrap-info">
                        <p class="info-text">Likes</p>
                        <span class="info-number">${t}</span>
                    </div>
                    <div class="wrap-info">
                        <p class="info-text">Views</p>
                        <span class="info-number">${i}</span>
                    </div>    
                    <div class="wrap-info">
                        <p class="info-text">Comments</p>
                        <span class="info-number">${w}</span>
                    </div>    
                    <div class="wrap-info">
                        <p class="info-text">Downloads</p>
                        <span class="info-number">${b}</span>
                    </div> 
                </div>   
            </li>`).join("");m.insertAdjacentHTML("beforeend",r),$.refresh()}function B(){m.innerHTML=""}function y(){p.classList.remove("is-hidden")}function v(){p.classList.add("is-hidden")}function L(){g.classList.remove("is-hidden")}function l(){g.classList.add("is-hidden")}const M=document.querySelector(".form"),E=document.querySelector(".load-more");let a=1;const d=15;let u="";M.addEventListener("submit",O);async function O(s){s.preventDefault();const r=s.target.elements["search-text"].value.trim();if(!r.length){c.error({message:"Please enter a search query."});return}B(),y(),u=r,a=1;try{const o=await f(u,a,d),n=o.hits||[],e=Math.ceil(o.totalHits/d);if(!n.length){c.error({message:"Sorry, there are no images matching your search query. Please try again!"}),l();return}h(n),e>1?L():l()}catch{c.error({message:"Something went wrong. Please try again later."})}finally{v()}s.target.reset()}E.addEventListener("click",H);async function H(s){s.preventDefault(),a+=1,y();try{const r=await f(u,a,d),o=r.hits||[],n=Math.ceil(r.totalHits/d);if(!o.length||a>=n){c.error({message:"We're sorry, но you' ve reached the end  of  search results."}),l();return}h(o);const e=document.querySelector(".item-gallery");if(e){const{height:t}=e.getBoundingClientRect();window.scrollBy({top:t*2,behavior:"smooth"})}a<n?L():l()}catch{c.error({message:"Something went wrong. Please try again later."})}finally{v()}}
//# sourceMappingURL=index.js.map
