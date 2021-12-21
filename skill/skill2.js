// original codes of clipboard-copy function are written by saeki nagi. 
// translated by Himeyasha & Yuna Kisaragi

var lnData = new Array(9);
var lstData = "";
var tmpData = "";


function dataCopy(){
	tmp = document.Option2.sdata.value;
	if(tmp != ""){
		window.clipboardData.setData("Text", tmp);
	}
}

function setSkillData(sklData){
	for (i = 0; i < 16; i++) lnData[i] = "";
	lstData = "";
	tmpData = "";
	j = 0;
	type = 1;
	space = " ";
	comma = ","
	line = "\n";
	if(!document.Option2.type.checked) type = 2;
	//if(!document.Option2.space.checked) space = " ";
	if(!document.Option2.comma.checked) comma = " ";
		if(!document.Option2.line.checked) line = " ";

	
	for (i = 0; i < sklData[0].length; i++){
		if ( sklData[0][i] > 0 ) {
			if (lenCheck(tmpData+sklData[type][i])>67){
				tmpData = "";
				j++;
			}
//				tmpData += " " + sklData[type][i] + space + sklData[0][i] + comma;
		     	tmpData += " " + sklData[type][i] +  space + sklData[0][i] + comma + line;
			lnData[j] = tmpData.replace(/^ /g,"");
		}
	}
	for(i = 0; i < 16; i++){
		if(lnData[i]) lstData += "\n" + lnData[i];
//		alert(lnData[i] + "\n" + lenCheck(lnData[i]));
	}
	lstData = lstData.replace(/^\n/g,"");
	lstData = lstData.replace(/  /g," ");
	document.Option2.sdata.value = lstData;
}

function lenCheck(str) {
	var len = str.length;
	var n = 0;
	var i;

	for(i = 0; i < len; i++)
		n += is_ie_zenkaku(str.charAt(i)) ? 2 : 1;
	return n;
}

// 文字列中に全角文字があるかチェック。半角カナは無視
function is_ie_zenkaku(c) {
	if(c.charCodeAt(0)>65395 && c.charCodeAt(0)<65440) return 0;
	return (escape(c).charAt(1) == "u");
}



