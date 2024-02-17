document.addEventListener('DOMContentLoaded',function (){



const carouselContainer=document.querySelector('.corosul-container')
const carouselControlsContainer=document.querySelector('.corosul-controls');
const carouselControls=['previous','next'];
const carouselItems=document.querySelectorAll('.corosul-item')
class carousel{
  constructor(container,items,controls){
    this.carouselContainer=container;
    this.carouselControls=controls;
    this.carouselArray=[...items];
  }
  updateCarousel(){
    this.carouselArray.forEach(el=>{
     el.classList.remove('corosul-item-1')
     el.classList.remove('corosul-item-2')
     el.classList.remove('corosul-item-3')
     el.classList.remove('corosul-item-4')
     el.classList.remove('corosul-item-5')
   
    });
    this.carouselArray.slice(0,5).forEach((el,i)=>{
      el.classList.add(`corosul-item-${i+1}`)
    })
  }
  setCurrentState(direction){
    if(direction.className=='corosul-controls-previous'){
      this.carouselArray.unshift(this.carouselArray.pop());

    }else{
      this.carouselArray.push(this.carouselArray.shift());
    }
    this.updateCarousel();
  }
    setControls(){
      this.carouselControls.forEach(control=>{
        carouselControlsContainer.appendChild(document.createElement('button')).className = `corosul-controls-${control}`;
        document.querySelector(`.corosul-controls-${control}`).innerText = control;
      })
    }
    useControls(){
      const triggers=[...carouselControlsContainer.childNodes];
      triggers.forEach(control=>{
        control.addEventListener('click',e=>{
          e.preventDefault();
          this.setCurrentState(control)
        })
      })
    }
  }
  const exampleCarousel=new carousel(carouselContainer, carouselItems,carouselControls);
  exampleCarousel.setControls();
  exampleCarousel.useControls();
})