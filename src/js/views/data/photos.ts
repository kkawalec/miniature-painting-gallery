import { IGalleryTile } from 'views/components/GalleryGridList';

// 40K
const BloodAngelsArmy1 = require('../../../images/photos/BloodAngelsArmy1.jpg');
const BloodAngelsArmy2 = require('../../../images/photos/BloodAngelsArmy2.jpg');
const BloodAngelsDeathCompany = require('../../../images/photos/BloodAngelsDeathCompany.jpg');
const BloodAngelsLibrarianDreadnought = require('../../../images/photos/BloodAngelsLibrarianDreadnought.jpg');
const BloodAngelsSanguinaryGuard = require('../../../images/photos/BloodAngelsSanguinaryGuard.jpg');

const SkitariiArmy  = require('../../../images/photos/SkitariiArmy.jpg');
const SkitariiArmy2  = require('../../../images/photos/SkitariiArmy2.jpg');

const TyranidZoanthrope  = require('../../../images/photos/TyranidZoanthrope.jpg');
const TyranidArmy  = require('../../../images/photos/TyranidArmy.jpg');
const TyranidGargoyle  = require('../../../images/photos/TyranidGargoyle.jpg');
const TyranidTervigon  = require('../../../images/photos/TyranidTervigon.jpg');
const TyranidTervigon2  = require('../../../images/photos/TyranidTervigon2.jpg');
const TyranidWarriors  = require('../../../images/photos/TyranidWarriors.jpg');

const MagnusTheRed  = require('../../../images/photos/MagnusTheRed.jpg');
const ThousandSons  = require('../../../images/photos/ThousandSons.jpg');

const CraftworldsMachine  = require('../../../images/photos/CraftworldsMachine.jpg');
const CraftworldsWraithlord  = require('../../../images/photos/CraftworldsWraithlord.jpg');

const VisarchSwordOfYnnead  = require('../../../images/photos/VisarchSwordOfYnnead.jpg');
const VisarchSwordOfYnneadBack  = require('../../../images/photos/VisarchSwordOfYnneadBack.jpg');
const YncarneAvatarOfYnnead  = require('../../../images/photos/YncarneAvatarOfYnnead.jpg');
const YvraineEmissaryOfYnnead  = require('../../../images/photos/YvraineEmissaryOfYnnead.jpg');

const NecronDoomScythe  = require('../../../images/photos/NecronDoomScythe.jpg');
const NecronsTesseractVault  = require('../../../images/photos/NecronsTesseractVault.jpg');

// Malifaux
const Lilith  = require('../../../images/photos/Lilith.jpg');
const LilithBack  = require('../../../images/photos/LilithBack.jpg');
const LeluLilitu  = require('../../../images/photos/Lelu&Lilitu.jpg');
const Titania  = require('../../../images/photos/Titania.jpg');
const Vanessa  = require('../../../images/photos/Vanessa.jpg');
const VanessaBack  = require('../../../images/photos/VanessaBack.jpg');
const TerrorTots  = require('../../../images/photos/TerrorTots.jpg');

// AOS
const NighthauntArmy1  = require('../../../images/photos/NighthauntArmy1.jpg');
const NighthauntArmy2  = require('../../../images/photos/NighthauntArmy2.jpg');
const NighthauntArmy3  = require('../../../images/photos/NighthauntArmy3.jpg');

const MagewrathThrone  = require('../../../images/photos/MagewrathThrone.jpg');

const StormcastEternalsArmy  = require('../../../images/photos/StormcastEternalsArmy.jpg');
const StormcastEternalsProsecutors  = require('../../../images/photos/StormcastEternalsProsecutors.jpg');

// Necromunda
const Necromunda2  = require('../../../images/photos/Necromunda2.jpg');

// TTG2
const TTG2Erzebel  = require('../../../images/photos/TTG2Erzebel.jpg');
const TTG2ErzebelBack  = require('../../../images/photos/TTG2ErzebelBack.jpg');

