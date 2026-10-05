export default function ScheduleTableBody(props: { schedule: { [time: string]: string[] } }) {
    return (
        <tbody>
            {Object.entries(props.schedule).map((entry, i) => (
                <tr key={i}>
                    <td>{entry[0]}</td>
                    {entry[1].map((activity, j) => (
                        <td key={j}>{activity}</td>
                    ))}
                </tr>
            ))}
        </tbody>
    )
}