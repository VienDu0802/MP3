const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const tabs = $$('.tab-item');
const panes = $$('.tab-pane');
const line = $('.line');
const tabActive = $('.tab-item.active');

line.style.left = tabActive.offsetLeft+'px';
line.style.width = tabActive.offsetWidth+'px';

// console.log(line);

tabs.forEach(function(item,index){
  const pane = panes[index];

  item.onclick = function(){
    $('.tab-item.active').classList.remove('active');
    $('.tab-pane.active').classList.remove('active');

    this.classList.add('active');
    pane.classList.add('active');

    line.style.left = this.offsetLeft+'px';
    line.style.width = this.offsetWidth+'px';

  };
})

