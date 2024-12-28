const convertToSecretID = (weaponType, position) => {
    secretID = (weaponType - 1) * 12 + position;
    return secretID;
}
const weaponTypeFusionCalc = (secretID1, secretID2) => {
    const position = secretID1 % 12 + 1;
}
class weapon {
    constructor(weaponType, position) {
        this.weaponType = weaponType;
        this.position = position;
    }
}
//Blades
const firstBlade = new weapon("First Blade", 1, 1);
const burstBlade = new weapon("Burst Blade", 1, 2);
const viperBlade = new weapon("Viper Blade", 1, 3);
const crusaderBlade = new weapon("Crusader Blade", 1, 4);
const royalBlade = new weapon("Royal Blade", 1, 5);
const opticalBlade = new weapon("Optical Blade", 1, 6);
const samuraiBlade = new weapon("Samurai Blade", 1, 7);
const bulletBlade = new weapon("Bullet Blade", 1, 8);
const aquariusBlade = new weapon("Aquarius Blade", 1, 9);
const aurumBlade = new weapon("Aurum Blade", 1, 10);
const palutenaBlade = new weapon("Palutena Blade", 1, 11);
const gaolBlade = new weapon("Gaol Blade", 1, 12);
//Staff
const insightStaff = new weapon("Insight Staff", 2, 1);
const orbStaff = new weapon("Orb Staff", 2, 2);
const roseStaff = new weapon("Rose Staff", 2, 3);
const knuckleStaff = new weapon("Knuckle Staff", 2, 4);
const ancientStaff = new weapon("Ancient Staff", 2, 5);
const lancerStaff = new weapon("Lancer Staff", 2, 6);
const flintlockStaff = new weapon("Flintlock Staff", 2, 7);
const somewhatStaff = new weapon("Somewhat Staff", 2, 8);
const scorpioStaff = new weapon("Scorpio Staff", 2, 9);
const laserStaff = new weapon("Laser Staff", 2, 10);
const darkPitStaff = new weapon("Dark Pit Staff", 2, 11);
const thanatosStaff = new weapon("Thanatos Staff", 2, 12);
//Claws
const tigerClaws = new weapon("Tiger Claws", 3, 1);
const wolfClaws = new weapon("Wolf Claws", 3, 2);
const bearClaws = new weapon("Bear Claws", 3, 3);
const brawlerClaws = new weapon("Brawler Claws", 3, 4);
const stealthClaws = new weapon("Stealth Claws", 3, 5);
const hedgehogClaws = new weapon("Hedgehog Claws", 3, 6);
const raptorClaws = new weapon("Raptor Claws", 3, 7);
const artilleryClaws = new weapon("Artillery Claws", 3, 8);
const cancerClaws = new weapon("Cancer Claws", 3, 9);
const beamClaws = new weapon("Beam Claws", 3, 10);
const viridiClaws = new weapon("Viridi Claws", 3, 11);
const pandoraClaws = new weapon("Pandora Claws", 3, 12);
// Bows
const fortuneBow = new weapon("Fortune Bow", 4, 1);
const silverBow = new weapon("Silver Bow", 4, 2);
const meteorBow = new weapon("Meteor Bow", 4, 3);
const divineBow = new weapon("Divine Bow", 4, 4);
const darknessBow = new weapon("Darkness Bow", 4, 5);
const crystalBow = new weapon("Crystal Bow", 4, 6);
const angelBow = new weapon("Angel Bow", 4, 7);
const hawkeyeBow = new weapon("Hawkeye Bow", 4, 8);
const sagittariusBow = new weapon("Sagittarius Bow", 4, 9);
const aurumBow = new weapon("Aurum Bow", 4, 10);
const palutenaBow = new weapon("Palutena Bow", 4, 11);
const phosphoraBow = new weapon("Phosphora Bow", 4, 12);
//Palms
const violetPalm = new weapon("Violet Palm", 5, 1);
const burningPalm = new weapon("Burning Palm", 5, 2);
const needlePalm = new weapon("Needle Palm", 5, 3);
const midnightPalm = new weapon("Midnight Palm", 5, 4);
const cursedPalm = new weapon("Cursed Palm", 5, 5);
const cutterPalm = new weapon("Cutter Palm", 5, 6);
const pudgyPalm = new weapon("Pudgy Palm", 5, 7);
const ninjaPalm = new weapon("Ninja Palm", 5, 8);
const virgoPalm = new weapon("Virgo Palm", 5, 9);
const aurumPalm = new weapon("Aurum Palm", 5, 10);
const viridiPalm = new weapon("Viridi Palm", 5, 11);
const greatReaperPalm = new weapon("Great Reaper Palm", 5, 12);
//Clubs
const oreClub = new weapon("Ore Club", 6, 1);
const babelClub = new weapon("Babel Club", 6, 2);
const skyscraperClub = new weapon("Skyscraper Club", 6, 3);
const atlasClub = new weapon("Atlas Club", 6, 4);
const earthmaulClub = new weapon("Earthmaul Club", 6, 5);
const ogreClub = new weapon("Ogre Club", 6, 6);
const haloClub = new weapon("Halo Club", 6, 7);
const blackClub = new weapon("Black Club", 6, 8);
const capricornClub = new weapon("Capricorn Club", 6, 9);
const aurumClub = new weapon("Aurum Club", 6, 10);
const hewdrawClub = new weapon("Hewdraw Club", 6, 11);
const magnusClub = new weapon("Magnus Club", 6, 12);
//Cannons
const ezCannon = new weapon("EZ Cannon", 7, 1);
const ballCannon = new weapon("Ball Cannon", 7, 2);
const predatorCannon = new weapon("Predator Cannon", 7, 3);
const poseidonCannon = new weapon("Poseidon Cannon", 7, 4);
const fireworksCannon = new weapon("Fireworks Cannon", 7, 5);
const railCannon = new weapon("Rail Cannon", 7, 6);
const dynamoCannon = new weapon("Dynamo Cannon", 7, 7);
const doomCannon = new weapon("Doom Cannon", 7, 8);
const leoCannon = new weapon("Leo Cannon", 7, 9);
const sonicCannon = new weapon("Sonic Cannon", 7, 10);
const twinbellowsCannon = new weapon("Twinbellows Cannon", 7, 11);
const cragalancheCannon = new weapon("Cragalanche Cannon", 7, 12);
//Orbitars
const standardOrbitars = new weapon("Standard Orbitars", 8, 1);
const guardianOrbitars = new weapon("Guardian Orbitars", 8, 2);
const shockOrbitars = new weapon("Shock Orbitars", 8, 3);
const eyetrackOrbitars = new weapon("Eyetrack Orbitars", 8, 4);
const fairyOrbitars = new weapon("Fairy Orbitars", 8, 5);
const pawPadOrbitars = new weapon("Paw Pad Orbitars", 8, 6);
const jetstreamOrbitars = new weapon("Jetstream Orbitars", 8, 7);
const boomOrbitars = new weapon("Boom Orbitars", 8, 8);
const geminiOrbitars = new weapon("Gemini Orbitars", 8, 9);
const aurumOrbitars = new weapon("Aurum Orbitars", 8, 10);
const centurionOrbitars = new weapon("Centurion Orbitars", 8, 11);
const arlonOrbitars = new weapon("Arlon Orbitars", 8, 12);
//Arms
const crusherArm = new weapon("Crusher Arm", 9, 1);
const compactArm = new weapon("Compact Arm", 9, 2);
const electroshockArm = new weapon("Electroshock Arm", 9, 3);
const volcanoArm = new weapon("Volcano Arm", 9, 4);
const drillArm = new weapon("Drill Arm", 9, 5);
const bomberArm = new weapon("Bomber Arm", 9, 6);
const bowlArm = new weapon("Bowl Arm", 9, 7);
const endAllArm = new weapon("End-All Arm", 9, 8);
const taurusArm = new weapon("Taurus Arm", 9, 9);
const upperdashArm = new weapon("Upperdash Arm", 9, 10);
const krakenArm = new weapon("Kraken Arm", 9, 11);
const phoenixArm = new weapon("Phoenix Arm", 9, 12);
//Tells you the maximum number of times you can be KO'd before losing based on the value of your weapon
function maximumDeaths(weaponValue) {
    const deathsTilLoss = Math.ceil(900 / weaponValue);
    return deathsTilLoss;
}
//I know this is messy but the weapon fusion mechanics don't seem to have any kind of formula on the type end. Position is different
function weaponFusionResult(weapon1, weapon2) {
    let resultWeaponType = 1;
    switch (weapon1) {
        case 1: switch (weapon2) {
            case 1: resultWeaponType = 3;
                break;
            case 2: resultWeaponType = 3;
                break;
            case 3: resultWeaponType = 6;
                break;
            case 4: resultWeaponType = 5;
                break;
            case 5: resultWeaponType = 9;
                break;
            case 6: resultWeaponType = 2;
                break;
            case 7: resultWeaponType = 2;
                break;
            case 8: resultWeaponType = 5;
                break;
            case 9: resultWeaponType = 4;
                break;
        }
            break;
        case 2: switch (weapon2) {
            case 1: resultWeaponType = 3;
                break;
            case 2: resultWeaponType = 7;
                break;
            case 3: resultWeaponType = 9;
                break;
            case 4: resultWeaponType = 9;
                break;
            case 5: resultWeaponType = 7;
                break;
            case 6: resultWeaponType = 3;
                break;
            case 7: resultWeaponType = 1;
                break;
            case 8: resultWeaponType = 6;
                break;
            case 9: resultWeaponType = 8;
                break;
        }
            break;
        case 3: switch (weapon2) {
            case 1: resultWeaponType = 6;
                break;
            case 2: resultWeaponType = 9;
                break;
            case 3: resultWeaponType = 6;
                break;
            case 4: resultWeaponType = 6;
                break;
            case 5: resultWeaponType = 9;
                break;
            case 6: resultWeaponType = 4;
                break;
            case 7: resultWeaponType = 4;
                break;
            case 8: resultWeaponType = 2;
                break;
            case 9: resultWeaponType = 2;
                break;
        }
            break;
        case 4: switch (weapon2) {
            case 1: resultWeaponType = 5;
                break;
            case 2: resultWeaponType = 9;
                break;
            case 3: resultWeaponType = 6;
                break;
            case 4: resultWeaponType = 7;
                break;
            case 5: resultWeaponType = 6;
                break;
            case 6: resultWeaponType = 5;
                break;
            case 7: resultWeaponType = 8;
                break;
            case 8: resultWeaponType = 7;
                break;
            case 9: resultWeaponType = 1;
                break;
        }
            break;
        case 5: switch (weapon2) {
            case 1: resultWeaponType = 9;
                break;
            case 2: resultWeaponType = 7;
                break;
            case 3: resultWeaponType = 9;
                break;
            case 4: resultWeaponType = 6;
                break;
            case 5: resultWeaponType = 9;
                break;
            case 6: resultWeaponType = 1;
                break;
            case 7: resultWeaponType = 1;
                break;
            case 8: resultWeaponType = 4;
                break;
            case 9: resultWeaponType = 8;
                break;
        }
            break;
        case 6: switch (weapon2) {
            case 1: resultWeaponType = 2;
                break;
            case 2: resultWeaponType = 3;
                break;
            case 3: resultWeaponType = 4;
                break;
            case 4: resultWeaponType = 5;
                break;
            case 5: resultWeaponType = 1;
                break;
            case 6: resultWeaponType = 8;
                break;
            case 7: resultWeaponType = 8;
                break;
            case 8: resultWeaponType = 3;
                break;
            case 9: resultWeaponType = 1;
                break;
        }
            break;
        case 7: switch (weapon2) {
            case 1: resultWeaponType = 2;
                break;
            case 2: resultWeaponType = 1;
                break;
            case 3: resultWeaponType = 4;
                break;
            case 4: resultWeaponType = 8;
                break;
            case 5: resultWeaponType = 1;
                break;
            case 6: resultWeaponType = 8;
                break;
            case 7: resultWeaponType = 5;
                break;
            case 8: resultWeaponType = 3;
                break;
            case 9: resultWeaponType = 2;
                break;
        }
            break;
        case 8: switch (weapon2) {
            case 1: resultWeaponType = 5;
                break;
            case 2: resultWeaponType = 6;
                break;
            case 3: resultWeaponType = 2;
                break;
            case 4: resultWeaponType = 7;
                break;
            case 5: resultWeaponType = 4;
                break;
            case 6: resultWeaponType = 3;
                break;
            case 7: resultWeaponType = 3;
                break;
            case 8: resultWeaponType = 7;
                break;
            case 9: resultWeaponType = 5;
                break;
        }
            break;
        case 9: switch (weapon2) {
            case 1: resultWeaponType = 4;
                break;
            case 2: resultWeaponType = 8;
                break;
            case 3: resultWeaponType = 2;
                break;
            case 4: resultWeaponType = 1;
                break;
            case 5: resultWeaponType = 8;
                break;
            case 6: resultWeaponType = 1;
                break;
            case 7: resultWeaponType = 2;
                break;
            case 8: resultWeaponType = 5;
                break;
            case 9: resultWeaponType = 4;
                break;
        }
            break;
    }
    switch (resultWeaponType) {
        case 1: return "Blade";
        case 2: return "Staff";
        case 3: return "Claws";
        case 4: return "Bow";
        case 5: return "Palm";
        case 6: return "Club";
        case 7: return "Cannon";
        case 8: return "Orbitars";
        case 9: return "Arm";
    }
}
//Weapon Type Test
// for (let j = 1; j < 10; j++) {
//     for (let i = 1; i < 10; i++) {
//         console.log(weaponFusionResult(j, i));
//     }
// }
const meleeStars = [0, .5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5, 5.5, 6]
const rangedStars = [0, .5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5, 5.5, 6]
const overallDefense = [-4, 8];
const shotDefense = [-2, 4];
const meleeDefense = [-2, 4];
const knockbackDefense = [1, 4];
const statusResistance = [-4, 4];
const health = [-4, 6];
const poison = [1, 4];
const burning = [1, 4];
const confusion = [1, 4];
const paralysis = [1, 4];
const shaking = [1, 4];
const freezing = [1, 4];
const petrification = [1, 4];
const weakening = [1, 4];
const shotCancellation = 1;
const shotRange = [-3, 3];
const shotHoming = [-3, 3];
const speed = [-4, 4];
const runningSpeed = [1, 4];
const walkingSpeed = [1, 4];
const stamina = [1, 4];
const evasion = [1, 4];
const standingChShot = [-2, 4];
const dashChShot = [-2, 4];
const fwdDashChShot = [1, 4];
const bkwdDashChShot = [1, 4];
const sideDashChShot = [1, 4];
const standingContFire = [-2, 4];
const dashContFire = [-2, 4];
const fwdDashContFire = [1, 4];
const bkwdDashContFire = [1, 4];
const sideDashContFire = [1, 4];
const meleeCombo = [-2, 4];
const meleeDashAttack = [-2, 4];
const powerAttack = [1, 4];
const itemAttack = [1, 4];
const recoveryEffect = [1, 4];
const fullHealthBoost = [1, 6];
const inPerilAttackBoost = [-4, 6];
const inPerilAutoDodge = [1, 3];
const knockbackRecovery = [1, 4];
const effectDuration = [1, 4];
const heartBonus = [-3, 3];
const selfInjury = [-1, -3];



