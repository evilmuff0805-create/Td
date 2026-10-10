import { ENEMY_FORMS } from './enemy-design.js';
// Art proportions only. Combat ranges, speed, damage and saved data stay in
// data/heroes.js; these forms also drive the actual battle models.
const neutral={jaw:1,cheek:1,temple:1,length:1,depth:1,eyes:1,lid:1,nose:1,age:0};
export const HERO_FORMS={
  yi:{body:[1.02,1.04,1],face:{jaw:1.05,cheek:.96,temple:.98,length:1.05,depth:1.02,eyes:.96,lid:.83,nose:1.08,age:.3},gait:7.4,stride:.15},
  sejong:{body:[1.09,1.02,1.08],face:{jaw:1.08,cheek:1.13,temple:1.05,length:.98,depth:1.06,eyes:1.02,lid:.9,nose:.96,age:.25},gait:6.2,stride:.12},
  eulji:{body:[.99,1.09,.96],face:{jaw:.90,cheek:.97,temple:1.01,length:1.12,depth:.98,eyes:.94,lid:.77,nose:1.14,age:.35},gait:7.0,stride:.14},
  gang:{body:[1.08,.98,1.04],face:{jaw:1.10,cheek:1.02,temple:1.06,length:.99,depth:1.04,eyes:1.02,lid:.72,nose:1.12,age:1},gait:7.1,stride:.14},
  gwon:{body:[1.16,1.03,1.10],face:{jaw:1.17,cheek:1.09,temple:1.02,length:1.04,depth:1.09,eyes:1.04,lid:.78,nose:1.15,age:.8},gait:6.6,stride:.13},
  gwak:{body:[.94,1.03,.93],face:{jaw:.93,cheek:.95,temple:.96,length:1.03,depth:.96,eyes:.94,lid:.86,nose:.97,age:.2},gait:9.1,stride:.17},
  ahn:{body:[.92,1.09,.94],face:{jaw:.94,cheek:.94,temple:.97,length:1.10,depth:.99,eyes:.96,lid:.82,nose:1.04,age:.15},gait:7.8,stride:.15},
  dangun:{body:[1.01,1.12,1],face:{jaw:.93,cheek:1.03,temple:1.01,length:1.13,depth:1.02,eyes:1,lid:.7,nose:1.1,age:1},gait:5.9,stride:.12},
};
export const faceForm=kind=>({...neutral,...(HERO_FORMS[kind]?.face??ENEMY_FORMS[kind]?.face)});
