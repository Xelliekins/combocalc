myInnerHtml("PRT","",0,0);
NameCalc = ["Base Stats",
"Auto Adjust Base Level",
"LV",
"JobLV",
"Class",
"STR",
"AGI",
"VIT",
"DEX",
"INT",
"LUK",
"Remaining Status Points",
"Extended Info",
"Max HP",
"Max SP",
"DEF",
"MDEF",
"HIT",
"FLEE",
"Perfect Dodge",
"Critical",
"MATK",
"ASPD",
"HP Regen",
"SP Regen",
"Speed Potion: ",
"Weapon Type: ",
"Weapon & Armor / Cards",
"Weapon: ",
"Attribute: ",
"Weapon: ",
"Demi-Human",
"Passive / Duration Skills",
"Supportive / Party Skills",
"Show",
"Attack Skills: ",
"Enemy: ",
"HP",
"LV",
"DEF",
"VIT",
"MDEF",
"INT",
"AGI",
"LUK",
"Race",
"Element",
"Size",
"Medium Size",
"Enemy State",
"Show",
"Combat Results",
"Hit Ratio",
0,
"Minimum Damage",
"Average Damage",
"Maximum Damage",
"Damage Per Second",
"Minimum Number of Hits",
"Average Number of Hits",
"Maximum Number of Hits",
"Average Battle Duration",
"WoE-Reduction",
0,
0,
0,
"%",
0,
0,
0,
0,
0,
0,
0,
0,
0,
"Minimum Delay Between Active Skills:",
"Adopted",
0,
"Item Data",
"Show",
"<Font size=2><B>Anything below this line will only be saved via URL</B></Font>",
"Enemy Buffs",
"Show",
];
for(i=1;i<=84;i++){
	if(NameCalc[i-1] != 0)
		myInnerHtml("nm0"+i,NameCalc[i-1],0);
}
MonsterOBJ = [
[0,7,7,1,1,90,11966,80,5,18,45,10,1,1,31,45,1,1,1,0,0,0,0,0,"Knight"],
[1,8,7,1,1,90,6990,40,90,6,30,30,1,1,26,30,1,1,1,0,0,0,0,0,"Assassin"],
[2,9,7,1,1,90,6955,95,5,105,25,10,1,1,30,40,1,1,1,0,0,0,0,0,"Priest"],
[3,10,7,1,1,90,4536,11,94,16,140,30,1,1,24,26,1,1,1,0,0,0,0,0,"Hunter"],
[4,11,7,1,1,90,3303,6,17,102,102,10,1,1,29,36,1,1,1,0,0,0,0,0,"Wizard"],
[5,12,7,1,1,90,7513,80,10,18,40,10,1,1,30,40,1,1,1,0,0,0,0,0,"Blacksmith"],
[6,13,7,1,1,90,11823,90,10,48,30,10,1,1,31,45,1,1,1,0,0,0,0,0,"Crusader"],
[7,14,7,1,1,90,7142,80,15,36,100,10,1,1,32,30,1,1,1,0,0,0,0,0,"Rogue"],
[8,15,7,1,1,90,7497,74,15,48,60,10,1,1,30,40,1,1,1,0,0,0,0,0,"Monk"],
[9,16,7,1,1,90,7174,100,15,66,80,10,1,1,33,30,1,1,1,0,0,0,0,0,"Barde"],
[10,17,7,1,1,90,7174,100,15,66,80,10,1,1,33,30,1,1,1,0,0,0,0,0,"Dancer"],
[11,18,7,1,1,90,6107,60,5,80,90,10,1,1,29,36,1,1,1,0,0,0,0,0,"Sage"],
[12,19,7,1,1,90,7513,80,5,18,40,10,1,1,30,40,1,1,1,0,0,0,0,0,"Alchemist"],
[13,20,7,1,1,1,40,1,1,1,1,1,1,1,0,0,1,1,1,0,0,0,0,0,"Super Novice"],
[14,21,7,1,1,90,15456,86,10,24,50,10,1,1,31,45,1,1,1,0,0,0,0,0,"Lord Knight"],
[15,22,7,1,1,90,9361,50,90,1,40,40,1,1,26,30,1,1,1,0,0,0,0,0,"Assassin Cross"],
[16,23,7,1,1,90,8917,100,20,111,20,10,1,1,30,40,1,1,1,0,0,0,0,0,"High Priest"],
[17,24,7,1,1,90,6150,24,106,12,140,30,1,1,24,26,1,1,1,0,0,0,0,0,"Sniper"],
[18,25,7,1,1,90,3936,15,10,105,100,10,1,1,29,36,1,1,1,0,0,0,0,0,"High Wizard"],
[19,26,7,1,1,90,9912,90,17,12,40,10,1,1,30,40,1,1,1,0,0,0,0,0,"Whitesmith"],
[20,27,7,1,1,90,14932,100,10,24,35,10,1,1,31,45,1,1,1,0,0,0,0,0,"Paladin"],
[21,28,7,1,1,90,9920,100,30,24,90,10,1,1,32,30,1,1,1,0,0,0,0,0,"Stalker"],
[22,29,7,1,1,90,10017,80,15,48,60,10,1,1,30,40,1,1,1,0,0,0,0,0,"Champion"],
[23,30,7,1,1,90,8467,100,20,70,80,10,1,1,33,30,1,1,1,0,0,0,0,0,"Clown"],
[24,31,7,1,1,90,8467,100,20,70,80,10,1,1,33,30,1,1,1,0,0,0,0,0,"Gypsy"],
[25,32,7,1,1,90,7133,60,15,80,90,10,1,1,29,36,1,1,1,0,0,0,0,0,"Scholar"],
[26,33,7,1,1,90,9912,90,10,18,40,10,1,1,30,40,1,1,1,0,0,0,0,0,"Creator"],
[27,0,7,1,1,1,40,1,1,1,1,1,1,1,0,0,1,1,1,0,0,0,0,0,"Novice"],
[28,1,7,1,1,1,40,1,1,1,1,1,1,1,0,0,1,1,1,0,0,0,0,0,"Swordsman"],
[29,2,7,1,1,1,40,1,1,1,1,1,1,1,0,0,1,1,1,0,0,0,0,0,"Thief"],
[30,3,7,1,1,1,40,1,1,1,1,1,1,1,0,0,1,1,1,0,0,0,0,0,"Acolyte"],
[31,4,7,1,1,1,40,1,1,1,1,1,1,1,0,0,1,1,1,0,0,0,0,0,"Archer"],
[32,5,7,1,1,1,40,1,1,1,1,1,1,1,0,0,1,1,1,0,0,0,0,0,"Mage"],
[33,6,7,1,1,1,40,1,1,1,1,1,1,1,0,0,1,1,1,0,0,0,0,0,"Merchant"],
[34,0,7,1,1,1,40,1,1,1,1,1,1,1,0,0,1,1,1,0,0,0,0,0,"High Novice"],
[35,1,7,1,1,1,40,1,1,1,1,1,1,1,0,0,1,1,1,0,0,0,0,0,"High Swordsman"],
[36,2,7,1,1,1,40,1,1,1,1,1,1,1,0,0,1,1,1,0,0,0,0,0,"High Thief"],
[37,3,7,1,1,1,40,1,1,1,1,1,1,1,0,0,1,1,1,0,0,0,0,0,"High Acolyte"],
[38,4,7,1,1,1,40,1,1,1,1,1,1,1,0,0,1,1,1,0,0,0,0,0,"High Archer"],
[39,5,7,1,1,1,40,1,1,1,1,1,1,1,0,0,1,1,1,0,0,0,0,0,"High Mage"],
[40,6,7,1,1,1,40,1,1,1,1,1,1,1,0,0,1,1,1,0,0,0,0,0,"High Merchant"],
];

EnemyNum = 40;

for(i=0; i<=EnemyNum; i++)
{
	document.calcForm.B_Enemy.options[i] = new Option(MonsterOBJ[i][24],i);
}