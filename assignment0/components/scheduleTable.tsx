import ScheduleTableBody from "./scheduleTableBody";
import ScheduleTableHead from "./scheduleTableHead";


export default function ScheduleTable(props: { style: string; days: string[]; schedule: { [time: string]: string[]; }; }) {
    return (
        <table className={props.style}>
            <ScheduleTableHead days={props.days} />
            <ScheduleTableBody schedule={props.schedule} />
        </table>
    );
}
