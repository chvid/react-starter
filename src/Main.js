import React from 'react';
import ReactDOM from 'react-dom';

import { formatAmount } from './utils.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faBolt } from '@fortawesome/free-solid-svg-icons'

export class Main extends React.Component {
    constructor() {
        super();
        this.state = {
            monthlyIncome: 20000,
            monthlyExpenses: 12000
        }
    }

    render() {
        const youMayLoan = Math.max(0, (this.state.monthlyIncome - this.state.monthlyExpenses) / 0.05 * 12);

        return (
            <section className="section">
                <div className="container">
                    <h1 className="title">
                        Priceless Financial Advice
                    </h1>
                    <div className="columns">
                        <div className="column">
                            <h2 className="subtitle">
                                <span className="icon has-text-info is-medium"><FontAwesomeIcon icon={faBolt} size="sm"/></span>
                                Your Current Finances
                            </h2>
                            <form>
                                <div className="field">
                                    <label className="label">Monthly Income</label>
                                    <div className="control">
                                        <input
                                            className="input"
                                            type="text"
                                            placeholder="Monthly Income ..."
                                            value={this.state.monthlyIncome}
                                            onChange={(e) => this.setState({ monthlyIncome: e.target.value })}
                                        />
                                    </div>
                                </div>
                                <div className="field">
                                    <label className="label">Monthly Expenses</label>
                                    <div className="control">
                                        <input
                                            className="input"
                                            type="text"
                                            placeholder="Monthly Expenses ..."
                                            value={this.state.monthlyExpenses}
                                            onChange={(e) => this.setState({ monthlyExpenses: e.target.value })}
                                        />
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="column">
                            <h2 className="subtitle">
                                <span className="icon has-text-success is-medium"><FontAwesomeIcon icon={faHome} size="sm"/></span>
                                Your Future Finances
                            </h2>
                            <p>You may buy a house for:</p>
                            <p>&nbsp;</p>
                            {
                                youMayLoan > 0 &&
                                <div className="notification is-primary">
                                    <h1 className="title">{formatAmount(youMayLoan, 0)}</h1>
                                </div>
                            }
                            {youMayLoan > 10000000 && <p>Because you are very rich.</p>}
                            {
                                youMayLoan == 0 &&
                                <div className="notification is-warning">
                                    <h1 className="title">NOTHING !!!!</h1>
                                </div>
                            }
                            {youMayLoan < 100000 && <p>Because you are very poor.</p>}

                            {
                                isNaN(youMayLoan) &&
                                <div className="notification is-danger">HEY! Rubbish won&#39;t help you at the bank.</div>
                            }
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
