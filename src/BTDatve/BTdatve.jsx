import React, { Component } from 'react'
import './BaiTapBookingTicket.css'
import Hangghe from './Hangghe'
import Thongtinghe from './Thongtinghe'
import danhSachGhe from './danhSachGhe.json'

export default class BTdatve extends Component {
    renderHangghe = () => {
        return (
            danhSachGhe.map((hangGhe,index) =>{
                return (
                    <div key={index} >
                         <Hangghe hangGhe = {hangGhe} soHangGhe={index}/>
                    </div>
                    
                )
            } )
        )
    }


    render() {
        return (
            <div className='BTdatve' style={{ position: 'fixed', width: '100%', height: '100%',backgroundImage: "url('./image/bgmovie.jpg')", backgroundSize: '100%' }}>
                <div className='overlay' style={{ width: '100%', height: '100%', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>

                    <div className='row'>
                        <div className='col-8'>
                            <div className='font-weight-bold mt-' style={{ fontSize: '30px', color: 'yellow' }}>ĐẶT VÉ XEM PHIM CYBERLEARN.VN</div>
                            <div className='font-weight-bold' style={{ color: 'white', fontSize: '30px' }}>Màn hình</div>
                            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                <div className='screen'>
                                </div>
                             
                            </div>
                            {this.renderHangghe()}
                           

                        </div>
                        <div className='col-4'>
                            <div className='font-weight-bold mt-4' style={{ fontSize: '25px', color: 'white' }}>DANH SÁCH GHẾ BẠN CHỌN</div>
                            <Thongtinghe/>
                        </div>
                    </div>
                </div>




            </div>
        )
    }
}
