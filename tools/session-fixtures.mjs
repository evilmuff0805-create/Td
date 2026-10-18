// Pure combat/art fixtures may keep historical multi-hero configurations.
// Product entry validation is tested with real Session host/guest/solo instances.
import {createGame} from '../src/sim/sim.js';
import {Session} from '../src/game/session.js';
export function SimulationSession(options) {
  if(!['solo','local'].includes(options.kind))throw new Error('Use a real Session for network tests');
  const state=createGame({...options,mode:options.kind,players:options.specs});
  return Object.assign(Object.create(Session.prototype),{stageId:options.stageId,difficulty:options.difficulty,kind:options.kind,fixtureMode:options.kind,me:0,coop:state.coop,state,view:state,acc:0,pending:[],offs:[],endInfo:null,localBackground:false,hostBackground:false,abortInfo:null});
}
export class FixtureWire {
  constructor(){this.handlers=new Map();this.connected=true;this.peer=true;this.sent=[];}
  on(type,fn){if(!this.handlers.has(type))this.handlers.set(type,new Set());this.handlers.get(type).add(fn);return()=>this.handlers.get(type)?.delete(fn);}
  emit(type,message={}){for(const fn of [...(this.handlers.get(type)||[])])fn(message);}
  send(message){if(this.fail)return false;this.sent.push(message);this.other?.emit(message.t,message);return true;}
}
export function onlineFixture(specs=[{heroes:['yi']},{heroes:['sejong']}],options={}){
  const a=new FixtureWire(),b=new FixtureWire();a.other=b;b.other=a;
  const host=new Session({kind:'host',stageId:'s1',difficulty:'normal',seed:8,...options,specs,net:a});
  const guest=new Session({kind:'guest',stageId:host.stageId,difficulty:host.difficulty,net:b});
  return{host,guest,a,b,destroy(){host.destroy();guest.destroy();}};
}
