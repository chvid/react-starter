import React, { useState } from "react";

import { formatAmount } from "./utils.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faBolt } from "@fortawesome/free-solid-svg-icons";

export const Main = () => {
    const [monthlyIncome, setMonthlyIncome] = useState(20000);
    const [monthlyExpenses, setMonthlyExpenses] = useState(10000);

    const youMayLoan = Math.max(0, ((monthlyIncome - monthlyExpenses) / 0.05) * 12);

    return (
        <section className="section">
            <div className="container">
                <h1 className="title">Priceless Financial Advice</h1>
                <div className="columns">
                    <div className="column">
                        <h2 className="subtitle">
                            <span className="icon has-text-info is-medium">
                                <FontAwesomeIcon icon={faBolt} size="sm" />
                            </span>
                            Your Current Finances
                        </h2>
                        <form>
                            <div className="field">
                                <label className="label">Monthly Income</label>
                                <div className="control">
                                    <input className="input" type="text" placeholder="Monthly Income ..." value={monthlyIncome} onChange={e => setMonthlyIncome(e.target.value)} />
                                </div>
                            </div>
                            <div className="field">
                                <label className="label">Monthly Expenses</label>
                                <div className="control">
                                    <input className="input" type="text" placeholder="Monthly Expenses ..." value={monthlyExpenses} onChange={e => setMonthlyExpenses(e.target.value)} />
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="column">
                        <h2 className="subtitle">
                            <span className="icon has-text-success is-medium">
                                <FontAwesomeIcon icon={faHome} size="sm" />
                            </span>
                            Your Future Finances
                        </h2>
                        <p>You may buy a house for:</p>
                        <p>&nbsp;</p>
                        {youMayLoan > 0 && (
                            <div className="notification is-primary">
                                <h1 className="title">{formatAmount(youMayLoan, 0)}</h1>
                            </div>
                        )}
                        {youMayLoan > 10000000 && <p>Because you are very rich.</p>}
                        {youMayLoan == 0 && (
                            <div className="notification is-warning">
                                <h1 className="title">NOTHING !!!!</h1>
                            </div>
                        )}
                        {youMayLoan < 100000 && <p>Because you are very poor.</p>}

                        {isNaN(youMayLoan) && <div className="notification is-danger">HEY! Rubbish won&#39;t help you at the bank.</div>}
                    </div>
                </div>
            </div>
        </section>
    );
};
