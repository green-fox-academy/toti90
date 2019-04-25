'use strict';

import math from "mathjs";

export function add(a: number, b: number): number {
  return a+b;
}

export function maxOfThree(a: number, b: number, c: number): number {
  return Math.max(a,b,c)
};

export function median(pool: number[]): number {
  return math.median(...pool)
}

export function isVowel(character: string): boolean {
  return ['a', 'e', 'i', 'o', 'u'].some(vowel => vowel === character);
}

export function translate(hungarian: string): string {
  let teve = hungarian;
  let length = teve.length;
  let result = ""

  for (let i = 0; i < length; i++) {
    let c = teve[i];
    if (isVowel(c)) {
      result += `${c}v${c}`
    } else (result += c)
  }
  return result;
}