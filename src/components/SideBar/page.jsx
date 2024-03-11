import Link from 'next/link'
import "../../app/framework.css";
import './Style.SideBar.css'

export default function page() {

  return (
    <div class="sidebar bg-white p-20 p-relative ">
      <h3 class="mt-0">My Dashboard</h3>
      <ul>
        <li>
          <Link class="active d-flex align-center fs-14 c-black rad-6 p-10" href="/">
            <i class="ri-bar-chart-2-line"></i>
            <span>Index</span>
          </Link>
        </li>
        <li>
          <Link class=" d-flex align-center fs-14 c-black rad-6 p-10" href="/dashboard">
            <i class="ri-line-chart-line"></i>
            <span>Dashboard</span>
          </Link>
        </li>
        <li>
          <Link class="d-flex align-center fs-14 c-black rad-6 p-10" href="/settings">
            <i class="ri-settings-3-line"></i>
            <span>Settings</span>
          </Link>
        </li>
        <li>
          <Link class="d-flex align-center fs-14 c-black rad-6 p-10" href="/profile">
            <i class="ri-user-line"></i>
            <span>Profile</span>
          </Link>
        </li>
        <li>
          <Link class="d-flex align-center fs-14 c-black rad-6 p-10" href="/projects">
            <i class="ri-git-branch-line"></i>
            <span>Projects</span>
          </Link>
        </li>
        <li>
          <Link class="d-flex align-center fs-14 c-black rad-6 p-10" href="/courses">
            <i class="ri-graduation-cap-line"></i>
            <span>Courses</span>
          </Link>
        </li>
        <li>
          <Link class="d-flex align-center fs-14 c-black rad-6 p-10" href="/friends">
            <i class="ri-account-circle-line"></i>
            <span>Friends</span>
          </Link>
        </li>
        <li>
          <Link class="d-flex align-center fs-14 c-black rad-6 p-10" href="/files">
            <i class="ri-folder-2-line"></i>
            <span>Files</span>
          </Link>
        </li>
        <li>
          <Link class="d-flex align-center fs-14 c-black rad-6 p-10" href="/plans">
            <i class="ri-bank-card-line"></i>
            <span>Plans</span>
          </Link>
        </li>
      </ul>
    </div>
  )
}
