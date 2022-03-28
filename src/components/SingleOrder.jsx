import React, { useState } from "react";

const SingleOrder = ({ order }) => {
        const [category, setCategory] = useState("Shisha");
        const catSetter = (cat) => {
                setCategory(cat);
        };
        return (
                <div className="flex min-h-screen">
                        <div className="w-[50vw]  bg-white">
                                <div className="flex flex-col">
                                        <div className="w-[100%] h-[5vh] bg-slate-500 flex">
                                                <button
                                                        className="w-[4.5vh] h-[4.5vh] border-2 border-black text-black bg-white font-bold text-center"
                                                        onClick={() => {
                                                                catSetter("Shisha");
                                                        }}
                                                >
                                                        Shisha
                                                </button>
                                                <button
                                                        className="w-[4.5vh] h-[4.5vh] border-2 border-black text-black bg-white font-bold text-center"
                                                        onClick={() => {
                                                                catSetter("Non-alcoholic");
                                                        }}
                                                >
                                                        Non-alc
                                                </button>
                                                <button
                                                        className="w-[4.5vh] h-[4.5vh] border-2 border-black text-black bg-white font-bold text-center"
                                                        onClick={() => {
                                                                catSetter("Beer-Wine-Cider");
                                                        }}
                                                >
                                                        BWC
                                                </button>
                                                <button
                                                        className="w-[4.5vh] h-[4.5vh] border-2 border-black text-black bg-white font-bold text-center"
                                                        onClick={() => {
                                                                catSetter("Shisha");
                                                        }}
                                                >
                                                        Shisha
                                                </button>
                                                <button
                                                        className="w-[4.5vh] h-[4.5vh] border-2 border-black text-black bg-white font-bold text-center"
                                                        onClick={() => {
                                                                catSetter("Shisha");
                                                        }}
                                                >
                                                        Shisha
                                                </button>
                                                <button
                                                        className="w-[4.5vh] h-[4.5vh] border-2 border-black text-black bg-white font-bold text-center"
                                                        onClick={() => {
                                                                catSetter("Other");
                                                        }}
                                                >
                                                        Other
                                                </button>
                                        </div>
                                </div>
                        </div>
                        <div className="w-[20vw] h-auto bg-black"></div>
                        <div className="w-[15vw] h-auto bg-white"></div>
                        <div className="w-[15vw] h-auto bg-black"></div>
                </div>
        );
};

export default SingleOrder;
