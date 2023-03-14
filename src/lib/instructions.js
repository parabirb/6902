// deps
import nop from "./instructions/nop.js";
import lda from "./instructions/lda.js";
import ldx from "./instructions/ldx.js";
import ldy from "./instructions/ldy.js";
import sta from "./instructions/sta.js";
import stx from "./instructions/stx.js";
import sty from "./instructions/sty.js";
import adc from "./instructions/adc.js";
import sbc from "./instructions/sbc.js";
import inc from "./instructions/inc.js";
import inx from "./instructions/inx.js";
import iny from "./instructions/iny.js";
import dec from "./instructions/dec.js";
import dex from "./instructions/dex.js";
import dey from "./instructions/dey.js";
import asl from "./instructions/asl.js";
import lsr from "./instructions/lsr.js";
import rol from "./instructions/rol.js";
import ror from "./instructions/ror.js";
import and from "./instructions/and.js";
import ora from "./instructions/ora.js";
import eor from "./instructions/eor.js";
import cmp from "./instructions/cmp.js";
import cpx from "./instructions/cpx.js";
import cpy from "./instructions/cpy.js";
import bit from "./instructions/bit.js";
import bcc from "./instructions/bcc.js";
import bcs from "./instructions/bcs.js";
import bne from "./instructions/bne.js";
import beq from "./instructions/beq.js";
import bpl from "./instructions/bpl.js";
import bmi from "./instructions/bmi.js";
import bvc from "./instructions/bvc.js";
import bvs from "./instructions/bvs.js";
import tax from "./instructions/tax.js";
import txa from "./instructions/txa.js";
import tay from "./instructions/tay.js";
import tya from "./instructions/tya.js";
import tsx from "./instructions/tsx.js";
import txs from "./instructions/txs.js";
import pha from "./instructions/pha.js";
import pla from "./instructions/pla.js";
import php from "./instructions/php.js";
import plp from "./instructions/plp.js";
import jmp from "./instructions/jmp.js";
import jsr from "./instructions/jsr.js";
import rts from "./instructions/rts.js";
import rti from "./instructions/rti.js";
import clc from "./instructions/clc.js";
import sec from "./instructions/sec.js";
import cld from "./instructions/cld.js";
import sed from "./instructions/sed.js";
import cli from "./instructions/cli.js";
import sei from "./instructions/sei.js";
import clv from "./instructions/clv.js";
import brk from "./instructions/brk.js";

