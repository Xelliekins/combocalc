myInnerHtml("PR1","",0);
myInnerHtml("set",'<A Href="https://translate.google.com/translate?hl=en&amp;ie=UTF-8&amp;u=http%3A%2F%2Froratorio.2-d.jp%2Fro%2Fother%2Fset.html&amp;sl=ja&amp;tl=en" target="_blank">Description</A>',0);
myInnerHtml("DELHTML",' <Font size=2><A Href="del.html">[delete saved data]</A></Font>',0);

for(var i=1;i<=99;i++){
with(document.calcForm){
	A_BaseLV.options[i-1] = new Option(i,i);
	A_STR.options[i-1] = new Option(i,i);
	A_AGI.options[i-1] = new Option(i,i);
	A_VIT.options[i-1] = new Option(i,i);
	A_INT.options[i-1] = new Option(i,i);
	A_DEX.options[i-1] = new Option(i,i);
	A_LUK.options[i-1] = new Option(i,i);
}}

function StCalc(nSC)
{with(document.calcForm){

	n_A_STR = eval(A_STR.value);
	n_A_AGI = eval(A_AGI.value);
	n_A_VIT = eval(A_VIT.value);
	n_A_DEX = eval(A_DEX.value);
	n_A_INT = eval(A_INT.value);
	n_A_LUK = eval(A_LUK.value);

	StPoint = 0;
	for(i=2;i<=n_A_STR;i++)
		StPoint += StCalc2(i);
	for(i=2;i<=n_A_AGI;i++)
		StPoint += StCalc2(i);
	for(i=2;i<=n_A_VIT;i++)
		StPoint += StCalc2(i);
	for(i=2;i<=n_A_INT;i++)
		StPoint += StCalc2(i);
	for(i=2;i<=n_A_DEX;i++)
		StPoint += StCalc2(i);
	for(i=2;i<=n_A_LUK;i++)
		StPoint += StCalc2(i);

	n_A_BaseLV = eval(A_BaseLV.value);

	n_A_JobSet();
	if(n_Tensei)
		wStPoint = 100;
	else
		wStPoint = 48;

	if(nSC == 1 || BLVauto.checked == 0){
		for(i=1;i<n_A_BaseLV;i++)
			wStPoint += Math.floor((i) / 5) + 3;
	}
	else{
		for(i=1;StPoint > wStPoint && i<99;i++)
			wStPoint += Math.floor((i) / 5) + 3;
	}
	if(i > 99)i=99;
	A_BaseLV.value = i;
	myInnerHtml("A_STPOINT",wStPoint - StPoint,0);
}}

function StCalc2(nSC2)
{
	return Math.floor((nSC2 - 2) /10) + 2;
}

function SuperNoviceFullWeapon(nSNFW)
{
	if(nSNFW == 1){
		SuperNoviceFullWeaponCHECK = 1;
		JobASPD[20][7] = 120;
	}else{
		SuperNoviceFullWeaponCHECK = 0;
		JobASPD[20][7] = 0;
	}

	var len = document.calcForm.A_WeaponType.length;
	for(i=0;i<len;i++)
		document.calcForm.A_WeaponType.options[0] = null;
	j = 0;
	for (i=0; i<=21; i++){
		if(JobASPD[20][i] != 0){
			document.calcForm.A_WeaponType.options[j] = new Option(WeaponName[i],i);
			j++;
		}
	}

	with(document.calcForm){
		if(ItemOBJ[n_A_Equip[0]][2] != 7 && JobEquipItemSearch(ItemOBJ[n_A_Equip[0]][2])){
			var BK_BUKI = n_A_Equip[0];
			A_WeaponType.value = ItemOBJ[BK_BUKI][1];
			ClickWeaponType(ItemOBJ[BK_BUKI][1]);

			WeaponSet2();
			A_weapon1.value = BK_BUKI;
		}else{
			ClickWeaponType(0);

			WeaponSet2();
		}
		if(JobEquipItemSearch(ItemOBJ[n_A_Equip[2]][2]))
			A_head1.value = n_A_Equip[2];
		if(JobEquipItemSearch(ItemOBJ[n_A_Equip[3]][2]))
			A_head2.value = n_A_Equip[3];
		if(JobEquipItemSearch(ItemOBJ[n_A_Equip[4]][2]))
			A_head3.value = n_A_Equip[4];
		A_left.value = n_A_Equip[5];
		A_body.value = n_A_Equip[6];
		A_shoulder.value = n_A_Equip[7];
		A_shoes.value = n_A_Equip[8];
		A_acces1.value = n_A_Equip[9];
		A_acces2.value = n_A_Equip[10];
	}
}

