import { alpha } from "@mui/material/styles";

// ----------------------------------------------------------------------

function createGradient(color1: any, color2: any) {
  return `linear-gradient(to bottom, ${color1}, ${color2})`;
}

// SETUP COLORS
const GREY = {
  0: "#FFFFFF",
  100: "#F9FAFB",
  200: "#F4F6F8",
  300: "#DFE3E8",
  400: "#C4CDD5",
  500: "#919EAB",
  600: "#637381",
  700: "#454F5B",
  800: "#212B36",
  900: "#161C24",
  500_8: alpha("#919EAB", 0.08),
  500_12: alpha("#919EAB", 0.12),
  500_16: alpha("#919EAB", 0.16),
  500_24: alpha("#919EAB", 0.24),
  500_32: alpha("#919EAB", 0.32),
  500_48: alpha("#919EAB", 0.48),
  500_56: alpha("#919EAB", 0.56),
  500_80: alpha("#919EAB", 0.8),
};

const PRIMARY = {
  lighter: "#b1cad6",
  light: "#82abbe",
  main: "#253c47",
  dark: "#253c47",
  darker: "#18272e",
  contrastText: "#fff",
};
const SECONDARY = {
  lighter: "#8decfb",
  light: "#48e1f8",
  main: "#046675",
  dark: "#035a67",
  darker: "#023c45",
  contrastText: "#fff",
};
const INFO = {
  lighter: "#7b98e9",
  light: "#3e68df",
  main: "#1e46b7",
  dark: "#142f7a",
  darker: "#0a173d",
  contrastText: "#fff",
};
const SUCCESS = {
  lighter: "#35c411",
  light: "#2ca30e",
  main: "#2ca30e",
  dark: "#1a6208",
  darker: "#114105",
  contrastText: GREY[800],
};
const WARNING = {
  lighter: "#fff8cc",
  light: "#fb8622",
  main: "#fb7d10",
  dark: "#d26303",
  darker: "#7c6a00",
  contrastText: GREY[800],
};
const ERROR = {
  lighter: "#ea5658",
  light: "#ea5658",
  main: "#9f1315",
  dark: "#7f0f10",
  darker: "#3f0708",
  contrastText: "#fff",
};

const GRADIENTS = {
  primary: createGradient(PRIMARY.light, PRIMARY.main),
  info: createGradient(INFO.light, INFO.main),
  success: createGradient(SUCCESS.light, SUCCESS.main),
  warning: createGradient(WARNING.light, WARNING.main),
  error: createGradient(ERROR.light, ERROR.main),
};

const CHART_COLORS = {
  violet: ["#826AF9", "#9E86FF", "#D0AEFF", "#F7D2FF"],
  blue: ["#2D99FF", "#83CFFF", "#A5F3FF", "#CCFAFF"],
  green: ["#2CD9C5", "#60F1C8", "#A4F7CC", "#C0F2DC"],
  yellow: ["#FFE700", "#FFEF5A", "#FFF7AE", "#FFF3D6"],
  red: ["#FF6C40", "#FF8F6D", "#FFBD98", "#FFF2D4"],
};

const COMMON = {
  common: { black: "#000", white: "#fff" },
  primary: { ...PRIMARY },
  secondary: { ...SECONDARY },
  info: { ...INFO },
  success: { ...SUCCESS },
  warning: { ...WARNING },
  error: { ...ERROR },
  grey: GREY,
  gradients: GRADIENTS,
  chart: CHART_COLORS,
  divider: GREY[500_24],
  action: {
    hover: GREY[500_8],
    selected: GREY[500_16],
    disabled: GREY[500_80],
    disabledBackground: GREY[500_24],
    focus: GREY[500_24],
    hoverOpacity: 0.08,
    disabledOpacity: 0.48,
  },
};

const palette = {
  light: {
    ...COMMON,
    text: {
      primary: GREY[800],
      secondary: GREY[600],
      disabled: GREY[500],
      error: ERROR.main,
    },
    background: { paper: "#f5f5f5", default: "#fff", neutral: GREY[200] },
    action: {
      ...COMMON.action,
      active: GREY[600],
      inputBackground: "#F4F6F8",
    },
  },
};

export default palette;