//create object for array
// function Trait(value, valid, known) {
//     this.value = value;
//     this.valid = valid;
//     this.known = known;
// }

//45 different traits total including none
//order: +1, +2, +3, +4, +5, +6, +7, +8, -1, -2, -3, -4
//array to hold display values

//array to check if weapon trait value is known and most common validity, initialise to 0, invalid, known.
// var valueArray = new Array();
// for (var i = 0; i < 45; i++) {
//     valueArray[i] = new Array();
//     for (var j = 0; j < 14; j++) {
//         valueArray[i][j] = new Trait(0, false, true);
//     }
// }

// ----- array for attack values -----
// var rangedArray = new Array();
// rangedArray[0] = 0;
// rangedArray[1] = 14.9;
// rangedArray[2] = 23.2;
// rangedArray[3] = 31.5;
// rangedArray[4] = 39.8;
// rangedArray[5] = 48.1;
// rangedArray[6] = 56.4;
// rangedArray[7] = 64.7;
// rangedArray[8] = 73;
// rangedArray[9] = 81.3;
// rangedArray[10] = 89.6;
// rangedArray[11] = 98.2;
// rangedArray[12] = 106.2;

// var meleeArray = new Array();
// meleeArray[0] = 0;
// meleeArray[1] = 9.4;
// meleeArray[2] = 15.2;
// meleeArray[3] = 21;
// meleeArray[4] = 26.8;
// meleeArray[5] = 32.6;
// meleeArray[6] = 38.4;
// meleeArray[7] = 44.2;
// meleeArray[8] = 50;
// meleeArray[9] = 55.8;
// meleeArray[10] = 61.6;
// meleeArray[11] = 67.4;
// meleeArray[12] = 73.2;

