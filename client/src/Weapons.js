export class weapon {
    constructor(weaponType, position) {
        this.weaponType = weaponType;
        this.position = position;
        this.trueID = (weaponType - 1) * 12 + position;
    }
}
//Blades
export const firstBlade = new weapon("First Blade", 1, 1);
export const burstBlade = new weapon("Burst Blade", 1, 2);
export const viperBlade = new weapon("Viper Blade", 1, 3);
export const crusaderBlade = new weapon("Crusader Blade", 1, 4);
export const royalBlade = new weapon("Royal Blade", 1, 5);
export const opticalBlade = new weapon("Optical Blade", 1, 6);
export const samuraiBlade = new weapon("Samurai Blade", 1, 7);
export const bulletBlade = new weapon("Bullet Blade", 1, 8);
export const aquariusBlade = new weapon("Aquarius Blade", 1, 9);
export const aurumBlade = new weapon("Aurum Blade", 1, 10);
export const palutenaBlade = new weapon("Palutena Blade", 1, 11);
export const gaolBlade = new weapon("Gaol Blade", 1, 12);
//Staff
export const insightStaff = new weapon("Insight Staff", 2, 1);
export const orbStaff = new weapon("Orb Staff", 2, 2);
export const roseStaff = new weapon("Rose Staff", 2, 3);
export const knuckleStaff = new weapon("Knuckle Staff", 2, 4);
export const ancientStaff = new weapon("Ancient Staff", 2, 5);
export const lancerStaff = new weapon("Lancer Staff", 2, 6);
export const flintlockStaff = new weapon("Flintlock Staff", 2, 7);
export const somewhatStaff = new weapon("Somewhat Staff", 2, 8);
export const scorpioStaff = new weapon("Scorpio Staff", 2, 9);
export const laserStaff = new weapon("Laser Staff", 2, 10);
export const darkPitStaff = new weapon("Dark Pit Staff", 2, 11);
export const thanatosStaff = new weapon("Thanatos Staff", 2, 12);
//Claws
export const tigerClaws = new weapon("Tiger Claws", 3, 1);
export const wolfClaws = new weapon("Wolf Claws", 3, 2);
export const bearClaws = new weapon("Bear Claws", 3, 3);
export const brawlerClaws = new weapon("Brawler Claws", 3, 4);
export const stealthClaws = new weapon("Stealth Claws", 3, 5);
export const hedgehogClaws = new weapon("Hedgehog Claws", 3, 6);
export const raptorClaws = new weapon("Raptor Claws", 3, 7);
export const artilleryClaws = new weapon("Artillery Claws", 3, 8);
export const cancerClaws = new weapon("Cancer Claws", 3, 9);
export const beamClaws = new weapon("Beam Claws", 3, 10);
export const viridiClaws = new weapon("Viridi Claws", 3, 11);
export const pandoraClaws = new weapon("Pandora Claws", 3, 12);
// Bows
export const fortuneBow = new weapon("Fortune Bow", 4, 1);
export const silverBow = new weapon("Silver Bow", 4, 2);
export const meteorBow = new weapon("Meteor Bow", 4, 3);
export const divineBow = new weapon("Divine Bow", 4, 4);
export const darknessBow = new weapon("Darkness Bow", 4, 5);
export const crystalBow = new weapon("Crystal Bow", 4, 6);
export const angelBow = new weapon("Angel Bow", 4, 7);
export const hawkeyeBow = new weapon("Hawkeye Bow", 4, 8);
export const sagittariusBow = new weapon("Sagittarius Bow", 4, 9);
export const aurumBow = new weapon("Aurum Bow", 4, 10);
export const palutenaBow = new weapon("Palutena Bow", 4, 11);
export const phosphoraBow = new weapon("Phosphora Bow", 4, 12);
//Palms
export const violetPalm = new weapon("Violet Palm", 5, 1);
export const burningPalm = new weapon("Burning Palm", 5, 2);
export const needlePalm = new weapon("Needle Palm", 5, 3);
export const midnightPalm = new weapon("Midnight Palm", 5, 4);
export const cursedPalm = new weapon("Cursed Palm", 5, 5);
export const cutterPalm = new weapon("Cutter Palm", 5, 6);
export const pudgyPalm = new weapon("Pudgy Palm", 5, 7);
export const ninjaPalm = new weapon("Ninja Palm", 5, 8);
export const virgoPalm = new weapon("Virgo Palm", 5, 9);
export const aurumPalm = new weapon("Aurum Palm", 5, 10);
export const viridiPalm = new weapon("Viridi Palm", 5, 11);
export const greatReaperPalm = new weapon("Great Reaper Palm", 5, 12);
//Clubs
export const oreClub = new weapon("Ore Club", 6, 1);
export const babelClub = new weapon("Babel Club", 6, 2);
export const skyscraperClub = new weapon("Skyscraper Club", 6, 3);
export const atlasClub = new weapon("Atlas Club", 6, 4);
export const earthmaulClub = new weapon("Earthmaul Club", 6, 5);
export const ogreClub = new weapon("Ogre Club", 6, 6);
export const haloClub = new weapon("Halo Club", 6, 7);
export const blackClub = new weapon("Black Club", 6, 8);
export const capricornClub = new weapon("Capricorn Club", 6, 9);
export const aurumClub = new weapon("Aurum Club", 6, 10);
export const hewdrawClub = new weapon("Hewdraw Club", 6, 11);
export const magnusClub = new weapon("Magnus Club", 6, 12);
//Cannons
export const ezCannon = new weapon("EZ Cannon", 7, 1);
export const ballCannon = new weapon("Ball Cannon", 7, 2);
export const predatorCannon = new weapon("Predator Cannon", 7, 3);
export const poseidonCannon = new weapon("Poseidon Cannon", 7, 4);
export const fireworksCannon = new weapon("Fireworks Cannon", 7, 5);
export const railCannon = new weapon("Rail Cannon", 7, 6);
export const dynamoCannon = new weapon("Dynamo Cannon", 7, 7);
export const doomCannon = new weapon("Doom Cannon", 7, 8);
export const leoCannon = new weapon("Leo Cannon", 7, 9);
export const sonicCannon = new weapon("Sonic Cannon", 7, 10);
export const twinbellowsCannon = new weapon("Twinbellows Cannon", 7, 11);
export const cragalancheCannon = new weapon("Cragalanche Cannon", 7, 12);
//Orbitars
export const standardOrbitars = new weapon("Standard Orbitars", 8, 1);
export const guardianOrbitars = new weapon("Guardian Orbitars", 8, 2);
export const shockOrbitars = new weapon("Shock Orbitars", 8, 3);
export const eyetrackOrbitars = new weapon("Eyetrack Orbitars", 8, 4);
export const fairyOrbitars = new weapon("Fairy Orbitars", 8, 5);
export const pawPadOrbitars = new weapon("Paw Pad Orbitars", 8, 6);
export const jetstreamOrbitars = new weapon("Jetstream Orbitars", 8, 7);
export const boomOrbitars = new weapon("Boom Orbitars", 8, 8);
export const geminiOrbitars = new weapon("Gemini Orbitars", 8, 9);
export const aurumOrbitars = new weapon("Aurum Orbitars", 8, 10);
export const centurionOrbitars = new weapon("Centurion Orbitars", 8, 11);
export const arlonOrbitars = new weapon("Arlon Orbitars", 8, 12);
//Arms
export const crusherArm = new weapon("Crusher Arm", 9, 1);
export const compactArm = new weapon("Compact Arm", 9, 2);
export const electroshockArm = new weapon("Electroshock Arm", 9, 3);
export const volcanoArm = new weapon("Volcano Arm", 9, 4);
export const drillArm = new weapon("Drill Arm", 9, 5);
export const bomberArm = new weapon("Bomber Arm", 9, 6);
export const bowlArm = new weapon("Bowl Arm", 9, 7);
export const endAllArm = new weapon("End-All Arm", 9, 8);
export const taurusArm = new weapon("Taurus Arm", 9, 9);
export const upperdashArm = new weapon("Upperdash Arm", 9, 10);
export const krakenArm = new weapon("Kraken Arm", 9, 11);
export const phoenixArm = new weapon("Phoenix Arm", 9, 12);