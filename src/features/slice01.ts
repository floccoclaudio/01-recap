import { createSlice } from "@reduxjs/toolkit";

interface Birb {
    name:string,
    role:string,
    strenght:string[],
    weakness:string[]
}

const randomBirb: Birb = {
    name: "",
    role: "",
    strenght: [],
    weakness: []
}

const initialBirbiaState: Birb[] = []
 const slice01 = createSlice({
    name: "birbia",
    initialState: initialBirbiaState,
    reducers: {

    }
})

export default slice01.reducer