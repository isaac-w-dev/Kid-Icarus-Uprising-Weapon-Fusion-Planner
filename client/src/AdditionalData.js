
//Information to be implemented with the rest of the app courtesy of GitHub user Drinal
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
