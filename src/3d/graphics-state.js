export const battleWaiting=world=>world?.graphics?.waiting===true||world?.art?.loading===true||world?.fx?.comboArt?.sequenceLoading===true;

// WebGLRenderer installs its own listeners first. Restoration here runs after
// Three has rebuilt its internal state, including any scene-owned render target.
export class GraphicsState {
  constructor(canvas,restore){
    this.canvas=canvas;this.restore=restore;this.waiting=false;this.destroyed=false;this.generation=0;this.recoveries=0;
    this.onLost=event=>{event.preventDefault();this.generation++;this.waiting=true;this.publish('lost');};
    this.onRestored=async()=>{
      if(this.destroyed)return;
      const generation=++this.generation;this.waiting=true;this.publish('restoring');
      try{
        await this.restore();
        if(this.destroyed||generation!==this.generation)return;
        this.waiting=false;this.recoveries++;this.publish('ready');
      }catch(error){if(!this.destroyed&&generation===this.generation){this.publish('failed');console.warn('Graphics restoration failed.',error);}}
    };
    canvas.addEventListener('webglcontextlost',this.onLost);
    canvas.addEventListener('webglcontextrestored',this.onRestored);this.publish('ready');
  }
  publish(status){this.status=status;Object.assign(this.canvas.dataset,{graphicsStatus:status,graphicsRecoveries:String(this.recoveries)});}
  destroy(){this.destroyed=true;this.generation++;this.canvas.removeEventListener('webglcontextlost',this.onLost);this.canvas.removeEventListener('webglcontextrestored',this.onRestored);}
}
