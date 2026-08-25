/* @ds-bundle: {"format":4,"namespace":"CrystalClearWindowsDesignSystem_426e3c","components":[],"sourceHashes":{"ui_kits/website/app.jsx":"d9ba241d6741","ui_kits/website/components.jsx":"d029cfb3e10c","ui_kits/website/quote.jsx":"9094b3e593d1","ui_kits/website/sections1.jsx":"b1ae72c71650","ui_kits/website/sections2.jsx":"5c109a7c255a"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.CrystalClearWindowsDesignSystem_426e3c = window.CrystalClearWindowsDesignSystem_426e3c || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// ui_kits/website/app.jsx
try { (() => {
/* global React, ReactDOM, Nav, Hero, TrustBar, Services, HowItWorks, BeforeAfter, Reviews, QuoteBand, Footer, QuoteModal, Button, Icon */
const {
  useState: useSApp,
  useEffect: useEApp
} = React;
function FloatWhatsApp() {
  const [hover, setHover] = useSApp(false);
  useEApp(() => {
    if (window.lucide) window.lucide.createIcons();
  });
  const msg = encodeURIComponent("Hi Crystal Clear, I'd like a window cleaning quote.");
  return /*#__PURE__*/React.createElement("a", {
    href: `https://wa.me/353838750886?text=${msg}`,
    target: "_blank",
    rel: "noopener noreferrer",
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    "aria-label": "Chat with us on WhatsApp",
    onClick: () => window.ccTrack && window.ccTrack('whatsapp'),
    style: {
      position: 'fixed',
      right: 22,
      bottom: 22,
      zIndex: 90,
      display: 'flex',
      alignItems: 'center',
      gap: hover ? 11 : 0,
      height: 58,
      paddingRight: hover ? 22 : 0,
      paddingLeft: hover ? 18 : 0,
      width: hover ? 'auto' : 58,
      background: '#25D366',
      color: '#fff',
      borderRadius: 999,
      textDecoration: 'none',
      boxShadow: '0 12px 30px rgba(37,211,102,0.42)',
      transition: 'gap var(--dur) var(--ease-out), padding var(--dur) var(--ease-out)',
      justifyContent: 'center',
      whiteSpace: 'nowrap',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      flex: '0 0 auto',
      width: hover ? 26 : 58,
      height: 58,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "message-circle",
    size: 27,
    stroke: 2.2,
    style: {
      color: '#fff'
    }
  })), hover && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-text)',
      fontWeight: 700,
      fontSize: 15.5
    }
  }, "Chat on WhatsApp"));
}
function App() {
  const [quoteOpen, setQuoteOpen] = useSApp(false);
  const openQuote = () => {
    if (window.ccTrack) window.ccTrack('quote_open');
    setQuoteOpen(true);
  };
  // re-scan Lucide icons after every render
  useEApp(() => {
    if (window.lucide) window.lucide.createIcons();
  });
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--frost-50)',
      minHeight: '100vh'
    }
  }, /*#__PURE__*/React.createElement(Nav, {
    onQuote: openQuote
  }), /*#__PURE__*/React.createElement(Hero, {
    onQuote: openQuote
  }), /*#__PURE__*/React.createElement(TrustBar, null), /*#__PURE__*/React.createElement(Services, null), /*#__PURE__*/React.createElement(BeforeAfter, null), /*#__PURE__*/React.createElement(HowItWorks, null), /*#__PURE__*/React.createElement(Reviews, null), /*#__PURE__*/React.createElement(QuoteBand, {
    onQuote: openQuote
  }), /*#__PURE__*/React.createElement(Footer, null), /*#__PURE__*/React.createElement(QuoteModal, {
    open: quoteOpen,
    onClose: () => setQuoteOpen(false)
  }), /*#__PURE__*/React.createElement(FloatWhatsApp, null));
}
ReactDOM.createRoot(document.getElementById('root')).render(/*#__PURE__*/React.createElement(App, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/app.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/components.jsx
try { (() => {
/* global React, lucide */
// Crystal Clear Windows — shared UI primitives
const {
  useState,
  useEffect,
  useRef
} = React;

// --- Icon: renders a Lucide line icon, re-scanned after every render ---
function Icon({
  name,
  size = 20,
  stroke = 2,
  style,
  className
}) {
  return /*#__PURE__*/React.createElement("i", {
    "data-lucide": name,
    width: size,
    height: size,
    className: className,
    style: {
      display: 'inline-flex',
      width: size,
      height: size,
      ...style
    }
  });
}
function useLucide(dep) {
  useEffect(() => {
    if (window.lucide) window.lucide.createIcons();
  });
}

// --- Brand logo lockup ---
function Logo({
  dark = false,
  compact = false,
  size = 40
}) {
  return /*#__PURE__*/React.createElement("span", {
    className: "cc-logo",
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 11
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo-mark.svg",
    alt: "Crystal Clear Windows",
    width: size,
    height: size,
    style: {
      display: 'block'
    }
  }), !compact && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      lineHeight: 0.98
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 20,
      letterSpacing: '-0.02em',
      color: dark ? '#fff' : 'var(--fg1)'
    }
  }, "Crystal Clear"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-text)',
      fontWeight: 600,
      fontSize: 9.5,
      letterSpacing: '0.2em',
      textTransform: 'uppercase',
      marginTop: 2,
      color: dark ? 'var(--sky-300)' : 'var(--brand-strong)'
    }
  }, "Window Cleaning")));
}

