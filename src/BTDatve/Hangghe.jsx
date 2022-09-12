import React, { Component } from 'react'
import { connect } from 'react-redux';
import { chonGheAction } from '../Store/Actions/BTDatVeAction';


class Hangghe extends Component {
    //hàm render ra hàng ghế 
    renderGhe = () => {
        return (
            // console.log(this.props.hangGhe.danhSachGhe)


            this.props.hangGhe.danhSachGhe.map((ghe, index) => {
                //trạng thái ghế bị người khác đặt rồi 
                let cssgheDaDat = ''
                let disabled = false;
                if (ghe.daDat) {
                    cssgheDaDat = 'gheDuocChon'
                    disabled = true
                }
                //xét trạng thái ghế đang đặt => thêm css khi click vào nó hiện mào xanh
                let cssgheDangDat = '';
                let indexgheDangDat = this.props.danhsachGheDangDat.findIndex(itemGhe => itemGhe.soGhe === ghe.soGhe)
                //nếu trong mảng ko có thì css màu xanh, còn có rồi thì xoá khỏi mảng

                if (indexgheDangDat !== -1) {
                    cssgheDangDat = 'gheDangChon'
                }



                return <button disabled={disabled} onClick={() => this.props.chonGhe(ghe)
                } className={`ghe ${cssgheDaDat} ${cssgheDangDat}`} key={index}>
                    {ghe.soGhe}
                </button>

            })
        )
    }
    renderSoHang = () => {
        return this.props.hangGhe.danhSachGhe.map((hang, index) => {
            return (
                <button className='rowNumber' >{hang.soGhe}</button>
            )
        })
    }
    //renderfull hàng ghế giống giao diện (gồm hàng số thứ tự và hàng ghế: a,b,c)
    renderHangGhe = () => {
        if (this.props.soHangGhe === 0) {
            return (
                <div>
                    {this.props.hangGhe.hang}
                    {this.renderSoHang()}
                </div>
            )

        }

        else {
            return (
                <div>
                    {this.props.hangGhe.hang}
                    {this.renderGhe()}

                </div>
            )

        }

    }

    render() {
        console.log(this.props)

        return (

            <div className='ml-4 text-light font-weight-bold text-center' style={{ fontSize: '25px' }}>
                {this.renderHangGhe()}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        danhsachGheDangDat: state.BaiTapDatVe.danhsachGheDangDat
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        //chọn ghế 
        chonGhe: (gheDuocChon) => {
            dispatch(chonGheAction(gheDuocChon))
        }


    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Hangghe)