function setArray(Job){

if(Job == "knt"){
	var arrData = [
		[HPRC_P, SWDM_P, THSD_P, BASH_P, MGBR_P, PRVK_P, ENDR_P, RIDE_P, CAVA_P,
			ACNT_P, THQK_P, BBSH_P, SPRM_P, PIRC_P, SSTB_P, SBML_P, BSPR_P],
		["HPR", "SWM", "2H Mastery", "Bash", "MB", "Provoke", "Endure", "Peco",
			"Peco Mastery", "Counter", "2HQ", "BB", "Spear Mastery", "Pierce", "Stab", "Boomerang", "Brandish"],
		["Increase HP recovery", "Sword Mastery", "2H Sword Mastery", "Bash", "Magnum Break", "Provoke",
			"Endure", "Peco Peco Ride", "Cavalier Mastery", "Counter Attack", "Two Hand Quicken",
			"Bowling Bash", "Spear Mastery", "Pierce", "Spear Stab", "Spear Boomerang",
			"Brandish Spear"]
	];
}
if(Job == "lkt"){
	var arrData = [
		[HPRC_P, SWDM_P, THSD_P, BASH_P, MGBR_P, PRVK_P, ENDR_P, RIDE_P, CAVA_P,
			ACNT_P, THQK_P, BBSH_P, SPRM_P, PIRC_P, SSTB_P, SBML_P, BSPR_P,
			ARBL_P, PRRY_P, CCTR_P, TRLX_P, BRSK_P, SPRP_P, HDCR_P, JTBT_P],
		["HPR", "SWM", "2H Mastery", "Bash", "MB", "Provoke", "Endure", "Peco",
			"Peco Mastery", "Counter", "2HQ", "BB", "Spear Mastery", "Pierce", "S Stab", "SB", "BDS",
			"Aura", "Parry", "Spear Dy", "Relax", "Frenzy", "Spiral", "TB", "VS"],
		["Increase HP recovery", "Sword Mastery", "2H Sword Mastery", "Bash", " Magnum Break", "Provoke",
			"Endure", "Peco Peco Ride", "Cavalier Mastery", "Counter Attack", "Two Hand Quicken",
			"Bowling Bash", "Spear Mastery", "Pierce", "Spear Stab", "Spear Boomerang",
			"Brandish Spear",
			"Aura Blade", "Parrying", "Spear Dynamo", "Relax",
			"Frenzy", "Clashing Spiral", "Traumatic Blow", "Vital Strike"]
	];
}

if(Job == "ass"){
	var arrData = [
		[DATK_P, MISS_P, EVNM_P, DETX_P, STEL_P, HIDE_P, RGHT_P, LEFT_P, KATA_P,
			SBLW_P, CLOK_P, GRIM_P, ECHP_P, POSR_P, VDST_P, VSPL_P],
		["DA", "Dodge", "Env", "Detoxify", "Steal", "Hide", "Right Hand Mastery", "Left Hand Mastery",
			"Katar Mastery", "SB", "Cloak", "Grim", "EP", "PR", "VD", "VS"],
		["Double Attack", "Improve Dodge", "Envenom", "Detoxify", "Steal", "Hiding",
			"Right Hand Mastery", "Left Hand Mastery", "Katar Mastery", "Sonic Blow", "Cloaking", "Grimtooth",
			"Enchant Poison", "Poison React", "Venom Dust", "Venom Splasher"]
	];
}
if(Job == "asc"){
	var arrData = [
		[DATK_P, MISS_P, EVNM_P, DETX_P, STEL_P, HIDE_P, RGHT_P, LEFT_P, KATA_P,
			SBLW_P, CLOK_P, GRIM_P, ECHP_P, POSR_P, VDST_P, VSPL_P,
			AKTR_P, SLBR_P, MTAS_P, CDDP_P, EDDP_P],
		["DA", "Dodge", "Env", "Detoxify", "Steal", "Hide", "Right Hand Mastery", "Left Hand Mastery",
			"Katar Mastery", "SB", "Cloak", "Grim", "EP", "PR", "VD", "VS",
			"AKM", "SD", "MA", "CDP", "EDP"],
		["Double Attack", "Improve Dodge", "Envenom", "Detoxify", "Steal", "Hiding",
			"Right Hand Mastery", "Left Hand Mastery", "Katar Mastery", "Sonic Blow", "Cloaking", "Grimtooth",
			"Enchant Poison", "Poison React", "Venom Dust", "Venom Splasher", "Advance Katar Mastery",
			"Soul Destroyer", "Meteor Assault", "Create Deadly Poison", "Enchant Deadly Poison"]
	];
}

if(Job == "hnt"){
	var arrData = [
		[OWLE_P, VLTE_P, CNCT_P, DBLS_P, ALSW_P, BSTB_P, FALC_P, BLTZ_P, STLC_P,
			DTCT_P, SPRN_P, SKID_P, ANKL_P, LNDM_P, BLST_P, CLYM_P, REMV_P, FLSH_P,
			FREZ_P, SNDM_P, SKWV_P, TALK_P],
		["Owl", "Vulture", "IC", "DS", "AS", "Beast", "Falcon", "BB", "Steel Crow",
			"Detect", "Spring", "Skid", "Ankle", "LM", "BM", "Claymore",
			"Remove Trap", "Flasher", "FT", "Sandman", "SW", "Talkie"],
		["Owl's Eye", "Vulture's Eye", "Improve Concentration", "Double Strafe", "Arrow Shower",
			"Beast Bane", "Falconry Mastery", "Bltiz Beat", "Steel Crow", "Detecting",
			"Spring Trap", "Skid Trap", "Ankle Snare", "Land Mine", "Blast Mine",
			"Claymore Trap", "Remove Trap", "Flasher", "Freezing Trap", "Sandman",
			"Shockwave Trap", "Talkie Box"]
	];
}
if(Job == "snp"){
	var arrData = [
		[OWLE_P, VLTE_P, CNCT_P, DBLS_P, ALSW_P, BSTB_P, FALC_P, BLTZ_P, STLC_P,
			DTCT_P, SPRN_P, SKID_P, ANKL_P, LNDM_P, BLST_P, CLYM_P, REMV_P, FLSH_P,
			FREZ_P, SNDM_P, SKWV_P, TALK_P,
			TRST_P, FLAS_P, SHSH_P, WDWK_P],
		["Owl", "Vulture", "IC", "DS", "AS", "Beast", "Falcon", "BB", "Steel Crow",
			"Detect", "Spring", "Skid", "Ankle", "LM", "BM", "Claymore",
			"Remove Trap", "Flasher", "FT", "Sandman", "SW", "Talkie",
			"Falcon Eyes", "FA", "FAS", "WW"],
		["Owl's Eye", "Vulture's Eye", "Improve Concentration", "Double Strafe", "Arrow Shower",
			"Beast Bane", "Falconry Mastery", "Bltiz Beat", "Steel Crow", "Detecting",
			"Spring Trap", "Skid Trap", "Ankle Snare", "Land Mine", "Blast Mine",
			"Claymore Trap", "Remove Trap", "Flasher", "Freezing Trap", "Sandman",
			"Shockwave Trap", "Talkie Box",
			"Falcon Eyes", "Falcon Assault", "Focused Arrow Strike", "Wind Walker"]
	];
}

if(Job == "pri"){
	var arrData = [
		[HEAL_P, BLES_P, INCA_P, DECA_P, ANGE_P, DIVI_P, DEMO_P, SIGN_P, RUWA_P,
			TELE_P, WARP_P, PNEU_P, AQUA_P, CURE_P, FTSP_P, MACE_P, IMPO_P, SUFF_P,
			ASPE_P, RECO_P, RESU_P, SANC_P, SFWL_P, MGNF_P, KYRI_P, GLOR_P, BENE_P,
			LEXD_P, LEXA_P, TURN_P, MGEX_P, SLPO_P],
		["Heal", "Bless", "IA", "DA", "Ang", "DP", "DB", "Signum",
			"Ruwach", "Tele", "Warp", "Pnuema", "Aqua", "Cure", "SPR",
			"Mace", "IM", "Suff", "Asp", "Stat", "Res", "Sanc", "SW",
			"Mag", "KE", "Gloria", "BBS", "LD", "LA", "TU", "ME", "Slow"],
		["Heal", "Blessing", "Increase AGI", "Decrease AGI", "Angelus", "Divine Protection",
			"Demonbane", "Signum Crusis", "Ruwach", "Teleport", "Warp", "Pnuema",
			"Aqua Benedicta", "Cure", "Increase SP Recovery", "Mace Mastery", "Imposito Manus", "Suffragium",
			"Aspersio", "Status Recovery", "Ressurection", "Sanctuary", "Safety Wall", "Magnificat",
			"Kyrie Eleison", "Gloria", "B.S. Sacramenti", "Lex Divina", "Lex Aeterna", "Turn Undead",
			"Magnus Exorcismus", "Slow Poison"]
	];
}
if(Job == "hpr"){
	var arrData = [
		[HEAL_P, BLES_P, INCA_P, DECA_P, ANGE_P, DIVI_P, DEMO_P, SIGN_P, RUWA_P,
			TELE_P, WARP_P, PNEU_P, AQUA_P, CURE_P, FTSP_P, MACE_P, IMPO_P, SUFF_P,
			ASPE_P, RECO_P, RESU_P, SANC_P, SFWL_P, MGNF_P, KYRI_P, GLOR_P, BENE_P,
			LEXD_P, LEXA_P, TURN_P, MGEX_P, SLPO_P,
			ASMP_P, BSLC_P, MDTT_P, MNRC_P],
		["Heal", "Bless", "IA", "DA", "Ang", "DP", "DB", "Signum",
			"Ruwach", "Tele", "Warp", "Pnuema", "Aqua", "Cure", "SPR",
			"Mace", "IM", "Suff", "Asp", "Stat", "Res", "Sanc", "SW",
			"Mag", "KE", "Gloria", "BBS", "LD", "LA", "TU", "ME", "Slow",
			"Assum", "Basilica", "Medit", "Mana"],
		["Heal", "Blessing", "Increase AGI", "Decrease AGI", "Angelus", "Divine Protection",
			"Demonbane", "Signum Crusis", "Ruwach", "Teleport", "Warp", "Pnuema",
			"Aqua Benedicta", "Cure", "Increase SP Recovery", "Mace Mastery", "Imposito Manus", "Suffragium",
			"Aspersio", "Status Recovery", "Ressurection", "Sanctuary", "Safety Wall", "Magnificat",
			"Kyrie Eleison", "Gloria", "B.S. Sacramenti", "Lex Divina", "Lex Aeterna", "Turn Undead",
			"Magnus Exorcismus", "Slow Poison",
			"Assumptio", "Basilica", "Meditatio",
			"Mana Recharge"]
	];
}

if(Job == "wiz"){
	var arrData = [
		[FTSP_P, ESTM_P, FBLT_P, FBLL_P, SGHT_P, FWLL_P, STRS_P, MSTM_P, FPLL_P,
			CBLT_P, FRDV_P, FRNV_P, IWLL_P, WBLL_P, STMG_P, LBLT_P, TSTM_P, JPTD_P,
			LOVM_P, STCS_P, ETSP_P, HVDR_P, QGMR_P, NPBT_P, SLST_P, SFWL_P],
		["SPR", "Est", "FB", "FBL", "Si", "FW", "SiR", "MS", "FP", "CB", "FD",
			"FN", "IW", "WB", "SG", "LB", "TS", "JT", "LoV", "SC", "ES", "HD", "QM",
			"NB", "SS", "SW"],
		["Increase SP Recovery", "Sense", "Fire Bolt", "Fire Ball", "Sight",
			"Fire Wall", "Sight Thrasher", "Meteor Storm", "Fire Pillar", "Cold Bolt", "Frost Diver",
			"Frost Nova", "Ice Wall", "Water Ball", "Storm Gust", "Lightning Bolt", "Thunder Storm",
			"Jupitel Thunder", "Lord of Vermillion", "Stone Curse", "Earth Spike", "Heavens Drive",
			"Quagmire", "Napalm Beat", "Soul Strike", "Safety Wall"]
	];
}
if(Job == "hwz"){
	var arrData = [
		[FTSP_P, ESTM_P, FBLT_P, FBLL_P, SGHT_P, FWLL_P, STRS_P, MSTM_P, FPLL_P,
			CBLT_P, FRDV_P, FRNV_P, IWLL_P, WBLL_P, STMG_P, LBLT_P, TSTM_P, JPTD_P,
			LOVM_P, STCS_P, ETSP_P, HVDR_P, QGMR_P, NPBT_P, SLST_P, SFWL_P,
			SLDR_P, MGCR_P, APMP_P, NPVL_P, GRVF_P, GBTN_P],
		["SPR", "Sense", "FB", "FBL", "Si", "FW", "SiR", "MS", "FP", "CB", "FD",
			"FN", "IW", "WB", "SG", "LB", "TS", "JT", "LoV", "SC", "ES", "HD", "QM",
			"NB", "SS", "SW",
			"SD", "MC", "AMP", "NV",
			"GF", "Gbt"],
		["Increase SP Recovery", "Sense", "Fire Bolt", "Fire Ball", "Sight",
			"Fire Wall", "Sight Thrasher", "Meteor Storm", "Fire Pillar", "Cold Bolt", "Frost Diver",
			"Frost Nova", "Ice Wall", "Water Ball", "Storm Gust", "Lightning Bolt", "Thunder Storm",
			"Jupitel Thunder", "Lord of Vermillion", "Stone Curse", "Earth Spike", "Heavens Drive",
			"Quagmire", "Napalm Beat", "Soul Strike", "Safety Wall",
			" Soul Drain", "Stave Crasher", "Mystical Amplification", "Napalm Vulcan",
			"Gravitation Field", "Ganbantein"]
	];
}

if(Job == "bsm"){
	var arrData = [
		[INCC_P, DISC_P, OVRC_P, CART_P, VEND_P, IDEN_P, MAMM_P,
			DAGR_P, KNCL_P, MACE_P, SWRD_P, THSD_P, AXES_P, SPER_P, IRON_P, STEL_P, DSTN_P,
			ORID_P, HLTB_P, FNDO_P, WPRS_P, RPWP_P, SKTP_P, HMFL_P, ADRE_P, WPPF_P, OVTH_P, MAXI_P],
		["EWL", "DC", "OC", "PC", "Vend", "Item", "Mammo", "Dagger", "Knuckle",
			"Mace", "1H Sword", "2H Sword", "Axe", "Spear ", "Iron", "Steel", "Element", "Ori Research",
			"HB", "Ore Discovery", "Weapon Research", "Weapon Repair", "ST", "HF", "AR", "WP", "OT", "MP"],
		["Enlarge Weight Limit", "Discount", "Overcharge", "Push Cart", "Vend",
			"Item Appraisal", "Mammonite",
			"Smith Dagger", "Smith Knucklebrace", "Smith Mace", "Smith Sword", "Smith Two-handed Sword", "Smith Axe", "Smith Spear",
			"Iron Tempering", "Steel Tempering", "Enchantedstone Craft", "Oridecon Research", "Hilt Binding", "Ore Discovery",
			"Weapon Research", "Weapon Repair", "Skin Tempering", "Hammer Fall", "Adrenaline Rush",
			"Weapon Perfection", "Power Thrust", "Maximize Power"]
	];
}
if(Job == "wsm"){
	var arrData = [
		[INCC_P, DISC_P, OVRC_P, CART_P, VEND_P, IDEN_P, MAMM_P,
			DAGR_P, KNCL_P, MACE_P, SWRD_P, THSD_P, AXES_P, SPER_P, IRON_P, STEL_P, DSTN_P,
			ORID_P, HLTB_P, FNDO_P, WPRS_P, RPWP_P, SKTP_P, HMFL_P, ADRE_P, WPPF_P, OVTH_P, MAXI_P,
			MLDW_P, CBST_P, WPRF_P, CTTM_P, OTMX_P],
		["EWL", "DC", "OC", "PC", "Vend", "Item", "Mammo", "Dagger", "Knuckle",
			"Mace", "1H Sword", "2H Sword", "Axe", "Spear ", "Iron", "Steel", "Element", "Ori Research",
			"HB", "Ore Discovery", "Weapon Research", "Weapon Repair", "Skin", "HF", "AR", "WP", "OT", "MP",
			"MD", "CB", "Upgrade", "Termination", "PTM"],
		["Enlarge Weight Limit", "Discount", "Overcharge", "Push Cart", "Vend",
			"Item Appraisal", "Mammonite",
			"Smith Dagger", "Smith Knucklebrace", "Smith Mace", "Smith Sword", "Smith Two-handed Sword", "Smith Axe", "Smith Spear",
			"Iron Tempering", "Steel Tempering", "Enchantedstone Craft", "Oridecon Research", "Hilt Binding", "Ore Discovery",
			"Weapon Research", "Weapon Repair", "Skin Tempering", "Hammer Fall", "Adrenaline Rush",
			"Weapon Perfection", "Power Thrust", "Maximize Power",
			"Meltdown", "Cart Boost", "Upgrade Weapon", "Cart Termination", "Power Thrust Max"]
	];
}

if(Job == "cru"){
	var arrData = [
		[HPRC_P, SWDM_P, THSD_P, BASH_P, MGBR_P, PRVK_P, ENDR_P,
			RIDE_P, CAVA_P, TRST_P, CURE_P, DIVI_P, DEMO_P, HEAL_P, PRVD_P, HLCR_P,
			GRCR_P, DVTN_P, ATGD_P, SDCG_P, SDBM_P, RFSD_P, DFND_P, SPRM_P, SPQK_P],
		["HPR", "Sword Mastery", "2H Mastery ", "Bash", "MB", "Provoke", "Endure",
			"Peco", "Peco Mastery", "Faith", "Cure", "DP", "DB", "Heal", "Res Souls",
			"HX", "GX", "Sac", "AG", "SdC", "SdB", "RS", "DF", "Spear Mastery", "SQ"],
		["Increase HP recovery", "Sword Mastery", "2H Sword Mastery", "Bash", " Magnum Break", "Provoke", "Endure",
			"Peco Peco Ride", "Cavalier Mastery", "Faith", "Cure", "Divine Protection", "Demonbane",
			"Heal", "Resistant Souls", "Holy Cross", "Grand Cross", "Sacrifice", "Guard",
			"Smite", "Shield Boomerang", "Shield Reflect", "Defending Aura", "Spear Mastery",
			"Spear Quicken"]
	];
}
if(Job == "pld"){
	var arrData = [
		[HPRC_P, SWDM_P, THSD_P, BASH_P, MGBR_P, PRVK_P, ENDR_P,
			RIDE_P, CAVA_P, TRST_P, CURE_P, DIVI_P, DEMO_P, HEAL_P, PRVD_P, HLCR_P,
			GRCR_P, DVTN_P, ATGD_P, SDCG_P, SDBM_P, RFSD_P, DFND_P, SPRM_P, SPQK_P,
			PRSR_P, SCRF_P, GSPL_P, SHCH_P],
		["HPR", "Sword Mastery", "2H Mastery ", "Bash", "MB", "Provoke", "Endure",
			"Peco", "Peco Mastery", "Faith", "Cure", "DP", "DB", "Heal", "Res Souls",
			"HC", "GC", "Sac", "AG", "SdC", "SdB", "RS", "DF", "Spear Mastery", "SQ",
			"GD", "Matyr", "Battle Chant", "Chain"],
		["Increase HP recovery", "Sword Mastery", "2H Sword Mastery", "Bash", " Magnum Break", "Provoke", "Endure",
			"Peco Peco Ride", "Cavalier Mastery", "Faith", "Cure", "Divine Protection", "Demonbane",
			"Heal", "Resistant Souls", "Holy Cross", "Grand Cross", "Sacrifice", "Guard",
			"Smite", "Shield Boomerang", "Shield Reflect", "Defending Aura", "Spear Mastery",
			"Spear Quicken",
			"Gloria Domini", "Martyr's Reckoning", "Battle Chant", "Shield Chain"]
	];
}

if(Job == "rog"){
	var arrData = [
		[DATK_P, MISS_P, EVNM_P, DETX_P, STEL_P, HIDE_P,
			SNCH_P, STCN_P, BKST_P, TNDR_P, RAID_P, INTM_P, PLGR_P,
			STHM_P, STSH_P, STAM_P, STWP_P, GSPR_P, CLNR_P, FLGG_P, GRFT_P, CMPL_P,
			VLTE_P, DBLS_P, REMV_P, SWDM_P],
		["DA", "Dodge", "Env", "Detoxify", "Steal", "Hide",
			"Sand", "Steal Coin", "Back Stab", "Stalk", "SA", "Snatch", "Intimidate", "DHelm", "DShield",
			"DArmor", "DWeapon", "Slyness", "Remover", "Piece", "Scribble", "Haggle",
			"Vulture", "DS", "Remove Trap", "Sword Mastery"],
		["Double Attack", "Improve Dodge", "Envenom", "Detoxify", "Steal", "Hiding",
			"Gank", "Mug", "Back Stab", "Stalk", "Sightless Mind", "Snatch",
			"Intimidate", "Divest Helm", "Divest Shield", "Divest Armor", "Divest Weapon",
			"Slyness", "Remover", "Piece", "Scribble", "Haggle",
			"Vulture's Eye", "Double Strafe", "Remove Trap", "Sword Mastery"]
	];
}
if(Job == "stk"){
	var arrData = [
		[DATK_P, MISS_P, EVNM_P, DETX_P, STEL_P, HIDE_P,
			SNCH_P, STCN_P, BKST_P, TNDR_P, RAID_P, INTM_P, PLGR_P,
			STHM_P, STSH_P, STAM_P, STWP_P, GSPR_P, CLNR_P, FLGG_P, GRFT_P, CMPL_P,
			VLTE_P, DBLS_P, REMV_P, SWDM_P,
			CHWK_P, SWRJ_P, PRSV_P, FSTR_P],
		["DA", "Dodge", "Env", "Detoxify", "Steal", "Hide",
			"Sand", "Steal Coin", "Back Stab", "Stalk", "SA", "Snatch", "Intimidate", "DHelm", "DShield",
			"DArmor", "DWeapon", "Slyness", "Remover", "Piece", "Scribble", "Haggle",
			"Vulture", "DS", "Remove Trap", "Sword Mastery" ,
			"Stealth", "Counter Instinct", "Preserve", "FDivest"],
		["Double Attack", "Improve Dodge", "Envenom", "Detoxify", "Steal", "Hiding",
			"Gank", "Mug", "Back Stab", "Stalk", "Sightless Mind", "Snatch",
			"Intimidate", "Divest Helm", "Divest Shield", "Divest Armor", "Divest Weapon",
			"Slyness", "Remover", "Piece", "Scribble", "Haggle",
			"Vulture's Eye", "Double Strafe", "Remove Trap", "Sword Mastery",
			"Stealth", "Counter Instinct", "Preserve", "Full Divestment"]
	];
}

if(Job == "brd"){
	var arrData = [
		[DBLS_P, ALSW_P, OWLE_P, VLTE_P, CNCT_P,
			ADLB_P, ENCR_P, FRJK_P, MSLS_P, DSNC_P, MSST_P, WHSL_P, LLBY_P, ABYS_P,
			ASCS_P, RKWL_P, ETCH_P, PMBR_P, SGFR_P, MKIM_P, APID_P, SDBF_P, NBLG_P],
		["DS", "AS", "Owl", "Vulture", "IC", 
			"Amp", "Encore", "Joke", "Practice", "Unchained", "MS",
			"Perfect Tablature", "Lullaby", "PC", "Riff", "CP", "DT", "Strings",
			"Acoustic", "Mental Sensing", "Apple", "Battle", "Lick"],
		["Double Strafe", "Arrow Shower", "Owl's Eye", "Vulture's Eye", "Improve Concentration",
			"Amp", "Encore", "Unbarring Octave", "Music Lessons", "Unchained Serenade", "Melody Strike",
			"Perfect Tablature", "Lullaby", "Powercord", "Impressive Riff", "Classic Pluck", "Down Tempo",
			" Magic Strings", " Acoustic Rhythm", "Mental Sensing", "Song of Lutie",
			"Battle Theme", "Harmonic Lick"]
	];
}
if(Job == "dan"){
	var arrData = [
		[DBLS_P, ALSW_P, OWLE_P, VLTE_P, CNCT_P,
			ADLB_P, ENCR_P, SCRM_P, DCLS_P, UGDC_P, TRAR_P, HMMN_P, LLBY_P, ABYS_P,
			PDFM_P, RKWL_P, ETCH_P, FTKS_P, SGFR_P, MKIM_P, SVFY_P, SDBF_P, NBLG_P],
		["DS", "AS", "Owl", "Vulture", "IC", 
			"Amp", "Encore", "Dazzler", "Lessons", "Hip Shaker", "Sling Arrow",
			"Focus Ballet", "Lullaby", "PC", "Slow", "CP", "DT", "Lady Luck",
			"Acoustic", "Mental Sensing", "GK", "Battle", "Lick"],
		["Double Strafe", "Arrow Shower", "Owl's Eye", "Vulture's Eye", "Improve Concentration",
			"Amp", "Encore", "Dazzler", "Dance Lesson", "Hip Shaker", "Sling Arrow",
			"Focus Ballet", "Lullaby", "Powercord", "Slow Grace", "Classic Pluck",
			"Down Tempo", "Lady Luck", " Acoustic Rhythm", "Mental Sensing", "Gypsy's Kiss",
			"Battle Theme", "Harmonic Lick"]
	];
}

if(Job == "clw"){
	var arrData = [
		[DBLS_P, ALSW_P, OWLE_P, VLTE_P, CNCT_P,
			ADLB_P, ENCR_P, FRJK_P, MSLS_P, DSNC_P, MSST_P, WHSL_P, LLBY_P, ABYS_P,
			ASCS_P, RKWL_P, ETCH_P, PMBR_P, SGFR_P, MKIM_P, APID_P, SDBF_P, NBLG_P,
			ARVL_P, MWMF_P, MRNT_P, LGFR_P, HRMD_P, TCOF_P],
		["DS", "AS", "Owl", "Vulture", "IC", 
			"Amp", "Encore", "ジョーク", "Lessons", "Unchained Serenade", "MS",
			"Perfect Tablature", "Lullaby", "PC", "Riff", "CP", "DT", "Strings",
			"Acoustic", "Mental Sensing", "Apple", "Battle", "Lick",
			"ArV", "Sheltering Bliss", "MC", "Longing for Freedom", "Hermod", "Tarot"],
		["Double Strafe", "Arrow Shower", "Owl's Eye", "Vulture's Eye", "Improve Concentration",
			"Amp", "Encore", "Unbarring Octave", "Music Lessons", "Unchained Serenade", "Melody Strike",
			"Perfect Tablature", "Lullaby", "Powercord", "Impressive Riff", "Classic Pluck", "Down Tempo",
			" Magic Strings", " Acoustic Rhythm", "Mental Sensing", "Song of Lutie",
			"Battle Theme", "Harmonic Lick",
			"Arrow Vulcan", " Sheltering Bliss", "Marionette Control", "Longing for Freedom", "Wand of Hermod", "Tarot Card of Fate"]
	];
}
if(Job == "gyp"){
	var arrData = [
		[DBLS_P, ALSW_P, OWLE_P, VLTE_P, CNCT_P,
			ADLB_P, ENCR_P, SCRM_P, DCLS_P, UGDC_P, TRAR_P, HMMN_P, LLBY_P, ABYS_P,
			PDFM_P, RKWL_P, ETCH_P, FTKS_P, SGFR_P, MKIM_P, SVFY_P, SDBF_P, NBLG_P,
			ARVL_P, MWMF_P, MRNT_P, LGFR_P, HRMD_P, TCOF_P],
		["DS", "AS", "Owl", "Vulture", "IC", 
			"Amp", "Encore", "Dazzler", "Lessons", "Hip Shaker", "Sling Arrow",
			"Focus Ballet", "Lullaby", "PC", "Slow", "CP", "DT", "Lady Luck",
			"Acoustic", "Mental Sensing", "GK", "Battle", "Lick",
			"ArV", "Sheltering Bliss", "MC", "Longing for Freedom", "Hermod", "Tarot"],
		["Double Strafe", "Arrow Shower", "Owl's Eye", "Vulture's Eye", "Improve Concentration",
			"Amp", "Encore", "Dazzler", "Dance Lesson", "Hip Shaker", "Sling Arrow",
			"Focus Ballet", "Lullaby", "Powercord", "Slow Grace", "Classic Pluck",
			"Down Tempo", "Lady Luck", " Acoustic Rhythm", "Mental Sensing", "Gypsy's Kiss",
			"Battle Theme", "Harmonic Lick",
			"Arrow Vulcan", " Sheltering Bliss", "Marionette Control", "Longing for Freedom", "Wand of Hermod", "Tarot Card of Fate"]
	];
}

if(Job == "mon"){
	var arrData = [
		[RUWA_P, TELE_P, WARP_P, PNEU_P, AQUA_P, HEAL_P, INCA_P, DECA_P, CURE_P,
			ANGE_P, BLES_P, DIVI_P, DEMO_P, SIGN_P,
			TTSS_P, CHKK_P, KYKI_P, BKKI_P, STKE_P, DSJT_P, ASHR_P, IKSK_P, SKHP_P,
			UKCS_P, RKGK_P, RKZS_P, MRKG_P, KGFK_P, KSDE_P],
		["Ruwach", "Tele", "Warp", "Pnuema", "Aqua", "Heal", "IA", "DA",
			"Cure", "Ang", "Bless", "DP", "DB", "Signum",
			"Iron Fists", "Summon Spirit Sphere", "Sphere Absorption", "Fury", "Occult Impaction", "Throw Spirit Sphere", "Asura", "Flee", "Root",
			"Spiritual Cadence ", "Triflecta Blow", "Quad blow", "Thrust", "Mental Strength", "Snap"],
		["Ruwach", "Teleport", "Warp", "Pnuema", "Aqua Benedicta", "Heal", "Increase AGI",
			"Decrease AGI", "Cure", "Angelus", "Blessing", "Divine Protection", "Demonbane",
			"Signum Crusis",
			"Iron Fists", "Summon Spirit Sphere", "Sphere Absorption", " Fury", "Occult Impaction", "Throw Spirit Sphere", "Guillotine Fist",
			"Flee ", "Root", "Spiritual Cadence ", "Raging Triflecta Blow", "Raging Quadruple Blow", "Raging Thrust", "Mental Strength", "Snap"]
	];
}
if(Job == "chp"){
	var arrData = [
		[RUWA_P, TELE_P, WARP_P, PNEU_P, AQUA_P, HEAL_P, INCA_P, DECA_P, CURE_P,
			ANGE_P, BLES_P, DIVI_P, DEMO_P, SIGN_P,
			TTSS_P, CHKK_P, KYKI_P, BKKI_P, STKE_P, DSJT_P, ASHR_P, IKSK_P, SKHP_P,
			UKCS_P, RKGK_P, RKZS_P, MRKG_P, KGFK_P, KSDE_P,
			MKKH_P, FKKK_P, RCHG_P, KCHK_P],
		["Ruwach", "Tele", "Warp", "Pnuema", "Aqua", "Heal", "IA", "DA",
			"Cure", "Ang", "Bless", "DP", "DB", "Signum",
			"Iron Fists", "Summon Spirit Sphere", "Sphere Absorption", "Fury", "Occult Impaction", "Throw Spirit Sphere", "Asura", "Flee", "Root",
			"Spiritual Cadence ", "Triflecta Blow", "Quad blow", "Thrust", "Mental Strength", "Snap",
			" Raging Palm Strike", "Glacier Fist", "CCC", "Zen "],
		["Ruwach", "Teleport", "Warp", "Pnuema", "Aqua Benedicta", "Heal", "Increase AGI",
			"Decrease AGI", "Cure", "Angelus", "Blessing", "Divine Protection", "Demonbane",
			"Signum Crusis",
			"Iron Fists", "Summon Spirit Sphere", "Sphere Absorption", " Fury", "Occult Impaction", "Throw Spirit Sphere", "Guillotine Fist",
			"Flee ", "Root", "Spiritual Cadence ", "Raging Triflecta Blow", "Raging Quadruple Blow", "Raging Thrust", "Mental Strength", "Snap",
			" Raging Palm Strike", "Glacier Fist", "Chain Crush Combo", "Zen "]
	];
}

if(Job == "sag"){
	var arrData = [
		[FTSP_P, NPBT_P, SLST_P, SFWL_P, FBLT_P, FBLL_P, SGHT_P, FWLL_P, LBLT_P,
			TSTM_P, CBLT_P, FRDV_P, STCS_P,
			ADVB_P, MGRD_P, SPBR_P, DSPL_P, CSTC_P, FRCS_P, ATSP_P, FRLC_P, VLCN_P,
			LTLD_P, VLGL_P, FRWP_P, DELG_P, SMWP_P, ETSP_P, HVDR_P, LDPR_P, ABRA_P,
			ESTM_P, DRGN_P],
		["SPR", "NB", "SS", "SW", "FB", "FBL", "Si", "FW", "LB", "TS", "CB", "FD", "SC",
			"AdB", "MR", "SpB", "Dis", "CC", "FC", "AS", "Endow Fire", "Vol",
			"Endow Wind", "Wind", "Endow Water", "Del", "Endow Earth", "ES", "HD", "ME", "HP", "Sense", "DN"],
		["Increase SP Recovery", "Napalm Beat", "Soul Strike", "Safety Wall", "Fire Bolt",
			"Fire Ball", "Sight", "Fire Wall", "Lightning Bolt", "Thunder Storm", "Cold Bolt",
			"Frost Diver", "Stone Curse",
			"Study", "Magic Rod", "Spell Breaker", "Dispell", "Cast Cancel",
			"Free Cast", "Hindsight", "Endow Blaze", "Volcano", "Endow Tornado ", "Whirlwind",
			"Endow Tsunami", "Deluge", "Endow Quake", "Earth Spike", "Heavens Drive",
			"Magnetic Earth", "Hocus-pocus", "Sense", "Dragonology"]
	];
}
if(Job == "pro"){
	var arrData = [
		[FTSP_P, NPBT_P, SLST_P, SFWL_P, FBLT_P, FBLL_P, SGHT_P, FWLL_P, LBLT_P,
			TSTM_P, CBLT_P, FRDV_P, STCS_P,
			ADVB_P, MGRD_P, SPBR_P, DSPL_P, CSTC_P, FRCS_P, ATSP_P, FRLC_P, VLCN_P,
			LTLD_P, VLGL_P, FRWP_P, DELG_P, SMWP_P, ETSP_P, HVDR_P, LDPR_P, ABRA_P,
			ESTM_P, DRGN_P,
			HPCV_P, SLCH_P, SLBN_P, MDBR_P, MMRZ_P, WLFG_P, SPDW_P, DBCS_P],
		["SPR", "NB", "SS", "SW", "FB", "FBL", "Si", "FW", "LB", "TS", "CB", "FD", "SC",
			"AdB", "MR", "SpB", "Dis", "CC", "FC", "AS", "Endow Fire", "Vol",
			"Endow Wind", "Wind", "Endow Water", "Del", "Endow Earth", "ES", "HD", "ME", "HP", "Sense", "DN",
			"LC", "Slc", "Slb", "MBr", "Foresight", "WoF", "SpW", "DC"],
		["Increase SP Recovery", "Napalm Beat", "Soul Strike", "Safety Wall", "Fire Bolt",
			"Fire Ball", "Sight", "Fire Wall", "Lightning Bolt", "Thunder Storm", "Cold Bolt",
			"Frost Diver", "Stone Curse",
			"Study", "Magic Rod", "Spell Breaker", "Dispell", "Cast Cancel",
			"Free Cast", "Hindsight", "Endow Blaze", "Volcano", "Endow Tornado ", "Whirlwind",
			"Endow Tsunami", "Deluge", "Endow Quake", "Earth Spike", "Heavens Drive",
			"Magnetic Earth", "Hocus-pocus", "Sense", "Dragonology",
			"Indulge", "Soul Exhale", "Soul Siphon", "Mind Breaker", "Foresight",
			"Blinding Mist", "Fiber Lock ", "Double Casting"]
	];
}

if(Job == "alc"){
	var arrData = [
		[INCC_P, DISC_P, OVRC_P, CART_P, VEND_P, IDEN_P, MAMM_P,
			AXEM_P, LRNP_P, PHMC_P, SPHM_P, PTPC_P, DMST_P, ACDT_P, BCNB_P, CPHM_P,
			CPSH_P, CPAM_P, CPWP_P],
		["EWL", "DC", "OC", "PC", "Vend", "Item", "Mammo",
			"Axe Mastery", "ME", "Prepare Potion", "Marine Sphere", "PP", "Bomb", "Acid", "Plant",
			"Coat Helm", "Coat Shield", "Coat Armor", "Coat Weapon"],
		["Enlarge Weight Limit", "Discount", "Overcharge", "Push Cart", "Vend",
			"Item Appraisal", "Mammonite",
			"Axe Mastery", "Potion Research", "Prepare Potion", "Summon Marine Sphere", "Aid Potion",
			"Bomb", "Acid Terror", "Summon Flora", "Biochemical Helm", "Synthesized Shield",
			"Synthetic Armor", "Alchemical Weapon"]
	];
}
if(Job == "cre"){
	var arrData = [
		[INCC_P, DISC_P, OVRC_P, CART_P, VEND_P, IDEN_P, MAMM_P,
			AXEM_P, LRNP_P, PHMC_P, SPHM_P, PTPC_P, DMST_P, ACDT_P, BCNB_P, CPHM_P,
			CPSH_P, CPAM_P, CPWP_P,
			SLPP_P, FCPR_P, ACDM_P, PLCL_P],
		["EWL", "DC", "OC", "PC", "Vend", "Item", "Mammo",
			"Axe Mastery", "ME", "Prepare Potion", "Marine Sphere", "PP", "Bomb", "Acid", "Plant",
			"Coat Helm", "Coat Shield", "Coat Armor", "Coat Weapon",
			"SPP", "Full Coat", "AD", "Plant Cultivation"],
		["Enlarge Weight Limit", "Discount", "Overcharge", "Push Cart", "Vend",
			"Item Appraisal", "Mammonite",
			"Axe Mastery", "Potion Research", "Prepare Potion", "Summon Marine Sphere", "Aid Potion",
			"Bomb", "Acid Terror", "Summon Flora", "Biochemical Helm", "Synthesized Shield",
			"Synthetic Armor", "Alchemical Weapon",
			"Aid Condensed Potion", "Full Chemical Protection", "Acid Demonstration", "Plant Cultivation"]
	];
}

if(Job == "nov"){
	var arrData = [
		[BASH_P, MGBR_P, HPRC_P, SWDM_P, PRVK_P, ENDR_P, 
			RUWA_P, TELE_P, WARP_P, PNEU_P, AQUA_P, HEAL_P, CURE_P, INCA_P, DECA_P,
			DIVI_P, DEMO_P, ANGE_P, BLES_P, SIGN_P,
			FBLT_P, FBLL_P, SGHT_P, FWLL_P, LBLT_P, TSTM_P, CBLT_P, FRDV_P, NPBT_P,
			SLST_P, SFWL_P, STCS_P, FTSP_P,
			DATK_P, MISS_P, EVNM_P, DETX_P, STEL_P, HIDE_P,
			OWLE_P, VLTE_P, CNCT_P,
			INCC_P, DISC_P, OVRC_P, CART_P, VEND_P, IDEN_P, MAMM_P],
		["Bash", "MB", "HPR", "Sword Mastery", "Provoke", "Endure",
			"Ruwach", "Tele", "Warp", "Pnuema", "Aqua", "Heal", "Cure",
			"IA", "Decrease AGI", "DP", "DB", "エンジェ", "Bless", "Signum",
			"FB", "FBL", "Si", "FW", "LB", "TS", "CB", "FD", "NB", "SS", "SW",
			"SC", "SPR",
			"DA", "Dodge", "Env", "Detoxify", "Steal", "Hide",
			"Owl", "Vulture", "IC",
			"EWL", "DC", "OC", "PC", "Vend", "Item", "Mammo"],
		["Bash", " Magnum Break", "Increase HP recovery", "Sword Mastery", "Provoke", "Endure",
			"Ruwach", "Teleport", "Warp", "Pnuema", "Aqua Benedicta", "Heal", "Cure",
			"Increase AGI", "Decrease AGI", "Divine Protection", "Demonbane", "Angelus",
			"Blessing", "Signum Crusis",
			"Fire Bolt", "Fire Ball", "Sight", "Fire Wall", "Lightning Bolt", "Thunder Storm",
			"Cold Bolt", "Frost Diver", "Napalm Beat", "Soul Strike", "Safety Wall",
			"Stone Curse", "Increase SP Recovery",
			"Double Attack", "Improve Dodge", "Envenom", "Detoxify", "Steal", "Hiding",
			"Owl's Eye", "Vulture's Eye", "Improve Concentration",
			"Enlarge Weight Limit", "Discount", "Overcharge", "Push Cart", "Vend",
			"Item Appraisal", "Mammonite"]
	];
}

if(Job == "gld"){
	var arrData = [
		[GAPP_P, KPRC_P, EMDV_P, GRSC_P, BLDG_P, EXTG_P, BTOD_P, RGNR_P,
			RSTR_P, EMGC_P, GLDS_P, WOGL_P, SLOC_P, SHKE_P],
		["Guild Approval", " Contract with Kafra", "Develop", "Guardian Research", " Build up the Guardian", "Guild Extension",
			"Battle Orders", "Regeneration", "Restore", "Recall", "Leadership", "Wounds of Glory", "Soul of Cold", "Sharp Hawk Eyes"],
		["Guild Approval", " Contract with Kafra", "Emsolute Develop", "Guardian Research", "Build up the Guardian", "Guild Extension",
			"Battle Orders", "Regeneration", "Restore", "Urgent Recall", "Great Leadership", "Wounds of Glory", "Soul of Cold", "Sharp Hawk Eyes"]
	];
}

if(Job == "alh"){
	var arrData = [
		[INCC_P, DISC_P, OVRC_P, CART_P, VEND_P, IDEN_P, MAMM_P,
			AXEM_P, LRNP_P, PHMC_P, SPHM_P, PTPC_P, DMST_P, ACDT_P, BCNB_P, CPHM_P,
			CPSH_P, CPAM_P, CPWP_P,
			CLHM_P, REST_P, RSHM_P],
		["EWL", "DC", "OC", "PC", "Vend", "Item", "Mammo",
			"Axe Mastery", "ME", "Prepare Potion", "Marine Sphere", "PP", "Bomb", "Acid", "Plant",
			"Coat Helm", "Coat Shield", "Coat Armor", "Coat Weapon",
			"Call Homun", "Vaporize", "Res Homun"],
		["Enlarge Weight Limit", "Discount", "Overcharge", "Push Cart", "Vend",
			"Item Appraisal", "Mammonite",
			"Axe Mastery", "Potion Research", "Prepare Potion", "Summon Marine Sphere", "Aid Potion",
			"Bomb", "Acid Terror", "Summon Flora", "Biochemical Helm", "Synthesized Shield",
			"Synthetic Armor", "Alchemical Weapon",
			"Call Homunculus", "Vaporize", "Homunculus Resurrection"]
	];
}
if(Job == "crh"){
	var arrData = [
		[INCC_P, DISC_P, OVRC_P, CART_P, VEND_P, IDEN_P, MAMM_P,
			AXEM_P, LRNP_P, PHMC_P, SPHM_P, PTPC_P, DMST_P, ACDT_P, BCNB_P, CPHM_P,
			CPSH_P, CPAM_P, CPWP_P,
			CLHM_P, REST_P, RSHM_P,
			SLPP_P, FCPR_P, ACDM_P, PLCL_P],
		["EWL", "DC", "OC", "PC", "Vend", "Item", "Mammo",
			"Axe Mastery", "ME", "Prepare Potion", "Marine Sphere", "PP", "Bomb", "Acid", "Plant",
			"Coat Helm", "Coat Shield", "Coat Armor", "Coat Weapon",
			"Call Homun", "Vaporize", "Res Homun",
			"SPP", "Full Coat", "AD", "Plant Cultivation"],
		["Enlarge Weight Limit", "Discount", "Overcharge", "Push Cart", "Vend",
			"Item Appraisal", "Mammonite",
			"Axe Mastery", "Potion Research", "Prepare Potion", "Summon Marine Sphere", "Aid Potion",
			"Bomb", "Acid Terror", "Summon Flora", "Biochemical Helm", "Synthesized Shield",
			"Synthetic Armor", "Alchemical Weapon",
			"Call Homunculus", "Vaporize", "Homunculus Resurrection",
			"Aid Condensed Potion", "Full Chemical Protection", "Acid Demonstration", "Plant Cultivation"]
	];
}

if(Job == "fst"){
	var arrData = [
		[KKAS_P, SPJB_P, SPGR_P, GDJB_P, GDGR_P, KTJB_P, KTGR_P, CTJB_P,
			CTGR_P, RKHO_P, TBGR_P, YSRK_P, TNSK_P, FGHT_P, ATKZ_P, HSRT_P, TKNM_P,
			KNJO_P, TYNK_P, TKNK_P, HSNK_P, ZOUO_P, TYIK_P, TKIK_P, HSIK_P,
			TYAN_P, TKAN_P, HSAN_P, TYSH_P, TKSH_P, HSSH_P, AKUM_P, TMDC_P,
			CHSK_P, YUGO_P],
		["駆け足", "旋風準備", "旋風蹴り", "下段準備", "下段蹴り", "回転準備", "回転蹴り",
			"カウンター準備", "カウンター蹴り", "落法", "飛び蹴り", "安らかな休息",
			"楽しい休息", "ファイティング", "暖かい風", "走り高跳び", "ミッション",
			"感情", "太陽の温もり", "月の温もり", "星の温もり",
			"憎悪", "太陽の怒り", "月の怒り", "星の怒り", "太陽の安楽", "月の安楽", "星の安楽",
			"太陽の祝福", "月の祝福", "星の祝福", "悪魔", "友達",
			"知識", "融合"],
		["駆け足", "旋風準備", "旋風蹴り", "下段準備", "下段蹴り", "回転準備", "回転蹴り",
			"カウンター準備", "カウンター蹴り", "落法", "飛び蹴り", "安らかな休息",
			"楽しい休息", "ファイティング", "暖かい風", "走り高跳び", "テコンミッション",
			"太陽と月と星の感情", "太陽の温もり", "月の温もり", "星の温もり",
			"太陽と月と星の憎悪", "太陽の怒り", "月の怒り", "星の怒り", "太陽の安楽", "月の安楽", "星の安楽",
			"太陽の祝福", "月の祝福", "星の祝福", "太陽と月と星の悪魔", "太陽と月と星の友達",
			"太陽と月と星の知識", "太陽と月と星の融合"]
	];
}
if(Job == "slk"){
	var arrData = [
		[KKAS_P, SPJB_P, SPGR_P, GDJB_P, GDGR_P, KTJB_P, KTGR_P, CTJB_P,
			CTGR_P, RKHO_P, TBGR_P, YSRK_P, TNSK_P, FGHT_P, ATKZ_P, HSRT_P, TKNM_P,
			SALC_P, SMON_P, SFST_P, SSAG_P, SCRU_P, SNOV_P, SKNT_P, SWIZ_P,
			SPRI_P, SBND_P, SROG_P, SASS_P, SBSM_P, SHUN_P, SSLK_P, SHGH_P,
			KAZL_P, KAHI_P, KAUP_P, KAIT_P, KAIN_P, ESTI_P, ESTU_P, ESMA_P,
			ESWO_P, ESKE_P, ESKA_P],
		["駆け足", "旋風準備", "旋風蹴り", "下段準備", "下段蹴り", "回転準備", "回転蹴り",
			"カウンター準備", "カウンター蹴り", "落法", "飛び蹴り", "安らかな休息",
			"楽しい休息", "ファイティング", "暖かい風", "走り高跳び", "ミッション",
			"アルケミの魂", "モンクの魂", "拳聖の魂", "セージの魂",
			"クルセの魂", "スパノビの魂", "ナイトの魂", "WIZの魂", "プリの魂", "サンダーバードの魂", "ローグの魂",
			"アサの魂", "BSの魂", "ハンタの魂", "ソウルリンカーの魂", "上位一次の魂",
			"カイゼル", "カアヒ", "カウプ", "カイト", "カイナ", "エスティン", "エスタン", "エスマ", "エスウ", "エスク", "エスカ"],
		["駆け足", "旋風準備", "旋風蹴り", "下段準備", "下段蹴り", "回転準備", "回転蹴り",
			"カウンター準備", "カウンター蹴り", "落法", "飛び蹴り", "安らかな休息",
			"楽しい休息", "ファイティング", "暖かい風", "走り高跳び", "テコンミッション",
			"アルケミストの魂", "モンクの魂", "ケンセイの魂", "セージの魂",
			"クルセイダーの魂", "スーパーノービスの魂", "ナイトの魂", "ウィザードの魂", "プリーストの魂", "バードとダンサーの魂", "ローグの魂",
			"アサシンの魂", "ブラックスミスの魂", "ハンターの魂", "ソウルリンカーの魂", "上位一次職業の魂",
			"カイゼル", "カアヒ", "カウプ", "カイト", "カイナ", "エスティン", "エスタン", "エスマ", "エスウ", "エスク", "エスカ"]
	];
}

if(Job == "nnj"){
	var arrData = [
		[TBDG_P, SYRK_P, KNAI_P, FUMA_P, ZNNG_P, TTMG_P, KGTB_P, KSMG_P,
			KGGR_P, UTSM_P, BNSN_P, NNPO_P, KOEN_P, KAEN_P, BAKU_P, HYSS_P,
			SUIT_P, HYSR_P, FUJI_P, RGKS_P, KMIT_P, NENN_P, ISSN_P],
		["飛刀", "手裏剣", "クナイ", "風魔", "銭投げ", "畳返し", "影飛び", "霞斬り",
			"影斬り", "空蝉", "分身", "忍法", "紅炎華", "火炎陣", "爆炎竜", "氷閃Spear ",
			"水遁", "氷晶落", "風刃", "雷撃", "鎌鼬", "念", "一閃"],
		["飛刀修練", "手裏剣投げ", "クナイ投げ", "風魔手裏剣投げ", "銭投げ", "畳返し", "影飛び", "霞斬り",
			"影斬り", "空蝉", "分身の術", "忍法修練", "紅炎華", "火炎陣", "爆炎竜", "氷閃Spear ",
			"水遁", "氷晶落", "風刃", "雷撃砕", "鎌鼬", "念", "一閃"]
	];
}
if(Job == "gun"){
	var arrData = [
		[FLPC_P, FLNG_P, TRPL_P, BLEY_P, MDNS_P, AJST_P, INAC_P, MGBL_P,
			CRCK_P, SGLA_P, SNKE_P, CHAC_P, TRCK_P, DSRM_P, PRCS_P, RPDS_P,
			DSPR_P, GTFV_P, DUST_P, FLBS_P, SPRD_P, GRDR_P],
		["フリップザコイン", "フリング", "トリプルアクション", "ブルズアイ", "マッドネスキャンセラー", "アジャストメント", "正確性向上",
			"マジカルブリッド", "クラッカー", "シングルアクション", "スネークアイ", "チェインアクション",
			"トラッキング", "ディサーム", "ピアーシングショット", "ラピッドシャワー", "デスペラード",
			"ガトリングフィーバー", "ダスト", "フルバスター", "スプレッドアタック", "グラウンドドリフト"],
		["フリップザコイン", "フリング", "トリプルアクション", "ブルズアイ", "マッドネスキャンセラー", "アジャストメント", "正確性向上",
			"マジカルブリッド", "クラッカー", "シングルアクション", "スネークアイ", "チェインアクション",
			"トラッキング", "ディサーム", "ピアーシングショット", "ラピッドシャワー", "デスペラード",
			"ガトリングフィーバー", "ダスト", "フルバスター", "スプレッドアタック", "グラウンドドリフト"]
	];
}

setSkillData(arrData);
}