// --- Button ---
function Button({
  children,
  variant = 'primary',
  size = 'md',
  pill,
  icon,
  iconRight,
  onClick,
  style,
  type
}) {
  const [hover, setHover] = useState(false);
  const [press, setPress] = useState(false);
  const pads = {
    sm: '9px 16px',
    md: '13px 22px',
    lg: '16px 28px'
  };
  const fonts = {
    sm: 14,
    md: 15,
    lg: 17
  };
  const base = {
    fontFamily: 'var(--font-text)',
    fontWeight: 700,
    fontSize: fonts[size],
    border: 'none',
    cursor: 'pointer',
    padding: pads[size],
    borderRadius: pill ? 'var(--radius-pill)' : 'var(--radius-md)',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 9,
    transition: 'all var(--dur) var(--ease-out)',
    lineHeight: 1,
    whiteSpace: 'nowrap',
    transform: press ? 'scale(0.98)' : hover ? 'translateY(-2px)' : 'none'
  };
  const variants = {
    primary: {
      background: hover ? 'var(--brand-strong)' : 'var(--brand)',
      color: '#fff',
      boxShadow: press ? 'var(--shadow-sm)' : 'var(--shadow-brand)'
    },
    secondary: {
      background: hover ? 'var(--sky-50)' : '#fff',
      color: 'var(--brand-strong)',
      boxShadow: `inset 0 0 0 1.5px ${hover ? 'var(--sky-300)' : 'var(--sky-200)'}`
    },
    ghost: {
      background: hover ? 'var(--bg-sunken)' : 'transparent',
      color: 'var(--fg2)',
      boxShadow: 'none'
    },
    onbrand: {
      background: hover ? '#fff' : 'rgba(255,255,255,0.95)',
      color: 'var(--brand-strong)',
      boxShadow: press ? 'none' : 'var(--shadow-md)'
    }
  };
  return /*#__PURE__*/React.createElement("button", {
    type: type || 'button',
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setPress(false);
    },
    onMouseDown: () => setPress(true),
    onMouseUp: () => setPress(false),
    style: {
      ...base,
      ...variants[variant],
      ...style
    }
  }, icon && /*#__PURE__*/React.createElement(Icon, {
    name: icon,
    size: size === 'lg' ? 20 : 18
  }), children, iconRight && /*#__PURE__*/React.createElement(Icon, {
    name: iconRight,
    size: size === 'lg' ? 20 : 18
  }));
}

// --- Eyebrow label ---
function Eyebrow({
  children,
  dark
}) {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-text)',
      fontWeight: 700,
      fontSize: 13,
      letterSpacing: '0.14em',
      textTransform: 'uppercase',
      color: dark ? 'var(--sky-300)' : 'var(--brand-strong)'
    }
  }, children);
}

// --- Star rating ---
function Stars({
  value = 5,
  size = 18
}) {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      gap: 2
    }
  }, [1, 2, 3, 4, 5].map(i => /*#__PURE__*/React.createElement("i", {
    key: i,
    "data-lucide": "star",
    width: size,
    height: size,
    style: {
      width: size,
      height: size,
      color: 'var(--sun-500)',
      fill: i <= value ? 'var(--sun-400)' : 'transparent'
    }
  })));
}

// --- Section container ---
function Container({
  children,
  style,
  className
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: className,
    style: {
      width: '100%',
      maxWidth: 1180,
      margin: '0 auto',
      padding: '0 28px',
      ...style
    }
  }, children);
}

