import { ChonGhe, HuyGhe } from "../Types/BTDatVeType"

export const chonGheAction = (ghe) => {
    return {
        type: ChonGhe,
        payload: ghe
    }
}

export const huyGheAction = (soGhe) => {
    return {
        type: HuyGhe,
        payload: soGhe
    }
}
