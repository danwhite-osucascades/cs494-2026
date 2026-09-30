export default function ScheduleTable(props: {style: string, days: string[], schedule: any}) {
  return (
    <table className={props.style}>
      <thead>
        <tr>
          <th>Time</th>
          {
            props.days.map((day, i) => (
              <th key={i}>{day}</th>
            ))
          }
        </tr>
      </thead>
      <tbody>
        {
          Object.entries(props.schedule).map((entry, i) => (
            <tr key={i}>
              <td>{entry[0]}</td>
              {entry[1].map((activity, j) => (
                <td key={j}>{activity}</td>
              ))}
            </tr>
          ))
        }
      </tbody>
    </table>
  )
}