// --- Reveal-on-scroll wrapper ---
// Lightweight entrance animation. Starts VISIBLE by default for reliability
// (no stuck-hidden states); adds a gentle one-time rise via CSS keyframes on mount.
function Reveal({
  children,
  delay = 0,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      animation: `ccRise var(--dur-slow) var(--ease-out) ${delay}ms both`,
      ...style
    }
  }, children);
}
Object.assign(window, {
  Icon,
  useLucide,
  Logo,
  Button,
  Eyebrow,
  Stars,
  Container,
  Reveal
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/components.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/quote.jsx
try { (() => {
/* global React, Button, Icon, Stars */
const {
  useState: useSQ
} = React;
function QuoteModal({
  open,
  onClose
}) {
  const [step, setStep] = useSQ(0);
  const [svc, setSvc] = useSQ('Home windows');
  const [prop, setProp] = useSQ('Semi-detached');
  const [name, setName] = useSQ('');
  const [phone, setPhone] = useSQ('');
  const [addr, setAddr] = useSQ('');
  const [eir, setEir] = useSQ('');
  const [when, setWhen] = useSQ('');
  const [hear, setHear] = useSQ('');
  const submitQuote = () => {
    const lines = ['Hi Crystal Clear, I’d like a free quote.', '', 'Service: ' + svc, 'Property: ' + prop, name ? 'Name: ' + name : null, phone ? 'Phone: ' + phone : null, addr ? 'Address: ' + addr : null, eir ? 'Eircode: ' + eir : null, when ? 'Timing: ' + when : null, hear ? 'Heard via: ' + hear : null].filter(Boolean);
    const text = encodeURIComponent(lines.join('\n'));
    if (window.ccTrack) window.ccTrack('quote_sent', {
      service: svc
    });
    window.open('https://wa.me/353838750886?text=' + text, '_blank', 'noopener');
    setStep(1);
  };
  React.useEffect(() => {
    if (window.lucide) window.lucide.createIcons();
  });
  if (!open) return null;
  const services = ['Home windows', 'Shop front', 'Facia & soffit', 'Solar panels'];
  const propTypes = ['Apartment', 'Terraced', 'Semi-detached', 'Detached', 'Bungalow', 'Commercial'];
  const hearOpts = ['Word of mouth', 'Google', 'Facebook', 'Saw the van', 'Repeat customer', 'Other'];
  const whenOpts = ['As soon as possible', 'Within a few weeks', 'Just getting a price'];
  const chip = active => ({
    fontFamily: 'var(--font-text)',
    fontWeight: 600,
    fontSize: 14,
    padding: '9px 15px',
    borderRadius: 999,
    cursor: 'pointer',
    transition: 'all var(--dur) var(--ease-out)',
    border: active ? '1.5px solid var(--brand)' : '1.5px solid var(--line-strong)',
    background: active ? 'var(--sky-50)' : '#fff',
    color: active ? 'var(--brand-strong)' : 'var(--fg2)'
  });
  const field = {
    fontFamily: 'var(--font-text)',
    fontSize: 15,
    color: 'var(--fg1)',
    background: '#fff',
    border: '1.5px solid var(--line-strong)',
    borderRadius: 'var(--radius-md)',
    padding: '12px 14px',
    width: '100%',
    outline: 'none'
  };
  const label = {
    fontFamily: 'var(--font-text)',
    fontWeight: 600,
    fontSize: 13,
    color: 'var(--fg2)',
    marginBottom: 7,
    display: 'block'
  };
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClose,
    style: {
      position: 'fixed',
      inset: 0,
      zIndex: 100,
      background: 'rgba(11,29,49,0.55)',
      backdropFilter: 'blur(4px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: e => e.stopPropagation(),
    style: {
      width: 480,
      maxWidth: '100%',
      maxHeight: '92vh',
      display: 'flex',
      flexDirection: 'column',
      background: '#fff',
      borderRadius: 24,
      boxShadow: 'var(--shadow-xl)',
      overflow: 'hidden',
      animation: 'ccpop var(--dur-slow) var(--ease-out)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      background: 'linear-gradient(120deg, var(--sky-600), var(--sky-500))',
      padding: '24px 26px',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: '-40%',
      left: '10%',
      width: '40%',
      height: '180%',
      transform: 'rotate(18deg)',
      background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.18), transparent)'
    }
  }), /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    style: {
      position: 'absolute',
      top: 16,
      right: 16,
      width: 34,
      height: 34,
      borderRadius: 10,
      border: 'none',
      background: 'rgba(255,255,255,0.18)',
      color: '#fff',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "x",
    size: 18
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-text)',
      fontWeight: 700,
      fontSize: 12.5,
      letterSpacing: '0.14em',
      textTransform: 'uppercase',
      color: 'var(--sky-200)'
    }
  }, "Free quote"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 26,
      color: '#fff',
      marginTop: 6,
      lineHeight: 1.1
    }
  }, step === 0 ? 'Let’s get you a price' : 'You’re all set!'))), step === 0 ? /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 26,
      overflowY: 'auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: label
  }, "What needs cleaning?"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 9
    }
  }, services.map(s => /*#__PURE__*/React.createElement("button", {
    key: s,
    onClick: () => setSvc(s),
    style: chip(svc === s)
  }, s)))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: label
  }, "Property type"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 9
    }
  }, propTypes.map(p => /*#__PURE__*/React.createElement("button", {
    key: p,
    onClick: () => setProp(p),
    style: chip(prop === p)
  }, p)))), /*#__PURE__*/React.createElement("div", {
    className: "cc-fieldrow",
    style: {
      display: 'flex',
      gap: 14,
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: label
  }, "Your name"), /*#__PURE__*/React.createElement("input", {
    style: field,
    value: name,
    onChange: e => setName(e.target.value),
    placeholder: "Jane Doe"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: label
  }, "Phone"), /*#__PURE__*/React.createElement("input", {
    style: field,
    value: phone,
    onChange: e => setPhone(e.target.value),
    placeholder: "087 000 0000"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "cc-fieldrow",
    style: {
      display: 'flex',
      gap: 14,
      marginBottom: 22
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 2
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: label
  }, "Address"), /*#__PURE__*/React.createElement("input", {
    style: field,
    value: addr,
    onChange: e => setAddr(e.target.value),
    placeholder: "Where are we cleaning?"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: label
  }, "Eircode"), /*#__PURE__*/React.createElement("input", {
    style: field,
    value: eir,
    onChange: e => setEir(e.target.value.toUpperCase()),
    placeholder: "F26 W1Y6",
    maxLength: 8
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 22
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: label
  }, "When do you need it?"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 9
    }
  }, whenOpts.map(w => /*#__PURE__*/React.createElement("button", {
    key: w,
    onClick: () => setWhen(w),
    style: chip(when === w)
  }, w)))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 22
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: label
  }, "How did you hear about us?"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 9
    }
  }, hearOpts.map(h => /*#__PURE__*/React.createElement("button", {
    key: h,
    onClick: () => setHear(h),
    style: chip(hear === h)
  }, h)))), /*#__PURE__*/React.createElement(Button, {
    pill: true,
    size: "lg",
    style: {
      width: '100%'
    },
    iconRight: "arrow-right",
    onClick: submitQuote
  }, "Send via WhatsApp"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-text)',
      fontSize: 13,
      color: 'var(--fg3)',
      textAlign: 'center',
      margin: '14px 0 0',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 7
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "shield-check",
    size: 15,
    style: {
      color: 'var(--success)'
    }
  }), "Opens WhatsApp with your details ready to send. No spam.")) : /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '30px 26px 30px',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 66,
      height: 66,
      margin: '0 auto 18px',
      borderRadius: '50%',
      background: 'var(--success-bg)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    size: 34,
    style: {
      color: 'var(--success)'
    },
    stroke: 2.5
  })), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 22,
      color: 'var(--fg1)',
      margin: 0
    }
  }, "Opening WhatsApp\u2026"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-text)',
      fontSize: 15.5,
      lineHeight: 1.6,
      color: 'var(--fg2)',
      margin: '10px auto 0',
      maxWidth: 330
    }
  }, "Just hit send in WhatsApp and we\u2019ll text you a price for your ", /*#__PURE__*/React.createElement("strong", {
    style: {
      color: 'var(--fg1)'
    }
  }, svc.toLowerCase()), ", usually within the hour. If it didn\u2019t open, call ", /*#__PURE__*/React.createElement("a", {
    href: "tel:0838750886",
    style: {
      color: 'var(--brand-strong)',
      fontWeight: 700
    }
  }, "083 875 0886"), "."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 22
    }
  }, /*#__PURE__*/React.createElement(Button, {
    pill: true,
    variant: "secondary",
    onClick: onClose
  }, "Back to site")))));
}
Object.assign(window, {
  QuoteModal
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/quote.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/sections1.jsx
try { (() => {
/* global React, Logo, Button, Eyebrow, Stars, Container, Reveal, Icon */
const {
  useState: useS1,
  useEffect: useE1
} = React;

// Decorative on-brand "photo" of a sunny window — stands in for real photography.
function WindowPhoto({
  height = 420,
  radius = 22,
  panes = [2, 2],
  label
}) {
  const [cols, rows] = panes;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      height,
      borderRadius: radius,
      overflow: 'hidden',
      background: 'linear-gradient(165deg,#cfe9fb 0%,#a8d6f4 42%,#7fbfe9 100%)',
      boxShadow: 'var(--shadow-lg)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: -60,
      right: -40,
      width: 220,
      height: 220,
      borderRadius: '50%',
      background: 'radial-gradient(circle, rgba(255,233,170,0.9), rgba(255,233,170,0) 65%)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 18,
      display: 'grid',
      gridTemplateColumns: `repeat(${cols},1fr)`,
      gridTemplateRows: `repeat(${rows},1fr)`,
      gap: 10
    }
  }, Array.from({
    length: cols * rows
  }).map((_, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      borderRadius: 10,
      background: 'linear-gradient(135deg, rgba(255,255,255,0.45), rgba(255,255,255,0.08))',
      boxShadow: 'inset 0 0 0 2px rgba(255,255,255,0.55)'
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: '-20%',
      left: '-10%',
      width: '60%',
      height: '140%',
      transform: 'rotate(18deg)',
      background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.55), transparent)'
    }
  }), label && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 16,
      bottom: 16,
      display: 'inline-flex',
      alignItems: 'center',
      gap: 7,
      background: 'rgba(255,255,255,0.18)',
      backdropFilter: 'blur(8px)',
      color: '#fff',
      fontWeight: 600,
      fontSize: 13,
      padding: '7px 13px',
      borderRadius: 999,
      border: '1px solid rgba(255,255,255,0.35)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "camera",
    size: 15
  }), label));
}