const tileData: IGalleryTile[] = [
  // 40K
  {
    img: BloodAngelsArmy1,
    title: 'Blood Angels Army',
    rows: 2,
    cols: 2,
    game: '40K',
    paintingType: 'mix',
  },
  {
    img: BloodAngelsArmy2,
    title: 'Blood Angels Army',
    rows: 1,
    cols: 2,
    game: '40K',
    paintingType: 'mix',
  },
  {
    img: BloodAngelsDeathCompany,
    title: 'Blood Angels Death Company',
    rows: 1,
    cols: 2,
    game: '40K',
    paintingType: 'pro',
  },
  {
    img: BloodAngelsLibrarianDreadnought,
    title: 'Blood Angels Librarian Dreadnought',
    rows: 3,
    cols: 2,
    game: '40K',
    paintingType: 'pro',
  },
  {
    img: BloodAngelsSanguinaryGuard,
    title: 'Blood Angels Sanguinary Guards',
    rows: 2,
    cols: 2,
    game: '40K',
    paintingType: 'pro',
  },

  {
    img: SkitariiArmy,
    title: 'Skitarii Army',
    rows: 2,
    cols: 2,
    game: '40K',
    paintingType: 'pro',
  },
  {
    img: SkitariiArmy2,
    title: 'Skitarii Army',
    rows: 2,
    cols: 2,
    game: '40K',
    paintingType: 'pro',
  },

  {
    img: TyranidArmy,
    title: 'Tyranid Army',
    rows: 2,
    cols: 2,
    game: '40K',
    paintingType: 'mix',
  },
  {
    img: TyranidZoanthrope,
    title: 'Tyranid Zoanthrope',
    rows: 3,
    cols: 1,
    game: '40K',
    paintingType: 'pro',
  },

  {
    img: TyranidGargoyle,
    title: 'Tyranid Gargoyle',
    rows: 1,
    cols: 1,
    game: '40K',
    paintingType: 'pro',
  },
  {
    img: TyranidTervigon,
    title: 'Tyranid Tervigon',
    rows: 2,
    cols: 2,
    game: '40K',
    paintingType: 'pro',
  },
  {
    img: TyranidTervigon2,
    title: 'Tyranid Tervigon',
    rows: 2,
    cols: 2,
    game: '40K',
    paintingType: 'pro',
  },
  {
    img: TyranidWarriors,
    title: 'Tyranid Warriors',
    rows: 2,
    cols: 2,
    game: '40K',
    paintingType: 'standard',
  },
  {
    img: MagnusTheRed,
    title: 'Magnus The Red',
    rows: 4,
    cols: 2,
    game: '40K',
    paintingType: 'pro',
  },
  {
    img: ThousandSons,
    title: 'Thousand Sons',
    rows: 3,
    cols: 2,
    game: '40K',
    paintingType: 'standard',
  },
  {
    img: CraftworldsMachine,
    title: 'Craftworlds Machine',
    rows: 2,
    cols: 1,
    game: '40K',
    paintingType: 'standard',
  },
  {
    img: CraftworldsWraithlord,
    title: 'Craftworlds Wraithlord',
    rows: 2,
    cols: 1,
    game: '40K',
    paintingType: 'standard',
  },
  {
    img: VisarchSwordOfYnnead,
    title: 'Visarch Sword of Ynnead',
    rows: 2,
    cols: 1,
    game: '40K',
    paintingType: 'pro',
  },
  {
    img: VisarchSwordOfYnneadBack,
    title: 'Visarch Sword of Ynnead (Back)',
    rows: 2,
    cols: 1,
    game: '40K',
    paintingType: 'pro',
  },
  {
    img: YncarneAvatarOfYnnead,
    title: 'Yncarne Avatar of Ynnead',
    rows: 4,
    cols: 2,
    game: '40K',
    paintingType: 'pro',
  },
  {
    img: YvraineEmissaryOfYnnead,
    title: 'Yvraine Emissary of Ynnead',
    rows: 3,
    cols: 2,
    game: '40K',
    paintingType: 'pro',
  },
  {
    img: NecronDoomScythe,
    title: 'Necron Doom Scythe',
    rows: 3,
    cols: 2,
    game: '40K',
    paintingType: 'standard',
  },
  {
    img: NecronsTesseractVault,
    title: 'Necron Tesseract Vault',
    rows: 4,
    cols: 2,
    game: '40K',
    paintingType: 'pro',
  },

  // AOS
  {
    img: NighthauntArmy1,
    title: 'Nighthaunt Army',
    rows: 1,
    cols: 2,
    game: 'AOS',
    paintingType: 'standard',
  },
  {
    img: NighthauntArmy2,
    title: 'Nighthaunt Army',
    rows: 2,
    cols: 2,
    game: 'AOS',
    paintingType: 'standard',
  },
  {
    img: NighthauntArmy3,
    title: 'Nighthaunt Army',
    rows: 2,
    cols: 2,
    game: 'AOS',
    paintingType: 'standard',
  },
  {
    img: MagewrathThrone,
    title: 'Magewrath Throne',
    rows: 3,
    cols: 2,
    game: 'AOS',
    paintingType: 'standard',
  },
  {
    img: StormcastEternalsArmy,
    title: 'Stormcast Eternals Army',
    rows: 2,
    cols: 2,
    game: 'AOS',
    paintingType: 'basic',
  },
  {
    img: StormcastEternalsProsecutors,
    title: 'Stormcast Eternals Prosecutors',
    rows: 2,
    cols: 2,
    game: 'AOS',
    paintingType: 'basic',
  },

  // Necromunda
  {
    img: Necromunda2,
    title: 'Necromunda',
    rows: 1,
    cols: 2,
    game: 'Necromunda',
    paintingType: 'pro',
  },

  // Malifaux
  {
    img: Lilith,
    title: 'Lilith',
    rows: 2,
    cols: 1,
    game: 'Malifaux',
    paintingType: 'pro',
  },
  {
    img: LilithBack,
    title: 'Lilith - Back',
    rows: 2,
    cols: 1,
    game: 'Malifaux',
    paintingType: 'pro',
  },
  {
    img: TerrorTots,
    title: 'Terror Tots',
    rows: 1,
    cols: 1,
    game: 'Malifaux',
    paintingType: 'pro',
  },
  {
    img: LeluLilitu,
    title: 'Lelu & Lilitu',
    rows: 1,
    cols: 1,
    game: 'Malifaux',
    paintingType: 'pro',
  },
  {
    img: Titania,
    title: 'Titania',
    rows: 2,
    cols: 2,
    game: 'Malifaux',
    paintingType: 'pro',
  },
  {
    img: Vanessa,
    title: 'Vanessa',
    rows: 2,
    cols: 1,
    game: 'Malifaux',
    paintingType: 'pro',
  },
  {
    img: VanessaBack,
    title: 'Vanessa - Back',
    rows: 2,
    cols: 1,
    game: 'Malifaux',
    paintingType: 'pro',
  },

  // TTG2
  {
    img: TTG2Erzebel,
    title: 'Raging Heroes - Erzebel',
    rows: 3,
    cols: 1,
    game: 'TTG2',
    paintingType: 'pro',
  },
  {
    img: TTG2ErzebelBack,
    title: 'Raging Heroes - Erzebel (Back)',
    rows: 3,
    cols: 1,
    game: 'TTG2',
    paintingType: 'pro',
  },
];

export default tileData;
