// Compact vector emblems remain crisp beside the two painted signature skills.
const book='<path d="M9 15q10-4 23 2q13-6 23-2v34q-12-3-23 2q-11-5-23-2z"/><path d="M32 17v34M16 24h9M39 25h9M17 32h7M40 33h8"/>';
const flame='<path d="M34 7q3 13 12 17q12 17-4 29q-20 8-26-10q-3-12 8-22q-3 16 7 15q8-5 3-29z"/><path d="M33 33q13 13 0 20q-12-7 0-20z"/>';
const bow='<path d="M19 9q32 23 0 46M19 9v46M15 32h41M48 25l8 7-8 7"/>';
const sword='<path d="M16 49l9-9M16 36l13 13M24 40L49 11l4 1-1 4-25 27z"/>';
const shield='<path d="M14 12q18 7 36 0v21q-2 15-18 23q-16-8-18-23z"/><path d="M32 20v26M22 31h20"/>';
const star='<path d="M32 11l6 14 15 2-12 10 3 16-12-9-13 9 3-16-12-10 16-2z"/>';
const gun='<path d="M11 23h39v11H31l-4 18H15l6-22M42 20h10v17M30 35v8h9v-9"/>';
const army='<circle cx="19" cy="23" r="6"/><circle cx="45" cy="23" r="6"/><path d="M10 47V36q9-7 18 0v11M36 47V36q9-7 18 0v11"/><path d="M32 10v44M26 12h19v10H32"/>';
const snow='<path d="M32 8v48M11 20l42 24M11 44l42-24M26 13l6 6 6-6M26 51l6-6 6 6M15 19l3 8-8 2M54 35l-8 2 3 8M10 35l8 2-3 8M49 19l-3 8 8 2"/>';
const wave='<path d="M6 26q8-12 17 0t18 0t17 0M6 38q8-12 17 0t18 0t17 0M11 49q9-8 19-1t23-2"/>';
const fort='<path d="M9 53V26h10v9h9V24h9v11h9v-9h9v27zM27 53V42q5-7 10 0v11M16 26V15h32v11"/>';
const clock='<circle cx="32" cy="33" r="22"/><path d="M32 17v17l12 7M24 7h16M10 13l-4 7M54 13l4 7"/>';
const bolt='<path d="M36 6L16 35h15l-4 23 22-32H34z"/>';
const ship='<path d="M7 40h50l-9 12H17zM14 39V28q18-23 36 0v11M17 24l5 4M26 18l2 7M38 18l-2 7M47 24l-5 4M32 9v18M9 56q7-5 14 0t14 0t14 0"/>';
const garlic='<path d="M32 9q-4 10 0 16q20 4 19 20q-2 14-19 12Q15 59 13 45q-1-16 19-20zM32 25q-11 15 0 31q11-15 0-31M25 13l7 12 7-12"/>';
const stones='<path d="M10 42l6-14 13-4 10 12-4 16-18 2zM38 17l5-8 10 4 3 12-9 5-9-4zM42 45l7-7 9 4-1 12-13 2z"/>';
const bomb='<circle cx="29" cy="38" r="18"/><path d="M29 20v-7q16 5 17-5M43 7l9 2M48 4l1 8M21 28q-6 4-6 11"/>';
const sack='<path d="M20 10h25l-5 13q15 11 13 24q-4 10-21 10Q12 57 10 47q-2-13 15-24zM22 22h20M24 36q8-6 16 0M25 43q8 5 15 0"/>';
const cannon='<path d="M11 48l32-3 9-9-32-5zM19 30L48 13l6 8-30 17M14 48v7M43 45v10"/><circle cx="24" cy="49" r="7"/>';
const herb='<path d="M31 55V13M31 33Q9 34 11 15q21 1 20 18M31 45q23 2 22-20q-24-1-22 20M24 10h14M22 55h20"/>';
const signs={
  'taegeuk-combo':'<circle cx="32" cy="32" r="23"/><path d="M9 32a11.5 11.5 0 0 1 23 0a11.5 11.5 0 0 0 23 0"/><path d="M6 9l8 8M50 47l8 8M6 55l8-8M50 17l8-8"/>',
  'sejong-heroSkill':book,'eulji-heroSkill':flame,'gang-heroSkill':sword,'gwon-heroSkill':stones,'gwak-heroSkill':army,'ahn-heroSkill':gun,'dangun-heroSkill':garlic,
  'yi-heroUlt':ship,'sejong-heroUlt':clock,'eulji-heroUlt':wave,'gang-heroUlt':star,'gwon-heroUlt':fort,'gwak-heroUlt':bow,'ahn-heroUlt':'<circle cx="32" cy="32" r="19"/><path d="M32 5v17M32 42v17M5 32h17M42 32h17"/><circle cx="32" cy="32" r="3"/>','dangun-heroUlt':bolt,
  'bongsu-skill':flame,'uibyeong-skill':army,'bigyeok-skill':bomb,'gunryang-skill':sack,'cheonja-skill':cannon,'donguibogam-skill':herb,'hanpa-skill':snow,
};
export function abilityIcon(id,kind) {
  return `<svg viewBox="0 0 64 64" aria-hidden="true" fill="none" stroke="#f2d7a0" stroke-width="2.7" stroke-linecap="round" stroke-linejoin="round">${signs[`${id}-${kind}`]??star}</svg>`;
}
