import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UiServiceService {

  constructor() { }

  // ----- Animating text on scroll

  IntersectSetup() {
    const options = {
        rootMargin: '5% 0px 5% 0px'
    }

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {          

            if(entry.isIntersecting) {
                entry.target.classList.add('show');   
                observer.unobserve(entry.target);
            } else {
              entry.target.classList.remove('show');
              return;
            }
        })
    }, options);

    const paras = document.querySelectorAll('p, h1, h3, span, .title2, ul, .call-to-action, .head-pic');
    paras.forEach(p => observer.observe(p));

    const imgs = document.querySelectorAll('img, .img, .cars');
    imgs.forEach(img => observer.observe(img));
    
}
//----
}
