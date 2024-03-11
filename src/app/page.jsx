
import styles from "./page.module.css";
import PieChart from "../components/Charts/Pie-Chart";
import PolarAreaChart from "../components/Charts/Polar-Area-Chart";
export default function Home() {


  return (
    <main className={styles.main}>
      <h2 className="p-10">Analytics</h2>
      <div className={styles.card}>
        <div className={styles.cardItem + " " + styles.cardItem1}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className={styles.svg + " " + styles.svg1}><path d="M6 5v11"></path><path d="M12 5v6"></path>
            <path d="M18 5v14"></path></svg> <div className={styles.Box + " " + styles.Box1}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class=" "><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg></div><h5 class="mt-5 mb-2"><span class="counter-value">15,876</span></h5><p class="text-slate-500 dark:text-slate-200">Total Users</p></div>
        <div className={styles.cardItem + " " + styles.cardItem2}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className={styles.svg + " " + styles.svg2}><path d="M3 6h18"></path><path d="M7 12h10"></path>
          <path d="M10 18h4"></path></svg><div className={styles.Box + " " + styles.Box2}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class=""><path d="M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z"></path><path d="M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"></path><path d="M12 2v2"></path><path d="M12 22v-2"></path><path d="m17 20.66-1-1.73"></path><path d="M11 10.27 7 3.34"></path><path d="m20.66 17-1.73-1"></path><path d="m3.34 7 1.73 1"></path><path d="M14 12h8"></path><path d="M2 12h2"></path><path d="m20.66 7-1.73 1"></path><path d="m3.34 17 1.73-1"></path><path d="m17 3.34-1 1.73"></path><path d="m11 13.73-4 6.93"></path></svg></div><h5 class="mt-5 mb-2"><span class="counter-value">103.15</span>k</h5><p class="text-slate-500 dark:text-slate-200">Sessions</p></div>
        <div className={styles.cardItem + " " + styles.cardItem3}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className={styles.svg + " " + styles.svg3}><path d="M3 6h18"></path><path d="M7 12h10"></path>
          <path d="M10 18h4"></path></svg><div className={styles.Box + " " + styles.Box3}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class=" "><circle cx="8" cy="8" r="6"></circle><path d="M18.09 10.37A6 6 0 1 1 10.34 18"></path><path d="M7 6h1v4"></path><path d="m16.71 13.88.7.71-2.82 2.82"></path></svg></div><h5 class="mt-5 mb-2"><span class="counter-value">1</span>M <span class="counter-value">29</span>sec</h5><p class="text-slate-500 dark:text-slate-200">Avg. Visit Duration</p></div>
        <div className={styles.cardItem + " " + styles.cardItem4}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className={styles.svg + " " + styles.svg4}><path d="M6 5v11"></path><path d="M12 5v6"></path>
          <path d="M18 5v14"></path></svg><div className={styles.Box + " " + styles.Box4}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class=""><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg></div><h5 class="mt-5 mb-2"><span class="counter-value">49.77</span>%</h5><p class="text-slate-500 dark:text-slate-200">Bounce Rate</p></div>
      </div>

      <h2 className="p-10">Chart</h2>
      <div className={styles.content}>
        <div className={styles.PieChart}>
          <h4> Pie Chart</h4>
          <div >
            <PieChart />
          </div>
        </div>
        <div className={styles.PieChart}>
          {/* <h4>User Device</h4> */}
          <h4>Polar Area Chart</h4>
          <div >
            <PolarAreaChart />
          </div>
        </div>
      </div>

    </main>
  );
}
