import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import axios from "axios";
import Order from "./Order";
import TableNav from "./TableNav";

const Orders = () => {
        const [orderNames, setOrderNames] = useState([]);
        const fetchOrdersFromTable = async () => {
                await axios.get(`http://localhost:3001/ordername`).then((res) => {
                        setOrderNames(res.data);
                        console.log(res.data);
                });
        };
        useEffect(() => {
                fetchOrdersFromTable();
        }, []);
        return (
                <Router>
                        <TableNav />
                        <Switch>
                                <Route path="/table1">
                                        <Order
                                                tableid={1}
                                                fetchOrdersFromTable={fetchOrdersFromTable}
                                                orderNames={orderNames}
                                        />
                                </Route>
                                <Route path="/table2">
                                        <Order
                                                tableid={2}
                                                fetchOrdersFromTable={fetchOrdersFromTable}
                                                orderNames={orderNames}
                                        />
                                </Route>
                                <Route path="/table3">
                                        <Order
                                                tableid={3}
                                                fetchOrdersFromTable={fetchOrdersFromTable}
                                                orderNames={orderNames}
                                        />
                                </Route>
                                <Route path="/table4">
                                        <Order
                                                tableid={4}
                                                fetchOrdersFromTable={fetchOrdersFromTable}
                                                orderNames={orderNames}
                                        />
                                </Route>
                                <Route path="/table5">
                                        <Order
                                                tableid={5}
                                                fetchOrdersFromTable={fetchOrdersFromTable}
                                                orderNames={orderNames}
                                        />
                                </Route>
                                <Route path="/table6">
                                        <Order
                                                tableid={6}
                                                fetchOrdersFromTable={fetchOrdersFromTable}
                                                orderNames={orderNames}
                                        />
                                </Route>
                        </Switch>
                </Router>
        );
};

export default Orders;