// ----- setting array values -----

//0. None

//1. Standing Ch. Shot
// set_all_values(1, "-2", "+4", new Array(-12.8, -6.4, 9.2, 15.8, 22.4, 29));

//2. Dash Ch. Shot
// set_all_values(2, "-2", "+4", new Array(-22.1, -11.1, 13.2, 23.3, 33.4, 43.6));

//3. Fwd-Dash Ch. Shot
// set_all_values(3, "+1", "+4", new Array(11.2, 19.1, 26.9, 34.8));

//4. Side-Dash Ch. Shot
// set_all_values(4, "+1", "+4", new Array(9.9, 16.7, 23.5, 30.4));

//5. Bkwd-Dash Ch. Shot
// set_all_values(5, "+1", "+4", new Array(10.6, 17.9, 25.2, 32.6));

//6. Standing Cont. Fire
// set_all_values(6, "-2", "+4", new Array(-10.1, -5.1, 7.9, 13.0, 18.0, 23.1));

//7. Dash-Cont Fire
// set_all_values(7, "-2", "+4", new Array(-18.5, -9.2, 10.6, 17.2, 23.8, 30.4));

//8. Fwd-Dash Cont. Fire
// set_all_values(8, "+1", "+4", new Array(8.6, 14.2, 19.7, 25.3));