// ---------- NAV ----------
function Nav({
  onQuote
}) {
  const [scrolled, setScrolled] = useS1(false);
  useE1(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  const links = ['Services', 'Our work', 'Pricing'];
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 50,
      background: scrolled ? 'rgba(255,255,255,0.78)' : 'rgba(255,255,255,0)',
      backdropFilter: scrolled ? 'blur(14px)' : 'none',
      borderBottom: scrolled ? '1px solid var(--line)' : '1px solid transparent',
      transition: 'all var(--dur) var(--ease-out)'
    }
  }, /*#__PURE__*/React.createElement(Container, {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      height: 76
    }
  }, /*#__PURE__*/React.createElement(Logo, null), /*#__PURE__*/React.createElement("nav", {
    className: "cc-navlinks",
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 30
    }
  }, links.map(l => /*#__PURE__*/React.createElement("a", {
    key: l,
    href: "#",
    style: {
      fontFamily: 'var(--font-text)',
      fontWeight: 600,
      fontSize: 15,
      color: 'var(--fg2)',
      textDecoration: 'none'
    },
    onMouseEnter: e => e.target.style.color = 'var(--brand-strong)',
    onMouseLeave: e => e.target.style.color = 'var(--fg2)'
  }, l))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "tel:0838750886",
    className: "cc-navtel",
    onClick: () => window.ccTrack && window.ccTrack('call'),
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 7,
      fontFamily: 'var(--font-text)',
      fontWeight: 700,
      fontSize: 15,
      color: 'var(--fg1)',
      textDecoration: 'none'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "phone",
    size: 17,
    style: {
      color: 'var(--brand-strong)'
    }
  }), "083 875 0886"), /*#__PURE__*/React.createElement(Button, {
    pill: true,
    onClick: onQuote
  }, "Get a free quote"))));
}

