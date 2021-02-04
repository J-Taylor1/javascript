/*Exercise instructions : take the html code from the following codepen : https://codepen.io/ayunas-the-scripter/pen/WNQgpqB, and use JavaScript DOM manipulation to inject the html into the inject id element of inject.html.  You are not allowed to simply set the innerHTML of the <div> to the entire html document. 
*/
let injectDiv = document.querySelector('#inject');
let center = document.createElement('center');
let h1 = document.createElement('h1');
let h2 = document.createElement('h2');
let hr = document.createElement('hr');
let p = document.createElement('p');
let ol = document.createElement('ol');
let hr1 = document.createElement('hr');
let p1 = document.createElement('p');
let h1End = document.createElement('h1');
let pEnd = document.createElement('p');


h1.innerHTML = `<i>HTML Practice Exercise TEKcamp.</i>`;
h2.innerHTML = `<a href="">TEKsystems "TEKcamp"</a>`;
p.innerHTML = `I love <i>HTML</i> for the following reasons:`;

ol.innerHTML = `<li>I learned it quickly.</li>
<li>I can make web pages using code
<li> It’s fun.</li>`;

p1.innerHTML = `My instructor’s email address is: <a href="mailto:ayunas@teksystems.com">ayunas@teksystems.com</a>.`

h1End.innerHTML = `Have a great day!`;

pEnd.innerHTML = `I really look forward to learning how to code!  Have a great day.  
-[Team "Git'er Done"]`;


injectDiv.appendChild(center);
center.appendChild(h1);
center.appendChild(h2);

injectDiv.appendChild(hr);
injectDiv.appendChild(p);
injectDiv.appendChild(ol);
injectDiv.appendChild(hr1);
injectDiv.appendChild(p1);
injectDiv.appendChild(h1End);
injectDiv.appendChild(pEnd);