//9. Side-Dash Cont. Fire
// set_all_values(9, "+1", "+4", new Array(8.6, 14.2, 19.7, 25.3));

//10. Bkwd-Dash Cont. Fire
// set_all_values(10, "+1", "+4", new Array(8.6, 14.2, 19.7, 25.3));

//11. Melee Combo
// set_all_values(11, "-2", "+4", new Array(-12.8, -6.4, 9.2, 15.3, 21.4, 27.5));

//12. Melee Dash Attack
// set_all_values(12, "-2", "+4", new Array(-11.0, -5.5, 7.9, 12.6, 17.3, 22.0));

//13. Item Attack
// set_all_values(13, "+1", "+4", new Array(14.5, 27.7, 40.9, 54.1));

//14. Power Attack
// set_all_values(14, "+1", "+4", new Array(23.8, 40.3, 56.8, 73.3));

//15. Health
// set_all_values(15, "-4", "+6", new Array(-31.1, -23.5, -15.8, -8.1, 9.0, 18.4, 27.9, 37.3, 46.7, 56.1));

//16. Shot Defense
// set_all_values(16, "-2", "+4", new Array(-31.2, -14.9, 15.0, 29.8, 44.7, 59.6));

//17. Melee Defense
// set_all_values(17, "-2", "+4", new Array(-20.8, -8.9, 9.9, 18.5, 27.1, 35.6));

