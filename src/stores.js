import { writable } from "svelte/store";

export const mainBar = [{
  title: "Donations",
  icon: "fas fa-hand-holding-usd fa-3x",
  colour: "color:rgb(153, 196, 74)",
  link: "/#/donations",
}, {
  title: "Candidates",
  icon: "fas fa-clipboard-list fa-3x",
  colour: "color:rgb(63, 122, 139)",
  link: "/#/candidates",
}];

export const navBar = writable({
  bar: [],
});
export const title = writable("");
export const subTitle = writable("");
