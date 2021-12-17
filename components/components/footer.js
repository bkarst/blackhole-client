import React from 'react';
import Link from 'next/link'

const footer= () => (
  <footer className="footer-light">
            <div className="container">
                
            </div>
            <div className="subfooter">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="de-flex">
                                <div className="de-flex-col">
                                    <span onClick={()=> window.open("", "_self")}>
                                        <span className="copy">&copy; Copyright 2021 - XRP Army</span>
                                    </span>
                                </div>
                                <div className="de-flex-col">
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
);
export default footer;