//18. Knockback Defense
// set_all_values(18, "+1", "+4", new Array(6.6, 13.2, 19.8, 26.4));

//19. Knockback Recovery
// set_value(19, "+1", 10.6);

//20. Status Resistance
// set_all_values(20, "-4", "+4", new Array(-16.6, -13.6, -10.7, -7.7, 12.8, 21.3, 29.8, 38.3));

//21. Overall Defense
// set_all_values(21, "-4", "+8", new Array(-44.0, -34.8, -25.7, -16.5, 15.0, 25.8, 36.6, 47.5, 58.3, 69.2, 80.0, 90.9));

//22. Stamina
// set_all_values(22, "+1", "+4", new Array(11.9, 17.9, 23.9, 29.9));

//23. Speed
// set_all_values(23, "-4", "+4", new Array(-30.8, -24.2, -17.6, -11.0, 9.2, 17.2, 25.1, 33.0));

//24. Running Speed
// set_all_values(24, "+1", "+4", new Array(7.9, 13.4, 18.9, 24.4));

//25. Walking Speed
// set_all_values(25, "+1", "+4", new Array(6.6, 9.9, 13.2, 16.5));

//26. Evasion
// set_all_values(26, "+1", "+4", new Array(10.8, 17.2, 23.5, 29.9));

