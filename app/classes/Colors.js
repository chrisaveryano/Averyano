import GSAP from 'gsap';

class Colors {
  constructor() {}
  change({
    backgroundColor,
    color,
    transparent,
    brightnessOn,
    brightnessOff,
    linkColor,
    servicesBgColor,
    servicesElColor,
  }) {
    document.documentElement.style.setProperty('--data-color-primary', color);
    document.documentElement.style.setProperty('--data-color-link', linkColor);
    document.documentElement.style.setProperty(
      '--data-color-servicesel',
      servicesElColor
    );
    document.documentElement.style.setProperty(
      '--data-color-servicesbg',
      servicesBgColor
    );
    document.documentElement.style.setProperty(
      '--data-color-brightness-on',
      brightnessOn
    );
    document.documentElement.style.setProperty(
      '--data-color-brightness-off',
      brightnessOff
    );
    document.documentElement.style.setProperty(
      '--data-color-transparent',
      transparent
    );
    document.documentElement.style.setProperty(
      '--data-color-secondary',
      backgroundColor
    );
    // GSAP.to(document.documentElement, {
    //   backgroundColor,
    //   color,
    //   duration: 1.5,
    // });
    // document.documentElement.style.setProperty('--your-variable', '#YOURCOLOR');
  }
}

export const ColorsManager = new Colors();