// ---------- HERO ----------
function Hero({
  onQuote
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      position: 'relative',
      background: 'linear-gradient(180deg, var(--sky-50) 0%, var(--frost-50) 70%)',
      paddingTop: 56,
      paddingBottom: 88
    }
  }, /*#__PURE__*/React.createElement(Container, {
    className: "cc-hero",
    style: {
      display: 'grid',
      gridTemplateColumns: '1.05fr 0.95fr',
      gap: 56,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement(Eyebrow, null, "Residential & commercial"), /*#__PURE__*/React.createElement("h1", {
    className: "cc-h1",
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 58,
      lineHeight: 1.02,
      letterSpacing: '-0.025em',
      color: 'var(--fg1)',
      margin: '16px 0 0'
    }
  }, "Windows so clean,", /*#__PURE__*/React.createElement("br", null), "you'll forget", /*#__PURE__*/React.createElement("br", null), "they're there."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-text)',
      fontSize: 20,
      lineHeight: 1.6,
      color: 'var(--fg2)',
      margin: '20px 0 0',
      maxWidth: 460
    }
  }, "Friendly, fully-insured window cleaning for homes and shop fronts across the area. Free quotes, streak-free results."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 14,
      marginTop: 30
    }
  }, /*#__PURE__*/React.createElement(Button, {
    pill: true,
    size: "lg",
    onClick: onQuote,
    iconRight: "arrow-right"
  }, "Get a free quote"), /*#__PURE__*/React.createElement(Button, {
    pill: true,
    size: "lg",
    variant: "secondary",
    icon: "play",
    onClick: () => window.ccTrack && window.ccTrack('see_work')
  }, "See our work")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 22,
      marginTop: 30,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 7,
      fontFamily: 'var(--font-text)',
      fontWeight: 600,
      fontSize: 14,
      color: 'var(--fg2)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "shield-check",
    size: 17,
    style: {
      color: 'var(--success)'
    }
  }), "Fully insured"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 7,
      fontFamily: 'var(--font-text)',
      fontWeight: 600,
      fontSize: 14,
      color: 'var(--fg2)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "sparkles",
    size: 17,
    style: {
      color: 'var(--brand-strong)'
    }
  }), "Streak-free guarantee"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 7,
      fontFamily: 'var(--font-text)',
      fontWeight: 600,
      fontSize: 14,
      color: 'var(--fg2)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "droplet",
    size: 17,
    style: {
      color: 'var(--brand-strong)'
    }
  }), "Pure-water, ladderless"))), /*#__PURE__*/React.createElement(Reveal, {
    delay: 120,
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "photos/roof-after.jpg",
    alt: "A freshly cleaned conservatory glass roof, crystal clear after our visit",
    className: "cc-hero-img",
    style: {
      width: '100%',
      height: 440,
      objectFit: 'cover',
      borderRadius: 22,
      boxShadow: 'var(--shadow-lg)',
      display: 'block'
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "cc-hero-badge-tr",
    style: {
      position: 'absolute',
      top: -18,
      right: -14,
      background: '#fff',
      borderRadius: 16,
      padding: '12px 16px',
      boxShadow: 'var(--shadow-lg)',
      display: 'flex',
      alignItems: 'center',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 38,
      height: 38,
      borderRadius: 11,
      background: 'var(--sky-50)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "badge-check",
    size: 22,
    style: {
      color: 'var(--brand-strong)'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      lineHeight: 1.2
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 15,
      color: 'var(--fg1)'
    }
  }, "Streak-free"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-text)',
      fontSize: 12.5,
      color: 'var(--fg3)'
    }
  }, "or we come back free"))), /*#__PURE__*/React.createElement("div", {
    className: "cc-hero-badge-bl",
    style: {
      position: 'absolute',
      bottom: -22,
      left: -16,
      background: '#fff',
      borderRadius: 16,
      padding: '13px 16px',
      boxShadow: 'var(--shadow-lg)',
      maxWidth: 230
    }
  }, /*#__PURE__*/React.createElement(Stars, {
    value: 5,
    size: 14
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-text)',
      fontSize: 13.5,
      color: 'var(--fg2)',
      margin: '7px 0 0',
      lineHeight: 1.45
    }
  }, "\u201CBest our windows have ever looked. Booked them again on the spot.\u201D"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-text)',
      fontWeight: 700,
      fontSize: 12.5,
      color: 'var(--fg3)',
      marginTop: 6
    }
  }, "\u2014 Marisa P., Oakdale")))));
}

// ---------- TRUST BAR ----------
function TrustBar() {
  const items = [{
    icon: 'home',
    stat: '500+',
    label: 'homes cleaned'
  }, {
    icon: 'droplet',
    stat: 'Pure-water',
    label: 'ladderless system'
  }, {
    icon: 'calendar-check',
    stat: 'Same-week',
    label: 'booking'
  }, {
    icon: 'shield-check',
    stat: 'Insured',
    label: '& guaranteed'
  }];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '1px solid var(--line)',
      borderBottom: '1px solid var(--line)',
      background: '#fff'
    }
  }, /*#__PURE__*/React.createElement(Container, {
    className: "cc-trust",
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4,1fr)',
      gap: 20,
      padding: '22px 28px'
    }
  }, items.map((it, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 13,
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 42,
      height: 42,
      borderRadius: 12,
      background: 'var(--sky-50)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: it.icon,
    size: 21,
    style: {
      color: 'var(--brand-strong)'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      lineHeight: 1.1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 19,
      color: 'var(--fg1)'
    }
  }, it.stat), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-text)',
      fontSize: 13.5,
      color: 'var(--fg3)'
    }
  }, it.label))))));
}