function StAllCalc()
{with(document.calcForm){
	n_A_JobSet();
	if(n_A_JOB == 20){
		if(SuperNoviceFullWeaponCHECK == 0 && eval(A_skill9.value) == 1)
			SuperNoviceFullWeapon(1);
		else if(SuperNoviceFullWeaponCHECK == 1 && eval(A_skill9.value) == 0)
			SuperNoviceFullWeapon(0);
	}
	n_A_BaseLV = eval(A_BaseLV.value);
	n_A_JobLV = eval(A_JobLV.value);

	n_A_STR = eval(A_STR.value);
	n_A_AGI = eval(A_AGI.value);
	n_A_VIT = eval(A_VIT.value);
	n_A_DEX = eval(A_DEX.value);
	n_A_INT = eval(A_INT.value);
	n_A_LUK = eval(A_LUK.value);
	SU_STR = n_A_STR;
	SU_AGI = n_A_AGI;
	SU_VIT = n_A_VIT;
	SU_DEX = n_A_DEX;
	SU_INT = n_A_INT;
	SU_LUK = n_A_LUK;

	n_A_WeaponType = eval(A_WeaponType.value);
	
	n_A_Arrow = eval(A_Arrow.value);

	n_A_HEAD_DEF_PLUS = eval(A_HEAD_DEF_PLUS.value);
	n_A_BODY_DEF_PLUS = eval(A_BODY_DEF_PLUS.value);
	n_A_LEFT_DEF_PLUS = eval(A_LEFT_DEF_PLUS.value);
	n_A_SHOULDER_DEF_PLUS = eval(A_SHOULDER_DEF_PLUS.value);
	n_A_SHOES_DEF_PLUS = eval(A_SHOES_DEF_PLUS.value);
	n_A_DEFplus = n_A_HEAD_DEF_PLUS + n_A_BODY_DEF_PLUS + n_A_LEFT_DEF_PLUS + n_A_SHOULDER_DEF_PLUS + n_A_SHOES_DEF_PLUS;

	n_A_ActiveSkill = eval(A_ActiveSkill.value);
	if(n_A_ActiveSkill >= 3000)
		n_A_ActiveSkill = InsertSkill[n_A_ActiveSkill -3000][2];
	else if(n_A_ActiveSkill >= 2000)
		n_A_ActiveSkill = AutoSpellSkill[n_A_ActiveSkill -2000][2];

	n_A_ActiveSkillLV = eval(A_ActiveSkillLV.value);
	n_A_SpeedPOT = eval(A_SpeedPOT.value);

	n_A_Equip[0] = eval(A_weapon1.value);
	n_A_Equip[1] = 0;
	if(n_Nitou)
		n_A_Equip[1] = eval(A_weapon2.value);
	n_A_Equip[2] = eval(A_head1.value);
	n_A_Equip[3] = eval(A_head2.value);
	n_A_Equip[4] = eval(A_head3.value);
	n_A_Equip[5] = eval(A_left.value);
	n_A_Equip[6] = eval(A_body.value);
	n_A_Equip[7] = eval(A_shoulder.value);
	n_A_Equip[8] = eval(A_shoes.value);
	n_A_Equip[9] = eval(A_acces1.value);
	n_A_Equip[10] = eval(A_acces2.value);

	SetEquip();

	n_A_WeaponLV = ItemOBJ[n_A_Equip[0]][4];
	n_A_Weapon_ATK = ItemOBJ[n_A_Equip[0]][3];
	n_A_Weapon_ATKplus = eval(A_Weapon_ATKplus.value);

	n_A_WeaponLV_seirenATK = 0;
	n_A_WeaponLV_Minplus = 0;
	n_A_WeaponLV_Maxplus = 0;
	if(n_A_WeaponLV == 1){
		n_A_WeaponLV_seirenATK = n_A_Weapon_ATKplus * 2;
		if(n_A_Weapon_ATKplus >= 8){
			n_A_WeaponLV_Minplus = 1;
			n_A_WeaponLV_Maxplus = 3 * (n_A_Weapon_ATKplus - 7);
		}
	}else if(n_A_WeaponLV == 2){
		n_A_WeaponLV_seirenATK = n_A_Weapon_ATKplus * 3;
		if(n_A_Weapon_ATKplus >= 7){
			n_A_WeaponLV_Minplus = 1;
			n_A_WeaponLV_Maxplus = 5 * (n_A_Weapon_ATKplus - 6);
		}
	}else if(n_A_WeaponLV == 3){
		n_A_WeaponLV_seirenATK = n_A_Weapon_ATKplus * 5;
		if(n_A_Weapon_ATKplus >= 6){
			n_A_WeaponLV_Minplus = 1;
			n_A_WeaponLV_Maxplus = 8 * (n_A_Weapon_ATKplus - 5);
		}
	}else if(n_A_WeaponLV == 4){
		n_A_WeaponLV_seirenATK = n_A_Weapon_ATKplus * 7;
		if(n_A_Weapon_ATKplus >= 5){
			n_A_WeaponLV_Minplus = 1;
			n_A_WeaponLV_Maxplus = 14 * (n_A_Weapon_ATKplus - 4);
		}
	}

	n_A_Weapon2_ATKplus = 0;

	if(n_Nitou){
		n_A_Weapon2LV = ItemOBJ[n_A_Equip[1]][4];
		n_A_Weapon2_ATK = ItemOBJ[n_A_Equip[1]][3];
		n_A_Weapon2_ATKplus = eval(document.calcForm.A_Weapon2_ATKplus.value);

		n_A_Weapon2LV_seirenATK = 0;
		n_A_Weapon2LV_Minplus = 0;
		n_A_Weapon2LV_Maxplus = 0;
		if(n_A_Weapon2LV == 1){
			n_A_Weapon2LV_seirenATK = n_A_Weapon2_ATKplus * 2;
			if(n_A_Weapon2_ATKplus >= 8){
				n_A_Weapon2LV_Minplus = 1;
				n_A_Weapon2LV_Maxplus = 3 * (n_A_Weapon2_ATKplus - 7);
			}
		}else if(n_A_Weapon2LV == 2){
			n_A_Weapon2LV_seirenATK = n_A_Weapon2_ATKplus * 3;
			if(n_A_Weapon2_ATKplus >= 7){
				n_A_Weapon2LV_Minplus = 1;
				n_A_Weapon2LV_Maxplus = 5 * (n_A_Weapon2_ATKplus - 6);
			}
		}else if(n_A_Weapon2LV == 3){
			n_A_Weapon2LV_seirenATK = n_A_Weapon2_ATKplus * 5;
			if(n_A_Weapon2_ATKplus >= 6){
				n_A_Weapon2LV_Minplus = 1;
				n_A_Weapon2LV_Maxplus = 8 * (n_A_Weapon2_ATKplus - 5);
			}
		}else if(n_A_Weapon2LV == 4){
			n_A_Weapon2LV_seirenATK = n_A_Weapon2_ATKplus * 7;
			if(n_A_Weapon2_ATKplus >= 5){
				n_A_Weapon2LV_Minplus = 1;
				n_A_Weapon2LV_Maxplus = 14 * (n_A_Weapon2_ATKplus - 4);
			}
		}
	}

	n_A_card[0] = eval(A_weapon1_card1.value);
	n_A_card[1] = eval(A_weapon1_card2.value);
	n_A_card[2] = eval(A_weapon1_card3.value);
	n_A_card[3] = eval(A_weapon1_card4.value);
	if(n_Nitou){
		n_A_card[4] = eval(A_weapon2_card1.value);
		n_A_card[5] = eval(A_weapon2_card2.value);
		n_A_card[6] = eval(A_weapon2_card3.value);
		n_A_card[7] = eval(A_weapon2_card4.value);
	}else{
		for(var i=4;i<=7;i++)
			n_A_card[i] = 0;
	}
	n_A_card[8] = eval(A_head1_card.value);
	n_A_card[9] = eval(A_head2_card.value);
	n_A_card[10] = eval(A_left_card.value);
	n_A_card[11] = eval(A_body_card.value);
	n_A_card[12] = eval(A_shoulder_card.value);
	n_A_card[13] = eval(A_shoes_card.value);
	n_A_card[14] = eval(A_acces1_card.value);
	n_A_card[15] = eval(A_acces2_card.value);

	SetCard();

	n_A_Weapon_zokusei = eval(A_Weapon_zokusei.value);
	n_A_Weapon2_zokusei = n_A_Weapon_zokusei;

	
	if(n_A_Weapon_zokusei == 0){
		for(j=0;ItemOBJ[n_A_Equip[0]][j +11] != 0;j += 2){
			if(20 == ItemOBJ[n_A_Equip[0]][j +11])
				n_A_Weapon_zokusei = ItemOBJ[n_A_Equip[0]][j +12];
		}
		for(j=0;ItemOBJ[n_A_Equip[1]][j +11] != 0;j += 2){
			if(20 == ItemOBJ[n_A_Equip[1]][j +11])
				n_A_Weapon2_zokusei = ItemOBJ[n_A_Equip[1]][j +12];
		}
		
		if(201 <= cardOBJ[n_A_card[0]][0] && cardOBJ[n_A_card[0]][0] <= 204)
			n_A_Weapon_zokusei = cardOBJ[n_A_card[0]][0] -200;
		if(201 <= cardOBJ[n_A_card[4]][0] && cardOBJ[n_A_card[4]][0] <= 204)
			n_A_Weapon2_zokusei = cardOBJ[n_A_card[4]][0] -200;
		
		if(n_A_WeaponType==10 || (17 <= n_A_WeaponType && n_A_WeaponType <=21))
			n_A_Weapon_zokusei = ArrowOBJ[n_A_Arrow][1];
	}

	n_A_PassSkill = new Array();
	for(var i=0;JobSkillPassOBJ[n_A_JOB][i] != 999;i++){
		var wOBJ = document.getElementById("A_skill"+i);
		n_A_PassSkill[i] = eval(wOBJ.value);
	}

	if(n_SkillSW){
		n_A_PassSkill2[0] = eval(A2_Skill0.value);
		n_A_PassSkill2[1] = eval(A2_Skill1.value);
		n_A_PassSkill2[2] = eval(A2_Skill2.value);
		n_A_PassSkill2[3] = eval(A2_Skill3.checked);
		n_A_PassSkill2[4] = eval(A2_Skill4.value);
		n_A_PassSkill2[5] = eval(A2_Skill5.checked);
		n_A_PassSkill2[6] = eval(A2_Skill6.value);
		n_A_PassSkill2[7] = eval(A2_Skill7.checked);
		n_A_PassSkill2[8] = eval(A2_Skill8.value);
		n_A_PassSkill2[9] = eval(A2_Skill9.value);
		n_A_PassSkill2[10] = eval(A2_Skill10.value);
		n_A_PassSkill2[11] = eval(A2_Skill11.checked);
		n_A_PassSkill2[12] = eval(A2_Skill12.checked);
		n_A_PassSkill2[13] = eval(A2_Skill13.value);
		n_A_PassSkill2[14] = eval(A2_Skill14.value);
	}

	if(n_Skill3SW){
		n_A_PassSkill3[0] = eval(A3_Skill0_1.value);
		n_A_PassSkill3[1] = eval(A3_Skill1_1.value);
		n_A_PassSkill3[2] = eval(A3_Skill2_1.value);
		n_A_PassSkill3[3] = eval(A3_Skill3_1.value);
		n_A_PassSkill3[4] = eval(A3_Skill4_1.value);
		n_A_PassSkill3[5] = eval(A3_Skill5_1.value);
		n_A_PassSkill3[6] = eval(A3_Skill6_1.value);
		n_A_PassSkill3[7] = eval(A3_Skill7.value);
		n_A_PassSkill3[8] = eval(A3_Skill8.value);
		n_A_PassSkill3[9] = eval(A3_Skill9.value);
		n_A_PassSkill3[10] = eval(A3_Skill10.value);
		n_A_PassSkill3[11] = eval(A3_Skill11.checked);
		if(n_A_PassSkill3[11]){
			n_A_PassSkill3[12] = eval(A3_Skill11_STR.value);
			n_A_PassSkill3[13] = eval(A3_Skill11_AGI.value);
			n_A_PassSkill3[14] = eval(A3_Skill11_VIT.value);
			n_A_PassSkill3[15] = eval(A3_Skill11_INT.value);
			n_A_PassSkill3[16] = eval(A3_Skill11_DEX.value);
			n_A_PassSkill3[17] = eval(A3_Skill11_LUK.value);
			n_A_PassSkill3[18] = eval(A3_Skill11a.checked);
		}

		if(n_A_PassSkill3[0]){
			n_A_PassSkill3[20] = eval(A3_Skill0_2.value);
			n_A_PassSkill3[30] = eval(A3_Skill0_3.value);
		}
		if(n_A_PassSkill3[1]){
			n_A_PassSkill3[21] = eval(A3_Skill1_2.value);
			n_A_PassSkill3[31] = eval(A3_Skill1_3.value);
		}
		if(n_A_PassSkill3[2]){
			n_A_PassSkill3[22] = eval(A3_Skill2_2.value);
			n_A_PassSkill3[29] = eval(A3_Skill2_3.value);
			n_A_PassSkill3[32] = eval(A3_Skill2_4.value);
		}
		if(n_A_PassSkill3[3]){
			n_A_PassSkill3[23] = eval(A3_Skill3_2.value);
			n_A_PassSkill3[33] = eval(A3_Skill3_3.value);
		}
		if(n_A_PassSkill3[4]){
			n_A_PassSkill3[24] = eval(A3_Skill4_2.value);
			n_A_PassSkill3[34] = eval(A3_Skill4_3.value);
		}
		if(n_A_PassSkill3[5]){
			n_A_PassSkill3[25] = eval(A3_Skill5_2.value);
			n_A_PassSkill3[35] = eval(A3_Skill5_3.value);
		}
		if(n_A_PassSkill3[6]){
			n_A_PassSkill3[26] = eval(A3_Skill6_2.value);
			n_A_PassSkill3[36] = eval(A3_Skill6_3.value);
		}

	}
	if(n_Skill4SW){
		n_A_PassSkill3[40] = eval(A3_Skill40.checked);
		n_A_PassSkill3[41] = eval(A3_Skill41.value);
		n_A_PassSkill3[42] = eval(A3_Skill42.value);
		n_A_PassSkill3[43] = eval(A3_Skill43.value);
		n_A_PassSkill3[44] = eval(A3_Skill44.value);
	}
	if(n_Skill5SW){
		n_A_PassSkill5[0] = eval(A5_Skill0.checked);
		n_A_PassSkill5[1] = eval(A5_Skill1.checked);
		n_A_PassSkill5[2] = eval(A5_Skill2.checked);
		n_A_PassSkill5[3] = eval(A5_Skill3.checked);
		n_A_PassSkill5[4] = eval(A5_Skill4.checked);
		n_A_PassSkill5[5] = eval(A5_Skill5.checked);
	}
	if(n_Skill6SW){
		n_A_PassSkill6[0] = eval(A6_Skill0.value);
		n_A_PassSkill6[1] = eval(A6_Skill1.value);
		n_A_PassSkill6[2] = eval(A6_Skill2.value);
		n_A_PassSkill6[3] = eval(A6_Skill3.value);
		n_A_PassSkill6[4] = eval(A6_Skill4.value);
		n_A_PassSkill6[5] = eval(A6_Skill5.value);
		n_A_PassSkill6[6] = eval(A6_Skill6.checked);
	}
	if(n_Skill7SW){
		n_A_PassSkill7[0] = eval(A7_Skill0.checked);
		n_A_PassSkill7[1] = eval(A7_Skill1.checked);
		n_A_PassSkill7[2] = eval(A7_Skill2.checked);
		n_A_PassSkill7[3] = eval(A7_Skill3.value);
		n_A_PassSkill7[4] = eval(A7_Skill4.value);
		n_A_PassSkill7[5] = eval(A7_Skill5.value);
		n_A_PassSkill7[6] = eval(A7_Skill6.value);
		n_A_PassSkill7[7] = eval(A7_Skill7.value);
		n_A_PassSkill7[8] = eval(A7_Skill8.value);
		n_A_PassSkill7[9] = eval(A7_Skill9.checked);
		n_A_PassSkill7[10] = eval(A7_Skill10.checked);
		n_A_PassSkill7[11] = eval(A7_Skill11.checked);
		n_A_PassSkill7[12] = eval(A7_Skill12.checked);
		n_A_PassSkill7[13] = eval(A7_Skill13.checked);
		n_A_PassSkill7[14] = eval(A7_Skill14.checked);
		n_A_PassSkill7[15] = eval(A7_Skill15.checked);
	}
	if(n_Skill8SW){
		n_A_PassSkill8[0] = eval(A8_Skill0.value);
		n_A_PassSkill8[1] = eval(A8_Skill1.value);
		n_A_PassSkill8[2] = eval(A8_Skill2.checked);
		n_A_PassSkill8[3] = eval(A8_Skill3.checked);
		n_A_PassSkill8[4] = eval(A8_Skill4.checked);
		n_A_PassSkill8[5] = eval(A8_Skill5.value);
		n_A_PassSkill8[6] = eval(A8_Skill6.value);
		n_A_PassSkill8[7] = eval(A8_Skill7.value);
		n_A_PassSkill8[8] = eval(A8_Skill8.value);
		n_A_PassSkill8[9] = eval(A8_Skill9.value);
		n_A_PassSkill8[10] = eval(A8_Skill10.value);
		n_A_PassSkill8[11] = eval(A8_Skill11.value);
		n_A_PassSkill8[12] = eval(A8_Skill12.value);
		
		n_A_PassSkill8[14] = eval(A8_Skill14.value);
		n_A_PassSkill8[15] = eval(A8_Skill15.value);
		n_A_PassSkill8[16] = eval(A8_Skill16.checked);
		n_A_PassSkill8[17] = eval(A8_Skill17.checked);
		n_A_PassSkill8[18] = eval(A8_Skill18.checked);
		n_A_PassSkill8[19] = eval(A8_Skill19.checked);
		n_A_PassSkill8[20] = eval(A8_Skill20.checked);
		n_A_PassSkill8[21] = eval(A8_Skill21.checked);
		n_A_PassSkill8[22] = eval(A8_Skill22.checked);
		n_A_PassSkill8[23] = eval(A8_Skill23.checked);
		n_A_PassSkill8[24] = eval(A8_Skill24.checked);
		n_A_PassSkill8[25] = eval(A8_Skill25.checked);
		n_A_PassSkill8[26] = eval(A8_Skill26.checked);
		n_A_PassSkill8[27] = eval(A8_Skill27.checked);
		n_A_PassSkill8[28] = eval(A8_Skill28.checked);
		n_A_IJYOU[0] = eval(A_IJYOU0.value);
		n_A_IJYOU[1] = eval(A_IJYOU1.value);
		n_A_IJYOU[2] = eval(A_IJYOU2.checked);
		n_A_IJYOU[3] = eval(A_IJYOU3.checked);
	}

	for(i=0;i<=22;i++)
		n_B[i] = MonsterOBJ[B_Enemy.value][i];

	
	n_A_BodyZokusei = StPlusCard(198);
	if(n_A_BodyZokusei==0)
		n_A_BodyZokusei = StPlusCalc2(198);
	if((n_A_JOB == 13 || n_A_JOB == 27) && CardNumSearch(456))
		n_A_BodyZokusei = 6;
	if(n_A_PassSkill6[6])
		n_A_BodyZokusei = 6;

	for(var i=0;i<=6;i++)
		n_Delay[i] = 0;

	for(i=1;i<=200;i++){
		n_tok[i] = 0;
		n_tok[i] += StPlusCalc2(i);
		n_tok[i] += StPlusCard(i);
	}
	for(i=290;i<=339;i++){
		n_tok[i] = 0;
		n_tok[i] += StPlusCalc2(i);
		n_tok[i] += StPlusCard(i);
	}


	StPlusCalc();



	
	
	if(n_A_WeaponType != 10 && n_A_WeaponType !=14 && n_A_WeaponType !=15 && n_A_WeaponType !=17 && n_A_WeaponType !=18 && n_A_WeaponType !=19 && n_A_WeaponType !=20 && n_A_WeaponType !=21){
		n_A_ATK_w = Math.round(Math.floor(n_A_STR/10) * Math.floor(n_A_STR/10));
		n_A_ATK   = n_A_STR + n_A_ATK_w + Math.floor(n_A_DEX / 5) + Math.floor(n_A_LUK / 5);
	}else{
		n_A_ATK_w = Math.round(Math.floor(n_A_DEX/10) * Math.floor(n_A_DEX/10));
		n_A_ATK   = n_A_DEX + n_A_ATK_w + Math.floor(n_A_STR / 5) + Math.floor(n_A_LUK / 5);
	}

//CRAZY


	myInnerHtml("A_ATK",n_A_ATK_w  + n_A_ATK,0);

	//customS random n_tok
	// wing of darkness [fRO]
	if(n_A_HEAD_DEF_PLUS >= 1 && EquipNumSearch(cItemStart+51)){
		n_tok[75] += 10 * n_A_HEAD_DEF_PLUS;
		n_tok[76] += 10 * n_A_HEAD_DEF_PLUS;
		if(n_A_HEAD_DEF_PLUS >= 8){
			n_tok[36] += 10;
			n_tok[121] += 20;
			n_tok[126] += 20;
		}
	}
	// Cat Ears Beret
	if(n_A_HEAD_DEF_PLUS >= 5 && EquipNumSearch(cItemStart+57))
		n_tok[37] += n_A_HEAD_DEF_PLUS;
	// Horn of Ancient [fRO]
	if(n_A_HEAD_DEF_PLUS >= 9 && EquipNumSearch(cItemStart+58))
		n_tok[26] += 10;

	// customE

	
	w=n_tok[17];

	if(SU_STR >= 80 && CardNumSearch(267))
		w += 20;
	if(SU_STR >= 95 && EquipNumSearch(621))
		w += 340;
	if(SU_STR >= 44 && EquipNumSearch(625))
		w += 44;
	if(SU_AGI >= 90 && EquipNumSearch(442))
		w += 10 * EquipNumSearch(442);
	if(SU_STR >= 95 && EquipNumSearch(1160))
		w += 20;
	if(SU_LUK >= 90 && EquipNumSearch(1164))
		w += 20;
	if(EquipNumSearch(676))
		w += n_A_HEAD_DEF_PLUS * 2;
	if(CardNumSearch(492))
		w += Math.floor(n_A_JobLV /10) * CardNumSearch(492);
	if(EquipNumSearch(1120) && n_A_JobSearch()==4)
		w += 10;
	if(EquipNumSearch(1165))
		w += 10 * SkillSearch(311);
		
	//customS ATK
	
	// moon rabbit hat
	if(n_A_HEAD_DEF_PLUS >= 5 && EquipNumSearch(cItemStart+5))
		w += n_A_HEAD_DEF_PLUS - 4;
	// Aquarius Crown
	if(n_A_HEAD_DEF_PLUS >= 7 && EquipNumSearch(cItemStart+12))
		w += 15;
	// Aquarius Diadem
	if(n_A_HEAD_DEF_PLUS >= 7 && EquipNumSearch(cItemStart+13))
		w += 15;
	// Cancer Crown
	if(n_A_HEAD_DEF_PLUS >= 7 && EquipNumSearch(cItemStart+14))
		w += 15;
	// Gemini Crown
	if(n_A_HEAD_DEF_PLUS >= 7 && EquipNumSearch(cItemStart+18))
		w += 15;
	// Scorpio Crown
	if(n_A_HEAD_DEF_PLUS >= 10 && EquipNumSearch(cItemStart+28))
		w += 5;
	// Scorpio Diadem
	if(n_A_HEAD_DEF_PLUS >= 7 && EquipNumSearch(cItemStart+29))
		w += 5;
	// Giant Majestic Goat
	if(EquipNumSearch(953))
		w += Math.floor(n_A_JobLV *2 /7);
	
	//customE

	if(n_A_PassSkill6[0] == 0 && n_A_PassSkill6[1] >= 1 && n_A_BodyZokusei==3)
		w += n_A_PassSkill6[1] * 10;

	if(n_A_PassSkill7[2])
		w += 10;
	if(n_A_PassSkill7[9])
		w += 20;
	if(n_A_PassSkill8[19])
		w += 5;

	if(SkillSearch(420))
		w += 100;
	if(SkillSearch(433)){
		if(n_A_WeaponType==20 || n_A_WeaponType==0)
			w += 20 + 10 * SkillSearch(433);
	}

	n_A_ATK += w;

	wImp = n_A_PassSkill2[2] *5;

	if(n_A_PassSkill3[9])
		wImp += 25 + 25 * n_A_PassSkill3[9];

	JobHP_A = new Array(0,70,50,40,50,30,40,150,110,75,85,55,90,110,85,90,75,75,75,90,0,150,110,75,85,55,90,110,85,90,75,75,75,90, 0, 0, 0, 0, 0, 0, 0,70,90,75, 75,84);
	JobHP_B = new Array(5, 5, 5, 5, 5, 5, 5,  5,  5, 5, 5, 5, 5,  7, 5,6.5,3, 3, 5, 5,5,  5,  5, 5, 5, 5, 5,  7, 5,6.5,3, 3, 5, 5, 0, 0, 0, 0, 0, 0, 0, 5,6.5, 5, 3, 3.5);

	
	wHPSL = 0;
	if(n_A_JOB == 43){
		if(n_A_BaseLV >= 70){
			if(n_A_BaseLV <= 79)
				wHPSL = (n_A_BaseLV - 70) *40;
			else if(n_A_BaseLV <= 84)
				wHPSL = (n_A_BaseLV - 80) *50;
			else if(n_A_BaseLV <= 89)
				wHPSL = (n_A_BaseLV - 80) *50 -10;
			else if(n_A_BaseLV <= 92)
				wHPSL = (n_A_BaseLV - 90) *50;
			else if(n_A_BaseLV <= 97)
				wHPSL = (n_A_BaseLV - 90) *50 -10;
			else if(n_A_BaseLV == 98) wHPSL = 375;
			else wHPSL = 4;
		}
	}

	w = 0;
	for(i=2;i<=n_A_BaseLV;i++){
		w += Math.round(JobHP_A[n_A_JOB] * i /100);
	}

	n_A_MaxHP = Math.floor((JobHP_B[n_A_JOB] * n_A_BaseLV) + 35 + w);

	
	if(n_A_JOB == 44){
		NinHP = new Array(131,137,144,151,159,167,175,184,193,202,212,222,232,243,254,265,277,289,301,316,331,346,364,382,400,420,440,460,482,504,526,548,572,596,620,646,672,698,726,754,784,814,844,876,908,940,975,1010,1100,1140,1180,1220,1260,1300,1340,1385,1430,1475,1520,1565,1615,1665,1715,1765,1815,1880,1935,1990,2045,2100,2160,2200,2280,2340,2400,2460,2520,2580,2640,2705,2770,2835,2900,2965,3030,3100,3170,3240,3310,3380,3455,3530,3605,3680,3760,3840,3920,4000,4080);
		n_A_MaxHP = NinHP[n_A_BaseLV-1];
	}
	
	if(n_A_JOB == 45 && n_A_BaseLV >= 10){
		GunHP = new Array(202,212,222,232,243,254,265,277,289,301,316,331,346,364,382,400,420,440,460,490,520,550,580,610,650,680,710,740,770,800,830,860,890,920,950,990,1020,1050,1080,1110,1140,1180,1230,1280,1330,1395,1455,1515,1575,1635,1695,1760,1820,1885,1950,2015,2080,2145,2210,2275,2340,2410,2480,2550,2620,2690,2760,2830,2900,2970,3040,3115,3190,3265,3340,3415,3490,3565,3640,3715,3790,3870,3950,4030,4110,4190,4270,4350,4430,4510);
		n_A_MaxHP = GunHP[n_A_BaseLV-10];
	}
	
	if(n_A_JOB == 20 && n_A_BaseLV == 99)
		n_A_MaxHP += 2000;
	
	if(n_Tensei)
		n_A_MaxHP = Math.floor(n_A_MaxHP *125 /100);
	if(eval(A_youshi.checked))
		n_A_MaxHP = Math.floor(n_A_MaxHP *70 /100);
	n_A_MaxHP = Math.floor((n_A_MaxHP - wHPSL) * (100 + n_A_VIT) / 100);

	
	if(n_A_JOB == 41 && n_A_BaseLV >= 70){
		if(n_A_BaseLV <=79)
			n_A_MaxHP = Math.floor((2127 + 10 * (n_A_BaseLV-70)) * (100 + n_A_VIT) / 100);
		else if(n_A_BaseLV <=89)
			n_A_MaxHP = Math.floor((2200 + 50 * (n_A_BaseLV-80)) * (100 + n_A_VIT) / 100);
		else if(n_A_BaseLV <=99){
			n_A_MaxHP = (2700 + 50 * (n_A_BaseLV-90)) * (100 + n_A_VIT) / 100;
			if(SkillSearch(345))
				n_A_MaxHP = n_A_MaxHP * 3;
			n_A_MaxHP = Math.floor(n_A_MaxHP);
		}
	}
	
	if(n_A_JOB == 42 && n_A_BaseLV >= 70){
		wKenseiHP = [3455,3524,3593,3663,3834,3806,3878,3951,4025,4500];
		if(n_A_BaseLV <=79)
			n_A_MaxHP = Math.floor((2670 + 10 * (n_A_BaseLV-70)) * (100 + n_A_VIT) / 100);
		else if(n_A_BaseLV <=89)
			n_A_MaxHP = Math.floor((3000 + 20 * (n_A_BaseLV-80)) * (100 + n_A_VIT) / 100);
		else if(n_A_BaseLV <=99)
			n_A_MaxHP = Math.floor(wKenseiHP[n_A_BaseLV-90] * (100 + n_A_VIT) / 100);
	}

	
n_A_MaxHP += SkillSearch(156) * 200;

	w=0;
	
	w += n_tok[13];
	w += StPlusCalc2(3);
	w += StPlusCalc2(7);

	if(n_A_BODY_DEF_PLUS >= 9 && CardNumSearch(225))
		w += 800;
	if(CardNumSearch(186))
		w -= 40 * n_A_BODY_DEF_PLUS;
	if(EquipNumSearch(836))
		w += n_A_BaseLV *10;
	if(n_A_Equip[8]==536){
		wHPVS = n_A_JobSearch();
		if(wHPVS==3 || wHPVS==4 || wHPVS==5)
			w += 5 * n_A_BaseLV;
	}
	
	// customS MAXHP
	
	// sigrun's wings
	if(n_A_JobSearch()==0 && EquipNumSearch(cItemStart+8))
		w += 80;
		
		
	// customE
	
	if(n_A_JobSearch()==5)
		w += CardNumSearch(474) * -100;
	if(n_A_JobSearch()==1)
		w += 500 * CardNumSearch(477);
	if(EquipNumSearch(883) && n_A_BaseLV <= 79)
		w += 400 * EquipNumSearch(883);
	if(EquipNumSearch(762))
		w += 20 * n_A_BaseLV;
	if(EquipNumSearch(1116) && n_A_JobSearch()==0)
		w += 30;
	if(EquipNumSearch(770))
		w += 3 * n_A_BaseLV;
	if(EquipNumSearch(986))
		w += 7 * n_A_BaseLV;
	if(n_A_Weapon_ATKplus >= 6 && EquipNumSearch(1168))
		w += -200;
	if(EquipNumSearch(1172))
		w += 50 * Math.floor(n_A_Weapon_ATKplus / 2);
	/* jRO exclusive KVM armor changes
	if(n_A_BODY_DEF_PLUS >= 7 && EquipNumSearch(1106))
		w += 300;
	if(n_A_BODY_DEF_PLUS >= 7 && EquipNumSearch(1105))
		w += 200;
	*/

	n_A_MaxHP += w;

	if(n_A_MaxHP < 1)
		n_A_MaxHP = 1;

	w=0;
	
	w += n_tok[15];

	if(SU_VIT >= 80 && CardNumSearch(267))
		w += 3;
	
	if(CardNumSearch(405)){
		if(n_A_JobSearch()==1 || n_A_JobSearch()==2 || n_A_JobSearch()==6)
			w += 5;
	}
	if(n_A_SHOES_DEF_PLUS >= 9 && CardNumSearch(304))
		w += 10;
	if(n_A_SHOES_DEF_PLUS <= 4 && CardNumSearch(407))
		w += 4;
	if(n_A_PassSkill5[1])
		w += 100;
	if(EquipNumSearch(715))
		w -= n_A_SHOES_DEF_PLUS;
	/* jRO exclusive KVM armor changes
	if(n_A_SHOULDER_DEF_PLUS >= 7 && EquipNumSearch(1110))
		w += 3;
	if(n_A_SHOES_DEF_PLUS >= 7 && EquipNumSearch(1109))
		w += 5;
	if(n_A_SHOES_DEF_PLUS >= 7 && EquipNumSearch(1108))
		w += 7;
	if(n_A_SHOES_DEF_PLUS >= 7 && EquipNumSearch(1107))
		w += 5;
	if(n_A_BODY_DEF_PLUS >= 7 && EquipNumSearch(1104))
		w += 10;
	*/

	if(n_A_PassSkill3[3])
		w += 5 + n_A_PassSkill3[3] * 2 + n_A_PassSkill3[33] + Math.floor(n_A_PassSkill3[23] /10);

	n_A_MaxHP = n_A_MaxHP * (100 + w)/100;

	if(n_A_PassSkill6[0] == 1 && n_A_PassSkill6[1] >= 1 && n_A_BodyZokusei==1){
		var dHP = [5,9,12,14,15];
		n_A_MaxHP = n_A_MaxHP * (100 + dHP[n_A_PassSkill6[1]-1]) /100;
	}
	if(SkillSearch(258))
		n_A_MaxHP *= 3;

	n_A_MaxHP = Math.floor(n_A_MaxHP);

	
	if(n_A_MaxHP>=100){
		if(n_A_MaxHP>=10000)
			myInnerHtml("A_MaxHP"," "+n_A_MaxHP,0);
		else
			myInnerHtml("A_MaxHP",n_A_MaxHP,0);
	}
	else
		myInnerHtml("A_MaxHP"," "+n_A_MaxHP,0);

	JobSP_A = new Array(1,2,2,5,2,6,3,3,4,8,4,9,4,4.7,5,4.7,6,6,7,4,1,3,4,8,4,9,4,4.7,5,4.7,6,6,7,4,0,0,0,0,0,0,0,2,4.7,9,3.75,3.75);

	
	wSPSL = 0;
	if(n_A_JOB == 43){
		if(n_A_BaseLV >= 70){
			if(n_A_BaseLV < 80)
				wSPSL = (n_A_BaseLV - 70) *4 +5;
			else if(n_A_BaseLV < 90)
				wSPSL = (n_A_BaseLV - 80) *4;
			else if(n_A_BaseLV < 93)
				wSPSL = (n_A_BaseLV - 90) *4;
			else if(n_A_BaseLV < 99)
				wSPSL = (n_A_BaseLV - 90) *4 -10;
			else wSPSL = 1;
		}
	}

	n_A_MaxSP = Math.floor(10 + n_A_BaseLV * JobSP_A[n_A_JOB] - wSPSL);
	
	if(n_A_JOB == 44){
		if(n_A_BaseLV <= 20) n_A_MaxSP = 11 + n_A_BaseLV * 3;
		else if(n_A_BaseLV <= 40) n_A_MaxSP = 71 +(n_A_BaseLV-20)*4;
		else if(n_A_BaseLV <= 60) n_A_MaxSP = 151 +(n_A_BaseLV-40)*5;
		else if(n_A_BaseLV <= 80) n_A_MaxSP = 251 +(n_A_BaseLV-60)*6;
		else n_A_MaxSP = 370 +(n_A_BaseLV-80)*8;
	}
	
	if(n_A_JOB == 45){
		if(n_A_BaseLV <= 25) n_A_MaxSP = 10 + n_A_BaseLV * 3;
		else if(n_A_BaseLV <= 35) n_A_MaxSP = 85 +(n_A_BaseLV-25)*4;
		else if(n_A_BaseLV <= 40) n_A_MaxSP = 126 +(n_A_BaseLV-35)*3;
		else if(n_A_BaseLV <= 50) n_A_MaxSP = 141 +(n_A_BaseLV-40)*4;
		else if(n_A_BaseLV <= 75) n_A_MaxSP = 181 +(n_A_BaseLV-50)*5;
		else if(n_A_BaseLV <= 78) n_A_MaxSP = 306 +(n_A_BaseLV-75)*6;
		else n_A_MaxSP = 330 +(n_A_BaseLV-78)*6;
	}
	
	if(n_Tensei)
		n_A_MaxSP = Math.floor(n_A_MaxSP * 125 /100);
	if(eval(A_youshi.checked))
		n_A_MaxSP = Math.floor(n_A_MaxSP *70 /100);
	n_A_MaxSP = Math.floor(n_A_MaxSP * (100 + n_A_INT) / 100);

	
	if(n_A_JOB == 41 && n_A_BaseLV >= 70){
		if(n_A_BaseLV <=79)
			n_A_MaxSP = Math.floor((150 + 1 * (n_A_BaseLV-70)) * (100 + n_A_INT) / 100);
		else if(n_A_BaseLV <=89)
			n_A_MaxSP = Math.floor((160 + 1 * (n_A_BaseLV-70)) * (100 + n_A_INT) / 100);
		else if(n_A_BaseLV <=99){
			n_A_MaxSP = 190 * (100 + n_A_INT) / 100;
			if(SkillSearch(345))
				n_A_MaxSP = n_A_MaxSP * 3;
			n_A_MaxSP = Math.floor(n_A_MaxSP);
		}
	}
	
	if(n_A_JOB == 42 && n_A_BaseLV >= 70){
		if(n_A_BaseLV <=79)
			n_A_MaxSP = Math.floor((339 + 2 * (n_A_BaseLV-70)) * (100 + n_A_INT) / 100);
		else if(n_A_BaseLV <=89)
			n_A_MaxSP = Math.floor((386 + 2 * (n_A_BaseLV-80)) * (100 + n_A_INT) / 100);
		else if(n_A_BaseLV <=99)
			n_A_MaxSP = Math.floor((430 + 3 * (n_A_BaseLV-90)) * (100 + n_A_INT) / 100);
	}

	w=0;
	
	w += n_tok[14];
	w += StPlusCalc2(4);
	w += StPlusCalc2(7);
	if(n_A_HEAD_DEF_PLUS >= 9 && n_A_card[8] == 298)
		w += 150;
	if(n_A_HEAD_DEF_PLUS <= 4 && n_A_card[8]==179)
		w += 40;
	if(n_A_card[9]==179)
		w += 40;
	if(n_A_JobSearch()==5)
		w += 100 * CardNumSearch(474);
	if(n_A_JobSearch()==5)
		w += 100 * CardNumSearch(476);

	if(SkillSearch(372))
		w += 30 * SkillSearch(372);
	if(n_A_Equip[8]==536){
		wSPVS = n_A_JobSearch();
		if(wSPVS==1 || wSPVS==2 || wSPVS==6)
			w += 2 * n_A_JobLV;
	}
	// customS MAXSP
	
	// Sigrun's Wings
	if(n_A_JobSearch()==0 && EquipNumSearch(cItemStart+8))
		w += 30;

	// Vintage Orc Helm
	if(EquipNumSearch(cItemStart+60))
		w += 10 * n_A_HEAD_DEF_PLUS;
	
	
	// customE
	if(n_A_Weapon_ATKplus >= 9 && EquipNumSearch(642))
		w += 300;
	if(EquipNumSearch(883) && n_A_BaseLV <= 79)
		w += 200 * EquipNumSearch(883);
	if(EquipNumSearch(762))
		w += 5 * n_A_BaseLV;
	if(EquipNumSearch(1118) && n_A_JobSearch()==3)
		w += 50;
	if(EquipNumSearch(770))
		w += n_A_JobLV;
	if(EquipNumSearch(986))
		w += Math.floor(0.5 * n_A_BaseLV);
	if(n_A_Weapon_ATKplus >= 6 && EquipNumSearch(1168))
		w += -100;
	if(EquipNumSearch(1193))
		w += Math.floor(n_A_BaseLV / 3) + n_A_SHOULDER_DEF_PLUS * 10;

	n_A_MaxSP += w;

	if(n_A_MaxSP < 0)
		n_A_MaxSP = 0;

	w=0;
	
	w += n_tok[16];
	if(n_A_SHOES_DEF_PLUS >= 9 && CardNumSearch(304))
		w += 10;
	if(n_A_SHOES_DEF_PLUS <= 4 && CardNumSearch(407))
		w += 4;
	
	if(CardNumSearch(405)){
		if(n_A_JobSearch()==3 || n_A_JobSearch()==4 || n_A_JobSearch()==5)
			w += 5;
	}
	/* jRO exclusive KVM armor changes
	if(n_A_SHOES_DEF_PLUS >= 7 && EquipNumSearch(1108))
		w += 7;
	*/
	if(n_A_HEAD_DEF_PLUS >= 7 && EquipNumSearch(1278))
		w += (n_A_HEAD_DEF_PLUS - 6);

	
	w += SkillSearch(269);
	
	w += SkillSearch(274) *2;
	if(n_A_PassSkill5[2])
		w += 100;
	if(EquipNumSearch(715))
		w -= n_A_SHOES_DEF_PLUS;

	if(n_A_PassSkill3[6])
		w += 15 + n_A_PassSkill3[6] + Math.floor(n_A_PassSkill3[36] / 2) + Math.floor(n_A_PassSkill3[26] /10);

	n_A_MaxSP = Math.floor(n_A_MaxSP * (100 + w)/100);

	
	if(n_A_MaxSP >= 100)
		myInnerHtml("A_MaxSP",n_A_MaxSP,0);
	else
		myInnerHtml("A_MaxSP"," "+n_A_MaxSP,0);


	
	n_A_DEF = n_tok[18];
	
	for(i=2;i<=10;i++)
	{
		n_A_DEF += ItemOBJ[n_A_Equip[i]][3];
	}
	if(EquipNumSearch(1026))
		n_A_DEF -= 5;
		
	//customS DEF
	
	// Crown of Deceit
	if(n_A_HEAD_DEF_PLUS >= 7 && EquipNumSearch(cItemStart+7))
		n_A_DEF += 2;
	// Aries Diadem
	if(n_A_HEAD_DEF_PLUS >= 7 && EquipNumSearch(cItemStart+11))
		n_A_DEF += 1;
	// Aquarius Crown
	if(n_A_HEAD_DEF_PLUS >= 7 && EquipNumSearch(cItemStart+12))
		n_A_DEF += 1;
	// Aquarius Diadem
	if(n_A_HEAD_DEF_PLUS >= 7 && EquipNumSearch(cItemStart+13))
		n_A_DEF += 1;
	// Cancer Crown
	if(n_A_HEAD_DEF_PLUS >= 7 && EquipNumSearch(cItemStart+14))
		n_A_DEF += 1;
	// Leo Crown
	if(n_A_HEAD_DEF_PLUS >= 7 && EquipNumSearch(cItemStart+20))
		n_A_DEF += 1;
	// Taurus Crown
	if(n_A_HEAD_DEF_PLUS >= 7 && EquipNumSearch(cItemStart+30))
		n_A_DEF += 2;
	// Taurus Diadem
	if(n_A_HEAD_DEF_PLUS >= 7 && EquipNumSearch(cItemStart+31))
		n_A_DEF += 2;


	//customE
	
	if(n_A_LEFT_DEF_PLUS <= 5 && CardNumSearch(222))
		n_A_DEF += 2;
	if(n_A_BODY_DEF_PLUS <= 5 && CardNumSearch(283))
		n_A_DEF += 2;
	if(n_A_Equip[0]==521){
		if(n_A_Weapon_ATKplus <= 5)
			n_A_DEF += 2;
		else if(n_A_Weapon_ATKplus >= 9)
			n_A_DEF += 7;
		else
			n_A_DEF += 5;
	}
	if(EquipNumSearch(658))
		n_A_DEF += n_A_Weapon_ATKplus;
	if(EquipNumSearch(715))
		n_A_DEF += Math.floor(n_A_SHOES_DEF_PLUS /2);
	if(EquipNumSearch(742) && n_A_JobSearch()==1)
		n_A_DEF += 6;
	if(EquipNumSearch(942))
		n_A_DEF += Math.floor(n_A_Weapon_ATKplus / 2);;
	if(EquipNumSearch(986) && (n_A_JobSearch()==1 || n_A_JobSearch()==2 || n_A_JobSearch()==6))
		n_A_DEF += 3;
	if(EquipNumSearch(987) && (EquipNumSearch(616) || EquipNumSearch(617) || EquipNumSearch(618)))
		n_A_DEF += 2;
	if(EquipNumSearch(1117) && n_A_JobSearch()==1)

		n_A_DEF += 2;

	if(n_A_PassSkill3[9])
		n_A_DEF += 2 + 2 * n_A_PassSkill3[9];

	if(EquipNumSearch(764))
		n_A_DEFplus -= (n_A_HEAD_DEF_PLUS + n_A_LEFT_DEF_PLUS);
	if(EquipNumSearch(809))
		n_A_DEFplus -= n_A_HEAD_DEF_PLUS;


	n_A_totalDEF = n_A_DEF + Math.round(n_A_DEFplus * 7 / 10);

	if(n_tok[24])
		n_A_totalDEF = Math.floor(n_A_totalDEF / n_tok[24]);
	if(n_tok[85])
		n_A_totalDEF -= Math.floor(n_A_totalDEF * n_tok[85] /100);

	if(SkillSearch(256))
			n_A_totalDEF = Math.floor(n_A_totalDEF * (1 - 0.05 * SkillSearch(256)));

	if(n_A_IJYOU[2])
		n_A_totalDEF -= Math.floor(n_A_totalDEF * 25 / 100);

	
	if(SkillSearch(196))
		n_A_totalDEF = 90;

	if(SkillSearch(258))
		n_A_totalDEF = 0;

	if(n_A_PassSkill8[12] >= 3)
		n_A_totalDEF -= Math.floor(n_A_totalDEF * (n_A_PassSkill8[12] - 2) * 5 / 100);

	
	myInnerHtml("A_totalDEF",n_A_totalDEF,0);

	n_A_VITDEF = new Array();
	n_A_VITDEF[0] = Math.floor(n_A_VIT * 0.5) + Math.floor(n_A_VIT * 0.3);
	n_A_VITDEF[2] = Math.floor(n_A_VIT * 0.5) + Math.floor(n_A_VIT * n_A_VIT / 150) -1;
	if(n_A_VITDEF[2] > n_A_VITDEF[0]){
		n_A_VITDEF[1] = (n_A_VITDEF[0] + n_A_VITDEF[2]) / 2;
	}
	else{
		n_A_VITDEF[1] = n_A_VITDEF[0];
		n_A_VITDEF[2] = n_A_VITDEF[0];
	}
	if(SkillSearch(12)){
		for(i=0;i<=2;i++)
			n_A_VITDEF[i] = Math.floor(n_A_VITDEF[i] * 0.45);
	}
	else if(n_A_PassSkill6[5]){
			for(i=0;i<=2;i++)
				n_A_VITDEF[i] = Math.floor(n_A_VITDEF[i] * (0.95 - 0.05 * n_A_PassSkill6[5]));
	}
	else{
		if(n_A_PassSkill2[12]){
			for(i=0;i<=2;i++)
				n_A_VITDEF[i] = Math.floor(n_A_VITDEF[i] * 0.9);
		}
	}
	if(n_tok[24]){
		for(i=0;i<=2;i++)
			n_A_VITDEF[i] = Math.floor(n_A_VITDEF[i] / n_tok[24]);
	}
	if(SkillSearch(256)){
		for(i=0;i<=2;i++)
			n_A_VITDEF[i] = Math.floor(n_A_VITDEF[i] * (1 - 0.05 * SkillSearch(256)));
	}
	if(n_A_PassSkill2[4]){
		for(i=0;i<=2;i++)
			n_A_VITDEF[i] = Math.floor(n_A_VITDEF[i] * (1 + 0.05 * n_A_PassSkill2[4]));
	}
	if(TimeItemNumSearch(33))
		for(i=0;i<=2;i++)
			n_A_VITDEF[i] -= Math.floor(n_A_VITDEF[i] * 20 / 100);
	if(n_A_IJYOU[2])
		for(i=0;i<=2;i++)
			n_A_VITDEF[i] -= Math.floor(n_A_VITDEF[i] * 25 / 100);

	if(SkillSearch(258)){
		for(i=0;i<=2;i++)
			n_A_VITDEF[i] = 0;
	}

	if(n_A_PassSkill8[12] >= 3){
		for(i=0;i<=2;i++)
			n_A_VITDEF[i] -= Math.floor(n_A_VITDEF[i] * (n_A_PassSkill8[12] - 2) * 5 / 100);
	}

	
	n_A_MDEF = n_tok[19];

	if(EquipNumSearch(986) && (n_A_JobSearch()==3 || n_A_JobSearch()==4 || n_A_JobSearch()==5))
		n_A_MDEF += 5;

	//customS MDEF
	// Crown of Deceit
	if(n_A_HEAD_DEF_PLUS >= 9 && EquipNumSearch(cItemStart+7))
		n_A_MDEF += 5;
	// Aries Crown
	if(n_A_HEAD_DEF_PLUS >= 7 && EquipNumSearch(cItemStart+10))
		n_A_MDEF += 5;
	// Aries Diadem
	if(n_A_HEAD_DEF_PLUS >= 7 && EquipNumSearch(cItemStart+11))
		n_A_MDEF += 5;
	// Cancer Diadem
	if(n_A_HEAD_DEF_PLUS >= 7 && EquipNumSearch(cItemStart+15))
		n_A_MDEF += 1;
	// Gemini Diadem
	if(n_A_HEAD_DEF_PLUS >= 7 && EquipNumSearch(cItemStart+19))
		n_A_MDEF += 7;
	// Pisces Crown
	if(n_A_HEAD_DEF_PLUS >= 7 && EquipNumSearch(cItemStart+24))
		n_A_MDEF += 5;
	
	
	
	//customE	
	if(n_A_JobSearch()==3)
		n_A_MDEF += CardNumSearch(383);
	if(n_A_LEFT_DEF_PLUS >= 9 && CardNumSearch(310))
		n_A_MDEF += 5;
	if(n_A_HEAD_DEF_PLUS <= 5 && n_A_card[8] == 213)
		n_A_MDEF += 5;
	if(n_A_card[9] == 213)
		n_A_MDEF += 5;
	if(n_A_LEFT_DEF_PLUS <= 5 && CardNumSearch(222))
		n_A_MDEF += 3;
	if(n_A_BODY_DEF_PLUS <= 5 && CardNumSearch(283))
		n_A_MDEF += 5;
	if(n_A_SHOES_DEF_PLUS <= 5 && CardNumSearch(381))
		n_A_MDEF += 7;
	if(n_A_SHOULDER_DEF_PLUS <= 5 && CardNumSearch(258))
		n_A_MDEF += 8;
	if(EquipNumSearch(764))
		n_A_MDEF += (n_A_HEAD_DEF_PLUS + n_A_LEFT_DEF_PLUS);
	if(EquipNumSearch(809))
		n_A_MDEF += n_A_HEAD_DEF_PLUS;
	if(EquipNumSearch(1169))
		n_A_MDEF += n_A_Weapon_ATKplus;
	if(CardNumSearch(199) && n_A_JobSearch()==5)
		n_A_MDEF += 3;


	if(SkillSearch(9)){
		n_A_MDEF += SkillSearch(9);
	}else if(SkillSearch(256)){
		n_A_MDEF += 1;
	}

	
	if(EquipNumSearch(1281))
		n_A_MDEF = Math.floor(n_A_MDEF / 2);
	
	if(SkillSearch(196))
		n_A_MDEF = 90;
	if(SkillSearch(258))
		n_A_MDEF = 0;
	
	myInnerHtml("A_MDEF",n_A_MDEF,0);

	n_A_INTMDEF = n_A_INT + Math.floor(n_A_VIT / 2);
	if(TimeItemNumSearch(9))
		n_A_INTMDEF -= Math.floor(n_A_INTMDEF * 20 / 100);

	
	if(EquipNumSearch(1281))
		n_A_INTMDEF = Math.floor(n_A_INTMDEF / 2);


	n_A_HIT = n_A_BaseLV + n_A_DEX;

	
	n_A_HIT += n_tok[8];

	if(EquipNumSearch(656))
		n_A_HIT -= Math.floor(SU_DEX / 3);
	if(n_A_WeaponType==3 || n_A_WeaponType==2)
		n_A_HIT += CardNumSearch(464) * 5;
	if(n_A_WeaponType==10)
		n_A_HIT += CardNumSearch(465) * 5;
	if(CardNumSearch(492))
		n_A_HIT += Math.floor(n_A_JobLV /10) * CardNumSearch(492);
	if(SU_STR >= 90 && EquipNumSearch(442))
		n_A_HIT += 10 * EquipNumSearch(442);
	if(SU_STR >= 95 && EquipNumSearch(1167))
		n_A_HIT += 10;
	if(EquipNumSearch(1176) && SkillSearch(81) == 10)
		n_A_HIT += 10;

	
	n_A_HIT += 1 * SkillSearch(39);
	n_A_HIT += 2 * SkillSearch(148);
	n_A_HIT += 3 * SkillSearch(270);

	n_A_HIT += 10 * SkillSearch(256);
	n_A_HIT += 1 * SkillSearch(426);
	if(SkillSearch(421))
		n_A_HIT -= 30;
	if(SkillSearch(422))
		n_A_HIT += 20;
	n_A_HIT += 2 * SkillSearch(425);

	if(EquipNumSearch(654))
		n_A_HIT += Math.floor(SU_AGI / 10);

	if(n_A_PassSkill5[4])
		n_A_HIT += 50;

	if(n_A_PassSkill7[0])
		n_A_HIT += 30;
	if(n_A_PassSkill8[18])
		n_A_HIT += 3;
	if(n_A_PassSkill8[20])
		n_A_HIT += 10;
	if(n_A_PassSkill8[28])
		n_A_HIT += 5;

	
	if(n_A_PassSkill3[4])
		n_A_HIT += 10 + n_A_PassSkill3[4] * 2 + n_A_PassSkill3[34] + Math.floor(n_A_PassSkill3[24] /10);

	
	myInnerHtml("A_HIT",n_A_HIT,0);

	n_A_FLEE = n_A_BaseLV + n_A_AGI;

	
	n_A_FLEE += n_tok[9];

	// customS FLEE
	
	// Cancer Crown
	if(n_A_HEAD_DEF_PLUS >= 7 && EquipNumSearch(cItemStart+14))
		n_A_FLEE += 10;
	// Leo Crown
	if(n_A_HEAD_DEF_PLUS >= 7 && EquipNumSearch(cItemStart+20))
		n_A_FLEE += 10;
	// Leo Diadem
	if(n_A_HEAD_DEF_PLUS >= 7 && EquipNumSearch(cItemStart+21))
		n_A_FLEE += 10;
	// Leo Diadem
	if(n_A_HEAD_DEF_PLUS >= 7 && EquipNumSearch(cItemStart+21))
		n_A_FLEE += 10;
	// Libra Diadem
	if(n_A_HEAD_DEF_PLUS >= 9 && EquipNumSearch(cItemStart+23))
		n_A_FLEE += 5;
	
	// ATK
	
	
	
	// customE
	
	if(n_A_JobSearch()==2 && CardNumSearch(295))
		n_A_FLEE += 20;
	if(n_A_SHOULDER_DEF_PLUS >= 9 && CardNumSearch(271))
		n_A_FLEE += 20;
	if(n_A_SHOULDER_DEF_PLUS <= 4 && CardNumSearch(401))
		n_A_FLEE += 10;
	if(n_A_SHOULDER_DEF_PLUS >= 9 && CardNumSearch(403))
		n_A_FLEE += 5;
	if(SU_STR >= 90 && EquipNumSearch(442))
		n_A_FLEE += 10 * EquipNumSearch(442);
	if(EquipNumSearch(1273)){
		if(n_A_HEAD_DEF_PLUS >= 5)
			n_A_FLEE += 5;
		if(n_A_HEAD_DEF_PLUS >= 7)
			n_A_FLEE += 2;
	}

	if(n_A_PassSkill6[0] == 2 && n_A_PassSkill6[1] >= 1 && n_A_BodyZokusei==4)
		n_A_FLEE += n_A_PassSkill6[1] *3;

	if(n_A_Equip[0]==483)
		n_A_FLEE -= (n_A_BaseLV + SU_AGI);
	if(n_A_BaseLV <= 79 && EquipNumSearch(1251))
		n_A_FLEE += 5;

	
	if(n_A_JOB==8||n_A_JOB==14||n_A_JOB==22||n_A_JOB==28)
		n_A_FLEE += 4 * SkillSearch(14);
	else
		n_A_FLEE += 3 * SkillSearch(14);

	if(SkillSearch(421))
		n_A_FLEE += 30;
	if(SkillSearch(433)){
		if(n_A_WeaponType==20 || n_A_WeaponType==0)
			n_A_FLEE -= 5 * SkillSearch(433);
	}
	Mikiri = new Array(0,1,3,4,6,7,9,10,12,13,15);
	n_A_FLEE += Mikiri[SkillSearch(191)];

	
	if(n_A_JOB == 24)
		n_A_FLEE += Math.round(SkillSearch(273) /2);
	if(n_A_PassSkill2[9] && SkillSearch(273)==0)
		n_A_FLEE += Math.round(n_A_PassSkill2[9] /2);

	
	if(SkillSearch(383))
		n_A_FLEE += 10;

	
	if(SkillSearch(356))
		n_A_FLEE += Math.floor((n_A_BaseLV + n_A_LUK + n_A_DEX) / 10);

	if(n_A_PassSkill5[4])
		n_A_FLEE += 50;

	if(n_A_PassSkill7[1])
		n_A_FLEE += 30;

	if(n_A_PassSkill8[20])
		n_A_FLEE += 20;
	
	if(n_A_PassSkill3[0])
		n_A_FLEE += n_A_PassSkill3[0] + Math.floor(n_A_PassSkill3[30] /2) + Math.floor(n_A_PassSkill3[20] /10);

	if(SkillSearch(258))
		n_A_FLEE /= 2;

	if(n_A_PassSkill8[12] >= 3){
		var w = n_A_PassSkill8[12] - 2;
		if(w > 10)
			w = 10;
		n_A_FLEE -= Math.floor(n_A_FLEE * w * 10 / 100);
	}

	
	myInnerHtml("A_FLEE",n_A_FLEE,0);

	n_A_LUCKY = 1 + n_A_LUK * 0.1;

	
	n_A_LUCKY += n_tok[11];
	
	if(n_A_JobSearch()==2)
		n_A_LUCKY += 5 * CardNumSearch(391);
	
	if(n_A_JobSearch()==1)
		n_A_LUCKY += 3 * CardNumSearch(354);
	if(n_A_SHOULDER_DEF_PLUS <= 4 && CardNumSearch(401))
		n_A_LUCKY += 1;
	if(n_A_Equip[7]==535){
		var wHPVS = n_A_JobSearch();
		if(wHPVS==3 || wHPVS==4 || wHPVS==5){
			n_A_LUCKY += 5;
			n_A_LUCKY += n_A_SHOULDER_DEF_PLUS * 2;
		}
	}
	
	if(n_A_JobSearch()==41 && EquipNumSearch(678))
		n_A_LUCKY += 2;
	if(n_A_LEFT_DEF_PLUS >= 6 && EquipNumSearch(1251))
		n_A_LUCKY += 3;

	n_A_LUCKY = Math.round(n_A_LUCKY *10)/10;

	
	myInnerHtml("A_LUCKY",n_A_LUCKY,0);

	n_A_CRI = 1 + n_A_LUK * 0.3;

	w=0;
	w += n_tok[10];
	
	w += n_tok[110+n_B[2]];

	if(CardNumSearch(402))
		w += n_A_SHOULDER_DEF_PLUS;
	if(n_A_JobSearch()==2)
		w += 4 * CardNumSearch(328);
	if(n_A_JobSearch()==3){
		if(n_B[2]==1 || n_B[2]==6)
			w += 9 * CardNumSearch(253);
	}
	if(SU_LUK >= 80 && CardNumSearch(267))
		w += 3;
	if(n_A_WeaponType==3 || n_A_WeaponType==2)
		w += CardNumSearch(464) * 5;
	if(n_A_WeaponType==10)
		w += CardNumSearch(465) * 5;
	if(CardNumSearch(492))
		w += Math.floor(n_A_JobLV /10) * CardNumSearch(492);
	if(n_A_HEAD_DEF_PLUS >= 6 && EquipNumSearch(785))
		w += (n_A_HEAD_DEF_PLUS -5);
	if(EquipNumSearch(640))
		w += Math.floor(SU_LUK / 5);
	if(EquipNumSearch(689))
		w += Math.floor(SU_LUK / 10);
	if(SU_AGI >= 90 && EquipNumSearch(442))
		w += 10 * EquipNumSearch(442);
	
	if(n_A_JobSearch()==41 && EquipNumSearch(675))
		w += 5;
	if(EquipNumSearch(623))
		w += n_A_Weapon_ATKplus;
	if(EquipNumSearch(1122) && n_A_JobSearch()==6)
		w += 5;

	// customS Critical
	if(EquipNumSearch(cItemStart+65) && n_A_HEAD_DEF_PLUS >= 7)
		w += 10;
	
	// customE

	// customS KVM WEAPONS
	if(n_A_Weapon_ATKplus >= 6 && n_B[2]==7 && EquipNumSearch(1091))
		w += 5;
	// customE KVM WEAPONS
	if(EquipNumSearch(1161))
		w += (2 * SkillSearch(89));
	if(SU_DEX >= 90 && EquipNumSearch(1164))
		w += 5;
	if(n_A_HEAD_DEF_PLUS >= 7)
		if(EquipNumSearch(1267))
			w += 5;
	if(n_A_ActiveSkill != 272){
		if(n_A_WeaponType == 10 && n_A_Arrow == 15)
			w += 20;
		if(n_A_WeaponType==10 || 17<=n_A_WeaponType && n_A_WeaponType<=21)
			w += CardNumSearch(462) * 15;
	}
	
	if(SkillSearch(195))
		w += 7.5 + SkillSearch(195) * 2.5;
	else if(TimeItemNumSearch(34))
		w += 10;
	if(SkillSearch(253))
			w += 50;
	if(n_A_JOB == 24)
			w += SkillSearch(270);
	if(n_A_PassSkill8[18])
		w += 7;
	if(n_A_PassSkill8[21])
		w += 7;
	n_A_CRI += w;

	if(n_A_PassSkill3[5])
		n_A_CRI += 10 + n_A_PassSkill3[5] + Math.floor(n_A_PassSkill3[35] /2) + Math.floor(n_A_PassSkill3[25] /10);

	
	if(n_A_WeaponType == 11)
		n_A_CRI *= 2;

	n_A_CRI = Math.round(n_A_CRI * 10) / 10;

	if(n_A_PassSkill8[16])
		n_A_CRI = 0;
	
	myInnerHtml("A_CRI",n_A_CRI,0);

	n_A_MATK = [0,0,0];
	
	var w = Math.floor(n_A_INT / 7);
	n_A_MATK[0] = n_A_INT + w * w;

	
	w = Math.floor(n_A_INT / 5);
	n_A_MATK[2] = n_A_INT + w * w;

	w = 100;

	w += n_tok[89];

	if(n_A_Weapon_ATKplus >= 9 && EquipNumSearch(642))
		w += 3;
	if(EquipNumSearch(646))
		w += Math.floor(n_A_Weapon_ATKplus / 2);
	if(EquipNumSearch(737))
		w += n_A_Weapon_ATKplus;
	if(EquipNumSearch(1042))
		w += n_A_Weapon_ATKplus;
	if(EquipNumSearch(1029) && n_A_HEAD_DEF_PLUS >= 6)
		w += n_A_HEAD_DEF_PLUS - 5;
	if(n_A_PassSkill6[2])
		w += 10;
	if(EquipNumSearch(897) && (n_A_JobSearch2() == 14 || n_A_JOB == 44))
		w += 15 * EquipNumSearch(897);
	if(EquipNumSearch(898) && (n_A_JobSearch2() == 14 || n_A_JOB == 44))
		w += 15 * EquipNumSearch(898);
	// customS KVM WEAPONS
	if(EquipNumSearch(1083)){
		w += n_A_Weapon_ATKplus;
	//	if(n_A_Weapon_ATKplus >= 6)
	//		w += 5;
	}
	if(n_A_Weapon_ATKplus >= 9 && EquipNumSearch(1084))
		w += 5;
	if(n_A_Weapon_ATKplus >= 9 && EquipNumSearch(1095))
		w += 5;
	// customE
	if(n_A_JobSearch()==5 && CardNumSearch(454))
		w +=3;
	if(n_A_HEAD_DEF_PLUS >= 9 && n_A_card[8]==177)
		w += 2;
	if(n_A_Equip[0]==484 && SU_INT >= 70)
		w += 5;
	//customS MATK
	
	// Moon Rabbit Hat
	if(n_A_HEAD_DEF_PLUS >= 5 && EquipNumSearch(cItemStart+5))
		w += n_A_HEAD_DEF_PLUS - 4;
	// Crown of Deceit
	if(n_A_HEAD_DEF_PLUS >= 7 && EquipNumSearch(cItemStart+7)){
		w += 5;
		if(n_A_HEAD_DEF_PLUS >= 9)
			w += 5;
	}
	// Aries Crown
	if(n_A_HEAD_DEF_PLUS >= 7 && EquipNumSearch(cItemStart+10))
		w += 2;
	// Cancer Diadem
	if(n_A_HEAD_DEF_PLUS >= 7 && EquipNumSearch(cItemStart+15))
		w += 2;
	// Gemini Diadem
	if(n_A_HEAD_DEF_PLUS >= 7 && EquipNumSearch(cItemStart+19))
		w += 8;
	// Libra Crown
	if(n_A_HEAD_DEF_PLUS >= 7 && EquipNumSearch(cItemStart+22)){
		w += 3;
		if(n_A_HEAD_DEF_PLUS >= 9)
			w += 5;
	}
	// Pisces Crown
	if(n_A_HEAD_DEF_PLUS >= 7 && EquipNumSearch(cItemStart+24))
		w += 2;
	// Pisces Diadem
	if(n_A_HEAD_DEF_PLUS >= 7 && EquipNumSearch(cItemStart+25))
		w += 2;
	// Sagittarius Diadem
	if(n_A_HEAD_DEF_PLUS >= 10 && EquipNumSearch(cItemStart+25))
		w += 4;
	// Dress Hat [iRO]
	if(n_A_HEAD_DEF_PLUS >= 7 && EquipNumSearch(cItemStart+36))
		w += 1;
	// Red Wing Hat
	if(n_A_HEAD_DEF_PLUS >= 7 && EquipNumSearch(cItemStart+38)){
		w += 2;
		if(n_A_HEAD_DEF_PLUS >= 9)
			w += 2;
	}
	// Emperor Wreath
	if(n_A_HEAD_DEF_PLUS >= 7 && EquipNumSearch(cItemStart+45)){
		w += 3;
		if(n_A_HEAD_DEF_PLUS >= 9)
			w += 3;
	}
	// Skull Cap
	if(n_A_HEAD_DEF_PLUS >= 5 && EquipNumSearch(cItemStart+61)){
		w += 3;
		if(n_A_HEAD_DEF_PLUS >= 7)
			w += 3;
	}
	// Skull Cap set
	if(EquipNumSearch(cItemStart+63) || EquipNumSearch(cItemStart+64))
		w += n_A_Weapon_ATKplus;
	
	
	//customE
	if(EquipNumSearch(1173))
		w += Math.floor(n_A_Weapon_ATKplus / 2);
	if(n_A_JOB==14 || n_A_JOB==28)
		w += 10 * CardNumSearch(479);
	n_A_MATK[0] = Math.floor(n_A_MATK[0] * w / 100);
	n_A_MATK[2] = Math.floor(n_A_MATK[2] * w / 100);

	if(n_A_PassSkill7[2]){
		n_A_MATK[0] += 10;
		n_A_MATK[2] += 10;
	}
	if(n_A_PassSkill7[10]){
		n_A_MATK[0] += 20;
		n_A_MATK[2] += 20;
	}
	if(n_A_PassSkill8[19]){
		n_A_MATK[0] += 5;
		n_A_MATK[2] += 5;
	}

	
	w = 100 + n_tok[88];

	n_A_MATK[0] = Math.floor(n_A_MATK[0] * w / 100);
	n_A_MATK[2] = Math.floor(n_A_MATK[2] * w / 100);

	BK_n_A_MATK = [0,0,0];
	BK_n_A_MATK[0] = n_A_MATK[0];
	BK_n_A_MATK[2] = n_A_MATK[2];
	if(BK_n_A_MATK[0] != BK_n_A_MATK[2])
		BK_n_A_MATK[2] -= 1;
	BK_n_A_MATK[1] = (BK_n_A_MATK[2] + BK_n_A_MATK[0]) / 2;

	if(n_A_PassSkill6[4]){
		w = 100 + 20 * n_A_PassSkill6[4];
		n_A_MATK[0] = Math.floor(n_A_MATK[0] * w / 100);
		n_A_MATK[2] = Math.floor(n_A_MATK[2] * w / 100);
	}
	if(SkillSearch(276)){
		n_A_MATK[0] = Math.floor(n_A_MATK[0] * (1+ 0.05 * SkillSearch(276)));
		n_A_MATK[2] = Math.floor(n_A_MATK[2] * (1+ 0.05 * SkillSearch(276)));
	}

	
	myInnerHtml("A_MATK",n_A_MATK[0] +"~"+ n_A_MATK[2],0);

	
	if(n_A_MATK[0] != n_A_MATK[2])
		n_A_MATK[2] -= 1;

	n_A_MATK[1] = (n_A_MATK[2] + n_A_MATK[0]) / 2;



	
	if(n_Nitou == 1)
		wASPD = (200 - (JobASPD[n_A_JOB][n_A_WeaponType] + JobASPD[n_A_JOB][n_A_Weapon2Type]) /2) *1.4;
	else
		wASPD = 200 - JobASPD[n_A_JOB][n_A_WeaponType];

	
	if(n_Nitou == 1 && n_A_WeaponType == 0 && n_A_Weapon2Type != 0)
		wASPD = 200 - JobASPD[n_A_JOB][n_A_Weapon2Type];

	n_A_ASPD = 200 - wASPD + (Math.floor(wASPD * n_A_AGI *4 /100) +Math.floor(wASPD * n_A_DEX /100)) /10;

	if(n_A_Equip[0]==47)
		n_A_ASPD += 2;

	
	if(SkillSearch(78) && (n_A_ActiveSkill == 0 || n_A_ActiveSkill == 284))
		n_A_ASPD -= (6 - SkillSearch(78)) *10;

	n_A_ASPD += Math.round(SkillSearch(425) /2);

	if(n_A_WeaponType == 12 && SkillSearch(224)){

		n_A_ASPD += (200 - n_A_ASPD) * (SkillSearch(224) /2 / 100);
		n_A_ASPD = Math.floor(n_A_ASPD * 10) / 10;
	}
	
	w=0;
	ASPDch = 0;
	if(n_A_IJYOU[0] == 0 && n_A_IJYOU[1] == 0){
		if(n_A_WeaponType == 3 && SkillSearch(74)){
			w += 30;
			ASPDch = 1;
		}
		if(n_A_WeaponType == 2 && SkillSearch(386)){
			w += 30;
			ASPDch = 1;
		}
		if(6 <= n_A_WeaponType && n_A_WeaponType<=8 && SkillSearch(152)){
			w += 30;
			ASPDch = 1;
		}
		if(ASPDch == 0 && SkillSearch(389)){
			w += 30;
			ASPDch = 1;
		}
		if(ASPDch == 0 && (TimeItemNumSearch(5) || TimeItemNumSearch(28))){
			w += 30;
			ASPDch = 1;
		}
		if(n_A_WeaponType==5 && SkillSearch(166)){
			w += SkillSearch(166) + 20;
			ASPDch = 1;
		}
	}
	
	// customS ASPD
	
	// Leo Diadem
	if(n_A_HEAD_DEF_PLUS >= 7 && EquipNumSearch(cItemStart+21))
		w += 3;
	// Sagittarius Crown
	if(n_A_HEAD_DEF_PLUS >= 7 && EquipNumSearch(cItemStart+26))
		w += 2;
	// Scorpio Crown
	if(n_A_HEAD_DEF_PLUS >= 8 && EquipNumSearch(cItemStart+28)){
		w += 2;
		if(n_A_HEAD_DEF_PLUS >=10)
			w += 2;
	}
	// Emperor Wreath
	if(n_A_HEAD_DEF_PLUS >= 7 && EquipNumSearch(cItemStart+45))
		w += 3;

	// Mercury Riser [fRO]
	if(n_A_HEAD_DEF_PLUS >= 7 && EquipNumSearch(cItemStart+59)){
		w += 2;
		if(n_A_HEAD_DEF_PLUS >= 9)
			w += 2;
	}
	
	// customE
	
	if(EquipNumSearch(654))
		w += Math.floor(SU_AGI / 14);
	if(n_A_Equip[0]==484 && SU_STR >= 50)
		w += 5;
	if(SU_STR >= 95 && EquipNumSearch(621))
		w -= 40;
	if(EquipNumSearch(624))
		w += (n_A_Weapon_ATKplus);
	if(EquipNumSearch(641))
		w += n_A_Weapon_ATKplus;
	if(EquipNumSearch(903) && n_A_JobSearch2() == 13)
		w += 20;
	if(SU_STR >= 77 && EquipNumSearch(944))
		w += 4;
	// customS KVM WEAPONS
	if(n_A_Weapon_ATKplus >= 7 && n_A_Equip[0] == 1077){
		w += 5;
		if(n_A_Weapon_ATKplus >= 9)
			w += 5;
	}
	if(n_A_Weapon2_ATKplus >= 7 && n_A_Equip[1] == 1077){
		w += 5;
		if(n_A_Weapon2_ATKplus >= 9)
			w += 5;
	}
	if(n_A_Weapon_ATKplus >= 6 && EquipNumSearch(1081))
		w += 10;
	if(n_A_Weapon_ATKplus >= 6 && EquipNumSearch(1086)){
		w += 5;
		if(n_A_Weapon_ATKplus >= 9)
			w += 5;
	}
	if(n_A_Weapon_ATKplus >= 5 && EquipNumSearch(1088)){
		w += 5;
		if(n_A_Weapon_ATKplus >= 9)
			w += 5;
	}
	// customE
	if(n_A_JOB == 21 && EquipNumSearch(855))
		w -= 5;
	if(EquipNumSearch(1121) && n_A_JobSearch()==2)

		w += 3;
	if(SU_STR >= 95 && EquipNumSearch(1167))
		w += 3;

	if(SkillSearch(258))
		w += 30;
	if(SkillSearch(420))
		w += 20;
	if(SkillSearch(433)){
		if(n_A_WeaponType==20 || n_A_WeaponType==0)
			w += 2 * SkillSearch(433);
	}
	
	if(SkillSearch(357)){
		ASPDch = 1;
		w += Math.floor((n_A_BaseLV + n_A_LUK + n_A_DEX) / 10);
	}
	
	if(SkillSearch(361) && n_A_JobLV >= 50){
		ASPDch = 1;
		w += 3 * SkillSearch(361);
	}
	if(n_A_IJYOU[0] == 0 && n_A_IJYOU[1] == 0){
		if(ASPDch == 0 && n_A_PassSkill2[6] == 2){
			if(n_A_WeaponType != 10 && !(17 <= n_A_WeaponType && n_A_WeaponType <= 21)){
				w += 25;
				ASPDch = 1;
			}
		}
		else if(ASPDch == 0 && 6 <= n_A_WeaponType && n_A_WeaponType<=8 && n_A_PassSkill2[6] == 1){
			w += 25;
			ASPDch = 1;
		}else if(ASPDch == 0 && 6 <= n_A_WeaponType && n_A_WeaponType<=8 && n_A_PassSkill2[6] == 3){
			w += 30;
			ASPDch = 1;
		}
	}
	if(n_A_PassSkill3[1] && ASPDch == 0){
		if(n_A_WeaponType != 10 && !(17 <= n_A_WeaponType && n_A_WeaponType <= 21))
			w += 5 + n_A_PassSkill3[1] + Math.floor(n_A_PassSkill3[31] /2) + Math.floor(n_A_PassSkill3[21] /20);
	}

	
	w += n_tok[12];

	
	if(SkillSearch(196))
		w -= 25;

	
	if(n_A_SpeedPOT){
		if(n_A_SpeedPOT == 1)
			w += 10;
		else if(n_A_SpeedPOT == 2)
			w += 15;
		else if(n_A_SpeedPOT == 3)
			w += 20;

	}else{
		if(n_A_PassSkill8[28])
			w += 10;
	}
	n_A_ASPD += (200 - n_A_ASPD) * (w / 100);

	
	if(SkillSearch(165))
		n_A_ASPD -= (25 -SkillSearch(165) *5);
		
	// customS fixed ASPD (RWC Indonesia Hat)
	if(EquipNumSearch(cItemStart+47))
		n_A_ASPD += 1;
	// customE

	if(n_A_ASPD > 190)
		n_A_ASPD = 190;

	
	n_A_ASPD = Math.floor(n_A_ASPD * 10) / 10;

	
	myInnerHtml("A_ASPD",n_A_ASPD,0);

	n_A_ASPD = (200 - n_A_ASPD) / 50;

	
	n_Delay[1] = Math.floor(n_A_ASPD * 1000)/1000;
	if(n_A_ActiveSkill==17)
		n_Delay[1] = Math.floor(n_A_ASPD *75)/100;

	sandanDelay = 0;
	if(SkillSearch(187) && n_A_ActiveSkill == 0){
		sandanDelay = (1000 - n_A_AGI *4 - n_A_DEX *2) /1000;
		if(SkillSearch(301))
			sandanDelay += 0.3;
	}

	n_A_CAST = 1 - n_A_DEX / 150;
	if(n_A_CAST < 0)
		n_A_CAST = 0;

	var w=100;
	w += n_tok[73];
	
	// customS Cast Time
	
	// Crown of Deceit
	if(n_A_HEAD_DEF_PLUS >= 7 && EquipNumSearch(cItemStart+7)){
		w -= 5;
		if(n_A_HEAD_DEF_PLUS >= 9)
			w -= 5;
	}
	// Capricorn Diadem
	if(n_A_HEAD_DEF_PLUS >= 8 && EquipNumSearch(cItemStart+17))
		w -= 3;
	// Sagittarius Diadem
	if(n_A_HEAD_DEF_PLUS >= 7 && EquipNumSearch(cItemStart+27)){
		w -= 3;
		if(n_A_HEAD_DEF_PLUS >=9)
			w -= 2;
	}
	// Advanced Mini Propeller
	if(EquipNumSearch(cItemStart+34))
		w -= n_A_HEAD_DEF_PLUS;
	// Emperor Wreath
	if(n_A_HEAD_DEF_PLUS >= 7 && EquipNumSearch(cItemStart+45))
		w -= 5;

	// Skull Cap set
	if ((EquipNumSearch(cItemStart+63) || EquipNumSearch(cItemStart+64)) && n_A_Weapon_ATKplus >= 10)
		w -= 10;
	
	// customE
	
	if(n_A_JobSearch()==5 && CardNumSearch(454))
		w -= 15;
	if((n_A_JOB==18 || n_A_JOB==32) && CardNumSearch(460))
		w -= 15;
	if(EquipNumSearch(750))
		w -= n_A_Weapon_ATKplus;
	if(n_A_card[8]==177)
		w -= n_A_HEAD_DEF_PLUS;
	if(EquipNumSearch(849))
		w -= n_A_HEAD_DEF_PLUS;
	// customS KVM WEAPONS
	if(n_A_Weapon_ATKplus >= 9 &&EquipNumSearch(1084))
		w -= 5;
	if(n_A_Weapon_ATKplus >= 9 &&EquipNumSearch(1095))
		w -= 5;
	// customE
	if(n_A_PassSkill3[2] != 0)
		w -= n_A_PassSkill3[2] * 3 + n_A_PassSkill3[32] + Math.floor(n_A_PassSkill3[22] /10);
	if(TimeItemNumSearch(1))
		w -= 50;

	if(w < 0)
		w=0;

	n_A_CAST *= w /100;

	w = 100;
	if(StPlusCalc2(7000+n_A_ActiveSkill) != 0)
		w -= StPlusCalc2(7000+n_A_ActiveSkill);
	if(StPlusCard(7000+n_A_ActiveSkill) != 0)
		w -= StPlusCard(7000+n_A_ActiveSkill);
	// customS KVM WEAPONS
	if(n_A_ActiveSkill==321 || n_A_ActiveSkill==197)
		if(SkillSearch(195) && n_A_Weapon_ATKplus >= 9 && EquipNumSearch(1097))
			w -= 100;
	if(n_A_ActiveSkill==430)
		if(n_A_Weapon_ATKplus >= 9 && EquipNumSearch(1100))
			w -= 25;
	// customE
	if(n_A_ActiveSkill==131)
		if(n_A_Weapon_ATKplus >= 10 && EquipNumSearch(1169))
			w -= 8;
	if(w < 0)
		w = 0;
	n_A_CAST *= w /100;

	if(n_A_PassSkill2[13])
		n_A_CAST *= (100 - 15 * n_A_PassSkill2[13]) /100;
	if(SkillSearch(322))
		n_A_CAST = n_A_CAST /2;

	// customS Cast Delay
	// Crown of Deceit
	if(n_A_HEAD_DEF_PLUS >= 9 && EquipNumSearch(cItemStart+7))
		n_tok[74] += 5;
	// Emperor Wreath
	if(n_A_HEAD_DEF_PLUS >= 9 && EquipNumSearch(cItemStart+45))
		n_tok[74] += 5;
	// Mercury Riser
	if(n_A_HEAD_DEF_PLUS >= 7 && EquipNumSearch(cItemStart+59)){
		n_tok[74] += 2;
		if(n_A_HEAD_DEF_PLUS >= 9)
			n_tok[74] += 2;
	}
	
	
	// customE
	
	if(n_A_Weapon_ATKplus >= 9 && EquipNumSearch(934))
		n_tok[74] += 20;
	if(EquipNumSearch(1036) && n_A_HEAD_DEF_PLUS >= 6)
		n_tok[74] += n_A_HEAD_DEF_PLUS - 5;
	// customS KVM WEAPONS
	if(n_A_Weapon_ATKplus >= 9 &&EquipNumSearch(1084))
		n_tok[74] += 5;
	//if(EquipNumSearch(1085)){
	//	if(n_A_Weapon_ATKplus >= 5)
	//		n_tok[74] += 5;
	//	if(n_A_Weapon_ATKplus >= 7)
	//		n_tok[74] += 5;
	//}
	if(n_A_Weapon_ATKplus >= 9 && EquipNumSearch(1095))
		n_tok[74] += 5;
	// customE
	if(EquipNumSearch(936))
		n_tok[74] += (Math.floor(n_A_Weapon_ATKplus / 2) * 3);
	if(n_A_HEAD_DEF_PLUS >= 5 && EquipNumSearch(1279))
		n_tok[74] += (n_A_HEAD_DEF_PLUS - 4);

	var w = n_A_PassSkill3[2];
	if(w){
		if(w==10)
			n_tok[74] += w * 5 + n_A_PassSkill3[32] *2 + Math.floor(n_A_PassSkill3[29] /5);
		else
			n_tok[74] += w * 3 + n_A_PassSkill3[32] *2 + Math.floor(n_A_PassSkill3[29] /5);
	}
	if(n_tok[74] > 100)
		n_tok[74] = 100;

	n_A_HPR = Math.floor(n_A_VIT /5) + Math.floor(n_A_MaxHP /200);
	if(n_A_HPR < 1)
		n_A_HPR = 1;
	w = 100;
	w += n_tok[75];
	if(SU_LUK >= 77)
		w += 100 * CardNumSearch(221);
	
	if(n_A_JobSearch()==41 && EquipNumSearch(672))
		w += 3;
	if(n_A_SHOES_DEF_PLUS <= 4 && CardNumSearch(407))
		w += 5;
	if(n_A_PassSkill8[18])
		w += 3;
	/* jRO exclusive KVM armor changes
	if(n_A_BODY_DEF_PLUS >= 7 && EquipNumSearch(1105))
		w += 10;
	*/

	n_A_HPR = Math.floor(n_A_HPR * w /100);

	if(n_A_IJYOU[2])
		n_A_HPR = 0;

	myInnerHtml("A_HPR",n_A_HPR,0);

	n_A_SPR = Math.floor(n_A_INT /6) + Math.floor(n_A_MaxSP /100) +1;

	w=100;
	
	w += SkillSearch(269) *3;

	w += n_tok[76];

	if(SU_LUK >= 77)
		w += 100 * CardNumSearch(221);
	
	if(n_A_JobSearch()==41 && EquipNumSearch(673))
		w += 3;
	if(n_A_HEAD_DEF_PLUS <= 4 && n_A_card[8]==179)
		w += 5;
	if(n_A_card[9]==179)
		w += 5;
	if(n_A_SHOES_DEF_PLUS <= 4 && CardNumSearch(407))
		w += 5;
	if(EquipNumSearch(1119) && n_A_JobSearch()==5)

		w += 5;
	if(n_A_PassSkill8[18])
		w += 3;

	n_A_SPR = Math.floor(n_A_SPR * w /100);

	if(n_A_INT>=120)
		n_A_SPR += Math.floor((n_A_INT-120)/2) +4;

	if(n_A_IJYOU[2])
		n_A_SPR = 0;

	myInnerHtml("A_SPR",n_A_SPR,0);


	
	if(ArrowOBJ[n_A_Arrow][2]=="Holy Arrow")
		n_tok[36] += 5;
	if(SkillSearch(234))
		n_tok[39] += SkillSearch(234) *4;
		
	// customS KVM WEAPONS
	//if(n_A_Equip[1] == 1076 || n_A_Equip[1] == 1077){
	//	if(n_A_Weapon2_ATKplus >= 5)
	//		n_tok[37] += 20;
	//	if(n_A_Weapon2_ATKplus >= 7)
	//		n_tok[37] += 20;
	//}

	//if(n_A_Equip[0] == 1076 || n_A_Equip[0] == 1077 || n_A_Equip[0] == 1086 || n_A_Equip[0] == 1088 || n_A_Equip[0] == 1100){
	//	if(n_A_Weapon_ATKplus >= 5)
	//		n_tok[37] += 20;
	//	if(n_A_Weapon_ATKplus >= 7)
	//		n_tok[37] += 20;
	//}
	
	//if(n_A_Equip[0] == 1081 || n_A_Equip[0] == 1096 || n_A_Equip[0] == 1097 || n_A_Equip[0] == 1092 || n_A_Equip[0] == 1093 || n_A_Equip[0] == 1098){
	//	if(n_A_Weapon_ATKplus >= 5)
	//		n_tok[37] += 30;
	//	if(n_A_Weapon_ATKplus >= 7)
	//		n_tok[37] += 30;
	//}
	
	//if(n_A_Equip[0] == 1080 || n_A_Equip[0] == 1082 || n_A_Equip[0] == 1087 || n_A_Equip[0] == 1090 || n_A_Equip[0] == 1091){
	//	if(n_A_Weapon_ATKplus >= 5)
	//		n_tok[37] += 20;
	//	if(n_A_Weapon_ATKplus >= 7)
	//		n_tok[37] += 15;
	//}
	
	//if(n_A_Equip[0] == 1095 || n_A_Equip[0] == 1094){
	//	if(n_A_Weapon_ATKplus >= 5)
	//		n_tok[37] += 25;
	//	if(n_A_Weapon_ATKplus >= 7)
	//		n_tok[37] += 20;
	//}
	
	//if(n_A_Equip[0] == 1089 || n_A_Equip[0] == 1099 || n_A_Equip[0] == 1101 || n_A_Equip[0] == 1102){
	//	if(n_A_Weapon_ATKplus >= 5)
	//		n_tok[37] += 15;
	//	if(n_A_Weapon_ATKplus >= 7)
	//		n_tok[37] += 5;
	//}
	
	//if(n_A_Equip[0] == 1103){
	//	if(n_A_Weapon_ATKplus >= 5)
	//		n_tok[37] += 10;
	//	if(n_A_Weapon_ATKplus >= 7)
	//		n_tok[37] += 5;
	//}

	if(n_A_Weapon_ATKplus >= 6){
		if(n_A_Equip[0] == 1076 || n_A_Equip[0] == 1077 || n_A_Equip[0] == 1081 || n_A_Equip[0] == 1082 || n_A_Equip[0] == 1086 || (1088 <= n_A_Equip[0] && n_A_Equip[0] <= 1094) || n_A_Equip[0] == 1096 || n_A_Equip[0] == 1097 || (1099 <= n_A_Equip[0] && n_A_Equip[0] <= 1103)){
			if(n_A_Weapon_ATKplus == 6)
				n_tok[37] += 4;
			if(n_A_Weapon_ATKplus == 7)
				n_tok[37] += 9;
			if(n_A_Weapon_ATKplus == 8)
				n_tok[37] += 16;
			if(n_A_Weapon_ATKplus == 9)
				n_tok[37] += 25;
			if(n_A_Weapon_ATKplus >= 10)
				n_tok[37] += 36;
		}
		
		if(n_A_Equip[0] == 1080 || n_A_Equip[0] == 1087 || n_A_Equip[0] == 1098){
			if(n_A_Weapon_ATKplus == 6)
				n_tok[37] += 9;
			if(n_A_Weapon_ATKplus == 7)
				n_tok[37] += 16;
			if(n_A_Weapon_ATKplus == 8)
				n_tok[37] += 25;
			if(n_A_Weapon_ATKplus == 9)
				n_tok[37] += 36;
			if(n_A_Weapon_ATKplus >= 10)
				n_tok[37] += 49;
		}
		// repeat for left handed? :/
		
	}
	// customE

	
	// customS Ranged ATK
	
	// Sagittarius Crown
	if(n_A_HEAD_DEF_PLUS >= 9 && EquipNumSearch(cItemStart+26))
		n_tok[25] += 3;
	
	
	//customE
	
	if(EquipNumSearch(628) && n_A_Arrow == 4)
		n_tok[25] += 25;
	if(EquipNumSearch(626) && n_A_Arrow == 2)
		n_tok[25] += 25;
	if(EquipNumSearch(627) && n_A_Arrow == 5)
		n_tok[25] += 25;
	if(EquipNumSearch(629) && n_A_Arrow == 6)
		n_tok[25] += 25;
	if(EquipNumSearch(630) && n_A_Arrow == 10)
		n_tok[25] += 50;
	if(EquipNumSearch(1217))
		n_tok[25] += n_A_HEAD_DEF_PLUS;

	
	if(n_A_JOB==14 || n_A_JOB==28)
		n_tok[80] += 10 * CardNumSearch(479);
	if(EquipNumSearch(987) && (EquipNumSearch(616) || EquipNumSearch(617) || EquipNumSearch(618)))
		n_tok[80] += 4;
	
	// customS ATKPercent
	// Libra Diadem
	if(n_A_HEAD_DEF_PLUS >= 9 && EquipNumSearch(cItemStart+23))
		n_tok[80] += 3;  // is it really atk% or just flat atk?
	// Dress Hat [iRO]
	if(n_A_HEAD_DEF_PLUS >= 7 && EquipNumSearch(cItemStart+36))
		n_tok[80] += 1;
	// Red Wing Hat
	if(n_A_HEAD_DEF_PLUS >= 7 && EquipNumSearch(cItemStart+38)){
		n_tok[80] += 2;
		if(n_A_HEAD_DEF_PLUS >= 9)
			n_tok[80] += 2;
	}
	// Emperor Wreath
	if(n_A_HEAD_DEF_PLUS >= 7 && EquipNumSearch(cItemStart+45)){
		n_tok[80] += 3;
		if(n_A_HEAD_DEF_PLUS >= 9)
			n_tok[80] += 3;
	}
	// Evil Marching Hat
	if(n_A_HEAD_DEF_PLUS >= 9 && EquipNumSearch(cItemStart+65))
		n_tok[80] += 5;
	
	// customE
	
	// customS KVM WEAPONS
	if(n_A_Weapon_ATKplus >= 9 && EquipNumSearch(1101))
		n_tok[80] += n_A_Weapon_ATKplus;
	
	if(EquipNumSearch(1089)){
			n_tok[70] += (2 * n_A_Weapon_ATKplus);
	//if(EquipNumSearch(1091)){
	//	(n_A_Weapon_ATKplus >= 5)
	//		n_tok[70] += 10;
	//	(n_A_Weapon_ATKplus >= 7)
	//		n_tok[70] += 10;
	}

	if(EquipNumSearch(1083)){
		if(n_A_Weapon_ATKplus >= 6)
			n_tok[177] += 2 * (n_A_Weapon_ATKplus - 5);
//		if(n_A_Weapon_ATKplus >= 5)
//			n_tok[177] += 5;
//		if(n_A_Weapon_ATKplus >= 7)
//			n_tok[177] += 5;
//		if(n_A_Weapon_ATKplus >= 7){
//			if(n_A_Weapon_ATKplus <= 10){
//				n_tok[177] += 2 * (n_A_Weapon_ATKplus - 5);
//			}else{
//				n_tok[177] += 10;
//			}
//		}
	}
	// customE

	
	if(CardNumSearch(452) && n_A_JobSearch()==3){
		n_tok[51] += 30;
		n_tok[56] += 30;
	}
	if(n_A_PassSkill2[14] && n_A_JOB != 13 && n_A_JOB != 27)
		n_tok[56] += n_A_PassSkill2[14] * 5;
	if(SkillSearch(234))
		n_tok[59] += SkillSearch(234) *4;
	for(var i=971;i<=977;i++){
		if(EquipNumSearch(i)){
			n_tok[50] -= 200;
			n_tok[51] -= 200;
			n_tok[52] -= 200;
			n_tok[53] -= 200;
			n_tok[54] -= 200;
			n_tok[55] -= 200;
			n_tok[56] -= 200;
			n_tok[58] -= 200;
			n_tok[59] -= 200;
		}
	}
	/* jRO exclusive KVM armor changes
	if(n_A_SHOULDER_DEF_PLUS >= 7 && EquipNumSearch(1110))
		n_tok[57] += 3;
	if(n_A_SHOES_DEF_PLUS >= 7 && EquipNumSearch(1107))
		n_tok[57] += 3;
	if(n_A_BODY_DEF_PLUS >= 7 && EquipNumSearch(1104))
		n_tok[57] += 2;
	*/

	//customS RESISTANCE
	// Gemini Crown
	if(n_A_HEAD_DEF_PLUS >= 7 && EquipNumSearch(cItemStart+18))
		n_tok[64] += 5;
	// Gemini Diadem
	if(n_A_HEAD_DEF_PLUS >= 7 && EquipNumSearch(cItemStart+19))
		n_tok[64] += 5;
	// Taurus Crown
	if(n_A_HEAD_DEF_PLUS >= 7 && EquipNumSearch(cItemStart+30))
		n_tok[63] += 7;
	// Virgio Crown
	if(n_A_HEAD_DEF_PLUS >= 7 && EquipNumSearch(cItemStart+32))
		n_tok[62] += 5;
	// Wing of Darkness [fRO]
	if(n_A_HEAD_DEF_PLUS >= 8 && EquipNumSearch(cItemStart+51))
		n_tok[56] += 10;
	// Cat Ears Beret
	if(n_A_HEAD_DEF_PLUS >= 5 && EquipNumSearch(cItemStart+57))
		n_tok[57] += n_A_HEAD_DEF_PLUS;
	// Horn of Ancient [fRO]
	if(n_A_HEAD_DEF_PLUS >= 9 && EquipNumSearch(cItemStart+58))
		n_tok[77] += 10;
	
	
	//customE
	if(EquipNumSearch(737))
		n_tok[60] += n_A_SHOULDER_DEF_PLUS * 3;
	if(EquipNumSearch(957)){
		for(i=0;i<=9;i++)
			n_tok[60+i] += 30;
	}
	if(n_A_SHOULDER_DEF_PLUS >= 9 && CardNumSearch(403))
		n_tok[60] += 5;
	if(n_A_BaseLV <= 79 && EquipNumSearch(1251))
		n_tok[60] += 5;
	if(n_A_HEAD_DEF_PLUS >= 8 && EquipNumSearch(1244))
		n_tok[61] += 5;
	if(SkillSearch(150)){
		n_tok[60] += SkillSearch(150);
		n_tok[63] += 4 * SkillSearch(150);
	}
	if(SkillSearch(156))
		n_tok[66] += 5 * SkillSearch(156);
	if(n_A_PassSkill2[14] && n_A_JOB != 13 && n_A_JOB != 27)
		n_tok[66] += 5 * n_A_PassSkill2[14];
	if(n_A_PassSkill3[7]){
		for(i=61;i<=69;i++)
			n_tok[i] += 55 + 5 * n_A_PassSkill3[7];
		for(i=150;i<=159;i++)
			n_tok[i] += 10 * n_A_PassSkill3[7];
	}
	if(n_A_PassSkill7[11]){
		n_tok[61] += 20;
		n_tok[64] -= 15;
	}
	if(n_A_PassSkill7[12]){
		n_tok[62] += 20;
		n_tok[63] -= 15;
	}
	if(n_A_PassSkill7[13]){
		n_tok[63] += 20;
		n_tok[61] -= 15;
	}
	if(n_A_PassSkill7[14]){
		n_tok[64] += 20;
		n_tok[62] -= 15;
	}

	
	if(EquipNumSearch(624))
		n_tok[191] += n_A_Weapon_ATKplus;
	
	if(SkillSearch(421))
		n_tok[78] += 20;
	
	if(EquipNumSearch(1030)){
		n_tok[77] -= (5 * EquipNumSearch(1030));
		n_tok[79] -= (5 * EquipNumSearch(1030));
	}
	
	// customS KVM WEAPONS
	if(EquipNumSearch(1085)){
		if(n_A_Weapon_ATKplus >= 6){
				n_tok[91] += 5 + (2 * (n_A_Weapon_ATKplus - 5));
				n_tok[94] += 5 + (2 * (n_A_Weapon_ATKplus - 5));
		}
		if(n_A_Weapon_ATKplus >= 10){
			n_tok[91] += 10;
			n_tok[94] += 10;
		}
	//	if(n_A_Weapon_ATKplus >= 7){
	//		n_tok[91] += 5;
	//		n_tok[94] += 5;
	//	}
	//	if(n_A_Weapon_ATKplus >= 10){
	//		n_tok[91] += 10;
	//		n_tok[94] += 10;
	//	}
	//	if(n_A_Weapon_ATKplus >= 7){
	//		if(n_A_Weapon_ATKplus <= 10){
	//			n_tok[91] += 2 * (n_A_Weapon_ATKplus - 5);
	//			n_tok[94] += 2 * (n_A_Weapon_ATKplus - 5);
	//		}else{
	//			n_tok[91] += 10;
	//			n_tok[94] += 10;
	//		}
	//	}
	}
	// customE
	
	// customS Healing

	// Cancer Diadem
	if(n_A_HEAD_DEF_PLUS >= 7 && EquipNumSearch(cItemStart+15)){
		n_tok[91] += 3;
		n_tok[94] += 3;
	}
	// Capricorn Diadem
	if(n_A_HEAD_DEF_PLUS >= 9 && EquipNumSearch(cItemStart+17)){
		n_tok[91] += 4;
		n_tok[94] += 4;
	}
	// Dress Hat [iRO]
	if(n_A_HEAD_DEF_PLUS >= 7 && EquipNumSearch(cItemStart+36)){
		n_tok[91] += 1;
		n_tok[94] += 1;
	}
	
	// customE

	if(EquipNumSearch(1161))
		n_tok[91] += SkillSearch(23);


	if(EquipNumSearch(534)){
		wSPVS = n_A_JobSearch();
		if(wSPVS==1 || wSPVS==2 || wSPVS==6)
			n_tok[151] += 50;
		if(wSPVS==3 || wSPVS==4 || wSPVS==5)
			n_tok[156] += 50;
	}
	if(EquipNumSearch(828)){
		n_tok[151] += 2 * n_A_HEAD_DEF_PLUS;
		n_tok[152] += 2 * n_A_HEAD_DEF_PLUS;
		n_tok[159] += 2 * n_A_HEAD_DEF_PLUS;
	}
	if(CardNumSearch(176)){
		if(SU_AGI >= 90){
			n_tok[151] += 30 * CardNumSearch(176);
			n_tok[156] += 30 * CardNumSearch(176);
		}
		if(SU_VIT >= 80){
			n_tok[155] += 50 * CardNumSearch(176);
			n_tok[159] += 50 * CardNumSearch(176);
		}
	}
	if(n_A_PassSkill8[0] == 42 && EquipNumSearch(1218))
		n_tok[151] += 10;


	n_A_zokusei = new Array();
	for(i=0;i<=9;i++){
		n_A_zokusei[i] = zokusei[n_A_BodyZokusei * 10 +1][i] * 100;
		n_A_zokusei[i] = n_A_zokusei[i] - Math.floor(n_A_zokusei[i] * n_tok[60+i]) / 100;
	}



		// customS KVM WEAPONS
		if(n_A_Equip[1] == 1076 || n_A_Equip[1] == 1077){
			if(n_A_Weapon2_ATKplus >= 6)
				n_tok[307] += 5;
		//	if(n_A_Weapon2_ATKplus >= 7)
		//		n_tok[307] += 15;
		}

		
		if(n_A_Equip[0] == 1076 || n_A_Equip[0] == 1077 || n_A_Equip[0] == 1080 || n_A_Equip[0] == 1081 || n_A_Equip[0] == 1086 || (1088 <= n_A_Equip[0] && n_A_Equip[0] <= 1090) || n_A_Equip[0] == 1092 || n_A_Equip[0] == 1093 || (1097 <= n_A_Equip[0]  && n_A_Equip[0] <= 1103)){
			if(n_A_Weapon_ATKplus >= 6)
				n_tok[307] += 5;
		//	if(n_A_Weapon_ATKplus >= 7)
		//		n_tok[307] += 15;
		}
		
		if(n_A_Equip[0] == 1082 || n_A_Equip[0] == 1087 || n_A_Equip[0] == 1094 || n_A_Equip[0] == 1096){
			if(n_A_Weapon_ATKplus >= 6)
				n_tok[307] += 5;
		//	if(n_A_Weapon_ATKplus >= 7)
		//		n_tok[307] += 20;
		}
		// customE


	if(EquipNumSearch(645))
		n_tok[295] += 10 + n_A_Weapon_ATKplus;
	if(n_A_WeaponType==9)
		n_tok[295] += 2 * CardNumSearch(466);
	if(n_B[19]==1 && CardNumSearch(425))
		n_tok[297] += 30 * CardNumSearch(425);
	if(EquipNumSearch(936))
		n_tok[295] += (n_A_Weapon_ATKplus * 1);
	if(n_B[19]==1 && EquipNumSearch(1228)){
		if(n_A_HEAD_DEF_PLUS >= 6)
			n_tok[297] += (n_A_HEAD_DEF_PLUS - 5);
	}

	if(n_B[19] == 1)
		n_tok[295] += n_tok[297];

	// customS KVM WEAPONS
	if(EquipNumSearch(1084) || EquipNumSearch(1095)){
		if(n_A_Weapon_ATKplus >= 6)
			n_tok[317] += 5;
	//	if(n_A_Weapon_ATKplus >= 7)
	//		n_tok[317] += 20;
	}
	if(EquipNumSearch(1085)){
		if(n_A_Weapon_ATKplus >= 6)
			n_tok[317] += 5;
	}
	if(EquipNumSearch(1083)){
		if(n_A_Weapon_ATKplus >= 6)
			n_tok[317] += 5 + (2 * (n_A_Weapon_ATKplus - 5));
	//	if(n_A_Weapon_ATKplus >= 7)
	//		n_tok[317] += 15;
	}
	// customE


	
n_tok[70] += n_tok[320+n_B[2]];

	if(EquipNumSearch(535)){
		var wVM = n_A_JobSearch();
		if(wHPVS==1 || wHPVS==2 || wHPVS==6){
			n_tok[71] += 5;
			n_tok[71] += n_A_SHOULDER_DEF_PLUS * 2;
		}
	}

	ClickB_Enemy();
	KakutyouKansuu();
}}

