import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import SingleOrder from "./SingleOrder";

const Order = ({ tableid, fetchOrdersFromTable, orderNames }) => {
        const addOrder = async () => {
                const orderid = uuidv4();
                const newOrder = {
                        tableid: tableid,
                        orderid: orderid,
                        done: false,
                };
                console.log(newOrder);
                await axios.post("http://localhost:3001/ordername", newOrder);
                fetchOrdersFromTable();
        };
        return (
                <Router>
                        <div className="w-screen flex flex-col justify-center items-center border-2">
                                <div className="w-screen bg-slate-500 text-white font-bold flex items-center justify-center">
                                        <button
                                                onClick={addOrder}
                                                className="m-4 border-2 border-green-500 font-bold p-2 text-green-500"
                                        >
                                                ADD NEW ORDER
                                        </button>
                                        {orderNames.map((order, index) => {
                                                const path = `/orders/${order.orderid}`;
                                                return (
                                                        order.tableid === tableid &&
                                                        !order.done && (
                                                                <div
                                                                        key={order.orderid + tableid}
                                                                        className="m-2 border-2 border-white p-2"
                                                                >
                                                                        <Link to={path}>ORDER {index}</Link>
                                                                </div>
                                                        )
                                                );
                                        })}
                                </div>
                        </div>
                        <Switch>
                                {orderNames.map((order) => {
                                        const path = `/orders/${order.orderid}`;
                                        return (
                                                <Route exact path={path} key={order.orderid}>
                                                        <SingleOrder order={order} />
                                                </Route>
                                        );
                                })}
                        </Switch>
                </Router>
        );
};

export default Order;
