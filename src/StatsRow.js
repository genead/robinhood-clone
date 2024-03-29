import React from "react";
import StockChart from './stock.svg'
import './ StatsRow.css'
import { db } from "./firebase";

function StatsRow(props) {
    //   console.log(props, "what is in props here?");
    // (currentPrice - openPrice)/openPrice
    const percentage = ((props.price - props.openPrice) / props.openPrice) * 100;

    const buyStocks = () => {
        console.log('buy', props.name);
        db
            .collection('myStocks')
            .where("ticker", "==", props.name)
            .get()
            .then((querySnapshot) => {
                if (!querySnapshot.empty) {
                    // update the record

                    querySnapshot.forEach(function (doc) {
                        db
                            .collection('myStocks')
                            .doc(doc.id)
                            .update({
                                shares: doc.data().shares += 1
                            })
                        console.log(doc.id, "=>", doc.data);
                    })
                } else {
                    //Add a new record
                    db
                        .collection('myStocks')
                        .add({
                            ticker: props.name,
                            shares: 1
                        })
                    console.log('Not available')
                }

            })
    }
    return (
        <div className="row" onClick={buyStocks}>
            <div className="row__intro">
                <h1>{props?.name}</h1>
                <p>{props.volume &&
                    (props.volume + " shares")
                }</p>
            </div>
            <div className="row__chart">
                <img src={StockChart} height={16} alt='stocks-images' />
            </div>
            <div className="row__numbers">
                <p className="row__price">{props.price}</p>
                <p className="row__percentage"> +{Number(percentage).toFixed(2)}%</p>
            </div>
        </div>
    );
}

export default StatsRow;