// export
export default {
    // nop
    "ea": { mode: "i", controller: nop },
    // lda
    "ad": { mode: "a", controller: lda },
    "bd": { mode: "a,x", controller: lda },
    "b9": { mode: "a,y", controller: lda },
    "a9": { mode: "#", controller: lda },
    "a5": { mode: "zp", controller: lda },
    "a1": { mode: "(zp,x)", controller: lda },
    "b5": { mode: "zp,x", controller: lda },
    "b1": { mode: "(zp),y", controller: lda },
    // ldx
    "ae": { mode: "a", controller: ldx },
    "be": { mode: "a,y", controller: ldx },
    "a2": { mode: "#", controller: ldx },
    "a6": { mode: "zp", controller: ldx },
    "b6": { mode: "zp,y", controller: ldx },
    // ldy
    "ac": { mode: "a", controller: ldy },
    "bc": { mode: "a,x", controller: ldy },
    "a0": { mode: "#", controller: ldy },
    "a4": { mode: "zp", controller: ldy },
    "b4": { mode: "zp,x", controller: ldy },
    // sta
    "8d": { mode: "a", controller: sta },
    "9d": { mode: "a,x", controller: sta },
    "99": { mode: "a,y", controller: sta },
    "85": { mode: "zp", controller: sta },
    "81": { mode: "(zp,x)", controller: sta },
    "95": { mode: "zp,x", controller: sta },
    "91": { mode: "(zp),y", controller: sta },
    // stx
    "8e": { mode: "a", controller: stx },
    "86": { mode: "zp", controller: stx },
    "96": { mode: "zp,y", controller: stx },
    // sty
    "8c": { mode: "a", controller: sty },
    "84": { mode: "zp", controller: sty },
    "94": { mode: "zp,x", controller: sty },
    // adc
    "6d": { mode: "a", controller: adc },
    "7d": { mode: "a,x", controller: adc },
    "79": { mode: "a,y", controller: adc },
    "69": { mode: "#", controller: adc },
    "65": { mode: "zp", controller: adc },
    "61": { mode: "(zp,x)", controller: adc },
    "75": { mode: "zp,x", controller: adc },
    "71": { mode: "(zp),y", controller: adc },
    // sbc
    "ed": { mode: "a", controller: sbc },
    "fd": { mode: "a,x", controller: sbc },
    "f9": { mode: "a,y", controller: sbc },
    "e9": { mode: "#", controller: sbc },
    "e5": { mode: "zp", controller: sbc },
    "e1": { mode: "(zp,x)", controller: sbc },
    "f5": { mode: "zp,x", controller: sbc },
    "f1": { mode: "(zp),y", controller: sbc },
    // inc
    "ee": { mode: "a", controller: inc },
    "fe": { mode: "a,x", controller: inc },
    "e6": { mode: "zp", controller: inc },
    "f6": { mode: "zp,x", controller: inc },
    // inx
    "e8": { mode: "i", controller: inx },
    // iny
    "c8": { mode: "i", controller: iny },
    // dec
    "ce": { mode: "a", controller: dec },
    "de": { mode: "a,x", controller: dec },
    "c6": { mode: "zp", controller: dec },
    "d6": { mode: "zp,x", controller: dec },
    // dex
    "ca": { mode: "i", controller: dex },
    // dey
    "88": { mode: "i", controller: dey },
    // asl
    "0e": { mode: "a", controller: asl },
    "1e": { mode: "a,x", controller: asl },
    "0a": { mode: "A", controller: asl },
    "06": { mode: "zp", controller: asl },
    "16": { mode: "zp,x", controller: asl },
    // lsr
    "4e": { mode: "a", controller: lsr },
    "5e": { mode: "a,x", controller: lsr },
    "4a": { mode: "A", controller: lsr },
    "46": { mode: "zp", controller: lsr },
    "56": { mode: "zp,x", controller: lsr },
    // rol
    "2e": { mode: "a", controller: rol },
    "3e": { mode: "a,x", controller: rol },
    "2a": { mode: "A", controller: rol },
    "26": { mode: "zp", controller: rol },
    "36": { mode: "zp,x", controller: rol },
    // ror
    "6e": { mode: "a", controller: ror },
    "7e": { mode: "a,x", controller: ror },
    "6a": { mode: "A", controller: ror },
    "66": { mode: "zp", controller: ror },
    "76": { mode: "zp,x", controller: ror },
    // and
    "2d": { mode: "a", controller: and },
    "3d": { mode: "a,x", controller: and },
    "39": { mode: "a,y", controller: and },
    "29": { mode: "#", controller: and },
    "25": { mode: "zp", controller: and },
    "21": { mode: "(zp,x)", controller: and },
    "35": { mode: "zp,x", controller: and },
    "31": { mode: "(zp),y", controller: and },
    // ora
    "0d": { mode: "a", controller: ora },
    "1d": { mode: "a,x", controller: ora },
    "19": { mode: "a,y", controller: ora },
    "09": { mode: "#", controller: ora },
    "05": { mode: "zp", controller: ora },
    "01": { mode: "(zp,x)", controller: ora },
    "15": { mode: "zp,x", controller: ora },
    "11": { mode: "(zp),y", controller: ora },
    // eor
    "4d": { mode: "a", controller: eor },
    "5d": { mode: "a,x", controller: eor },
    "59": { mode: "a,y", controller: eor },
    "49": { mode: "#", controller: eor },
    "45": { mode: "zp", controller: eor },
    "41": { mode: "(zp,x)", controller: eor },
    "55": { mode: "zp,x", controller: eor },
    "51": { mode: "(zp),y", controller: eor },
    // cmp
    "cd": { mode: "a", controller: cmp },
    "dd": { mode: "a,x", controller: cmp },
    "d9": { mode: "a,y", controller: cmp },
    "c9": { mode: "#", controller: cmp },
    "c5": { mode: "zp", controller: cmp },
    "c1": { mode: "(zp,x)", controller: cmp },
    "d5": { mode: "zp,x", controller: cmp },
    "d1": { mode: "(zp),y", controller: cmp },
    // cpx
    "ec": { mode: "a", controller: cpx },
    "e0": { mode: "#", controller: cpx },
    "e4": { mode: "zp", controller: cpx },
    // cpy
    "cc": { mode: "a", controller: cpy },
    "c0": { mode: "#", controller: cpy },
    "c4": { mode: "zp", controller: cpy },
    // bit
    "2c": { mode: "a", controller: bit },
    "89": { mode: "#", controller: bit },
    "24": { mode: "zp", controller: bit },
    // bcc
    "90": { mode: "r", controller: bcc },
    // bcs
    "b0": { mode: "r", controller: bcs },
    // bne
    "d0": { mode: "r", controller: bne },
    // beq
    "f0": { mode: "r", controller: beq },
    // bpl
    "10": { mode: "r", controller: bpl },
    // bmi
    "30": { mode: "r", controller: bmi },
    // bvc
    "50": { mode: "r", controller: bvc },
    // bvs
    "70": { mode: "r", controller: bvs },
    // tax
    "aa": { mode: "i", controller: tax },
    // txa
    "8a": { mode: "i", controller: txa },
    // tay
    "a8": { mode: "i", controller: tay },
    // tya
    "98": { mode: "i", controller: tya },
    // tsx
    "ba": { mode: "i", controller: tsx },
    // txs
    "9a": { mode: "i", controller: txs },
    // pha
    "48": { mode: "i", controller: pha },
    // pla
    "68": { mode: "i", controller: pla },
    // php
    "08": { mode: "i", controller: php },
    // plp
    "28": { mode: "i", controller: plp },
    // jmp
    "4c": { mode: "a", controller: jmp },
    "6c": { mode: "(a)", controller: jmp },
    // jsr
    "20": { mode: "a", controller: jsr },
    // rts
    "60": { mode: "i", controller: rts },
    // rti
    "40": { mode: "i", controller: rti },
    // clc
    "18": { mode: "i", controller: clc },
    // sec
    "38": { mode: "i", controller: sec },
    // cld
    "d8": { mode: "i", controller: cld },
    // sed
    "f8": { mode: "i", controller: sed },
    // cli
    "58": { mode: "i", controller: cli },
    // sei
    "78": { mode: "i", controller: sei },
    // clv
    "b8": { mode: "i", controller: clv },
    // brk
    "00": { mode: "i", controller: brk }
};