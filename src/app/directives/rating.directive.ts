import { Directive, ElementRef, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Directive({
  selector: 'rating, [rating],  [readonly], [fullIcon], [emptyIcon]'
})
export class RatingDirective implements OnInit {
  @Input('fullIcon') fullIcon:string="";
  @Input('emptyIcon') emptyIcon:string="";
  @Input('readonly') readonly:string="true";
  @Input("rating") rating:any=0;
  @Output("changeRating") changeRating  =  new EventEmitter<number>();
  htmlel:HTMLElement;
  starel:HTMLElement;
  star =new Array(5);
  rounded:number=0;
  persent: number=0;
  constructor(private el: ElementRef) {
     this.htmlel  = this.el.nativeElement as HTMLElement;
     this.starel=document.createElement("span")  as HTMLElement;
  }
  defaultRating(){
    this.rounded=Math.floor(this.rating);
    this.persent=10*(this.rating*10-this.rounded*10);
    this.setRating(this.rounded, this.persent)
  }
  ngOnInit(): void {
    this.createRating();
    
  }
  createRating(){
   
    
    this.starel.textContent=this.emptyIcon;
    this.starel.setAttribute("data-fullicon",this.fullIcon);
    for (let i = 0; i < this.star.length; i++) {
      this.star[i]=this.starel.cloneNode(true);
      if(this.readonly!="true"){
        this.star[i].addEventListener("click",()=>this.saveRating(i));
        this.star[i].addEventListener("mouseenter", ()=>this.setRate(i+1));
        this.star[i].addEventListener("mouseleave", ()=>this.defaultRating());
      }
      this.htmlel.appendChild(this.star[i]);
    }
    this.defaultRating();
  }
  setRating(rounded:number,persent:number ){
    for (let i = 0; i < this.star.length; i++) {
      if(rounded>=(i+1)){
        this.star[i].setAttribute("class","w100");
      }
       else{
        this.star[i].setAttribute("class","w"+persent);
        persent=0;
      }
    }
  }
  saveRating(i:number){
    this.rating=i+1;
    this.changeRating.emit(this.rating);
   
  }
  setRate(i:number){
    this.setRating(i, 0);
  }
}
