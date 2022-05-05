import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../app/rootreducer";

interface Birb {
  name: string;
  role: string;
  strenght: string[];
  weakness: string[];
}

export interface Geo {
  lat: string;
  lng: string;
}

export interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: Geo;
}

export interface Company {
  name: string;
  catchPhrase: string;
  bs: string;
}

export interface Target {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
  company: Company;
}

const randomBirb: Birb = {
  name: "",
  role: "",
  strenght: [],
  weakness: [],
};
interface InitialSliceState {
  birb: Birb[];
  target: Target[];
}
const initialBirbiaState: InitialSliceState = {
  birb: [],
  target: [],
};

const fetchTarget = createAsyncThunk("ilnome", async () => {
  try {
    let response = await fetch("https://jsonplaceholder.typicode.com/users");
    return response.json();
  } catch (err) {
    return err as string;
  }
});

const slice01 = createSlice({
  name: "birbia",
  initialState: initialBirbiaState,
  reducers: {},
});

export default slice01.reducer;

/*
example of an api call async to an endpoint                                              out             in              state
export const fetchInventory = createAsyncThunk<ProductType[], void, { state: RootState }>(
    'fetchItems', async () => {
        try {
            let response = await fetch('https://jsonplaceholder.typicode.com/users')
            return response.json()
        } catch (err) {
            return err as string
        }
    }
)
*/
