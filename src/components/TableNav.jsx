import React from "react";
import { Link } from "react-router-dom";

const TableNav = () => {
        return (
                <div className="w-screen bg-slate-500 text-white font-bold flex items-center justify-center">
                        <div className="m-4 ">TABLES:</div>
                        <div className="m-4">
                                <Link to="/table1">ONE</Link>
                        </div>
                        <div className="m-4">
                                <Link to="/table2">TWO</Link>
                        </div>
                        <div className="m-4">
                                <Link to="/table3">THREE</Link>
                        </div>
                        <div className="m-4">
                                <Link to="/table4">FOUR</Link>
                        </div>
                        <div className="m-4">
                                <Link to="/table5">FIVE</Link>
                        </div>
                        <div className="m-4">
                                <Link to="/table6">SIX</Link>
                        </div>
                </div>
        );
};

export default TableNav;
