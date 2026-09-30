import styles from "./styles.module.css"

import data from "@/data/schedule.json"

import { getHeader } from "@/utils/helpers";

import ScheduleTable from "@/components/scheduleTable";


export default function Page() {

  return (
    <main>
      {getHeader(styles.header, data.name)}
      <ScheduleTable style={styles.scheduleTable} days={data.days} schedule={data.schedule}/>
    </main>
  );
}