function StPlusCalc()
{
	n_A_JobSet();	
	n_A_JobLV = eval(document.calcForm.A_JobLV.value);

	var w2 = [0,0,0,0,0,0];
	for(var i=0;JobBOBJ[n_A_JOB][i] <= n_A_JobLV && JobBOBJ[n_A_JOB][i] != "n";i+=2)
			w2[JobBOBJ[n_A_JOB][i+1]] += 1;
	if(n_A_JOB == 0 && n_Tensei){
		for(var i=0;JobBOBJ[34][i] <= n_A_JobLV && JobBOBJ[34][i] != "n";i+=2)
				w2[JobBOBJ[34][i+1]] += 1;
	}
	if(n_A_JobLV >= 70 && SkillSearch(309)){
		for(var i=0;i<6;i++)
			w2[i] += 10;
	}
	var wSPC_STR = w2[0];
	var wSPC_AGI = w2[1];
	var wSPC_VIT = w2[2];
	var wSPC_INT = w2[3];
	var wSPC_DEX = w2[4];
	var wSPC_LUK = w2[5];

	
	wSPCall = StPlusCalc2(7);
	wSPC_STR += StPlusCalc2(1) + wSPCall;
	wSPC_AGI += StPlusCalc2(2) + wSPCall;
	wSPC_VIT += StPlusCalc2(3) + wSPCall;
	wSPC_VIT += StPlusCalc2(213);
	wSPC_INT += StPlusCalc2(4) + wSPCall;
	wSPC_INT += StPlusCalc2(214);
	wSPC_DEX += StPlusCalc2(5) + wSPCall;
	wSPC_LUK += StPlusCalc2(6) + wSPCall;

	wSPC_DEX += SkillSearch(38);
	if(SkillSearch(68) || TimeItemNumSearch(17))
		wSPC_STR += 4;
	wSPC_STR += SkillSearch(146);
	wSPC_STR += SkillSearch(404);
	wSPC_INT += SkillSearch(404);
	if(SkillSearch(234))
		wSPC_INT += Math.round(SkillSearch(234) /2);
	if(SkillSearch(286)){
		if(SkillSearch(286)==5)wSPC_STR +=16;
		if(SkillSearch(286)==4)wSPC_STR +=8;
		if(SkillSearch(286)==3)wSPC_STR +=4;
		if(SkillSearch(286)==2)wSPC_STR +=2;
		if(SkillSearch(286)==1)wSPC_STR +=1;
	}
	
	var w = SkillSearch(42);
	if(w){
		w += 102;
		wSPC_DEX = Math.floor((n_A_DEX + wSPC_DEX) * w / 100) - n_A_DEX;
		wSPC_AGI = Math.floor((n_A_AGI + wSPC_AGI) * w / 100) - n_A_AGI;
	}else if(n_A_PassSkill6[3]){
		wSPC_DEX = Math.floor((n_A_DEX + wSPC_DEX) * (102 + n_A_PassSkill6[3]) / 100) - n_A_DEX;
		wSPC_AGI = Math.floor((n_A_AGI + wSPC_AGI) * (102 + n_A_PassSkill6[3]) / 100) - n_A_AGI;
	}else if(TimeItemNumSearch(31)){
		wSPC_DEX = Math.floor((n_A_DEX + wSPC_DEX) * 104 / 100) - n_A_DEX;
		wSPC_AGI = Math.floor((n_A_AGI + wSPC_AGI) * 104 / 100) - n_A_AGI;
	}else if(TimeItemNumSearch(4)){
		wSPC_DEX = Math.floor((n_A_DEX + wSPC_DEX) * 103 / 100) - n_A_DEX;
		wSPC_AGI = Math.floor((n_A_AGI + wSPC_AGI) * 103 / 100) - n_A_AGI;
	}
	if(SkillSearch(422)){

		wSPC_DEX += 4;
		wSPC_AGI += 4;
	}

	wSPC_AGI += StPlusCalc2(212);
	wSPC_DEX += StPlusCalc2(215);
	if(n_A_JobSearch()==41 && EquipNumSearch(672))
		wSPC_AGI += 1;
	if(n_A_JobSearch()==41 && EquipNumSearch(673))
		wSPC_INT += 1;
	if(n_A_JobSearch()==41 && EquipNumSearch(675))
		wSPC_LUK += 2;
	if(n_A_JobSearch()==41 && EquipNumSearch(676))
		wSPC_DEX += 2;
	if(n_A_JobSearch()==41 && EquipNumSearch(678))
		wSPC_LUK += 1;
	if(n_A_SHOES_DEF_PLUS >= 9 && EquipNumSearch(717))
		wSPC_AGI += 2;
	if(n_A_HEAD_DEF_PLUS >= 5 && EquipNumSearch(1069))
		wSPC_LUK += (n_A_HEAD_DEF_PLUS - 4);
	if(n_A_Weapon_ATKplus >= 6 && EquipNumSearch(1168))
		wSPC_INT += (n_A_Weapon_ATKplus - 5);
	if(EquipNumSearch(1171) && SkillSearch(234) == 5)
		wSPC_INT += 3;
	if(EquipNumSearch(1172))
		wSPC_INT += Math.floor(n_A_Weapon_ATKplus / 2);
	if(n_A_HEAD_DEF_PLUS >= 7 && EquipNumSearch(1273))
		wSPC_AGI += 2;
	// customS STATS
	
	// Sigrun's Wings
	if(EquipNumSearch(cItemStart+8)){
		wHPVS = n_A_JobSearch();
		//document.writeln("JobSearch(): "+wHPVS+", n_A_Job:"+n_A_JOB);
		if(wHPVS==1 || wHPVS==2 || wHPVS==6 || n_A_JOB==41 || n_A_JOB==42)
			wSPC_STR += 1;
		if(wHPVS==3 || wHPVS==5 || n_A_JOB==44 || n_A_JOB==43)
			wSPC_INT += 1;
		if(wHPVS==4 || n_A_JOB==45)
			wSPC_DEX += 1;
	}
	// Capricorn Diadem
	if(n_A_HEAD_DEF_PLUS >= 7 && EquipNumSearch(cItemStart+17))
		wSPC_INT += 2;
	// Pisces Diadem
	if(n_A_HEAD_DEF_PLUS >= 7 && EquipNumSearch(cItemStart+25))
		wSPC_INT += 3;
	// Sagittarius Crown
	if(n_A_HEAD_DEF_PLUS >= 8 && EquipNumSearch(cItemStart+26))
		wSPC_AGI += 2;
	// Scorpio Diadem
	if(n_A_HEAD_DEF_PLUS >= 7 && EquipNumSearch(cItemStart+29))
		wSPC_DEX += 1;
	// Taurus Diadem
	if(n_A_HEAD_DEF_PLUS >= 7 && EquipNumSearch(cItemStart+31))
		wSPC_VIT += 2;
	
	
	// customE
	
	// customS KVM WEAPONS

	if(n_A_Equip[0]==1078 || n_A_Equip[0]==1079){
		wSPC_INT += (n_A_Weapon_ATKplus -5);
		if(n_A_Equip[0]==1078)
			if(n_A_Weapon_ATKplus >= 9)
				wSPC_INT += 5;
		if(n_A_Equip[0]==1079)
			if(n_A_Weapon_ATKplus >= 10)
				wSPC_INT += 5;
	}

	
	if(n_A_Equip[1]==1078 || n_A_Equip[1]==1079){
		wSPC_INT += (n_A_Weapon2_ATKplus -5);
		if(n_A_Equip[1]==1078)
			if(n_A_Weapon2_ATKplus >= 9)
				wSPC_INT += 5;
		if(n_A_Equip[1]==1079)
			if(n_A_Weapon2_ATKplus >= 10)
				wSPC_INT += 3;
	}
	
	// customE
	
	if(EquipNumSearch(649))
		wSPC_DEX -= SU_DEX;

	if(n_A_WeaponType==9)
		wSPC_INT += CardNumSearch(466);

	wSPCall = StPlusCard(7);
	wSPC_STR += StPlusCard(1) + wSPCall;
	wSPC_AGI += StPlusCard(2) + wSPCall;
	wSPC_VIT += StPlusCard(3) + wSPCall;
	wSPC_INT += StPlusCard(4) + wSPCall;
	wSPC_DEX += StPlusCard(5) + wSPCall;
	wSPC_LUK += StPlusCard(6) + wSPCall;

	
	if(n_A_JobSearch()==3)
		wSPC_INT += CardNumSearch(383);
	if(CardNumSearch(173))wSPC_INT += n_A_LEFT_DEF_PLUS;
	if(CardNumSearch(402))wSPC_LUK += n_A_SHOULDER_DEF_PLUS;
	if(CardNumSearch(406))wSPC_AGI += n_A_SHOES_DEF_PLUS;
	if(CardNumSearch(198))wSPC_VIT += n_A_BODY_DEF_PLUS;
	if(n_A_card[8] == 180)wSPC_STR += n_A_HEAD_DEF_PLUS;

	if(CardNumSearch(185))wSPC_VIT += Math.floor(SU_DEX /18);
	if(CardNumSearch(187))wSPC_STR += Math.floor(SU_INT /18);
	if(CardNumSearch(189))wSPC_LUK += Math.floor(SU_AGI /18);
	if(CardNumSearch(191))wSPC_AGI += Math.floor(SU_LUK /18);
	if(CardNumSearch(196))wSPC_INT += Math.floor(SU_STR /18);
	if(CardNumSearch(197))wSPC_DEX += Math.floor(SU_VIT /18);

	
	if(CardNumSearch(405)){
		if(n_A_JobSearch()==1 || n_A_JobSearch()==2 || n_A_JobSearch()==6)
			wSPC_STR += 2;
		if(n_A_JobSearch()==3 || n_A_JobSearch()==4 || n_A_JobSearch()==5)
			wSPC_INT += 2;
	}
	
	wSPC_STR += n_A_PassSkill2[0];
	wSPC_INT += n_A_PassSkill2[0];
	wSPC_DEX += n_A_PassSkill2[0];
	if(n_A_PassSkill2[1] > 0 && n_A_IJYOU[0] == 0 && n_A_IJYOU[1] == 0)
		wSPC_AGI += n_A_PassSkill2[1] +2;
	wSPC_LUK += (n_A_PassSkill2[3] * 30);
	if(n_A_JOB == 24 && SkillSearch(270))
	{
		wSPC_STR += 5;
		wSPC_AGI += 5;
		wSPC_VIT += 5;
		wSPC_DEX += 5;
		wSPC_INT += 5;
		wSPC_LUK += 5;
	}

	
	if(SkillSearch(379) && n_A_WeaponType==0)
		wSPC_STR += 10;

	
	if(n_A_PassSkill3[40]){
		wSPC_STR += 5;
		wSPC_DEX += 5;
		wSPC_INT += 5;
	}
	wSPC_STR += n_A_PassSkill3[41];
	wSPC_VIT += n_A_PassSkill3[42];
	wSPC_AGI += n_A_PassSkill3[43];
	wSPC_DEX += n_A_PassSkill3[44];

	if(n_A_PassSkill5[0]){
		wSPC_STR += 20;
		wSPC_AGI += 20;
		wSPC_VIT += 20;
		wSPC_DEX += 20;
		wSPC_INT += 20;
		wSPC_LUK += 20;
	}

	if(n_A_PassSkill6[2] == 1){
		wSPC_STR += 3;
		wSPC_AGI += 3;
		wSPC_VIT += 3;
		wSPC_DEX += 3;
		wSPC_INT += 3;
		wSPC_LUK += 3;
	}
	if(n_A_PassSkill6[2] == 2){
		wSPC_STR += 5;
		wSPC_AGI += 5;
		wSPC_VIT += 5;
		wSPC_DEX += 5;
		wSPC_INT += 5;
		wSPC_LUK += 5;
	}
	if(n_A_PassSkill8[4]){
		wSPC_STR += 1;
		wSPC_AGI += 1;
		wSPC_VIT += 1;
		wSPC_DEX += 1;
		wSPC_INT += 1;
		wSPC_LUK += 1;
	}
	if(SkillSearch(310)){
		wSPC_STR -= 1;
		wSPC_AGI -= 1;
		wSPC_VIT -= 1;
		wSPC_DEX -= 1;
		wSPC_INT -= 1;
		wSPC_LUK -= 1;
	}

	
	if(n_A_PassSkill7[3])
		wSPC_STR += n_A_PassSkill7[3];
	if(n_A_PassSkill7[4])
		wSPC_AGI += n_A_PassSkill7[4];
	if(n_A_PassSkill7[5])
		wSPC_VIT += n_A_PassSkill7[5];
	if(n_A_PassSkill7[6])
		wSPC_INT += n_A_PassSkill7[6];
	if(n_A_PassSkill7[7])
		wSPC_DEX += n_A_PassSkill7[7];
	if(n_A_PassSkill7[8])
		wSPC_LUK += n_A_PassSkill7[8];

	var wHSE = eval(document.calcForm.A_HSE.value);
	if(wHSE){
		var w = wHSE % 10;
		if(1 <= wHSE && wHSE <= 9)
			wSPC_STR += w;
		if(11 <= wHSE && wHSE <= 19)
			wSPC_AGI += w;
		if(21 <= wHSE && wHSE <= 29)
			wSPC_VIT += w;
		if(31 <= wHSE && wHSE <= 39)
			wSPC_INT += w;
		if(41 <= wHSE && wHSE <= 49)
			wSPC_DEX += w;
		if(51 <= wHSE && wHSE <= 59)
			wSPC_LUK += w;
	}
	var wHSE2 = eval(document.calcForm.A_HSE_HEAD1.value);
	if(wHSE2){
		var w = wHSE2 % 10;
		if(1 <= wHSE2 && wHSE2 <= 9)
			wSPC_STR += w;
		if(11 <= wHSE2 && wHSE2 <= 19)
			wSPC_AGI += w;
		if(21 <= wHSE2 && wHSE2 <= 29)
			wSPC_VIT += w;
		if(31 <= wHSE2 && wHSE2 <= 39)
			wSPC_INT += w;
		if(41 <= wHSE2 && wHSE2 <= 49)
			wSPC_DEX += w;
		if(51 <= wHSE2 && wHSE2 <= 59)
			wSPC_LUK += w;
	}
	if(Math.floor(wHSE / 10) == Math.floor(wHSE2 / 10)){
		var w1 = wHSE % 10;
		var w2 = wHSE2 % 10;
		if(w1 > w2)
			w1 = w2;
		if(1 <= wHSE && wHSE <= 9)
			wSPC_STR -= w1;
		if(11 <= wHSE && wHSE <= 19)
			wSPC_AGI -= w1;
		if(21 <= wHSE && wHSE <= 29)
			wSPC_VIT -= w1;
		if(31 <= wHSE && wHSE <= 39)
			wSPC_INT -= w1;
		if(41 <= wHSE && wHSE <= 49)
			wSPC_DEX -= w1;
		if(51 <= wHSE && wHSE <= 59)
			wSPC_LUK -= w1;
	}
	if(n_A_PassSkill8[17]){
		 if(n_Tensei && 1<= n_A_JOB && n_A_JOB <= 6 && n_A_BaseLV < 70){
			if(n_A_STR + wSPC_STR <= 50)
					wSPC_STR = 50 - n_A_STR;
			if(n_A_AGI + wSPC_AGI <= 50)
					wSPC_AGI = 50 - n_A_AGI;
			if(n_A_VIT + wSPC_VIT <= 50)
					wSPC_VIT = 50 - n_A_VIT;
			if(n_A_INT + wSPC_INT <= 50)
					wSPC_INT = 50 - n_A_INT;
			if(n_A_DEX + wSPC_DEX <= 50)
					wSPC_DEX = 50 - n_A_DEX;
			if(n_A_LUK + wSPC_LUK <= 50)
					wSPC_LUK = 50 - n_A_LUK;
		}
	}

	if(n_A_PassSkill3[11] && n_A_PassSkill3[18]==0){
		if(n_A_STR + wSPC_STR < 99){
			if(n_A_STR + wSPC_STR + Math.floor(n_A_PassSkill3[12] /2) < 99)
				wSPC_STR += Math.floor(n_A_PassSkill3[12] /2);
			else
				wSPC_STR = (99 - n_A_STR);
		}
		if(n_A_AGI + wSPC_AGI < 99){
			if(n_A_AGI + wSPC_AGI + Math.floor(n_A_PassSkill3[13] /2) < 99)
				wSPC_AGI += Math.floor(n_A_PassSkill3[13] /2);
			else
				wSPC_AGI = (99 - n_A_AGI);
		}
		if(n_A_VIT + wSPC_VIT < 99){
			if(n_A_VIT + wSPC_VIT + Math.floor(n_A_PassSkill3[14] /2) < 99)
				wSPC_VIT += Math.floor(n_A_PassSkill3[14] /2);
			else
				wSPC_VIT = (99 - n_A_VIT);
		}
		if(n_A_INT + wSPC_INT < 99){
			if(n_A_INT + wSPC_INT + Math.floor(n_A_PassSkill3[15] /2) < 99)
				wSPC_INT += Math.floor(n_A_PassSkill3[15] /2);
			else
				wSPC_INT = (99 - n_A_INT);
		}
		if(n_A_DEX + wSPC_DEX < 99){
			if(n_A_DEX + wSPC_DEX + Math.floor(n_A_PassSkill3[16] /2) < 99)
				wSPC_DEX += Math.floor(n_A_PassSkill3[16] /2);
			else
				wSPC_DEX = (99 - n_A_DEX);
		}
		if(n_A_LUK + wSPC_LUK < 99){
			if(n_A_LUK + wSPC_LUK + Math.floor(n_A_PassSkill3[17] /2) < 99)
				wSPC_LUK += Math.floor(n_A_PassSkill3[17] /2);
			else
				wSPC_LUK = (99 - n_A_LUK);
		}
	}else if(n_A_PassSkill3[11] && n_A_PassSkill3[18]){
		wSPC_STR += n_A_PassSkill3[12];
		wSPC_AGI += n_A_PassSkill3[13];
		wSPC_VIT += n_A_PassSkill3[14];
		wSPC_INT += n_A_PassSkill3[15];
		wSPC_DEX += n_A_PassSkill3[16];
		wSPC_LUK += n_A_PassSkill3[17];
	}

	//CUSTOM (1st Transcendent Spirit)
	if(SkillSearch(392) && (n_Tensei == 1) && (n_A_BaseLV > 10) && (n_A_BaseLV < 70)){
		var linkboni = n_A_BaseLV - 10;
		if(wSPC_STR > 50);
		else if((wSPC_STR + linkboni) > 50)
			wSPC_STR = 50;
		else
			wSPC_STR += linkboni;
		if(wSPC_AGI > 50);
		else if((wSPC_AGI + linkboni) > 50)
			wSPC_AGI = 50;
		else
			wSPC_AGI += linkboni;
		if(wSPC_VIT > 50);
		else if((wSPC_VIT + linkboni) > 50)
			wSPC_VIT = 50;
		else
			wSPC_VIT += linkboni;
		if(wSPC_INT > 50);
		else if((wSPC_INT + linkboni) > 50)
			wSPC_INT = 50;
		else
			wSPC_INT += linkboni;
		if(wSPC_DEX > 50);
		else if((wSPC_DEX + linkboni) > 50)
			wSPC_DEX = 50;
		else
			wSPC_DEX += linkboni;
		if(wSPC_LUK > 50);
		else if((wSPC_LUK + linkboni) > 50)
			wSPC_LUK = 50;
		else
			wSPC_LUK += linkboni;
	}
	//END CUSTOM

	if(n_A_IJYOU[0]){
		var w1 = Math.floor((n_A_AGI + wSPC_AGI) / 2);
		var w2;
		if(Taijin)
			w2 = 5 * n_A_IJYOU[0];
		else
			w2 = 10 * n_A_IJYOU[0];
		if(w1 > w2)
			wSPC_AGI -= w2;
		else
			wSPC_AGI -= w1;
		w1 = Math.floor((n_A_DEX + wSPC_DEX) / 2);
		if(w1 > w2)
			wSPC_DEX -= w2;
		else
			wSPC_DEX -= w1;
	}
	if(n_A_IJYOU[1])
		wSPC_AGI -= (n_A_IJYOU[1] + 2);
	if(n_A_IJYOU[3])
		wSPC_LUK = -1 * n_A_LUK;

	n_A_STR += wSPC_STR;
	n_A_AGI += wSPC_AGI;
	n_A_VIT += wSPC_VIT;
	n_A_INT += wSPC_INT;
	n_A_DEX += wSPC_DEX;
	n_A_LUK += wSPC_LUK;

	if(wSPC_STR >= 0)
		myInnerHtml("A_STRp","+"+wSPC_STR,0);
	else
		myInnerHtml("A_STRp",wSPC_STR,0);
	if(wSPC_AGI >= 0)
		myInnerHtml("A_AGIp","+"+wSPC_AGI,0);
	else
		myInnerHtml("A_AGIp",wSPC_AGI,0);
	if(wSPC_VIT >= 0)
		myInnerHtml("A_VITp","+"+wSPC_VIT,0);
	else
		myInnerHtml("A_VITp",wSPC_VIT,0);
	if(wSPC_INT >= 0)
		myInnerHtml("A_INTp","+"+wSPC_INT,0);
	else
		myInnerHtml("A_INTp",wSPC_INT,0);
	if(wSPC_DEX >= 0)
		myInnerHtml("A_DEXp","+"+wSPC_DEX,0);
	else
		myInnerHtml("A_DEXp",wSPC_DEX,0);
	if(wSPC_LUK >= 0)
		myInnerHtml("A_LUKp","+"+wSPC_LUK,0);
	else
		myInnerHtml("A_LUKp",wSPC_LUK,0);
}