//27. Recovery Effect
// set_all_values(27, "+1", "+4", new Array(15.8, 21.1, 26.4, 31.7));

//28. Effect Duration
// set_all_values(28, "+1", "+4", new Array(10.6, 20.2, 29.9, 39.6));

//29. Poison
// set_all_values(29, "+1", "+4", new Array(6.2, 10.0, 13.9, 17.8));

//30. Paralysis
// set_all_values(30, "+1", "+4", new Array(7.9, 14.5, 21.1, 27.7));

//31. Weakness
// set_all_values(31, "+1", "+4", new Array(9.2, 16.4, 23.5, 30.6));

//32. Petrification
// set_all_values(32, "+1", "+4", new Array(16.9, 20.9, 24.9, 28.8));

//33. Shaking
// set_all_values(33, "+1", "+4", new Array(7.3, 14.1, 20.9, 27.7));

//34. Confusion
// set_all_values(34, "+1", "+4", new Array(7.3, 14.1, 20.9, 27.7));

//35. Burning
// set_all_values(35, "+1", "+4", new Array(7.9, 13.9, 19.8, 25.7));

//36. Freezing
// set_all_values(36, "+1", "+4", new Array(20.2, 25.5, 30.8, 36.1));

//37. Shot Range
// set_all_values(37, "-3", "+3", new Array(-12.5, -9.2, -5.9, 13.9, 24.3, 34.8));

//38. Shot Homing
// set_all_values(38, "-3", "+3", new Array(-11.7, -8.1, -4.6, 11.9, 18.7, 25.5));

//39. Shot Cancellation
// set_value(39, "+1", 42.5);

//40. Self-injury
// set_all_values(40, "-3", "-1", new Array(-17.6, -13.2, -8.8));

