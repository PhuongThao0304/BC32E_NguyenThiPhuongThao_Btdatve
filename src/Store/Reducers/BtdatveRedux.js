import { ChonGhe, HuyGhe } from "../Types/BTDatVeType"

const stateDefault = {
    danhsachGheDangDat: [

        // {soGhe:"A1",gia:75000,daDat:false},
        // {soGhe:"A2",gia:75000,daDat:false},
        // {soGhe:"B5",gia:75000,daDat:false},

    ]
}

export const BaiTapDatVe = (state = stateDefault, action) => {
    // return {...state}
    switch (action.type) {
        case ChonGhe: {
            const data = [ ...state.danhsachGheDangDat]
            let index = data.findIndex((ghe) => ghe.soGhe === action.payload.soGhe)
            if (index !== -1) {
                data.splice(index,1)
                
            }
            else {
                data.push(action.payload)
               
            }
            return {...state, danhsachGheDangDat: data}


        }
        case HuyGhe: {
            const data = [ ...state.danhsachGheDangDat]
            let index = data.findIndex((ghe) => ghe.soGhe === action.payload)
            
             data.splice(index,1)
            
            return {...state, danhsachGheDangDat: data}
        }

        default: return { ...state}
    }
}