function StPlusCalc2(nSTP2)
{
	var w=0;
	for(var i=0;i<=20;i++)
	{
		for(var j=0;ItemOBJ[n_A_Equip[i]][j +11] != 0;j += 2)
		{
			if(nSTP2 == ItemOBJ[n_A_Equip[i]][j +11])
				w += ItemOBJ[n_A_Equip[i]][j +12];
		}
	}
	return w;
}

function StPlusCard(nSTP2)
{
	var w=0;
	for(var i=0;i<=25;i++)
	{
		for(var j=0;cardOBJ[n_A_card[i]][j +4] != 0;j += 2)
		{
			if(nSTP2 == cardOBJ[n_A_card[i]][j +4])
				w += cardOBJ[n_A_card[i]][j +5];
		}
	}

	
	for(var j=0;PET_OBJ[n_A_PassSkill8[0]][j +3] != 0;j += 2)
	{
		if(nSTP2 == PET_OBJ[n_A_PassSkill8[0]][j +3])
			w += PET_OBJ[n_A_PassSkill8[0]][j +4];
	}

	
	var w_num = [0,0,0,0];
	for(i=0;i<=3;i++)
		w_num[i] = n_A_PassSkill8[8+i];
	for(i=0;i<=2;i++)
		for(j=i+1;j<=3;j++)
			if(w_num[i] == w_num[j])
				w_num[j] = 0;
	for(i=0;i<=3;i++)
	{
		for(var j=0;ITEM_SP_TIME_OBJ[w_num[i]][5 + j] != 0;j += 2)
		{
			if(nSTP2 == ITEM_SP_TIME_OBJ[w_num[i]][5 + j])
				w += ITEM_SP_TIME_OBJ[w_num[i]][6 + j];
		}
	}

	return w;
}