//41. Full-Health Boost
// set_all_values(41, "+1", "+6", new Array(8.6, 12.3, 16.1, 19.8, 23.5, 27.3));

//42. In-peril Auto-dodge
// set_all_values(42, "+1", "+3", new Array(7.7, 11.6, 15.4));

//43. In-peril Attack Boost
// set_all_values(43, "-4", "+6", new Array(-21.3, -17.8, -14.2, -10.7, 9.9, 16.0, 22.0, 28.1, 34.2, 40.3));

//44. Heart Boost
// set_all_values(44, "-3", "+3", new Array(-6.6, -5.0, -3.3, 8.8, 17.6, 26.4));


// ----- validation -----
// function validate(n) {
//create id names
// var traitName = "trait" + n;
// var traitddlName = "trait" + n + "value";
// var traitErr = "trait" + n + "err";

// var trait_ddl = document.getElementById(traitName);
// var traitValue_ddl = document.getElementById(traitddlName);

// var trait = trait_ddl.options[trait_ddl.selectedIndex].value;
// var traitValue = traitValue_ddl.options[traitValue_ddl.selectedIndex].value;
// var errorText = document.getElementById(traitErr);
// var rangedText = document.getElementById("rangedValue");
// var meleeText = document.getElementById("meleeValue");

//make sure star values displayed
// rangedText.innerHTML = rangedArray[get_ranged_item()];
// meleeText.innerHTML = meleeArray[get_melee_item()];

//check for validity and known values
//     if (traitValue == -1) {
//         document.getElementById(traitErr).innerHTML = "";
//         return true;
//     }
//     else if (trait == 0) {
//         errorText.innerHTML = "";
//         return true;
//     }
//     else if (valueArray[trait][traitValue].valid == false) {
//         errorText.style.color = "red";
//         errorText.innerHTML = "Invalid attribute";
//         return false;
//     }
//     else if (valueArray[trait][traitValue].known == false) {
//         errorText.style.color = "red";
//         errorText.innerHTML = "Unknown value, will not include in calculation.";
//         return true;
//     }
//     else {
//         errorText.style.color = "white";
//         errorText.innerHTML = valueArray[trait][traitValue].value;
//         return true;
//     }

// }

// ----- calculation -----
// function calculate() {
//     var value = 100;
//     var result = document.getElementById("result");

//make sure everything is valid

// if (validate_all() == false) {
//     result.innerHTML = "err";
// }
// else {
//figure out attack values
// for (var i = 0; i < document.form.ranged.length; i++) {
//     if (document.form.ranged[i].checked) {
//         value += rangedArray[document.form.ranged[i].value];
//     }
// }

// for (var i = 0; i < document.form.melee.length; i++) {
//     if (document.form.melee[i].checked) {
//         value += meleeArray[document.form.melee[i].value];
//     }
// }

// for (var i = 1; i <= 6; i++) {
//figure out attribute values for all
//             var traitName = "trait" + i;
//             var traitddlName = "trait" + i + "value";
//             var traitErr = "trait" + i + "err";

//             var trait_ddl = document.getElementById(traitName);
//             var traitValue_ddl = document.getElementById(traitddlName);

//             var trait = trait_ddl.options[trait_ddl.selectedIndex].value;
//             var traitValue = traitValue_ddl.options[traitValue_ddl.selectedIndex].value;

//             if (traitValue != -1) {
//                 value += valueArray[trait][traitValue].value;
//             }
//         }

//         if (value >= 100) {
//             result.innerHTML = Math.floor(value);
//         }
//         else {
//             result.innerHTML = Math.ceil(value);
//         }

//     }

// }

// -----reset-----
// function reset_form() {
//revert all labels
// document.getElementById("rangedValue").innerHTML = 0;
// document.getElementById("meleeValue").innerHTML = 0;
// document.getElementById("trait1err").innerHTML = "";
// document.getElementById("trait2err").innerHTML = "";
// document.getElementById("trait3err").innerHTML = "";
// document.getElementById("trait4err").innerHTML = "";
// document.getElementById("trait5err").innerHTML = "";
// document.getElementById("trait6err").innerHTML = "";
// document.getElementById("result").innerHTML = 100;