// ---------- SERVICES ----------
function Services() {
  const svc = [{
    icon: 'home',
    title: 'Home windows',
    body: 'Inside and out, frames and sills included. We treat your home like our own.'
  }, {
    icon: 'building-2',
    title: 'Shop fronts',
    body: 'Sparkling glass that brings people in. Flexible early-morning slots.'
  }, {
    icon: 'droplet',
    title: 'Facia & soffit',
    body: 'Grime, cobwebs, dirt and algae cleaned off your facia and soffit for a fresh, bright finish.'
  }, {
    icon: 'sun',
    title: 'Solar panels',
    body: 'Gentle, streak-free cleaning that keeps your panels working hard.'
  }];
  const [hover, setHover] = useS1(-1);
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '88px 0'
    }
  }, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement(Reveal, {
    style: {
      textAlign: 'center',
      maxWidth: 620,
      margin: '0 auto 48px'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "What we clean"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 40,
      letterSpacing: '-0.02em',
      color: 'var(--fg1)',
      margin: '14px 0 0'
    },
    className: "cc-h2"
  }, "One crew for every pane of glass"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-text)',
      fontSize: 18,
      color: 'var(--fg2)',
      margin: '14px 0 0',
      lineHeight: 1.6
    }
  }, "From a cosy bungalow to a busy shop front, we\u2019ve got the ladder, the kit, and the care.")), /*#__PURE__*/React.createElement("div", {
    className: "cc-grid4",
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4,1fr)',
      gap: 22
    }
  }, svc.map((s, i) => /*#__PURE__*/React.createElement(Reveal, {
    key: i,
    delay: i * 80
  }, /*#__PURE__*/React.createElement("div", {
    onMouseEnter: () => setHover(i),
    onMouseLeave: () => setHover(-1),
    style: {
      background: '#fff',
      border: '1px solid var(--line)',
      borderRadius: 'var(--radius-xl)',
      padding: 24,
      height: '100%',
      boxShadow: hover === i ? 'var(--shadow-lg)' : 'var(--shadow-md)',
      transform: hover === i ? 'translateY(-4px)' : 'none',
      transition: 'all var(--dur) var(--ease-out)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 50,
      height: 50,
      borderRadius: 14,
      background: 'var(--sky-50)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 18
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: s.icon,
    size: 25,
    style: {
      color: 'var(--brand-strong)'
    }
  })), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 20,
      color: 'var(--fg1)',
      margin: 0
    }
  }, s.title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-text)',
      fontSize: 15,
      lineHeight: 1.55,
      color: 'var(--fg2)',
      margin: '9px 0 0'
    }
  }, s.body)))))));
}
Object.assign(window, {
  WindowPhoto,
  Nav,
  Hero,
  TrustBar,
  Services
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/sections1.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/sections2.jsx
try { (() => {
/* global React, WindowPhoto, Button, Eyebrow, Stars, Container, Reveal, Icon */
const {
  useState: useS2,
  useRef: useR2
} = React;

// ---------- HOW IT WORKS ----------
function HowItWorks() {
  const steps = [{
    icon: 'message-circle',
    title: 'Tell us about your windows',
    body: 'Share your address and what needs cleaning. Takes about a minute.'
  }, {
    icon: 'badge-dollar-sign',
    title: 'Get a free, fast quote',
    body: 'A clear price — no surprises, no pushy sales calls.'
  }, {
    icon: 'calendar-check',
    title: 'Pick a time that works',
    body: 'Same-week slots available. We text you the morning of.'
  }, {
    icon: 'sparkles',
    title: 'Enjoy the view',
    body: 'We leave your glass streak-free, or we come back free.'
  }];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '88px 0',
      background: 'var(--frost-100)'
    }
  }, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement(Reveal, {
    style: {
      textAlign: 'center',
      maxWidth: 560,
      margin: '0 auto 50px'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "How it works"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 40,
      letterSpacing: '-0.02em',
      color: 'var(--fg1)',
      margin: '14px 0 0'
    },
    className: "cc-h2"
  }, "Booked in a minute. Clean in a day.")), /*#__PURE__*/React.createElement("div", {
    className: "cc-grid4",
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4,1fr)',
      gap: 20,
      position: 'relative'
    }
  }, steps.map((s, i) => /*#__PURE__*/React.createElement(Reveal, {
    key: i,
    delay: i * 90
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      padding: '0 6px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      width: 64,
      height: 64,
      margin: '0 auto 18px',
      borderRadius: 18,
      background: '#fff',
      boxShadow: 'var(--shadow-md)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: s.icon,
    size: 28,
    style: {
      color: 'var(--brand-strong)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: -8,
      right: -8,
      width: 26,
      height: 26,
      borderRadius: '50%',
      background: 'var(--brand)',
      color: '#fff',
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 13,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      boxShadow: 'var(--shadow-brand)'
    }
  }, i + 1)), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 18,
      color: 'var(--fg1)',
      margin: 0
    }
  }, s.title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-text)',
      fontSize: 14.5,
      lineHeight: 1.55,
      color: 'var(--fg2)',
      margin: '8px 0 0'
    }
  }, s.body)))))));
}