function sort(work)
{
	for(var i=1;work[i]!="EOF";i++){
		for(var k=i;k>0;k--){
			if(ItemOBJ[work[k-1]][8] > ItemOBJ[work[k]][8]){
				var work_backup = work[k-1];
				work[k-1] = work[k];
				work[k] = work_backup;
			}
		}
	}
	return work;
}

function WeaponSet()
{
	n_A_JobSet();
	n_A_WeaponType = eval(document.calcForm.A_WeaponType.value);
	var len = document.calcForm.A_weapon1.length;
	for(var i=0;i<len;i++)
		document.calcForm.A_weapon1.options[0] = null;

	work = new Array();
	j = 0;
	for (i=0;i<=ItemMax; i++)	{
		if(ItemOBJ[i][1] == n_A_WeaponType && JobEquipItemSearch(ItemOBJ[i][2]) == 1){
			work[j] = i;
			j++;
		}else if(ItemOBJ[i][4] == 4 && ItemOBJ[i][1] == n_A_WeaponType && SuperNoviceFullWeaponCHECK){
			work[j] = i;
			j++;
		}
	}
	work[j] = "EOF";

	
	work = sort(work);
	for (i=0;i<j; i++)
		document.calcForm.A_weapon1.options[i] = new Option(ItemOBJ[work[i]][8],ItemOBJ[work[i]][0]);

}

function WeaponSetLeft()
{
	n_A_JobSet();
	n_A_Weapon2Type = eval(document.calcForm.A_Weapon2Type.value);
	var len = document.calcForm.A_weapon2.length;
	for(var i=0;i<len;i++)
		document.calcForm.A_weapon2.options[0] = null;
	work = new Array();
	j = 0;
	for (i=0;i<=ItemMax; i++){
		if(ItemOBJ[i][1] == n_A_Weapon2Type && JobEquipItemSearch(ItemOBJ[i][2]) == 1)
		{
			work[j] = i;
			j++;
		}
	}
	work[j] = "EOF";
	work = sort(work);
	for (i=0;i<j; i++)
		document.calcForm.A_weapon2.options[i] = new Option(ItemOBJ[work[i]][8],ItemOBJ[work[i]][0]);
}

function WeaponSet2(){
with(document.calcForm){
	n_A_JobSet();
	var len = A_head1.length;
	for(var i=0;i<len;i++)
		A_head1.options[0] = null;
	var len = A_head2.length;
	for(i=0;i<len;i++)
		A_head2.options[0] = null;
	var len = A_head3.length;
	for(i=0;i<len;i++)
		A_head3.options[0] = null;
	var len = A_left.length;
	for(i=0;i<len;i++)
		A_left.options[0] = null;
	var len = A_body.length;
	for(i=0;i<len;i++)
		A_body.options[0] = null;
	var len = A_shoulder.length;
	for(i=0;i<len;i++)
		A_shoulder.options[0] = null;
	var len = A_shoes.length;
	for(i=0;i<len;i++)
		A_shoes.options[0] = null;
	var len = A_acces1.length;
	for(i=0;i<len;i++){
		A_acces1.options[0] = null;
		A_acces2.options[0] = null;
	}
	if(first_check == 0){
		first_check = 1;
		A_head1.options[0] = new Option(ItemOBJ[142][8],ItemOBJ[142][0]);
		A_head2.options[0] = new Option(ItemOBJ[243][8],ItemOBJ[243][0]);
		A_head3.options[0] = new Option(ItemOBJ[268][8],ItemOBJ[268][0]);
		A_left.options[0] = new Option(ItemOBJ[305][8],ItemOBJ[305][0]);
		A_body.options[0] = new Option(ItemOBJ[279][8],ItemOBJ[279][0]);
		A_shoulder.options[0] = new Option(ItemOBJ[311][8],ItemOBJ[311][0]);
		A_shoes.options[0] = new Option(ItemOBJ[317][8],ItemOBJ[317][0]);
		A_acces1.options[0] = new Option(ItemOBJ[326][8],ItemOBJ[326][0]);
		A_acces2.options[0] = new Option(ItemOBJ[326][8],ItemOBJ[326][0]);
		return;
	}
	first_check = 2;

	var workB = new Array();
	for(i=0;i<=7;i++)
		workB[i] = new Array();
	var wsj = new Array();
	for(i=0;i<=7;i++)
		wsj[i]=0;
	for(i=0;i<=ItemMax; i++){
		if(ItemOBJ[i][1] == 50 && (JobEquipItemSearch(ItemOBJ[i][2]) == 1 || SuperNoviceFullWeaponCHECK)){
			workB[0][wsj[0]] = i;
			wsj[0]++;
		}
		else if(ItemOBJ[i][1] == 51 && (JobEquipItemSearch(ItemOBJ[i][2]) == 1 || SuperNoviceFullWeaponCHECK)){
			workB[1][wsj[1]] = i;
			wsj[1]++;
		}
		else if(ItemOBJ[i][1] == 52 && (JobEquipItemSearch(ItemOBJ[i][2]) == 1 || SuperNoviceFullWeaponCHECK)){
			workB[2][wsj[2]] = i;
			wsj[2]++;
		}
		else if(ItemOBJ[i][1] == 61 && JobEquipItemSearch(ItemOBJ[i][2]) == 1){
			workB[3][wsj[3]] = i;
			wsj[3]++;
		}
		else if(ItemOBJ[i][1] == 60 && JobEquipItemSearch(ItemOBJ[i][2]) == 1){
			workB[4][wsj[4]] = i;
			wsj[4]++;
		}
		else if(ItemOBJ[i][1] == 62 && JobEquipItemSearch(ItemOBJ[i][2]) == 1){
			workB[5][wsj[5]] = i;
			wsj[5]++;
		}
		else if(ItemOBJ[i][1] == 63 && JobEquipItemSearch(ItemOBJ[i][2]) == 1){
			workB[6][wsj[6]] = i;
			wsj[6]++;
		}
		else if(ItemOBJ[i][1] == 64 && JobEquipItemSearch(ItemOBJ[i][2]) == 1){
			workB[7][wsj[7]] = i;
			wsj[7]++;
		}
	}
	for(i=0;i<=7;i++)
		workB[i][wsj[i]] = "EOF";

	for(var m=0;m<=7;m++)
		workB[m] = sort(workB[m]);

	var z = 0;
	for(i=0;i<wsj[0];i++){
		z = workB[0][i];
		A_head1.options[i] = new Option(ItemOBJ[z][8],ItemOBJ[z][0]);
	}
	for(i=0;i<wsj[1];i++){
		z = workB[1][i];
		A_head2.options[i] = new Option(ItemOBJ[z][8],ItemOBJ[z][0]);
	}
	for(i=0;i<wsj[2];i++){
		z = workB[2][i];
		A_head3.options[i] = new Option(ItemOBJ[z][8],ItemOBJ[z][0]);
	}
	for(i=0;i<wsj[3];i++){
		z = workB[3][i];
		A_left.options[i] = new Option(ItemOBJ[z][8],ItemOBJ[z][0]);
	}
	for(i=0;i<wsj[4];i++){
		z = workB[4][i];
		A_body.options[i] = new Option(ItemOBJ[z][8],ItemOBJ[z][0]);
	}
	for(i=0;i<wsj[5];i++){
		z = workB[5][i];
		A_shoulder.options[i] = new Option(ItemOBJ[z][8],ItemOBJ[z][0]);
	}
	for(i=0;i<wsj[6];i++){
		z = workB[6][i];
		A_shoes.options[i] = new Option(ItemOBJ[z][8],ItemOBJ[z][0]);
	}
	for(i=0;i<wsj[7];i++){
		z = workB[7][i];
		A_acces1.options[i] = new Option(ItemOBJ[z][8],ItemOBJ[z][0]);
		A_acces2.options[i] = new Option(ItemOBJ[z][8],ItemOBJ[z][0]);
	}
}}

function FirstNovis(){
	if(first_check == 1){
		first_check = 2;
		WeaponSet2();
	}
}


function JobEquipItemSearch(nJEIS)
{
	if(nJEIS >= 1000){
		if(n_Tensei == 1)
			nJEIS -= 1000;
		else
			return 0;
	}
	for(var j=0;JobEquipItemOBJ[n_A_JOB][j] != 999;j++)
	{
		if(JobEquipItemOBJ[n_A_JOB][j] == nJEIS)
			return 1;
	}
	return 0;
}

function n_A_JobSet()
{
	n_A_JOB = eval(document.calcForm.A_JOB.value);
	if(21 <= n_A_JOB && n_A_JOB <= 40){
		n_Tensei = 1;
		if(34 <= n_A_JOB && n_A_JOB <= 40)
			n_A_JOB -= 34;
	}else
		n_Tensei = 0;
}

function n_A_JobSearch(){
	if(n_A_JOB <= 6)
		return n_A_JOB;
	if(n_A_JOB == 20)
		return 0;
	if(n_A_JOB == 7 || n_A_JOB == 13 || n_A_JOB == 21 || n_A_JOB == 27)
		return 1;
	if(n_A_JOB == 8 || n_A_JOB == 14 || n_A_JOB == 22 || n_A_JOB == 28)
		return 2;
	if(n_A_JOB == 9 || n_A_JOB == 15 || n_A_JOB == 23 || n_A_JOB == 29)
		return 3;
	if(n_A_JOB == 10 || n_A_JOB == 16 || n_A_JOB == 17 || n_A_JOB == 24 || n_A_JOB == 30 || n_A_JOB == 31)
		return 4;
	if(n_A_JOB == 11 || n_A_JOB == 18 || n_A_JOB == 25 || n_A_JOB == 32)
		return 5;
	if(n_A_JOB == 12 || n_A_JOB == 19 || n_A_JOB == 26 || n_A_JOB == 33)
		return 6;
	if(n_A_JOB == 41 || n_A_JOB == 42 || n_A_JOB == 43)
		return 41;
	return 7;
}

function n_A_JobSearch2()
{
	if(n_A_JOB == 7 || n_A_JOB == 21)
		return 7;
	if(n_A_JOB == 8 || n_A_JOB == 22)
		return 8;
	if(n_A_JOB == 9 || n_A_JOB == 23)
		return 9;
	if(n_A_JOB == 10 || n_A_JOB == 24)
		return 10;
	if(n_A_JOB == 11 || n_A_JOB == 25)
		return 11;
	if(n_A_JOB == 12 || n_A_JOB == 26)
		return 12;
	if(n_A_JOB == 13 || n_A_JOB == 27)
		return 13;
	if(n_A_JOB == 14 || n_A_JOB == 28)
		return 14;
	if(n_A_JOB == 15 || n_A_JOB == 29)
		return 15;
	if(n_A_JOB == 16 || n_A_JOB == 30)
		return 16;
	if(n_A_JOB == 17 || n_A_JOB == 31)
		return 16;
	if(n_A_JOB == 18 || n_A_JOB == 32)
		return 18;
	if(n_A_JOB == 19 || n_A_JOB == 33)
		return 19;
	return 0;
}

function EquipNumSearch(nENS)
{
	var wENS=0;
	for(var ENSi=0;ENSi<=20;ENSi++)
	{
		if(nENS == n_A_Equip[ENSi])
			wENS += 1;
	}
	return wENS;
}

function CardNumSearch(nCNS)
{
	var wCNS=0;
	for(var CNSi=0;CNSi<=25;CNSi++)
	{
		if(nCNS == n_A_card[CNSi])
			wCNS += 1;
	}
	return wCNS;
}


function TimeItemNumSearch(n)
{
	var w=0;
	for(var i=0;i<=3;i++)
	{
		if(n == n_A_PassSkill8[8+i])
			w += 1;
	}
	return w;
}


function NumSearch(NS1,NS2){
	var end = NS2.length-1;
	for(var i=0;i<=end;i++){
		if(NS1 == NS2[i])
			return 1;
	}
	return 0;
}

w_ASSP0bk=new Array();
for(i=0;i<20;i++)
	w_ASSP0bk[i]=999;
function ActiveSkillSetPlus()
{
	w_ASSP0=new Array();
	w_ASSP9=new Array();
	for(i=0;i<20;i++){
		w_ASSP0[i]=999;
		w_ASSP9[i]=0;
	}

	j=0;
	for(i=0;i<=20;i++){
		for(j2=0;ItemOBJ[n_A_Equip[i]][11+j2] != 0;j2 += 2){
			if(ItemOBJ[n_A_Equip[i]][11+j2] == 220){
				if(InsertSkill[ItemOBJ[n_A_Equip[i]][12+j2]][1] == 1){
					w_ASSP0[j] = InsertSkill[ItemOBJ[n_A_Equip[i]][12+j2]][2];
					w_ASSP9[j] = InsertSkill[ItemOBJ[n_A_Equip[i]][12+j2]][0] + 3000;
					j++;
				}
			}else if(ItemOBJ[n_A_Equip[i]][11+j2] == 221){
				if(AutoSpellSkill[ItemOBJ[n_A_Equip[i]][12+j2]][1] == 1){
					w_ASSP0[j] = AutoSpellSkill[ItemOBJ[n_A_Equip[i]][12+j2]][2];
					w_ASSP9[j] = AutoSpellSkill[ItemOBJ[n_A_Equip[i]][12+j2]][0] + 2000;
					j++;
				}
			}
		}
	}

	for(i=0;i<=25;i++){
		for(j2=0;cardOBJ[n_A_card[i]][4+j2] != 0;j2 += 2){
			if(cardOBJ[n_A_card[i]][4+j2] == 220){
				if(InsertSkill[cardOBJ[n_A_card[i]][5+j2]][1] == 1){
					w_ASSP0[j] = InsertSkill[cardOBJ[n_A_card[i]][5+j2]][2];
					w_ASSP9[j] = cardOBJ[n_A_card[i]][5+j2] + 3000;
					j++;
				}
			}else if(cardOBJ[n_A_card[i]][4+j2] == 221){
				if(AutoSpellSkill[cardOBJ[n_A_card[i]][5+j2]][1] == 1){
					w_ASSP0[j] = AutoSpellSkill[cardOBJ[n_A_card[i]][5+j2]][2];
					w_ASSP9[j] = cardOBJ[n_A_card[i]][5+j2] + 2000;
					j++;
				}
			}
		}
	}
	if(CardNumSearch(164) && (n_A_JOB == 9 || n_A_JOB == 23)){
		w_ASSP0[j] = 162;
		w_ASSP9[j] = 2095;
		j++;
	}
	if(CardNumSearch(277) && n_A_JobSearch()==1){
		w_ASSP0[j] = 76;
		w_ASSP9[j] = 2096;
		j++;
	}
	// customS KVM WEAPONS
	if(EquipNumSearch(1096) && n_A_JobSearch2() != 9){
		w_ASSP0[j] = 193;
		w_ASSP9[j] = 2108;
		j++;
	}
	// customE
	if(n_A_PassSkill7[15]){
		var wSC = [33,34,35,36,13,37,38,39,7];
		for(var i=0;i<=8;i++){
			w_ASSP0[j] = InsertSkill[wSC[i]][2];
			w_ASSP9[j] = wSC[i] + 3000;
			j++;
		}
		w_ASSP0[j] = InsertSkill[40][2];

		w_ASSP9[j] = 3040;
		j++;
	}

	w_ASSPch=0;
	for(i=0;i<20;i++){
		if(w_ASSP0bk[i] != w_ASSP0[i])
			w_ASSPch = 1
	}
	if(w_ASSPch){
		
		for(k=0;JobSkillActiveOBJ[n_A_JOB][k]!=999;k++);
		for(i=k+20;i>=k;i--)
			document.calcForm.A_ActiveSkill.options[i] = null;
		j=0;
		for(i=k;w_ASSP0[j] != 999;i++,j++){
			if(w_ASSP9[j] >= 3000)
				document.calcForm.A_ActiveSkill.options[i] = new Option(SkillOBJ[w_ASSP0[j]][2],w_ASSP9[j]);
			else
				document.calcForm.A_ActiveSkill.options[i] = new Option(SkillOBJ[w_ASSP0[j]][2]+"(Temp As)",w_ASSP9[j]);
		}
	}
	for(i=0;i<20;i++)
		w_ASSP0bk[i] = w_ASSP0[i];

	if(eval(document.calcForm.A_ActiveSkill.value) == 0)
		document.calcForm.A_ActiveSkillLV.style.visibility = "hidden";
}

function KakutyouKansuu(){
	wKK = eval(document.calcForm.A_Kakutyou.value);
	if(wKK == 0){
		myInnerHtml("A_KakutyouData","",0);
		return;
	}
	Heal = new Array();
	if(wKK == 1){
		for(i=0;i<=10;i++)
			Heal[i] = HealCalc(i,1);
		if(n_A_JOB==3||n_A_JOB==9||n_A_JOB==13||n_A_JOB==14||n_A_JOB==15||n_A_JOB==20||n_A_JOB==23||n_A_JOB==27||n_A_JOB==28||n_A_JOB==29){
			w = "";
			for(i=1;i<=9;i++)
				w += "Lv"+i +" "+ Heal[i] +"<br>";
			w += "Lv10 "+ Heal[10] +"<br>";
		}
		else{
			w = "<table border=0>";
			w += "<tr><td>Heal Lv1 (Vitata Card) </td><td> "+ Heal[1] +"</td></tr>";
			w += "<tr><td>Heal Lv2</td><td>"+ Heal[2] +"</td></tr>";
			w += "<tr><td>Heal Lv3</td><td>"+ Heal[3] +"</td></tr>";
			w += "<tr><td>Heal Lv4</td><td>"+ Heal[4] +"</td></tr>";
			w += "<tr><td>Heal Lv5 (Scroll)</td><td>"+ Heal[5] +"</td></tr></table>";
		}
		w += "<Font size=2>Required Int/Lv for next bonus: </Font>+"+ (8 -(n_A_BaseLV + n_A_INT) %8);
		myInnerHtml("A_KakutyouData",w,0);
	}
	else if(wKK == 2){
		if(n_A_JOB==1||n_A_JOB==7||n_A_JOB==13||n_A_JOB==20||n_A_JOB==21||n_A_JOB==27){
			HPRLV = eval(document.calcForm.A_KakutyouSelNum.value);
			w = Math.floor((5 + n_A_MaxHP / 500) * HPRLV);
			myInnerHtml("A_KakutyouData","<br>Regen: "+w,0);
		}else
			myInnerHtml("A_KakutyouData","",0);
	}
	else if(wKK == 3){
		if(n_A_JOB==5||n_A_JOB==9||n_A_JOB==11||n_A_JOB==18||n_A_JOB==20||n_A_JOB==23||n_A_JOB==25||n_A_JOB==32||n_A_JOB==44){			SPRLV = eval(document.calcForm.A_KakutyouSelNum.value);
			w = Math.floor((3 + n_A_MaxSP / 500) * SPRLV);
			myInnerHtml("A_KakutyouData","<br>Regen: "+w,0);
		}else
			myInnerHtml("A_KakutyouData","",0);
	}
	else if(wKK == 4){
		if(n_A_JOB==15||n_A_JOB==29){
			SPRLV = eval(document.calcForm.A_KakutyouSelNum.value);
			w1 = Math.floor((4 + n_A_MaxHP / 500) * SPRLV);
			w2 = Math.floor((2 + n_A_MaxSP / 500) * SPRLV);
			myInnerHtml("A_KakutyouData","<br>HP Regen: "+w1+"<br>SP Regen: "+w2,0);
		}else
			myInnerHtml("A_KakutyouData","",0);
	}
	else if(wKK == 5){
		syozijob =[0,800,400,400,600,200,800,800,400,600,700,400,1000,800,400,600,700,700,400,1000,0,800,400,600,700,400,1000,800,400,600,700,700,400,1000,0,0,0,0,0,0,0,800,800,400,600,800];
		syoziryou = 2000 + syozijob[n_A_JOB];
		if(eval(document.calcForm.A_youshi.checked))
			syoziryou = 2000;
		syoziryou += eval(document.calcForm.A_STR.value) * 30;
		if(SkillSearch(78))
			syoziryou += 1000;
		if(n_A_JOB==6||n_A_JOB==12||n_A_JOB==19||n_A_JOB==20||n_A_JOB==26||n_A_JOB==33)
			syoziryou += eval(document.calcForm.A_KakutyouSelNum.value) * 200;
		EquipKG = 0;
		for(i=0;i<=10;i++)
			EquipKG += ItemOBJ[n_A_Equip[i]][6];
		myInnerHtml("A_KakutyouData","Weight Limit: "+syoziryou+"<BR>Total Weight of Equipment: "+EquipKG,0);
	}
	else if(wKK == 6){
		CBIstr = "<Font size=2><B>";
		for(i=0;i <= 9;i++){
			if(n_A_zokusei[i]==100){
				wkk6a = "";
				wkk6b = "";
			}
			if(n_A_zokusei[i]<100){
				wkk6a = "<Font color=blue>";
				wkk6b = "</Font>";
			}
			if(n_A_zokusei[i]>100){
				wkk6a = "<Font color=red>";
				wkk6b = "</Font>";
			}

			CBIstr += wkk6a + ZokuseiOBJ[i] +" "+n_A_zokusei[i] +" %" + wkk6b +"<BR>";
		}
		CBIstr += "</B></Font>";
		myInnerHtml("A_KakutyouData",CBIstr,0);
	}
	else if(wKK == 7){
		CBIstr = "<Font size=2><B>";
		for(i=50;i <= 59;i++){
			if(n_tok[i]==0){
				wkk6a = "";
				wkk6b = "";
			}
			if(n_tok[i]>0){
				wkk6a = "<Font color=blue>";
				wkk6b = "</Font>";
			}
			if(n_tok[i]<0){
				wkk6a = "<Font color=red>";
				wkk6b = "</Font>";
			}
			CBIstr += wkk6a + SyuzokuOBJ[i-50] +" "+ n_tok[i] +" %" + wkk6b +"<BR>";
		}
		CBIstr += "</B></Font>";
		myInnerHtml("A_KakutyouData",CBIstr,0);
	}
	else if(wKK == 8){
		var JyoutaiTaisei = new Array();
		var GensanTaisei = (n_A_BaseLV + n_A_LUK) / 10;
		JyoutaiTaisei[0] = Math.floor(n_A_VIT * 100) / 100;
		JyoutaiTaisei[1] = JyoutaiTaisei[0];
		JyoutaiTaisei[2] = Math.floor(n_A_MDEF * 100) / 100;
		JyoutaiTaisei[3] = Math.floor(n_A_LUK * 100) / 100;
		JyoutaiTaisei[4] = Math.floor(n_A_INT * 100) / 150;
		JyoutaiTaisei[5] = Math.floor(n_A_INT * 100) / 100;
		JyoutaiTaisei[6] = JyoutaiTaisei[0];
		JyoutaiTaisei[7] = JyoutaiTaisei[4];
		JyoutaiTaisei[8] = JyoutaiTaisei[0];
		JyoutaiTaisei[9] = JyoutaiTaisei[2];
		if(n_A_LUK == 0)
			JyoutaiTaisei[3] = 100;
		if(n_A_BodyZokusei == 9){
			JyoutaiTaisei[2] = 100;
			JyoutaiTaisei[8] = 100;
			JyoutaiTaisei[9] = 100;
		}
		for(var i=0;i<=9;i++){
			JyoutaiTaisei[i] += Math.floor((100 - JyoutaiTaisei[i]) *  n_tok[150+i]) /100;
			JyoutaiTaisei[i] = Math.floor(JyoutaiTaisei[i] * 100) / 100;
		}

		CBIstr = "<Font size=2><B>"
		for(i=0;i <= 9;i++){
			CBIstr += IjyouOBJ[i] + " ";
			CBIstr += JyoutaiTaisei[i] + "%<BR>"
		}
		var w = Math.floor((GensanTaisei -9.9) * 100) / 100;
		if(w < 0)
			w = 0;
		CBIstr += "Average resistance: "+ w +"~"+ GensanTaisei;
		CBIstr += "</B><BR>(Values shown here are still tentative, especially Blind and Chaos)</Font>";
		myInnerHtml("A_KakutyouData",CBIstr,0);
	}
	else if(wKK == 9){
		CBIstr = "<Font size=2><B>";
		wkk9w = ["Bosstype","Long-range","Normal-monster"];
		for(i=77;i <= 79;i++){
			if(n_tok[i]==0){
				wkk6a = "";
				wkk6b = "";
			}
			if(n_tok[i]>0){
				wkk6a = "<Font color=blue>";
				wkk6b = "</Font>";
			}
			if(n_tok[i]<0){
				wkk6a = "<Font color=red>";
				wkk6b = "</Font>";
			}
			CBIstr += wkk6a + wkk9w[i-77] +" Resistance: "+ n_tok[i] +"%" + wkk6b +"<BR>";
		}
		for(i=190;i <= 192;i++){
			if(n_tok[i]==0){
				wkk6a = "";
				wkk6b = "";
			}
			if(n_tok[i]>0){
				wkk6a = "<Font color=blue>";
				wkk6b = "</Font>";
			}
			if(n_tok[i]<0){
				wkk6a = "<Font color=red>";
				wkk6b = "</Font>";
			}
			CBIstr += wkk6a + SizeOBJ[i-190] +" Resistance: "+ n_tok[i] +"%" + wkk6b +"<BR>";
		}
		CBIstr += "</B></Font>";
		myInnerHtml("A_KakutyouData",CBIstr,0);
	}else if(wKK == 10){
		var wkk10;
		wkk10 = "Cast Time: "+ Math.round(n_A_CAST *10000)/100+"%<BR>";
		wkk10 += "Cast Delay: "+ Math.round((100 - n_tok[74]) *100)/100 +"%";
		myInnerHtml("A_KakutyouData",wkk10,0);
	}else if(wKK == 11){
		var NowBaseExp = eval(document.calcForm.A_KakutyouSelNum.value);
		var NowJobExp = eval(document.calcForm.A_KakutyouSelNum2.value);
		if(!(0 <= NowBaseExp && NowBaseExp <= 100)){
			NowBaseExp = 0;
			document.calcForm.A_KakutyouSelNum.value = 0;
		}
		if(!(0 <= NowJobExp && NowJobExp <= 100)){
			NowJobExp = 0;
			document.calcForm.A_KakutyouSelNum2.value = 0;
		}
		var JobType=0;
		if(n_A_JOB == 0 && n_Tensei)
			JobType = 1;
		if((1 <= n_A_JOB && n_A_JOB <= 6) || n_A_JOB == 41 || n_A_JOB == 20){
			JobType = 2;
			if(n_Tensei)
				JobType = 3;
		}
		if((7 <= n_A_JOB && n_A_JOB <= 19) || n_A_JOB == 43)
			JobType = 4;
		if(21 <= n_A_JOB && n_A_JOB<=33)
			JobType = 5;
		if(n_A_JOB == 42)
			JobType = 7;
		if(n_A_JOB == 44 || n_A_JOB == 45)
			JobType = 6;

		NowBaseExp = Math.floor(PC_BaseExp[n_Tensei][n_A_BaseLV] * NowBaseExp / 100);


		var wkk11;
		wkk11 = "<Font size=2>Required BaseExp for Base Up: <B>"+ Kanma(PC_BaseExp[n_Tensei][n_A_BaseLV] - NowBaseExp) +" </B>exp<BR>";

		var MonsterNum=0;
		var OneCheck = 0;
		if(n_B[16] != 0){
			for(i=n_A_BaseLV;i<99;i++){
				var LvUpExp = PC_BaseExp[n_Tensei][i];

				var w1 = Math.floor((LvUpExp - NowBaseExp) / n_B[16]);
				MonsterNum += w1;
				NowBaseExp += w1 * n_B[16];

				while(NowBaseExp < LvUpExp){
					NowBaseExp += n_B[16];
					MonsterNum += 1
				}
				if(OneCheck==0){
					OneCheck = 1;
					wkk11 += "(Equals <B>"+ Kanma(MonsterNum) +"</B> "+ n_B[1] +" kill"+(Kanma(MonsterNum)!=1?"s":"")+")<BR>";
				}
				NowBaseExp -= LvUpExp;
				if(NowBaseExp > LvUpExp -1)
					NowBaseExp = LvUpExp -1;
			}
			wkk11 += "Until BaseLv99: <B>"+ Kanma(MonsterNum) +"</B> more "+ n_B[1] +" kill"+(Kanma(MonsterNum)!=1?"s":"")+"<BR><BR>";
		}


		NowJobExp = Math.floor(PC_JobExp[JobType][n_A_JobLV] * NowJobExp / 100);
		if(((1 <= n_A_JOB && n_A_JOB <= 6) || n_A_JOB == 41) && n_A_JobLV == 50)
			NowJobExp = 0;
		wkk11 += "Required JobExp for Job Up: <B>"+ Kanma(PC_JobExp[JobType][n_A_JobLV] - NowJobExp) +"</B> exp<BR>";

		MonsterNum=0;
		OneCheck = 0;
		if(n_B[17] != 0){
			for(i=1;PC_JobExp[JobType][i]!=0;i++);
			var MaxJobLV = i;
			if((1 <= n_A_JOB && n_A_JOB <= 6) || n_A_JOB == 41)
				MaxJobLV = 50;
			for(i=n_A_JobLV;i<MaxJobLV;i++){
				var LvUpExp = PC_JobExp[JobType][i];

				var w1 = Math.floor((LvUpExp - NowJobExp) / n_B[17]);
				MonsterNum += w1;
				NowJobExp += w1 * n_B[17];

				while(NowJobExp < LvUpExp){
					NowJobExp += n_B[17];
					MonsterNum += 1
				}
				if(OneCheck==0){
					OneCheck = 1;
					wkk11 += "(Equals <B>"+ Kanma(MonsterNum) +"</B> "+ n_B[1] +" kill"+(Kanma(MonsterNum)!=1?"s":"")+")<BR>";
				}
				NowJobExp -= LvUpExp;
				if(NowJobExp > LvUpExp -1)
					NowJobExp = LvUpExp -1;
			}
			wkk11 += "Until JobLv"+ MaxJobLV +": <B>"+ Kanma(MonsterNum) +"</B> more "+ n_B[1] +" kill"+(Kanma(MonsterNum)!=1?"s":"")+"<BR><BR>";
		}

		wkk11 += "</Font>";

		myInnerHtml("A_KakutyouData",wkk11,0);
	}
}

