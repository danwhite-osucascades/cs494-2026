export default function ScheduleTableHead(props: {days: string[]}) {
    return (
        <thead>
            <tr>
                <th>Time</th>
                {props.days.map((day, i) => (
                    <th key={i}>{day}</th>
                ))}
            </tr>
        </thead>
    )
}