// ---------- BEFORE / AFTER (interactive drag slider) ----------
function BeforeAfter() {
  const [pos, setPos] = useS2(52);
  const ref = useR2(null);
  const dragging = useR2(false);
  const move = clientX => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    let p = (clientX - r.left) / r.width * 100;
    p = Math.max(2, Math.min(98, p));
    setPos(p);
  };
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '88px 0'
    }
  }, /*#__PURE__*/React.createElement(Container, {
    className: "cc-split",
    style: {
      display: 'grid',
      gridTemplateColumns: '0.9fr 1.1fr',
      gap: 56,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement(Eyebrow, null, "See the difference"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 40,
      letterSpacing: '-0.02em',
      color: 'var(--fg1)',
      margin: '14px 0 0'
    },
    className: "cc-h2"
  }, "Drag to see the shine"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-text)',
      fontSize: 18,
      lineHeight: 1.6,
      color: 'var(--fg2)',
      margin: '16px 0 0',
      maxWidth: 380
    }
  }, "This conservatory roof was buried under years of moss, sap and grime. One visit later, the glass is crystal clear. Pull the handle to see it for yourself."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 26,
      marginTop: 26
    }
  }, [['Before', 'var(--fg3)'], ['After', 'var(--brand-strong)']].map(([t, c]) => /*#__PURE__*/React.createElement("div", {
    key: t,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 10,
      height: 10,
      borderRadius: '50%',
      background: c
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-text)',
      fontWeight: 700,
      fontSize: 14,
      color: 'var(--fg1)'
    }
  }, t))))), /*#__PURE__*/React.createElement(Reveal, {
    delay: 100
  }, /*#__PURE__*/React.createElement("div", {
    ref: ref,
    className: "cc-ba-img",
    style: {
      position: 'relative',
      height: 440,
      borderRadius: 22,
      overflow: 'hidden',
      userSelect: 'none',
      cursor: 'ew-resize',
      boxShadow: 'var(--shadow-lg)'
    },
    onMouseDown: e => {
      dragging.current = true;
      move(e.clientX);
    },
    onMouseMove: e => dragging.current && move(e.clientX),
    onMouseUp: () => dragging.current = false,
    onMouseLeave: () => dragging.current = false,
    onTouchStart: e => move(e.touches[0].clientX),
    onTouchMove: e => move(e.touches[0].clientX)
  }, /*#__PURE__*/React.createElement("img", {
    src: "photos/roof-after.jpg",
    alt: "Conservatory roof after cleaning \u2014 crystal clear glass",
    draggable: false,
    style: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      clipPath: `inset(0 ${100 - pos}% 0 0)`
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "photos/roof-before.jpg",
    alt: "Conservatory roof before cleaning \u2014 covered in moss and debris",
    draggable: false,
    style: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      left: 14,
      top: 14,
      background: 'rgba(20,30,25,0.6)',
      color: '#fff',
      fontWeight: 700,
      fontSize: 12,
      padding: '5px 11px',
      borderRadius: 999
    }
  }, "Before")), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      right: 14,
      top: 14,
      background: 'rgba(255,255,255,0.22)',
      backdropFilter: 'blur(6px)',
      color: '#fff',
      fontWeight: 700,
      fontSize: 12,
      padding: '5px 11px',
      borderRadius: 999,
      border: '1px solid rgba(255,255,255,0.4)'
    }
  }, "After"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 0,
      bottom: 0,
      left: `${pos}%`,
      width: 3,
      background: '#fff',
      transform: 'translateX(-50%)',
      boxShadow: '0 0 12px rgba(0,0,0,0.25)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%,-50%)',
      width: 44,
      height: 44,
      borderRadius: '50%',
      background: '#fff',
      boxShadow: 'var(--shadow-md)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "move-horizontal",
    size: 22,
    style: {
      color: 'var(--brand-strong)'
    }
  })))))));
}

// ---------- REVIEWS ----------
function Reviews() {
  const data = [{
    q: 'Best our windows have ever looked. Friendly, on time, and the price was exactly what they quoted.',
    n: 'Marisa P.',
    loc: 'Oakdale'
  }, {
    q: 'They did our whole shop front before we opened. Glass is so clear it looks like there’s nothing there.',
    n: 'Dev R.',
    loc: 'Main St. Cafe'
  }, {
    q: 'Booked online in a minute and they came the same week. Will use again.',
    n: 'Carol & Jim',
    loc: 'Birchwood'
  }];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '88px 0',
      background: 'var(--frost-100)'
    }
  }, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement(Reveal, {
    style: {
      textAlign: 'center',
      maxWidth: 560,
      margin: '0 auto 46px'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "Neighbors love us"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 12,
      margin: '14px 0 0'
    }
  }, /*#__PURE__*/React.createElement(Stars, {
    value: 5,
    size: 24
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 32,
      color: 'var(--fg1)'
    }
  }, "5.0"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-text)',
      fontSize: 16,
      color: 'var(--fg3)'
    }
  }, "\xB7 230+ Google reviews"))), /*#__PURE__*/React.createElement("div", {
    className: "cc-grid3",
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 22
    }
  }, data.map((r, i) => /*#__PURE__*/React.createElement(Reveal, {
    key: i,
    delay: i * 90
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#fff',
      border: '1px solid var(--line)',
      borderRadius: 'var(--radius-xl)',
      padding: 26,
      height: '100%',
      boxShadow: 'var(--shadow-sm)'
    }
  }, /*#__PURE__*/React.createElement(Stars, {
    value: 5,
    size: 16
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-text)',
      fontSize: 16,
      lineHeight: 1.6,
      color: 'var(--fg1)',
      margin: '14px 0 18px'
    }
  }, "\u201C", r.q, "\u201D"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 11
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 38,
      height: 38,
      borderRadius: '50%',
      background: 'var(--sky-100)',
      color: 'var(--brand-strong)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 15
    }
  }, r.n[0]), /*#__PURE__*/React.createElement("div", {
    style: {
      lineHeight: 1.2
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-text)',
      fontWeight: 700,
      fontSize: 14.5,
      color: 'var(--fg1)'
    }
  }, r.n), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-text)',
      fontSize: 13,
      color: 'var(--fg3)'
    }
  }, r.loc)))))))));
}

// ---------- QUOTE BAND ----------
function QuoteBand({
  onQuote
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '20px 0 90px'
    }
  }, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement("div", {
    className: "cc-quote-box",
    style: {
      position: 'relative',
      overflow: 'hidden',
      borderRadius: 28,
      background: 'linear-gradient(120deg, var(--sky-600), var(--sky-500) 60%, var(--sky-400))',
      padding: '56px 56px',
      boxShadow: 'var(--shadow-lg)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: '-30%',
      left: '-5%',
      width: '50%',
      height: '160%',
      transform: 'rotate(18deg)',
      background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.16), transparent)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "cc-quote",
    style: {
      position: 'relative',
      display: 'grid',
      gridTemplateColumns: '1.2fr 0.8fr',
      gap: 40,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, {
    dark: true
  }, "Free, no-obligation quote"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 42,
      letterSpacing: '-0.02em',
      color: '#fff',
      margin: '14px 0 0',
      lineHeight: 1.05
    },
    className: "cc-h2"
  }, "Ready for a clearer view?"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-text)',
      fontSize: 18,
      lineHeight: 1.6,
      color: 'var(--fg-on-ink)',
      margin: '14px 0 0',
      maxWidth: 420,
      opacity: 0.95
    }
  }, "Tell us about your windows and we\u2019ll send a fast, friendly quote. Streak-free, or we come back free.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 14,
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "onbrand",
    size: "lg",
    pill: true,
    onClick: onQuote,
    iconRight: "arrow-right",
    style: {
      width: '100%'
    }
  }, "Get my free quote"), /*#__PURE__*/React.createElement("a", {
    href: "tel:0838750886",
    onClick: () => window.ccTrack && window.ccTrack('call'),
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 9,
      fontFamily: 'var(--font-text)',
      fontWeight: 700,
      fontSize: 16,
      color: '#fff',
      textDecoration: 'none',
      alignSelf: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "phone",
    size: 18
  }), "or call 083 875 0886"))))));
}