function Kanma(num){
	var str = "";
	var x = new Array();
	if(num < 0){
		num = num * -1;
		str += "-";
	}
	for(var i=0;Math.floor(num / 1000) != 0;i++){
		var w = (num % 1000);
		if(w == 0){
			x[i] = ",000";
		}else if(w < 10){
			x[i] = ",00" + w;
		}else if(w < 100){
			x[i] = ",0" + w;
		}else{
			x[i] = "," + w;
		}
		num = Math.floor(num / 1000);
	}
	x[i] = num;
	while(i>=0){
		str += x[i];
		i--;
	}
	return str;
}


function KakutyouKansuu2(){
	wKK = eval(document.calcForm.A_Kakutyou.value);
	if(wKK == 2){
		if(n_A_JOB==1||n_A_JOB==7||n_A_JOB==13||n_A_JOB==20||n_A_JOB==21||n_A_JOB==27){
			myInnerHtml("A_KakutyouSel","Increased HP Recovery Level: " + '<select name="A_KakutyouSelNum"onChange="StAllCalc()"></select>',0);
			for(i=0;i<=10;i++)
				document.calcForm.A_KakutyouSelNum.options[i] = new Option(i,i);
			document.calcForm.A_KakutyouSelNum.value=10;
			return;
		}else{
			myInnerHtml("A_KakutyouSel","Not Available for this Class",0);
			return;
		}
	}
	if(wKK == 3){
		if(n_A_JOB==5||n_A_JOB==9||n_A_JOB==11||n_A_JOB==18||n_A_JOB==20||n_A_JOB==23||n_A_JOB==25||n_A_JOB==32||n_A_JOB==44){
			SPRname = "Increased SP Recovery Level: ";
			if(n_A_JOB==44)
				SPRname = "Ninja Mastery Level: ";
			myInnerHtml("A_KakutyouSel",SPRname + '<select name="A_KakutyouSelNum"onChange="StAllCalc()"></select>',0);
			for(i=0;i<=10;i++)
				document.calcForm.A_KakutyouSelNum.options[i] = new Option(i,i);
			document.calcForm.A_KakutyouSelNum.value=10;
			return;
		}else{
			myInnerHtml("A_KakutyouSel","Not Available for this Class",0);
			return;
		}
	}
	if(wKK == 4){
		if(n_A_JOB==15||n_A_JOB==29){
			myInnerHtml("A_KakutyouSel","Spiritual Cadence Lv: " + '<select name="A_KakutyouSelNum"onChange="StAllCalc()"></select>',0);
			for(i=0;i<=5;i++)
				document.calcForm.A_KakutyouSelNum.options[i] = new Option(i,i);
			document.calcForm.A_KakutyouSelNum.value=5;
			return;
		}else{
			myInnerHtml("A_KakutyouSel","Not Available for this Class",0);
			return;
		}
	}
	if(wKK == 5){
		if(n_A_JOB==6||n_A_JOB==12||n_A_JOB==19||n_A_JOB==20||n_A_JOB==26||n_A_JOB==33){
			myInnerHtml("A_KakutyouSel","Enlarge Weight Limit Lv: " + '<select name="A_KakutyouSelNum"onChange="StAllCalc()"></select><BR>',0);
			for(i=0;i<=10;i++)
				document.calcForm.A_KakutyouSelNum.options[i] = new Option(i,i);
			if(n_A_JOB==20)
				document.calcForm.A_KakutyouSelNum.value=0;
			else
				document.calcForm.A_KakutyouSelNum.value=5;
		}else{
			myInnerHtml("A_KakutyouSel","",0);
		}
		return;
	}
	if(wKK == 11){
		var w;
		w = '<Font size="2">Current BaseExp<input type="text" name="A_KakutyouSelNum" value="0" size=4 onChange="StAllCalc()" style="text-align : right;">%<BR>';
		w += 'Current JobExp<input type="text" name="A_KakutyouSelNum2" value="0" size=4 onChange="StAllCalc()" style="text-align : right;">%<BR></Font>';
		myInnerHtml("A_KakutyouSel",w,0);
		return;
	}
	myInnerHtml("A_KakutyouSel","",0);
}

function SetCardShort(){
with(document.calcForm){
	w = eval(A_cardshort.value);
if(w > 0) {
	if(CardShort[w][1] < 10000){
		A_weapon1_card1.value = CardShort[w][1];
		A_weapon1_card2.value = CardShort[w][2];
		A_weapon1_card3.value = CardShort[w][3];
		A_weapon1_card4.value = CardShort[w][4];

		if(w == 9 || w == 10){
			w = MonsterOBJ[eval(B_Enemy.value)][3];

			if(10 <= w && w <= 14)
				A_weapon1_card1.value = 204;
			if((20 <= w && w <= 24) || (80 <= w && w <= 94))
				A_weapon1_card1.value = 203;
			if(30 <= w && w <= 34)
				A_weapon1_card1.value = 201;
			if(40 <= w && w <= 44)
				A_weapon1_card1.value = 202;
		}
	}else if(CardShort[w][0] != "Remove All Cards") {
		if(CardShort[w][2] != 0)
			A_weapon1_card1.value = CardShort[w][2];
		if(CardShort[w][3] != 0)
			A_head1_card.value = CardShort[w][3];
		if(CardShort[w][4] != 0)
			A_left_card.value = CardShort[w][4];
		if(CardShort[w][5] != 0)
			A_body_card.value = CardShort[w][5];
		if(CardShort[w][6] != 0)
			A_shoulder_card.value = CardShort[w][6];
		if(CardShort[w][7] != 0)
			A_shoes_card.value = CardShort[w][7];
		if(CardShort[w][8] != 0)
			A_acces1_card.value = CardShort[w][8];
		if(CardShort[w][9] != 0)
			A_acces2_card.value = CardShort[w][9];
	} else {
		A_weapon1_card1.value = 0;
		A_weapon1_card2.value = 0;
		A_weapon1_card3.value = 0;
		A_weapon1_card4.value = 0;

		if(typeof A_weapon2_card1 != "undefined") {
			A_weapon2_card1.value = 0;
			A_weapon2_card2.value = 0;
			A_weapon2_card3.value = 0;
			A_weapon2_card4.value = 0;
		}

		A_head1_card.value = 0;
		A_head2_card.value = 0;
		A_left_card.value = 0;
		A_body_card.value = 0;
		A_shoulder_card.value = 0;
		A_shoes_card.value = 0;
		A_acces1_card.value = 0;
		A_acces2_card.value = 0;
	}
	ActiveSkillSetPlus();
}
}}

function SetCardShortLeft(){
with(document.calcForm){
	w = eval(A_cardshortLeft.value);

	A_weapon2_card1.value = CardShort[w][1];
	A_weapon2_card2.value = CardShort[w][2];
	A_weapon2_card3.value = CardShort[w][3];
	A_weapon2_card4.value = CardShort[w][4];


	if(w == 9 || w == 10){
		w = MonsterOBJ[eval(B_Enemy.value)][3];

		if(10 <= w && w <= 14)
			A_weapon2_card1.value = 204;
		if((20 <= w && w <= 24) || (80 <= w && w <= 94))
			A_weapon2_card1.value = 203;
		if(30 <= w && w <= 34)
			A_weapon2_card1.value = 201;
		if(40 <= w && w <= 44)
			A_weapon2_card1.value = 202;
	}
}}

wESx = new Array();
for(i=0;i<=EnemyNum;i++)
	wESx[i]=new Array();

function EnemySort(){
	var len = document.calcForm.B_Enemy.length;
	for(var i=0;i<len;i++)
		document.calcForm.B_Enemy.options[0] = null;

	ESNum= [1,3,2,21,22,16,17,13,100];

	var wES2 = eval(document.calcForm.ENEMY_SORT.value);

	if(wES2==0){


		var x = new Array();
		for(var i=0;i<=EnemyNum;i++)
			x[i] = MonsterABC[i];
		x = SZ(x);
		var j=0;
		for(var i=0;i<=EnemyNum;i++){
			if(x[i] != -1){
				document.calcForm.B_Enemy.options[j] = new Option(MonsterOBJ[x[i]][1],x[i]);
				j++;
			}
		}
		return;


	}

	wES = ESNum[eval(document.calcForm.ENEMY_SORT.value)];
	wESx[0][0] = "S";
	wESx[0][1] = "E";
	STERTw = 0;
	ENDw = 0;
	for(i=1;i<=EnemyNum;i++){
		j=ENDw;
		if(MonsterOBJ[i][wES] >= MonsterOBJ[j][wES]){
			wESx[j][1] = i;
			wESx[i][0] = j;
			wESx[i][1] = "E";
			ENDw=i;
		}else{
			j=STERTw;
			if(MonsterOBJ[i][wES] <= MonsterOBJ[j][wES]){
				wESx[j][0] = i;
				wESx[i][0] = "S";
				wESx[i][1] = j;
				STERTw=i;
			}else{
				j=STERTw;
				jbk=STERTw;
				while(MonsterOBJ[i][wES] > MonsterOBJ[j][wES]){
					jbk=j;
					j = wESx[j][1];
				}
				wESx[jbk][1] = i;
				wESx[i][0] = jbk;
				wESx[i][1] = j;
				wESx[j][0] = i;
			}
		}
	}

	var x = new Array();
	var i;
	x[0] = i = STERTw;
	for(var j=1;wESx[i][1]!="E";j++){
		x[j] = wESx[i][1];
		i = wESx[i][1];
	}
	x = SZ(x);

	ESwork2 = new Array();
	if(wES==21||wES==22){
		for(i=0;i<=EnemyNum;i++)
			ESwork2[i] = MonsterOBJ[i][wES] +")";
	}
	else if(wES==2){
		for(i=0;i<=EnemyNum;i++)
			ESwork2[i] = SyuzokuOBJ[MonsterOBJ[i][2]] +")";
	}
	else if(wES==3){
		for(i=0;i<=EnemyNum;i++)
			ESwork2[i] = ZokuseiOBJ[Math.floor(MonsterOBJ[i][3] /10)] + MonsterOBJ[i][3] % 10 +")";
	}
	else{
		for(i=0;i<=EnemyNum;i++)
			ESwork2[i] = "";
	}

	var j=0;
	for(i=0;i<=EnemyNum;i++){
		if(x[i] != -1){
			document.calcForm.B_Enemy.options[j] = new Option(ESwork2[x[i]] + MonsterOBJ[x[i]][1],x[i]);
			j++;
		}
	}
}

function SZ(wSTR){
	var w = document.calcForm.ENEMY_SORT2.value;
	if(w != 0){
		for(var i=0;i<=EnemyNum;i++){
			if(wSTR[i] != -1){
				for(var j=0;MonMap[w][j] != "N";j++){
					if(wSTR[i] == MonMap[w][j])
						break;
				}
				if(MonMap[w][j] == "N")
					wSTR[i] = -1;
			}
		}
	}
	return wSTR;
}

var nMANUKU = [524,527,528,530,531,534,541];
function MANUKU_MONSTER(){
	for(var i=0;i < nMANUKU.length;i++){
		if(n_B[0] == nMANUKU[i])
			return 1;
	}
	return 0;
}

var nSUPURE = [525,526,529,532,533,537];
function SUPURE_MONSTER(){
	for(var i=0;i < nSUPURE.length;i++){
		if(n_B[0] == nSUPURE[i])
			return 1;
	}
	return 0;
}

n_NtoS =["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
n_NtoS2 =["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","0","1","2","3","4","5","6","7","8","9"];
function NtoS(n,keta){
	var strX = "";
	if(keta == 3){
		strX += n_NtoS[Math.floor(n / 100)];
		var w = n % 100;
		if(w >= 10)
			strX += w;
		else
			strX += "0" + w;
	}else if(keta == 2){
		strX += n_NtoS[Math.floor(n / 10)];
		strX += n % 10;
	}else{
		strX += n_NtoS[n];
	}
	return strX;
}

function StoN(n){
	n += "";
	for(var i=0;i<=61;i++)
		if(n == n_NtoS[i])
			return i;
}

SaveStr2 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9,10,11,12,13,14, 15,16, 17, 18, 19, 20, 21,22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88];
SaveStr1 = [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1,  3, 1,  3,  3,  3,  3,  3, 1,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];

function SaveCookie(){
with(document.calcForm){
	SaveData = new Array();

	for(i=0;i<=88;i++)
		SaveData[i]=0;

	SaveData[0] = eval(A_JOB.value);
	SaveData[1] = eval(A_BaseLV.value);
	SaveData[2] = eval(A_JobLV.value);
	SaveData[3] = eval(A_STR.value);
	SaveData[4] = eval(A_AGI.value);
	SaveData[5] = eval(A_VIT.value);
	SaveData[6] = eval(A_DEX.value);
	SaveData[7] = eval(A_INT.value);
	SaveData[8] = eval(A_LUK.value);
	
	SaveData[9] = eval(A_HSE.value);

	SaveData[10] = eval(A_WeaponType.value);
	if(n_Nitou)
		SaveData[11] = eval(A_Weapon2Type.value);

	if(n_A_JobSearch()==2 || n_A_JobSearch()==4 || (n_A_JOB==45 && n_A_WeaponType!=0))
		SaveData[12] = eval(A_Arrow.value);

	SaveData[13] = eval(A_SpeedPOT.value);
	SaveData[14] = 4;
	SaveData[15] = eval(A_weapon1.value);
	SaveData[16] = eval(A_Weapon_ATKplus.value);
	SaveData[17] = eval(A_weapon1_card1.value);
	SaveData[18] = eval(A_weapon1_card2.value);
	SaveData[19] = eval(A_weapon1_card3.value);
	SaveData[20] = eval(A_weapon1_card4.value);
	if(n_Nitou){
		SaveData[21] = eval(A_weapon2.value);
		SaveData[22] = eval(A_Weapon2_ATKplus.value);
		SaveData[23] = eval(A_weapon2_card1.value);
		SaveData[24] = eval(A_weapon2_card2.value);
		SaveData[25] = eval(A_weapon2_card3.value);
		SaveData[26] = eval(A_weapon2_card4.value);
	}else{
		SaveData[21] = 0;
		SaveData[22] = 0;
		SaveData[23] = 0;
		SaveData[24] = 0;
		SaveData[25] = 0;
		SaveData[26] = 0;
	}
	SaveData[27] = eval(A_head1.value);
	SaveData[28] = eval(A_head1_card.value);
	SaveData[29] = eval(A_head2.value);
	SaveData[30] = eval(A_head2_card.value);
	SaveData[31] = eval(A_head3.value);
	SaveData[32] = eval(A_HSE_HEAD1.value);
	SaveData[33] = eval(A_left.value);
	SaveData[34] = eval(A_left_card.value);
	SaveData[35] = eval(A_body.value);
	SaveData[36] = eval(A_body_card.value);
	SaveData[37] = eval(A_shoulder.value);
	SaveData[38] = eval(A_shoulder_card.value);
	SaveData[39] = eval(A_shoes.value);
	SaveData[40] = eval(A_shoes_card.value);
	SaveData[41] = eval(A_acces1.value);
	SaveData[42] = eval(A_acces1_card.value);
	SaveData[43] = eval(A_acces2.value);
	SaveData[44] = eval(A_acces2_card.value);

	n_A_JobSet();
	w = n_A_JOB;


	var ch = 0;
	for(var i=0;i<=14 && ch==0;i++){
		if(JobSkillPassOBJ[w][i]!=999){
			var wOBJ = document.getElementById("A_skill"+i);
			SaveData[45+i] = eval(wOBJ.value);
		}else
			ch = 1;
	}

	SaveData[63] = eval(A_youshi.checked);
	if(SaveData[63] == true)
		SaveData[63] = 1;
	else if(SaveData[63] == false)
		SaveData[63] = 0;
	SaveData[64] = eval(A_Weapon_zokusei.value);

	for(i=0;i<=12;i++){
		SaveData[65+i] = n_A_PassSkill2[i];
		if(SaveData[65+i] == true)
			SaveData[65+i] = 1;
		else if(SaveData[65+i] == false)
			SaveData[65+i] = 0;
	}
	SaveData[78] = 0;
	SaveData[79] = 0;
	SaveData[80] = 0;
	SaveData[81] = 0;
	SaveData[82] = 0;
	SaveData[83] = 0;
	SaveData[84] = eval(A_HEAD_DEF_PLUS.value);
	SaveData[85] = eval(A_BODY_DEF_PLUS.value);
	SaveData[86] = eval(A_LEFT_DEF_PLUS.value);
	SaveData[87] = eval(A_SHOULDER_DEF_PLUS.value);
	SaveData[88] = eval(A_SHOES_DEF_PLUS.value);
	

	for(i=0;i<=88;i++)
		SaveData[i] = NtoS(SaveData[i],SaveStr1[i]);
	cne2 = document.calcForm.charname.value;
	
	cookieNum = A_SaveSlot.value;

	wDay = 99000;

	wCookie = new Date();
	wCookie.setTime(wCookie.getTime()+(wDay*1000*60*60*24));
	expDay = wCookie.toGMTString();
	
	

	wStr = "" +SaveData[0];

	for(i=1;i<=88;i++){
		wStr += ""+SaveData[i];
	}
	document.cookie = cookieNum + "="+ wStr + ","+cne2 +", ; secure; expires="+ expDay;

	bkcN = cookieNum;
	LoadCookie3();
	A_SaveSlot.value = bkcN;
}}

function LoadCookie(){
with(document.calcForm){
	SaveData = new Array();
	cookieNum = A_SaveSlot.value;
	SaveData = document.cookie.split("; ");
	wStr = "";

	
	for(i=0;SaveData[i];i++){
		if (SaveData[i].substr(0,6) == cookieNum +"="){
			wStr = SaveData[i].substr(6,SaveData[i].length);
			break;
		}
	}
	for(i=0;i<=88;i++)
		SaveData[i] = 0;
	
	j=0;
	for(i=0;i<=88;i++){
		if(SaveStr1[i] == 1){
			SaveData[i] = wStr.substr(j,1);
			j++;
		}else if(SaveStr1[i] == 2){
			SaveData[i] = wStr.substr(j,2)
			j+=2;
		}else{
			SaveData[i] = wStr.substr(j,3);
			j+=3;
		}
	}
	for(i=0;i<=88;i++){
		if(SaveStr1[i] == 1)
			SaveData[i] = StoN(SaveData[i]);
		if(SaveStr1[i] == 2)
			SaveData[i] = StoN(SaveData[i].substr(0,1)) + SaveData[i].substr(1,1);
		if(SaveStr1[i] == 3)
			SaveData[i] = StoN(SaveData[i].substr(0,1)) + SaveData[i].substr(1,2);
	}
	for(i=0;i<=88;i++){
		if(SaveStr1[i] == 3 && SaveData[i].substr(0,2) == "00")
			SaveData[i] = SaveData[i].substr(2,1);
		else if(SaveStr1[i] == 3 && SaveData[i].substr(0,1) == "0")
			SaveData[i] = SaveData[i].substr(1,2);
		else if(SaveStr1[i] == 2 && SaveData[i].substr(0,1) == "0")
			SaveData[i] = SaveData[i].substr(1,1);
	}
	if(SaveData[88] == "u" || SaveData[88] == "und")
		SaveData[88] = 0;
	for(i=0;i<=88;i++)
		SaveData[i] = eval(SaveData[i]);

	if(eval(SaveData[0]) == 20 && eval(SaveData[54]) == 1)
		SuperNoviceFullWeaponCHECK = 1;
	else
		SuperNoviceFullWeaponCHECK = 0;

	A_JOB.value = SaveData[0];
	ClickJob(SaveData[0]);
	A_BaseLV.value = SaveData[1];
	A_JobLV.value = SaveData[2];
	A_STR.value = SaveData[3];
	A_AGI.value = SaveData[4];
	A_VIT.value = SaveData[5];
	A_DEX.value = SaveData[6];
	A_INT.value = SaveData[7];
	A_LUK.value = SaveData[8];

	A_HSE.value = SaveData[9];
	
	A_WeaponType.value = SaveData[10];
	ClickWeaponType(SaveData[10]);
	if((SaveData[0] == 8 || SaveData[0] == 22) && SaveData[10] != 11){
		A_Weapon2Type.value = SaveData[11];
		ClickWeaponType2(SaveData[11]);
	}
	n_A_JobSet();

	if(n_A_JobSearch()==2 || n_A_JobSearch()==4 || (n_A_JOB==45 && SaveData[10]!=0))
		A_Arrow.value = SaveData[12];

	A_SpeedPOT.value = SaveData[13];
	A_weapon1.value = SaveData[15];
	A_Weapon_ATKplus.value = SaveData[16];
	A_weapon1_card1.value = SaveData[17];
	A_weapon1_card2.value = SaveData[18];
	A_weapon1_card3.value = SaveData[19];
	A_weapon1_card4.value = SaveData[20];
	if(n_Nitou){
		A_weapon2.value = SaveData[21];
		A_Weapon2_ATKplus.value = SaveData[22];
		A_weapon2_card1.value = SaveData[23];
		A_weapon2_card2.value = SaveData[24];
		A_weapon2_card3.value = SaveData[25];
		A_weapon2_card4.value = SaveData[26];
	}

	if(SaveData[14] < 4){
		if(SaveData[28] == 299)SaveData[28] = 298;
		if(SaveData[28] == 400)SaveData[28] = 298;
		if(SaveData[30] == 299)SaveData[30] = 298;
		if(SaveData[30] == 400)SaveData[30] = 298;
		if(SaveData[34] == 311)SaveData[34] = 310;
		if(SaveData[36] == 226)SaveData[36] = 225;
		if(SaveData[38] == 272)SaveData[38] = 271;
		if(SaveData[40] == 305)SaveData[40] = 304;
		if(SaveData[40] == 363)SaveData[40] = 362;
	}

	A_head1.value = SaveData[27];
	A_head1_card.value = SaveData[28];
	A_head2.value = SaveData[29];
	A_head2_card.value = SaveData[30];
	A_head3.value = SaveData[31];

	A_HSE_HEAD1.value = SaveData[32];
	A_left.value = SaveData[33];
	A_left_card.value = SaveData[34];
	A_body.value = SaveData[35];
	A_body_card.value = SaveData[36];
	A_shoulder.value = SaveData[37];
	A_shoulder_card.value = SaveData[38];
	A_shoes.value = SaveData[39];
	A_shoes_card.value = SaveData[40];
	A_acces1.value = SaveData[41];
	A_acces1_card.value = SaveData[42];
	A_acces2.value = SaveData[43];
	A_acces2_card.value = SaveData[44];

	w = n_A_JOB;

	var ch = 0;
	for(var i=0;i<=14 && ch==0;i++){
		if(JobSkillPassOBJ[w][i]!=999){
			var wOBJ = document.getElementById("A_skill"+i);
			wOBJ.value = SaveData[45+i];
		}else
			ch = 1;
	}

	A_youshi.checked = SaveData[63];
	A_Weapon_zokusei.value = SaveData[64];
	for(i=0;i<=12;i++)
		n_A_PassSkill2[i] = SaveData[65+i];
	for(i=0;i<=12;i++)
		n_A_PassSkill2[i] = eval(n_A_PassSkill2[i]);
	if(n_SkillSW){
		A2_Skill0.value = n_A_PassSkill2[0];
		A2_Skill1.value = n_A_PassSkill2[1];
		A2_Skill2.value = n_A_PassSkill2[2];
		A2_Skill3.checked = n_A_PassSkill2[3];
		A2_Skill4.value = n_A_PassSkill2[4];
		A2_Skill5.checked = n_A_PassSkill2[5];
		A2_Skill6.checked = n_A_PassSkill2[6];
		A2_Skill7.checked = n_A_PassSkill2[7];
		A2_Skill8.value = n_A_PassSkill2[8];
		A2_Skill9.value = n_A_PassSkill2[9];
		A2_Skill10.value = n_A_PassSkill2[10];
		A2_Skill11.checked = n_A_PassSkill2[11];
		A2_Skill12.checked = n_A_PassSkill2[12];
	}
	if(SaveData[14] >= 3){
		A_HEAD_DEF_PLUS.value = SaveData[84];
		A_BODY_DEF_PLUS.value = SaveData[85];
		A_LEFT_DEF_PLUS.value = SaveData[86];
		A_SHOULDER_DEF_PLUS.value = SaveData[87];
		A_SHOES_DEF_PLUS.value = SaveData[88];
	}else{
		A_HEAD_DEF_PLUS.value = 0;
		A_BODY_DEF_PLUS.value = 0;
		A_LEFT_DEF_PLUS.value = 0;
		A_SHOULDER_DEF_PLUS.value = 0;
		A_SHOES_DEF_PLUS.value = 0;
	}
	charname.value = SaveData[89];
	StCalc(1);
	StAllCalc();
	ActiveSkillSetPlus();
}}

