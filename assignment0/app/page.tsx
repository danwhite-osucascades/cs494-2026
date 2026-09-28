import styles from "./styles.module.css"

import data from "../data/schedule.json"

export default function Page() {
  
console.log(data.name)

  return (
    <main>
      <div className={styles.header}>{data.name}'s Schedule</div>
      <table className={styles.scheduleTable}>
        <thead>
          <tr>
            <th>Time</th>
            {
              data.days.map((day, i)=>(
                <th key={i}>{day}</th>
              ))
            }
          </tr>
        </thead>
        <tbody>
            {
              Object.entries(data.schedule).map((entry, i)=>(
                <tr key={i}>
                  <td>{entry[0]}</td>
                  {entry[1].map((activity, j)=>(
                    <td key={j}>{activity}</td>
                  ))}
                </tr>
              ))
            }
        </tbody>
      </table>
    </main>
  );
}
