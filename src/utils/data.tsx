/** @format */

import { MenuType, HeroType, ServiceType } from '../types/types'

export const menu: MenuType = [
  { id: 1, name: 'Accueil', link: '/accueil' },
  { id: 2, name: 'Services', link: '/services' },
  { id: 3, name: 'Notre Entreprise', link: '/notreentreprise' },
  { id: 4, name: 'Contact', link: '/contact' }
]

export const hero: HeroType = [
  {
    id: 1,
    title: 'cafard',
    img: '/cafard.jpg'
  },
  {
    id: 2,
    title: 'rat',
    img: '/rat.jpg'
  },
  {
    id: 3,
    title: 'punaise',
    img: '/punaise.jpg'
  }
]

export const service: ServiceType = [
  {
    id: 1,
    img: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWFuZ3J5Ij48Y2lyY2xlIGN4PSIxMiIgY3k9IjEyIiByPSIxMCIvPjxwYXRoIGQ9Ik0xNiAxNnMtMS41LTItNC0yLTQgMi00IDIiLz48cGF0aCBkPSJNNy41IDggMTAgOSIvPjxwYXRoIGQ9Im0xNCA5IDIuNS0xIi8+PHBhdGggZD0iTTkgMTBoMCIvPjxwYXRoIGQ9Ik0xNSAxMGgwIi8+PC9zdmc+',
    title: 'Nuisibles',
    desc: 'Traitement des nuisibles'
  },
  {
    id: 2,
    img: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWJpcmQiPjxwYXRoIGQ9Ik0xNiA3aC4wMSIvPjxwYXRoIGQ9Ik0zLjQgMThIMTJhOCA4IDAgMCAwIDgtOFY3YTQgNCAwIDAgMC03LjI4LTIuM0wyIDIwIi8+PHBhdGggZD0ibTIwIDcgMiAuNS0yIC41Ii8+PHBhdGggZD0iTTEwIDE4djMiLz48cGF0aCBkPSJNMTQgMTcuNzVWMjEiLz48cGF0aCBkPSJNNyAxOGE2IDYgMCAwIDAgMy44NC0xMC42MSIvPjwvc3ZnPg==',
    title: 'Pigeons',
    desc: 'Dépigeonnage'
  },
  {
    id: 3,
    img: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWJlZC1kb3VibGUiPjxwYXRoIGQ9Ik0yIDIwdi04YTIgMiAwIDAgMSAyLTJoMTZhMiAyIDAgMCAxIDIgMnY4Ii8+PHBhdGggZD0iTTQgMTBWNmEyIDIgMCAwIDEgMi0yaDEyYTIgMiAwIDAgMSAyIDJ2NCIvPjxwYXRoIGQ9Ik0xMiA0djYiLz48cGF0aCBkPSJNMiAxOGgyMCIvPjwvc3ZnPg==',
    title: 'Punaise de lit',
    desc: 'Eradication des punaises de lit'
  },
  {
    id: 4,
    img: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWJ1ZyI+PHBhdGggZD0ibTggMiAxLjg4IDEuODgiLz48cGF0aCBkPSJNMTQuMTIgMy44OCAxNiAyIi8+PHBhdGggZD0iTTkgNy4xM3YtMWEzLjAwMyAzLjAwMyAwIDEgMSA2IDB2MSIvPjxwYXRoIGQ9Ik0xMiAyMGMtMy4zIDAtNi0yLjctNi02di0zYTQgNCAwIDAgMSA0LTRoNGE0IDQgMCAwIDEgNCA0djNjMCAzLjMtMi43IDYtNiA2Ii8+PHBhdGggZD0iTTEyIDIwdi05Ii8+PHBhdGggZD0iTTYuNTMgOUM0LjYgOC44IDMgNy4xIDMgNSIvPjxwYXRoIGQ9Ik02IDEzSDIiLz48cGF0aCBkPSJNMyAyMWMwLTIuMSAxLjctMy45IDMuOC00Ii8+PHBhdGggZD0iTTIwLjk3IDVjMCAyLjEtMS42IDMuOC0zLjUgNCIvPjxwYXRoIGQ9Ik0yMiAxM2gtNCIvPjxwYXRoIGQ9Ik0xNy4yIDE3YzIuMS4xIDMuOCAxLjkgMy44IDQiLz48L3N2Zz4=',
    title: 'Cafards',
    desc: 'Extermination des cafards'
  },
  {
    id: 5,
    img: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLXNjaG9vbC0yIj48Y2lyY2xlIGN4PSIxMiIgY3k9IjEwIiByPSIxIi8+PHBhdGggZD0iTTIyIDIwVjhoLTRsLTYtNC02IDRIMnYxMmEyIDIgMCAwIDAgMiAyaDE2YTIgMiAwIDAgMCAyLTJaIi8+PHBhdGggZD0iTTYgMTd2LjAxIi8+PHBhdGggZD0iTTYgMTN2LjAxIi8+PHBhdGggZD0iTTE4IDE3di4wMSIvPjxwYXRoIGQ9Ik0xOCAxM3YuMDEiLz48cGF0aCBkPSJNMTQgMjJ2LTVhMiAyIDAgMCAwLTItMnYwYTIgMiAwIDAgMC0yIDJ2NSIvPjwvc3ZnPg==',
    title: 'Frelons ou guêpes',
    desc: 'Elimination des nids de guêpes ou frelons'
  },
  {
    id: 6,
    img: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLXJhdCI+PHBhdGggZD0iTTE3IDVjMC0xLjctMS4zLTMtMy0zcy0zIDEuMy0zIDNjMCAuOC4zIDEuNS44IDJIMTFjLTMuOSAwLTcgMy4xLTcgN3YwYzAgMi4yIDEuOCA0IDQgNCIvPjxwYXRoIGQ9Ik0xNi44IDMuOWMuMy0uMy42LS41IDEtLjcgMS41LS42IDMuMy4xIDMuOSAxLjYuNiAxLjUtLjEgMy4zLTEuNiAzLjlsMS42IDIuOGMuMi4zLjIuNy4yIDEtLjIuOC0uOSAxLjItMS43IDEuMSAwIDAtMS42LS4zLTIuNy0uNkgxN2MtMS43IDAtMyAxLjMtMyAzIi8+PHBhdGggZD0iTTEzLjIgMThhMyAzIDAgMCAwLTIuMi01Ii8+PHBhdGggZD0iTTEzIDIySDRhMiAyIDAgMCAxIDAtNGgxMiIvPjxwYXRoIGQ9Ik0xNiA5aC4wMSIvPjwvc3ZnPg==',
    title: 'Rongeurs',
    desc: `Dératisation`
  },
  {
    id: 7,
    img: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLXVubGluayI+PHBhdGggZD0ibTE4Ljg0IDEyLjI1IDEuNzItMS43MWgtLjAyYTUuMDA0IDUuMDA0IDAgMCAwLS4xMi03LjA3IDUuMDA2IDUuMDA2IDAgMCAwLTYuOTUgMGwtMS43MiAxLjcxIi8+PHBhdGggZD0ibTUuMTcgMTEuNzUtMS43MSAxLjcxYTUuMDA0IDUuMDA0IDAgMCAwIC4xMiA3LjA3IDUuMDA2IDUuMDA2IDAgMCAwIDYuOTUgMGwxLjcxLTEuNzEiLz48bGluZSB4MT0iOCIgeDI9IjgiIHkxPSIyIiB5Mj0iNSIvPjxsaW5lIHgxPSIyIiB4Mj0iNSIgeTE9IjgiIHkyPSI4Ii8+PGxpbmUgeDE9IjE2IiB4Mj0iMTYiIHkxPSIxOSIgeTI9IjIyIi8+PGxpbmUgeDE9IjE5IiB4Mj0iMjIiIHkxPSIxNiIgeTI9IjE2Ii8+PC9zdmc+',
    title: 'Fourmi',
    desc: `Traitement contre les fourmis`
  },
  {
    id: 8,
    img: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLXBhdy1wcmludCI+PGNpcmNsZSBjeD0iMTEiIGN5PSI0IiByPSIyIi8+PGNpcmNsZSBjeD0iMTgiIGN5PSI4IiByPSIyIi8+PGNpcmNsZSBjeD0iMjAiIGN5PSIxNiIgcj0iMiIvPjxwYXRoIGQ9Ik05IDEwYTUgNSAwIDAgMSA1IDV2My41YTMuNSAzLjUgMCAwIDEtNi44NCAxLjA0NVE2LjUyIDE3LjQ4IDQuNDYgMTYuODRBMy41IDMuNSAwIDAgMSA1LjUgMTBaIi8+PC9zdmc+',
    title: 'Autres',
    desc: `Tout autres types d'insectes`
  }
]