//reset radio button
// document.form.ranged[0].checked = true;
// document.form.melee[0].checked = true;

//reset all drop down lists
//     document.form.trait1.selectedIndex = 0;
//     document.form.trait1.options[0].selected = true;
//     document.form.trait1value.selectedIndex = 0;
//     document.form.trait1value.options[0].selected = true;

//     document.form.trait2.selectedIndex = 0;
//     document.form.trait2.options[0].selected = true;
//     document.form.trait2value.selectedIndex = 0;
//     document.form.trait2value.options[0].selected = true;

//     document.form.trait3.selectedIndex = 0;
//     document.form.trait3.options[0].selected = true;
//     document.form.trait3value.selectedIndex = 0;
//     document.form.trait3value.options[0].selected = true;

//     document.form.trait4.selectedIndex = 0;
//     document.form.trait4.options[0].selected = true;
//     document.form.trait4value.selectedIndex = 0;
//     document.form.trait4value.options[0].selected = true;

//     document.form.trait5.selectedIndex = 0;
//     document.form.trait5.options[0].selected = true;
//     document.form.trait5value.selectedIndex = 0;
//     document.form.trait5value.options[0].selected = true;

//     document.form.trait6.selectedIndex = 0;
//     document.form.trait6.options[0].selected = true;
//     document.form.trait6value.selectedIndex = 0;
//     document.form.trait6value.options[0].selected = true;

// }

// function validate_all() {
//     for (var i = 1; i <= 6; i++) {
//         if (validate(i) == false) {
//             return false;
//         }
//     }
// }

//set all the values from lowest to highest
// function set_all_values(trait, startMod, endMod, arr) {
//     var startIndex = toIndex(startMod);
//     var endIndex = toIndex(endMod);
//     var j = 0;

//     for (var i = startIndex; i <= endIndex; i++) {
//         valueArray[trait][i].value = arr[j];
//         valueArray[trait][i].valid = true;
//         j++;
//     }

// }

// function toIndex(modifier) {
//     var traitValue;

//     switch (modifier) {
//         case "+1":
//             traitValue = 4;
//             break;
//         case "+2":
//             traitValue = 5;
//             break;
//         case "+3":
//             traitValue = 6;
//             break;
//         case "+4":
//             traitValue = 7;
//             break;
//         case "+5":
//             traitValue = 8;
//             break;
//         case "+6":
//             traitValue = 9;
//             break;
//         case "+7":
//             traitValue = 10;
//             break;
//         case "+8":
//             traitValue = 11;
//             break;
//         case "-1":
//             traitValue = 3;
//             break;
//         case "-2":
//             traitValue = 2;
//             break;
//         case "-3":
//             traitValue = 1;
//             break;
//         case "-4":
//             traitValue = 0;
//             break;
//         default:
//             alert("Mysterious error!");
//     }

//     return traitValue;
// }

// function set_value(trait, modifier, value) {
//     traitValue = toIndex(modifier);

//     valueArray[trait][traitValue].value = value;
//     valueArray[trait][traitValue].valid = true;
// }

// function show_ranged_value(n) {
//     document.getElementById("rangedValue").innerHTML = rangedArray[n];
// }

// function show_melee_value(n) {
//     document.getElementById("meleeValue").innerHTML = meleeArray[n];
// }

// function get_ranged_item() {
//     for (var i = 0; i <= 12; i++) {
//         if (document.form.ranged[i].checked) {
//             return i;
//         }
//     }
// }

// function get_melee_item() {
//     for (var i = 0; i <= 12; i++) {
//         if (document.form.melee[i].checked) {
//             return i;
//         }
//     }
// }
