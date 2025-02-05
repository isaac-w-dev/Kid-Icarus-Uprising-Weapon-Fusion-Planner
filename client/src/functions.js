import * as weapon from "./Weapons.js"
function negativeModifier(weaponValue1, weaponValue2) {
    const response = (weaponValue1 + weaponValue2) % 10;
    switch(response){
        case response < 4: return "Lower Value negative mod passes";
        case response > 4: return "Higher Value Negative mod passes";
        //If weapon values are the same the newest weapon is considered the higher value weapon
    }

}
function fusionGroupFinder(weaponTrueID1, weaponTrueID2) {
    const response = Math.abs(weaponTrueID1 - weaponTrueID2) % 5;
    switch (response) {
        case 0: return "Fusion Group 2";
        case 1: return "Fusion Group 4";
        case 2: return "Fusion Group 3";
        case 3: return "Fusion Group 1";
        case 4: return "Fusion Group 5";
    }
    //Fusion Groups Denote the maximum number of mods that can be passed down
}
//((fusionGroup + 1) + ((positivemodsweapon1 + positivemodsweapon2)/2)/2)
// console.log(fusionGroupFinder(weapon.earthmaulClub.trueID, 54));
//Tells you the maximum number of times you can be KO'd before losing based on the value of your weapon
function findMaximumTraits(){}
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


