//    R E A C T
import React, { Component } from 'react';

//    C O M P O N E N T S
import HeaderWeek from "../../components/HeaderWeek/HeaderWeek";
import HeaderWeekDays from "../../components/HeaderWeekDays/HeaderWeekDays";
import Day from "../../components/Day/Day";

//    M O M E N T . J S
import moment from "moment";

//    S A S S 
import './Week.scss';

class Week extends Component {
    state = {
        curWeek: {},
        nextWeek: {},
        prevWeek: {}
    };

    componentDidMount() {
        this.createState(this.props);
    }

    componentWillReceiveProps(nextProps) {
        this.createState(nextProps, true);
    }

    createState(props) {
        const curWeek =
            props.match.params.year && props.match.params.month && props.match.params.week
                ? `${props.match.params.year}-${props.match.params.month}-${props.match.params.week}`
                : moment().format("YYYY-MM");

        const nextWeek = moment(curWeek)
            .add(1, "WW")
            .format("YYYY-MM");

        const prevWeek = moment(curWeek)
            .subtract(1, "WW")
            .format("YYYY-MM");

        this.setState(
            {
                curWeek: {
                    date: curWeek,
                    name: moment(curWeek).format("MMMM YYYY WW"),
                    days: moment(curWeek).day(),
                    editDay: null
                },
                nextWeek: {
                    date: nextWeek,
                    slug: nextWeek.replace("-", "/")
                },
                prevWeek: {
                    date: prevWeek,
                    slug: prevWeek.replace("-", "/")
                }
            },
            () => {
                console.log(this.state);
            }
        );
    }

    buildDays() {
        const days = [];
        const props = {
            editDay: this.state.curWeek.editDay,
            handleSetEditDay: this.handleSetEditDay
        };

        for (let i = 1; i <= 7; i++) {
            // add leading 0
            let date = `${this.state.curWeek.date}-${("0" + i).slice(-2)}`;
            props["date"] = date;
            props["day"] = i;

            if (i === 1) {
                props["firstDayIndex"] = moment(date)
                    .startOf("month")
                    .format("d");
            } else {
                delete props["firstDayIndex"];
            }
            days.push(<Day key={i} {...props} />);
        }
        return days;
    }

    render() {
        const weekdays = moment.weekdays();
        const days = this.buildDays();

        return (
            <div className="week">
                <HeaderWeek
                    curWeek={this.state.curWeek}
                    nextWeek={this.state.nextWeek}
                    prevWeek={this.state.prevWeek}
                />
                <HeaderWeekDays days={weekdays} />
                <section className="days">{days}</section>
            </div >
        )
    }
}

export default Week;