function LoadCookieSP(){
with(document.calcForm){
	var wStr = "";
	for(var k=0;k<=18;k++){
		var SaveData = new Array();
		if(k <= 7)
			var	cookieNum = "num0"+k;
		if(k == 8)
			var	cookieNum = "num09";
		if(k == 9)
			var	cookieNum = "num10";
		if(k > 10)
			var cookieNum = "num"+k;
		SaveData = document.cookie.split("; ");
		var ch=0;
		for(i=0;SaveData[i];i++){
			if (SaveData[i].substr(0,6) == cookieNum +"="){
				wStr += SaveData[i].substr(6,SaveData[i].length);
				ch = 1;
				var x=0;
				for(var i=0;i<=88;i++)
					x += SaveStr1[i];
				for(i=x;i<=159;i++)
					wStr += 0;
				wStr += "<BR>";
			}
		}
		if(ch==0){
			for(var i=0;i<=159;i++)
				wStr += 0;
			wStr += "<BR>";
		}
	}
	myInnerHtml("PR1",wStr,0);
}}

function LoadCookie3(){



	SaveData = new Array();
	for(k=1;k<=19;k++){
		cookieNum = "num0"+ (k-1);
		if(k == 9)
			cookieNum = "num0"+ k;
		if(k >= 10)
			cookieNum = "num"+ k;
		
		 splitname = document.cookie.split(",");
		var split2 = "";

SaveData = document.cookie.split("; ");
		wStr = "";
	
		for(i=0;SaveData[i];i++){
			if(SaveData[i].substr(0,6) == cookieNum +"="){
				wStr = SaveData[i].substr(6,SaveData[i].length);
				splitname2 = wStr.split(",");
		var split2 = splitname2[1];

				break;
			}
			
		}

		if(wStr.substr(27,1) >= 1){
			SaveData[0] = wStr.substr(0,2);
			SaveData[0] = eval(SaveData[0]);
		}else{
			SaveData[0] = 998;
		}
		SaveData[63] = wStr.substr(132,1);

		if(1<= SaveData[0] && SaveData[0] <=45){
			if(SaveData[63]==0)
				document.calcForm.A_SaveSlot.options[k-1] = new Option("Save"+k +": "+JobName[SaveData[0]]+"( "+split2+" )" ,cookieNum);
			else
				document.calcForm.A_SaveSlot.options[k-1] = new Option("Save"+k +": Baby "+JobName[SaveData[0]]+"( "+split2+" )" ,cookieNum);
		}
		else if(SaveData[0] == 999 || SaveData[0] == 0){
			document.calcForm.A_SaveSlot.options[k-1] = new Option("Save"+k +": Novice"+"( "+split2+" )" ,cookieNum);
		}
		else
			document.calcForm.A_SaveSlot.options[k-1] = new Option("Save"+k +": No Data"+"( "+split2+" )" ,cookieNum);
	}
}

function SaveCookieConf(){
	SaveData = new Array();

	wDay = 99000;

	wCookie = new Date();
	wCookie.setTime(wCookie.getTime()+(wDay*1000*60*60*24));
	expDay = wCookie.toGMTString();

	
	wStr = "a" + NtoS2(eval(document.calcForm.Conf01.value),2) + "00000";

	document.cookie = "ConfData" +"="+ wStr +"; secure; expires="+ expDay;
}

function LoadCookieConf(){

	SaveData = new Array();
	SaveData = document.cookie.split("; ");
	wStr = "";

	wLCF = 0;
	for(i=0;SaveData[i];i++){
		if(SaveData[i].substr(0,9) == "ConfData" +"="){
			wStr = SaveData[i].substr(9,SaveData[i].length);
			wLCF = 1;
			break;
		}
	}

	if(wLCF == 1){
		if(wStr.substr(0,1) == "0"){
			document.calcForm.Conf01.value = wStr.substr(1,2);
			SaveCookieConf();
		}else
			document.calcForm.Conf01.value = StoN2(wStr.substr(1,2));
	}else{
		document.calcForm.Conf01.value = 33;
	}
}


function NtoS2(n,keta){
	var strX = "";
	if(keta == 3){
		strX += n_NtoS2[Math.floor(n / 3844)];
		strX += n_NtoS2[Math.floor(n % 3844 / 62)];
		strX += n_NtoS2[n % 62];
	}else if(keta == 2){
		strX += n_NtoS2[Math.floor(n / 62)];
		strX += n_NtoS2[n % 62];
	}else{
		strX += n_NtoS2[n];
	}
	return strX;
}

function NtoS01(wb,wc,wd,we,wf){
	var n = 0;
	if(wb == true)
		n += 16;
	if(wc == true)
		n += 8;
	if(wd == true)
		n += 4;
	if(we == true)
		n += 2;
	if(wf == true)
		n += 1;
	return NtoS2(n,1);
}

function NtoS05(wa,wb){
	var n;
	n = wa * 6;
	n += wb;
	return NtoS2(n,1);
}

//pvp nonsense
function URLOUT2(){
with(document.calcForm){
	calc();
	SaveData = new Array();

	for(var i=0;i<=88;i++)
		SaveData[i]="a";

	SaveData[0] = NtoS2(2,1);
	SaveData[1] = NtoS2(eval(A_JOB.value),2);
	SaveData[2] = NtoS2(eval(A_BaseLV.value),2);
	SaveData[3] = NtoS2(eval(A_JobLV.value),2);
	SaveData[4] = NtoS2(eval(A_STR.value),2);
	SaveData[5] = NtoS2(eval(A_AGI.value),2);
	SaveData[6] = NtoS2(eval(A_VIT.value),2);
	SaveData[7] = NtoS2(eval(A_DEX.value),2);
	SaveData[8] = NtoS2(eval(A_INT.value),2);
	SaveData[9] = NtoS2(eval(A_LUK.value),2);
	SaveData[10] = NtoS2(eval(A_SpeedPOT.value) * 10 + eval(A_Weapon_zokusei.value),1);

	SaveData[11] = NtoS2(eval(A_WeaponType.value),1);
	if(n_Nitou)
		SaveData[12] = NtoS2(eval(A_Weapon2Type.value),1);

	if(n_A_JobSearch()==2 || n_A_JobSearch()==4 || (n_A_JOB==45 && n_A_WeaponType!=0))
		SaveData[13] = NtoS2(eval(A_Arrow.value),1);

	SaveData[14] = NtoS2(eval(A_weapon1.value),2);
	SaveData[15] = NtoS2(eval(A_Weapon_ATKplus.value),1);
	SaveData[16] = NtoS2(eval(A_weapon1_card1.value),2);
	SaveData[17] = NtoS2(eval(A_weapon1_card2.value),2);
	SaveData[18] = NtoS2(eval(A_weapon1_card3.value),2);
	SaveData[19] = NtoS2(eval(A_weapon1_card4.value),2);
	if(n_Nitou){
		SaveData[20] = NtoS2(eval(A_weapon2.value),2);
		SaveData[21] = NtoS2(eval(A_Weapon2_ATKplus.value),1);
		SaveData[22] = NtoS2(eval(A_weapon2_card1.value),2);
		SaveData[23] = NtoS2(eval(A_weapon2_card2.value),2);
		SaveData[24] = NtoS2(eval(A_weapon2_card3.value),2);
		SaveData[25] = NtoS2(eval(A_weapon2_card4.value),2);
	}else{
		SaveData[20] = NtoS2(eval(A_left.value),2);
		SaveData[21] = NtoS2(eval(A_LEFT_DEF_PLUS.value),1);
		SaveData[22] = NtoS2(eval(A_left_card.value),2);
		SaveData[24] = SaveData[25] = SaveData[23] = NtoS2(0,2);;
	}
	SaveData[26] = NtoS2(eval(A_head1.value),2);
	SaveData[27] = NtoS2(eval(A_head1_card.value),2);
	SaveData[28] = NtoS2(eval(A_head2.value),2);
	SaveData[29] = NtoS2(eval(A_head2_card.value),2);
	SaveData[30] = NtoS2(eval(A_head3.value),2);
	SaveData[31] = NtoS2(eval(A_body.value),2);
	SaveData[32] = NtoS2(eval(A_body_card.value),2);
	SaveData[33] = NtoS2(eval(A_shoulder.value),2);
	SaveData[34] = NtoS2(eval(A_shoulder_card.value),2);
	SaveData[35] = NtoS2(eval(A_shoes.value),2);
	SaveData[36] = NtoS2(eval(A_shoes_card.value),2);
	SaveData[37] = NtoS2(eval(A_acces1.value),2);
	SaveData[38] = NtoS2(eval(A_acces1_card.value),2);
	SaveData[39] = NtoS2(eval(A_acces2.value),2);
	SaveData[40] = NtoS2(eval(A_acces2_card.value),2);
	SaveData[41] = NtoS2(eval(A_HEAD_DEF_PLUS.value),1);
	SaveData[42] = NtoS2(eval(A_BODY_DEF_PLUS.value),1);
	SaveData[43] = NtoS2(eval(A_SHOULDER_DEF_PLUS.value),1);
	SaveData[44] = NtoS2(eval(A_SHOES_DEF_PLUS.value),1);
	SaveData[45] = NtoS01(A_youshi.checked,0,0,0,0);

	n_A_JobSet();
	var w = n_A_JOB;

	var ch = 0;
	for(var i=0;i<=19 && ch==0;i++){
		if(JobSkillPassOBJ[w][i]!=999){
			var wOBJ = document.getElementById("A_skill"+i);
			SaveData[47+i] = NtoS2(eval(wOBJ.value),1);
		}else{
			SaveData[46] = NtoS2(i,1);
			ch = 1;
		}
	}

	var x = 47 + i - 1;
	for(var i=0;i<=14 && n_A_PassSkill2[i]==0;i++);
	if(i==15){
		SaveData[x] = NtoS2(0,1);
	}else{
		SaveData[x] = NtoS2(1,1);
		SaveData[x+1] = NtoS2(n_A_PassSkill2[0],1);
		SaveData[x+2] = NtoS2(n_A_PassSkill2[1],1);
		SaveData[x+3] = NtoS2(n_A_PassSkill2[4],1);
		SaveData[x+4] = NtoS2(n_A_PassSkill2[9],1);
		SaveData[x+5] = NtoS05(n_A_PassSkill2[2],n_A_PassSkill2[6]);
		SaveData[x+6] = NtoS05(n_A_PassSkill2[8],n_A_PassSkill2[10]);
		SaveData[x+7] = NtoS05(n_A_PassSkill2[13],n_A_PassSkill2[14]);
		SaveData[x+8] = NtoS01(n_A_PassSkill2[3],n_A_PassSkill2[5],n_A_PassSkill2[7],n_A_PassSkill2[11],n_A_PassSkill2[12]);
		x += 8;
	}

	SaveData[x+1] = NtoS2(A_ActiveSkill.value,2);


		SaveData[x+2] = NtoS2(eval(A_ActiveSkillLV.value),1);
	SaveData[x+3] = NtoS2(0,3);
	if(n_A_ActiveSkill==66 || n_A_ActiveSkill==326 || n_A_ActiveSkill==131 || n_A_ActiveSkill==88 || n_A_ActiveSkill==197 || n_A_ActiveSkill==394 || n_A_ActiveSkill==395 || n_A_ActiveSkill==405 || n_A_ActiveSkill==429)
		SaveData[x+3] = NtoS2(eval(SkillSubNum.value),3);
	SaveData[x+4] = NtoS2(n_B[0],2);
	x+=4;

	x+=1;
	for(var i=0;i<=24 && n_B_IJYOU[i]==0;i++);
	if(i==25){
		SaveData[x] = NtoS2(0,1);
	}else{
		SaveData[x] = NtoS2(1,1);
		SaveData[x+1] = NtoS2(n_B_IJYOU[0],1);
		SaveData[x+2] = NtoS05(n_B_IJYOU[1],n_B_IJYOU[18]);
		SaveData[x+3] = NtoS01(n_B_IJYOU[2],n_B_IJYOU[3],n_B_IJYOU[4],n_B_IJYOU[5],n_B_IJYOU[6]);
		SaveData[x+4] = NtoS01(n_B_IJYOU[7],n_B_IJYOU[8],n_B_IJYOU[9],n_B_IJYOU[10],n_B_IJYOU[19]);
		SaveData[x+5] = NtoS2(n_B_IJYOU[11],1);
		SaveData[x+6] = NtoS2(n_B_IJYOU[12],1);
		SaveData[x+7] = NtoS01(n_B_IJYOU[13],n_B_IJYOU[14],n_B_IJYOU[15],n_B_IJYOU[16],n_B_IJYOU[17]);
		SaveData[x+8] = NtoS01(n_B_IJYOU[20],n_B_IJYOU[21],n_B_IJYOU[22],0,0);
		SaveData[x+9] = NtoS05(n_B_IJYOU[23],n_B_IJYOU[24]);
		x+=9;
	}

	x+=1;
	for(var i=0;i<=9 && n_B_KYOUKA[i]==0;i++);
	if(i==10){
		SaveData[x] = NtoS2(0,1);
	}else{
		SaveData[x] = NtoS2(1,1);
		SaveData[x+1] = NtoS2(n_B_KYOUKA[0],1);
		SaveData[x+2] = NtoS01(n_B_KYOUKA[1],n_B_KYOUKA[2],n_B_KYOUKA[3],n_B_KYOUKA[4],n_B_KYOUKA[5]);
		SaveData[x+3] = NtoS2(n_B_KYOUKA[6],2);
		SaveData[x+4] = NtoS05(n_B_KYOUKA[7],n_B_KYOUKA[8]);
		SaveData[x+5] = NtoS01(n_B_KYOUKA[9],0,0,0,0);
		x+=5;
	}

	x+=1;
	var checkHIT = [0,0,0,0,0];
	for(var i=0;i<=36 && n_A_PassSkill3[i]==0;i++);
	if(i!=37)
		checkHIT[0] = 1;
	for(i=0;i<=4 && n_A_PassSkill3[40+i]==0;i++);
	if(i!=5)
		checkHIT[1] = 1;
	for(i=0;i<=5 && n_A_PassSkill5[i]==0;i++);
	if(i!=6)
		checkHIT[2] = 1;
	for(i=0;i<=6 && n_A_PassSkill6[i]==0;i++);
	if(i!=7)
		checkHIT[3] = 1;
	for(i=0;i<=15 && n_A_PassSkill7[i]==0;i++);
	if(i!=16)
		checkHIT[4] = 1;
	SaveData[x] = NtoS01(checkHIT[0],checkHIT[1],checkHIT[2],checkHIT[3],checkHIT[4]);

	if(checkHIT[0]){
		SaveData[x+1] = NtoS2(n_A_PassSkill3[0],1);
		SaveData[x+2] = NtoS2(n_A_PassSkill3[1],1);
		SaveData[x+3] = NtoS2(n_A_PassSkill3[2],1);
		SaveData[x+4] = NtoS2(n_A_PassSkill3[3],1);
		SaveData[x+5] = NtoS2(n_A_PassSkill3[4],1);
		SaveData[x+6] = NtoS2(n_A_PassSkill3[5],1);
		SaveData[x+7] = NtoS2(n_A_PassSkill3[6],1);
		SaveData[x+8] = NtoS05(n_A_PassSkill3[7],n_A_PassSkill3[8]);
		SaveData[x+9] = NtoS05(n_A_PassSkill3[9],n_A_PassSkill3[10]);
		SaveData[x+10] = NtoS01(n_A_PassSkill3[11],n_A_PassSkill3[18],0,0,0);
		SaveData[x+11] = NtoS2(n_A_PassSkill3[12],2);
		SaveData[x+12] = NtoS2(n_A_PassSkill3[13],2);
		SaveData[x+13] = NtoS2(n_A_PassSkill3[14],2);
		SaveData[x+14] = NtoS2(n_A_PassSkill3[15],2);
		SaveData[x+15] = NtoS2(n_A_PassSkill3[16],2);
		SaveData[x+16] = NtoS2(n_A_PassSkill3[17],2);
		SaveData[x+17] = NtoS2(n_A_PassSkill3[20],2);
		SaveData[x+18] = NtoS2(n_A_PassSkill3[30],1);
		SaveData[x+19] = NtoS2(n_A_PassSkill3[21],2);
		SaveData[x+20] = NtoS2(n_A_PassSkill3[31],1);
		SaveData[x+21] = NtoS2(n_A_PassSkill3[22],2);
		SaveData[x+22] = NtoS2(n_A_PassSkill3[29],2);
		SaveData[x+23] = NtoS2(n_A_PassSkill3[32],1);
		SaveData[x+24] = NtoS2(n_A_PassSkill3[23],2);
		SaveData[x+25] = NtoS2(n_A_PassSkill3[33],1);
		SaveData[x+26] = NtoS2(n_A_PassSkill3[24],2);
		SaveData[x+27] = NtoS2(n_A_PassSkill3[34],1);
		SaveData[x+28] = NtoS2(n_A_PassSkill3[25],2);
		SaveData[x+29] = NtoS2(n_A_PassSkill3[35],1);
		SaveData[x+30] = NtoS2(n_A_PassSkill3[26],2);
		SaveData[x+31] = NtoS2(n_A_PassSkill3[36],1);
		x+=31;
	}

	if(checkHIT[1]){
		SaveData[x+1] = NtoS01(n_A_PassSkill3[40],0,0,0,0);
		SaveData[x+2] = NtoS05(n_A_PassSkill3[41],n_A_PassSkill3[42]);
		SaveData[x+3] = NtoS05(n_A_PassSkill3[43],n_A_PassSkill3[44]);
		x+=3;
	}

	if(checkHIT[2]){
		SaveData[x+1] = NtoS01(n_A_PassSkill5[0],n_A_PassSkill5[1],n_A_PassSkill5[2],n_A_PassSkill5[3],n_A_PassSkill5[4]);
		SaveData[x+2] = NtoS01(n_A_PassSkill5[5],0,0,0,0);
		x+=2;
	}

	if(checkHIT[3]){
		SaveData[x+1] = NtoS05(n_A_PassSkill6[0],n_A_PassSkill6[1]);
		SaveData[x+2] = NtoS05(n_A_PassSkill6[2],n_A_PassSkill6[4]);
		SaveData[x+3] = NtoS05(n_A_PassSkill6[5],0);
		SaveData[x+4] = NtoS2(n_A_PassSkill6[3],1);
		SaveData[x+5] = NtoS01(n_A_PassSkill6[6],0,0,0,0);
		x+=5;
	}

	if(checkHIT[4]){
		SaveData[x+1] = NtoS2(n_A_PassSkill7[3],2);
		SaveData[x+2] = NtoS2(n_A_PassSkill7[4],2);
		SaveData[x+3] = NtoS2(n_A_PassSkill7[5],2);
		SaveData[x+4] = NtoS2(n_A_PassSkill7[6],2);
		SaveData[x+5] = NtoS2(n_A_PassSkill7[7],2);
		SaveData[x+6] = NtoS2(n_A_PassSkill7[8],2);
		SaveData[x+7] = NtoS01(n_A_PassSkill7[0],n_A_PassSkill7[1],n_A_PassSkill7[2],n_A_PassSkill7[9],n_A_PassSkill7[10]);
		SaveData[x+8] = NtoS01(n_A_PassSkill7[11],n_A_PassSkill7[12],n_A_PassSkill7[13],n_A_PassSkill7[14],n_A_PassSkill7[15]);
		x+=8;
	}

	SaveData[x+1] = NtoS2(eval(document.calcForm.Conf01.value),2);
	x+=1;

	SaveData[x+1] = NtoS2(eval(document.calcForm.A_HSE.value),2);
	x+=1;
	SaveData[x+1] = NtoS2(eval(document.calcForm.A_HSE_HEAD1.value),2);
	x+=1;
	
	wStr = "" +SaveData[0];
	for(i=1;i<=x;i++){
		wStr += ""+SaveData[i];
	}
	var w = location.href.split("?");
	URL_TEXT2 = w[0] +"?"+ wStr;
	
	 window.location = URL_TEXT2.replace('calcx.htm', 'pvp.html');
}}




//pvp nonsense ends here


function URLOUT(){
with(document.calcForm){
	calc();
	SaveData = new Array();

	for(var i=0;i<=89;i++)
		SaveData[i]="a";

	SaveData[0] = NtoS2(2,1);
	SaveData[1] = NtoS2(eval(A_JOB.value),2);
	SaveData[2] = NtoS2(eval(A_BaseLV.value),2);
	SaveData[3] = NtoS2(eval(A_JobLV.value),2);
	SaveData[4] = NtoS2(eval(A_STR.value),2);
	SaveData[5] = NtoS2(eval(A_AGI.value),2);
	SaveData[6] = NtoS2(eval(A_VIT.value),2);
	SaveData[7] = NtoS2(eval(A_DEX.value),2);
	SaveData[8] = NtoS2(eval(A_INT.value),2);
	SaveData[9] = NtoS2(eval(A_LUK.value),2);
	SaveData[10] = NtoS2(eval(A_SpeedPOT.value) * 10 + eval(A_Weapon_zokusei.value),1);

	SaveData[11] = NtoS2(eval(A_WeaponType.value),1);
	if(n_Nitou)
		SaveData[12] = NtoS2(eval(A_Weapon2Type.value),1);

	if(n_A_JobSearch()==2 || n_A_JobSearch()==4 || (n_A_JOB==45 && n_A_WeaponType!=0))
		SaveData[13] = NtoS2(eval(A_Arrow.value),1);

	SaveData[14] = NtoS2(eval(A_weapon1.value),2);
	SaveData[15] = NtoS2(eval(A_Weapon_ATKplus.value),1);
	SaveData[16] = NtoS2(eval(A_weapon1_card1.value),2);
	SaveData[17] = NtoS2(eval(A_weapon1_card2.value),2);
	SaveData[18] = NtoS2(eval(A_weapon1_card3.value),2);
	SaveData[19] = NtoS2(eval(A_weapon1_card4.value),2);
	if(n_Nitou){
		SaveData[20] = NtoS2(eval(A_weapon2.value),2);
		SaveData[21] = NtoS2(eval(A_Weapon2_ATKplus.value),1);
		SaveData[22] = NtoS2(eval(A_weapon2_card1.value),2);
		SaveData[23] = NtoS2(eval(A_weapon2_card2.value),2);
		SaveData[24] = NtoS2(eval(A_weapon2_card3.value),2);
		SaveData[25] = NtoS2(eval(A_weapon2_card4.value),2);
	}else{
		SaveData[20] = NtoS2(eval(A_left.value),2);
		SaveData[21] = NtoS2(eval(A_LEFT_DEF_PLUS.value),1);
		SaveData[22] = NtoS2(eval(A_left_card.value),2);
		SaveData[24] = SaveData[25] = SaveData[23] = NtoS2(0,2);;
	}
	SaveData[26] = NtoS2(eval(A_head1.value),2);
	SaveData[27] = NtoS2(eval(A_head1_card.value),2);
	SaveData[28] = NtoS2(eval(A_head2.value),2);
	SaveData[29] = NtoS2(eval(A_head2_card.value),2);
	SaveData[30] = NtoS2(eval(A_head3.value),2);
	SaveData[31] = NtoS2(eval(A_body.value),2);
	SaveData[32] = NtoS2(eval(A_body_card.value),2);
	SaveData[33] = NtoS2(eval(A_shoulder.value),2);
	SaveData[34] = NtoS2(eval(A_shoulder_card.value),2);
	SaveData[35] = NtoS2(eval(A_shoes.value),2);
	SaveData[36] = NtoS2(eval(A_shoes_card.value),2);
	SaveData[37] = NtoS2(eval(A_acces1.value),2);
	SaveData[38] = NtoS2(eval(A_acces1_card.value),2);
	SaveData[39] = NtoS2(eval(A_acces2.value),2);
	SaveData[40] = NtoS2(eval(A_acces2_card.value),2);
	SaveData[41] = NtoS2(eval(A_HEAD_DEF_PLUS.value),1);
	SaveData[42] = NtoS2(eval(A_BODY_DEF_PLUS.value),1);
	SaveData[43] = NtoS2(eval(A_SHOULDER_DEF_PLUS.value),1);
	SaveData[44] = NtoS2(eval(A_SHOES_DEF_PLUS.value),1);
	SaveData[45] = NtoS01(A_youshi.checked,0,0,0,0);

	n_A_JobSet();
	var w = n_A_JOB;

	var ch = 0;
	for(var i=0;i<=19 && ch==0;i++){
		if(JobSkillPassOBJ[w][i]!=999){
			var wOBJ = document.getElementById("A_skill"+i);
			SaveData[47+i] = NtoS2(eval(wOBJ.value),1);
		}else{
			SaveData[46] = NtoS2(i,1);
			ch = 1;
		}
	}

	var x = 47 + i - 1;
	for(var i=0;i<=14 && n_A_PassSkill2[i]==0;i++);
	if(i==15){
		SaveData[x] = NtoS2(0,1);
	}else{
		SaveData[x] = NtoS2(1,1);
		SaveData[x+1] = NtoS2(n_A_PassSkill2[0],1);
		SaveData[x+2] = NtoS2(n_A_PassSkill2[1],1);
		SaveData[x+3] = NtoS2(n_A_PassSkill2[4],1);
		SaveData[x+4] = NtoS2(n_A_PassSkill2[9],1);
		SaveData[x+5] = NtoS05(n_A_PassSkill2[2],n_A_PassSkill2[6]);
		SaveData[x+6] = NtoS05(n_A_PassSkill2[8],n_A_PassSkill2[10]);
		SaveData[x+7] = NtoS05(n_A_PassSkill2[13],n_A_PassSkill2[14]);
		SaveData[x+8] = NtoS01(n_A_PassSkill2[3],n_A_PassSkill2[5],n_A_PassSkill2[7],n_A_PassSkill2[11],n_A_PassSkill2[12]);
		x += 8;
	}

	SaveData[x+1] = NtoS2(A_ActiveSkill.value,2);


		SaveData[x+2] = NtoS2(eval(A_ActiveSkillLV.value),1);
	SaveData[x+3] = NtoS2(0,3);
	if(n_A_ActiveSkill==66 || n_A_ActiveSkill==326 || n_A_ActiveSkill==131 || n_A_ActiveSkill==88 || n_A_ActiveSkill==197 || n_A_ActiveSkill==394 || n_A_ActiveSkill==395 || n_A_ActiveSkill==405 || n_A_ActiveSkill==429)
		SaveData[x+3] = NtoS2(eval(SkillSubNum.value),3);
	SaveData[x+4] = NtoS2(n_B[0],2);
	x+=4;

	x+=1;
	for(var i=0;i<=24 && n_B_IJYOU[i]==0;i++);
	if(i==25){
		SaveData[x] = NtoS2(0,1);
	}else{
		SaveData[x] = NtoS2(1,1);
		SaveData[x+1] = NtoS2(n_B_IJYOU[0],1);
		SaveData[x+2] = NtoS05(n_B_IJYOU[1],n_B_IJYOU[18]);
		SaveData[x+3] = NtoS01(n_B_IJYOU[2],n_B_IJYOU[3],n_B_IJYOU[4],n_B_IJYOU[5],n_B_IJYOU[6]);
		SaveData[x+4] = NtoS01(n_B_IJYOU[7],n_B_IJYOU[8],n_B_IJYOU[9],n_B_IJYOU[10],n_B_IJYOU[19]);
		SaveData[x+5] = NtoS2(n_B_IJYOU[11],1);
		SaveData[x+6] = NtoS2(n_B_IJYOU[12],1);
		SaveData[x+7] = NtoS01(n_B_IJYOU[13],n_B_IJYOU[14],n_B_IJYOU[15],n_B_IJYOU[16],n_B_IJYOU[17]);
		SaveData[x+8] = NtoS01(n_B_IJYOU[20],n_B_IJYOU[21],n_B_IJYOU[22],0,0);
		SaveData[x+9] = NtoS05(n_B_IJYOU[23],n_B_IJYOU[24]);
		x+=9;
	}

	x+=1;
	for(var i=0;i<=9 && n_B_KYOUKA[i]==0;i++);
	if(i==10){
		SaveData[x] = NtoS2(0,1);
	}else{
		SaveData[x] = NtoS2(1,1);
		SaveData[x+1] = NtoS2(n_B_KYOUKA[0],1);
		SaveData[x+2] = NtoS01(n_B_KYOUKA[1],n_B_KYOUKA[2],n_B_KYOUKA[3],n_B_KYOUKA[4],n_B_KYOUKA[5]);
		SaveData[x+3] = NtoS2(n_B_KYOUKA[6],2);
		SaveData[x+4] = NtoS05(n_B_KYOUKA[7],n_B_KYOUKA[8]);
		SaveData[x+5] = NtoS01(n_B_KYOUKA[9],0,0,0,0);
		x+=5;
	}

	x+=1;
	var checkHIT = [0,0,0,0,0];
	for(var i=0;i<=36 && n_A_PassSkill3[i]==0;i++);
	if(i!=37)
		checkHIT[0] = 1;
	for(i=0;i<=4 && n_A_PassSkill3[40+i]==0;i++);
	if(i!=5)
		checkHIT[1] = 1;
	for(i=0;i<=5 && n_A_PassSkill5[i]==0;i++);
	if(i!=6)
		checkHIT[2] = 1;
	for(i=0;i<=6 && n_A_PassSkill6[i]==0;i++);
	if(i!=7)
		checkHIT[3] = 1;
	for(i=0;i<=15 && n_A_PassSkill7[i]==0;i++);
	if(i!=16)
		checkHIT[4] = 1;
	SaveData[x] = NtoS01(checkHIT[0],checkHIT[1],checkHIT[2],checkHIT[3],checkHIT[4]);

	if(checkHIT[0]){
		SaveData[x+1] = NtoS2(n_A_PassSkill3[0],1);
		SaveData[x+2] = NtoS2(n_A_PassSkill3[1],1);
		SaveData[x+3] = NtoS2(n_A_PassSkill3[2],1);
		SaveData[x+4] = NtoS2(n_A_PassSkill3[3],1);
		SaveData[x+5] = NtoS2(n_A_PassSkill3[4],1);
		SaveData[x+6] = NtoS2(n_A_PassSkill3[5],1);
		SaveData[x+7] = NtoS2(n_A_PassSkill3[6],1);
		SaveData[x+8] = NtoS05(n_A_PassSkill3[7],n_A_PassSkill3[8]);
		SaveData[x+9] = NtoS05(n_A_PassSkill3[9],n_A_PassSkill3[10]);
		SaveData[x+10] = NtoS01(n_A_PassSkill3[11],n_A_PassSkill3[18],0,0,0);
		SaveData[x+11] = NtoS2(n_A_PassSkill3[12],2);
		SaveData[x+12] = NtoS2(n_A_PassSkill3[13],2);
		SaveData[x+13] = NtoS2(n_A_PassSkill3[14],2);
		SaveData[x+14] = NtoS2(n_A_PassSkill3[15],2);
		SaveData[x+15] = NtoS2(n_A_PassSkill3[16],2);
		SaveData[x+16] = NtoS2(n_A_PassSkill3[17],2);
		SaveData[x+17] = NtoS2(n_A_PassSkill3[20],2);
		SaveData[x+18] = NtoS2(n_A_PassSkill3[30],1);
		SaveData[x+19] = NtoS2(n_A_PassSkill3[21],2);
		SaveData[x+20] = NtoS2(n_A_PassSkill3[31],1);
		SaveData[x+21] = NtoS2(n_A_PassSkill3[22],2);
		SaveData[x+22] = NtoS2(n_A_PassSkill3[29],2);
		SaveData[x+23] = NtoS2(n_A_PassSkill3[32],1);
		SaveData[x+24] = NtoS2(n_A_PassSkill3[23],2);
		SaveData[x+25] = NtoS2(n_A_PassSkill3[33],1);
		SaveData[x+26] = NtoS2(n_A_PassSkill3[24],2);
		SaveData[x+27] = NtoS2(n_A_PassSkill3[34],1);
		SaveData[x+28] = NtoS2(n_A_PassSkill3[25],2);
		SaveData[x+29] = NtoS2(n_A_PassSkill3[35],1);
		SaveData[x+30] = NtoS2(n_A_PassSkill3[26],2);
		SaveData[x+31] = NtoS2(n_A_PassSkill3[36],1);
		x+=31;
	}

	if(checkHIT[1]){
		SaveData[x+1] = NtoS01(n_A_PassSkill3[40],0,0,0,0);
		SaveData[x+2] = NtoS05(n_A_PassSkill3[41],n_A_PassSkill3[42]);
		SaveData[x+3] = NtoS05(n_A_PassSkill3[43],n_A_PassSkill3[44]);
		x+=3;
	}

	if(checkHIT[2]){
		SaveData[x+1] = NtoS01(n_A_PassSkill5[0],n_A_PassSkill5[1],n_A_PassSkill5[2],n_A_PassSkill5[3],n_A_PassSkill5[4]);
		SaveData[x+2] = NtoS01(n_A_PassSkill5[5],0,0,0,0);
		x+=2;
	}

	if(checkHIT[3]){
		SaveData[x+1] = NtoS05(n_A_PassSkill6[0],n_A_PassSkill6[1]);
		SaveData[x+2] = NtoS05(n_A_PassSkill6[2],n_A_PassSkill6[4]);
		SaveData[x+3] = NtoS05(n_A_PassSkill6[5],0);
		SaveData[x+4] = NtoS2(n_A_PassSkill6[3],1);
		SaveData[x+5] = NtoS01(n_A_PassSkill6[6],0,0,0,0);
		x+=5;
	}

	if(checkHIT[4]){
		SaveData[x+1] = NtoS2(n_A_PassSkill7[3],2);
		SaveData[x+2] = NtoS2(n_A_PassSkill7[4],2);
		SaveData[x+3] = NtoS2(n_A_PassSkill7[5],2);
		SaveData[x+4] = NtoS2(n_A_PassSkill7[6],2);
		SaveData[x+5] = NtoS2(n_A_PassSkill7[7],2);
		SaveData[x+6] = NtoS2(n_A_PassSkill7[8],2);
		SaveData[x+7] = NtoS01(n_A_PassSkill7[0],n_A_PassSkill7[1],n_A_PassSkill7[2],n_A_PassSkill7[9],n_A_PassSkill7[10]);
		SaveData[x+8] = NtoS01(n_A_PassSkill7[11],n_A_PassSkill7[12],n_A_PassSkill7[13],n_A_PassSkill7[14],n_A_PassSkill7[15]);
		x+=8;
	}

	SaveData[x+1] = NtoS2(eval(document.calcForm.Conf01.value),2);
	x+=1;

	SaveData[x+1] = NtoS2(eval(document.calcForm.A_HSE.value),2);
	x+=1;
	SaveData[x+1] = NtoS2(eval(document.calcForm.A_HSE_HEAD1.value),2);
	x+=1;
	
	wStr = "" +SaveData[0];
	for(i=1;i<=x;i++){
		wStr += ""+SaveData[i];
	}


cne2 = document.calcForm.charname.value;
	
	var w = location.href.split("?");
	URL_TEXT.value = w[0] +"?"+ wStr+ "&"+cne2;
}}

