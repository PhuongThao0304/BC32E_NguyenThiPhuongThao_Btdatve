import React, { Component } from 'react'
import { connect } from 'react-redux'
import { huyGheAction } from '../Store/Actions/BTDatVeAction'

class Thongtinghe extends Component {

  huyChonGhe = (soGhe) => {
    this.props.dispatch (huyGheAction(soGhe))

  }

  render() {
    return (

      <div>
        <div className='mt-4 text-left'>
          <button className='gheDuocChon'></button> <span className='text-light' style={{ fontSize: '20px', color: 'white' }
          }>Ghế đã đặt</span>
          <br />
          <button className='gheDangChon'></button> <span className='text-light' style={{ fontSize: '20px', color: 'white' }
          }>Ghế đang chọn</span>
            <br />
          <button className='ghe ml-0'></button> <span className='text-light' style={{ fontSize: '20px', color: 'white' }
          }>Ghế chưa đặt</span>
          <br />
        </div>
        <div className='mt-5' >
          <table className="table" border={'2'}>
            <thead>
              <tr className='font-weight-bold' style={{color:'white', fontSize:'25px'}}>
                <th>Số ghế</th>
                <th>Giá</th>
                <th>Huỷ</th>
              </tr>
              {/* <tr className='font-weight-bold' style={{color:'yellow'}}>
                <th>Số ghế</th>
                <th>Giá</th>
                <th>Hàng</th>
              </tr>
              <tr className='font-weight-bold' style={{color:'yellow'}}>
                <th>Số ghế</th>
                <th>Giá</th>
                <th>Hàng</th>
              </tr> */}
              
            </thead>
            <tbody>
              {this.props.danhsachGheDangDat.map((gheDangChon,index) =>{
                return (<tr className='font-weight-bold' style={{color:'yellow'}} key={index}>
                <td>{gheDangChon.soGhe}</td>
                <td>{gheDangChon.gia}</td>
                <td><button className='btn btn-danger' onClick={() => this.huyChonGhe(gheDangChon.soGhe)}> Huỷ </button></td>
                
              </tr>)
                
              } )}

            </tbody>
            <tfoot>
            <tr>
                <td className='font-weight-bold' style={{color:'white'}}>Tổng tiền</td>
                <td className='font-weight-bold' style={{color:'yellow'}}>{this.props.danhsachGheDangDat.reduce(((tongTien,gheDangChon) => {
                  return (tongTien += gheDangChon.gia)
                  
                  }),0)}</td>
                <td></td>
              </tr>
            </tfoot>
          </table>

        </div>

      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
      danhsachGheDangDat: state.BaiTapDatVe.danhsachGheDangDat
  }
}


export default connect(mapStateToProps) (Thongtinghe)
