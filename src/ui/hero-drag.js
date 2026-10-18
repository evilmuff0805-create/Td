// A drag moves a preview only. The host owns all real deployment changes.
export class HeroDrag {
  constructor({onPreview,onDrop,onEnd,threshold=7}){Object.assign(this,{onPreview,onDrop,onEnd,threshold});this.current=null;}
  begin(hero,event){
    if(this.current)return false;
    this.current={hero,pointerId:event.pointerId,x:event.clientX,y:event.clientY,active:false,slot:null,valid:false};
    return true;
  }
  move(event,slot,valid){
    const drag=this.current;if(!drag||event.pointerId!==drag.pointerId)return false;
    drag.active||=Math.hypot(event.clientX-drag.x,event.clientY-drag.y)>=this.threshold;
    drag.slot=slot;drag.valid=!!valid;
    if(drag.active)this.onPreview?.(drag,event);
    return true;
  }
  end(event){
    const drag=this.current;if(!drag||event.pointerId!==drag.pointerId)return null;
    this.current=null;
    if(drag.active&&drag.valid&&drag.slot)this.onDrop?.(drag.hero,drag.slot.id);
    this.onEnd?.(drag);return drag;
  }
  cancel(){const drag=this.current;this.current=null;if(drag)this.onEnd?.(drag);return drag;}
}
