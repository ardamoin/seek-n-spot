import arthur from "../assets/characters/arthur.png";
import bobomb from "../assets/characters/bobomb.png";
import boo from "../assets/characters/boo.png";
import chief from "../assets/characters/chief.png";
import cj from "../assets/characters/cj.png";
import cloud from "../assets/characters/cloud.png";
import conker from "../assets/characters/conker.png";
import crash from "../assets/characters/crash.png";
import drake from "../assets/characters/drake.png";
import kratos from "../assets/characters/kratos.png";
import link from "../assets/characters/link.png";
import luigi from "../assets/characters/luigi.png";
import marcus from "../assets/characters/marcus.png";
import mario from "../assets/characters/mario.png";
import mew from "../assets/characters/mew.png";
import niko from "../assets/characters/niko.png";
import parappa from "../assets/characters/parappa.png";
import prince from "../assets/characters/prince.png";
import ratchet from "../assets/characters/ratchet.png";
import raz from "../assets/characters/raz.png";
import ryu from "../assets/characters/ryu.png";
import samba from "../assets/characters/samba.png";
import sonic from "../assets/characters/sonic.png";
import tommy from "../assets/characters/tommy.png";

const charImages = {
  N64: {
    Luigi: luigi,
    Conker: conker,
    Bobomb: bobomb,
  },

  PS1: {
    Cloud: cloud,
    Crash: crash,
    PaRappa: parappa,
  },

  Dreamcast: {
    Mew: mew,
    Sonic: sonic,
    Samba: samba,
  },

  Xbox: {
    CJ: cj,
    Raz: raz,
    Ryu: ryu,
  },

  PS2: {
    Prince: prince,
    Ratchet: ratchet,
    Tommy: tommy,
  },

  Gamecube: {
    Boo: boo,
    Link: link,
    Mario: mario,
  },

  Xbox360: {
    "Master Chief": chief,
    Marcus: marcus,
    Niko: niko,
  },

  PS4: {
    "Arthur Morgan": arthur,
    "Nathan Drake": drake,
    Kratos: kratos,
  },
};

export default charImages;
