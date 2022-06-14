import defaultLogo from '../../assets/images/logo/FOOTBALL/Default_Team.png';
import defaultBookie from '../../assets/images/bookies/comeon.png';

export const getImageCountry = (countryName) => {
  try {
    // eslint-disable-next-line no-undef
    const img = require(`../../assets/images/flags/${countryName}.png`);
    return img.default;
  } catch (err) {
    return defaultLogo;
  }
};

export const getImageTeam = (sport, name) => {
  try {
    // eslint-disable-next-line no-undef
    const img = require(`../../assets/images/logo/${sport}/${name}.png`);
    return img.default;
  } catch (err) {
    return defaultLogo;
  }
};


export const getImageBookie = (name) => {
  try {
    // eslint-disable-next-line no-undef
    const img = require(`../../assets/images/bookies/${name}.png`);
    return img.default;
  } catch (err) {
    return defaultBookie;
  }
};
