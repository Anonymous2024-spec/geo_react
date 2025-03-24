import { create } from "zustand";

export const useBearStore = create((set) => ({
  bears: 0,
  increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
}));

// create a store of a counter(store_counter)
// should have an increase and decrease mtds

// create a store of an obj(user),
// mtd to update user's name and age, and also to logout a user
// users: {name: '', age:0, loggedIn:false},
