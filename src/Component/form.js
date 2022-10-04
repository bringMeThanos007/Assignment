import React, { Component } from 'react';

export class Form extends Component {
  render() {
    return (
      <div style={{backgroundColor:'whitesmoke'}}>
            <div className="d-flex align-items-center flex-column bd-highlight justify-content-center" 
            style={{
            
            height:"450px",
                background: `url("https://img.freepik.com/free-vector/white-background-with-triangle-patterns_1017-18410.jpg?w=1060&t=st=1664810353~exp=1664810953~hmac=287b7aa7f607e01b02cd052d931d7cb5688ebe454a238a489762129f94373960") no-repeat center`,
                backgroundSize:"75% 100%"
                
            
            }}>
                <div className="p-2  mt-2">
                <h2
                style={{fontWeight:"bolder",
                lineHeight:"15px",
                fontSize:"30px"}}>

                Subscribe To Newsletter
                </h2>
                </div>
                <div className="p-2 bd-highlight" style={{
                    color:"#949eb4"
                }}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni eaque,<br />
                       vero ullam nisi assumenda unde est explicabo perspiciatis dolor ipsum</div>
                <div className="p-2 bd-highlight mt-4" style={{
                    width:"370px"
                }}>
                    <form className="d-flex" style={{
                        height:"45px",
                        
                    }}>
                        <input className="form-control" type="search" placeholder="" aria-label="Search" />
                            <button className="text-center btn-outline-none btn-sm" type="submit" style={{borderRadius:"0px 10px 10px 0px",
                            backgroundColor:"#6149cd",
                            width:"120px",
                            height:'37px',
                            border:"none",
                            boxShadow:"-5px 15px 50px 0px #6149cd",
                            color:"white",
                            fontWeight:"lighter"
                        }}>Submit &rarr;</button>
                    </form>
                </div>
            </div>
        
      </div>
    )
  }
}

export default Form
