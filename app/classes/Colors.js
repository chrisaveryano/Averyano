class Colors {
  constructor() {
    this.monitorsDark = document.querySelectorAll(
      '.services__optimized__dev__image--offdark'
    );
    this.monitorsLight = document.querySelectorAll(
      '.services__optimized__dev__image--offlight'
    );
  }
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
    // if LightMode
    if (color === '0,0,0') {
      [...this.monitorsDark].map((el) => (el.style.opacity = 0));
      [...this.monitorsLight].map((el) => (el.style.opacity = 1));
    } else {
      // if DarkMode
      [...this.monitorsDark].map((el) => (el.style.opacity = 1));
      [...this.monitorsLight].map((el) => (el.style.opacity = 0));
    }
    document.documentElement.style.setProperty('--data-color-primary', color);
    // document.documentElement.style.setProperty('--data-color-link', linkColor);
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
  }
}

export const ColorsManager = new Colors();