// ---------- FOOTER ----------
function Footer() {
  const cols = [{
    h: 'Services',
    l: ['Home windows', 'Shop fronts', 'Facia & soffit', 'Solar panels']
  }, {
    h: 'Company',
    l: ['About us', 'Our work', 'Careers']
  }, {
    h: 'Get in touch',
    l: ['083 875 0886', 'info@crystalclearwindowcleaning.ie', '40km radius of F26 W1Y6', 'Mon–Sat, 7am–6pm']
  }];
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: 'var(--bg-ink)',
      padding: '60px 0 32px'
    }
  }, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement("div", {
    className: "cc-foot",
    style: {
      display: 'grid',
      gridTemplateColumns: '1.4fr 1fr 1fr 1.2fr',
      gap: 36,
      paddingBottom: 40,
      borderBottom: '1px solid rgba(255,255,255,0.1)'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Logo, {
    dark: true
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-text)',
      fontSize: 14.5,
      lineHeight: 1.6,
      color: 'var(--fg-on-ink-2)',
      margin: '18px 0 0',
      maxWidth: 250
    }
  }, "Local, family-run window cleaning. Bright views, friendly faces, streak-free glass."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      marginTop: 18
    }
  }, [{
    icon: 'camera',
    href: '#'
  }, {
    icon: 'thumbs-up',
    href: 'https://www.facebook.com/share/1BcNSSUnwd/'
  }, {
    icon: 'map-pin',
    href: 'https://maps.app.goo.gl/ctG1N5HEddfXLjXo9?g_st=ac'
  }].map(s => /*#__PURE__*/React.createElement("a", {
    key: s.href,
    href: s.href,
    target: "_blank",
    rel: "noopener noreferrer",
    style: {
      width: 38,
      height: 38,
      borderRadius: 10,
      background: 'rgba(255,255,255,0.08)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'var(--sky-300)',
      transition: 'background var(--dur)'
    },
    onMouseEnter: e => e.target.style.background = 'rgba(255,255,255,0.16)',
    onMouseLeave: e => e.target.style.background = 'rgba(255,255,255,0.08)'
  }, /*#__PURE__*/React.createElement(Icon, {
    name: s.icon,
    size: 18
  }))))), cols.map((c, i) => /*#__PURE__*/React.createElement("div", {
    key: i
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-text)',
      fontWeight: 700,
      fontSize: 13,
      letterSpacing: '0.1em',
      textTransform: 'uppercase',
      color: 'var(--sky-300)',
      marginBottom: 16
    }
  }, c.h), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 11
    }
  }, c.l.map(l => /*#__PURE__*/React.createElement("a", {
    key: l,
    href: "#",
    style: {
      fontFamily: 'var(--font-text)',
      fontSize: 14.5,
      color: 'var(--fg-on-ink)',
      textDecoration: 'none',
      opacity: 0.85
    }
  }, l)))))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '26px 0',
      borderBottom: '1px solid rgba(255,255,255,0.1)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-text)',
      fontWeight: 700,
      fontSize: 13,
      letterSpacing: '0.1em',
      textTransform: 'uppercase',
      color: 'var(--sky-300)',
      marginBottom: 14
    }
  }, "Areas we cover"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '11px 18px'
    }
  }, [['Ballina', 'ballina'], ['Foxford', 'foxford'], ['Crossmolina', 'crossmolina'], ['Enniscrone', 'enniscrone'], ['Bonniconlon', 'bonniconlon'], ['Swinford', 'swinford'], ['Killala', 'killala'], ['Ballycastle', 'ballycastle'], ['Easkey', 'easkey'], ['Bangor Erris', 'bangor-erris'], ['Tubbercurry', 'tubbercurry'], ['Charlestown', 'charlestown'], ['Dromore West', 'dromore-west']].map(([n, s]) => /*#__PURE__*/React.createElement("a", {
    key: s,
    href: `areas/window-cleaning-${s}.html`,
    style: {
      fontFamily: 'var(--font-text)',
      fontSize: 14,
      color: 'var(--fg-on-ink)',
      textDecoration: 'none',
      opacity: 0.85
    }
  }, n)), /*#__PURE__*/React.createElement("a", {
    href: "areas/",
    style: {
      fontFamily: 'var(--font-text)',
      fontWeight: 700,
      fontSize: 14,
      color: 'var(--sky-300)',
      textDecoration: 'none'
    }
  }, "All areas \u2192"))), /*#__PURE__*/React.createElement("div", {
    className: "cc-footbar",
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingTop: 22
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-text)',
      fontSize: 13,
      color: 'var(--fg-on-ink-2)'
    }
  }, "\xA9 2026 Crystal Clear Windows \xB7 Fully insured & bonded"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-text)',
      fontSize: 13,
      color: 'var(--fg-on-ink-2)'
    }
  }, "Serving all towns & villages within 40km of F26 W1Y6"))));
}
Object.assign(window, {
  HowItWorks,
  BeforeAfter,
  Reviews,
  QuoteBand,
  Footer
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/sections2.jsx", error: String((e && e.message) || e) }); }

})();