function StoNx(n){
	n += "";
	for(var i=0;i<=61;i++)
		if(n == n_NtoS2[i])
			return i;
}

function StoN2(n){
	n += "";
	var keta = n.length;
	if(keta == 3){
		var w = n.charAt(0);
		var x = StoNx(w) * 62 * 62;
		w = n.charAt(1);
		x += StoNx(w) * 62;
		w = n.charAt(2);
		x += StoNx(w);
	}else if(keta == 2){
		var w = n.charAt(0);
		var x = StoNx(w) * 62;
		w = n.charAt(1);
		x += StoNx(w);
	}else{
		var w = n.charAt(0);
		var x = StoNx(w);
	}
	return x;
}

function URLIN(){
with(document.calcForm){
	var r = /\?/;
	var w = location.href.match(r);
	if(w){
		var SaveData = new Array();
		SaveData = location.href.split("?");
		var w = SaveData[1];

		if(StoN2(w.substr(1,2)) == 20 && StoN2(w.substr(90,1)))
			SuperNoviceFullWeaponCHECK = 1;
		else
			SuperNoviceFullWeaponCHECK = 0;
		var w_Version = StoN2(w.substr(0,1));
		A_JOB.value = StoN2(w.substr(1,2));
		ClickJob(StoN2(w.substr(1,2)),2);
		A_BaseLV.value = StoN2(w.substr(3,2));
		A_JobLV.value = StoN2(w.substr(5,2));
		A_STR.value = StoN2(w.substr(7,2));
		A_AGI.value = StoN2(w.substr(9,2));
		A_VIT.value = StoN2(w.substr(11,2));
		A_DEX.value = StoN2(w.substr(13,2));
		A_INT.value = StoN2(w.substr(15,2));
		A_LUK.value = StoN2(w.substr(17,2));
		A_SpeedPOT.value = Math.floor(StoN2(w.substr(19,1)) / 10);
		A_Weapon_zokusei.value = StoN2(w.substr(19,1)) % 10;
		A_WeaponType.value = StoN2(w.substr(20,1));

		ClickWeaponType(A_WeaponType.value);
		if((A_JOB.value == 8 || A_JOB.value == 22) && A_WeaponType.value != 11){
			A_Weapon2Type.value = StoN2(w.substr(21,1));
			ClickWeaponType2(A_Weapon2Type.value);
		}
		n_A_JobSet();

		if(n_A_JobSearch()==2 || n_A_JobSearch()==4 || (n_A_JOB==45 && n_A_WeaponType!=0))
			A_Arrow.value = StoN2(w.substr(22,1));
		A_weapon1.value = StoN2(w.substr(23,2));
		A_Weapon_ATKplus.value = StoN2(w.substr(25,1));
		A_weapon1_card1.value = StoN2(w.substr(26,2));
		A_weapon1_card2.value = StoN2(w.substr(28,2));
		A_weapon1_card3.value = StoN2(w.substr(30,2));
		A_weapon1_card4.value = StoN2(w.substr(32,2));
		if(n_Nitou){
			A_weapon2.value = StoN2(w.substr(34,2));
			A_Weapon2_ATKplus.value = StoN2(w.substr(36,1));
			A_weapon2_card1.value = StoN2(w.substr(37,2));
			A_weapon2_card2.value = StoN2(w.substr(39,2));
			A_weapon2_card3.value = StoN2(w.substr(41,2));
			A_weapon2_card4.value = StoN2(w.substr(43,2));
		}else{
			A_left.value = StoN2(w.substr(34,2));
			A_LEFT_DEF_PLUS.value = StoN2(w.substr(36,1));
			A_left_card.value = StoN2(w.substr(37,2));
		}
		A_head1.value = StoN2(w.substr(45,2));
		A_head1_card.value = StoN2(w.substr(47,2));
		A_head2.value = StoN2(w.substr(49,2));
		A_head2_card.value = StoN2(w.substr(51,2));
		A_head3.value = StoN2(w.substr(53,2));
		A_body.value = StoN2(w.substr(55,2));
		A_body_card.value = StoN2(w.substr(57,2));
		A_shoulder.value = StoN2(w.substr(59,2));
		A_shoulder_card.value = StoN2(w.substr(61,2));
		A_shoes.value = StoN2(w.substr(63,2));
		A_shoes_card.value = StoN2(w.substr(65,2));
		A_acces1.value = StoN2(w.substr(67,2));
		A_acces1_card.value = StoN2(w.substr(69,2));
		A_acces2.value = StoN2(w.substr(71,2));
		A_acces2_card.value = StoN2(w.substr(73,2));
		A_HEAD_DEF_PLUS.value = StoN2(w.substr(75,1));
		A_BODY_DEF_PLUS.value = StoN2(w.substr(76,1));
		A_SHOULDER_DEF_PLUS.value = StoN2(w.substr(77,1));
		A_SHOES_DEF_PLUS.value = StoN2(w.substr(78,1));
		var wn = StoN2(w.substr(79,1));
		A_youshi.checked = Math.floor(wn / 16);

		var max = StoN2(w.substr(80,1));
		for(var i=0;i<max;i++){
			var wOBJ = document.getElementById("A_skill"+i);
			wOBJ.value = StoN2(w.substr(81+i,1));
		}

		var x = 81 + i;
		if(StoN2(w.substr(x,1)) == 1){
			n_A_PassSkill2[0] = StoN2(w.substr(x+1,1));
			n_A_PassSkill2[1] = StoN2(w.substr(x+2,1));
			n_A_PassSkill2[4] = StoN2(w.substr(x+3,1));
			n_A_PassSkill2[9] = StoN2(w.substr(x+4,1));
			n_A_PassSkill2[2] = Math.floor(StoN2(w.substr(x+5,1)) / 6);
			n_A_PassSkill2[6] = StoN2(w.substr(x+5,1)) % 6;
			n_A_PassSkill2[8] = Math.floor(StoN2(w.substr(x+6,1)) / 6);
			n_A_PassSkill2[10] = StoN2(w.substr(x+6,1)) % 6;
			n_A_PassSkill2[13] = Math.floor(StoN2(w.substr(x+7,1)) / 6);
			n_A_PassSkill2[14] = StoN2(w.substr(x+7,1)) % 6;
			var wn = StoN2(w.substr(x+8,1));
			n_A_PassSkill2[3] = Math.floor(wn / 16);
			n_A_PassSkill2[5] = Math.floor(wn % 16 / 8);
			n_A_PassSkill2[7] = Math.floor(wn % 8 / 4);
			n_A_PassSkill2[11] = Math.floor(wn % 4 / 2);
			n_A_PassSkill2[12] = Math.floor(wn % 2 / 1);
			x+=8;
		}


		var BackupX = x;
/*		A_ActiveSkill.value = StoN2(w.substr(x+1,2));

		ClickActiveSkill();
		A_ActiveSkillLV.value = StoN2(w.substr(x+3,1));

		if(n_A_ActiveSkill==66 || n_A_ActiveSkill==326 || n_A_ActiveSkill==131 || n_A_ActiveSkill==88 || n_A_ActiveSkill==197 || n_A_ActiveSkill==394 || n_A_ActiveSkill==395 || n_A_ActiveSkill==405)
			SkillSubNum.value = StoN2(w.substr(x+4,3));

		B_Enemy.value = StoN2(w.substr(x+7,2));

*/		x+=8;

		x+=1;
		if(StoN2(w.substr(x,1)) == 1){
			n_B_IJYOU[0] = StoN2(w.substr(x+1,1));
			n_B_IJYOU[1] = Math.floor(StoN2(w.substr(x+2,1)) / 6);
			n_B_IJYOU[18] = StoN2(w.substr(x+2,1)) % 6;
			var wn = StoN2(w.substr(x+3,1));
			n_B_IJYOU[2] = Math.floor(wn / 16);
			n_B_IJYOU[3] = Math.floor(wn % 16 / 8);
			n_B_IJYOU[4] = Math.floor(wn % 8 / 4);
			n_B_IJYOU[5] = Math.floor(wn % 4 / 2);
			n_B_IJYOU[6] = Math.floor(wn % 2 / 1);
			wn = StoN2(w.substr(x+4,1));
			n_B_IJYOU[7] = Math.floor(wn / 16);
			n_B_IJYOU[8] = Math.floor(wn % 16 / 8);
			n_B_IJYOU[9] = Math.floor(wn % 8 / 4);
			n_B_IJYOU[10] = Math.floor(wn % 4 / 2);
			n_B_IJYOU[19] = Math.floor(wn % 2 / 1);
			n_B_IJYOU[11] = StoN2(w.substr(x+5,1));
			n_B_IJYOU[12] = StoN2(w.substr(x+6,1));
			wn = StoN2(w.substr(x+7,1));
			n_B_IJYOU[13] = Math.floor(wn / 16);
			n_B_IJYOU[14] = Math.floor(wn % 16 / 8);
			n_B_IJYOU[15] = Math.floor(wn % 8 / 4);
			n_B_IJYOU[16] = Math.floor(wn % 4 / 2);
			n_B_IJYOU[17] = Math.floor(wn % 2 / 1);
			wn = StoN2(w.substr(x+8,1));
			n_B_IJYOU[20] = Math.floor(wn / 16);
			n_B_IJYOU[21] = Math.floor(wn % 16 / 8);
			n_B_IJYOU[22] = Math.floor(wn % 8 / 4);
			n_B_IJYOU[23] = Math.floor(StoN2(w.substr(x+9,1)) / 6);
			n_B_IJYOU[24] = StoN2(w.substr(x+9,1)) % 6;
			x+=9;
		}

		x+=1;
		if(StoN2(w.substr(x,1)) == 1){
			n_B_KYOUKA[0] = StoN2(w.substr(x+1,1));
			var wn = StoN2(w.substr(x+2,1));
			n_B_KYOUKA[1] = Math.floor(wn / 16);
			n_B_KYOUKA[2] = Math.floor(wn % 16 / 8);
			n_B_KYOUKA[3] = Math.floor(wn % 8 / 4);
			n_B_KYOUKA[4] = Math.floor(wn % 4 / 2);
			n_B_KYOUKA[5] = Math.floor(wn % 2 / 1);
			n_B_KYOUKA[6] = StoN2(w.substr(x+3,2));
			n_B_KYOUKA[7] = Math.floor(StoN2(w.substr(x+5,1)) / 6);
			n_B_KYOUKA[8] = StoN2(w.substr(x+5,1)) % 6;
			wn = StoN2(w.substr(x+6,1));
			n_B_KYOUKA[9] = Math.floor(wn / 16);
			x += 6;
		}

		var checkHIT = [0,0,0,0,0];
		wn = StoN2(w.substr(x+1,1));
		checkHIT[0] = Math.floor(wn / 16);
		checkHIT[1] = Math.floor(wn % 16 / 8);
		checkHIT[2] = Math.floor(wn % 8 / 4);
		checkHIT[3] = Math.floor(wn % 4 / 2);
		checkHIT[4] = Math.floor(wn % 2 / 1);
		x+=1;

		if(checkHIT[0]){
			n_A_PassSkill3[0] = StoN2(w.substr(x+1,1));
			n_A_PassSkill3[1] = StoN2(w.substr(x+2,1));
			n_A_PassSkill3[2] = StoN2(w.substr(x+3,1));
			n_A_PassSkill3[3] = StoN2(w.substr(x+4,1));
			n_A_PassSkill3[4] = StoN2(w.substr(x+5,1));
			n_A_PassSkill3[5] = StoN2(w.substr(x+6,1));
			n_A_PassSkill3[6] = StoN2(w.substr(x+7,1));
			n_A_PassSkill3[7] = Math.floor(StoN2(w.substr(x+8,1)) / 6);
			n_A_PassSkill3[8] = StoN2(w.substr(x+8,1)) % 6;
			n_A_PassSkill3[9] = Math.floor(StoN2(w.substr(x+9,1)) / 6);
			n_A_PassSkill3[10] = StoN2(w.substr(x+9,1)) % 6;
			n_A_PassSkill3[11] = Math.floor(StoN2(w.substr(x+10,1)) / 16);
			n_A_PassSkill3[18] = Math.floor(StoN2(w.substr(x+10,1)) % 16 / 8);
			n_A_PassSkill3[12] = StoN2(w.substr(x+11,2));
			n_A_PassSkill3[13] = StoN2(w.substr(x+13,2));
			n_A_PassSkill3[14] = StoN2(w.substr(x+15,2));
			n_A_PassSkill3[15] = StoN2(w.substr(x+17,2));
			n_A_PassSkill3[16] = StoN2(w.substr(x+19,2));
			n_A_PassSkill3[17] = StoN2(w.substr(x+21,2));
			n_A_PassSkill3[20] = StoN2(w.substr(x+23,2));
			n_A_PassSkill3[30] = StoN2(w.substr(x+25,1));
			n_A_PassSkill3[21] = StoN2(w.substr(x+26,2));
			n_A_PassSkill3[31] = StoN2(w.substr(x+28,1));
			n_A_PassSkill3[22] = StoN2(w.substr(x+29,2));
			n_A_PassSkill3[29] = StoN2(w.substr(x+31,2));
			n_A_PassSkill3[32] = StoN2(w.substr(x+33,1));
			n_A_PassSkill3[23] = StoN2(w.substr(x+34,2));
			n_A_PassSkill3[33] = StoN2(w.substr(x+36,1));
			n_A_PassSkill3[24] = StoN2(w.substr(x+37,2));
			n_A_PassSkill3[34] = StoN2(w.substr(x+39,1));
			n_A_PassSkill3[25] = StoN2(w.substr(x+40,2));
			n_A_PassSkill3[35] = StoN2(w.substr(x+42,1));
			n_A_PassSkill3[26] = StoN2(w.substr(x+43,2));
			n_A_PassSkill3[36] = StoN2(w.substr(x+45,1));
			x+=45;
		}

		if(checkHIT[1]){
			var wn = StoN2(w.substr(x+1,1));
			n_A_PassSkill3[40] = Math.floor(wn / 16);
			n_A_PassSkill3[41] = Math.floor(StoN2(w.substr(x+2,1)) / 6);
			n_A_PassSkill3[42] = StoN2(w.substr(x+2,1)) % 6;
			n_A_PassSkill3[43] = Math.floor(StoN2(w.substr(x+3,1)) / 6);
			n_A_PassSkill3[44] = StoN2(w.substr(x+3,1)) % 6;
			x+=3;
		}

		if(checkHIT[2]){
			wn = StoN2(w.substr(x+1,1));
			n_A_PassSkill5[0] = Math.floor(wn / 16);
			n_A_PassSkill5[1] = Math.floor(wn % 16 / 8);
			n_A_PassSkill5[2] = Math.floor(wn % 8 / 4);
			n_A_PassSkill5[3] = Math.floor(wn % 4 / 2);
			n_A_PassSkill5[4] = Math.floor(wn % 2 / 1);
			wn = StoN2(w.substr(x+2,1));
			n_A_PassSkill5[5] = Math.floor(wn / 16);
			x+=2;
		}

		if(checkHIT[3]){
			n_A_PassSkill6[0] = Math.floor(StoN2(w.substr(x+1,1)) / 6);
			n_A_PassSkill6[1] = StoN2(w.substr(x+1,1)) % 6;
			n_A_PassSkill6[2] = Math.floor(StoN2(w.substr(x+2,1)) / 6);
			n_A_PassSkill6[4] = StoN2(w.substr(x+2,1)) % 6;
			n_A_PassSkill6[5] = Math.floor(StoN2(w.substr(x+3,1)) / 6);
			n_A_PassSkill6[3] = StoN2(w.substr(x+4,1));
			wn = StoN2(w.substr(x+5,1));
			n_A_PassSkill6[6] = Math.floor(wn / 16);
			x+=5;
		}

		if(checkHIT[4]){
			n_A_PassSkill7[3] = StoN2(w.substr(x+1,2));
			n_A_PassSkill7[4] = StoN2(w.substr(x+3,2));
			n_A_PassSkill7[5] = StoN2(w.substr(x+5,2));
			n_A_PassSkill7[6] = StoN2(w.substr(x+7,2));
			n_A_PassSkill7[7] = StoN2(w.substr(x+9,2));
			n_A_PassSkill7[8] = StoN2(w.substr(x+11,2));
			wn = StoN2(w.substr(x+13,1));
			n_A_PassSkill7[0] = Math.floor(wn / 16);
			n_A_PassSkill7[1] = Math.floor(wn % 16 / 8);
			n_A_PassSkill7[2] = Math.floor(wn % 8 / 4);
			n_A_PassSkill7[9] = Math.floor(wn % 4 / 2);
			n_A_PassSkill7[10] = Math.floor(wn % 2 / 1);
			wn = StoN2(w.substr(x+14,1));
			n_A_PassSkill7[11] = Math.floor(wn / 16);
			n_A_PassSkill7[12] = Math.floor(wn % 16 / 8);
			n_A_PassSkill7[13] = Math.floor(wn % 8 / 4);
			n_A_PassSkill7[14] = Math.floor(wn % 4 / 2);
			n_A_PassSkill7[15] = Math.floor(wn % 2 / 1);
			x+=14;
		}

		document.calcForm.Conf01.value = StoN2(w.substr(x+1,2));
		x+=2;
		if(w_Version >= 1){
			document.calcForm.A_HSE.value = StoN2(w.substr(x+1,2));
			x+=2;
		}
		if(w_Version >= 2){
			document.calcForm.A_HSE_HEAD1.value = StoN2(w.substr(x+1,2));
			x+=2;
		}

		calc();

		StCalc(1);

		ActiveSkillSetPlus();
		x = BackupX;
		A_ActiveSkill.value = StoN2(w.substr(x+1,2));

		ClickActiveSkill();
		A_ActiveSkillLV.value = StoN2(w.substr(x+3,1));

		if(n_A_ActiveSkill==66 || n_A_ActiveSkill==326 || n_A_ActiveSkill==131 || n_A_ActiveSkill==88 || n_A_ActiveSkill==197 || n_A_ActiveSkill==394 || n_A_ActiveSkill==395 || n_A_ActiveSkill==405 || n_A_ActiveSkill==429)
			SkillSubNum.value = StoN2(w.substr(x+4,3));

		B_Enemy.value = StoN2(w.substr(x+7,2));


		calc();
	}
}}

JobName =
["Novice","Swordsman","Thief","Acolyte","Archer","Magician","Merchant","Knight","Assassin","Priest","Hunter","Wizard","Blacksmith","Crusader","Rogue","Monk","Bard","Dancer","Sage","Alchemist",
"Super Novice","Lord Knight","Assassin Cross","High Priest","Sniper","High Wizard","Whitesmith","Paladin","Stalker","Champion","Clown","Gypsy","Scholar","Creator",
"High Novice","High Swordsman","High Thief","High Acolyte","High Archer","High Magician","High Merchant","Taekwon Kid","Taekwon Master","Soul Linker","Ninja","Gunslinger"];

for (i=0;i<=45;i++)
	document.calcForm.A_JOB.options[i] = new Option(JobName[i],i);

SpeedPotName = ["None","Concentration Potion","Awakening Potion","Berserk Potion"];

document.calcForm.A_SpeedPOT.options[0] = new Option(SpeedPotName[0],0);
document.calcForm.A_SpeedPOT.options[1] = new Option(SpeedPotName[1],1);

for (i=0;i<=16;i++)
	document.calcForm.A_Arrow.options[i] = new Option(ArrowOBJ[i][2],i);

EnName =["Neutral","Water","Earth","Fire","Wind","Poison","Holy","Dark","Ghost","Undead"];
for (i=0;i<=9;i++)
	document.calcForm.A_Weapon_zokusei.options[i] = new Option(EnName[i],i);

CardShort =[
["Card Shortcuts",0,0,0,0],
["Remove All Cards",10000,0],
["Remove Weapon Cards",0,0,0,0],
["+20%",1,0,0,0],
["+40%",1,1,0,0],
["+60%",1,1,1,0],
["+80%",1,1,1,1],
["Size Type 2x",3,3,0,0],
["Size Type 3x",3,3,3,0],
["Size Type 4x",3,3,3,3],
["Elemental + Star Crumb",0,106,0,0],
["Elemental + Star Crumb 2x",0,106,106,0],
["Star Crumb 3x",106,106,106,0],
["Andre 2x",11,11,0,0],
["Andre 3x",11,11,11,0],
["Andre 4x",11,11,11,11],
["Zipper Bear 2x",326,326,0,0],
["Zipper Bear 3x",326,326,326,0],
["Zipper Bear 4x",326,326,326,326],
["Soldier Skel 2x",41,41,0,0],
["Soldier Skel 3x",41,41,41,0],
["Soldier Skel 4x",41,41,41,41],
["Mummy 2x",40,40,0,0],
["Mummy 3x",40,40,40,0],
["Mummy 4x",40,40,40,40],
["+44%",1,2,0,0],
["+68%",1,1,2,0],
["+96%",1,1,2,2],
["Orc Lady 2x",252,252,0,0],
["Orc Lady 3x",252,252,13,0],
["Orc Lady 4x",252,252,252,13],
["Archer Skel 2x",107,107,0,0],
["Archer Skel 3x",107,107,107,0],
["Archer Skel 4x",107,107,107,107],
["Fabre 2x",4,4,0,0],
["Fabre 3x",4,4,4,0],
["Fabre 4x",4,4,4,4],
["Drops 2x",5,5,0,0],
["Drops 3x",5,5,5,0],
["Drops 4x",5,5,5,5],
["Abysmal Knight 2x",31,31,0,0],
["Abysmal Knight 3x",31,31,31,0],
["Abysmal Knight 4x",31,31,31,31],
["Crit Dmg+10%,Crit+7 2x",156,156,0,0],
["Crit Dmg+10%,Crit+7 3x",156,156,156,0],
["Crit Dmg+10%,Crit+7 4x",156,156,156,156],
["Swordsman Set",10000,223,347,0,317,0,362,354,0],
["Thief Set",10000,233,0,0,0,295,391,395,260],
["Aco Set",10000,253,383,307,301,0,0,270,0],
["Archer Set",10000,279,0,0,224,340,351,230,0],
["Mage Set",10000,0,337,358,220,346,379,350,0],
["Merchant Set",10000,326,376,0,281,0,388,216,0],
["Crusader Set",10000,0,347,0,190,0,362,354,0],
["Rogue Set",10000,0,113,0,0,295,391,260,413],
["Monk Set",10000,253,383,0,181,0,0,270,0],
["Bard/Dancer Set",10000,279,0,0,224,340,408,230,0],
["Sage Set",10000,0,337,0,193,346,379,350,0],
["Alchemist Set",10000,326,175,0,281,0,388,104,0],
["Test (for now)",0,0,0,0],
];
for(i=0;i<=56;i++)
	document.calcForm.A_cardshort.options[i] = new Option(CardShort[i][0],i);
	
var HSEname = ["STR","AGI","VIT","INT","DEX","LUK"];
document.calcForm.A_HSE.options[0] = new Option("(Hidden Enchant, Armor)",0);
var iHSE=1;
for(i=0;i<=5;i++){
	for(var j=1;j<=3;j++){
		document.calcForm.A_HSE.options[iHSE] = new Option(HSEname[i] + "+"+ j,(i * 10) + j);
		iHSE++;
	}
}
document.calcForm.A_HSE_HEAD1.options[0] = new Option("(Hidden Enchant, Headgear)",0);
var iHSE=1;
for(i=0;i<=5;i++){
	for(var j=1;j<=3;j++){
		document.calcForm.A_HSE_HEAD1.options[iHSE] = new Option(HSEname[i] + "+"+ j,(i * 10) + j);
		iHSE++;
	}
}


n_A_PassSkill2 = new Array();
for(i=0;i<=15;i++)
	n_A_PassSkill2[i] = 0;

n_A_PassSkill3 = new Array();
for(i=0;i<=45;i++)
	n_A_PassSkill3[i] = 0;
/*n_A_PassSkill3[20] = 100;
n_A_PassSkill3[21] = 100;
n_A_PassSkill3[22] = 130;
n_A_PassSkill3[29] = 80;
n_A_PassSkill3[23] = 100;
n_A_PassSkill3[24] = 130;
n_A_PassSkill3[25] = 50;
n_A_PassSkill3[26] = 50;
n_A_PassSkill3[30] = 10;
n_A_PassSkill3[31] = 10;
n_A_PassSkill3[32] = 10;
n_A_PassSkill3[33] = 10;
n_A_PassSkill3[34] = 10;
n_A_PassSkill3[35] = 10;
n_A_PassSkill3[36] = 10;
*/
n_A_PassSkill5 = new Array();
for(i=0;i<=5;i++)
	n_A_PassSkill5[i] = 0;

n_A_PassSkill6 = new Array();
for(i=0;i<=6;i++)
	n_A_PassSkill6[i] = 0;

n_A_PassSkill7 = new Array();
for(i=0;i<=15;i++)
	n_A_PassSkill7[i] = 0;

n_A_PassSkill8 = new Array();
for(i=0;i<=27;i++)
	n_A_PassSkill8[i] = 0;

n_A_IJYOU = new Array();
for(i=0;i<=3;i++)
	n_A_IJYOU[i] = 0;

n_B_IJYOU = new Array();
for(i=0;i<=24;i++)
	n_B_IJYOU[i] = 0;

n_B_KYOUKA = new Array();
for(i=0;i<=9;i++)
	n_B_KYOUKA[i] = 0;

n_A_Equip = new Array();
for(i=0;i<=20;i++)
	n_A_Equip[i] = 0;
n_A_card = new Array();
for(i=0;i<=25;i++)
	n_A_card[i] = 0;

tPlusTaiseiSyokia();

for(i=0;i<ITEM_SP_TIME_OBJ.length;i++){
	if(ITEM_SP_TIME_OBJ[i][3] == 1){
		var str = "<Font size='2'><B>(Special Effect: [" + ITEM_SP_TIME_OBJ[i][2] +"] can be activated under 'Additional Effects' at the bottom of the page!)</B></Font>";
		if(ItemOBJ[ITEM_SP_TIME_OBJ[i][4]][10] == 0)
			ItemOBJ[ITEM_SP_TIME_OBJ[i][4]][10] = str;
		else
			ItemOBJ[ITEM_SP_TIME_OBJ[i][4]][10] += "<BR>"+ str;
	}
}

for(i=0;i<ITEM_SP_TIME_OBJ.length;i++){
	if(ITEM_SP_TIME_OBJ[i][3] == 2){
		var str = "<Font size='2'><B>(Special Effect: [" + ITEM_SP_TIME_OBJ[i][2] +"] can be activated under 'Additional Effects' at the bottom of the page!)</B></Font>";
		if(cardOBJ[ITEM_SP_TIME_OBJ[i][4]][3] == 0)
			cardOBJ[ITEM_SP_TIME_OBJ[i][4]][3] = str;
		else
			cardOBJ[ITEM_SP_TIME_OBJ[i][4]][3] += "<BR>"+ str;
	}
}

document.calcForm.A_JOB.value = 0;
ClickJob(0);
if(Taijin==0)
	EnemySort();
StCalc();
calc();
LoadCookie3();
LoadCookieConf();
URLIN();

Click_Skill3SW();
Click_Skill4SW();
Click_Skill5SW();
Click_Skill6SW();
Click_Skill7SW();
Click_Skill8SW();


$("#jobp").change(function() {
// $('.jobber').css("background-image", 'url("img/' + this.value + '.png")');
//background: #ffffff url("img_tree.png") no-repeat right top;
 $('.jobber').css("background", 'url("img/' + this.value + '.png") no-repeat  450px 30px');

});


// C0piernoc0pying
function myFunction() {
  /* Get the text field */
  var copyText = document.getElementById("urltext");

  /* Select the text field */
  copyText.select();
  copyText.setSelectionRange(0, 99999); /* For mobile devices */

  /* Copy the text inside the text field */
  navigator.clipboard.writeText(copyText.value);
  
  /* Alert the copied text */
  alert("Copied the text: " + copyText.value);
}